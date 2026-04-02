import { auth, db } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import {
  doc, getDoc, setDoc, updateDoc
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

// Identificador de página basado en el nombre del archivo
const pageId = location.pathname.split('/').pop().replace('.html', '') || 'index';

// ── Estilos ────────────────────────────────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  #auth-wrap { margin-left: auto; display: flex; align-items: center; gap: 6px; }
  #auth-user { font-size: 11px; color: #888; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  #auth-btn { font-size: 12px; color: #185FA5; background: #E6F1FB; border: none; border-radius: 6px; padding: 4px 10px; cursor: pointer; font-family: inherit; font-weight: 500; white-space: nowrap; }
  #auth-btn:hover { background: #d0e6f7; }

  #auth-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.35); z-index: 200; align-items: center; justify-content: center; }
  #auth-overlay.open { display: flex; }
  #auth-modal { background: #fff; border-radius: 12px; border: 0.5px solid rgba(0,0,0,0.15); padding: 24px; width: 320px; max-width: 90vw; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
  #auth-modal-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
  #auth-modal h2 { font-size: 16px; font-weight: 500; margin: 0; font-family: system-ui, sans-serif; }
  #auth-modal .sub { font-size: 12px; color: #888; margin: 0 0 16px; font-family: system-ui, sans-serif; }
  #auth-close { background: none; border: none; font-size: 20px; cursor: pointer; color: #aaa; line-height: 1; padding: 0; }
  #auth-close:hover { color: #555; }
  .auth-tabs { display: flex; gap: 4px; margin-bottom: 16px; }
  .auth-tab { font-size: 12px; padding: 4px 12px; border-radius: 6px; border: 0.5px solid rgba(0,0,0,0.15); cursor: pointer; background: #fff; font-family: system-ui, sans-serif; color: #666; }
  .auth-tab.active { background: #E6F1FB; color: #0C447C; font-weight: 500; border-color: #B5D4F4; }
  .auth-field { margin-bottom: 10px; }
  .auth-field label { display: block; font-size: 11px; color: #666; margin-bottom: 3px; font-weight: 500; font-family: system-ui, sans-serif; }
  .auth-field input { width: 100%; border: 0.5px solid rgba(0,0,0,0.2); border-radius: 6px; padding: 7px 10px; font-size: 13px; font-family: system-ui, sans-serif; outline: none; box-sizing: border-box; }
  .auth-field input:focus { border-color: #378ADD; }
  #auth-error { font-size: 11px; color: #712B13; background: #FAECE7; border-radius: 6px; padding: 7px 10px; margin-bottom: 10px; display: none; font-family: system-ui, sans-serif; }
  #auth-submit { width: 100%; background: #185FA5; color: #fff; border: none; border-radius: 6px; padding: 9px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: system-ui, sans-serif; }
  #auth-submit:hover { background: #0C447C; }

  .ej-done .ejercicio-head { background: #E1F5EE !important; border-bottom-color: #9FE1CB !important; }
  .ej-done .ejercicio-head span { color: #085041 !important; }
  .ej-check { float: right; color: #0F6E56; font-weight: 700; margin-left: 6px; }
`;
document.head.appendChild(style);

// ── Modal HTML ─────────────────────────────────────────────────────────────
const overlay = document.createElement('div');
overlay.id = 'auth-overlay';
overlay.innerHTML = `
  <div id="auth-modal">
    <div id="auth-modal-top">
      <h2>Acceder</h2>
      <button id="auth-close">&times;</button>
    </div>
    <p class="sub">Guarda tu progreso entre dispositivos</p>
    <div class="auth-tabs">
      <button class="auth-tab active" data-tab="login">Iniciar sesión</button>
      <button class="auth-tab" data-tab="register">Registrarse</button>
    </div>
    <div id="auth-error"></div>
    <div class="auth-field">
      <label>Correo electrónico</label>
      <input id="auth-email" type="email" placeholder="tu@correo.com" autocomplete="email">
    </div>
    <div class="auth-field">
      <label>Contraseña</label>
      <input id="auth-password" type="password" placeholder="Mínimo 6 caracteres" autocomplete="current-password">
    </div>
    <button id="auth-submit">Iniciar sesión</button>
  </div>
`;
document.body.appendChild(overlay);

// ── Botón auth en el nav ───────────────────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  const wrap = document.createElement('span');
  wrap.id = 'auth-wrap';
  wrap.innerHTML = `<span id="auth-user"></span><button id="auth-btn">Iniciar sesión</button>`;
  nav.appendChild(wrap);
}

// ── Tabs del modal ─────────────────────────────────────────────────────────
let currentTab = 'login';
overlay.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    currentTab = tab.dataset.tab;
    overlay.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t === tab));
    document.getElementById('auth-submit').textContent =
      currentTab === 'login' ? 'Iniciar sesión' : 'Registrarse';
    document.getElementById('auth-error').style.display = 'none';
  });
});

// ── Cerrar modal ───────────────────────────────────────────────────────────
document.getElementById('auth-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() { overlay.classList.remove('open'); }

// ── Abrir modal / cerrar sesión ────────────────────────────────────────────
document.getElementById('auth-btn').addEventListener('click', () => {
  if (auth.currentUser) {
    signOut(auth);
  } else {
    document.getElementById('auth-error').style.display = 'none';
    document.getElementById('auth-email').value = '';
    document.getElementById('auth-password').value = '';
    overlay.classList.add('open');
    document.getElementById('auth-email').focus();
  }
});

// ── Submit login / registro ────────────────────────────────────────────────
document.getElementById('auth-submit').addEventListener('click', handleSubmit);
document.getElementById('auth-password').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSubmit();
});

async function handleSubmit() {
  const email    = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl    = document.getElementById('auth-error');
  errEl.style.display = 'none';
  try {
    if (currentTab === 'login') {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    closeModal();
  } catch (e) {
    errEl.textContent = friendlyError(e.code);
    errEl.style.display = 'block';
  }
}

function friendlyError(code) {
  const msgs = {
    'auth/invalid-email':        'El correo no es válido.',
    'auth/user-not-found':       'No existe una cuenta con ese correo.',
    'auth/wrong-password':       'Contraseña incorrecta.',
    'auth/invalid-credential':   'Correo o contraseña incorrectos.',
    'auth/email-already-in-use': 'Ya existe una cuenta con ese correo.',
    'auth/weak-password':        'La contraseña debe tener al menos 6 caracteres.',
    'auth/too-many-requests':    'Demasiados intentos. Espera un momento.',
  };
  return msgs[code] || 'Ocurrió un error. Inténtalo de nuevo.';
}

// ── Firestore: guardar progreso ────────────────────────────────────────────
async function markDone(uid, page, idx) {
  const ref = doc(db, 'users', uid);
  const field = `progress.${page}.${idx}`;
  try {
    await updateDoc(ref, { [field]: true });
  } catch {
    // El documento no existe aún — crearlo
    await setDoc(ref, { progress: { [page]: { [idx]: true } } });
  }
}

// ── Firestore: cargar progreso ─────────────────────────────────────────────
async function loadProgress(uid) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? (snap.data().progress || {}) : {};
}

// ── Marcar ejercicio visualmente como completado ───────────────────────────
function markCardDone(card) {
  if (card.classList.contains('ej-done')) return;
  card.classList.add('ej-done');
  const headSpan = card.querySelector('.ejercicio-head span');
  if (headSpan) {
    const check = document.createElement('span');
    check.className = 'ej-check';
    check.textContent = '✓';
    headSpan.appendChild(check);
  }
}

function applyProgress(pageProgress) {
  const cards = document.querySelectorAll('.ejercicio-card');
  cards.forEach((card, i) => {
    if (pageProgress[i]) markCardDone(card);
  });
}

// ── Estado de autenticación ────────────────────────────────────────────────
onAuthStateChanged(auth, async user => {
  const btn    = document.getElementById('auth-btn');
  const userEl = document.getElementById('auth-user');
  if (!btn) return;
  if (user) {
    btn.textContent   = 'Salir';
    userEl.textContent = user.email;
    const progress = await loadProgress(user.uid);
    applyProgress(progress[pageId] || {});
  } else {
    btn.textContent   = 'Iniciar sesión';
    userEl.textContent = '';
    // Quitar marcas visuales al cerrar sesión
    document.querySelectorAll('.ejercicio-card.ej-done').forEach(card => {
      card.classList.remove('ej-done');
      const check = card.querySelector('.ej-check');
      if (check) check.remove();
    });
  }
});

// ── toggleSolucion global (reemplaza la versión inline) ───────────────────
window.toggleSolucion = function(btn) {
  const sol     = btn.nextElementSibling;
  const visible = sol.style.display === 'block';
  sol.style.display = visible ? 'none' : 'block';
  btn.textContent   = visible ? 'Ver solución' : 'Ocultar solución';

  // Guardar progreso solo al revelar (no al ocultar)
  if (!visible && auth.currentUser) {
    const card  = btn.closest('.ejercicio-card');
    const cards = Array.from(document.querySelectorAll('.ejercicio-card'));
    const idx   = cards.indexOf(card);
    markCardDone(card);
    markDone(auth.currentUser.uid, pageId, idx);
  }
};

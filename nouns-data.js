// Datos de sustantivos latinos para la colección Firestore "nouns"
// Cada objeto se almacena como documento con id = noun.id

export const NOUNS = [

  // ── 1ª DECLINACIÓN (tema en -a, mayormente f.) ──────────────────────────
  {
    id: 'rosa',
    nom: 'rosa', gen: 'rosae', genus: 'f', dec: 1, subtype: null,
    sign: 'la rosa',
    sg: { nom: 'rosa',    gen: 'rosae',   dat: 'rosae',   acc: 'rosam',   abl: 'rosā',    voc: 'rosa'    },
    pl: { nom: 'rosae',   gen: 'rosarum', dat: 'rosis',   acc: 'rosas',   abl: 'rosis',   voc: 'rosae'   },
  },
  {
    id: 'puella',
    nom: 'puella', gen: 'puellae', genus: 'f', dec: 1, subtype: null,
    sign: 'la niña / la chica',
    sg: { nom: 'puella',  gen: 'puellae',   dat: 'puellae',   acc: 'puellam',   abl: 'puellā',    voc: 'puella'    },
    pl: { nom: 'puellae', gen: 'puellarum', dat: 'puellis',   acc: 'puellas',   abl: 'puellis',   voc: 'puellae'   },
  },
  {
    id: 'terra',
    nom: 'terra', gen: 'terrae', genus: 'f', dec: 1, subtype: null,
    sign: 'la tierra / el país',
    sg: { nom: 'terra',  gen: 'terrae',   dat: 'terrae',   acc: 'terram',   abl: 'terrā',    voc: 'terra'    },
    pl: { nom: 'terrae', gen: 'terrarum', dat: 'terris',   acc: 'terras',   abl: 'terris',   voc: 'terrae'   },
  },
  {
    id: 'silva',
    nom: 'silva', gen: 'silvae', genus: 'f', dec: 1, subtype: null,
    sign: 'el bosque / la selva',
    sg: { nom: 'silva',  gen: 'silvae',   dat: 'silvae',   acc: 'silvam',   abl: 'silvā',    voc: 'silva'    },
    pl: { nom: 'silvae', gen: 'silvarum', dat: 'silvis',   acc: 'silvas',   abl: 'silvis',   voc: 'silvae'   },
  },
  {
    id: 'aqua',
    nom: 'aqua', gen: 'aquae', genus: 'f', dec: 1, subtype: null,
    sign: 'el agua',
    sg: { nom: 'aqua',  gen: 'aquae',   dat: 'aquae',   acc: 'aquam',   abl: 'aquā',    voc: 'aqua'    },
    pl: { nom: 'aquae', gen: 'aquarum', dat: 'aquis',   acc: 'aquas',   abl: 'aquis',   voc: 'aquae'   },
  },
  {
    id: 'domina',
    nom: 'domina', gen: 'dominae', genus: 'f', dec: 1, subtype: null,
    sign: 'la señora / la dueña',
    sg: { nom: 'domina',  gen: 'dominae',   dat: 'dominae',   acc: 'dominam',   abl: 'dominā',    voc: 'domina'    },
    pl: { nom: 'dominae', gen: 'dominarum', dat: 'dominis',   acc: 'dominas',   abl: 'dominis',   voc: 'dominae'   },
  },

  // ── 2ª DECLINACIÓN — Masculinos (tema en -o) ─────────────────────────────
  {
    id: 'lupus',
    nom: 'lupus', gen: 'lupi', genus: 'm', dec: 2, subtype: null,
    sign: 'el lobo',
    sg: { nom: 'lupus', gen: 'lupi',    dat: 'lupo',  acc: 'lupum',  abl: 'lupo',  voc: 'lupe'  },
    pl: { nom: 'lupi',  gen: 'luporum', dat: 'lupis', acc: 'lupos',  abl: 'lupis', voc: 'lupi'  },
  },
  {
    id: 'dominus',
    nom: 'dominus', gen: 'domini', genus: 'm', dec: 2, subtype: null,
    sign: 'el señor / el amo',
    sg: { nom: 'dominus', gen: 'domini',    dat: 'domino',  acc: 'dominum',  abl: 'domino',  voc: 'domine'  },
    pl: { nom: 'domini',  gen: 'dominorum', dat: 'dominis', acc: 'dominos',  abl: 'dominis', voc: 'domini'  },
  },
  {
    id: 'amicus',
    nom: 'amicus', gen: 'amici', genus: 'm', dec: 2, subtype: null,
    sign: 'el amigo',
    sg: { nom: 'amicus', gen: 'amici',    dat: 'amico',  acc: 'amicum',  abl: 'amico',  voc: 'amice'  },
    pl: { nom: 'amici',  gen: 'amicorum', dat: 'amicis', acc: 'amicos',  abl: 'amicis', voc: 'amici'  },
  },
  {
    id: 'filius',
    nom: 'filius', gen: 'filii', genus: 'm', dec: 2, subtype: null,
    sign: 'el hijo',
    nota: 'Vocativo singular: fili (no filie).',
    sg: { nom: 'filius', gen: 'filii',    dat: 'filio',  acc: 'filium',  abl: 'filio',  voc: 'fili'  },
    pl: { nom: 'filii',  gen: 'filiorum', dat: 'filiis', acc: 'filios',  abl: 'filiis', voc: 'filii' },
  },
  {
    id: 'puer',
    nom: 'puer', gen: 'pueri', genus: 'm', dec: 2, subtype: 'er',
    sign: 'el niño / el chico',
    nota: 'Tema puer-: la -e- del nominativo se conserva en todos los casos.',
    sg: { nom: 'puer',  gen: 'pueri',    dat: 'puero',  acc: 'puerum',  abl: 'puero',  voc: 'puer'  },
    pl: { nom: 'pueri', gen: 'puerorum', dat: 'pueris', acc: 'pueros',  abl: 'pueris', voc: 'pueri' },
  },
  {
    id: 'ager',
    nom: 'ager', gen: 'agri', genus: 'm', dec: 2, subtype: 'er',
    sign: 'el campo / la tierra de cultivo',
    nota: 'Tema agr-: la -e- del nominativo desaparece en los demás casos.',
    sg: { nom: 'ager',  gen: 'agri',    dat: 'agro',  acc: 'agrum',  abl: 'agro',  voc: 'ager'  },
    pl: { nom: 'agri',  gen: 'agrorum', dat: 'agris', acc: 'agros',  abl: 'agris', voc: 'agri'  },
  },

  // ── 2ª DECLINACIÓN — Neutros ──────────────────────────────────────────────
  {
    id: 'bellum',
    nom: 'bellum', gen: 'belli', genus: 'n', dec: 2, subtype: 'neutro',
    sign: 'la guerra',
    nota: 'Como todo neutro: nom. = acc. = voc. en sg. y pl.; nom./acc./voc. pl. en -a.',
    sg: { nom: 'bellum', gen: 'belli',    dat: 'bello',  acc: 'bellum',  abl: 'bello',  voc: 'bellum' },
    pl: { nom: 'bella',  gen: 'bellorum', dat: 'bellis', acc: 'bella',   abl: 'bellis', voc: 'bella'  },
  },
  {
    id: 'verbum',
    nom: 'verbum', gen: 'verbi', genus: 'n', dec: 2, subtype: 'neutro',
    sign: 'la palabra / el verbo',
    sg: { nom: 'verbum', gen: 'verbi',    dat: 'verbo',  acc: 'verbum',  abl: 'verbo',  voc: 'verbum' },
    pl: { nom: 'verba',  gen: 'verborum', dat: 'verbis', acc: 'verba',   abl: 'verbis', voc: 'verba'  },
  },
  {
    id: 'templum',
    nom: 'templum', gen: 'templi', genus: 'n', dec: 2, subtype: 'neutro',
    sign: 'el templo',
    sg: { nom: 'templum', gen: 'templi',    dat: 'templo',  acc: 'templum',  abl: 'templo',  voc: 'templum' },
    pl: { nom: 'templa',  gen: 'templorum', dat: 'templis', acc: 'templa',   abl: 'templis', voc: 'templa'  },
  },

  // ── 3ª DECLINACIÓN — Imparisílabos masculinos ─────────────────────────────
  {
    id: 'rex',
    nom: 'rex', gen: 'regis', genus: 'm', dec: 3, subtype: 'impar',
    sign: 'el rey',
    nota: 'Genitivo plural imparisílabo: -um (regum).',
    sg: { nom: 'rex',   gen: 'regis',  dat: 'regi',    acc: 'regem',  abl: 'rege',    voc: 'rex'   },
    pl: { nom: 'reges', gen: 'regum',  dat: 'regibus', acc: 'reges',  abl: 'regibus', voc: 'reges' },
  },
  {
    id: 'miles',
    nom: 'miles', gen: 'militis', genus: 'm', dec: 3, subtype: 'impar',
    sign: 'el soldado',
    sg: { nom: 'miles',   gen: 'militis',  dat: 'militi',    acc: 'militem',  abl: 'milite',    voc: 'miles'   },
    pl: { nom: 'milites', gen: 'militum',  dat: 'militibus', acc: 'milites',  abl: 'militibus', voc: 'milites' },
  },
  {
    id: 'homo',
    nom: 'homo', gen: 'hominis', genus: 'm', dec: 3, subtype: 'impar',
    sign: 'el hombre / el ser humano',
    sg: { nom: 'homo',    gen: 'hominis',  dat: 'homini',    acc: 'hominem',  abl: 'homine',    voc: 'homo'    },
    pl: { nom: 'homines', gen: 'hominum',  dat: 'hominibus', acc: 'homines',  abl: 'hominibus', voc: 'homines' },
  },
  {
    id: 'pater',
    nom: 'pater', gen: 'patris', genus: 'm', dec: 3, subtype: 'impar',
    sign: 'el padre',
    sg: { nom: 'pater',  gen: 'patris',  dat: 'patri',    acc: 'patrem',  abl: 'patre',    voc: 'pater'  },
    pl: { nom: 'patres', gen: 'patrum',  dat: 'patribus', acc: 'patres',  abl: 'patribus', voc: 'patres' },
  },

  // ── 3ª DECLINACIÓN — Imparisílabo femenino ───────────────────────────────
  {
    id: 'mater',
    nom: 'mater', gen: 'matris', genus: 'f', dec: 3, subtype: 'impar',
    sign: 'la madre',
    sg: { nom: 'mater',  gen: 'matris',  dat: 'matri',    acc: 'matrem',  abl: 'matre',    voc: 'mater'  },
    pl: { nom: 'matres', gen: 'matrum',  dat: 'matribus', acc: 'matres',  abl: 'matribus', voc: 'matres' },
  },

  // ── 3ª DECLINACIÓN — Parisílabos ─────────────────────────────────────────
  {
    id: 'civis',
    nom: 'civis', gen: 'civis', genus: 'm', dec: 3, subtype: 'par',
    sign: 'el ciudadano',
    nota: 'Genitivo plural parisílabo: -ium (civium). Ablativo sg. en -ī (civi).',
    sg: { nom: 'civis',  gen: 'civis',   dat: 'civi',    acc: 'civem',  abl: 'civi',    voc: 'civis'  },
    pl: { nom: 'cives',  gen: 'civium',  dat: 'civibus', acc: 'cives',  abl: 'civibus', voc: 'cives'  },
  },
  {
    id: 'navis',
    nom: 'navis', gen: 'navis', genus: 'f', dec: 3, subtype: 'par',
    sign: 'la nave / el barco',
    nota: 'Genitivo plural parisílabo: -ium (navium). Ablativo sg. en -ī (navi).',
    sg: { nom: 'navis',  gen: 'navis',   dat: 'navi',    acc: 'navem',  abl: 'navi',    voc: 'navis'  },
    pl: { nom: 'naves',  gen: 'navium',  dat: 'navibus', acc: 'naves',  abl: 'navibus', voc: 'naves'  },
  },

  // ── 3ª DECLINACIÓN — Neutros ──────────────────────────────────────────────
  {
    id: 'corpus',
    nom: 'corpus', gen: 'corporis', genus: 'n', dec: 3, subtype: 'neutro',
    sign: 'el cuerpo',
    nota: 'Nom./acc./voc. pl. en -a (corpora); gen. pl. en -um (corporum).',
    sg: { nom: 'corpus',   gen: 'corporis',  dat: 'corpori',    acc: 'corpus',   abl: 'corpore',    voc: 'corpus'   },
    pl: { nom: 'corpora',  gen: 'corporum',  dat: 'corporibus', acc: 'corpora',  abl: 'corporibus', voc: 'corpora'  },
  },
  {
    id: 'nomen',
    nom: 'nomen', gen: 'nominis', genus: 'n', dec: 3, subtype: 'neutro',
    sign: 'el nombre',
    sg: { nom: 'nomen',   gen: 'nominis',  dat: 'nomini',    acc: 'nomen',   abl: 'nomine',    voc: 'nomen'   },
    pl: { nom: 'nomina',  gen: 'nominum',  dat: 'nominibus', acc: 'nomina',  abl: 'nominibus', voc: 'nomina'  },
  },
  {
    id: 'tempus',
    nom: 'tempus', gen: 'temporis', genus: 'n', dec: 3, subtype: 'neutro',
    sign: 'el tiempo',
    sg: { nom: 'tempus',   gen: 'temporis',  dat: 'tempori',    acc: 'tempus',   abl: 'tempore',    voc: 'tempus'   },
    pl: { nom: 'tempora',  gen: 'temporum',  dat: 'temporibus', acc: 'tempora',  abl: 'temporibus', voc: 'tempora'  },
  },
];

// Índice por id para búsqueda rápida
export const NOUNS_BY_ID = Object.fromEntries(NOUNS.map(n => [n.id, n]));

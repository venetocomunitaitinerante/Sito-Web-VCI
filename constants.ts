import { Event, Team, Partner, BlogPost, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Chi Siamo', path: '/chi-siamo' },
  { label: 'Cammini', path: '/cammini' },
  { label: 'Progetti', path: '/progetti' },
  { label: 'Associazioni', path: '/associazioni' },
  { label: 'Blog', path: '/blog' },
  { label: 'Media', path: '/media' },
  { label: 'Info', path: '/info' },
  { label: 'Partecipa', path: '/partecipa' },
];

export const NEXT_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Cammino dei Colli Euganei',
    date: '2023-11-12',
    location: 'Arquà Petrarca (PD)',
    distance: '12 km',
    difficulty: 'Medio',
    description: 'Un percorso panoramico tra i vigneti e gli ulivi dei Colli Euganei, alla scoperta di borghi storici.',
    partnerAssociation: 'Amici dei Colli',
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: '2',
    title: 'Lungo il Piave',
    date: '2023-11-26',
    location: 'San Donà di Piave (VE)',
    distance: '8 km',
    difficulty: 'Facile',
    description: 'Camminata pianeggiante lungo il fiume sacro alla patria, riflettendo sulla storia e la natura.',
    partnerAssociation: 'Legambiente Veneto',
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: '3',
    title: 'Prealpi Trevigiane',
    date: '2023-12-10',
    location: 'Vittorio Veneto (TV)',
    distance: '15 km',
    difficulty: 'Impegnativo',
    description: 'Esclusione in quota per ammirare il panorama invernale delle Prealpi.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  }
];

export const TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Team Comunicazione',
    type: 'Settimanale',
    description: 'Gestisce i social, il sito web e la newsletter.',
    role: 'Coordinamento',
  },
  {
    id: 't2',
    name: 'Team Logistica',
    type: 'Mensile',
    description: 'Organizza i trasporti e i ristori per i grandi eventi.',
    role: 'Supporto Operativo',
  },
  {
    id: 't3',
    name: 'Team Strategia',
    type: 'Annuale',
    description: 'Definisce la visione a lungo termine e i grandi obiettivi.',
    role: 'Direzione',
  },
  {
    id: 't4',
    name: 'Gruppo Festival',
    type: 'Dinamico',
    description: 'Si attiva solo per l\'organizzazione del Festival annuale.',
    role: 'Progetto Specifico',
  }
];

// Rough coordinates for a simple abstract map of Veneto
export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'Associazione Cammini Veneti', description: 'Promozione del turismo lento.', location: { x: 50, y: 40, label: 'Vicenza' } },
  { id: 'p2', name: 'EcoPiave', description: 'Tutela del fiume Piave.', location: { x: 70, y: 30, label: 'Treviso' } },
  { id: 'p3', name: 'Laguna Nostra', description: 'Cultura della laguna veneta.', location: { x: 80, y: 60, label: 'Venezia' } },
  { id: 'p4', name: 'Dolomiti Heart', description: 'Amanti della montagna.', location: { x: 55, y: 15, label: 'Belluno' } },
  { id: 'p5', name: 'Colli Euganei Slow', description: 'Camminate nei colli.', location: { x: 45, y: 70, label: 'Padova' } },
  { id: 'p6', name: 'Verona Green', description: 'Verde urbano e periurbano.', location: { x: 20, y: 60, label: 'Verona' } },
  { id: 'p7', name: 'Delta Po Nature', description: 'Birdwatching e cammino.', location: { x: 60, y: 90, label: 'Rovigo' } },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Perché camminare unisce',
    excerpt: 'Riflessioni sul potere del passo lento per costruire relazioni durature.',
    date: '10 Ottobre 2023',
    author: 'Marco Rossi',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    category: 'Riflessioni',
  },
  {
    id: 'b2',
    title: 'Resoconto del Cammino delle Dolomiti',
    excerpt: 'Tre giorni di sole, fatica e sorrisi. Ecco com’è andata.',
    date: '25 Settembre 2023',
    author: 'Giulia Bianchi',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    category: 'Diario',
  },
  {
    id: 'b3',
    title: 'Intervista al Presidente',
    excerpt: 'Il futuro di VCI e le nuove sfide per il territorio veneto.',
    date: '1 Settembre 2023',
    author: 'Redazione',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    category: 'Interviste',
  }
];

export const FAQ_ITEMS = [
  {
    question: "Cosa devo portare per un cammino?",
    answer: "Scarpe comode (meglio se da trekking), acqua (almeno 1L), cappellino, e voglia di stare insieme."
  },
  {
    question: "I cammini sono adatti ai bambini?",
    answer: "Dipende dalla difficoltà segnalata. I percorsi 'Facili' sono quasi sempre adatti a famiglie."
  },
  {
    question: "Come posso iscrivermi?",
    answer: "Puoi iscriverti direttamente dalla pagina 'Cammini' cliccando sul singolo evento."
  },
  {
    question: "Posso portare il mio cane?",
    answer: "Sì, nella maggior parte dei cammini, purché al guinzaglio e nel rispetto degli altri."
  }
];
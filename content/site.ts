/**
 * What: Single source of truth for every word, photo, and contact path.
 * Why: The client asked that this sanctuary use the real data in Client-data —
 *      History.docx, Presentation.docx, Social midias.docx, and the expedition photos.
 * Related: Every page and gallery component reads from here.
 * Business rule: Do not invent emails, WhatsApp numbers, or donation totals
 * that the client did not provide.
 */

export const site = {
  name: "Chapel of the Archangel Michael",
  namePt: "Capela do Arcanjo Miguel",
  wordmark: "SÃO MIGUEL",
  place: "São Tomé and Príncipe",
  year: 2026,
  inscription: "Unity is still the best option in everything.",
  calling: "In life, coincidences do not exist — there are only callings.",

  nav: [
    { href: "/", label: "Home" },
    { href: "/history", label: "History" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ],

  social: {
    instagram: {
      handle: "@santuariodesaomiguel",
      href: "https://www.instagram.com/santuariodesaomiguel",
    },
    facebook: {
      href: "https://www.facebook.com/santuariodesaomiguelstp/",
      label: "Santuário de São Miguel",
    },
  },

  people: {
    luciano: {
      name: "Luciano Baetz",
      role: "Founder of this independent call",
      agencies: ["Vamos Fugir Expedições", "Jaca Voyage"],
      passengers: 500,
    },
    ines: {
      name: "Inês Barabola",
      role: "Founder of CelebraRe",
      project: "CelebraRe — solstice and equinox gatherings at Pedra Bonita, Rio de Janeiro",
    },
    sailor: {
      name: "Giló Azancont",
      role: "Local mariner of Porto Alegre",
    },
    priest: {
      name: "Padre Wadileme Carlos",
    },
    bishop: {
      name: "D. João de Ceita Nazaré",
      role: "Bishop of the Diocese of São Tomé and Príncipe",
    },
    founder1883: {
      name: "Jacinto Carneiro de Sousa e Almeida",
      title: "Viscount of Malanza",
    },
  },

  home: {
    headline: "Shall we rebuild the chapel together?",
    subhead:
      "There are places where faith needs a home to be reborn — and the Chapel of the Archangel Michael, in São Tomé and Príncipe, is one of them.",
    riverQuote: "Every stone tells a story. Every wave carries a prayer.",
    covenantLead:
      "Raised in 1883 at the southern tip of São Tomé, the chapel sits on land first named Rio de S. Michaelis on maps of 1519 — only forty-nine years after Portuguese navigators João de Santarém and Pêro Escobar reached the island on 21 December 1470.",
    covenantBody:
      "It can be reached only by sea from Porto Alegre. After more than a century of abandonment, the roof is gone and the rainforest has taken the walls. Yet the original image of the Archangel Michael still stands intact inside the ruin — one hundred and forty-three years after the Roça was founded.",
    covenantClose:
      "This website exists by the independent initiative of Luciano Baetz. It has no religious or government funding. The purpose is simple: to gather offerings for the full reconstruction of the chapel, and to place São Miguel back on the map for the Santomean people and for every traveler who needs a guardian.",
    pullQuote:
      "More than raising walls of stone, you will be raising hope, protecting families, and leaving your blessing etched in the history and faith of this people.",
    bookHeadline: "Your Name in Eternity",
    bookBody:
      "Every offering may be inscribed in the Book of Honor that will live inside the restored chapel — so that those who come after us can read the names of the people who refused to let this sanctuary disappear.",
    bookQuote:
      "So that future generations may know that there are no borders or professions that can stop a chain of goodwill.",
    bookNames: [
      "Luciano Baetz",
      "Inês Barabola",
      "Giló Azancont",
      "The people of Porto Alegre",
      "Your name belongs here",
    ],
  },

  history: {
    headline: "The Legend of the Guardian",
    subhead:
      "There are journeys that change our destiny and pilgrimages that transform our souls.",
    chapters: [
      {
        year: "1519",
        title: "The Atlas",
        highlightWords: ["Miller Atlas", "Rio de S. Michaelis", "1470"],
        text: "The island of São Tomé was found by João de Santarém and Pêro Escobar on 21 December 1470. Only forty-nine years later, sixteenth-century charts already named a southern watercourse Rio de S. Michaelis. The Archangel was written on the map long before any plantation stood on that shore.",
      },
      {
        year: "1883",
        title: "The Foundation",
        text: "The Roça de São Miguel was officially founded in 1883 by the Viscount of Malanza, Jacinto Carneiro de Sousa e Almeida — 364 years after the river first appeared on the charts. Remote, with no land road, the estate lived by the sea from Porto Alegre. When the cocoa and coffee cycle faded, the forest closed over the stone.",
      },
      {
        year: "2025",
        title: "The Call",
        text: "On 24 June 2025, Luciano Baetz and Inês Barabola sailed from Porto Alegre with mariner Giló Azancont. They walked through the overgrowth and found the nineteenth-century chapel. The roof was gone. The walls were failing. The original statue of the Archangel Michael was still there, intact.",
      },
    ],
    afterword:
      "Photographs from that day were carried to Padre Wadileme Carlos, and from him to Bishop D. João de Ceita Nazaré. Luciano’s aim is to put the Chapel of the Archangel Michael back on the map — a house for the protecting angel of the Santomean people and of all who travel.",
  },

  donate: {
    headline: "United Hearts, Eternal Impact",
    subhead:
      "No matter the size of your donation: every gesture is a seed of love that makes a difference.",
    goalUsd: 85000,
    raisedUsd: 0,
    goalNote:
      "Estimated first phase: roof, masonry, pathway, and conservation of the original statue. This call has received no church or state funding.",
    amounts: [
      { value: 25, impact: "Carries lime and sand for one repaired wall patch" },
      { value: 50, impact: "Provides materials for one square meter of roofing" },
      { value: 100, impact: "Restores a section of the original stone pathway" },
      { value: 250, impact: "Supports one boat crossing from Porto Alegre with timber" },
      { value: 500, impact: "Conserves a length of the chapel’s lime-washed masonry" },
      { value: 1000, impact: "Helps shelter the original statue of the Archangel" },
    ],
    breakdown: [
      { label: "Roof and timber", share: 40 },
      { label: "Stone and lime walls", share: 30 },
      { label: "Pathway from the beach", share: 15 },
      { label: "Statue conservation", share: 15 },
    ],
    sidebarQuote: "Every stone we lay is a prayer answered.",
  },

  contact: {
    headline: "Let Us Walk Together",
    subhead:
      "Whether you have questions about the chapel, wish to visit, or feel called to help in other ways, we welcome your message.",
    subjects: [
      "General Inquiry",
      "Prayer Request",
      "Visit Information",
      "Partnership",
      "Media",
    ],
    success: "Your message has taken flight. We will respond within 2–3 days.",
    note: "We read every message. Due to our remote location, replies may take 2–3 days.",
    location: "Roça de São Miguel — southern São Tomé, reached by sea from Porto Alegre",
    mapTooltip: "Roça de São Miguel — Founded 1883",
  },

  images: {
    heroCoast: {
      src: "/images/coastline-fisherman.jpg",
      alt: "A lone fisherman paddles a dugout canoe across teal water beneath the misted volcanic mountains of São Tomé",
      w: 1920,
      h: 1080,
    },
    heroBay: {
      src: "/images/coastline-bay.jpg",
      alt: "Fisherman in a pirogue on a calm bay, rainforest peaks rising through tropical mist",
      w: 1920,
      h: 1080,
    },
    chapelExterior: {
      src: "/images/chapel-ruins-exterior.jpg",
      alt: "Exterior of the ruined chapel: collapsed roof, mossed limestone walls, and an arched doorway into darkness",
      w: 1920,
      h: 2560,
    },
    chapelPortal: {
      src: "/images/expedition-3481.jpg",
      alt: "The chapel portal on 24 June 2025 — arched entrance, oculus above, Archangel statue visible on the altar",
      w: 1920,
      h: 2560,
    },
    statueAltar: {
      src: "/images/statue-altar.jpg",
      alt: "Original stone statue of the Archangel Michael inside the roofless chapel, sword lowered over the dragon",
      w: 1920,
      h: 2560,
    },
    statueClose: {
      src: "/images/statue-close.jpg",
      alt: "Close view of the weathered Archangel statue, rusted metal and moss on colonial plaster",
      w: 1200,
      h: 1600,
    },
    statueFull: {
      src: "/images/statue-full.jpg",
      alt: "Archangel Michael in the chapel corner, iron cross at his side, circular opening behind his head",
      w: 1200,
      h: 1600,
    },
    statueExpedition: {
      src: "/images/expedition-3455.jpg",
      alt: "The intact original image of São Miguel photographed during the 2025 recognition expedition",
      w: 1440,
      h: 1920,
    },
    lucianoLocal: {
      src: "/images/luciano-with-local.jpg",
      alt: "Luciano Baetz standing with a local companion beside the Archangel statue inside the chapel ruins",
      w: 900,
      h: 1200,
    },
    lucianoChapel: {
      src: "/images/luciano-chapel.jpg",
      alt: "Luciano Baetz gesturing toward the original statue of the Archangel Michael",
      w: 1200,
      h: 1600,
    },
    lucianoInterior: {
      src: "/images/expedition-moment.jpg",
      alt: "Luciano Baetz inside the chapel, pointing upward beside the mossed altar and the original statue",
      w: 1200,
      h: 1600,
    },
    ines: {
      src: "/images/ines-barabola.jpg",
      alt: "Inês Barabola reaching toward the Archangel statue during the June 2025 expedition",
      w: 900,
      h: 1200,
    },
    mountainCoast: {
      src: "/images/mountain-coast.jpg",
      alt: "Atlantic swell against the volcanic shore and rainforest wall of São Miguel",
      w: 1600,
      h: 1200,
    },
    waterfallSea: {
      src: "/images/expedition-3548.jpg",
      alt: "A waterfall dropping from rainforest cliffs into the Atlantic off southern São Tomé",
      w: 1440,
      h: 1920,
    },
    waterfallPool: {
      src: "/images/waterfall-pool.jpg",
      alt: "Columnar volcanic rock and a thin waterfall into a dark forest pool",
      w: 1200,
      h: 1600,
    },
    pico: {
      src: "/images/pico-cao-grande.jpg",
      alt: "Pico Cão Grande rising from the rainforest of São Tomé",
      w: 1600,
      h: 1066,
    },
    picoMist: {
      src: "/images/pico-cao-grande-mist.jpg",
      alt: "Pico Cão Grande wrapped in mist above the canopy",
      w: 1600,
      h: 1066,
    },
    rolasBeach: {
      src: "/images/praia-rolas.jpg",
      alt: "Palm-lined beach on Ilhéu das Rolas, São Tomé and Príncipe",
      w: 1920,
      h: 1280,
    },
    rolasIsland: {
      src: "/images/isla-rolas.jpg",
      alt: "Ilhéu das Rolas seen from the Atlantic",
      w: 1920,
      h: 1280,
    },
    praiaBanana: {
      src: "/images/praia-banana.jpg",
      alt: "Praia Banana — a curved pale beach under rainforest hills",
      w: 1920,
      h: 1280,
    },
    cascadas: {
      src: "/images/cascadas.jpg",
      alt: "A forest waterfall in the interior of São Tomé",
      w: 1920,
      h: 1280,
    },
    morro: {
      src: "/images/morro-peixo.jpg",
      alt: "Morro da Peixe rising from the Atlantic",
      w: 1920,
      h: 1280,
    },
    aerialCoast: {
      src: "/images/atlas-reference.jpg",
      alt: "Aerial view of a crescent bay where rainforest meets turquoise Atlantic water",
      w: 1600,
      h: 1066,
    },
    turtles: {
      src: "/images/turtle-nests.jpg",
      alt: "Sea-turtle nesting beach on São Tomé and Príncipe",
      w: 1600,
      h: 1066,
    },
    clubSantana: {
      src: "/images/club-santana.jpg",
      alt: "The Santana coast of São Tomé under heavy sky",
      w: 1600,
      h: 1066,
    },
    ilheuRolas: {
      src: "/images/ilheu-rolas.jpg",
      alt: "Ilhéu das Rolas from the sea",
      w: 1600,
      h: 1066,
    },
    chapelSite: {
      src: "/images/chapel-site.jpg",
      alt: "The Archangel statue and wooden cross against the chapel’s limestone wall",
      w: 1600,
      h: 900,
    },
    statueWing: {
      src: "/images/expedition-3486.jpg",
      alt: "Wings of the Archangel statue in the mossed alcove of the chapel",
      w: 1920,
      h: 1440,
    },
    expedition3466: {
      src: "/images/expedition-3466.jpg",
      alt: "Expedition photograph from Roça de São Miguel, 24 June 2025",
      w: 1920,
      h: 2560,
    },
    expedition3467: {
      src: "/images/expedition-3467.jpg",
      alt: "Expedition photograph from Roça de São Miguel, 24 June 2025",
      w: 1920,
      h: 2560,
    },
    expedition3483: {
      src: "/images/expedition-3483.jpg",
      alt: "The chapel and its surroundings during the 2025 recognition",
      w: 1920,
      h: 2560,
    },
    expedition3485: {
      src: "/images/expedition-3485.jpg",
      alt: "Further view of the ruin recorded on 24 June 2025",
      w: 1920,
      h: 2560,
    },
    expedition5183: {
      src: "/images/expedition-5183.jpg",
      alt: "Later expedition still from the São Miguel landing",
      w: 1920,
      h: 2560,
    },
  },
} as const;

export type SiteImage = (typeof site.images)[keyof typeof site.images];

export const riverImages = [
  site.images.chapelPortal,
  site.images.chapelExterior,
  site.images.statueAltar,
  site.images.heroCoast,
  site.images.heroBay,
  site.images.mountainCoast,
  site.images.waterfallSea,
  site.images.ines,
  site.images.lucianoInterior,
  site.images.lucianoChapel,
  site.images.pico,
  site.images.praiaBanana,
  site.images.cascadas,
  site.images.statueWing,
] as const;

export const witnessImages = [
  { ...site.images.chapelPortal, caption: "The portal — 24 June 2025" },
  { ...site.images.chapelExterior, caption: "Walls the forest has already claimed" },
  { ...site.images.statueAltar, caption: "The original image, still standing" },
  { ...site.images.statueExpedition, caption: "São Miguel — 143 years in this place" },
  { ...site.images.statueClose, caption: "The weathered Archangel" },
  { ...site.images.statueFull, caption: "Cross and statue in the alcove" },
  { ...site.images.statueWing, caption: "Wings against mossed plaster" },
  { ...site.images.lucianoInterior, caption: "Luciano Baetz inside the sanctuary" },
  { ...site.images.lucianoChapel, caption: "Luciano telling the statue’s story" },
  { ...site.images.ines, caption: "Inês Barabola at the altar" },
  { ...site.images.lucianoLocal, caption: "A meeting at the statue" },
  { ...site.images.chapelSite, caption: "São Miguel and the wooden cross" },
  { ...site.images.waterfallSea, caption: "The southern coast, reached only by sea" },
  { ...site.images.mountainCoast, caption: "The shore of São Miguel" },
  { ...site.images.heroCoast, caption: "A fisherman under the volcanic peaks" },
  { ...site.images.pico, caption: "Pico Cão Grande" },
  { ...site.images.picoMist, caption: "Pico Cão Grande in mist" },
  { ...site.images.cascadas, caption: "Interior waters of the island" },
  { ...site.images.waterfallPool, caption: "The forest pool" },
  { ...site.images.aerialCoast, caption: "Where canopy meets the Atlantic" },
  { ...site.images.rolasBeach, caption: "Ilhéu das Rolas" },
  { ...site.images.praiaBanana, caption: "Praia Banana" },
  { ...site.images.morro, caption: "Morro da Peixe" },
  { ...site.images.turtles, caption: "Sea-turtle nesting shore" },
  { ...site.images.expedition3466, caption: "24 June 2025 — expedition still" },
  { ...site.images.expedition3467, caption: "24 June 2025 — expedition still" },
  { ...site.images.expedition3483, caption: "The ruin and its forest" },
  { ...site.images.expedition3485, caption: "The landing recorded" },
  { ...site.images.expedition5183, caption: "Later still from the same journey" },
] as const;

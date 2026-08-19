import type { AuthoredQuestion } from '../authoring';

/** Community & Family — both sat at a single question before this batch. */
export const batch: AuthoredQuestion[] = [
  {
    question: "What would your neighbourhood lose if you moved away tomorrow?",
    category: "Community",
    depthLevel: 3,
    vocabulary: [
      { phrase: "leave a gap", type: "Idiom", translation: "lasciare un vuoto", example: "Would you leave a gap in your street, or would nobody notice?" },
      { phrase: "put down roots", type: "Idiom", translation: "mettere radici", example: "How long does it take you to put down roots somewhere new?" },
      { phrase: "look out for each other", type: "Phrase", translation: "badare gli uni agli altri", example: "Do the people on your street look out for each other?" },
      { phrase: "a familiar face", type: "Noun Phrase", translation: "un volto familiare", example: "Is there a familiar face you would genuinely miss?" },
      { phrase: "take something for granted", type: "Idiom", translation: "dare qualcosa per scontato", example: "We tend to take our neighbours for granted until we move." }
    ],
    guidedQuestions: [
      "How long does it take you to **put down roots** in a new place?",
      "Do the people around you genuinely **look out for each other**?",
      "Which **familiar face** would you miss the most?"
    ]
  },
  {
    question: "Is it possible to belong somewhere you were not born?",
    category: "Community",
    depthLevel: 4,
    vocabulary: [
      { phrase: "feel at home", type: "Phrase", translation: "sentirsi a casa", example: "How long did it take you to feel at home there?" },
      { phrase: "an outsider", type: "Noun", translation: "un estraneo", example: "Is there anywhere you will always be an outsider?" },
      { phrase: "fit in", type: "Phrasal Verb", translation: "integrarsi", example: "Did you have to change to fit in, or were you accepted as you were?" },
      { phrase: "a sense of belonging", type: "Noun Phrase", translation: "un senso di appartenenza", example: "Where do you get your strongest sense of belonging?" },
      { phrase: "earn your place", type: "Phrase", translation: "guadagnarsi il proprio posto", example: "Do newcomers have to earn their place, or should belonging be given freely?" }
    ],
    guidedQuestions: [
      "How long did it take you to **feel at home** where you live now?",
      "Have you ever had to change yourself to **fit in**?",
      "Should newcomers have to **earn your place** in a community?"
    ]
  },
  {
    question: "When was the last time a stranger helped you for no reason?",
    category: "Community",
    depthLevel: 2,
    vocabulary: [
      { phrase: "go out of your way", type: "Idiom", translation: "farsi in quattro", example: "Someone went out of their way to help me and asked for nothing." },
      { phrase: "a random act of kindness", type: "Noun Phrase", translation: "un gesto gentile spontaneo", example: "What was the last random act of kindness you received?" },
      { phrase: "pay it forward", type: "Phrase", translation: "restituire il favore ad altri", example: "Did you pay it forward to someone else afterwards?" },
      { phrase: "restore your faith", type: "Phrase", translation: "restituire fiducia", example: "That moment can restore your faith in people." },
      { phrase: "lend a hand", type: "Idiom", translation: "dare una mano", example: "Are you quick to lend a hand to someone you do not know?" }
    ],
    guidedQuestions: [
      "When did someone last **go out of your way** for you?",
      "Do you usually **pay it forward** afterwards?",
      "How quickly do you **lend a hand** to a stranger?"
    ]
  },
  {
    question: "Should you be loyal to a place, or only to the people in it?",
    category: "Community",
    depthLevel: 4,
    vocabulary: [
      { phrase: "loyalty", type: "Noun", translation: "lealtà", example: "Does loyalty to a place make any real sense?" },
      { phrase: "hometown pride", type: "Noun Phrase", translation: "orgoglio per la propria città", example: "Do you have any hometown pride left?" },
      { phrase: "move on", type: "Phrasal Verb", translation: "andare avanti", example: "Is it disloyal to move on from where you grew up?" },
      { phrase: "the ties that bind", type: "Idiom", translation: "i legami che uniscono", example: "What are the ties that bind you to your town?" },
      { phrase: "rooted", type: "Adjective", translation: "radicato", example: "Do you feel rooted anywhere, or are you happy drifting?" }
    ],
    guidedQuestions: [
      "Do you still have any **hometown pride**?",
      "Is it disloyal to **move on** from where you grew up?",
      "What are **the ties that bind** you to a place?"
    ]
  },
  {
    question: "What is one thing your community does badly that everyone accepts?",
    category: "Community",
    depthLevel: 3,
    vocabulary: [
      { phrase: "turn a blind eye", type: "Idiom", translation: "chiudere un occhio", example: "Why does everybody turn a blind eye to it?" },
      { phrase: "the way things are done", type: "Phrase", translation: "il modo in cui si fanno le cose", example: "Nobody questions the way things are done around here." },
      { phrase: "put up with", type: "Phrasal Verb", translation: "sopportare", example: "What do you put up with that a visitor would find strange?" },
      { phrase: "speak up", type: "Phrasal Verb", translation: "farsi sentire", example: "Would you speak up, or keep quiet to avoid trouble?" },
      { phrase: "collective denial", type: "Noun Phrase", translation: "negazione collettiva", example: "Is it laziness, or genuine collective denial?" }
    ],
    guidedQuestions: [
      "Why does everyone **turn a blind eye** to it?",
      "What do you **put up with** that a visitor would find strange?",
      "Would you actually **speak up** about it?"
    ]
  },
  {
    question: "Do you owe anything to people you will never meet?",
    category: "Community",
    depthLevel: 4,
    vocabulary: [
      { phrase: "the greater good", type: "Noun Phrase", translation: "il bene comune", example: "Would you sacrifice comfort for the greater good?" },
      { phrase: "future generations", type: "Noun Phrase", translation: "le generazioni future", example: "What do we actually owe future generations?" },
      { phrase: "a moral duty", type: "Noun Phrase", translation: "un dovere morale", example: "Is it a moral duty, or simply a nice idea?" },
      { phrase: "ripple effect", type: "Noun Phrase", translation: "effetto a catena", example: "Small choices have a ripple effect you will never see." },
      { phrase: "abstract", type: "Adjective", translation: "astratto", example: "It is hard to care about something this abstract." }
    ],
    guidedQuestions: [
      "Would you give up comfort for **the greater good**?",
      "What do we owe **future generations**?",
      "Can you feel the **ripple effect** of your own choices?"
    ]
  },
  {
    question: "Has the internet made your local community stronger or weaker?",
    category: "Community",
    depthLevel: 3,
    vocabulary: [
      { phrase: "bring people together", type: "Phrase", translation: "unire le persone", example: "Does it genuinely bring people together, or just simulate it?" },
      { phrase: "drift apart", type: "Phrasal Verb", translation: "allontanarsi", example: "Neighbours drift apart when everything happens on a screen." },
      { phrase: "a double-edged sword", type: "Idiom", translation: "un'arma a doppio taglio", example: "Local group chats are a double-edged sword." },
      { phrase: "face-to-face", type: "Adjective", translation: "faccia a faccia", example: "How much face-to-face contact do you have in a normal week?" },
      { phrase: "echo chamber", type: "Noun Phrase", translation: "camera dell'eco", example: "Even a local forum can become an echo chamber." }
    ],
    guidedQuestions: [
      "Does it really **bring people together**?",
      "Have your neighbours started to **drift apart**?",
      "How much **face-to-face** contact do you actually get?"
    ]
  },
  {
    question: "What tradition in your area deserves to disappear?",
    category: "Community",
    depthLevel: 3,
    vocabulary: [
      { phrase: "outdated", type: "Adjective", translation: "superato", example: "Which local tradition feels completely outdated to you?" },
      { phrase: "hand down", type: "Phrasal Verb", translation: "tramandare", example: "Should we hand down every tradition without question?" },
      { phrase: "for the sake of it", type: "Idiom", translation: "tanto per farlo", example: "We keep doing it purely for the sake of it." },
      { phrase: "sacred cow", type: "Idiom", translation: "vacca sacra (tabù intoccabile)", example: "Every town has a sacred cow nobody dares criticise." },
      { phrase: "let go of", type: "Phrasal Verb", translation: "lasciar andare", example: "What would your town never let go of?" }
    ],
    guidedQuestions: [
      "Which local custom feels **outdated** to you?",
      "Should we **hand down** every tradition without question?",
      "What is the **sacred cow** nobody dares criticise?"
    ]
  },
  {
    question: "Would you rather live somewhere beautiful and cold, or ordinary and warm?",
    category: "Community",
    depthLevel: 2,
    vocabulary: [
      { phrase: "welcoming", type: "Adjective", translation: "accogliente", example: "Is your town welcoming to people who just arrived?" },
      { phrase: "stunning", type: "Adjective", translation: "stupendo", example: "The scenery is stunning but nobody speaks to you." },
      { phrase: "warmth", type: "Noun", translation: "calore umano", example: "Would you trade beauty for genuine warmth?" },
      { phrase: "settle for", type: "Phrasal Verb", translation: "accontentarsi di", example: "Would you settle for an ordinary town full of good people?" },
      { phrase: "grow on you", type: "Phrasal Verb", translation: "piacere col tempo", example: "Some places really grow on you after a year." }
    ],
    guidedQuestions: [
      "Is your town genuinely **welcoming**?",
      "Would you trade beauty for human **warmth**?",
      "Has a place ever **grow on you** unexpectedly?"
    ]
  },
  {
    question: "Who in your life do you rely on that you have never thanked?",
    category: "Community",
    depthLevel: 3,
    vocabulary: [
      { phrase: "take for granted", type: "Idiom", translation: "dare per scontato", example: "Who do you take for granted every single week?" },
      { phrase: "behind the scenes", type: "Idiom", translation: "dietro le quinte", example: "Someone works behind the scenes so your life runs smoothly." },
      { phrase: "unsung hero", type: "Noun Phrase", translation: "eroe silenzioso", example: "Who is the unsung hero of your daily routine?" },
      { phrase: "long overdue", type: "Adjective", translation: "atteso da tempo", example: "That thank-you is long overdue." },
      { phrase: "count on", type: "Phrasal Verb", translation: "contare su", example: "Who can you always count on without asking?" }
    ],
    guidedQuestions: [
      "Who do you **take for granted** every week?",
      "Who is the **unsung hero** of your routine?",
      "Who can you always **count on**?"
    ]
  },
  {
    question: "Is it selfish to leave the place that raised you?",
    category: "Community",
    depthLevel: 4,
    vocabulary: [
      { phrase: "brain drain", type: "Noun Phrase", translation: "fuga di cervelli", example: "Is brain drain the fault of the people who leave?" },
      { phrase: "give back", type: "Phrasal Verb", translation: "restituire", example: "Do you have any duty to give back to where you grew up?" },
      { phrase: "opportunity", type: "Noun", translation: "opportunità", example: "Should you follow opportunity wherever it goes?" },
      { phrase: "guilt", type: "Noun", translation: "senso di colpa", example: "Do you carry any guilt about leaving?" },
      { phrase: "spread your wings", type: "Idiom", translation: "spiccare il volo", example: "At some point you have to spread your wings." }
    ],
    guidedQuestions: [
      "Whose fault is **brain drain**, really?",
      "Do you have a duty to **give back**?",
      "Is it wrong to **spread your wings** and go?"
    ]
  },
  {
    question: "What would make you volunteer every week for a year?",
    category: "Community",
    depthLevel: 2,
    vocabulary: [
      { phrase: "give up your time", type: "Phrase", translation: "dedicare il proprio tempo", example: "What cause would make you give up your time every week?" },
      { phrase: "make a difference", type: "Idiom", translation: "fare la differenza", example: "Do you need to see that you make a difference?" },
      { phrase: "burn out", type: "Phrasal Verb", translation: "esaurirsi", example: "Volunteers often burn out within a few months." },
      { phrase: "hands-on", type: "Adjective", translation: "pratico, sul campo", example: "Would you prefer hands-on work or organising behind a desk?" },
      { phrase: "a worthy cause", type: "Noun Phrase", translation: "una causa nobile", example: "What counts as a worthy cause for you?" }
    ],
    guidedQuestions: [
      "What would make you **give up your time** weekly?",
      "Do you need proof that you **make a difference**?",
      "How quickly would you **burn out**?"
    ]
  },
  {
    question: "Do people behave better when everyone knows their name?",
    category: "Community",
    depthLevel: 4,
    vocabulary: [
      { phrase: "anonymity", type: "Noun", translation: "anonimato", example: "Does anonymity bring out the worst in people?" },
      { phrase: "accountability", type: "Noun", translation: "responsabilità", example: "Small towns have built-in accountability." },
      { phrase: "reputation", type: "Noun", translation: "reputazione", example: "How much of your behaviour is protecting your reputation?" },
      { phrase: "get away with", type: "Phrasal Verb", translation: "farla franca", example: "In a city you can get away with far more." },
      { phrase: "keep tabs on", type: "Idiom", translation: "tenere d'occhio", example: "Is it comforting or suffocating when neighbours keep tabs on you?" }
    ],
    guidedQuestions: [
      "Does **anonymity** bring out the worst in us?",
      "How much of your behaviour protects your **reputation**?",
      "Is it comforting when people **keep tabs on** you?"
    ]
  },

  {
    question: "What is one thing your family does that you will never repeat?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "break the cycle", type: "Idiom", translation: "spezzare il ciclo", example: "How hard is it to break the cycle you grew up in?" },
      { phrase: "pass down", type: "Phrasal Verb", translation: "tramandare", example: "Families pass down habits without ever discussing them." },
      { phrase: "sweep under the rug", type: "Idiom", translation: "nascondere sotto il tappeto", example: "What does your family sweep under the rug?" },
      { phrase: "a sore subject", type: "Noun Phrase", translation: "un tasto dolente", example: "Every family has one sore subject at dinner." },
      { phrase: "deliberate", type: "Adjective", translation: "intenzionale", example: "Change has to be deliberate, or the old pattern returns." }
    ],
    guidedQuestions: [
      "How hard is it to **break the cycle**?",
      "What does your family **sweep under the rug**?",
      "What is the **sore subject** at your table?"
    ]
  },
  {
    question: "Do you know your parents as people, or only as parents?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "see someone in a new light", type: "Idiom", translation: "vedere qualcuno sotto una nuova luce", example: "When did you first see your mother in a new light?" },
      { phrase: "let your guard down", type: "Idiom", translation: "abbassare la guardia", example: "Do your parents ever let their guard down with you?" },
      { phrase: "a whole life before", type: "Phrase", translation: "tutta una vita prima", example: "They had a whole life before you existed." },
      { phrase: "open up", type: "Phrasal Verb", translation: "aprirsi", example: "What would make your father finally open up?" },
      { phrase: "role", type: "Noun", translation: "ruolo", example: "Is it possible to step outside the role of parent and child?" }
    ],
    guidedQuestions: [
      "When did you **see** a parent **in a new light**?",
      "Do they ever **let your guard down** with you?",
      "What would make them **open up**?"
    ]
  },
  {
    question: "Is blood really thicker than water?",
    category: "Family",
    depthLevel: 3,
    vocabulary: [
      { phrase: "blood is thicker than water", type: "Idiom", translation: "il sangue non è acqua", example: "Do you actually believe blood is thicker than water?" },
      { phrase: "chosen family", type: "Noun Phrase", translation: "famiglia scelta", example: "Is your chosen family closer than your relatives?" },
      { phrase: "obligation", type: "Noun", translation: "obbligo", example: "How much of family life is pure obligation?" },
      { phrase: "estranged", type: "Adjective", translation: "allontanato", example: "Is it ever right to become estranged from a relative?" },
      { phrase: "stand by someone", type: "Phrasal Verb", translation: "stare al fianco di qualcuno", example: "Would you stand by a relative who was clearly wrong?" }
    ],
    guidedQuestions: [
      "Is your **chosen family** closer than your relatives?",
      "How much of it is **obligation**?",
      "Would you **stand by** a relative who was wrong?"
    ]
  },
  {
    question: "What did your family never talk about?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "an unspoken rule", type: "Noun Phrase", translation: "una regola non detta", example: "What was the unspoken rule in your house?" },
      { phrase: "elephant in the room", type: "Idiom", translation: "elefante nella stanza", example: "There was always an elephant in the room at Christmas." },
      { phrase: "brush off", type: "Phrasal Verb", translation: "liquidare, minimizzare", example: "My questions were always brushed off." },
      { phrase: "taboo", type: "Noun", translation: "tabù", example: "Money was a complete taboo growing up." },
      { phrase: "bring it up", type: "Phrasal Verb", translation: "tirarlo fuori", example: "Would you bring it up now, as an adult?" }
    ],
    guidedQuestions: [
      "What was the **unspoken rule** in your house?",
      "What was the **elephant in the room**?",
      "Would you **bring it up** now?"
    ]
  },
  {
    question: "Should you tell a relative a truth that will hurt them?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "a hard truth", type: "Noun Phrase", translation: "una verità scomoda", example: "Is a hard truth always better than a kind silence?" },
      { phrase: "spare someone's feelings", type: "Phrase", translation: "risparmiare i sentimenti a qualcuno", example: "Do you lie to spare their feelings?" },
      { phrase: "keep the peace", type: "Idiom", translation: "mantenere la pace", example: "How much do you swallow just to keep the peace?" },
      { phrase: "come clean", type: "Phrasal Verb", translation: "vuotare il sacco", example: "When would you finally come clean?" },
      { phrase: "the damage is done", type: "Phrase", translation: "il danno è fatto", example: "Sometimes you speak and the damage is done." }
    ],
    guidedQuestions: [
      "Is **a hard truth** always better than kind silence?",
      "How much do you swallow to **keep the peace**?",
      "When would you **come clean**?"
    ]
  },
  {
    question: "What do you hope your family says about you when you are not in the room?",
    category: "Family",
    depthLevel: 3,
    vocabulary: [
      { phrase: "speak highly of", type: "Phrase", translation: "parlare bene di", example: "Would they speak highly of you honestly?" },
      { phrase: "black sheep", type: "Idiom", translation: "pecora nera", example: "Is there a black sheep in every family?" },
      { phrase: "live up to", type: "Phrasal Verb", translation: "essere all'altezza di", example: "Are you still trying to live up to their expectations?" },
      { phrase: "dependable", type: "Adjective", translation: "affidabile", example: "Would they describe you as dependable?" },
      { phrase: "behind your back", type: "Idiom", translation: "alle tue spalle", example: "What is said behind your back at family dinners?" }
    ],
    guidedQuestions: [
      "Would they genuinely **speak highly of** you?",
      "Is there a **black sheep** in your family?",
      "Are you still trying to **live up to** something?"
    ]
  },
  {
    question: "Which family member shaped you most without meaning to?",
    category: "Family",
    depthLevel: 3,
    vocabulary: [
      { phrase: "rub off on", type: "Phrasal Verb", translation: "influenzare, attaccarsi", example: "Their attitude really rubbed off on me." },
      { phrase: "lead by example", type: "Idiom", translation: "dare l'esempio", example: "She never lectured me; she preferred to lead by example." },
      { phrase: "take after", type: "Phrasal Verb", translation: "assomigliare a", example: "Who do you take after most?" },
      { phrase: "formative", type: "Adjective", translation: "formativo", example: "Which years were most formative for you?" },
      { phrase: "without realising it", type: "Phrase", translation: "senza rendersene conto", example: "They changed me without realising it." }
    ],
    guidedQuestions: [
      "Whose attitude did **rub off on** you?",
      "Who chose to **lead by example** instead of lecturing?",
      "Who do you **take after** most?"
    ]
  },
  {
    question: "Is it your job to look after your parents when they are old?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "look after", type: "Phrasal Verb", translation: "prendersi cura di", example: "Who will look after them when they cannot manage?" },
      { phrase: "a duty of care", type: "Noun Phrase", translation: "un dovere di assistenza", example: "Is there a duty of care that children cannot refuse?" },
      { phrase: "sandwich generation", type: "Noun Phrase", translation: "generazione sandwich", example: "The sandwich generation cares for children and parents at once." },
      { phrase: "shoulder the burden", type: "Idiom", translation: "farsi carico del peso", example: "Who in your family will shoulder the burden?" },
      { phrase: "resentment", type: "Noun", translation: "risentimento", example: "Caring without choice can breed resentment." }
    ],
    guidedQuestions: [
      "Who will **look after** them?",
      "Is there a **duty of care** you cannot refuse?",
      "Who will **shoulder the burden** in your family?"
    ]
  },
  {
    question: "What family story has been told so often that nobody checks if it is true?",
    category: "Family",
    depthLevel: 3,
    vocabulary: [
      { phrase: "family lore", type: "Noun Phrase", translation: "leggenda di famiglia", example: "Every family has its own lore." },
      { phrase: "embellish", type: "Verb", translation: "abbellire, esagerare", example: "Has the story been embellished over the years?" },
      { phrase: "set the record straight", type: "Idiom", translation: "mettere le cose in chiaro", example: "Would you set the record straight, or let it stand?" },
      { phrase: "take on a life of its own", type: "Idiom", translation: "prendere vita propria", example: "Over the years the story began to take on a life of its own." },
      { phrase: "hand-me-down", type: "Adjective", translation: "di seconda mano", example: "These are hand-me-down memories, not real ones." }
    ],
    guidedQuestions: [
      "What is your **family lore**?",
      "Has it been **embellished** over the years?",
      "Would you **set the record straight**?"
    ]
  },
  {
    question: "Would you want your children to live the life you have lived?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "in hindsight", type: "Phrase", translation: "col senno di poi", example: "In hindsight, what would you change?" },
      { phrase: "follow in your footsteps", type: "Idiom", translation: "seguire le tue orme", example: "Do you want them to follow in your footsteps?" },
      { phrase: "make your own mistakes", type: "Phrase", translation: "commettere i propri errori", example: "Should they be free to make their own mistakes?" },
      { phrase: "a fresh start", type: "Noun Phrase", translation: "un nuovo inizio", example: "Would you want them to have a completely fresh start?" },
      { phrase: "well-trodden path", type: "Noun Phrase", translation: "strada battuta", example: "Is the well-trodden path really the safest one?" }
    ],
    guidedQuestions: [
      "**In hindsight**, what would you change?",
      "Should they **follow in your footsteps**?",
      "Do they need to **make your own mistakes**?"
    ]
  },
  {
    question: "What does your family argue about that is never really about that?",
    category: "Family",
    depthLevel: 4,
    vocabulary: [
      { phrase: "the real issue", type: "Noun Phrase", translation: "il vero problema", example: "The dishes are never the real issue." },
      { phrase: "bottle up", type: "Phrasal Verb", translation: "reprimere", example: "We bottle things up for months and then explode." },
      { phrase: "a proxy war", type: "Noun Phrase", translation: "una guerra per procura", example: "Most family arguments are a proxy war over respect." },
      { phrase: "blow out of proportion", type: "Idiom", translation: "esagerare a dismisura", example: "Why do we blow small things out of proportion?" },
      { phrase: "get to the bottom of", type: "Idiom", translation: "andare a fondo di", example: "Has anyone tried to get to the bottom of it?" }
    ],
    guidedQuestions: [
      "What is **the real issue** underneath?",
      "Do you **bottle up** things for months?",
      "Has anyone tried to **get to the bottom of** it?"
    ]
  },
  {
    question: "Is there a version of you that only your family gets to see?",
    category: "Family",
    depthLevel: 3,
    vocabulary: [
      { phrase: "revert to", type: "Verb", translation: "tornare a", example: "Do you revert to being fifteen at your parents' house?" },
      { phrase: "let your hair down", type: "Idiom", translation: "lasciarsi andare", example: "Can you actually let your hair down with them?" },
      { phrase: "put on a front", type: "Idiom", translation: "fare finta", example: "Do you put on a front for everyone except family?" },
      { phrase: "unfiltered", type: "Adjective", translation: "senza filtri", example: "Are you unfiltered at home in a good way or a bad way?" },
      { phrase: "old habits", type: "Noun Phrase", translation: "vecchie abitudini", example: "Old habits reappear the moment you walk in." }
    ],
    guidedQuestions: [
      "Do you **revert to** an older version of yourself at home?",
      "Can you truly **let your hair down** there?",
      "Are you **unfiltered** with them?"
    ]
  },
  {
    question: "What would you want a grandchild to ask you about?",
    category: "Family",
    depthLevel: 3,
    vocabulary: [
      { phrase: "pass on", type: "Phrasal Verb", translation: "trasmettere", example: "What would you pass on if you had one conversation?" },
      { phrase: "a turning point", type: "Noun Phrase", translation: "una svolta", example: "Which turning point would you describe first?" },
      { phrase: "worth knowing", type: "Phrase", translation: "che vale la pena sapere", example: "What is genuinely worth knowing about your life?" },
      { phrase: "gloss over", type: "Phrasal Verb", translation: "sorvolare su", example: "What would you gloss over completely?" },
      { phrase: "legacy", type: "Noun", translation: "eredità", example: "Is a legacy stories, or something more solid?" }
    ],
    guidedQuestions: [
      "What would you **pass on** in one conversation?",
      "Which **turning point** would you describe?",
      "What would you quietly **gloss over**?"
    ]
  }
];

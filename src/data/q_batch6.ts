import type { Question } from './questions';

export const batch6: Question[] = [
  {
    id: 300,
    question: "What is a piece of advice you often give but rarely follow yourself?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "easier said than done", translation: "più facile a dirsi che a farsi", type: "Idiom", example: "Telling someone to calm down is always easier said than done." },
      { phrase: "practice what you preach", translation: "predicare bene e razzolare male (mancare di coerenza)", type: "Idiom", example: "You must learn to practice what you preach." },
      { phrase: "hypocrite", translation: "ipocrita", type: "Noun", example: "I felt like a massive hypocrite giving her relationship advice." },
      { phrase: "take to heart", translation: "prendere a cuore / sul serio", type: "Phrase", example: "Did you actually take that harsh criticism to heart?" },
      { phrase: "blind spot", translation: "punto cieco (difetto non visto)", type: "Noun Phrase", example: "We all have a massive blind spot regarding our own flaws." }
    ],
    guidedQuestions: [
      "Why is it so incredibly hard to **practice what you preach**?",
      "Do you think having a **blind spot** is entirely natural?",
      "If advice is **easier said than done**, is it still good advice?"
    ]
  },
  {
    id: 301,
    question: "Do you think artificial intelligence will eventually understand human emotion?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "mimic", translation: "imitare", type: "Verb", example: "An algorithm can easily mimic sadness, but does it feel it?" },
      { phrase: "sentient", translation: "senziente", type: "Adjective", example: "If an AI becomes fully sentient, do we have to give it human rights?" },
      { phrase: "soul", translation: "anima", type: "Noun", example: "Many argue that the soul is what separates humans from machines." },
      { phrase: "uncanny valley", translation: "zona perturbante (teoria)", type: "Noun Phrase", example: "The robot falls into the uncanny valley because it looks too human." },
      { phrase: "boundless", translation: "sconfinato", type: "Adjective", example: "The boundless potential of AI is both exciting and terrifying." }
    ],
    guidedQuestions: [
      "Is it inevitable that computers become fully **sentient**?",
      "Can a machine ever replicate a human **soul**?",
      "If a robot can perfectly **mimic** love, is it actually love?"
    ]
  },
  {
    id: 302,
    question: "If you could fast forward to the end of your life and watch a 5-minute highlight reel, would you?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "spoiler alert", translation: "allerta spoiler", type: "Noun Phrase", example: "Knowing the ending is the ultimate spoiler alert for life." },
      { phrase: "journey over destination", translation: "il viaggio più della destinazione", type: "Phrase", example: "I firmly believe the journey is significantly more important than the destination." },
      { phrase: "inevitability", translation: "inevitabilità", type: "Noun", example: "The inevitability of death makes life incredibly precious." },
      { phrase: "regret", translation: "rimpianto / rimpiangere", type: "Noun/Verb", example: "Would that highlight reel fill you with immense regret?" },
      { phrase: "appreciate the present", translation: "apprezzare il presente", type: "Phrase", example: "Knowing the future would make it impossible to appreciate the present." }
    ],
    guidedQuestions: [
      "Would seeing an early death fill you with **regret** or peace?",
      "Does knowing the ending ruin the ability to **appreciate the present**?",
      "Do you truly value the **journey over destination**?"
    ]
  },
  {
    id: 303,
    question: "What is your absolute favorite smell in the whole world?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "whiff", translation: "folata / zaffata", type: "Noun", example: "I caught a brief whiff of fresh coffee from the bakery." },
      { phrase: "trigger a memory", translation: "scatenare un ricordo", type: "Phrase", example: "The smell of pine needles can instantly trigger a memory." },
      { phrase: "intoxicating", translation: "inebriante", type: "Adjective", example: "The scent of wild jasmine on a summer night is intoxicating." },
      { phrase: "nostalgia", translation: "nostalgia", type: "Noun", example: "The smell of old books brings me an intense sense of nostalgia." },
      { phrase: "comforting", translation: "confortante", type: "Adjective", example: "There is nothing more comforting than the smell of baking bread." }
    ],
    guidedQuestions: [
      "Can a random **whiff** of perfume completely **trigger a memory**?",
      "Why is the smell of rain so universally **comforting**?",
      "What scent gives you the deepest feeling of childhood **nostalgia**?"
    ]
  },
  {
    id: 304,
    question: "What is an assumption you made about adult life when you were kids that turned out to be wildly inaccurate?",
    category: "Personal",
    depthLevel: 2,
    vocabulary: [
      { phrase: "have it all figured out", translation: "aver capito tutto / avere il controllo", type: "Idiom", example: "I used to think my parents had it all completely figured out." },
      { phrase: "rude awakening", translation: "brusco risveglio", type: "Noun Phrase", example: "Paying taxes for the first time was a very rude awakening." },
      { phrase: "wing it", translation: "improvvisare", type: "Idiom", example: "The terrifying secret is that most adults are just winging it." },
      { phrase: "disillusioned", translation: "disilluso", type: "Adjective", example: "Many young graduates quickly become highly disillusioned." },
      { phrase: "on autopilot", translation: "col pilota automatico", type: "Idiom", example: "Sometimes I feel like I am just living my life on autopilot." }
    ],
    guidedQuestions: [
      "When was your biggest **rude awakening** regarding adulthood?",
      "Do you think anyone actually **has it all figured out**?",
      "How do we avoid living the next 30 years entirely **on autopilot**?"
    ]
  },
  {
    id: 305,
    question: "Do you believe there is such a thing as a truly selfless act?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "selfish motive", translation: "motivo egoistico", type: "Noun Phrase", example: "Even giving money to a beggar might stem from a selfish motive." },
      { phrase: "altruism", translation: "altruismo", type: "Noun", example: "Biological altruism exists in many wild animal species." },
      { phrase: "ego boost", translation: "innalzamento dell'ego", type: "Noun Phrase", example: "Posting your charity work online gives a massive ego boost." },
      { phrase: "wired to", translation: "programmato per (biologicamente)", type: "Phrase", example: "Humans are biologically wired to ultimately protect themselves." },
      { phrase: "hidden agenda", translation: "secondo fine", type: "Noun Phrase", example: "Why do we always assume politicians have a deep hidden agenda?" }
    ],
    guidedQuestions: [
      "If helping someone gives you an **ego boost**, is it still **altruism**?",
      "Are humans naturally **wired to** care for strangers?",
      "Can we ever do something kind without a **hidden agenda**?"
    ]
  },
  {
    id: 306,
    question: "What was the most stressful situation you eventually learned to laugh at?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "nightmare", translation: "incubo", type: "Noun", example: "Getting stuck at the airport for two days was an absolute nightmare." },
      { phrase: "silver lining", translation: "lato positivo", type: "Idiom", example: "The only silver lining was that I got a funny story out of it." },
      { phrase: "laugh it off", translation: "farsela passare con una risata", type: "Phrasal Verb", example: "We were furious at the time, but now we just laugh it off." },
      { phrase: "hindsight", translation: "col senno di poi", type: "Noun", example: "In hindsight, it was actually a highly comedic sequence of events." },
      { phrase: "overreact", translation: "reagire in modo spropositato", type: "Verb", example: "I tend to completely overreact to minor inconveniences." }
    ],
    guidedQuestions: [
      "Have you ever completely **overreacted** to a minor failure?",
      "Is it true that tragedy plus time equals comedy in **hindsight**?",
      "How quickly do you usually find the **silver lining**?"
    ]
  },
  {
    id: 307,
    question: "What is your strangest irrational fear?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "irrational", translation: "irrazionale", type: "Adjective", example: "I have a completely irrational fear of large moths." },
      { phrase: "give the creeps", translation: "fare venire i brividi", type: "Idiom", example: "Those old porcelain dolls give me the serious creeps." },
      { phrase: "phobia", translation: "fobia", type: "Noun", example: "She developed an intense phobia of crowded spaces." },
      { phrase: "freak out", translation: "andare fuori di testa / farsi prendere dal panico", type: "Phrasal Verb", example: "I heavily freak out whenever an airplane shakes." },
      { phrase: "paranoia", translation: "paranoia", type: "Noun", example: "Is checking the door lock five times caution or mild paranoia?" }
    ],
    guidedQuestions: [
      "Does thinking about the deep ocean **give you the creeps**?",
      "Why do completely **irrational** fears persist in adults?",
      "Has a childhood fear eventually turned into a lifelong **phobia**?"
    ]
  },
  {
    id: 308,
    question: "Do you think society is currently becoming more lonely or more connected?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "paradox", translation: "paradosso", type: "Noun", example: "The great paradox is that we have social media but zero friends." },
      { phrase: "superficial", translation: "superficiale", type: "Adjective", example: "Online interactions are often incredibly superficial." },
      { phrase: "epidemic of isolation", translation: "epidemia di isolamento", type: "Noun Phrase", example: "We are currently living through a silent epidemic of isolation." },
      { phrase: "echo chamber", translation: "cassa di risonanza (bolla)", type: "Noun Phrase", example: "The internet just traps people in a comforting echo chamber." },
      { phrase: "crave connection", translation: "bramare connessione", type: "Collocation", example: "As humans, we biologically crave deep, meaningful connection." }
    ],
    guidedQuestions: [
      "Why does a highly **superficial** network leave us feeling empty?",
      "Are we living in a dangerous **epidemic of isolation**?",
      "Do we use social media to **crave connection** or avoid it?"
    ]
  },
  {
    id: 309,
    question: "What is a major goal you successfully achieved, only to discover it didn't make you happy?",
    category: "Dreams",
    depthLevel: 3,
    vocabulary: [
      { phrase: "letdown", translation: "delusione", type: "Noun", example: "Reaching the summit was honestly a massive letdown for him." },
      { phrase: "anticipation", translation: "anticipazione / attesa", type: "Noun", example: "Often, the anticipation is vastly better than the reward." },
      { phrase: "empty victory", translation: "vittoria vuota", type: "Noun Phrase", example: "Getting promoted but losing my friends felt like a totally empty victory." },
      { phrase: "misplaced priorities", translation: "priorità sbagliate", type: "Noun Phrase", example: "Focusing solely on money reveals highly misplaced priorities." },
      { phrase: "soul-searching", translation: "introspezione", type: "Noun", example: "After the project failed, I had to do some serious soul-searching." }
    ],
    guidedQuestions: [
      "Is the **anticipation** of an event always better than the reality?",
      "Have you ever experienced a completely **empty victory**?",
      "When did you realize you had heavily **misplaced priorities**?"
    ]
  },
  {
    id: 310,
    question: "If there were absolutely zero consequences, what mildly illegal thing would you do today?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "consequence", translation: "conseguenza", type: "Noun", example: "Actions online usually have zero real-world consequences." },
      { phrase: "bend the rules", translation: "piegare le regole / chiudere un occhio sulle regole", type: "Idiom", example: "Sometimes you have to bend the rules to get things done securely." },
      { phrase: "victimless crime", translation: "crimine senza vittime", type: "Noun Phrase", example: "Jaywalking is widely considered a victimless crime." },
      { phrase: "thrill-seeker", translation: "amante del brivido", type: "Noun Phrase", example: "Are you a natural thrill-seeker or generally highly cautious?" },
      { phrase: "rebellious", translation: "ribelle", type: "Adjective", example: "Stealing an extra pastry felt like a very rebellious act." }
    ],
    guidedQuestions: [
      "Are you the type of person to **bend the rules**?",
      "Do you think digital piracy is a completely **victimless crime**?",
      "Does a lack of **consequences** turn good people evil?"
    ]
  },
  {
    id: 311,
    question: "Do you think art is essentially a luxury for the rich, or a basic necessity for the human soul?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "intrinsic value", translation: "valore intrinseco", type: "Noun Phrase", example: "Music has massive intrinsic value beyond its commercial price." },
      { phrase: "elitist", translation: "elitario", type: "Adjective", example: "The modern fine art market often feels incredibly elitist." },
      { phrase: "food for the soul", translation: "nutrimento per l'anima", type: "Idiom", example: "Poetry might not pay the bills, but it is food for the soul." },
      { phrase: "commodify", translation: "mercificare", type: "Verb", example: "Should we heavily commodify creative expression?" },
      { phrase: "frivolous", translation: "frivolo", type: "Adjective", example: "Some politicians view arts funding as a totally frivolous expense." }
    ],
    guidedQuestions: [
      "Does the expensive art market make the concept of art **elitist**?",
      "Why do some people view painting as a totally **frivolous** career?",
      "Is storytelling the ultimate **food for the soul**?"
    ]
  },
  {
    id: 312,
    question: "What is a simple thing you do that instantly makes you feel like your life is together?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "on top of things", translation: "avere il controllo della situazione", type: "Idiom", example: "Making my bed every morning makes me feel absolutely on top of things." },
      { phrase: "momentum", translation: "slancio", type: "Noun", example: "Starting the day with exercise builds incredible momentum." },
      { phrase: "clutter", translation: "disordine", type: "Noun", example: "Physical clutter almost always leads to severe mental clutter." },
      { phrase: "grounding", translation: "radicante / che ti fa stare coi piedi per terra", type: "Adjective", example: "Watering my plants is a surprisingly grounding daily ritual." },
      { phrase: "small win", translation: "piccola vittoria", type: "Noun Phrase", example: "Getting up on the first alarm is a crucial small win." }
    ],
    guidedQuestions: [
      "How heavily does physical **clutter** affect your mental health?",
      "What is your favorite highly **grounding** habit?",
      "Does securing a **small win** early give you daily **momentum**?"
    ]
  },
  {
    id: 313,
    question: "When did you finally forgive someone who never formally apologized to you?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "hold a grudge", translation: "portare rancore", type: "Idiom", example: "Choosing to hold a grudge is like drinking poison." },
      { phrase: "closure", translation: "chiusura (psicologica)", type: "Noun", example: "You cannot always wait for them to give you closure." },
      { phrase: "make peace with", translation: "fare pace con / accettare", type: "Phrase", example: "I had to eventually make peace with the painful reality." },
      { phrase: "let go of the past", translation: "lasciar andare il passato", type: "Phrase", example: "It takes immense strength to truly let go of the past." },
      { phrase: "resentment", translation: "risentimento", type: "Noun", example: "Deep resentment will slowly destroy your own mental health." }
    ],
    guidedQuestions: [
      "Why is it so harmful to **hold a grudge** for years?",
      "Is it possible to find internal **closure** without an apology?",
      "How do you successfully **make peace with** a broken friendship?"
    ]
  },
  {
    id: 314,
    question: "If you found out you were a character in a simulation, what is the first thing you would do?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "mind-bending", translation: "da far girare la testa (sconvolgente)", type: "Adjective", example: "The ending of that movie was a totally mind-bending experience." },
      { phrase: "glitch in the matrix", translation: "falla nel sistema", type: "Idiom", example: "Experiencing heavy déjà vu feels like a bizarre glitch in the matrix." },
      { phrase: "free will", translation: "libero arbitrio", type: "Noun Phrase", example: "Does human free will exist if someone else programmed us?" },
      { phrase: "nihilistic", translation: "nichilista", type: "Adjective", example: "Knowing the truth might lead to an intensely nihilistic spiral." },
      { phrase: "embrace the absurdity", translation: "accettare l'assurdità", type: "Phrase", example: "If nothing is real, we must simply embrace the absurdity." }
    ],
    guidedQuestions: [
      "Would losing your **free will** completely break your mind?",
      "How often do you experience a surreal **glitch in the matrix**?",
      "Is it healthier to panic or wildly **embrace the absurdity**?"
    ]
  }
];

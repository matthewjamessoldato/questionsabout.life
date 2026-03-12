import type { Question } from './questions';

export const batch1: Question[] = [
  {
    id: 201,
    question: "What is your favorite sound in the morning?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "wake-up call", translation: "sveglia", type: "Noun", example: "The birds singing is my natural wake-up call." },
      { phrase: "get going", translation: "mettersi in moto", type: "Phrasal Verb", example: "I need coffee to get going in the morning." },
      { phrase: "morning person", translation: "mattiniero", type: "Noun Phrase", example: "Are you a morning person or a night owl?" },
      { phrase: "start the day right", translation: "iniziare bene la giornata", type: "Phrase", example: "A good breakfast helps me start the day right." },
      { phrase: "grogginess", translation: "intontimento", type: "Noun", example: "How do you shake off the morning grogginess?" }
    ],
    guidedQuestions: [
      "Are you usually a **morning person**?",
      "How do you **get going** when you feel extremely tired?",
      "What helps you **start the day right**?"
    ]
  },
  {
    id: 202,
    question: "What is the strangest food combination you secretly enjoy?",
    category: "Food",
    depthLevel: 1,
    vocabulary: [
      { phrase: "acquired taste", translation: "gusto acquisito", type: "Noun Phrase", example: "Olives are an acquired taste for many people." },
      { phrase: "guilty pleasure", translation: "piacere inconfessabile", type: "Noun Phrase", example: "Eating pizza with pineapple is my guilty pleasure." },
      { phrase: "flavor profile", translation: "profilo di sapori", type: "Collocation", example: "Sweet and salty make a great flavor profile." },
      { phrase: "gross out", translation: "fare schifo", type: "Phrasal Verb", example: "Does seeing someone eat ketchup with eggs gross you out?" },
      { phrase: "culinary experiment", translation: "esperimento culinario", type: "Collocation", example: "What is your most successful culinary experiment?" }
    ],
    guidedQuestions: [
      "Do you have a food that is an **acquired taste** for you?",
      "What is your ultimate **guilty pleasure** snack?",
      "Does mixing sweet and savory ever **gross you out**?"
    ]
  },
  {
    id: 203,
    question: "If you could instantly learn any pointless skill, what would it be?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "party trick", translation: "trucchetto da festa", type: "Noun Phrase", example: "Juggling is my favorite party trick." },
      { phrase: "knack for", translation: "inclinazione per", type: "Noun Phrase", example: "Does he have a knack for remembering random facts?" },
      { phrase: "show off", translation: "mettersi in mostra", type: "Phrasal Verb", example: "I love to show off my ability to solve a Rubik's cube." },
      { phrase: "useless talent", translation: "talento inutile", type: "Noun Phrase", example: "What is the most useless talent you possess?" },
      { phrase: "pick up", translation: "imparare (rapidamente)", type: "Phrasal Verb", example: "Did you pick up that trick from a YouTube video?" }
    ],
    guidedQuestions: [
      "What is your go-to **party trick**?",
      "Do you have a **knack for** learning useless things quickly?",
      "Would you like to **show off** a weird talent on live TV?"
    ]
  },
  {
    id: 204,
    question: "What movie universe would be the absolute worst to live in?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "dystopian", translation: "distopico", type: "Adjective", example: "A dystopian future sounds terrifying." },
      { phrase: "fend for oneself", translation: "cavarsela da soli", type: "Idiom", example: "In a zombie apocalypse, you must fend for yourself." },
      { phrase: "plot twist", translation: "colpo di scena", type: "Noun Phrase", example: "I hate when a movie relies on a cheap plot twist." },
      { phrase: "bleak", translation: "desolante", type: "Adjective", example: "The world of Mad Max is incredibly bleak." },
      { phrase: "survival guide", translation: "guida di sopravvivenza", type: "Noun Phrase", example: "You would need a survival guide to make it there." }
    ],
    guidedQuestions: [
      "Do you enjoy reading **dystopian** novels?",
      "How well could you **fend for yourself** in the wilderness?",
      "Why do you think **bleak** settings are so popular in movies?"
    ]
  },
  {
    id: 205,
    question: "What is the most underrated household chore?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "odd job", translation: "lavoretto", type: "Noun Phrase", example: "I like doing odd jobs around the house on Sundays." },
      { phrase: "mindless task", translation: "compito che non richiede di pensare", type: "Noun Phrase", example: "Folding laundry is a relaxing, mindless task." },
      { phrase: "tidying up", translation: "mettere in ordine", type: "Phrasal Verb", example: "Is tidying up therapeutic for you?" },
      { phrase: "get it over with", translation: "togliersi il pensiero", type: "Idiom", example: "I always do the dishes immediately to get it over with." },
      { phrase: "sense of accomplishment", translation: "senso di realizzazione", type: "Noun Phrase", example: "A clean kitchen gives me a strong sense of accomplishment." }
    ],
    guidedQuestions: [
      "What **mindless task** actually helps you relax?",
      "Do you usually procrastinate cleaning or try to **get it over with**?",
      "Does **tidying up** your physical space help clear your mind?"
    ]
  },
  {
    id: 206,
    question: "What is a highly generic compliment you've received that you still secretly treasure?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "make my day", translation: "svoltarmi la giornata", type: "Idiom", example: "That small compliment really made my day." },
      { phrase: "flattered", translation: "lusingato", type: "Adjective", example: "I was so flattered when they praised my work." },
      { phrase: "boost someone's ego", translation: "pompare l'ego", type: "Idiom", example: "A generic compliment can sometimes boost someone's ego exactly when they need it." },
      { phrase: "stick with you", translation: "rimanerti impresso", type: "Idiom", example: "Why do some offhand comments stick with you for years?" },
      { phrase: "brush it off", translation: "non darci peso / ignorare", type: "Phrasal Verb", example: "I normally brush off compliments because I get shy." }
    ],
    guidedQuestions: [
      "What compliment could instantly **make your day**?",
      "Is it wrong if we sometimes want to **boost our ego**?",
      "Why do some small remarks **stick with you** for decades?"
    ]
  },
  {
    id: 207,
    question: "Have you ever kept a secret that wasn't yours, just to avoid drama?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "stir the pot", translation: "mettere zizzania", type: "Idiom", example: "I didn't tell him because I didn't want to stir the pot." },
      { phrase: "turn a blind eye", translation: "chiudere un occhio", type: "Idiom", example: "Is it ever okay to turn a blind eye to someone else's mistake?" },
      { phrase: "spill the beans", translation: "svuotare il sacco", type: "Idiom", example: "I accidentally spilled the beans about the surprise party." },
      { phrase: "bystander", translation: "spettatore", type: "Noun", example: "Sometimes it is safer to remain a bystander." },
      { phrase: "burden", translation: "fardello", type: "Noun", example: "Keeping that secret felt like a heavy burden." }
    ],
    guidedQuestions: [
      "When is it justified to **turn a blind eye**?",
      "Have you ever accidentally **spilled the beans** on something important?",
      "Does staying quiet make you a responsible friend, or a cowardly **bystander**?"
    ]
  },
  {
    id: 208,
    question: "What completely normal social interaction always feels intensely awkward to you?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "small talk", translation: "chiacchiere di circostanza", type: "Noun Phrase", example: "I hate making small talk in elevators." },
      { phrase: "overthink", translation: "pensare troppo", type: "Verb", example: "Do you overthink every text message before sending it?" },
      { phrase: "break eye contact", translation: "distogliere lo sguardo", type: "Collocation", example: "I never know when to break eye contact." },
      { phrase: "second-guess", translation: "mettere in dubbio / ripensarci", type: "Verb", example: "I always second-guess myself after a job interview." },
      { phrase: "social cue", translation: "segnale sociale", type: "Noun Phrase", example: "Are you good at reading social cues, or do you miss them?" }
    ],
    guidedQuestions: [
      "Why is **small talk** so difficult for introverts?",
      "Do you tend to **overthink** conversations after they happen?",
      "What is the easiest **social cue** to misinterpret?"
    ]
  },
  {
    id: 209,
    question: "How do you act when you intensely dislike someone but are forced to work with them?",
    category: "Relationships",
    depthLevel: 2,
    vocabulary: [
      { phrase: "bite my tongue", translation: "mordersi la lingua", type: "Idiom", example: "I had to bite my tongue during the meeting to keep the peace." },
      { phrase: "fake a smile", translation: "fingere un sorriso", type: "Collocation", example: "Can you easily fake a smile when you are annoyed?" },
      { phrase: "keep it professional", translation: "mantenere un atteggiamento professionale", type: "Phrase", example: "No matter what, you must keep it professional." },
      { phrase: "grin and bear it", translation: "stringere i denti e sopportare", type: "Idiom", example: "Sometimes you just have to grin and bear it." },
      { phrase: "rub someone the wrong way", translation: "irritare qualcuno", type: "Idiom", example: "His arrogant tone really rubs me the wrong way." }
    ],
    guidedQuestions: [
      "Have you ever had to **bite your tongue** to save your job?",
      "Is it dishonest to **fake a smile**, or is it just polite?",
      "What personality trait usually **rubs you the wrong way**?"
    ]
  },
  {
    id: 210,
    question: "What is a trend you enthusiastically participated in, but now deeply regret?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "jump on the bandwagon", translation: "saltare sul carro del vincitore", type: "Idiom", example: "Everyone was doing it, so I decided to jump on the bandwagon." },
      { phrase: "cringe", translation: "imbarazzarsi (per se stessi)", type: "Verb", example: "I cringe whenever I see my old high school photos." },
      { phrase: "fad", translation: "moda passeggera", type: "Noun", example: "Do you think TikTok dances will just be a forgotten fad?" },
      { phrase: "peer pressure", translation: "pressione dei pari", type: "Noun Phrase", example: "Did you follow the trend because you liked it, or because of peer pressure?" },
      { phrase: "look back on", translation: "ripensare al passato", type: "Phrasal Verb", example: "When you look back on it, why did you do it?" }
    ],
    guidedQuestions: [
      "Have you ever **jumped on the bandwagon** for something silly?",
      "What makes old trends so **cringe-worthy** later on?",
      "Is **peer pressure** stronger on teenagers or adults?"
    ]
  },
  {
    id: 211,
    question: "Do you think people are generally more genuine in person or online?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "hide behind a screen", translation: "nascondersi dietro uno schermo", type: "Idiom", example: "It is easy to be brave when you hide behind a screen." },
      { phrase: "true colors", translation: "veri colori (vera natura)", type: "Idiom", example: "Social media often reveals people's true colors." },
      { phrase: "put up a front", translation: "creare una facciata", type: "Idiom", example: "Is he truly happy, or just putting up a front online?" },
      { phrase: "sugar-coat", translation: "indorare la pillola", type: "Verb", example: "Don't sugar-coat it, tell me the absolute truth." },
      { phrase: "keyboard warrior", translation: "leone da tastiera", type: "Noun Phrase", example: "He acts tough on Twitter, but he's just a keyboard warrior." }
    ],
    guidedQuestions: [
      "Why is it so easy to **hide behind a screen**?",
      "Have you ever discovered someone's **true colors** through their online behavior?",
      "Why do people feel the need to **put up a front** on Instagram?"
    ]
  },
  {
    id: 212,
    question: "When is the last time you changed a deeply held opinion?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "stubbornly hold onto", translation: "aggrapparsi ostinatamente a", type: "Phrase", example: "Why do we stubbornly hold onto ideas long after they are disproven?" },
      { phrase: "see the light", translation: "vedere la luce (cambiare idea)", type: "Idiom", example: "It took years, but he finally saw the light." },
      { phrase: "cognitive dissonance", translation: "dissonanza cognitiva", type: "Noun Phrase", example: "Admitting you are wrong often causes cognitive dissonance." },
      { phrase: "play devil's advocate", translation: "fare l'avvocato del diavolo", type: "Idiom", example: "I'll play devil's advocate just to test your theory." },
      { phrase: "broaden my horizons", translation: "allargare i miei orizzonti", type: "Idiom", example: "Traveling helped me completely broaden my horizons." }
    ],
    guidedQuestions: [
      "Why is it so hard to stop **stubbornly holding onto** a wrong opinion?",
      "Do you ever **play devil's advocate** just to make a conversation more interesting?",
      "What has helped you **broaden your horizons** the most?"
    ]
  },
  {
    id: 213,
    question: "What is the most beautiful thing about the city you grew up in?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "hometown pride", translation: "orgoglio per la propria città", type: "Noun Phrase", example: "No matter how flawed it is, I still have hometown pride." },
      { phrase: "fond memories", translation: "bei ricordi", type: "Collocation", example: "I have so many fond memories of that old park." },
      { phrase: "hidden gem", translation: "gemma nascosta", type: "Noun Phrase", example: "This tiny bakery is a true hidden gem." },
      { phrase: "nostalgia hits hard", translation: "la nostalgia colpisce forte", type: "Phrase", example: "Whenever I visit my old school, nostalgia hits me hard." },
      { phrase: "hustle and bustle", translation: "trambusto", type: "Idiom", example: "I love the hustle and bustle of downtown Rome." }
    ],
    guidedQuestions: [
      "What is a **hidden gem** in your hometown?",
      "Do you miss the **hustle and bustle** when you are in a quiet place?",
      "When you think of your childhood, what **fond memories** come to mind?"
    ]
  },
  {
    id: 214,
    question: "If you had to teach a class on one highly specific topic tomorrow, what would it be?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "niche", translation: "di nicchia", type: "Adjective", example: "I have a very niche interest in vintage typewriters." },
      { phrase: "infodump", translation: "scaricare informazioni", type: "Verb", example: "I tend to infodump when someone asks about my favorite movie." },
      { phrase: "master the basics", translation: "imparare le basi", type: "Phrase", example: "You cannot innovate until you master the basics." },
      { phrase: "subject matter expert", translation: "esperto del settore", type: "Noun Phrase", example: "Are you a subject matter expert in anything?" },
      { phrase: "wing it", translation: "improvvisare", type: "Idiom", example: "I didn't prepare a presentation, so I'll just wing it." }
    ],
    guidedQuestions: [
      "What is a **niche** topic you know way too much about?",
      "Would you prepare for a completely spontaneous speech, or just **wing it**?",
      "Is it better to **master the basics** widely, or become an expert in one thing?"
    ]
  },
  {
    id: 215,
    question: "Do you believe 'the journey is more important than the destination'?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "instant gratification", translation: "gratificazione istantanea", type: "Noun Phrase", example: "Social media trains us to seek instant gratification." },
      { phrase: "burnout", translation: "esaurimento", type: "Noun", example: "Focusing only on the goal leads to serious burnout." },
      { phrase: "embrace the grind", translation: "accettare la fatica", type: "Phrase", example: "If you want to be an athlete, you must embrace the grind." },
      { phrase: "tunnel vision", translation: "visione a tunnel (fissarsi)", type: "Noun Phrase", example: "He had such tunnel vision on his career that he lost his friends." },
      { phrase: "delayed reward", translation: "ricompensa ritardata", type: "Noun Phrase", example: "Are you capable of waiting for a delayed reward?" }
    ],
    guidedQuestions: [
      "Is social media ruining our ability to wait for a **delayed reward**?",
      "Have you ever experienced **burnout** from focusing too hard on a goal?",
      "How do you avoid getting **tunnel vision** in your career?"
    ]
  }
];

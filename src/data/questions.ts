export interface VocabularyItem {
  phrase: string;
  type?: string; // e.g. "Phrasal Verb", "Idiom", "Noun"
  translation?: string;
  example: string;
}

export interface Question {
  id: number;
  question: string;
  category: string;
  vocabulary: VocabularyItem[];
  guidedQuestions?: string[]; // New field for practice mode
}

export const questions: Question[] = [
  {
    "id": 1,
    "question": "What makes you feel calm?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "calm down",
        "translation": "calmarsi",
        "type": "Phrasal Verb",
        "example": "When you are furious, what is the one thing that helps you calm down?"
      },
      {
        "phrase": "cheer up",
        "translation": "tirarsi su",
        "type": "Phrasal Verb",
        "example": "Who is the first person you call when you need someone to cheer you up?"
      },
      {
        "phrase": "wind down",
        "translation": "rilassarsi",
        "type": "Phrasal Verb",
        "example": "Do you prefer to wind down with a book or Netflix after a long day?"
      },
      {
        "phrase": "take a breather",
        "translation": "prendere un attimo di respiro",
        "type": "Idiom",
        "example": "How often do you step outside to take a breather during work?"
      },
      {
        "phrase": "center myself",
        "translation": "centrarmi",
        "type": "Collocation",
        "example": "Do you use meditation to center yourself, or do you find it boring?"
      },
      {
        "phrase": "at ease",
        "translation": "a proprio agio",
        "type": "Adjective Phrase",
        "example": "In what kind of social situation do you feel most at ease?"
      },
      {
        "phrase": "switch off",
        "translation": "staccare la spina",
        "type": "Phrasal Verb",
        "example": "Is it hard for you to switch off from work on the weekends?"
      },
      {
        "phrase": "take it easy",
        "translation": "prendersela comoda",
        "type": "Idiom",
        "example": "Do you prefer to take it easy on your days off, or do you stay active?"
      }
    ],
    "guidedQuestions": [
      "What is your go-to method to **wind down** after a stressful week?",
      "Have you ever tried to **calm down** but found it impossible? What happened?",
      "Do you think modern life makes it harder to **center yourself** than in the past?",
      "If you could design a room specifically to **take a breather**, what would be in it?"
    ]
  },
  {
    "id": 2,
    "question": "What is one goal you have for this year?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "set the bar high",
        "translation": "puntare in alto",
        "type": "Idiom",
        "example": "Do you usually set the bar high for yourself or play it safe?"
      },
      {
        "phrase": "roadmap to success",
        "translation": "piano per il successo",
        "type": "Collocation",
        "example": "Do you have a clear roadmap to success or are you improvising?"
      },
      {
        "phrase": "milestone",
        "translation": "pietra miliare",
        "type": "Noun",
        "example": "What is the next big milestone you are hoping to reach?"
      },
      {
        "phrase": "stretch goal",
        "translation": "obiettivo ambizioso",
        "type": "Collocation",
        "example": "Have you ever set a stretch goal that you actually achieved?"
      },
      {
        "phrase": "stay on track",
        "translation": "rimanere in carreggiata",
        "type": "Idiom",
        "example": "What tools or apps do you use to stay on track with your habits?"
      }
    ],
    "guidedQuestions": [
      "When was the last time you hit a major **milestone** in your life?",
      "Why is it important to have a **roadmap to success** rather than just improvising?",
      "Do you think it's better to **set the bar high** and fail, or set low goals and succeed?",
      "If money were no object, what **stretch goal** would you pursue immediately?"
    ]
  },
  {
    "id": 3,
    "question": "What is something you wish you believed sooner?",
    "category": "Wisdom",
    "vocabulary": [
      {
        "phrase": "imposter syndrome",
        "translation": "sindrome dell'impostore",
        "type": "Collocation",
        "example": "Have you ever felt imposter syndrome despite being qualified?"
      },
      {
        "phrase": "self-worth",
        "translation": "autostima",
        "type": "Noun",
        "example": "Do you define your self-worth by your career or who you are?"
      },
      {
        "phrase": "epiphany",
        "translation": "illuminazione",
        "type": "Noun",
        "example": "What was the biggest epiphany you had in your 20s?"
      },
      {
        "phrase": "validation",
        "translation": "conferma",
        "type": "Noun",
        "example": "Do you constantly seek validation from others on social media?"
      },
      {
        "phrase": "trust the process",
        "translation": "fidarsi del processo",
        "type": "Phrase",
        "example": "When things go wrong, do you panic or trust the process?"
      }
    ],
    "guidedQuestions": [
      "Have you ever experienced **imposter syndrome** at work or school?",
      "What triggered your biggest **epiphany** about how the world works?",
      "Is seeking **validation** from others a natural human need or a weakness?",
      "If you could teach your younger self one thing about **self-worth**, what would it be?"
    ]
  },
  {
    "id": 4,
    "question": "What would you do with one free day?",
    "category": "Fun",
    "vocabulary": [
      {
        "phrase": "sleep in",
        "translation": "dormire fino a tardi",
        "type": "Phrasal Verb",
        "example": "Do you love to sleep in or do you feel guilty wasting the morning?"
      },
      {
        "phrase": "put off",
        "translation": "rimandare",
        "type": "Phrasal Verb",
        "example": "What is one chore you always put off until the last minute?"
      },
      {
        "phrase": "a day to myself",
        "translation": "un giorno per me",
        "type": "Phrase",
        "example": "If you had a day to yourself, would you stay home or go out?"
      },
      {
        "phrase": "wander aimlessly",
        "translation": "vagare senza meta",
        "type": "Collocation",
        "example": "Do you enjoy wandering aimlessly in a new city or do you use a map?"
      },
      {
        "phrase": "treat myself",
        "translation": "coccolarsi",
        "type": "Phrase",
        "example": "How do you treat yourself after a really hard week?"
      }
    ],
    "guidedQuestions": [
      "What is the first thing you do when you have **a day to myself**?",
      "Why do we often **put off** the things we enjoy the most?",
      "Is it better to plan a free day or just **wander aimlessly**?",
      "If you had to spend $1000 to **treat yourself** in one day, how would you spend it?"
    ]
  },
  {
    "id": 5,
    "question": "What is something you like about your classmates?",
    "category": "Social",
    "vocabulary": [
      {
        "phrase": "diverse backgrounds",
        "translation": "background diversi",
        "type": "Collocation",
        "example": "Do you think working with people from diverse backgrounds sparks more creativity?"
      },
      {
        "phrase": "supportive atmosphere",
        "translation": "atmosfera di supporto",
        "type": "Collocation",
        "example": "Does your current workplace have a supportive atmosphere?"
      },
      {
        "phrase": "click with",
        "translation": "andare d'accordo",
        "type": "Phrasal Verb",
        "example": "Do you usually click with people instantly or does it take time?"
      },
      {
        "phrase": "sense of community",
        "translation": "senso di comunità",
        "type": "Phrase",
        "example": "Is a strong sense of community missing in big cities today?"
      },
      {
        "phrase": "uplifting",
        "translation": "ispiratore",
        "type": "Adjective",
        "example": "What is the most uplifting movie you have ever seen?"
      }
    ],
    "guidedQuestions": [
      "Who was the last person you immediately **clicked with**?",
      "How important is a **supportive atmosphere** for learning a new language?",
      "Do **diverse backgrounds** make a group harder to manage or more interesting?",
      "If you could build the perfect **sense of community**, what rules would you make?"
    ]
  },
  {
    "id": 6,
    "question": "What is one thing that makes you feel strong?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "work on",
        "translation": "lavorare su",
        "type": "Phrasal Verb",
        "example": "What is one personal weakness you need to work on this year?"
      },
      {
        "phrase": "get better at",
        "translation": "migliorare in",
        "type": "Phrasal Verb",
        "example": "Do you think you can get better at singing, or is it a natural talent?"
      },
      {
        "phrase": "dig deep",
        "translation": "scavare a fondo",
        "type": "Idiom",
        "example": "When was the last time you had to dig deep to find motivation?"
      },
      {
        "phrase": "stand tall",
        "translation": "camminare a testa alta",
        "type": "Idiom",
        "example": "How do you stand tall when everyone around you disagrees with you?"
      },
      {
        "phrase": "bounce back",
        "translation": "riprendersi",
        "type": "Phrasal Verb",
        "example": "Do you usually bounce back quickly after a rejection?"
      },
      {
        "phrase": "mental toughness",
        "translation": "forza mentale",
        "type": "Noun",
        "example": "Do you think mental toughness is more important than physical strength?"
      },
      {
        "phrase": "power through",
        "translation": "tenere duro",
        "type": "Phrasal Verb",
        "example": "How do you power through the afternoon slump at work?"
      }
    ],
    "guidedQuestions": [
      "When was the last time you had to **dig deep** to finish something difficult?",
      "Do you think **mental toughness** is something you are born with or something you learn?",
      "How do you usually **bounce back** after a disappointment?",
      "What is one skill you are trying to **get better at** right now?"
    ]
  },
  {
    "id": 7,
    "question": "When do you feel proud of yourself?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "keep at it",
        "translation": "insistere",
        "type": "Phrasal Verb",
        "example": "When a task is boring, do you give up or keep at it?"
      },
      {
        "phrase": "stick with",
        "translation": "continuare con",
        "type": "Phrasal Verb",
        "example": "Is it hard for you to stick with a diet or exercise routine?"
      },
      {
        "phrase": "milestone",
        "translation": "pietra miliare",
        "type": "Noun",
        "example": "Do you celebrate every milestone or only the big ones?"
      },
      {
        "phrase": "own it",
        "translation": "assumersi la responsabilità",
        "type": "Idiom",
        "example": "When you make a mistake, can you own it immediately?"
      },
      {
        "phrase": "take pride in",
        "translation": "essere orgoglioso di",
        "type": "Collocation",
        "example": "What is one small thing you take pride in doing well?"
      },
      {
        "phrase": "small win",
        "translation": "piccola vittoria",
        "type": "Noun",
        "example": "What was a small win you experienced this week?"
      },
      {
        "phrase": "real progress",
        "translation": "progresso reale",
        "type": "Collocation",
        "example": "How do you measure real progress in your career?"
      }
    ],
    "guidedQuestions": [
      "What is a **small win** you have had recently that made you smile?",
      "Why is it important to **take pride in** your work even if no one else sees it?",
      "Have you ever wanted to quit something but decided to **stick with** it? What happened?",
      "How do you know when you are making **real progress** in life?"
    ]
  },
  {
    "id": 8,
    "question": "What makes you feel peaceful?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "calm down",
        "translation": "calmarsi",
        "type": "Phrasal Verb",
        "example": "Does music help you calm down when you are angry?"
      },
      {
        "phrase": "slow down",
        "translation": "rallentare",
        "type": "Phrasal Verb",
        "example": "Do you need to slow down or speed up in your life right now?"
      },
      {
        "phrase": "sense of peace",
        "translation": "senso di pace",
        "type": "Noun Phrase",
        "example": "Does cleaning your house give you a sense of peace?"
      },
      {
        "phrase": "unwind",
        "translation": "rilassarsi",
        "type": "Verb",
        "example": "Is it easy for you to unwind, or is your mind always racing?"
      },
      {
        "phrase": "find my calm",
        "translation": "trovare la mia calma",
        "type": "Collocation",
        "example": "Where do you go to find your calm when the city is too loud?"
      },
      {
        "phrase": "settle my mind",
        "translation": "calmare la mente",
        "type": "Collocation",
        "example": "What do you do to settle your mind before a big decision?"
      },
      {
        "phrase": "feel grounded",
        "translation": "sentirsi con i piedi per terra",
        "type": "Adjective Phrase",
        "example": "Does being in nature make you feel grounded?"
      }
    ],
    "guidedQuestions": [
      "Where is the one place you go to **find your calm**?",
      "Do you find it easy or difficult to **slow down** on weekends?",
      "What activity gives you the deepest **sense of peace**?",
      "How do you **unwind** after a particularly busy day?"
    ]
  },
  {
    "id": 9,
    "question": "What is something you do to take care of yourself?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "get up early",
        "translation": "alzarsi presto",
        "type": "Phrasal Verb",
        "example": "Do you force yourself to get up early even on weekends?"
      },
      {
        "phrase": "wind down",
        "translation": "rilassarsi",
        "type": "Phrasal Verb",
        "example": "What is your favorite ritual to wind down at night?"
      },
      {
        "phrase": "recharge",
        "translation": "ricaricare",
        "type": "Verb",
        "example": "Does socializing recharge you or drain you?"
      },
      {
        "phrase": "set boundaries",
        "translation": "stabilire dei confini",
        "type": "Collocation",
        "example": "Are you afraid to set boundaries with your boss?"
      },
      {
        "phrase": "carve out time",
        "translation": "ritagliarsi del tempo",
        "type": "Idiom",
        "example": "How do you carve out time for hobbies in a busy week?"
      },
      {
        "phrase": "check in with myself",
        "translation": "fare il punto con me stesso",
        "type": "Phrasal Verb",
        "example": "Do you ever stop to check in with myself during the day?"
      },
      {
        "phrase": "pamper myself",
        "translation": "coccolarmi",
        "type": "Verb",
        "example": "Do you need a lot of money to pamper myself or can you do it cheaply?"
      }
    ],
    "guidedQuestions": [
      "Is it harder for you to **get up early** or go to bed early?",
      "Why is it so difficult for some people to **set boundaries**?",
      "How do you ensure you **carve out time** for things you love?",
      "What is your favorite way to **pamper yourself** when you have extra money?"
    ]
  },
  {
    "id": 10,
    "question": "What helps you when you are stressed?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "open up",
        "translation": "aprirsi",
        "type": "Phrasal Verb",
        "example": "Is it hard for you to open up to new people?"
      },
      {
        "phrase": "bottle up",
        "translation": "reprimere",
        "type": "Phrasal Verb",
        "example": "Why do you think men tend to bottle up their feelings more than women?"
      },
      {
        "phrase": "decompress",
        "translation": "decomprimere",
        "type": "Verb",
        "example": "Do you need silence to decompress, or do you prefer noise?"
      },
      {
        "phrase": "let off steam",
        "translation": "sfogarsi",
        "type": "Idiom",
        "example": "Do you go to the gym to let off steam?"
      },
      {
        "phrase": "talk it out",
        "translation": "parlarne",
        "type": "Phrasal Verb",
        "example": "When you argue, do you talk it out immediately or wait?"
      },
      {
        "phrase": "slow my breathing",
        "translation": "rallentare il respiro",
        "type": "Collocation",
        "example": "Have you ever tried to slow my breathing to stop a panic attack?"
      },
      {
        "phrase": "hit the reset button",
        "translation": "premere il pulsante di reset",
        "type": "Idiom",
        "example": "If you could hit the reset button on your career, would you?"
      }
    ],
    "guidedQuestions": [
      "Who is the one person you can always **open up** to?",
      "Do you tend to **bottle up** your emotions or let them out?",
      "What is your healthiest way to **let off steam**?",
      "How do you **hit the reset button** when life gets overwhelming?"
    ]
  },
  {
    "id": 11,
    "question": "What color shows how you feel today?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "feeling blue",
        "translation": "sentirsi triste",
        "type": "Idiom",
        "example": "Why do you think people say they are feeling blue when they are sad?"
      },
      {
        "phrase": "rosy outlook",
        "translation": "prospettiva rosea",
        "type": "Collocation",
        "example": "Do you generally maintain a rosy outlook on life?"
      },
      {
        "phrase": "grey mood",
        "translation": "umore grigio",
        "type": "Idiom",
        "example": "What usually puts you in a grey mood?"
      },
      {
        "phrase": "in the pink",
        "translation": "in ottima forma",
        "type": "Idiom",
        "example": "What helps you stay in the pink of health?"
      },
      {
        "phrase": "see red",
        "translation": "vedere rosso",
        "type": "Idiom",
        "example": "What is one thing that makes you see red instantly?"
      },
      {
        "phrase": "green with envy",
        "translation": "verde d'invidia",
        "type": "Idiom",
        "example": "Have you ever been green with envy over a friend's success?"
      },
      {
        "phrase": "black and white",
        "translation": "bianco e nero",
        "type": "Idiom",
        "example": "Do you see the world in black and white or in shades of grey?"
      }
    ],
    "guidedQuestions": [
      "Why do you think we associate **feeling blue** with sadness?",
      "Do you generally have a **rosy outlook** on the future?",
      "When was the last time you **saw red**?",
      "Is morality always **black and white** or are there grey areas?"
    ]
  },
  {
    "id": 12,
    "question": "What sound helps you feel relaxed?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "white noise",
        "translation": "rumore bianco",
        "type": "Noun",
        "example": "Do you need white noise to help you sleep?"
      },
      {
        "phrase": "gentle hum",
        "translation": "ronzio gentile",
        "type": "Noun Phrase",
        "example": "Does the gentle hum of a fan relax you or annoy you?"
      },
      {
        "phrase": "crashing waves",
        "translation": "onde che si infrangono",
        "type": "Collocation",
        "example": "Is the sound of crashing waves the most relaxing sound on earth?"
      },
      {
        "phrase": "soft melody",
        "translation": "melodia dolce",
        "type": "Noun Phrase",
        "example": "Can a soft melody change your mood instantly?"
      },
      {
        "phrase": "patter of rain",
        "translation": "ticchettio della pioggia",
        "type": "Collocation",
        "example": "Do you love falling asleep to the patter of rain on the roof?"
      },
      {
        "phrase": "silence",
        "translation": "silenzio",
        "type": "Noun",
        "example": "Is absolute silence golden or uncomfortable for you?"
      },
      {
        "phrase": "crackling fire",
        "translation": "fuoco scoppiettante",
        "type": "Collocation",
        "example": "Does sitting by a crackling fire make you feel safe?"
      }
    ],
    "guidedQuestions": [
      "Do you prefer **silence** or background noise when you study?",
      "Does the **patter of rain** make you feel sleepy or energized?",
      "Is **white noise** helpful or annoying for you?",
      "Where can you go to hear nothing but **crashing waves**?"
    ]
  },
  {
    "id": 13,
    "question": "What food makes you feel better?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "comfort food",
        "translation": "cibo di conforto",
        "type": "Noun",
        "example": "What is your ultimate go-to comfort food?"
      },
      {
        "phrase": "whip up",
        "translation": "preparare al volo",
        "type": "Phrasal Verb",
        "example": "Can you whip up a delicious meal in less than twenty minutes?"
      },
      {
        "phrase": "hit the spot",
        "translation": "essere proprio quello che ci voleva",
        "type": "Idiom",
        "example": "What drink really hits the spot on a hot summer day?"
      },
      {
        "phrase": "guilt-free treat",
        "translation": "piacere senza sensi di colpa",
        "type": "Noun Phrase",
        "example": "Do you have a favorite guilt-free treat?"
      },
      {
        "phrase": "hearty meal",
        "translation": "pasto abbondante",
        "type": "Collocation",
        "example": "Do you prefer a light snack or a hearty meal after a long day?"
      },
      {
        "phrase": "grab a bite",
        "translation": "mangiare un boccone",
        "type": "Idiom",
        "example": "Where do you usually go to grab a bite with friends?"
      },
      {
        "phrase": "savor the flavor",
        "translation": "assaporare il gusto",
        "type": "Collocation",
        "example": "Do you eat quickly or do you strictly savor the flavor?"
      }
    ],
    "guidedQuestions": [
      "What is your ultimate **comfort food** when you are feeling down?",
      "Can you **whip up** dinner for four people in under 30 minutes?",
      "What is a **guilt-free treat** that you enjoy regularly?",
      "Do you usually **savor the flavor** of your food or eat quickly?"
    ]
  },
  {
    "id": 14,
    "question": "What is a small thing that makes you feel good?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "simple pleasure",
        "translation": "piacere semplice",
        "type": "Noun Phrase",
        "example": "What is a simple pleasure you enjoy daily?"
      },
      {
        "phrase": "random act of kindness",
        "translation": "atto casuale di gentilezza",
        "type": "Noun Phrase",
        "example": "When was the last time you performed a random act of kindness?"
      },
      {
        "phrase": "warm smile",
        "translation": "sorriso caloroso",
        "type": "Collocation",
        "example": "Does a warm smile from a stranger improve your day?"
      },
      {
        "phrase": "catch up",
        "translation": "recuperare",
        "type": "Phrasal Verb",
        "example": "Who is one old friend you would love to catch up with?"
      },
      {
        "phrase": "fresh air",
        "translation": "aria fresca",
        "type": "Noun",
        "example": "How often do you go outside just to get some fresh air?"
      },
      {
        "phrase": "good hair day",
        "translation": "giornata sì per i capelli",
        "type": "Noun Phrase",
        "example": "Does having a good hair day actually make you feel more confident?"
      },
      {
        "phrase": "check off",
        "translation": "spuntare",
        "type": "Phrasal Verb",
        "example": "Do you love the feeling when you check off items on your list?"
      }
    ],
    "guidedQuestions": [
      "What is one **simple pleasure** you cannot live without?",
      "Have you ever been the recipient of a **random act of kindness**?",
      "Who do you need to **catch up** with this week?",
      "How does getting some **fresh air** change your mood?"
    ]
  },
  {
    "id": 15,
    "question": "What do you do when you feel shy?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "break the ice",
        "translation": "rompere il ghiaccio",
        "type": "Idiom",
        "example": "What is your best joke to break the ice?"
      },
      {
        "phrase": "warm up to",
        "translation": "iniziare ad apprezzare",
        "type": "Phrasal Verb",
        "example": "Does it take you a while to warm up to new people?"
      },
      {
        "phrase": "come out of my shell",
        "translation": "uscire dal guscio",
        "type": "Idiom",
        "example": "What helped you to come out of your shell when you were younger?"
      },
      {
        "phrase": "awkward silence",
        "translation": "silenzio imbarazzante",
        "type": "Noun Phrase",
        "example": "What do you usually say to fill an awkward silence?"
      },
      {
        "phrase": "make conversation",
        "translation": "fare conversazione",
        "type": "Collocation",
        "example": "Do you find it difficult to make conversation with strangers?"
      },
      {
        "phrase": "stumble over words",
        "translation": "inciampare sulle parole",
        "type": "Verb Phrase",
        "example": "When do you tend to stumble over your words?"
      },
      {
        "phrase": "feel self-conscious",
        "translation": "sentirsi a disagio",
        "type": "Adj Phrase",
        "example": "What makes you feel self-conscious in public?"
      }
    ],
    "guidedQuestions": [
      "What is your favorite question to **break the ice** at a party?",
      "Do people usually **warm up to** you quickly or does it take time?",
      "Are you afraid of **awkward silences** or do you find them peaceful?",
      "What helps you **come out of your shell** when you are nervous?"
    ]
  },
  {
    "id": 16,
    "question": "How do you show love to others?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "words of affirmation",
        "translation": "parole di affermazione",
        "type": "Noun Phrase",
        "example": "Do you appreciate words of affirmation more than gifts?"
      },
      {
        "phrase": "quality time",
        "translation": "tempo di qualità",
        "type": "Noun",
        "example": "How do you like to spend quality time with your family?"
      },
      {
        "phrase": "acts of service",
        "translation": "atti di servizio",
        "type": "Noun Phrase",
        "example": "What are acts of service that you do for others?"
      },
      {
        "phrase": "go out of my way",
        "translation": "fare i salti mortali",
        "type": "Idiom",
        "example": "Who is someone you would always go out of your way to help?"
      },
      {
        "phrase": "be there for",
        "translation": "esserci per",
        "type": "Phrasal Verb",
        "example": "How do you show friends you will be there for them?"
      },
      {
        "phrase": "thoughtful gesture",
        "translation": "gesto premuroso",
        "type": "Noun Phrase",
        "example": "What is the most thoughtful gesture you have received?"
      },
      {
        "phrase": "listen intently",
        "translation": "ascoltare attentamente",
        "type": "Collocation",
        "example": "Is it hard to listen intently when you are tired?"
      }
    ],
    "guidedQuestions": [
      "Do you prefer receiving **words of affirmation** or gifts?",
      "What is a **thoughtful gesture** someone has done for you recently?",
      "Who was the last person you had to **go out of your way** to help?",
      "Why is **quality time** often harder to give than money?"
    ]
  },
  {
    "id": 17,
    "question": "What is one thing you do when you are angry?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "see red",
        "translation": "vedere rosso",
        "type": "Idiom",
        "example": "What kind of behavior makes you see red?"
      },
      {
        "phrase": "storm out",
        "translation": "uscire infuriato",
        "type": "Phrasal Verb",
        "example": "Have you ever wanted to storm out of a meeting?"
      },
      {
        "phrase": "blow off steam",
        "translation": "sfogarsi",
        "type": "Idiom",
        "example": "Where do you go to blow off steam?"
      },
      {
        "phrase": "count to ten",
        "translation": "contare fino a dieci",
        "type": "Idiom",
        "example": "Do you actually count to ten when you are angry?"
      },
      {
        "phrase": "bite my tongue",
        "translation": "mordersi la lingua",
        "type": "Idiom",
        "example": "When was the last time you had to bite your tongue?"
      },
      {
        "phrase": "cool down",
        "translation": "raffreddarsi",
        "type": "Phrasal Verb",
        "example": "How lung does it usually take you to cool down after an argument?"
      },
      {
        "phrase": "lash out",
        "translation": "scagliarsi contro",
        "type": "Phrasal Verb",
        "example": "Why do people lash out when they are stressed?"
      }
    ],
    "guidedQuestions": [
      "Is it better to **bite your tongue** or say what you really think?",
      "Do you usually **storm out** of an argument or stay and fight?",
      "What is your safest way to **blow off steam**?",
      "Have you ever **lashed out** at someone who didn't deserve it?"
    ]
  },
  {
    "id": 18,
    "question": "When do you feel most like yourself?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "in my element",
        "translation": "nel mio elemento",
        "type": "Idiom",
        "example": "When and where do you feel completely in your element?"
      },
      {
        "phrase": "true to myself",
        "translation": "fedele a me stesso",
        "type": "Idiom",
        "example": "Is it difficult to stay true to yourself in a corporate job?"
      },
      {
        "phrase": "let my guard down",
        "translation": "abbassare la guardia",
        "type": "Idiom",
        "example": "Who is the one person you can really let your guard down with?"
      },
      {
        "phrase": "comfortable in my skin",
        "translation": "a mio agio nella mia pelle",
        "type": "Idiom",
        "example": "Does getting older make you feel more comfortable in your skin?"
      },
      {
        "phrase": "at ease",
        "translation": "a proprio agio",
        "type": "Idiom",
        "example": "What environment makes you feel most at ease?"
      },
      {
        "phrase": "authentic self",
        "translation": "sé autentico",
        "type": "Noun Phrase",
        "example": "Do you show your authentic self on social media?"
      },
      {
        "phrase": "fully present",
        "translation": "pienamente presente",
        "type": "Adj Phrase",
        "example": "How do you ensure you are fully present when with family?"
      }
    ],
    "guidedQuestions": [
      "When was the last time you felt truly **in your element**?",
      "Why is it so hard to **let your guard down** with new people?",
      "Do you feel **comfortable in your skin** right now?",
      "What prevents us from showing our **authentic self** to the world?"
    ]
  },
  {
    "id": 19,
    "question": "What helps you feel safe?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "safe haven",
        "translation": "porto sicuro",
        "type": "Noun",
        "example": "Is your home your personal safe haven?"
      },
      {
        "phrase": "security blanket",
        "translation": "coperta di Linus",
        "type": "Idiom",
        "example": "What acts as a security blanket for you in stressful times?"
      },
      {
        "phrase": "look out for",
        "translation": "fare attenzione a",
        "type": "Phrasal Verb",
        "example": "Do you think neighbours still look out for each other?"
      },
      {
        "phrase": "trust my gut",
        "translation": "fidarmi del mio istinto",
        "type": "Idiom",
        "example": "When was the last time you decided to trust your gut?"
      },
      {
        "phrase": "peace of mind",
        "translation": "pace mentale",
        "type": "Noun Phrase",
        "example": "What gives you the greatest peace of mind?"
      },
      {
        "phrase": "comfort zone",
        "translation": "zona di comfort",
        "type": "Noun",
        "example": "When did you last step out of your comfort zone?"
      },
      {
        "phrase": "watch over",
        "translation": "vegliare su",
        "type": "Phrasal Verb",
        "example": "Do you believe someone is watching over you?"
      }
    ],
    "guidedQuestions": [
      "Where is your personal **safe haven**?",
      "Do you think it is important to step out of your **comfort zone** to be happy?",
      "When was a time you decided to **trust your gut** and were right?",
      "What gives you the greatest **peace of mind**: money, friends, or health?"
    ]
  },
  {
    "id": 20,
    "question": "What makes you feel excited?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "buzz with energy",
        "translation": "fremere di energia",
        "type": "Idiom",
        "example": "What kind of events always buzz with energy?"
      },
      {
        "phrase": "look forward to",
        "translation": "non vedere l'ora di",
        "type": "Phrasal Verb",
        "example": "What do you look forward to every week?"
      },
      {
        "phrase": "can't wait",
        "translation": "non vedere l'ora",
        "type": "Idiom",
        "example": "What is one thing you can't wait to do this year?"
      },
      {
        "phrase": "adrenaline rush",
        "translation": "scarica di adrenalina",
        "type": "Noun",
        "example": "Do you enjoy the feeling of a big adrenaline rush?"
      },
      {
        "phrase": "hyped up",
        "translation": "esaltato",
        "type": "Phrasal Verb",
        "example": "Do you get hyped up for new movie releases?"
      },
      {
        "phrase": "jump for joy",
        "translation": "saltare di gioia",
        "type": "Idiom",
        "example": "What news would make you jump for joy right now?"
      },
      {
        "phrase": "thrilled to bits",
        "translation": "emozionatissimo",
        "type": "Idiom",
        "example": "When was the last time you were thrilled to bits?"
      }
    ],
    "guidedQuestions": [
      "What is something simple you **look forward to** every day?",
      "Do you enjoy the feeling of an **adrenaline rush** or do you prefer calm?",
      "Why do people get so **hyped up** about sports?",
      "When was the last time you wanted to **jump for joy**?"
    ]
  },

  {
    "id": 21,
    "question": "What is something you are learning about yourself?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "blind spot",
        "translation": "punto cieco",
        "type": "Noun Phrase",
        "example": "What is a major blind spot you discovered about yourself?"
      },
      {
        "phrase": "come to terms with",
        "translation": "scendere a patti con",
        "type": "Idiom",
        "example": "Have you finally come to terms with your limitations?"
      },
      {
        "phrase": "introspection",
        "translation": "introspezione",
        "type": "Noun",
        "example": "Is introspection helpful or does it lead to overthinking?"
      },
      {
        "phrase": "evolve",
        "translation": "evolvere",
        "type": "Verb",
        "example": "How do you hope to evolve in the next five years?"
      },
      {
        "phrase": "self-awareness",
        "translation": "autoconsapevolezza",
        "type": "Noun",
        "example": "Do you think self-awareness can be taught?"
      }
    ],
    "guidedQuestions": [
      "What is a **blind spot** you recently discovered about yourself?",
      "Is **introspection** useful or can it lead to overthinking?",
      "What is one thing you have had to **come to terms with** as an adult?",
      "How do you hope to **evolve** in the next five years?"
    ]
  },
  {
    "id": 22,
    "question": "What is something you want to get better at?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "hone my skills",
        "translation": "affinare le mie abilità",
        "type": "Verb",
        "example": "How do you plan to hone your skills this year?"
      },
      {
        "phrase": "mastery",
        "translation": "maestria",
        "type": "Noun",
        "example": "Is it possible to achieve mastery in a skill without 10,000 hours of practice?"
      },
      {
        "phrase": "proficiency",
        "translation": "competenza",
        "type": "Noun",
        "example": "How long does it take to reach proficiency in a new language?"
      },
      {
        "phrase": "learning curve",
        "translation": "curva di apprendimento",
        "type": "Noun Phrase",
        "example": "Are you afraid of a steep learning curve?"
      },
      {
        "phrase": "polish up",
        "translation": "rispolverare",
        "type": "Phrasal Verb",
        "example": "What skills do you need to polish up for your job?"
      }
    ],
    "guidedQuestions": [
      "Is it better to strive for **mastery** in one thing or **proficiency** in many?",
      "How do you deal with a steep **learning curve** when starting something new?",
      "What is one skill you would love to **hone** if you had more time?",
      "Do you ever feel the need to **polish up** your social skills?"
    ]
  },
  {
    "id": 23,
    "question": "What are you proud of this month?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "sense of accomplishment",
        "translation": "senso di realizzazione",
        "type": "Noun Phrase",
        "example": "What gives you the biggest sense of accomplishment?"
      },
      {
        "phrase": "milestone",
        "translation": "pietra miliare",
        "type": "Noun",
        "example": "What is the next big milestone you are celebrating?"
      },
      {
        "phrase": "pay off",
        "translation": "ripagare",
        "type": "Phrasal Verb",
        "example": "When did you feel that your hard work finally paid off?"
      },
      {
        "phrase": "pat myself on the back",
        "translation": "complimentarmi con me stesso",
        "type": "Idiom",
        "example": "Do you ever pat yourself on the back for a job well done?"
      },
      {
        "phrase": "feat",
        "translation": "impresa",
        "type": "Noun",
        "example": "What is one feat you are surprisingly proud of?"
      }
    ],
    "guidedQuestions": [
      "What is one recent **feat** that surprised even you?",
      "When does hard work truly **pay off** in your opinion?",
      "Why is it important to feel a **sense of accomplishment** regularly?",
      "Do you often **pat yourself on the back** or are you critical of yourself?"
    ]
  },
  {
    "id": 24,
    "question": "What is a mistake that helped you grow?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "blessing in disguise",
        "translation": "fortuna nella sfortuna",
        "type": "Idiom",
        "example": "Have you ever lost something that was actually a blessing in disguise?"
      },
      {
        "phrase": "wake-up call",
        "translation": "campanello d'allarme",
        "type": "Noun Phrase",
        "example": "Have you ever experienced a serious wake-up call about your health?"
      },
      {
        "phrase": "hard pill to swallow",
        "translation": "pillola amara da mandare giù",
        "type": "Idiom",
        "example": "Is constructive criticism a hard pill to swallow for you?"
      },
      {
        "phrase": "course-correct",
        "translation": "correggere la rotta",
        "type": "Verb",
        "example": "Is it easy for you to course-correct when plans fail?"
      },
      {
        "phrase": "in hindsight",
        "translation": "col senno di poi",
        "type": "Adverbial Phrase",
        "example": "In hindsight, what would you have done differently?"
      }
    ],
    "guidedQuestions": [
      "Have you ever had a failure that was a **blessing in disguise**?",
      "What was a recent **wake-up call** you experienced?",
      "Why is failure often a **hard pill to swallow**?",
      "Is it better to stick to a plan or **course-correct** frequently?"
    ]
  },
  {
    "id": 25,
    "question": "What is one good habit you want to start?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "ingrain",
        "translation": "inculcare",
        "type": "Verb",
        "example": "How do you ingrain a new habit into your daily routine?"
      },
      {
        "phrase": "second nature",
        "translation": "seconda natura",
        "type": "Idiom",
        "example": "What skill has become second nature to you?"
      },
      {
        "phrase": "consistency",
        "translation": "costanza",
        "type": "Noun",
        "example": "Why is consistency so difficult to maintain?"
      },
      {
        "phrase": "stick to it",
        "translation": "attenercisici",
        "type": "Phrasal Verb",
        "example": "What is the secret to help you stick to it when things get hard?"
      },
      {
        "phrase": "discipline",
        "translation": "disciplina",
        "type": "Noun",
        "example": "Does your work require a lot of discipline?"
      }
    ],
    "guidedQuestions": [
      "What healthy habit do you struggle to **stick to**?",
      "Do you believe **discipline** is more important than motivation?",
      "How long does it take for a new habit to become **second nature**?",
      "What is the secret to maintaining **consistency**?"
    ]
  },
  {
    "id": 26,
    "question": "What is something new you want to try?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "venture into",
        "translation": "avventurarsi in",
        "type": "Phrasal Verb",
        "example": "Are you looking to venture into any new fields this year?"
      },
      {
        "phrase": "dabble in",
        "translation": "cimentarsi in",
        "type": "Phrasal Verb",
        "example": "Do you prefer to master one skill or dabble in many?"
      },
      {
        "phrase": "broaden my horizons",
        "translation": "allargare i miei orizzonti",
        "type": "Idiom",
        "example": "How do you plan to broaden your horizons?"
      },
      {
        "phrase": "give it a shot",
        "translation": "provarci",
        "type": "Idiom",
        "example": "When was the last time you decided to just give it a shot?"
      }
    ],
    "guidedQuestions": [
      "Have you ever wanted to **venture into** a completely different career?",
      "Do you prefer to **dabble in** many hobbies or master just one?",
      "How do you plan to **broaden your horizons** in the next year?",
      "When was the last time you decided to just **give it a shot** with something new?"
    ]
  },
  {
    "id": 27,
    "question": "What do you do when something is difficult?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "persevere",
        "translation": "perseverare",
        "type": "Verb",
        "example": "What motivates you to persevere when things get tough?"
      },
      {
        "phrase": "grit",
        "translation": "grinta",
        "type": "Noun",
        "example": "Do you think grit is more important than talent?"
      },
      {
        "phrase": "power through",
        "translation": "tenere duro",
        "type": "Phrasal Verb",
        "example": "How do you power through when you are exhausted?"
      },
      {
        "phrase": "tackle head-on",
        "translation": "affrontare di petto",
        "type": "Collocation",
        "example": "Do you tackle problems head-on or avoid them?"
      }
    ],
    "guidedQuestions": [
      "What inspires you to **persevere** when you are ready to give up?",
      "Do you believe **grit** is more important than intelligence for success?",
      "How do you **power through** a task that you find incredibly boring?",
      "Is it better to **tackle problems head-on** or wait for them to resolve themselves?"
    ]
  },
  {
    "id": 28,
    "question": "What do you wish you had more time for?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "leisure",
        "translation": "tempo libero",
        "type": "Noun",
        "example": "Do you manage to find time for leisure?"
      },
      {
        "phrase": "unplug",
        "translation": "staccare la spina",
        "type": "Verb",
        "example": "Is it hard for you to unplug from technology?"
      },
      {
        "phrase": "recharge my batteries",
        "translation": "ricaricare le batterie",
        "type": "Idiom",
        "example": "What is the best way to recharge your batteries?"
      },
      {
        "phrase": "me-time",
        "translation": "tempo per me",
        "type": "Noun (Informal)",
        "example": "How much me-time do you realistically get per week?"
      }
    ],
    "guidedQuestions": [
      "How do you manage to find enough time for **leisure** in your busy life?",
      "Why is it so difficult for some people to **unplug** from their phones?",
      "What is the most effective way for you to **recharge your batteries**?",
      "How often do you prioritize **me-time** over social obligations?"
    ]
  },
  {
    "id": 29,
    "question": "What motivates you to keep going?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "intrinsic motivation",
        "translation": "motivazione intrinseca",
        "type": "Noun Phrase",
        "example": "Do you rely more on intrinsic motivation or external rewards?"
      },
      {
        "phrase": "drive",
        "translation": "spinta",
        "type": "Noun",
        "example": "Where does your drive to succeed come from?"
      },
      {
        "phrase": "aspirations",
        "translation": "aspirazioni",
        "type": "Noun",
        "example": "Have your aspirations changed since you were younger?"
      },
      {
        "phrase": "incentive",
        "translation": "incentivo",
        "type": "Noun",
        "example": "What is the biggest incentive for you to work hard?"
      }
    ],
    "guidedQuestions": [
      "Do you find **intrinsic motivation** more powerful than external rewards?",
      "Where do you think your natural **drive** to succeed comes from?",
      "How have your **aspirations** changed since you were ten years old?",
      "What is the biggest **incentive** your boss could offer to make you work harder?"
    ]
  },
  {
    "id": 30,
    "question": "What is something you have done that surprised you?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "exceeded expectations",
        "translation": "superato le aspettative",
        "type": "Phrase",
        "example": "What is one thing that exceeded all your expectations recently?"
      },
      {
        "phrase": "underestimate",
        "translation": "sottostimare",
        "type": "Verb",
        "example": "Do you tend to underestimate or overestimate your abilities?"
      },
      {
        "phrase": "taken aback",
        "translation": "preso alla sprovvista",
        "type": "Phrasal Verb",
        "example": "When were you last taken aback by someone's kindness?"
      },
      {
        "phrase": "spontaneous",
        "translation": "spontaneo",
        "type": "Adjective",
        "example": "Are you usually a spontaneous person?"
      }
    ],
    "guidedQuestions": [
      "What is one thing you have achieved that **exceeded your own expectations**?",
      "Do you think people often **underestimate** your true potential?",
      "When was the last time you were completely **taken aback** by someone's behavior?",
      "If you had a **hidden talent**, what would you want it to be?"
    ]
  },
  {
    "id": 31,
    "question": "What is one goal you have for this year?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "set the bar high",
        "translation": "alzare l'asticella",
        "type": "Idiom",
        "example": "Why is it important to set the bar high for yourself?"
      },
      {
        "phrase": "roadmap to success",
        "translation": "tabella di marcia per il successo",
        "type": "Noun Phrase",
        "example": "Do you have a clear roadmap to success?"
      },
      {
        "phrase": "follow through",
        "translation": "portare a termine",
        "type": "Phrasal Verb",
        "example": "Is it hard for you to follow through on New Year's resolutions?"
      },
      {
        "phrase": "milestone",
        "translation": "pietra miliare",
        "type": "Noun",
        "example": "What is the next big milestone you are aiming for?"
      },
      {
        "phrase": "stretch goal",
        "translation": "obiettivo ambizioso",
        "type": "Noun Phrase",
        "example": "What is one ambitious stretch goal you have set?"
      },
      {
        "phrase": "stay on track",
        "translation": "mantenere la rotta",
        "type": "Idiom",
        "example": "What tools help you stay on track with your habits?"
      },
      {
        "phrase": "ambitious",
        "translation": "ambizioso",
        "type": "Adjective",
        "example": "Do people describe you as ambitious?"
      }
    ]
  },
  {
    "id": 32,
    "question": "What is a small win you had this week?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "pat on the back",
        "translation": "pacca sulla spalla",
        "type": "Idiom",
        "example": "Do you remember to give yourself a pat on the back?"
      },
      {
        "phrase": "incremental progress",
        "translation": "progresso incrementale",
        "type": "Noun Phrase",
        "example": "Do you value incremental progress or only big wins?"
      },
      {
        "phrase": "silver lining",
        "translation": "lato positivo",
        "type": "Idiom",
        "example": "Can you usually find the silver lining in bad situations?"
      },
      {
        "phrase": "momentum",
        "translation": "slancio",
        "type": "Noun",
        "example": "Does a small win help you build momentum?"
      },
      {
        "phrase": "check off",
        "translation": "spuntare",
        "type": "Phrasal Verb",
        "example": "Is it satisfying to check off items from a list?"
      },
      {
        "phrase": "morale boost",
        "translation": "iniezione di morale",
        "type": "Noun Phrase",
        "example": "What gives you a quick morale boost at work?"
      },
      {
        "phrase": "acknowledge",
        "translation": "riconoscere",
        "type": "Verb",
        "example": "Do you acknowledge your own achievements enough?"
      }
    ]
  },
  {
    "id": 33,
    "question": "What is something you stopped doing, and why?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "kick the habit",
        "translation": "perdere il vizio",
        "type": "Idiom",
        "example": "What habit was the hardest for you to kick?"
      },
      {
        "phrase": "cut out",
        "translation": "eliminare",
        "type": "Phrasal Verb",
        "example": "Have you ever tried to cut out sugar or caffeine?"
      },
      {
        "phrase": "cold turkey",
        "translation": "di punto in bianco",
        "type": "Adverb",
        "example": "Is it better to quit cold turkey or gradually?"
      },
      {
        "phrase": "turn a new leaf",
        "translation": "voltare pagina",
        "type": "Idiom",
        "example": "What made you want to turn a new leaf?"
      },
      {
        "phrase": "detrimental",
        "translation": "dannoso",
        "type": "Adjective",
        "example": "What is one habit that is detrimental to your productivity?"
      },
      {
        "phrase": "break the cycle",
        "translation": "spezzare il ciclo",
        "type": "Phrase",
        "example": "How did you break the cycle of bad habits?"
      },
      {
        "phrase": "prioritize",
        "translation": "dare priorità",
        "type": "Verb",
        "example": "How do you decide what to prioritize?"
      }
    ]
  },
  {
    "id": 34,
    "question": "What is something you want to do more often?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "make time for",
        "translation": "trovare tempo per",
        "type": "Phrase",
        "example": "What is something you wish you could make time for?"
      },
      {
        "phrase": "get into the habit of",
        "translation": "prendere l'abitudine di",
        "type": "Phrase",
        "example": "Are you trying to get into the habit of anything new?"
      },
      {
        "phrase": "consistency is key",
        "translation": "la costanza è la chiave",
        "type": "Saying",
        "example": "Do you agree that consistency is key for success?"
      },
      {
        "phrase": "carve out",
        "translation": "ritagliare",
        "type": "Phrasal Verb",
        "example": "How do you carve out time for yourself?"
      },
      {
        "phrase": "recharge",
        "translation": "ricaricare",
        "type": "Verb",
        "example": "Where do you go to recharge?"
      },
      {
        "phrase": "quality time",
        "translation": "tempo di qualità",
        "type": "Noun Phrase",
        "example": "Do you get enough quality time with friends?"
      },
      {
        "phrase": "incorporate",
        "translation": "incorporare",
        "type": "Verb",
        "example": "How can you incorporate more exercise into your day?"
      }
    ]
  },
  {
    "id": 35,
    "question": "What is a skill you want to learn?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "learning curve",
        "translation": "curva di apprendimento",
        "type": "Noun Phrase",
        "example": "Does a steep learning curve discourage you?"
      },
      {
        "phrase": "get the hang of",
        "translation": "prenderci la mano",
        "type": "Idiom",
        "example": "What took you a long time to get the hang of?"
      },
      {
        "phrase": "mastery",
        "translation": "maestria",
        "type": "Noun",
        "example": "What skill would you like to achieve mastery in?"
      },
      {
        "phrase": "broaden my horizons",
        "translation": "allargare i miei orizzonti",
        "type": "Idiom",
        "example": "Does traveling help broaden your horizons?"
      },
      {
        "phrase": "start from scratch",
        "translation": "ricominciare da zero",
        "type": "Idiom",
        "example": "Have you ever had to start from scratch on a project?"
      },
      {
        "phrase": "hone",
        "translation": "affinare",
        "type": "Verb",
        "example": "How often do you practice to hone your skills?"
      },
      {
        "phrase": "under my belt",
        "translation": "alle spalle",
        "type": "Idiom",
        "example": "What achievement are you proud to have under your belt?"
      }
    ]
  },
  {
    "id": 36,
    "question": "What helps you focus?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "get into the zone",
        "translation": "entrare nella zona",
        "type": "Idiom",
        "example": "What kind of music helps you get into the zone?"
      },
      {
        "phrase": "tune out",
        "translation": "escludere",
        "type": "Phrasal Verb",
        "example": "Can you easily tune out background noise?"
      },
      {
        "phrase": "eliminate distractions",
        "translation": "eliminare le distrazioni",
        "type": "Collocation",
        "example": "How do you eliminate distractions when working?"
      },
      {
        "phrase": "flow state",
        "translation": "stato di flusso",
        "type": "Noun Term",
        "example": "When was the last time you entered a flow state?"
      },
      {
        "phrase": "laser-focused",
        "translation": "focalizzato come un laser",
        "type": "Adjective",
        "example": "What makes you laser-focused?"
      },
      {
        "phrase": "undivided attention",
        "translation": "attenzione indivisa",
        "type": "Collocation",
        "example": "Is it hard to give someone your undivided attention?"
      },
      {
        "phrase": "minimize interruptions",
        "translation": "minimizzare le interruzioni",
        "type": "Phrase",
        "example": "What do you do to minimize interruptions?"
      }
    ]
  },
  {
    "id": 37,
    "question": "What is one thing you have improved at recently?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "come a long way",
        "translation": "aver fatto molta strada",
        "type": "Idiom",
        "example": "In what area have you come a long way recently?"
      },
      {
        "phrase": "polish up",
        "translation": "rispolverare",
        "type": "Phrasal Verb",
        "example": "Do you need to polish up your English skills?"
      },
      {
        "phrase": "steady progress",
        "translation": "progresso costante",
        "type": "Collocation",
        "example": "Are you making steady progress on your goals?"
      },
      {
        "phrase": "noticeable improvement",
        "translation": "miglioramento notevole",
        "type": "Noun Phrase",
        "example": "Have you seen a noticeable improvement in your fitness?"
      },
      {
        "phrase": "proficiency",
        "translation": "competenza",
        "type": "Noun",
        "example": "Do you aim for perfection or proficiency?"
      },
      {
        "phrase": "step up my game",
        "translation": "migliorare il mio livello",
        "type": "Idiom",
        "example": "When did you decide to step up your game?"
      },
      {
        "phrase": "refine",
        "translation": "raffinare",
        "type": "Verb",
        "example": "How do you refine your strategies?"
      }
    ]
  },
  {
    "id": 38,
    "question": "What is something you were afraid of but did anyway?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "take the plunge",
        "translation": "buttarsi",
        "type": "Idiom",
        "example": "What made you finally take the plunge?"
      },
      {
        "phrase": "face my fears",
        "translation": "affrontare le mie paure",
        "type": "Collocation",
        "example": "Do you prefer to avoid or face your fears?"
      },
      {
        "phrase": "step out of my comfort zone",
        "translation": "uscire dalla mia zona di comfort",
        "type": "Idiom",
        "example": "When did you last step out of your comfort zone?"
      },
      {
        "phrase": "nerve-wracking",
        "translation": "snervante",
        "type": "Adjective",
        "example": "What is the most nerve-wracking thing you have done?"
      },
      {
        "phrase": "conquer",
        "translation": "conquistare",
        "type": "Verb",
        "example": "How did you conquer your fear?"
      },
      {
        "phrase": "leap of faith",
        "translation": "salto nel buio",
        "type": "Idiom",
        "example": "Have you ever taken a leap of faith?"
      },
      {
        "phrase": "guts",
        "translation": "fegato",
        "type": "Noun (Slang)",
        "example": "Does it take guts to admit you are wrong?"
      }
    ]
  },
  {
    "id": 39,
    "question": "What advice would you give to your younger self?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "hindsight is 20/20",
        "translation": "col senno di poi",
        "type": "Proverb",
        "example": "Do you hate the phrase hindsight is 20/20?"
      },
      {
        "phrase": "don't sweat the small stuff",
        "translation": "non preoccuparti delle piccolezze",
        "type": "Idiom",
        "example": "Is it easy to not sweat the small stuff?"
      },
      {
        "phrase": "trust your gut",
        "translation": "fidati del tuo istinto",
        "type": "Idiom",
        "example": "Should you always trust your gut?"
      },
      {
        "phrase": "be kind to yourself",
        "translation": "sii gentile con te stesso",
        "type": "Phrase",
        "example": "How can you be kind to yourself today?"
      },
      {
        "phrase": "resilience",
        "translation": "resilienza",
        "type": "Noun",
        "example": "Is resilience a trait you admire?"
      },
      {
        "phrase": "embrace uncertainty",
        "translation": "abbracciare l'incertezza",
        "type": "Phrase",
        "example": "Why is it hard to embrace uncertainty?"
      },
      {
        "phrase": "live in the moment",
        "translation": "vivere il momento",
        "type": "Phrase",
        "example": "Do you struggle to live in the moment?"
      }
    ]
  },
  {
    "id": 40,
    "question": "What is something you wish you believed sooner?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "imposter syndrome",
        "translation": "sindrome dell'impostore",
        "type": "Noun Term",
        "example": "Have you ever experienced imposter syndrome?"
      },
      {
        "phrase": "self-worth",
        "translation": "autostima",
        "type": "Noun",
        "example": "What do you base your self-worth on?"
      },
      {
        "phrase": "epiphany",
        "translation": "epifania",
        "type": "Noun",
        "example": "Did you have a sudden epiphany recently?"
      },
      {
        "phrase": "validation",
        "translation": "convalida",
        "type": "Noun",
        "example": "Do you seek validation from others?"
      },
      {
        "phrase": "limitations",
        "translation": "limiti",
        "type": "Noun",
        "example": "Do you believe your limitations are real?"
      },
      {
        "phrase": "trust the process",
        "translation": "fidarsi del processo",
        "type": "Phrase",
        "example": "Is trust the process good advice?"
      },
      {
        "phrase": "inner critic",
        "translation": "critico interiore",
        "type": "Noun Phrase",
        "example": "Is your inner critic helpful or harmful?"
      }
    ]
  },
  {
    "id": 41,
    "question": "What does a good friend do?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "thick and thin",
        "translation": "buona e cattiva sorte",
        "type": "Idiom",
        "example": "Who has stuck by you through thick and thin?"
      },
      {
        "phrase": "shoulder to cry on",
        "translation": "spalla su cui piangere",
        "type": "Idiom",
        "example": "Are you a good shoulder to cry on?"
      },
      {
        "phrase": "confidant",
        "translation": "confidente",
        "type": "Noun",
        "example": "Who is your main confidant?"
      },
      {
        "phrase": "have your back",
        "translation": "coprirti le spalle",
        "type": "Idiom",
        "example": "Do you know who will always have your back?"
      },
      {
        "phrase": "unconditional support",
        "translation": "supporto incondizionato",
        "type": "Collocation",
        "example": "Do you receive unconditional support from family?"
      },
      {
        "phrase": "drift apart",
        "translation": "allontanarsi",
        "type": "Phrasal Verb",
        "example": "Why do friends inevitably drift apart?"
      },
      {
        "phrase": "bond",
        "translation": "legame",
        "type": "Noun",
        "example": "What strengthens the bond between friends?"
      }
    ]
  },
  {
    "id": 42,
    "question": "What kind of person do you like working with?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "team player",
        "translation": "giocatore di squadra",
        "type": "Noun Phrase",
        "example": "Do you consider yourself a natural team player?"
      },
      {
        "phrase": "pull their weight",
        "translation": "fare la propria parte",
        "type": "Idiom",
        "example": "What do you do when a colleague doesn't pull their weight?"
      },
      {
        "phrase": "collaborative",
        "translation": "collaborativo",
        "type": "Adjective",
        "example": "Do you prefer independent or collaborative work?"
      },
      {
        "phrase": "reliable",
        "translation": "affidabile",
        "type": "Adjective",
        "example": "How important is it to be reliable?"
      },
      {
        "phrase": "bounce ideas off",
        "translation": "scambiare idee con",
        "type": "Phrasal Verb",
        "example": "Who do you go to to bounce ideas off?"
      },
      {
        "phrase": "synergy",
        "translation": "sinergia",
        "type": "Noun",
        "example": "Have you ever felt true synergy in a team?"
      },
      {
        "phrase": "open-minded",
        "translation": "aperto mentalmente",
        "type": "Adjective",
        "example": "Are you open-minded to new ways of working?"
      }
    ]
  },
  {
    "id": 43,
    "question": "What is something kind someone did for you?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "act of kindness",
        "translation": "gesto di gentilezza",
        "type": "Phrase",
        "example": "What is the nicest act of kindness someone showed you?"
      },
      {
        "phrase": "go the extra mile",
        "translation": "fare uno sforzo in più",
        "type": "Idiom",
        "example": "When did a company go the extra mile for you?"
      },
      {
        "phrase": "thoughtful",
        "translation": "premuroso",
        "type": "Adjective",
        "example": "What is the most thoughtful gift you received?"
      },
      {
        "phrase": "restore faith in humanity",
        "translation": "ridare fiducia nell'umanità",
        "type": "Phrase",
        "example": "What story helped restore faith in humanity for you?"
      },
      {
        "phrase": "benevolence",
        "translation": "benevolenza",
        "type": "Noun",
        "example": "Do you believe in the benevolence of strangers?"
      },
      {
        "phrase": "look out for",
        "translation": "fare attenzione a",
        "type": "Phrasal Verb",
        "example": "Who looks out for you?"
      },
      {
        "phrase": "generosity",
        "translation": "generosità",
        "type": "Noun",
        "example": "Have you been surprised by someone's generosity?"
      }
    ]
  },
  {
    "id": 44,
    "question": "How do you show kindness to others?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "lend a hand",
        "translation": "dare una mano",
        "type": "Idiom",
        "example": "Do you always try to lend a hand when you see someone struggling?"
      },
      {
        "phrase": "compassion",
        "translation": "compassione",
        "type": "Noun",
        "example": "Is treating everyone with compassion a core value of yours?"
      },
      {
        "phrase": "empathy",
        "translation": "empatia",
        "type": "Noun",
        "example": "Does empathy allow you to understand what others are going through?"
      },
      {
        "phrase": "pay it forward",
        "translation": "ripagare il favore in avanti",
        "type": "Idiom",
        "example": "Do you believe you should pay it forward when someone helps you?"
      },
      {
        "phrase": "considerate",
        "translation": "premuroso",
        "type": "Adjective",
        "example": "Is being considerate of others' time a sign of respect?"
      },
      {
        "phrase": "small gesture",
        "translation": "piccolo gesto",
        "type": "Noun Phrase",
        "example": "Does even a small gesture like holding the door matter?"
      },
      {
        "phrase": "altruistic",
        "translation": "altruista",
        "type": "Adjective",
        "example": "Have you ever met someone whose motives were entirely altruistic?"
      }
    ]
  },
  {
    "id": 45,
    "question": "What makes a good team?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "camaraderie",
        "translation": "cameratismo",
        "type": "Noun",
        "example": "How important is camaraderie for a happy workplace?"
      },
      {
        "phrase": "united front",
        "translation": "fronte unito",
        "type": "Idiom",
        "example": "Why is it crucial for parents to present a united front?"
      },
      {
        "phrase": "play to strengths",
        "translation": "giocare sui punti di forza",
        "type": "Phrase",
        "example": "Do you know how to play to your team's strengths?"
      },
      {
        "phrase": "mutual respect",
        "translation": "rispetto reciproco",
        "type": "Collocation",
        "example": "Can a relationship survive without mutual respect?"
      },
      {
        "phrase": "carry the load",
        "translation": "portare il peso",
        "type": "Idiom",
        "example": "Is it fair when one person has to carry the load?"
      },
      {
        "phrase": "cohesion",
        "translation": "coesione",
        "type": "Noun",
        "example": "What destroys cohesion in a group faster than anything else?"
      },
      {
        "phrase": "on the same page",
        "translation": "sulla stessa lunghezza d'onda",
        "type": "Idiom",
        "example": "How do you ensure everyone is on the same page?"
      }
    ]
  },
  {
    "id": 46,
    "question": "What is something you like about your classmates?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "diverse backgrounds",
        "translation": "background diversi",
        "type": "Collocation",
        "example": "Do you value learning from people with diverse backgrounds?"
      },
      {
        "phrase": "supportive atmosphere",
        "translation": "atmosfera di supporto",
        "type": "Noun Phrase",
        "example": "Does a supportive atmosphere boost your creativity?"
      },
      {
        "phrase": "click with",
        "translation": "avere feeling con",
        "type": "Phrasal Verb",
        "example": "Who was the last person you instantly clicked with?"
      },
      {
        "phrase": "sense of community",
        "translation": "senso di comunità",
        "type": "Noun Phrase",
        "example": "How do you build a strong sense of community online?"
      },
      {
        "phrase": "uplifting",
        "translation": "edificanti",
        "type": "Adjective",
        "example": "Do you find being around children uplifting?"
      },
      {
        "phrase": "inclusive",
        "translation": "inclusivo",
        "type": "Adjective",
        "example": "How can workplaces be more inclusive?"
      },
      {
        "phrase": "peer support",
        "translation": "supporto tra pari",
        "type": "Noun Phrase",
        "example": "Have you ever benefitted from peer support?"
      }
    ],
    "guidedQuestions": [
      "How does a **supportive atmosphere** affect your learning?",
      "Why is it important to have **diverse backgrounds** in a class?",
      "Do you usually **click with** people easily?",
      "What builds a strong **sense of community**?"
    ]
  },
  {
    "id": 47,
    "question": "What is something you can teach someone else?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "impart wisdom",
        "translation": "impartire saggezza",
        "type": "Collocation",
        "example": "Who is the best person to impart wisdom to you?"
      },
      {
        "phrase": "show the ropes",
        "translation": "insegnare i trucchi del mestiere",
        "type": "Idiom",
        "example": "Do you enjoy showing the ropes to new employees?"
      },
      {
        "phrase": "expertise",
        "translation": "competenza",
        "type": "Noun",
        "example": "How long does it take to gain true expertise?"
      },
      {
        "phrase": "mentor",
        "translation": "mentore",
        "type": "Verb",
        "example": "Would you make a good mentor?"
      },
      {
        "phrase": "break down",
        "translation": "crollare",
        "type": "Phrasal Verb",
        "example": "Can you break down your job description for a five-year-old?"
      },
      {
        "phrase": "knowledge transfer",
        "translation": "trasferimento di conoscenza",
        "type": "Noun Term",
        "example": "Why is knowledge transfer difficult in big companies?"
      },
      {
        "phrase": "hand down",
        "translation": "tramandare",
        "type": "Phrasal Verb",
        "example": "What is one recipe that was handed down to you?"
      }
    ],
    "guidedQuestions": [
      "Have you ever had the chance to **mentor** someone?",
      "What is one topic you have enough **expertise** to teach?",
      "Who **showed you the ropes** at your first job?",
      "Is it easy for you to **break down** complex ideas?"
    ]
  },
  {
    "id": 48,
    "question": "How do you help someone who feels shy?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "break the ice",
        "translation": "rompere il ghiaccio",
        "type": "Idiom",
        "example": "What is the worst way to break the ice?"
      },
      {
        "phrase": "bring out of shell",
        "translation": "far uscire dal guscio",
        "type": "Idiom",
        "example": "How do you help bring a shy friend out of their shell?"
      },
      {
        "phrase": "at ease",
        "translation": "a proprio agio",
        "type": "Phrase",
        "example": "What helps put you at ease in a doctor's waiting room?"
      },
      {
        "phrase": "inclusive",
        "translation": "inclusivo",
        "type": "Adjective",
        "example": "Is inclusive language important to you?"
      },
      {
        "phrase": "warm up to",
        "translation": "iniziare ad apprezzare",
        "type": "Phrasal Verb",
        "example": "How long does it take a cat to warm up to you?"
      },
      {
        "phrase": "gentle encouragement",
        "translation": "incoraggiamento gentile",
        "type": "Noun Phrase",
        "example": "Does gentle encouragement work better than pressure?"
      },
      {
        "phrase": "approachable",
        "translation": "accessibile",
        "type": "Adjective",
        "example": "Do you think you look approachable to strangers?"
      }
    ],
    "guidedQuestions": [
      "What is your go-to way to **break the ice**?",
      "How can you make a newcomer feel **at ease**?",
      "Are you **approachable** or do you seem reserved?",
      "What helps a shy person **warm up to** a group?"
    ]
  },
  {
    "id": 49,
    "question": "What do you like to share with others?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "sharing is caring",
        "translation": "condividere è prendersi cura",
        "type": "Proverb",
        "example": "Do you really believe sharing is caring when it comes to dessert?"
      },
      {
        "phrase": "generosity",
        "translation": "generosità",
        "type": "Noun",
        "example": "What is the greatest act of generosity you have witnessed?"
      },
      {
        "phrase": "spread the word",
        "translation": "spargere la voce",
        "type": "Idiom",
        "example": "How do you spread the word about causes you care about?"
      },
      {
        "phrase": "pass on",
        "translation": "passare",
        "type": "Phrasal Verb",
        "example": "What values do you want to pass on to your children?"
      },
      {
        "phrase": "communal",
        "translation": "comunitario",
        "type": "Adjective",
        "example": "Do you enjoy communal living or dining?"
      },
      {
        "phrase": "reciprocity",
        "translation": "reciprocità",
        "type": "Noun",
        "example": "Is reciprocity necessary for a healthy friendship?"
      },
      {
        "phrase": "distribute",
        "translation": "distribuire",
        "type": "Verb",
        "example": "How should society distribute wealth?"
      }
    ],
    "guidedQuestions": [
      "Do you believe that **sharing is caring**?",
      "What is something valuable you want to **pass on** to others?",
      "Is **reciprocity** essential in all relationships?",
      "How do you encourage **generosity** in children?"
    ]
  },
  {
    "id": 50,
    "question": "What do you wish people understood about you?",
    "category": "Growth",
    "vocabulary": [
      {
        "phrase": "misconception",
        "translation": "malinteso",
        "type": "Noun",
        "example": "What is a common misconception about introverts?"
      },
      {
        "phrase": "introverted",
        "translation": "introverso",
        "type": "Adjective",
        "example": "Is being introverted a disadvantage in today's world?"
      },
      {
        "phrase": "more than meets the eye",
        "translation": "più di quel che sembra",
        "type": "Idiom",
        "example": "Who is someone that is more than meets the eye?"
      },
      {
        "phrase": "don't judge a book by its cover",
        "translation": "non giudicare un libro dalla copertina",
        "type": "Proverb",
        "example": "When did you mistakenly judge a book by its cover?"
      },
      {
        "phrase": "complex",
        "translation": "complesso",
        "type": "Adjective",
        "example": "Do you enjoy solving complex problems?"
      },
      {
        "phrase": "authentic self",
        "translation": "sé autentico",
        "type": "Noun Phrase",
        "example": "Is it risky to reveal your authentic self at work?"
      },
      {
        "phrase": "vulnerable",
        "translation": "vulnerabile",
        "type": "Adjective",
        "example": "When does being vulnerable feel like strength?"
      }
    ],
    "guidedQuestions": [
      "What is the biggest **misconception** people have about you?",
      "Are you comfortable being **vulnerable** with new friends?",
      "What does your **authentic self** look like?",
      "Why do people tend to **judge a book by its cover**?"
    ]
  },
  {
    "id": 51,
    "question": "Who makes you feel safe?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "safe haven",
        "translation": "porto sicuro",
        "type": "Noun Phrase",
        "example": "Where is your safe haven when the world gets too loud?"
      },
      {
        "phrase": "sanctuary",
        "translation": "santuario",
        "type": "Noun",
        "example": "Do you have a room that serves as your sanctuary?"
      },
      {
        "phrase": "shielded",
        "translation": "protetto",
        "type": "Adjective",
        "example": "Did your parents keep you shielded from bad news?"
      },
      {
        "phrase": "secure base",
        "translation": "base sicura",
        "type": "Term",
        "example": "Who acts as your secure base?"
      },
      {
        "phrase": "at ease",
        "translation": "a proprio agio",
        "type": "Adjective",
        "example": "What music puts you instantly at ease?"
      },
      {
        "phrase": "judgment-free zone",
        "translation": "zona libera da giudizi",
        "type": "Noun Phrase",
        "example": "Do you have a judgment-free zone with your friends?"
      },
      {
        "phrase": "unconditional acceptance",
        "translation": "accettazione incondizionata",
        "type": "Collocation",
        "example": "Is unconditional acceptance a realistic expectation?"
      }
    ],
    "guidedQuestions": [
      "Who is your personal **safe haven**?",
      "Why is a **judgment-free zone** important for growth?",
      "When do you feel most **at ease**?",
      "Have you experienced **unconditional acceptance**?"
    ]
  },
  {
    "id": 52,
    "question": "How do you show respect to others?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "honor boundaries",
        "translation": "rispettare i confini",
        "type": "Collocation",
        "example": "Is it difficult to honor boundaries with family members?"
      },
      {
        "phrase": "give credit where credit is due",
        "translation": "dare credito a chi lo merita",
        "type": "Idiom",
        "example": "Do you always give credit where credit is due?"
      },
      {
        "phrase": "active listening",
        "translation": "ascolto attivo",
        "type": "Noun Phrase",
        "example": "Is active listening a skill you need to practice?"
      },
      {
        "phrase": "courtesy",
        "translation": "cortesia",
        "type": "Noun",
        "example": "Is common courtesy disappearing?"
      },
      {
        "phrase": "acknowledge",
        "translation": "riconoscere",
        "type": "Verb",
        "example": "How do you acknowledge someone's hard work?"
      },
      {
        "phrase": "treat with dignity",
        "translation": "trattare con dignità",
        "type": "Phrase",
        "example": "Does everyone deserve to be treated with dignity?"
      },
      {
        "phrase": "consideration",
        "translation": "considerazione",
        "type": "Noun",
        "example": "How do you show consideration for your neighbors?"
      }
    ],
    "guidedQuestions": [
      "Is **active listening** a form of respect?",
      "How do you **honor boundaries** with difficult people?",
      "Why should we **treat with dignity** even those we dislike?",
      "Do you always **give credit where credit is due**?"
    ]
  },
  {
    "id": 53,
    "question": "What is a nice thing someone said to you recently?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "heartfelt compliment",
        "translation": "complimento sincero",
        "type": "Collocation",
        "example": "When did you last give a heartfelt compliment?"
      },
      {
        "phrase": "make my day",
        "translation": "svoltarmi la giornata",
        "type": "Idiom",
        "example": "What small thing would make your day right now?"
      },
      {
        "phrase": "boost my confidence",
        "translation": "aumentare la mia fiducia",
        "type": "Phrase",
        "example": "What outfit helps boost your confidence?"
      },
      {
        "phrase": "validation",
        "translation": "convalida",
        "type": "Noun",
        "example": "Is seeking validation always a bad thing?"
      },
      {
        "phrase": "words of affirmation",
        "translation": "parole di affermazione",
        "type": "Term",
        "example": "Are words of affirmation important to you?"
      },
      {
        "phrase": "appreciate",
        "translation": "apprezzare",
        "type": "Verb",
        "example": "Who do you need to appreciate more?"
      },
      {
        "phrase": "uplifting",
        "translation": "ispiratore",
        "type": "Adjective",
        "example": "What is the most uplifting movie you have seen?"
      }
    ],
    "guidedQuestions": [
      "What was the last **heartfelt compliment** you received?",
      "How often do you give **words of affirmation** to others?",
      "Small things can **make your day**; do you agree?",
      "How does it feel to receive **validation** for your work?"
    ]
  },
  {
    "id": 54,
    "question": "What is something you do to make others feel welcome?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "hospitality",
        "translation": "ospitalità",
        "type": "Noun",
        "example": "How do you rate your own hospitality skills?"
      },
      {
        "phrase": "warm welcome",
        "translation": "caloroso benvenuto",
        "type": "Collocation",
        "example": "What constitutes a warm welcome in your culture?"
      },
      {
        "phrase": "with open arms",
        "translation": "a braccia aperte",
        "type": "Idiom",
        "example": "Have you ever been received with open arms by strangers?"
      },
      {
        "phrase": "inclusive",
        "translation": "inclusivo",
        "type": "Adjective",
        "example": "How can schools be more inclusive?"
      },
      {
        "phrase": "put someone at ease",
        "translation": "mettere qualcuno a proprio agio",
        "type": "Phrase",
        "example": "What joke always puts people at ease?"
      },
      {
        "phrase": "roll out the red carpet",
        "translation": "stendere il tappeto rosso",
        "type": "Idiom",
        "example": "Who would you roll out the red carpet for?"
      },
      {
        "phrase": "accommodating",
        "translation": "accomodante",
        "type": "Adjective",
        "example": "Are you too accommodating sometimes?"
      }
    ],
    "guidedQuestions": [
      "How do you **put someone at ease** in a new environment?",
      "Is **hospitality** a lost art?",
      "Have you ever welcomed someone **with open arms**?",
      "What makes a gathering truly **inclusive**?"
    ]
  },
  {
    "id": 55,
    "question": "How do you feel when someone listens to you?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "felt heard",
        "translation": "sentirsi ascoltato",
        "type": "Collocation",
        "example": "Can you describe a time you truly felt heard?"
      },
      {
        "phrase": "validated",
        "translation": "convalidato",
        "type": "Adjective",
        "example": "Do you feel validated by likes on social media?"
      },
      {
        "phrase": "weight off my shoulders",
        "translation": "peso tolto dalle spalle",
        "type": "Idiom",
        "example": "What decision took a weight off my shoulders?"
      },
      {
        "phrase": "understood",
        "translation": "capito",
        "type": "Adjective",
        "example": "Is it worse to be ignored or misunderstood?"
      },
      {
        "phrase": "attentive",
        "translation": "attento",
        "type": "Adjective",
        "example": "Are you an attentive listener?"
      },
      {
        "phrase": "empathetic",
        "translation": "empatico",
        "type": "Adjective",
        "example": "Can someone be too empathetic?"
      },
      {
        "phrase": "connection",
        "translation": "connessione",
        "type": "Noun",
        "example": "Do you feel a connection with nature?"
      }
    ],
    "guidedQuestions": [
      "Do you **feel heard** in your close relationships?",
      "How important is it to be **understood**?",
      "Does an **empathetic** listener make a difference?",
      "Have you ever felt a **weight off your shoulders** after talking?"
    ]
  },
  {
    "id": 56,
    "question": "What does being part of a group mean to you?",
    "category": "Community",
    "vocabulary": [
      {
        "phrase": "sense of belonging",
        "translation": "senso di appartenenza",
        "type": "Noun Phrase",
        "example": "Where do you find your strongest sense of belonging?"
      },
      {
        "phrase": "camaraderie",
        "translation": "cameratismo",
        "type": "Noun",
        "example": "Do sports teams have the best camaraderie?"
      },
      {
        "phrase": "collective",
        "translation": "collettivo",
        "type": "Noun/Adjective",
        "example": "Do you believe in collective responsibility?"
      },
      {
        "phrase": "tribe",
        "translation": "tribù",
        "type": "Noun (Metaphor)",
        "example": "have you found your tribe yet?"
      },
      {
        "phrase": "solidarity",
        "translation": "solidarietà",
        "type": "Noun",
        "example": "When have you shown solidarity with a cause?"
      },
      {
        "phrase": "support system",
        "translation": "sistema di supporto",
        "type": "Noun Phrase",
        "example": "Is your family your main support system?"
      },
      {
        "phrase": "shared purpose",
        "translation": "scopo condiviso",
        "type": "Collocation",
        "example": "Does a shared purpose make work more meaningful?"
      }
    ],
    "guidedQuestions": [
      "Is it important to have a **sense of belonging**?",
      "Have you experienced true **camaraderie**?",
      "Who is in your **tribe**?",
      "Do you rely on your **support system**?"
    ]
  },
  {
    "id": 57,
    "question": "How do you fix a problem with a friend?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "clear the air",
        "translation": "chiarire",
        "type": "Idiom",
        "example": "Is it better to clear the air immediately or wait?"
      },
      {
        "phrase": "extend an olive branch",
        "translation": "porgere un ramoscello d'ulivo",
        "type": "Idiom",
        "example": "Would you ever extend an olive branch to an enemy?"
      },
      {
        "phrase": "reconcile",
        "translation": "riconciliare",
        "type": "Verb",
        "example": "Is it possible to reconcile after a betrayal?"
      },
      {
        "phrase": "meet halfway",
        "translation": "venirsi incontro",
        "type": "Idiom",
        "example": "Are you usually willing to meet halfway?"
      },
      {
        "phrase": "talk it out",
        "translation": "parlarne",
        "type": "Phrasal Verb",
        "example": "Do you prefer to write it down or talk it out?"
      },
      {
        "phrase": "amends",
        "translation": "ammenda",
        "type": "Noun",
        "example": "How can someone make amends for lying?"
      },
      {
        "phrase": "bury the hatchet",
        "translation": "sotterrare l'ascia di guerra",
        "type": "Idiom",
        "example": "Is it time to bury the hatchet with anyone?"
      }
    ],
    "guidedQuestions": [
      "Is it hard to **extend an olive branch**?",
      "Do you prefer to **talk it out** or cool off first?",
      "Have you ever had to **bury the hatchet**?",
      "Can you **reconcile** with someone who betrayed you?"
    ]
  },
  {
    "id": 58,
    "question": "What is one thing you love about your family?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "unconditional love",
        "translation": "amore incondizionato",
        "type": "Collocation",
        "example": "Does unconditional love exist between friends?"
      },
      {
        "phrase": "roots",
        "translation": "radici",
        "type": "Noun (Metaphor)",
        "example": "Do you feel connected to your roots?"
      },
      {
        "phrase": "tight-knit",
        "translation": "molto unito",
        "type": "Adjective",
        "example": "Did you grow up in a tight-knit community?"
      },
      {
        "phrase": "bond",
        "translation": "legame",
        "type": "Noun",
        "example": "How do you strengthen the bond with distant relatives?"
      },
      {
        "phrase": "tradition",
        "translation": "tradizione",
        "type": "Noun",
        "example": "What is one holiday tradition you will never break?"
      },
      {
        "phrase": "support network",
        "translation": "rete di supporto",
        "type": "Noun Phrase",
        "example": "Who is in your professional support network?"
      },
      {
        "phrase": "blood is thicker than water",
        "translation": "il sangue non è acqua",
        "type": "Proverb",
        "example": "Do you agree that blood is thicker than water?"
      }
    ],
    "guidedQuestions": [
      "Is **unconditional love** possible outside of family?",
      "How does your **family tradition** shape who you are?",
      "Is your family **tight-knit** or independent?",
      "Does **blood is thicker than water** hold true for you?"
    ]
  },
  {
    "id": 59,
    "question": "What do you enjoy doing with others?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "bonding experience",
        "translation": "esperienza di legame",
        "type": "Noun Phrase",
        "example": "What is your favorite bonding experience?"
      },
      {
        "phrase": "socialize",
        "translation": "socializzare",
        "type": "Verb",
        "example": "Do you prefer to socialize or stay home?"
      },
      {
        "phrase": "quality time",
        "translation": "tempo di qualità",
        "type": "Noun Phrase",
        "example": "How do you spend quality time with friends?"
      },
      {
        "phrase": "camaraderie",
        "translation": "cameratismo",
        "type": "Noun",
        "example": "Do you seek camaraderie in your workplace?"
      },
      {
        "phrase": "collaborate",
        "translation": "collaborare",
        "type": "Verb",
        "example": "Do you like to collaborate on creative projects?"
      },
      {
        "phrase": "paint the town red",
        "translation": "fare baldoria",
        "type": "Idiom",
        "example": "When did you last paint the town red?"
      },
      {
        "phrase": "shared interest",
        "translation": "interesse condiviso",
        "type": "Noun Phrase",
        "example": "Do you have a shared interest with your best friend?"
      }
    ],
    "guidedQuestions": [
      "What is your favorite **bonding experience**?",
      "Do you prefer to **socialize** or stay home?",
      "How do you spend **quality time** with friends?",
      "Do you have a **shared interest** with your best friend?"
    ]
  },
  {
    "id": 60,
    "question": "What makes someone easy to talk to?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "approachable",
        "translation": "accessibile",
        "type": "Adjective",
        "example": "What makes someone approachable?"
      },
      {
        "phrase": "disarming",
        "translation": "disarmante",
        "type": "Adjective",
        "example": "Do you have a disarming personality?"
      },
      {
        "phrase": "good listener",
        "translation": "buon ascoltatore",
        "type": "Noun Phrase",
        "example": "Are you a good listener?"
      },
      {
        "phrase": "vibe",
        "translation": "atmosfera",
        "type": "Noun (Slang)",
        "example": "How important is someone's vibe to you?"
      },
      {
        "phrase": "relatable",
        "translation": "in cui ci si può identificare",
        "type": "Adjective",
        "example": "Do you find celebrities relatable?"
      },
      {
        "phrase": "open book",
        "translation": "libro aperto",
        "type": "Idiom",
        "example": "Are you an open book or a private person?"
      },
      {
        "phrase": "down-to-earth",
        "translation": "con i piedi per terra",
        "type": "Adjective",
        "example": "Is being down-to-earth important in a leader?"
      }
    ],
    "guidedQuestions": [
      "Are you an **open book** or a private person?",
      "What makes someone **approachable**?",
      "Is being **down-to-earth** important in a leader?",
      "Do you have a **disarming** personality?"
    ]
  },
  {
    "id": 61,
    "question": "What is something that makes you different in a good way?",
    "category": "Identity",
    "vocabulary": [
      {
        "phrase": "stand out from the crowd",
        "translation": "distinguersi dalla massa",
        "type": "Idiom",
        "example": "Do you like to stand out from the crowd?"
      },
      {
        "phrase": "unique perspective",
        "translation": "prospettiva unica",
        "type": "Noun Phrase",
        "example": "Does your background give you a unique perspective?"
      },
      {
        "phrase": "quirk",
        "translation": "stranezza",
        "type": "Noun",
        "example": "Do you embrace your quirks?"
      },
      {
        "phrase": "idiosyncrasy",
        "translation": "idiosincrasia",
        "type": "Noun",
        "example": "What is one idiosyncrasy you have?"
      },
      {
        "phrase": "signature style",
        "translation": "stile inconfondibile",
        "type": "Collocation",
        "example": "What is your signature style?"
      },
      {
        "phrase": "march to the beat of one's own drum",
        "translation": "marciare al proprio ritmo",
        "type": "Idiom",
        "example": "Do you march to the beat of your own drum?"
      },
      {
        "phrase": "distinguishing feature",
        "translation": "tratto distintivo",
        "type": "Noun Phrase",
        "example": "What is your most distinguishing feature?"
      }
    ],
    "guidedQuestions": [
      "Do you like to **stand out from the crowd**?",
      "What is your **signature style**?",
      "Do you embrace your **quirks**?",
      "Is it better to fit in or have a **unique perspective**?"
    ]
  },
  {
    "id": 62,
    "question": "What is your favorite part of your day?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "golden hour",
        "translation": "ora d'oro",
        "type": "Noun Term",
        "example": "Do you find serenity during the golden hour?"
      },
      {
        "phrase": "crack of dawn",
        "translation": "alle prime luci dell'alba",
        "type": "Idiom",
        "example": "Do you wake up at the crack of dawn?"
      },
      {
        "phrase": "unwind",
        "translation": "rilassarsi",
        "type": "Verb",
        "example": "How do you unwind after a long day?"
      },
      {
        "phrase": "serenity",
        "translation": "serenità",
        "type": "Noun",
        "example": "Where do you find serenity?"
      },
      {
        "phrase": "me-time",
        "translation": "tempo per me",
        "type": "Noun (Informal)",
        "example": "How do you spend your me-time?"
      },
      {
        "phrase": "productive flow",
        "translation": "flusso produttivo",
        "type": "Noun Phrase",
        "example": "When do you hit your productive flow?"
      },
      {
        "phrase": "twilight",
        "translation": "crepuscolo",
        "type": "Noun",
        "example": "Do you enjoy walking at twilight?"
      }
    ],
    "guidedQuestions": [
      "How do you spend your **me-time**?",
      "Do you wake up at the **crack of dawn**?",
      "Do you find **serenity** during the **golden hour**?",
      "When do you hit your **productive flow**?"
    ]
  },
  {
    "id": 63,
    "question": "What is your favorite thing about yourself?",
    "category": "Identity",
    "vocabulary": [
      {
        "phrase": "resilience",
        "translation": "resilienza",
        "type": "Noun",
        "example": "Has your resilience helped you succeed?"
      },
      {
        "phrase": "sense of humor",
        "translation": "senso dell'umorismo",
        "type": "Noun Phrase",
        "example": "Is your sense of humor your best trait?"
      },
      {
        "phrase": "integrity",
        "translation": "integrità",
        "type": "Noun",
        "example": "Is integrity important to you?"
      },
      {
        "phrase": "empathy",
        "translation": "empatia",
        "type": "Noun",
        "example": "Is empathy your strongest trait?"
      },
      {
        "phrase": "growth mindset",
        "translation": "mentalità di crescita",
        "type": "Term",
        "example": "Do you have a growth mindset?"
      },
      {
        "phrase": "tenacity",
        "translation": "tenacia",
        "type": "Noun",
        "example": "Has your tenacity helped you succeed?"
      },
      {
        "phrase": "self-acceptance",
        "translation": "accettazione di sé",
        "type": "Noun",
        "example": "Is self-acceptance hard for you?"
      }
    ],
    "guidedQuestions": [
      "Is **self-acceptance** hard for you?",
      "Do you have a **growth mindset**?",
      "Has your **tenacity** helped you succeed?",
      "Is **empathy** your strongest trait?"
    ]
  },
  {
    "id": 64,
    "question": "What is something you love doing alone?",
    "category": "Identity",
    "vocabulary": [
      {
        "phrase": "solitude",
        "translation": "solitudine",
        "type": "Noun",
        "example": "Do you enjoy solitude or fear it?"
      },
      {
        "phrase": "recharge my batteries",
        "translation": "ricaricare le batterie",
        "type": "Idiom",
        "example": "How do you recharge your batteries?"
      },
      {
        "phrase": "introspection",
        "translation": "introspezione",
        "type": "Noun",
        "example": "Do you practice introspection?"
      },
      {
        "phrase": "lost in thought",
        "translation": "perso nei pensieri",
        "type": "Phrase",
        "example": "Do you often get lost in thought?"
      },
      {
        "phrase": "solo adventure",
        "translation": "avventura in solitaria",
        "type": "Collocation",
        "example": "When was your last solo adventure?"
      },
      {
        "phrase": "peace of mind",
        "translation": "pace mentale",
        "type": "Noun Phrase",
        "example": "Where do you go for peace of mind?"
      },
      {
        "phrase": "autonomy",
        "translation": "autonomia",
        "type": "Noun",
        "example": "Do you value your autonomy?"
      }
    ],
    "guidedQuestions": [
      "Do you value your **autonomy**?",
      "Where do you go for **peace of mind**?",
      "Do you enjoy **solitude** or fear it?",
      "When was your last **solo adventure**?"
    ]
  },
  {
    "id": 65,
    "question": "What is something you are always curious about?",
    "category": "Curiosity",
    "vocabulary": [
      {
        "phrase": "rabbit hole",
        "translation": "tana del bianconiglio",
        "type": "Metaphor",
        "example": "What topic makes you go down a rabbit hole?"
      },
      {
        "phrase": "pique my interest",
        "translation": "stuzzicare il mio interesse",
        "type": "Idiom",
        "example": "What subjects pique your interest?"
      },
      {
        "phrase": "insatiable curiosity",
        "translation": "curiosità insaziabile",
        "type": "Collocation",
        "example": "Do you have an insatiable curiosity?"
      },
      {
        "phrase": "wonder",
        "translation": "meraviglia",
        "type": "Noun/Verb",
        "example": "Do you ever look at the stars with wonder?"
      },
      {
        "phrase": "intriguing",
        "translation": "intrigante",
        "type": "Adjective",
        "example": "What is the most intriguing book you have read?"
      },
      {
        "phrase": "thirsty for knowledge",
        "translation": "assetato di conoscenza",
        "type": "Metaphor",
        "example": "Are you thirsty for knowledge?"
      },
      {
        "phrase": "fascinated by",
        "translation": "affascinato da",
        "type": "Adjective",
        "example": "What are you fascinated by?"
      }
    ],
    "guidedQuestions": [
      "What topic makes you go down a **rabbit hole**?",
      "Do you have an **insatiable curiosity**?",
      "What subjects **pique your interest**?",
      "Are you **thirsty for knowledge**?"
    ]
  },
  {
    "id": 66,
    "question": "What makes you feel excited about the future?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "look forward to",
        "translation": "non vedere l'ora di",
        "type": "Phrasal Verb",
        "example": "What do you look forward to most?"
      },
      {
        "phrase": "optimism",
        "translation": "ottimismo",
        "type": "Noun",
        "example": "How do you maintain optimism in tough times?"
      },
      {
        "phrase": "potential",
        "translation": "potenziale",
        "type": "Noun",
        "example": "Do you feel you are reaching your potential?"
      },
      {
        "phrase": "horizon",
        "translation": "orizzonte",
        "type": "Noun (Metaphor)",
        "example": "What is on the horizon for you?"
      },
      {
        "phrase": "anticipation",
        "translation": "anticipazione",
        "type": "Noun",
        "example": "Does anticipation make you anxious or happy?"
      },
      {
        "phrase": "bright future",
        "translation": "futuro radioso",
        "type": "Collocation",
        "example": "Do you see a bright future ahead?"
      },
      {
        "phrase": "promise",
        "translation": "promessa",
        "type": "Noun",
        "example": "Does the future hold promise for you?"
      }
    ],
    "guidedQuestions": [
      "What do you **look forward to** most?",
      "Do you see a **bright future** ahead?",
      "Does **anticipation** make you anxious or happy?",
      "How do you maintain **optimism** in tough times?"
    ]
  },
  {
    "id": 67,
    "question": "What do you do when you feel bored?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "stave off boredom",
        "translation": "scacciare la noia",
        "type": "Collocation",
        "example": "How do you stave off boredom?"
      },
      {
        "phrase": "restless",
        "translation": "irrequieto",
        "type": "Adjective",
        "example": "Do you get restless easily?"
      },
      {
        "phrase": "shake things up",
        "translation": "smuovere le acque",
        "type": "Idiom",
        "example": "When did you last shake things up?"
      },
      {
        "phrase": "monotony",
        "translation": "monotonia",
        "type": "Noun",
        "example": "Does monotony bother you?"
      },
      {
        "phrase": "idle",
        "translation": "ozioso",
        "type": "Adjective",
        "example": "Do you prefer to be busy or idle?"
      },
      {
        "phrase": "spark",
        "translation": "scintilla",
        "type": "Noun",
        "example": "What gives you a creative spark?"
      },
      {
        "phrase": "doldrums",
        "translation": "bonaccia",
        "type": "Noun",
        "example": "How do you get out of the doldrums?"
      }
    ],
    "guidedQuestions": [
      "How do you **stave off boredom**?",
      "Do you get **restless** easily?",
      "Do you prefer to be busy or **idle**?",
      "When did you last **shake things up**?"
    ]
  },
  {
    "id": 68,
    "question": "What is your favorite way to relax?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "unwind",
        "translation": "rilassarsi",
        "type": "Verb",
        "example": "How do you unwind after work?"
      },
      {
        "phrase": "decompress",
        "translation": "decomprimere",
        "type": "Verb",
        "example": "How do you decompress after work?"
      },
      {
        "phrase": "kick back",
        "translation": "rilassarsi",
        "type": "Phrasal Verb",
        "example": "Do you prefer to kick back alone or with friends?"
      },
      {
        "phrase": "leisurely",
        "translation": "con calma",
        "type": "Adjective",
        "example": "Do you enjoy a leisurely breakfast?"
      },
      {
        "phrase": "tranquility",
        "translation": "tranquillità",
        "type": "Noun",
        "example": "Where do you find tranquility?"
      },
      {
        "phrase": "pamper myself",
        "translation": "coccolarmi",
        "type": "Phrase",
        "example": "Do you pamper yourself often?"
      },
      {
        "phrase": "chill out",
        "translation": "rilassarsi",
        "type": "Phrasal Verb",
        "example": "How do you chill out on Sundays?"
      }
    ],
    "guidedQuestions": [
      "How do you **decompress** after work?",
      "Do you prefer to **kick back** alone or with friends?",
      "Do you **pamper yourself** often?",
      "Where do you find **tranquility**?"
    ]
  },
  {
    "id": 69,
    "question": "What do you like more: quiet or noise?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "peace and quiet",
        "translation": "pace e tranquillità",
        "type": "Binomial Pair",
        "example": "Do you crave peace and quiet?"
      },
      {
        "phrase": "hustle and bustle",
        "translation": "trambusto",
        "type": "Binomial Pair",
        "example": "Do you thrive in the hustle and bustle?"
      },
      {
        "phrase": "white noise",
        "translation": "rumore bianco",
        "type": "Noun Phrase",
        "example": "Do you need white noise to sleep?"
      },
      {
        "phrase": "deafening silence",
        "translation": "silenzio assordante",
        "type": "Collocation",
        "example": "Does deafening silence make you uncomfortable?"
      },
      {
        "phrase": "background buzz",
        "translation": "ronzio di sottofondo",
        "type": "Noun Phrase",
        "example": "Do you like a background buzz while working?"
      },
      {
        "phrase": "silence is golden",
        "translation": "il silenzio è d'oro",
        "type": "Proverb",
        "example": "Do you agree that silence is golden?"
      },
      {
        "phrase": "pin-drop silence",
        "translation": "silenzio assoluto",
        "type": "Idiom",
        "example": "Have you ever experienced pin-drop silence?"
      }
    ],
    "guidedQuestions": [
      "Do you crave **peace and quiet**?",
      "Does **deafening silence** make you uncomfortable?",
      "Do you thrive in the **hustle and bustle**?",
      "Do you need **white noise** to sleep?"
    ]
  },
  {
    "id": 70,
    "question": "What is something fun you would like to do soon?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "let my hair down",
        "translation": "sciogliersi",
        "type": "Idiom",
        "example": "When will you let your hair down?"
      },
      {
        "phrase": "bucket list",
        "translation": "lista dei desideri",
        "type": "Noun Phrase",
        "example": "What is top of your bucket list?"
      },
      {
        "phrase": "paint the town red",
        "translation": "fare baldoria",
        "type": "Idiom",
        "example": "Who do you want to paint the town red with?"
      },
      {
        "phrase": "have a blast",
        "translation": "divertirsi un mondo",
        "type": "Idiom",
        "example": "When was the last time you had a blast?"
      },
      {
        "phrase": "unwind",
        "translation": "rilassarsi",
        "type": "Verb",
        "example": "How do you unwind on vacation?"
      },
      {
        "phrase": "spontaneous",
        "translation": "spontaneo",
        "type": "Adjective",
        "example": "Are you planning a spontaneous trip?"
      },
      {
        "phrase": "make the most of",
        "translation": "sfruttare al meglio",
        "type": "Collocation",
        "example": "Do you make the most of your free time?"
      }
    ],
    "guidedQuestions": [
      "What is top of your **bucket list**?",
      "When will you **let your hair down**?",
      "Are you planning a **spontaneous** trip?",
      "Do you **make the most of** your free time?"
    ]
  },
  {
    "id": 71,
    "question": "What is one place where you feel happy?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "sanctuary",
        "translation": "santuario",
        "type": "Noun",
        "example": "Do you have a sanctuary at home?"
      },
      {
        "phrase": "home away from home",
        "translation": "una seconda casa",
        "type": "Idiom",
        "example": "Where is your home away from home?"
      },
      {
        "phrase": "oasis of calm",
        "translation": "oasi di calma",
        "type": "Metaphor",
        "example": "Is your bedroom an oasis of calm?"
      },
      {
        "phrase": "refuge",
        "translation": "rifugio",
        "type": "Noun",
        "example": "Where do you seek refuge?"
      },
      {
        "phrase": "escape the grind",
        "translation": "sfuggire alla routine",
        "type": "Phrase",
        "example": "Do you need to escape the grind often?"
      },
      {
        "phrase": "happy place",
        "translation": "posto felice",
        "type": "Noun (Informal)",
        "example": "Where is your happy place?"
      },
      {
        "phrase": "serene",
        "translation": "sereno",
        "type": "Adjective",
        "example": "What is the most serene place you know?"
      }
    ],
    "guidedQuestions": [
      "Where is your **happy place**?",
      "Do you have a **sanctuary** at home?",
      "Is your bedroom an **oasis of calm**?",
      "Do you need to **escape the grind** often?"
    ]
  },
  {
    "id": 72,
    "question": "What is something you could talk about forever?",
    "category": "Curiosity",
    "vocabulary": [
      {
        "phrase": "geek out",
        "translation": "essere super appassionato",
        "type": "Phrasal Verb",
        "example": "What do you geek out on?"
      },
      {
        "phrase": "passion project",
        "translation": "progetto passione",
        "type": "Noun Phrase",
        "example": "Do you have a passion project?"
      },
      {
        "phrase": "talk someone's ear off",
        "translation": "attaccare un bottone a qualcuno",
        "type": "Idiom",
        "example": "Can you talk someone's ear off about sports?"
      },
      {
        "phrase": "go down the rabbit hole",
        "translation": "perdersi nei meandri",
        "type": "Idiom",
        "example": "Do you ever go down the rabbit hole on Wikipedia?"
      },
      {
        "phrase": "soapbox",
        "translation": "pulpito",
        "type": "Noun (Metaphor)",
        "example": "What is your favorite soapbox topic?"
      },
      {
        "phrase": "subject matter expert",
        "translation": "esperto in materia",
        "type": "Term",
        "example": "Are you a subject matter expert on anything?"
      },
      {
        "phrase": "infodump",
        "translation": "scarica di informazioni",
        "type": "Slang",
        "example": "Do you ever infodump on your friends?"
      }
    ],
    "guidedQuestions": [
      "What do you **geek out** on?",
      "Do you have a **passion project**?",
      "Can you **talk someone's ear off** about sports?",
      "Do you ever **go down the rabbit hole** on Wikipedia?"
    ]
  },
  {
    "id": 73,
    "question": "What is one thing you never get tired of?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "timeless classic",
        "translation": "classico senza tempo",
        "type": "Noun Phrase",
        "example": "What movie is a timeless classic for you?"
      },
      {
        "phrase": "never gets old",
        "translation": "non stanca mai",
        "type": "Idiom",
        "example": "What song never gets old?"
      },
      {
        "phrase": "go-to",
        "translation": "punto di riferimento",
        "type": "Adjective",
        "example": "What is your go-to comfort food?"
      },
      {
        "phrase": "creature of habit",
        "translation": "abitudinario",
        "type": "Idiom",
        "example": "Are you a creature of habit?"
      },
      {
        "phrase": "stand the test of time",
        "translation": "resistere alla prova del tempo",
        "type": "Idiom",
        "example": "Can long distance relationships stand the test of time?"
      },
      {
        "phrase": "simple pleasure",
        "translation": "piacere semplice",
        "type": "Collocation",
        "example": "Is coffee a simple pleasure you cherish?"
      },
      {
        "phrase": "perennial favorite",
        "translation": "preferito di sempre",
        "type": "Noun Phrase",
        "example": "What book is a perennial favorite of yours?"
      }
    ],
    "guidedQuestions": [
      "What is your **go-to** comfort food?",
      "Are you a **creature of habit**?",
      "What song is a **timeless classic** for you?",
      "Do you appreciate a **simple pleasure** like coffee?"
    ]
  },
  {
    "id": 74,
    "question": "What is something silly that makes you laugh?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "crack me up",
        "translation": "farmi morire dal ridere",
        "type": "Phrasal Verb",
        "example": "What videos never fail to crack you up?"
      },
      {
        "phrase": "burst out laughing",
        "translation": "scoppiare a ridere",
        "type": "Idiom",
        "example": "When did you last burst out laughing?"
      },
      {
        "phrase": "have me in stitches",
        "translation": "farmi sbellicare dalle risate",
        "type": "Idiom",
        "example": "Does slapstick comedy have you in stitches?"
      },
      {
        "phrase": "contagious laughter",
        "translation": "risata contagiosa",
        "type": "Collocation",
        "example": "Is your laughter contagious?"
      },
      {
        "phrase": "dry sense of humor",
        "translation": "umorismo secco",
        "type": "Noun Phrase",
        "example": "Do you appreciate a dry sense of humor?"
      },
      {
        "phrase": "comic relief",
        "translation": "sollievo comico",
        "type": "Noun Phrase",
        "example": "Do you often provide comic relief?"
      },
      {
        "phrase": "giggle fit",
        "translation": "risatina",
        "type": "Noun Compound",
        "example": "Have you had a giggle fit recently?"
      }
    ],
    "guidedQuestions": [
      "What videos **crack you up**?",
      "When did you last **burst out laughing**?",
      "Does slapstick **have you in stitches**?",
      "Is **contagious laughter** real?"
    ]
  },
  {
    "id": 75,
    "question": "What is one thing you like about your name?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "named after",
        "translation": "chiamato come",
        "type": "Phrasal Verb",
        "example": "Were you named after anyone?"
      },
      {
        "phrase": "live up to",
        "translation": "essere all'altezza di",
        "type": "Phrasal Verb",
        "example": "Is your name hard to live up to?"
      },
      {
        "phrase": "nice ring to it",
        "translation": "suona bene",
        "type": "Idiom",
        "example": "Does your name have a nice ring to it?"
      },
      {
        "phrase": "unique spelling",
        "translation": "ortografia unica",
        "type": "Noun Phrase",
        "example": "Do you have a unique spelling?"
      },
      {
        "phrase": "sense of identity",
        "translation": "senso di identità",
        "type": "Collocation",
        "example": "Does your name give you a sense of identity?"
      },
      {
        "phrase": "moniker",
        "translation": "soprannome",
        "type": "Noun",
        "example": "Do you have a funny moniker?"
      },
      {
        "phrase": "family heritage",
        "translation": "patrimonio familiare",
        "type": "Noun Phrase",
        "example": "Does your name reflect your family heritage?"
      }
    ],
    "guidedQuestions": [
      "Were you **named after** anyone?",
      "Is your name hard to **live up to**?",
      "Does your name have a **nice ring to it**?",
      "Does your name give you a **sense of identity**?"
    ]
  },
  {
    "id": 76,
    "question": "What is your favorite way to spend a Sunday?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "put off",
        "translation": "rimandare",
        "example": "Do you put off tasks on Sunday?"
      },
      {
        "phrase": "run out of",
        "translation": "finire",
        "example": "Do you often run out of time on Sundays?"
      },
      {
        "phrase": "slow brunch",
        "translation": "brunch lento",
        "example": "Do you enjoy a slow brunch?"
      },
      {
        "phrase": "reset day",
        "translation": "giorno di reset",
        "example": "Is Sunday your reset day?"
      },
      {
        "phrase": "prep for the week",
        "translation": "prepararsi per la settimana",
        "example": "Do you prep for the week on Sunday?"
      },
      {
        "phrase": "lounge around",
        "translation": "oziare",
        "example": "Do you lounge around all day?"
      },
      {
        "phrase": "evening stroll",
        "translation": "passeggiata serale",
        "example": "Do you take an evening stroll?"
      }
    ],
    "guidedQuestions": [
      "Do you **put off** tasks on Sunday?",
      "Do you enjoy a **slow brunch**?",
      "Is Sunday your **reset day**?",
      "Do you **lounge around** all day?"
    ]
  },
  {
    "id": 77,
    "question": "What is something fun you did as a child?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "clean up",
        "translation": "pulire",
        "example": "Did you have to clean up your room?"
      },
      {
        "phrase": "pick up",
        "translation": "raccogliere",
        "example": "Did you pick up languages easily as a kid?"
      },
      {
        "phrase": "climb trees",
        "translation": "arrampicarsi sugli alberi",
        "example": "Did you climb trees as a kid?"
      },
      {
        "phrase": "bike rides",
        "translation": "giri in bici",
        "example": "Did you go on long bike rides?"
      },
      {
        "phrase": "building forts",
        "translation": "costruire fortini",
        "example": "Did you enjoy building forts?"
      },
      {
        "phrase": "summer adventures",
        "translation": "avventure estive",
        "example": "What were your best summer adventures?"
      }
    ],
    "guidedQuestions": [
      "Did you **climb trees** as a kid?",
      "Did you go on long **bike rides**?",
      "Did you enjoy **building forts**?",
      "What were your favorite **summer adventures**?"
    ]
  },
  {
    "id": 78,
    "question": "What is something you always forget?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "drop off",
        "translation": "addormentarsi",
        "example": "Did you forget to drop off the keys?"
      },
      {
        "phrase": "check out",
        "translation": "controllare",
        "example": "Did you forget to check out library books?"
      },
      {
        "phrase": "slip my mind",
        "translation": "passare di mente",
        "example": "Does a name often slip your mind?"
      },
      {
        "phrase": "blank out",
        "translation": "avere un vuoto di memoria",
        "example": "Do you blank out during tests?"
      },
      {
        "phrase": "tip of my tongue",
        "translation": "sulla punta della lingua",
        "example": "Do you ever have it on the tip of your tongue?"
      },
      {
        "phrase": "set a reminder",
        "translation": "impostare un promemoria",
        "example": "Do you set a reminder for everything?"
      },
      {
        "phrase": "jog my memory",
        "translation": "rinfrescare la memoria",
        "example": "What helps to jog your memory?"
      }
    ],
    "guidedQuestions": [
      "Does a name often **slip your mind**?",
      "Do you ever have it on the **tip of your tongue**?",
      "Do you **set a reminder** for everything?",
      "What helps to **jog your memory**?"
    ]
  },
  {
    "id": 79,
    "question": "What is one thing that helps you sleep well?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "look after",
        "translation": "prendersi cura di",
        "example": "Does stress make it hard to look after yourself?"
      },
      {
        "phrase": "get by",
        "translation": "cavarsela",
        "example": "Can you get by with 5 hours of sleep?"
      },
      {
        "phrase": "hit the hay",
        "translation": "andare a branda",
        "example": "Do you hit the hay early?"
      },
      {
        "phrase": "lights out",
        "translation": "luci spente",
        "example": "Is lights out at the same time every night?"
      },
      {
        "phrase": "sleep like a log",
        "translation": "dormire come un ghiro",
        "example": "Do you sleep like a log?"
      },
      {
        "phrase": "switch off my mind",
        "translation": "spegnere il cervello",
        "example": "How do you switch off your mind?"
      }
    ],
    "guidedQuestions": [
      "Is **lights out** at the same time every night?",
      "Do you **hit the hay** early?",
      "Do you **sleep like a log** or toss and turn?",
      "How do you **switch off your mind**?"
    ]
  },
  {
    "id": 80,
    "question": "What is something you would love to do every day?",
    "category": "Daily",
    "vocabulary": [
      {
        "phrase": "wake up",
        "translation": "svegliarsi",
        "example": "What motivates you to wake up?"
      },
      {
        "phrase": "wind down",
        "translation": "rilassarsi",
        "example": "How do you wind down in the evening?"
      },
      {
        "phrase": "daily dose",
        "translation": "dose giornaliera",
        "example": "Do you need a daily dose of coffee?"
      },
      {
        "phrase": "anchor my day",
        "translation": "ancorare la mia giornata",
        "example": "What ritual anchors your day?"
      },
      {
        "phrase": "bookend my day",
        "translation": "fare da cornice alla giornata",
        "example": "How do you bookend your day?"
      },
      {
        "phrase": "makes me feel alive",
        "translation": "mi fa sentire vivo",
        "example": "What makes you feel alive?"
      }
    ],
    "guidedQuestions": [
      "What ritual **anchors your day**?",
      "How do you **wind down** in the evening?",
      "What **makes you feel alive**?",
      "Do you need a **daily dose** of coffee?"
    ]
  },
  {
    "id": 81,
    "question": "What does being kind mean to you?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "make up",
        "translation": "fare pace",
        "example": "Is it easy to make up after a fight?"
      },
      {
        "phrase": "fall out",
        "translation": "litigare",
        "example": "Have you ever fallen out with a friend?"
      },
      {
        "phrase": "lead with empathy",
        "translation": "guidare con empatia",
        "example": "Do you try to lead with empathy?"
      },
      {
        "phrase": "do right by people",
        "translation": "comportarsi bene con le persone",
        "example": "Do you always try to do right by people?"
      },
      {
        "phrase": "common decency",
        "translation": "comune decenza",
        "example": "Is common decency important?"
      },
      {
        "phrase": "small acts",
        "translation": "piccoli atti",
        "example": "Do you believe in small acts of kindness?"
      },
      {
        "phrase": "pay it forward",
        "translation": "ripagare il favore in avanti",
        "example": "How do you pay it forward?"
      }
    ],
    "guidedQuestions": [
      "Is it easy to **make up** after a fight?",
      "Do you always try to **do right by people**?",
      "Do you believe in **small acts** of kindness?",
      "How do you **pay it forward**?"
    ]
  },
  {
    "id": 82,
    "question": "What does success mean to you?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "try out",
        "translation": "provare",
        "example": "Do you try out new ideas?"
      },
      {
        "phrase": "follow through",
        "translation": "portare a termine",
        "example": "Do you always follow through?"
      },
      {
        "phrase": "meaningful impact",
        "translation": "impatto significativo",
        "example": "How do you measure meaningful impact?"
      },
      {
        "phrase": "on my own terms",
        "translation": "alle mie condizioni",
        "example": "Do you define success on your own terms?"
      },
      {
        "phrase": "steady progress",
        "translation": "progresso costante",
        "example": "Do you value steady progress over speed?"
      },
      {
        "phrase": "fulfillment",
        "translation": "appagamento",
        "example": "Is fulfillment more important than money?"
      },
      {
        "phrase": "balance",
        "translation": "equilibrio",
        "example": "Does success require balance?"
      }
    ],
    "guidedQuestions": [
      "Do you define success **on your own terms**?",
      "Is **fulfillment** more important than money?",
      "Do you value **steady progress** over speed?",
      "How do you measure **meaningful impact**?"
    ]
  },
  {
    "id": 83,
    "question": "What would you do with one free day?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "sleep in",
        "translation": "dormire fino a tardi",
        "type": "Phrasal Verb",
        "example": "Do you prefer to sleep in?"
      },
      {
        "phrase": "put off",
        "translation": "rimandare",
        "type": "Phrasal Verb",
        "example": "Do you put off chores heavily?"
      },
      {
        "phrase": "a day to myself",
        "translation": "un giorno per me",
        "type": "Idiom",
        "example": "When did you last have a day to myself?"
      },
      {
        "phrase": "wander aimlessly",
        "translation": "vagare senza meta",
        "type": "Collocation",
        "example": "Do you wander aimlessly or plan?"
      },
      {
        "phrase": "treat myself",
        "translation": "concedermi qualcosa",
        "type": "Verb Phrase",
        "example": "How do you treat yourself?"
      },
      {
        "phrase": "unplug",
        "translation": "staccare la spina",
        "type": "Verb",
        "example": "Do you unplug completely?"
      },
      {
        "phrase": "savor the moment",
        "translation": "godersi il momento",
        "type": "Collocation",
        "example": "How do you savor the moment?"
      }
    ],
    "guidedQuestions": [
      "Do you prefer to **sleep in**?",
      "Do you **wander aimlessly** or plan?",
      "Do you **unplug** completely?",
      "How do you **savor the moment**?"
    ]
  },
  {
    "id": 84,
    "question": "What would you do if you had no fear?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "work on",
        "translation": "lavorare su",
        "example": "What are you working on?"
      },
      {
        "phrase": "get better at",
        "translation": "migliorare in",
        "example": "What do you want to get better at?"
      },
      {
        "phrase": "fearless",
        "translation": "senza paura",
        "example": "If fearless, what would you do?"
      },
      {
        "phrase": "bold move",
        "translation": "mossa audace",
        "example": "Would you make a bold move career-wise?"
      },
      {
        "phrase": "take the leap",
        "translation": "fare il salto",
        "example": "Would you take the leap on a big decision?"
      },
      {
        "phrase": "go all in",
        "translation": "mettersi in gioco completamente",
        "example": "Would you go all in?"
      },
      {
        "phrase": "feel brave",
        "translation": "sentirsi coraggioso",
        "example": "How would it feel to feel brave all day?"
      }
    ],
    "guidedQuestions": [
      "Would you **take the leap** on a big decision?",
      "If **fearless**, would you **go all in**?",
      "Would you make a **bold move** career-wise?",
      "How would it feel to **feel brave** all day?"
    ]
  },
  {
    "id": 85,
    "question": "If you could change one thing in the world, what would it be?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "look forward to",
        "translation": "non vedere l'ora di",
        "example": "What change do you look forward to?"
      },
      {
        "phrase": "come up with",
        "translation": "inventarsi",
        "example": "Can you come up with a solution?"
      },
      {
        "phrase": "make a dent",
        "translation": "incidere significativamente",
        "example": "Do you think one person can make a dent?"
      },
      {
        "phrase": "ripple effect",
        "translation": "effetto a catena",
        "example": "Does kindness have a ripple effect?"
      },
      {
        "phrase": "push for change",
        "translation": "spingere per il cambiamento",
        "example": "What cause would you push for change in?"
      },
      {
        "phrase": "amplify voices",
        "translation": "amplificare le voci",
        "example": "How can we amplify voices of the unheard?"
      },
      {
        "phrase": "move the needle",
        "translation": "fare la differenza",
        "example": "What truly moves the needle?"
      }
    ],
    "guidedQuestions": [
      "Do you think one person can **make a dent**?",
      "Does kindness have a **ripple effect**?",
      "How can we **amplify voices** of the unheard?",
      "What cause would you **push for change** in?"
    ]
  },
  {
    "id": 86,
    "question": "What do you want people to remember about you?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "look out for",
        "translation": "fare attenzione a",
        "example": "Do you look out for others?"
      },
      {
        "phrase": "show up",
        "translation": "presentarsi",
        "example": "Do you show up for your friends?"
      },
      {
        "phrase": "leave a mark",
        "translation": "lasciare il segno",
        "example": "Do you want to leave a mark on the world?"
      },
      {
        "phrase": "legacy",
        "translation": "eredità",
        "example": "What legacy do you hope to build?"
      },
      {
        "phrase": "remembered for",
        "translation": "ricordato per",
        "example": "Do you hope to be remembered for your character?"
      },
      {
        "phrase": "lasting impression",
        "translation": "impressione duratura",
        "example": "How do you make a lasting impression?"
      },
      {
        "phrase": "story people tell",
        "translation": "storia che la gente racconta",
        "example": "What story people tell matters to you?"
      }
    ],
    "guidedQuestions": [
      "Do you want to **leave a mark** on the world?",
      "What **legacy** do you hope to build?",
      "Do you hope to be **remembered for** your work or character?",
      "What **story people tell** matters to you?"
    ]
  },
  {
    "id": 87,
    "question": "What is something small that makes a big difference?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "shake it off",
        "translation": "scrollarselo di dosso",
        "example": "Can you shake it off when things go wrong?"
      },
      {
        "phrase": "cool off",
        "translation": "sbollire",
        "example": "Do you need to cool off after a conflict?"
      },
      {
        "phrase": "tiny habit",
        "translation": "piccola abitudine",
        "example": "Do you believe a tiny habit can change your life?"
      },
      {
        "phrase": "small tweak",
        "translation": "piccola modifica",
        "example": "How does a small tweak improve your day?"
      },
      {
        "phrase": "adds up",
        "translation": "fa la differenza",
        "example": "Do small savings add up?"
      },
      {
        "phrase": "ripple effect",
        "translation": "effetto a catena",
        "example": "Do small acts create a ripple effect?"
      }
    ],
    "guidedQuestions": [
      "Can you **shake it off** when things go wrong?",
      "Do you need to **cool off** after a conflict?",
      "Do you believe a **tiny habit** can change your life?",
      "How does a **small tweak** improve your day?"
    ]
  },
  {
    "id": 88,
    "question": "What is a dream you have for the future?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "keep at it",
        "translation": "insistere",
        "example": "Will you keep at it until you succeed?"
      },
      {
        "phrase": "stick with",
        "translation": "continuare con",
        "example": "Can you stick with a difficult task?"
      },
      {
        "phrase": "north star",
        "translation": "stella polare",
        "example": "Is your dream your north star?"
      },
      {
        "phrase": "dream up",
        "translation": "sognare",
        "example": "Do you dream up new ideas often?"
      },
      {
        "phrase": "picture myself",
        "translation": "immaginarmi",
        "example": "Can you picture yourself achieving it?"
      }
    ],
    "guidedQuestions": [
      "Will you **keep at it** until you succeed?",
      "Is your dream your **north star**?",
      "Do you **dream up** new ideas often?",
      "Can you **picture yourself** achieving it?"
    ]
  },
  {
    "id": 89,
    "question": "What is more important: being smart or being kind?",
    "category": "Relationships",
    "vocabulary": [
      {
        "phrase": "hit it off",
        "translation": "andare subito d'accordo",
        "example": "Do you usually hit it off with strangers?"
      },
      {
        "phrase": "have someone's back",
        "translation": "coprire le spalle a qualcuno",
        "example": "Do you have your friend's back?"
      },
      {
        "phrase": "head and heart",
        "translation": "testa e cuore",
        "example": "Do you balance head and heart?"
      },
      {
        "phrase": "emotional intelligence",
        "translation": "intelligenza emotiva",
        "example": "Does emotional intelligence matter?"
      },
      {
        "phrase": "book smart",
        "translation": "intelligente sui libri",
        "example": "Are you book smart?"
      },
      {
        "phrase": "street smart",
        "translation": "sveglio (di strada)",
        "example": "Is being street smart useful?"
      }
    ],
    "guidedQuestions": [
      "Do you rely on **head and heart**?",
      "Is **emotional intelligence** overrated?",
      "Are you **book smart** or **street smart**?",
      "Is it better to **have someone's back** than be right?"
    ]
  },
  {
    "id": 90,
    "question": "What does feeling safe mean to you?",
    "category": "Feelings",
    "vocabulary": [
      {
        "phrase": "calm down",
        "translation": "calmarsi",
        "example": "What helps you calm down?"
      },
      {
        "phrase": "cheer up",
        "translation": "tirarsi su",
        "example": "What song cheers you up?"
      },
      {
        "phrase": "at ease",
        "translation": "a proprio agio",
        "example": "Do you feel at ease with strangers?"
      },
      {
        "phrase": "free to speak",
        "translation": "libero di parlare",
        "example": "Do you feel free to speak your mind?"
      },
      {
        "phrase": "protected",
        "translation": "protetto",
        "example": "Do you feel protected and calm?"
      },
      {
        "phrase": "stable ground",
        "translation": "terreno stabile",
        "example": "Does it feel like stable ground?"
      },
      {
        "phrase": "no fear of judgment",
        "translation": "nessuna paura del giudizio",
        "example": "Is no fear of judgment key?"
      }
    ],
    "guidedQuestions": [
      "What helps you **calm down**?",
      "Do you feel **at ease** with strangers?",
      "Are you **free to speak** your mind?",
      "Do you have **no fear of judgment** with friends?"
    ]
  },
  {
    "id": 91,
    "question": "If you could live anywhere, where would you live?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "set out to",
        "translation": "proporsi di",
        "example": "Would you set out to explore the world?"
      },
      {
        "phrase": "go for it",
        "translation": "buttarsi",
        "example": "Will you go for it and move?"
      },
      {
        "phrase": "set down roots",
        "translation": "mettere radici",
        "example": "Are you ready to set down roots abroad?"
      },
      {
        "phrase": "culture shock",
        "translation": "shock culturale",
        "example": "Does culture shock worry you?"
      },
      {
        "phrase": "home base",
        "translation": "base operativa",
        "example": "Would you find a home base first?"
      },
      {
        "phrase": "slow travel",
        "translation": "viaggiare lento",
        "example": "Do you prefer slow travel?"
      },
      {
        "phrase": "blend in",
        "translation": "mimetizzarsi",
        "example": "Would you try to blend in with locals?"
      }
    ],
    "guidedQuestions": [
      "Would you **set out to** explore the world?",
      "Are you ready to **set down roots** abroad?",
      "Does **culture shock** worry you?",
      "Will you **go for it** and move?"
    ]
  },
  {
    "id": 92,
    "question": "If you had a magic button, what would it do?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "take on",
        "translation": "assumere",
        "example": "Would you take on new challenges?"
      },
      {
        "phrase": "plan ahead",
        "translation": "pianificare in anticipo",
        "example": "How would you plan ahead with magic?"
      },
      {
        "phrase": "instant reset",
        "translation": "reset istantaneo",
        "example": "Would you use an instant reset?"
      },
      {
        "phrase": "undo button",
        "translation": "pulsante annulla",
        "example": "Do you need an undo button for mistakes?"
      },
      {
        "phrase": "clear the clutter",
        "translation": "eliminare il disordine",
        "example": "Would you clear the clutter of your mind?"
      }
    ],
    "guidedQuestions": [
      "Would you use an **instant reset**?",
      "Do you need an **undo button** for mistakes?",
      "Would you **clear the clutter** of your mind?",
      "How would you **plan ahead** with magic?"
    ]
  },
  {
    "id": 93,
    "question": "If you had one superpower, what would it be?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "reach for",
        "translation": "aspirare a",
        "example": "Do you reach for big goals?"
      },
      {
        "phrase": "dream up",
        "translation": "sognare",
        "example": "Do you dream up stories?"
      },
      {
        "phrase": "teleport",
        "translation": "teletrasportarsi",
        "example": "Would you teleport to work?"
      },
      {
        "phrase": "time travel",
        "translation": "viaggiare nel tempo",
        "example": "Is time travel dangerous?"
      },
      {
        "phrase": "read minds",
        "translation": "leggere nel pensiero",
        "example": "Would you read minds or stay ignorant?"
      },
      {
        "phrase": "invisible",
        "translation": "invisibile",
        "example": "Would being invisible be fun?"
      },
      {
        "phrase": "super stamina",
        "translation": "resistenza super",
        "example": "Would you choose super stamina?"
      }
    ],
    "guidedQuestions": [
      "Would you **teleport** to work?",
      "Is **time travel** dangerous?",
      "Would you **read minds** or stay ignorant?",
      "Would being **invisible** be fun?"
    ]
  },
  {
    "id": 94,
    "question": "What job would you like to try for one day?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "try out",
        "translation": "provare",
        "example": "Do you try out new tools?"
      },
      {
        "phrase": "follow through",
        "translation": "portare a termine",
        "example": "Do you follow through on big plans?"
      },
      {
        "phrase": "shadow someone",
        "translation": "seguire qualcuno (per imparare)",
        "example": "Who would you shadow?"
      },
      {
        "phrase": "try my hand at",
        "translation": "cimentarmi in",
        "example": "Would you try your hand at acting?"
      },
      {
        "phrase": "day in the life",
        "translation": "giornata tipo",
        "example": "What is a day in the life of a CEO like?"
      },
      {
        "phrase": "swap roles",
        "translation": "scambiarsi i ruoli",
        "example": "Would you swap roles with your boss?"
      }
    ],
    "guidedQuestions": [
      "Who would you **shadow**?",
      "Would you **try your hand at** acting?",
      "What is a **day in the life** of a CEO like?",
      "Would you **swap roles** with your boss?"
    ]
  },
  {
    "id": 95,
    "question": "What is something the world needs more of?",
    "category": "Values",
    "vocabulary": [
      {
        "phrase": "look forward to",
        "translation": "non vedere l'ora di",
        "example": "What change do you look forward to?"
      },
      {
        "phrase": "come up with",
        "translation": "inventarsi",
        "example": "Can you come up with a solution?"
      },
      {
        "phrase": "more empathy",
        "translation": "più empatia",
        "example": "Does the world need more empathy?"
      },
      {
        "phrase": "fair play",
        "translation": "gioco corretto",
        "example": "Is fair play disappearing?"
      },
      {
        "phrase": "clean energy",
        "translation": "energia pulita",
        "example": "Do we need more clean energy?"
      },
      {
        "phrase": "good listeners",
        "translation": "buoni ascoltatori",
        "example": "Are good listeners rare?"
      },
      {
        "phrase": "trustworthy leaders",
        "translation": "leader affidabili",
        "example": "Do we need more trustworthy leaders?"
      }
    ],
    "guidedQuestions": [
      "Can you **come up with** a solution?",
      "Does **more empathy** solve conflicts?",
      "Is **fair play** disappearing?",
      "Do we need more **trustworthy leaders**?"
    ]
  },
  {
    "id": 96,
    "question": "What would you invent to make life easier?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "set out to",
        "translation": "proporsi di",
        "example": "Would you set out to build it yourself?"
      },
      {
        "phrase": "go for it",
        "translation": "buttarsi",
        "example": "Will you go for it?"
      },
      {
        "phrase": "life hack",
        "translation": "trucco per la vita",
        "example": "Is it a simple life hack?"
      },
      {
        "phrase": "streamline",
        "translation": "snellire",
        "example": "Would your invention streamline chores?"
      },
      {
        "phrase": "automation",
        "translation": "automazione",
        "example": "Would you build automation for chores?"
      },
      {
        "phrase": "solve a pain point",
        "translation": "risolvere un problema",
        "example": "Does it solve a pain point?"
      }
    ],
    "guidedQuestions": [
      "Would you **set out to** build it yourself?",
      "Is it a simple **life hack**?",
      "Would your invention **streamline** chores?",
      "Does it **solve a pain point**?"
    ]
  },
  {
    "id": 97,
    "question": "If you could meet one famous person, who would it be?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "take on",
        "translation": "assumere",
        "type": "Phrasal Verb",
        "example": "When would you take on a challenge?"
      },
      {
        "phrase": "plan ahead",
        "translation": "pianificare in anticipo",
        "type": "Phrasal Verb",
        "example": "Do you plan ahead for trips?"
      },
      {
        "phrase": "pick their brain",
        "translation": "chiedere un parere",
        "type": "Idiom",
        "example": "Would you pick their brain for hours?"
      },
      {
        "phrase": "role model",
        "translation": "modello di ruolo",
        "type": "Noun",
        "example": "Are they a role model for you?"
      },
      {
        "phrase": "trailblazer",
        "translation": "pioniere",
        "type": "Noun",
        "example": "Is this person a trailblazer?"
      },
      {
        "phrase": "ask burning questions",
        "translation": "fare domande scottanti",
        "type": "Collocation",
        "example": "What burning questions would you ask?"
      },
      {
        "phrase": "gain insight",
        "translation": "ottenere intuizioni",
        "type": "Collocation",
        "example": "How do you gain insight?"
      }
    ],
    "guidedQuestions": [
      "Would you **pick their brain** for hours?",
      "Are they a **role model** for you?",
      "Is this person a **trailblazer**?",
      "What **burning questions** would you ask?"
    ]
  },
  {
    "id": 98,
    "question": "What is something you would do if you had no phone for a week?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "run out of",
        "translation": "finire",
        "example": "Do you run out of time often?"
      },
      {
        "phrase": "clean up",
        "translation": "pulire",
        "example": "Do you clean up after dinner?"
      },
      {
        "phrase": "digital detox",
        "translation": "disintossicazione digitale",
        "example": "Do you need a digital detox?"
      },
      {
        "phrase": "go offline",
        "translation": "andare offline",
        "example": "Could you go offline for a week?"
      },
      {
        "phrase": "analog fun",
        "translation": "divertimento analogico",
        "example": "Would you have analog fun like board games?"
      },
      {
        "phrase": "reclaim my time",
        "translation": "riprendermi il mio tempo",
        "example": "How would you reclaim your time?"
      }
    ],
    "guidedQuestions": [
      "Do you need a **digital detox**?",
      "Could you **go offline** for a week?",
      "Would you have **analog fun** like board games?",
      "How would you **reclaim your time**?"
    ]
  },
  {
    "id": 99,
    "question": "If you could make one new school rule, what would it be?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "reach for",
        "translation": "aspirare a",
        "example": "Do you reach for big goals?"
      },
      {
        "phrase": "dream up",
        "translation": "sognare",
        "example": "Do you dream up stories?"
      },
      {
        "phrase": "ground rule",
        "translation": "regola di base",
        "example": "Would you set a ground rule for respect?"
      },
      {
        "phrase": "fair for all",
        "translation": "giusto per tutti",
        "example": "Is your rule fair for all?"
      },
      {
        "phrase": "set the tone",
        "translation": "impostare il tono",
        "example": "How does it set the tone for the school?"
      },
      {
        "phrase": "clear consequence",
        "translation": "conseguenza chiara",
        "example": "Is there a clear consequence for breaking it?"
      }
    ],
    "guidedQuestions": [
      "Would you set a **ground rule** for respect?",
      "Is your rule **fair for all**?",
      "How does it **set the tone** for the school?",
      "Is there a **clear consequence** for breaking it?"
    ]
  },
  {
    "id": 100,
    "question": "What do you think makes life beautiful?",
    "category": "Dreams",
    "vocabulary": [
      {
        "phrase": "try out",
        "translation": "provare",
        "example": "Do you try out new tools?"
      },
      {
        "phrase": "follow through",
        "translation": "portare a termine",
        "example": "Do you follow through on big plans?"
      },
      {
        "phrase": "simple pleasures",
        "translation": "piaceri semplici",
        "example": "Do simple pleasures matter most?"
      },
      {
        "phrase": "everyday magic",
        "translation": "magia quotidiana",
        "example": "Is there everyday magic around you?"
      },
      {
        "phrase": "awe and wonder",
        "translation": "stupore e meraviglia",
        "example": "Do awe and wonder color life?"
      },
      {
        "phrase": "tiny moments",
        "translation": "piccoli momenti",
        "example": "Do tiny moments add up?"
      },
      {
        "phrase": "fully present",
        "translation": "pienamente presente",
        "example": "Are you fully present to see it?"
      }
    ],
    "guidedQuestions": [
      "Do **simple pleasures** matter most?",
      "Is there **everyday magic** around you?",
      "Do **tiny moments** add up?",
      "Are you **fully present** to see it?"
    ]
  },
  {
    "id": 101,
    "question": "Which of my strongest beliefs are formed on second-hand information vs. first-hand experience?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "second-hand information",
        "translation": "informazioni di seconda mano",
        "type": "Collocation",
        "example": "Do you trust second-hand information?"
      },
      {
        "phrase": "first-hand experience",
        "translation": "esperienza diretta",
        "type": "Collocation",
        "example": "Is first-hand experience necessary for truth?"
      },
      {
        "phrase": "take with a grain of salt",
        "translation": "prendere con le pinze",
        "type": "Idiom",
        "example": "Do you take rumors with a grain of salt?"
      },
      {
        "phrase": "critical thinking",
        "translation": "pensiero critico",
        "type": "Noun Phrase",
        "example": "Do you rely on critical thinking?"
      },
      {
        "phrase": "verify the source",
        "translation": "verificare la fonte",
        "type": "Verb Phrase",
        "example": "Do you verify the source often?"
      },
      {
        "phrase": "empirical evidence",
        "translation": "evidenza empirica",
        "type": "Noun Phrase",
        "example": "Do you need empirical evidence?"
      },
      {
        "phrase": "hearsay",
        "translation": "diceria",
        "type": "Noun",
        "example": "Is most news just hearsay?"
      }
    ],
    "guidedQuestions": [
      "Do you trust **second-hand information**?",
      "Is **first-hand experience** necessary for truth?",
      "Do you take rumors **with a grain of salt**?",
      "Do you rely on **critical thinking**?"
    ]
  },
  {
    "id": 102,
    "question": "If I could not compare myself to anyone else, how would I define a good life?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "internal compass",
        "translation": "bussola interiore",
        "type": "Noun Phrase",
        "example": "Does your internal compass guide you?"
      },
      {
        "phrase": "keeping up with the Joneses",
        "translation": "stare al passo con gli altri",
        "type": "Idiom",
        "example": "Are you tired of keeping up with the Joneses?"
      },
      {
        "phrase": "measure of success",
        "translation": "misura del successo",
        "type": "Collocation",
        "example": "What is your true measure of success?"
      },
      {
        "phrase": "intrinsic value",
        "translation": "valore intrinseco",
        "type": "Noun Phrase",
        "example": "Do you value intrinsic value?"
      },
      {
        "phrase": "benchmark",
        "translation": "punto di riferimento",
        "type": "Noun",
        "example": "What is your benchmark for progress?"
      },
      {
        "phrase": "authenticity",
        "translation": "autenticità",
        "type": "Noun",
        "example": "Is authenticity vital?"
      },
      {
        "phrase": "on my own terms",
        "translation": "alle mie condizioni",
        "type": "Idiom",
        "example": "Do you live on your own terms?"
      }
    ],
    "guidedQuestions": [
      "Does your **internal compass** guide you?",
      "Are you tired of **keeping up with the Joneses**?",
      "What is your true **measure of success**?",
      "Do you live **on your own terms**?"
    ]
  },
  {
    "id": 103,
    "question": "Whose views do I criticize that I would actually agree with if I lived in their shoes?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "walk a mile in someone's shoes",
        "translation": "mettersi nei panni di qualcuno",
        "type": "Idiom",
        "example": "Can you walk a mile in someone's shoes?"
      },
      {
        "phrase": "perspective-taking",
        "translation": "prendere prospettiva",
        "type": "Noun",
        "example": "Do you practice perspective-taking?"
      },
      {
        "phrase": "blind spot",
        "translation": "punto cieco",
        "type": "Noun Phrase",
        "example": "Do you have a blind spot?"
      },
      {
        "phrase": "devil's advocate",
        "translation": "avvocato del diavolo",
        "type": "Idiom",
        "example": "Can you play devil's advocate?"
      },
      {
        "phrase": "empathy gap",
        "translation": "divario di empatia",
        "type": "Noun Phrase",
        "example": "Is there an empathy gap in your thinking?"
      },
      {
        "phrase": "common ground",
        "translation": "terreno comune",
        "type": "Collocation",
        "example": "Can you find common ground?"
      },
      {
        "phrase": "context matters",
        "translation": "il contesto conta",
        "type": "Phrase",
        "example": "Do you agree that context matters?"
      }
    ],
    "guidedQuestions": [
      "Can you **walk a mile in someone's shoes**?",
      "Do you practice **perspective-taking**?",
      "Can you play **devil's advocate**?",
      "Is there an **empathy gap** in your thinking?"
    ]
  },
  {
    "id": 104,
    "question": "Who do I envy that is actually less happy than I am?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "grass is always greener",
        "translation": "l'erba del vicino è sempre più verde",
        "type": "Proverb",
        "example": "Why do we tend to believe the grass is always greener somewhere else?"
      },
      {
        "phrase": "surface level",
        "translation": "livello superficiale",
        "type": "Adjective Phrase",
        "example": "Do you prefer deep conversations or do you usually stay at the surface level?"
      },
      {
        "phrase": "facade",
        "translation": "facciata",
        "type": "Noun",
        "example": "Have you ever maintained a happy facade while suffering inside?"
      },
      {
        "phrase": "curated life",
        "translation": "vita curata",
        "type": "Noun Phrase",
        "example": "How much of what you see online is a curated life vs. reality?"
      },
      {
        "phrase": "comparison is the thief of joy",
        "translation": "il confronto è il ladro della gioia",
        "type": "Proverb",
        "example": "When did you learn the hard way that comparison is the thief of joy?"
      },
      {
        "phrase": "behind closed doors",
        "translation": "a porte chiuse",
        "type": "Idiom",
        "example": "Do you act differently behind closed doors than you do in public?"
      },
      {
        "phrase": "illusion",
        "translation": "illusione",
        "type": "Noun",
        "example": "Is the idea of a 'perfect life' just an illusion?"
      }
    ],
    "guidedQuestions": [
      "Is the **grass always greener** elsewhere?",
      "Do you see only the **surface level**?",
      "Is their happiness a **facade**?",
      "Is **comparison the thief of joy** for you?"
    ]
  },
  {
    "id": 105,
    "question": "Looking back, am I any good at anticipating how I would feel and react to risks that actually occurred?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "hindsight is 20/20",
        "translation": "col senno di poi",
        "type": "Proverb",
        "example": "What major mistake taught you that hindsight is 20/20?"
      },
      {
        "phrase": "affective forecasting",
        "translation": "previsione affettiva",
        "type": "Noun Term",
        "example": "Why are humans so bad at affective forecasting?"
      },
      {
        "phrase": "worst-case scenario",
        "translation": "scenario peggiore",
        "type": "Noun Phrase",
        "example": "Do you usually prepare for the worst-case scenario or hope for the best?"
      },
      {
        "phrase": "resilience",
        "translation": "resilienza",
        "type": "Noun",
        "example": "What is the hardest situation where you had to show resilience?"
      },
      {
        "phrase": "overestimate",
        "translation": "sovrastimare",
        "type": "Verb",
        "example": "Do we tend to overestimate how happy a new purchase will make us?"
      },
      {
        "phrase": "adaptability",
        "translation": "adattabilità",
        "type": "Noun",
        "example": "Is adaptability a more important skill than intelligence today?"
      },
      {
        "phrase": "roll with the punches",
        "translation": "incassare e andare avanti",
        "type": "Idiom",
        "example": "Are you able to roll with the punches when plans change suddenly?"
      }
    ],
    "guidedQuestions": [
      "Is **hindsight 20/20** for you?",
      "Are you bad at **affective forecasting**?",
      "Did you fear the **worst-case scenario**?",
      "Can you **overestimate** your pain?"
    ]
  },
  {
    "id": 106,
    "question": "Is my desire for more money based on the false belief that it will solve personal problems that have nothing to do with money?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "money can't buy happiness",
        "translation": "i soldi non comprano la felicità",
        "type": "Proverb",
        "example": "Do you truly believe that money can't buy happiness?"
      },
      {
        "phrase": "root cause",
        "translation": "causa scatenante",
        "type": "Noun Phrase",
        "example": "Do you tend to treat the symptoms or look for the root cause?"
      },
      {
        "phrase": "materialism",
        "translation": "materialismo",
        "type": "Noun",
        "example": "Is materialism the biggest distraction in modern society?"
      },
      {
        "phrase": "void",
        "translation": "vuoto",
        "type": "Noun",
        "example": "Have you ever tried to fill an emotional void with shopping?"
      },
      {
        "phrase": "financial freedom",
        "translation": "libertà finanziaria",
        "type": "Noun Phrase",
        "example": "What would you do tomorrow if you had total financial freedom?"
      },
      {
        "phrase": "misguided",
        "translation": "fuorviato",
        "type": "Adjective",
        "example": "What is one common belief about money that is misguided?"
      }
    ],
    "guidedQuestions": [
      "Does **money buy happiness**?",
      "What is the **root cause** of your stress?",
      "Do you believe in **materialism**?",
      "Will money fill the **void**?"
    ]
  },
  {
    "id": 107,
    "question": "How many of my principles are cultural fads?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "bandwagon effect",
        "translation": "effetto carrozzone",
        "type": "Noun Term",
        "example": "Have you ever supported a cause just because of the bandwagon effect?"
      },
      {
        "phrase": "stand the test of time",
        "translation": "resistere alla prova del tempo",
        "type": "Idiom",
        "example": "Which of your personal values will stand the test of time?"
      },
      {
        "phrase": "social construct",
        "translation": "costrutto sociale",
        "type": "Noun Phrase",
        "example": "Do you think gender roles are biology or just a social construct?"
      },
      {
        "phrase": "zeitgeist",
        "translation": "zeitgeist",
        "type": "Noun",
        "example": "What movie or song perfectly captures the current zeitgeist?"
      },
      {
        "phrase": "arbitrary",
        "translation": "arbitrario",
        "type": "Adjective",
        "example": "Do your company's rules feel fair or completely arbitrary?"
      },
      {
        "phrase": "critical examination",
        "translation": "esame critico",
        "type": "Noun Phrase",
        "example": "Does your own behavior stand up to critical examination?"
      },
      {
        "phrase": "herd mentality",
        "translation": "mentalità del gregge",
        "type": "Noun Phrase",
        "example": "Why do people fall into herd mentality during crises?"
      }
    ],
    "guidedQuestions": [
      "Do you follow the **bandwagon effect**?",
      "Do your values **stand the test of time**?",
      "Are social norms a **social construct**?",
      "Do you challenge the **zeitgeist**?"
    ]
  },
  {
    "id": 108,
    "question": "Whose silence do I mistake for agreement?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "tacit agreement",
        "translation": "accordo tacito",
        "type": "Noun Phrase",
        "example": "Is ignoring a problem a form of tacit agreement?"
      },
      {
        "phrase": "read the room",
        "translation": "capire l'aria che tira",
        "type": "Idiom",
        "example": "Have you ever failed to read the room and said the wrong thing?"
      },
      {
        "phrase": "conflict aversion",
        "translation": "avversione al conflitto",
        "type": "Noun Phrase",
        "example": "Does conflict aversion prevent you from being honest?"
      },
      {
        "phrase": "speak up",
        "translation": "farsi sentire",
        "type": "Phrasal Verb",
        "example": "When was the last time you were afraid to speak up?"
      },
      {
        "phrase": "silence gives consent",
        "translation": "chi tace acconsente",
        "type": "Proverb",
        "example": "Do you agree with the old saying that silence gives consent?"
      },
      {
        "phrase": "passive resistance",
        "translation": "resistenza passiva",
        "type": "Noun Phrase",
        "example": "Have you ever used passive resistance instead of saying 'no'?"
      },
      {
        "phrase": "misinterpret",
        "translation": "fraintendere",
        "type": "Verb",
        "example": "How easy is it to misinterpret tone in text messages?"
      }
    ],
    "guidedQuestions": [
      "Is silence **tacit agreement**?",
      "Can you **read the room**?",
      "Does **conflict aversion** keep you quiet?",
      "Will you **speak up** next time?"
    ]
  },
  {
    "id": 109,
    "question": "What kind of lifestyle would I live if no one other than my immediate family could see it?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "performative",
        "translation": "performativo",
        "type": "Adjective",
        "example": "Do you feel that a lot of charity work today is just performative?"
      },
      {
        "phrase": "authenticity",
        "translation": "autenticità",
        "type": "Noun",
        "example": "Is it risky to show total authenticity at work?"
      },
      {
        "phrase": "behind the scenes",
        "translation": "dietro le quinte",
        "type": "Idiom",
        "example": "What stressful things are happening behind the scenes of your life?"
      },
      {
        "phrase": "status symbol",
        "translation": "status symbol",
        "type": "Noun Phrase",
        "example": "What is a common status symbol that you find ridiculous?"
      },
      {
        "phrase": "living for approval",
        "translation": "vivere per l'approvazione",
        "type": "Phrase",
        "example": "How do you stop living for approval from others?"
      },
      {
        "phrase": "low profile",
        "translation": "basso profilo",
        "type": "Noun Phrase",
        "example": "In what situation do you prefer to keep a low profile?"
      },
      {
        "phrase": "true colors",
        "translation": "veri colori",
        "type": "Idiom",
        "example": "When do people usually reveal their true colors?"
      }
    ],
    "guidedQuestions": [
      "Is your life **performative**?",
      "Do you value **authenticity**?",
      "What happens **behind the scenes**?",
      "Are you **living for approval**?"
    ]
  },
  {
    "id": 110,
    "question": "What events nearly happened that would have fundamentally changed my life, for better or worse, had they occurred?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "sliding doors moment",
        "translation": "momento sliding doors",
        "type": "Idiom",
        "example": "Looking back, what was your biggest 'sliding doors' moment?"
      },
      {
        "phrase": "butterfly effect",
        "translation": "effetto farfalla",
        "type": "Noun Phrase",
        "example": "Do you believe the butterfly effect controls our destiny?"
      },
      {
        "phrase": "close call",
        "translation": "scampato pericolo",
        "type": "Noun Phrase",
        "example": "What was a close call that changed your perspective on safety?"
      },
      {
        "phrase": "pivotal moment",
        "translation": "momento cruciale",
        "type": "Noun Phrase",
        "example": "Can you identify the single most pivotal moment in your career?"
      },
      {
        "phrase": "near miss",
        "translation": "quasi incidente",
        "type": "Noun Phrase",
        "example": "Have you ever had a near miss that felt like a divine intervention?"
      },
      {
        "phrase": "counterfactual",
        "translation": "controfactual",
        "type": "Adjective",
        "example": "Do you often torture yourself with counterfactual thinking?"
      },
      {
        "phrase": "path not taken",
        "translation": "strada non presa",
        "type": "Idiom",
        "example": "Do you still wonder about the path not taken?"
      }
    ],
    "guidedQuestions": [
      "Was it a **sliding doors moment**?",
      "Do you believe in the **butterfly effect**?",
      "Was it a **close call**?",
      "Do you ponder the **path not taken**?"
    ]
  },
  {
    "id": 111,
    "question": "What views do I claim to believe in that I know are wrong but I say them because I don’t want to be criticized by my employer or industry?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "toe the party line",
        "translation": "seguire la linea del partito",
        "type": "Idiom",
        "example": "When did you have to toe the party line against your conscience?"
      },
      {
        "phrase": "self-censorship",
        "translation": "autocensura",
        "type": "Noun",
        "example": "Is self-censorship necessary for professional survival?"
      },
      {
        "phrase": "cognitive dissonance",
        "translation": "dissonanza cognitiva",
        "type": "Noun Term",
        "example": "How do you deal with the cognitive dissonance of doing work you don't believe in?"
      },
      {
        "phrase": "echo chamber",
        "translation": "camera dell'eco",
        "type": "Noun Phrase",
        "example": "How do you know if you are trapped in an ideological echo chamber?"
      },
      {
        "phrase": "professional suicide",
        "translation": "suicidio professionale",
        "type": "Noun Phrase",
        "example": "What opinion would be professional suicide to express in your field?"
      },
      {
        "phrase": "go along to get along",
        "translation": "adeguarsi per andare d'accordo",
        "type": "Idiom",
        "example": "Is 'going along to get along' a smart strategy or cowardice?"
      },
      {
        "phrase": "lip service",
        "translation": "solo a parole",
        "type": "Idiom",
        "example": "Which company value is usually just lip service?"
      }
    ],
    "guidedQuestions": [
      "Do you **toe the party line**?",
      "Do you practice **self-censorship**?",
      "Are you in an **echo chamber**?",
      "Is it just **lip service**?"
    ]
  },
  {
    "id": 112,
    "question": "How much of what I do is internal benchmark (makes me happy) vs. external benchmark (I think it changes what other people think of me)?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "intrinsic motivation",
        "translation": "motivazione intrinseca",
        "type": "Noun Phrase",
        "example": "What is your strongest intrinsic motivation?"
      },
      {
        "phrase": "extrinsic reward",
        "translation": "ricompensa intrinseca",
        "type": "Noun Phrase",
        "example": "Do you only work hard when there is an extrinsic reward?"
      },
      {
        "phrase": "validation",
        "translation": "convalida",
        "type": "Noun",
        "example": "Why do we seek validation from strangers online?"
      },
      {
        "phrase": "derive satisfaction",
        "translation": "trarre soddisfazione",
        "type": "Collocation",
        "example": "Do you derive satisfaction from the process or the result?"
      },
      {
        "phrase": "social currency",
        "translation": "valuta sociale",
        "type": "Noun Phrase",
        "example": "Is popularity just a form of social currency?"
      },
      {
        "phrase": "keep up appearances",
        "translation": "mantenere le apparenze",
        "type": "Idiom",
        "example": "Have you ever gone into debt just to keep up appearances?"
      },
      {
        "phrase": "self-worth",
        "translation": "autostima",
        "type": "Noun",
        "example": "Is your self-worth tied to your productivity?"
      }
    ],
    "guidedQuestions": [
      "Do you seek **validation**?",
      "What is your **intrinsic motivation**?",
      "Are you trying to **keep up appearances**?",
      "Do you know your true **self-worth**?"
    ]
  },
  {
    "id": 113,
    "question": "Am I thinking independently or going along with the tribal views of a group I want to be associated with?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "groupthink",
        "translation": "pensiero di gruppo",
        "type": "Noun Term",
        "example": "Does your team suffer from groupthink?"
      },
      {
        "phrase": "tribalism",
        "translation": "tribalismo",
        "type": "Noun",
        "example": "Is political tribalism getting worse?"
      },
      {
        "phrase": "conformity",
        "translation": "conformismo",
        "type": "Noun",
        "example": "Is conformity rewarded in school?"
      },
      {
        "phrase": "independent thinker",
        "translation": "pensatore indipendente",
        "type": "Noun Phrase",
        "example": "Are you truly an independent thinker?"
      },
      {
        "phrase": "follow the herd",
        "translation": "seguire il gregge",
        "type": "Idiom",
        "example": "Is it safer to follow the herd?"
      },
      {
        "phrase": "echo chamber",
        "translation": "camera dell'eco",
        "type": "Noun Phrase",
        "example": "How do you escape an echo chamber?"
      },
      {
        "phrase": "critical distance",
        "translation": "distanza critica",
        "type": "Noun Phrase",
        "example": "Can you maintain critical distance from your own beliefs?"
      }
    ],
    "guidedQuestions": [
      "Are you prone to **groupthink**?",
      "Do you **follow the herd**?",
      "Are you an **independent thinker**?",
      "Do you maintain **critical distance**?"
    ]
  },
  {
    "id": 114,
    "question": "Whose approval am I auditioning for?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "seek approval",
        "translation": "cercare approvazione",
        "type": "Collocation",
        "example": "Do you seek approval constantly?"
      },
      {
        "phrase": "people-pleaser",
        "translation": "persona che vuole compiacere tutti",
        "type": "Noun",
        "example": "Are you a people-pleaser?"
      },
      {
        "phrase": "external validation",
        "translation": "convalida esterna",
        "type": "Noun Phrase",
        "example": "Do you need external validation?"
      },
      {
        "phrase": "jump through hoops",
        "translation": "fare i salti mortali",
        "type": "Idiom",
        "example": "Do you jump through hoops?"
      },
      {
        "phrase": "worthy of",
        "translation": "degno di",
        "type": "Adjective Phrase",
        "example": "Are you worthy of love?"
      },
      {
        "phrase": "imposter syndrome",
        "translation": "sindrome dell'impostore",
        "type": "Noun Term",
        "example": "Does imposter syndrome affect you?"
      },
      {
        "phrase": "play to the gallery",
        "translation": "cercare l'applauso facile",
        "type": "Idiom",
        "example": "Are you playing to the gallery?"
      }
    ],
    "guidedQuestions": [
      "Do you **seek approval** constantly?",
      "Are you a **people-pleaser**?",
      "Does **imposter syndrome** affect you?",
      "Are you **playing to the gallery**?"
    ]
  },
  {
    "id": 115,
    "question": "Which of my principles would I abandon if they stopped earning me praise and recognition?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "integrity",
        "translation": "integrità",
        "type": "Noun",
        "example": "Do you keep your integrity in private?"
      },
      {
        "phrase": "virtue signaling",
        "translation": "segnalazione di virtù",
        "type": "Noun Term",
        "example": "Is your activism just virtue signaling?"
      },
      {
        "phrase": "core values",
        "translation": "valori fondamentali",
        "type": "Noun Phrase",
        "example": "What are your core values?"
      },
      {
        "phrase": "moral compass",
        "translation": "bussola morale",
        "type": "Noun Phrase",
        "example": "Does your moral compass guide you?"
      },
      {
        "phrase": "hypocrisy",
        "translation": "ipocrisia",
        "type": "Noun",
        "example": "Does hypocrisy bother you?"
      },
      {
        "phrase": "walk the talk",
        "translation": "predicare bene e razzolare bene",
        "type": "Idiom",
        "example": "Do you walk the talk?"
      },
      {
        "phrase": "superficial",
        "translation": "superficiale",
        "type": "Adjective",
        "example": "Is it superficial?"
      }
    ],
    "guidedQuestions": [
      "Do you keep your **integrity** in private?",
      "Is your activism just **virtue signaling**?",
      "What are your **core values**?",
      "Does **hypocrisy** bother you?"
    ]
  },
  {
    "id": 116,
    "question": "If I could see myself talk, what would I cringe at the most?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "self-conscious",
        "translation": "impacciato",
        "type": "Adjective",
        "example": "What makes you feel most self-conscious?"
      },
      {
        "phrase": "verbal tic",
        "translation": "tic verbale",
        "type": "Noun Phrase",
        "example": "Do you have a verbal tic that annoys you?"
      },
      {
        "phrase": "cringe-worthy",
        "translation": "imbarazzante",
        "type": "Adjective",
        "example": "What is the most cringe-worthy thing you did as a teenager?"
      },
      {
        "phrase": "ramble",
        "translation": "divagare",
        "type": "Verb",
        "example": "Do you tend to ramble when there is an awkward silence?"
      },
      {
        "phrase": "interrupt",
        "translation": "interrompere",
        "type": "Verb",
        "example": "Is it ever polite to interrupt?"
      },
      {
        "phrase": "mannerism",
        "translation": "manierismo",
        "type": "Noun",
        "example": "What mannerism did you pick up from your parents?"
      },
      {
        "phrase": "lack of self-awareness",
        "translation": "mancanza di autoconsapevolezza",
        "type": "Phrase",
        "example": "Is lack of self-awareness the most annoying trait?"
      }
    ],
    "guidedQuestions": [
      "Do you feel **self-conscious** on video?",
      "Do you have a **verbal tic**?",
      "Is your behavior **cringe-worthy**?",
      "Do you **ramble** when nervous?"
    ]
  },
  {
    "id": 117,
    "question": "What question am I afraid to ask because I suspect I know the answer?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "elephant in the room",
        "translation": "elefante nella stanza",
        "type": "Idiom",
        "example": "Is there an elephant in the room?"
      },
      {
        "phrase": "denial",
        "translation": "negazione",
        "type": "Noun",
        "example": "Are you in denial?"
      },
      {
        "phrase": "face the music",
        "translation": "affrontare le conseguenze",
        "type": "Idiom",
        "example": "Can you face the music?"
      },
      {
        "phrase": "hard truth",
        "translation": "dura verità",
        "type": "Noun Phrase",
        "example": "What is the hard truth?"
      },
      {
        "phrase": "avoidance",
        "translation": "evitamento",
        "type": "Noun",
        "example": "Is avoidance your strategy?"
      },
      {
        "phrase": "gut feeling",
        "translation": "sensazione di pancia",
        "type": "Noun Phrase",
        "example": "Do you trust your gut feeling?"
      },
      {
        "phrase": "confirm my suspicions",
        "translation": "confermare i miei sospetti",
        "type": "Collocation",
        "example": "Did it confirm your suspicions?"
      }
    ],
    "guidedQuestions": [
      "Is there an **elephant in the room**?",
      "Are you in **denial**?",
      "Can you **face the music**?",
      "What is the **hard truth**?"
    ]
  },
  {
    "id": 118,
    "question": "How much have things outside of my control contributed to things I take credit for?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "privilege",
        "translation": "privilegio",
        "type": "Noun",
        "example": "Do we ignore privilege?"
      },
      {
        "phrase": "serendipity",
        "translation": "serendipità",
        "type": "Noun",
        "example": "Is it serendipity?"
      },
      {
        "phrase": "right place, right time",
        "translation": "posto giusto al momento giusto",
        "type": "Idiom",
        "example": "Were you just in the right place at the right time?"
      },
      {
        "phrase": "attribution error",
        "translation": "errore di attribuzione",
        "type": "Noun Term",
        "example": "Is it an attribution error?"
      },
      {
        "phrase": "luck of the draw",
        "translation": "fortuna del sorteggio",
        "type": "Idiom",
        "example": "Is it just the luck of the draw?"
      },
      {
        "phrase": "humility",
        "translation": "umiltà",
        "type": "Noun",
        "example": "Do you need humility?"
      },
      {
        "phrase": "circumstantial",
        "translation": "circostanziale",
        "type": "Adjective",
        "example": "Was it purely circumstantial?"
      }
    ],
    "guidedQuestions": [
      "Do you acknowledge your **privilege**?",
      "Was it **serendipity**?",
      "Were you in the **right place, right time**?",
      "Do you practice **humility**?"
    ]
  },
  {
    "id": 119,
    "question": "How do I know if I’m being patient (a skill) or stubborn (a flaw)?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "fine line",
        "translation": "linea sottile",
        "type": "Idiom",
        "example": "Is there a fine line between confidence and arrogance?"
      },
      {
        "phrase": "dig your heels in",
        "translation": "puntare i piedi",
        "type": "Idiom",
        "example": "Do you dig your heels in during arguments?"
      },
      {
        "phrase": "perseverance",
        "translation": "perseveranza",
        "type": "Noun",
        "example": "When does perseverance become stupidity?"
      },
      {
        "phrase": "obstinate",
        "translation": "ostinato",
        "type": "Adjective",
        "example": "Who is the most obstinate person you know?"
      },
      {
        "phrase": "know when to quit",
        "translation": "saper quando smettere",
        "type": "Phrase",
        "example": "Is it a skill to know when to quit?"
      },
      {
        "phrase": "sunk cost fallacy",
        "translation": "fallacia dei costi irrecuperabili",
        "type": "Noun Term",
        "example": "Have you ever fallen for the sunk cost fallacy?"
      },
      {
        "phrase": "persistence",
        "translation": "persistenza",
        "type": "Noun",
        "example": "Has your persistence ever paid off unexpectedly?"
      }
    ],
    "guidedQuestions": [
      "Is it a **fine line** between the two?",
      "Do you **dig your heels in**?",
      "Is it **perseverance** or **obstinancy**?",
      "Does the **sunk cost fallacy** apply?"
    ]
  },
  {
    "id": 120,
    "question": "What crazy genius that I aspire to emulate is actually just crazy?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "eccentric",
        "translation": "eccentrico",
        "type": "Adjective",
        "example": "Is eccentric behavior a sign?"
      },
      {
        "phrase": "idolize",
        "translation": "idolatrare",
        "type": "Verb",
        "example": "Do you idolize the wrong people?"
      },
      {
        "phrase": "put on a pedestal",
        "translation": "mettere su un piedistallo",
        "type": "Idiom",
        "example": "Do you put them on a pedestal?"
      },
      {
        "phrase": "flawed genius",
        "translation": "genio imperfetto",
        "type": "Noun Phrase",
        "example": "Is he a flawed genius?"
      },
      {
        "phrase": "rose-colored glasses",
        "translation": "occhiali rosa",
        "type": "Idiom",
        "example": "Do you view them through rose-colored glasses?"
      },
      {
        "phrase": "cautionary tale",
        "translation": "storia ammonitrice",
        "type": "Noun Phrase",
        "example": "Are they a cautionary tale?"
      },
      {
        "phrase": "separate the art from the artist",
        "translation": "separare l'arte dall'artista",
        "type": "Phrase",
        "example": "Can you separate the art from the artist?"
      }
    ],
    "guidedQuestions": [
      "Do you **idolize** the wrong people?",
      "Do you put them **on a pedestal**?",
      "Are they a **cautionary tale**?",
      "Do you view them through **rose-colored glasses**?"
    ]
  },
  {
    "id": 121,
    "question": "What strong belief do I hold that’s most likely to change?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "open-minded",
        "translation": "aperto mentalmente",
        "type": "Adjective",
        "example": "Are you truly open-minded or do you just think you are?"
      },
      {
        "phrase": "dogmatic",
        "translation": "dogmatico",
        "type": "Adjective",
        "example": "Why does religion often become dogmatic?"
      },
      {
        "phrase": "evolution of thought",
        "translation": "evoluzione del pensiero",
        "type": "Noun Phrase",
        "example": "Is it a sign of weakness to allow for evolution of thought?"
      },
      {
        "phrase": "conviction",
        "translation": "convinzione",
        "type": "Noun",
        "example": "Can you speak with conviction when you are unsure?"
      },
      {
        "phrase": "malleable",
        "translation": "malleabile",
        "type": "Adjective",
        "example": "Should young minds be malleable?"
      },
      {
        "phrase": "fluid",
        "translation": "fluido",
        "type": "Adjective",
        "example": "Do you see your identity as fixed or fluid?"
      },
      {
        "phrase": "hold loosely",
        "translation": "tenere con leggerezza",
        "type": "Phrase",
        "example": "Why is it important to hold loosely to your opinions?"
      }
    ],
    "guidedQuestions": [
      "Are you **open-minded**?",
      "Is your thinking **dogmatic**?",
      "Do you allow for **evolution of thought**?",
      "Do you **hold loosely** to your views?"
    ]
  },
  {
    "id": 122,
    "question": "Which future memory am I creating right now, and will I be proud to own it?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "nostalgia",
        "translation": "nostalgia",
        "type": "Noun",
        "example": "Do you think nostalgia is dangerous?"
      },
      {
        "phrase": "legacy",
        "translation": "eredità",
        "type": "Noun",
        "example": "Does the idea of leaving a legacy matter to you?"
      },
      {
        "phrase": "in the moment",
        "translation": "nel momento",
        "type": "Phrase",
        "example": "What prevents you from being in the moment?"
      },
      {
        "phrase": "regret",
        "translation": "rimpianto",
        "type": "Noun",
        "example": "Is it better to regret what you did or what you didn't do?"
      },
      {
        "phrase": "cherish",
        "translation": "custodire",
        "type": "Verb",
        "example": "Which memory from childhood do you cherish most?"
      },
      {
        "phrase": "fleeting",
        "translation": "fugace",
        "type": "Adjective",
        "example": "Why are the best moments usually so fleeting?"
      },
      {
        "phrase": "look back on",
        "translation": "guardare indietro a",
        "type": "Phrasal Verb",
        "example": "How will you look back on this period of your life?"
      }
    ],
    "guidedQuestions": [
      "Will you look back with **nostalgia**?",
      "Are you **in the moment**?",
      "Will you cherish this or have **regret**?",
      "Is beauty **fleeting**?"
    ]
  },
  {
    "id": 123,
    "question": "Am I addicted to cheap dopamine?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "instant gratification",
        "translation": "gratificazione istantanea",
        "type": "Noun Phrase",
        "example": "Why do we crave instant gratification over long-term success?"
      },
      {
        "phrase": "dopamine hit",
        "translation": "scarica di dopamina",
        "type": "Noun Phrase",
        "example": "Is social media designed just to give you a dopamine hit?"
      },
      {
        "phrase": "short attention span",
        "translation": "breve soglia di attenzione",
        "type": "Noun Phrase",
        "example": "Do you feel your short attention span is getting worse?"
      },
      {
        "phrase": "mindless scrolling",
        "translation": "scorrere senza pensare",
        "type": "Collocation",
        "example": "How many hours a day do you lose to mindless scrolling?"
      },
      {
        "phrase": "delayed gratification",
        "translation": "gratificazione differita",
        "type": "Noun Phrase",
        "example": "Can you practice delayed gratification with food?"
      },
      {
        "phrase": "quick fix",
        "translation": "soluzione rapida",
        "type": "Noun Phrase",
        "example": "Are you looking for a quick fix or a real solution?"
      },
      {
        "phrase": "hooked on",
        "translation": "fissato con",
        "type": "Phrasal Verb",
        "example": "What app are you currently hooked on?"
      }
    ],
    "guidedQuestions": [
      "Do you crave **instant gratification**?",
      "Is it just a **dopamine hit**?",
      "Do you have a **short attention span**?",
      "Are you **hooked on** scrolling?"
    ]
  },
  {
    "id": 124,
    "question": "If I were on my deathbed tomorrow, what would I regret most?",
    "category": "Knowledge",
    "vocabulary": [
      {
        "phrase": "mortality",
        "translation": "mortalità",
        "type": "Noun",
        "example": "Does facing your mortality make you live better?"
      },
      {
        "phrase": "bucket list",
        "translation": "lista dei desideri",
        "type": "Noun Phrase",
        "example": "What is the number one item on your bucket list?"
      },
      {
        "phrase": "make amends",
        "translation": "fare ammenda",
        "type": "Collocation",
        "example": "Is it ever too late to make amends?"
      },
      {
        "phrase": "unresolved business",
        "translation": "affari irrisolti",
        "type": "Noun Phrase",
        "example": "Do you have any unresolved business with an old friend?"
      },
      {
        "phrase": "life is short",
        "translation": "la vita è breve",
        "type": "Saying",
        "example": "Do you live like life is short, or like you have forever?"
      },
      {
        "phrase": "peace of mind",
        "translation": "pace mentale",
        "type": "Noun Phrase",
        "example": "What would give you total peace of mind right now?"
      },
      {
        "phrase": "leave nothing unsaid",
        "translation": "non lasciare nulla di non detto",
        "type": "Phrase",
        "example": "Do you try to leave nothing unsaid with your loved ones?"
      }
    ],
    "guidedQuestions": [
      "Does facing **mortality** scare you?",
      "What is on your **bucket list**?",
      "Do you need to **make amends**?",
      "Are you **at peace**?"
    ]
  }
];

export const categories = [...new Set(questions.map(q => q.category))];

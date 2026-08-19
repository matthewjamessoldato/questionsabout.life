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
  depthLevel: number;
  vocabulary: VocabularyItem[];
  guidedQuestions?: string[]; // New field for practice mode
}

export const questions: Question[] = [
    {
      "id": 1,
      "question": "What makes you feel calm?",
      "category": "Feelings",
      "depthLevel": 2,
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
      "depthLevel": 3,
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
      "depthLevel": 4,
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
      "depthLevel": 1,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "id": 32,
      "question": "What is a small win you had this week?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "What was your last real **pat on the back**?",
        "Do you notice **incremental progress**, or only big wins?",
        "What gives you **momentum** on a slow week?"
      ]
    },
    {
      "id": 33,
      "question": "What is something you stopped doing, and why?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "How did you **kick the habit** for good?",
        "Did you go **cold turkey** or taper off?",
        "Was it genuinely **detrimental**, or just unfashionable?"
      ]
    },
    {
      "id": 34,
      "question": "What is something you want to do more often?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "How do you **make time for** it realistically?",
        "Can you **carve out** an hour a week?",
        "What actually helps you **recharge**?"
      ]
    },
    {
      "id": 35,
      "question": "What is a skill you want to learn?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "How steep was the **learning curve**?",
        "How long to **get the hang of** the basics?",
        "Would it **broaden my horizons** or just fill time?"
      ]
    },
    {
      "id": 36,
      "question": "What helps you focus?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "What helps you **get into the zone**?",
        "How do you **tune out** everything else?",
        "Who deserves your **undivided attention**?"
      ]
    },
    {
      "id": 37,
      "question": "What is one thing you have improved at recently?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "Have you **come a long way** without noticing?",
        "Is **steady progress** enough for you?",
        "When did you last **step up my game**?"
      ]
    },
    {
      "id": 38,
      "question": "What is something you were afraid of but did anyway?",
      "category": "Dreams",
      "depthLevel": 3,
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
      ],
      "guidedQuestions": [
        "What made you **take the plunge**?",
        "How often do you **step out of my comfort zone**?",
        "Did it take real **guts**?"
      ]
    },
    {
      "id": 39,
      "question": "What advice would you give to your younger self?",
      "category": "Dreams",
      "depthLevel": 3,
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
          "example": "It takes years to learn to don't sweat the small stuff."
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
      ],
      "guidedQuestions": [
        "Is **hindsight is 20/20** a comfort or a curse?",
        "How do you learn to **trust your gut**?",
        "Can anyone truly **live in the moment**?"
      ]
    },
    {
      "id": 41,
      "question": "What does a good friend do?",
      "category": "Relationships",
      "depthLevel": 2,
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
      ],
      "guidedQuestions": [
        "Who has stayed through **thick and thin**?",
        "Who is your **shoulder to cry on**?",
        "Who genuinely will **have your back**?"
      ]
    },
    {
      "id": 42,
      "question": "What kind of person do you like working with?",
      "category": "Relationships",
      "depthLevel": 2,
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
      ],
      "guidedQuestions": [
        "What makes someone a real **team player**?",
        "Who fails to **pull their weight**?",
        "Who can you **bounce ideas off**?"
      ]
    },
    {
      "id": 43,
      "question": "What is something kind someone did for you?",
      "category": "Relationships",
      "depthLevel": 2,
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
      ],
      "guidedQuestions": [
        "What was the **act of kindness** you remember?",
        "Who tends to **go the extra mile**?",
        "What can **restore faith in humanity**?"
      ]
    },
    {
      "id": 44,
      "question": "How do you show kindness to others?",
      "category": "Relationships",
      "depthLevel": 2,
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
      ],
      "guidedQuestions": [
        "How readily do you **lend a hand**?",
        "Is **empathy** something you can practise?",
        "Do you **pay it forward**?"
      ]
    },
    {
      "id": 45,
      "question": "What makes a good team?",
      "category": "Relationships",
      "depthLevel": 2,
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
      ],
      "guidedQuestions": [
        "Does your team have real **camaraderie**?",
        "Do you **play to strengths** or share everything?",
        "Are you all **on the same page**?"
      ]
    },
    {
      "id": 47,
      "question": "What is something you can teach someone else?",
      "category": "Growth",
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
          "example": "My grandmother always said don't judge a book by its cover."
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
          "example": "A small compliment like that can make my day."
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 1,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 3,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
          "example": "Did you have a blast at the wedding?"
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
      "depthLevel": 1,
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
      "depthLevel": 2,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
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
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "put off",
          "translation": "rimandare",
          "example": "Do you put off tasks on Sunday?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "run out of",
          "translation": "finire",
          "example": "Do you often run out of time on Sundays?",
          "type": "Phrase"
        },
        {
          "phrase": "slow brunch",
          "translation": "brunch lento",
          "example": "Do you enjoy a slow brunch?",
          "type": "Phrase"
        },
        {
          "phrase": "reset day",
          "translation": "giorno di reset",
          "example": "Is Sunday your reset day?",
          "type": "Phrase"
        },
        {
          "phrase": "prep for the week",
          "translation": "prepararsi per la settimana",
          "example": "Do you prep for the week on Sunday?",
          "type": "Idiom"
        },
        {
          "phrase": "lounge around",
          "translation": "oziare",
          "example": "Do you lounge around all day?",
          "type": "Phrase"
        },
        {
          "phrase": "evening stroll",
          "translation": "passeggiata serale",
          "example": "Do you take an evening stroll?",
          "type": "Phrase"
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
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "clean up",
          "translation": "pulire",
          "example": "Did you have to clean up your room?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "pick up",
          "translation": "raccogliere",
          "example": "Did you pick up languages easily as a kid?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "climb trees",
          "translation": "arrampicarsi sugli alberi",
          "example": "Did you climb trees as a kid?",
          "type": "Phrase"
        },
        {
          "phrase": "bike rides",
          "translation": "giri in bici",
          "example": "Did you go on long bike rides?",
          "type": "Phrase"
        },
        {
          "phrase": "building forts",
          "translation": "costruire fortini",
          "example": "Did you enjoy building forts?",
          "type": "Phrase"
        },
        {
          "phrase": "summer adventures",
          "translation": "avventure estive",
          "example": "What were your best summer adventures?",
          "type": "Phrase"
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
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "drop off",
          "translation": "addormentarsi",
          "example": "Did you forget to drop off the keys?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "check out",
          "translation": "controllare",
          "example": "Did you forget to check out library books?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "slip my mind",
          "translation": "passare di mente",
          "example": "Does a name often slip your mind?",
          "type": "Phrase"
        },
        {
          "phrase": "blank out",
          "translation": "avere un vuoto di memoria",
          "example": "Do you blank out during tests?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "tip of my tongue",
          "translation": "sulla punta della lingua",
          "example": "Do you ever have it on the tip of your tongue?",
          "type": "Idiom"
        },
        {
          "phrase": "set a reminder",
          "translation": "impostare un promemoria",
          "example": "Do you set a reminder for everything?",
          "type": "Phrase"
        },
        {
          "phrase": "jog my memory",
          "translation": "rinfrescare la memoria",
          "example": "What helps to jog your memory?",
          "type": "Phrase"
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
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "look after",
          "translation": "prendersi cura di",
          "example": "Does stress make it hard to look after yourself?",
          "type": "Phrase"
        },
        {
          "phrase": "get by",
          "translation": "cavarsela",
          "example": "Can you get by with 5 hours of sleep?",
          "type": "Phrase"
        },
        {
          "phrase": "hit the hay",
          "translation": "andare a branda",
          "example": "Do you hit the hay early?",
          "type": "Phrase"
        },
        {
          "phrase": "lights out",
          "translation": "luci spente",
          "example": "Is lights out at the same time every night?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "sleep like a log",
          "translation": "dormire come un ghiro",
          "example": "Do you sleep like a log?",
          "type": "Idiom"
        },
        {
          "phrase": "switch off my mind",
          "translation": "spegnere il cervello",
          "example": "How do you switch off your mind?",
          "type": "Idiom"
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
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "wake up",
          "translation": "svegliarsi",
          "example": "What motivates you to wake up?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "wind down",
          "translation": "rilassarsi",
          "example": "How do you wind down in the evening?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "daily dose",
          "translation": "dose giornaliera",
          "example": "Do you need a daily dose of coffee?",
          "type": "Phrase"
        },
        {
          "phrase": "anchor my day",
          "translation": "ancorare la mia giornata",
          "example": "What ritual anchors your day?",
          "type": "Phrase"
        },
        {
          "phrase": "bookend my day",
          "translation": "fare da cornice alla giornata",
          "example": "How do you bookend your day?",
          "type": "Phrase"
        },
        {
          "phrase": "makes me feel alive",
          "translation": "mi fa sentire vivo",
          "example": "What makes you feel alive?",
          "type": "Idiom"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "make up",
          "translation": "fare pace",
          "example": "Is it easy to make up after a fight?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "fall out",
          "translation": "litigare",
          "example": "Have you ever fallen out with a friend?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "lead with empathy",
          "translation": "guidare con empatia",
          "example": "Do you try to lead with empathy?",
          "type": "Phrase"
        },
        {
          "phrase": "do right by people",
          "translation": "comportarsi bene con le persone",
          "example": "Do you always try to do right by people?",
          "type": "Idiom"
        },
        {
          "phrase": "common decency",
          "translation": "comune decenza",
          "example": "Is common decency important?",
          "type": "Phrase"
        },
        {
          "phrase": "small acts",
          "translation": "piccoli atti",
          "example": "Do you believe in small acts of kindness?",
          "type": "Phrase"
        },
        {
          "phrase": "pay it forward",
          "translation": "ripagare il favore in avanti",
          "example": "How do you pay it forward?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "try out",
          "translation": "provare",
          "example": "Do you try out new ideas?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "follow through",
          "translation": "portare a termine",
          "example": "Do you always follow through?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "meaningful impact",
          "translation": "impatto significativo",
          "example": "How do you measure meaningful impact?",
          "type": "Phrase"
        },
        {
          "phrase": "on my own terms",
          "translation": "alle mie condizioni",
          "example": "Do you define success on your own terms?",
          "type": "Idiom"
        },
        {
          "phrase": "steady progress",
          "translation": "progresso costante",
          "example": "Do you value steady progress over speed?",
          "type": "Phrase"
        },
        {
          "phrase": "fulfillment",
          "translation": "appagamento",
          "example": "Is fulfillment more important than money?",
          "type": "Noun"
        },
        {
          "phrase": "balance",
          "translation": "equilibrio",
          "example": "Does success require balance?",
          "type": "Noun"
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
      "id": 84,
      "question": "What would you do if you had no fear?",
      "category": "Dreams",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "work on",
          "translation": "lavorare su",
          "example": "What are you working on?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "get better at",
          "translation": "migliorare in",
          "example": "What do you want to get better at?",
          "type": "Phrase"
        },
        {
          "phrase": "fearless",
          "translation": "senza paura",
          "example": "If fearless, what would you do?",
          "type": "Noun"
        },
        {
          "phrase": "bold move",
          "translation": "mossa audace",
          "example": "Would you make a bold move career-wise?",
          "type": "Phrase"
        },
        {
          "phrase": "take the leap",
          "translation": "fare il salto",
          "example": "Would you take the leap on a big decision?",
          "type": "Phrase"
        },
        {
          "phrase": "go all in",
          "translation": "mettersi in gioco completamente",
          "example": "Would you go all in?",
          "type": "Phrase"
        },
        {
          "phrase": "feel brave",
          "translation": "sentirsi coraggioso",
          "example": "How would it feel to feel brave all day?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "look forward to",
          "translation": "non vedere l'ora di",
          "example": "What change do you look forward to?",
          "type": "Phrase"
        },
        {
          "phrase": "come up with",
          "translation": "inventarsi",
          "example": "Can you come up with a solution?",
          "type": "Phrase"
        },
        {
          "phrase": "make a dent",
          "translation": "incidere significativamente",
          "example": "Do you think one person can make a dent?",
          "type": "Phrase"
        },
        {
          "phrase": "ripple effect",
          "translation": "effetto a catena",
          "example": "Does kindness have a ripple effect?",
          "type": "Phrase"
        },
        {
          "phrase": "push for change",
          "translation": "spingere per il cambiamento",
          "example": "What cause would you push for change in?",
          "type": "Phrase"
        },
        {
          "phrase": "amplify voices",
          "translation": "amplificare le voci",
          "example": "How can we amplify voices of the unheard?",
          "type": "Phrase"
        },
        {
          "phrase": "move the needle",
          "translation": "fare la differenza",
          "example": "What truly moves the needle?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "look out for",
          "translation": "fare attenzione a",
          "example": "Do you look out for others?",
          "type": "Phrase"
        },
        {
          "phrase": "show up",
          "translation": "presentarsi",
          "example": "Do you show up for your friends?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "leave a mark",
          "translation": "lasciare il segno",
          "example": "Do you want to leave a mark on the world?",
          "type": "Phrase"
        },
        {
          "phrase": "legacy",
          "translation": "eredità",
          "example": "What legacy do you hope to build?",
          "type": "Noun"
        },
        {
          "phrase": "remembered for",
          "translation": "ricordato per",
          "example": "Do you hope to be remembered for your character?",
          "type": "Phrase"
        },
        {
          "phrase": "lasting impression",
          "translation": "impressione duratura",
          "example": "How do you make a lasting impression?",
          "type": "Phrase"
        },
        {
          "phrase": "story people tell",
          "translation": "storia che la gente racconta",
          "example": "What story people tell matters to you?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "shake it off",
          "translation": "scrollarselo di dosso",
          "example": "Can you shake it off when things go wrong?",
          "type": "Phrase"
        },
        {
          "phrase": "cool off",
          "translation": "sbollire",
          "example": "Do you need to cool off after a conflict?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "tiny habit",
          "translation": "piccola abitudine",
          "example": "Do you believe a tiny habit can change your life?",
          "type": "Phrase"
        },
        {
          "phrase": "small tweak",
          "translation": "piccola modifica",
          "example": "How does a small tweak improve your day?",
          "type": "Phrase"
        },
        {
          "phrase": "adds up",
          "translation": "fa la differenza",
          "example": "Do you believe that small savings adds up over time?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "ripple effect",
          "translation": "effetto a catena",
          "example": "Do small acts create a ripple effect?",
          "type": "Phrase"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "keep at it",
          "translation": "insistere",
          "example": "Will you keep at it until you succeed?",
          "type": "Phrase"
        },
        {
          "phrase": "stick with",
          "translation": "continuare con",
          "example": "Can you stick with a difficult task?",
          "type": "Phrase"
        },
        {
          "phrase": "north star",
          "translation": "stella polare",
          "example": "Is your dream your north star?",
          "type": "Phrase"
        },
        {
          "phrase": "dream up",
          "translation": "sognare",
          "example": "Do you dream up new ideas often?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "picture myself",
          "translation": "immaginarmi",
          "example": "Can you picture yourself achieving it?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "hit it off",
          "translation": "andare subito d'accordo",
          "example": "Do you usually hit it off with strangers?",
          "type": "Phrase"
        },
        {
          "phrase": "have someone's back",
          "translation": "coprire le spalle a qualcuno",
          "example": "Do you have your friend's back?",
          "type": "Phrase"
        },
        {
          "phrase": "head and heart",
          "translation": "testa e cuore",
          "example": "Do you balance head and heart?",
          "type": "Phrase"
        },
        {
          "phrase": "emotional intelligence",
          "translation": "intelligenza emotiva",
          "example": "Does emotional intelligence matter?",
          "type": "Phrase"
        },
        {
          "phrase": "book smart",
          "translation": "intelligente sui libri",
          "example": "Are you book smart?",
          "type": "Phrase"
        },
        {
          "phrase": "street smart",
          "translation": "sveglio (di strada)",
          "example": "Is being street smart useful?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "calm down",
          "translation": "calmarsi",
          "example": "What helps you calm down?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "cheer up",
          "translation": "tirarsi su",
          "example": "What song cheers you up?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "at ease",
          "translation": "a proprio agio",
          "example": "Do you feel at ease with strangers?",
          "type": "Phrase"
        },
        {
          "phrase": "free to speak",
          "translation": "libero di parlare",
          "example": "Do you feel free to speak your mind?",
          "type": "Phrase"
        },
        {
          "phrase": "protected",
          "translation": "protetto",
          "example": "Do you feel protected and calm?",
          "type": "Noun"
        },
        {
          "phrase": "stable ground",
          "translation": "terreno stabile",
          "example": "Does it feel like stable ground?",
          "type": "Phrase"
        },
        {
          "phrase": "no fear of judgment",
          "translation": "nessuna paura del giudizio",
          "example": "Is no fear of judgment key?",
          "type": "Idiom"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "set out to",
          "translation": "proporsi di",
          "example": "Would you set out to explore the world?",
          "type": "Phrase"
        },
        {
          "phrase": "go for it",
          "translation": "buttarsi",
          "example": "Will you go for it and move?",
          "type": "Phrase"
        },
        {
          "phrase": "set down roots",
          "translation": "mettere radici",
          "example": "Are you ready to set down roots abroad?",
          "type": "Phrase"
        },
        {
          "phrase": "culture shock",
          "translation": "shock culturale",
          "example": "Does culture shock worry you?",
          "type": "Phrase"
        },
        {
          "phrase": "home base",
          "translation": "base operativa",
          "example": "Would you find a home base first?",
          "type": "Phrase"
        },
        {
          "phrase": "slow travel",
          "translation": "viaggiare lento",
          "example": "Do you prefer slow travel?",
          "type": "Phrase"
        },
        {
          "phrase": "blend in",
          "translation": "mimetizzarsi",
          "example": "Would you try to blend in with locals?",
          "type": "Phrasal Verb"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "take on",
          "translation": "assumere",
          "example": "Would you take on new challenges?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "plan ahead",
          "translation": "pianificare in anticipo",
          "example": "How would you plan ahead with magic?",
          "type": "Phrase"
        },
        {
          "phrase": "instant reset",
          "translation": "reset istantaneo",
          "example": "Would you use an instant reset?",
          "type": "Phrase"
        },
        {
          "phrase": "undo button",
          "translation": "pulsante annulla",
          "example": "Do you need an undo button for mistakes?",
          "type": "Phrase"
        },
        {
          "phrase": "clear the clutter",
          "translation": "eliminare il disordine",
          "example": "Would you clear the clutter of your mind?",
          "type": "Phrase"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "reach for",
          "translation": "aspirare a",
          "example": "Do you reach for big goals?",
          "type": "Phrase"
        },
        {
          "phrase": "dream up",
          "translation": "sognare",
          "example": "Do you dream up stories?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "teleport",
          "translation": "teletrasportarsi",
          "example": "Would you teleport to work?",
          "type": "Noun"
        },
        {
          "phrase": "time travel",
          "translation": "viaggiare nel tempo",
          "example": "Is time travel dangerous?",
          "type": "Phrase"
        },
        {
          "phrase": "read minds",
          "translation": "leggere nel pensiero",
          "example": "Would you read minds or stay ignorant?",
          "type": "Phrase"
        },
        {
          "phrase": "invisible",
          "translation": "invisibile",
          "example": "Would being invisible be fun?",
          "type": "Noun"
        },
        {
          "phrase": "super stamina",
          "translation": "resistenza super",
          "example": "Would you choose super stamina?",
          "type": "Phrase"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "try out",
          "translation": "provare",
          "example": "Do you try out new tools?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "follow through",
          "translation": "portare a termine",
          "example": "Do you follow through on big plans?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "shadow someone",
          "translation": "seguire qualcuno (per imparare)",
          "example": "Who would you shadow?",
          "type": "Phrase"
        },
        {
          "phrase": "try my hand at",
          "translation": "cimentarmi in",
          "example": "Would you try your hand at acting?",
          "type": "Idiom"
        },
        {
          "phrase": "day in the life",
          "translation": "giornata tipo",
          "example": "What is a day in the life of a CEO like?",
          "type": "Idiom"
        },
        {
          "phrase": "swap roles",
          "translation": "scambiarsi i ruoli",
          "example": "Would you swap roles with your boss?",
          "type": "Phrase"
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
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "look forward to",
          "translation": "non vedere l'ora di",
          "example": "What change do you look forward to?",
          "type": "Phrase"
        },
        {
          "phrase": "come up with",
          "translation": "inventarsi",
          "example": "Can you come up with a solution?",
          "type": "Phrase"
        },
        {
          "phrase": "more empathy",
          "translation": "più empatia",
          "example": "Does the world need more empathy?",
          "type": "Phrase"
        },
        {
          "phrase": "fair play",
          "translation": "gioco corretto",
          "example": "Is fair play disappearing?",
          "type": "Phrase"
        },
        {
          "phrase": "clean energy",
          "translation": "energia pulita",
          "example": "Do we need more clean energy?",
          "type": "Phrase"
        },
        {
          "phrase": "good listeners",
          "translation": "buoni ascoltatori",
          "example": "Are good listeners rare?",
          "type": "Phrase"
        },
        {
          "phrase": "trustworthy leaders",
          "translation": "leader affidabili",
          "example": "Do we need more trustworthy leaders?",
          "type": "Phrase"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "set out to",
          "translation": "proporsi di",
          "example": "Would you set out to build it yourself?",
          "type": "Phrase"
        },
        {
          "phrase": "go for it",
          "translation": "buttarsi",
          "example": "Will you go for it?",
          "type": "Phrase"
        },
        {
          "phrase": "life hack",
          "translation": "trucco per la vita",
          "example": "Is it a simple life hack?",
          "type": "Phrase"
        },
        {
          "phrase": "streamline",
          "translation": "snellire",
          "example": "Would your invention streamline chores?",
          "type": "Noun"
        },
        {
          "phrase": "automation",
          "translation": "automazione",
          "example": "Would you build automation for chores?",
          "type": "Noun"
        },
        {
          "phrase": "solve a pain point",
          "translation": "risolvere un problema",
          "example": "Does it solve a pain point?",
          "type": "Idiom"
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
      "depthLevel": 3,
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "run out of",
          "translation": "finire",
          "example": "Do you run out of time often?",
          "type": "Phrase"
        },
        {
          "phrase": "clean up",
          "translation": "pulire",
          "example": "Do you clean up after dinner?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "digital detox",
          "translation": "disintossicazione digitale",
          "example": "Do you need a digital detox?",
          "type": "Phrase"
        },
        {
          "phrase": "go offline",
          "translation": "andare offline",
          "example": "Could you go offline for a week?",
          "type": "Phrase"
        },
        {
          "phrase": "analog fun",
          "translation": "divertimento analogico",
          "example": "Would you have analog fun like board games?",
          "type": "Phrase"
        },
        {
          "phrase": "reclaim my time",
          "translation": "riprendermi il mio tempo",
          "example": "How would you reclaim your time?",
          "type": "Phrase"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "reach for",
          "translation": "aspirare a",
          "example": "Do you reach for big goals?",
          "type": "Phrase"
        },
        {
          "phrase": "dream up",
          "translation": "sognare",
          "example": "Do you dream up stories?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "ground rule",
          "translation": "regola di base",
          "example": "Would you set a ground rule for respect?",
          "type": "Phrase"
        },
        {
          "phrase": "fair for all",
          "translation": "giusto per tutti",
          "example": "Is your rule fair for all?",
          "type": "Phrase"
        },
        {
          "phrase": "set the tone",
          "translation": "impostare il tono",
          "example": "How does it set the tone for the school?",
          "type": "Phrase"
        },
        {
          "phrase": "clear consequence",
          "translation": "conseguenza chiara",
          "example": "Is there a clear consequence for breaking it?",
          "type": "Phrase"
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
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "try out",
          "translation": "provare",
          "example": "Do you try out new tools?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "follow through",
          "translation": "portare a termine",
          "example": "Do you follow through on big plans?",
          "type": "Phrasal Verb"
        },
        {
          "phrase": "simple pleasures",
          "translation": "piaceri semplici",
          "example": "Do simple pleasures matter most?",
          "type": "Phrase"
        },
        {
          "phrase": "everyday magic",
          "translation": "magia quotidiana",
          "example": "Is there everyday magic around you?",
          "type": "Phrase"
        },
        {
          "phrase": "awe and wonder",
          "translation": "stupore e meraviglia",
          "example": "Do awe and wonder color life?",
          "type": "Phrase"
        },
        {
          "phrase": "tiny moments",
          "translation": "piccoli momenti",
          "example": "Do tiny moments add up?",
          "type": "Phrase"
        },
        {
          "phrase": "fully present",
          "translation": "pienamente presente",
          "example": "Are you fully present to see it?",
          "type": "Phrase"
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
      "depthLevel": 2,
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
    },
    {
      "id": 201,
      "question": "What is your favorite sound in the morning?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "wake-up call",
          "translation": "sveglia",
          "type": "Noun",
          "example": "The birds singing is my natural wake-up call."
        },
        {
          "phrase": "get going",
          "translation": "mettersi in moto",
          "type": "Phrasal Verb",
          "example": "I need coffee to get going in the morning."
        },
        {
          "phrase": "morning person",
          "translation": "mattiniero",
          "type": "Noun Phrase",
          "example": "Are you a morning person or a night owl?"
        },
        {
          "phrase": "start the day right",
          "translation": "iniziare bene la giornata",
          "type": "Phrase",
          "example": "A good breakfast helps me start the day right."
        },
        {
          "phrase": "grogginess",
          "translation": "intontimento",
          "type": "Noun",
          "example": "How do you shake off the morning grogginess?"
        }
      ],
      "guidedQuestions": [
        "Are you usually a **morning person**?",
        "How do you **get going** when you feel extremely tired?",
        "What helps you **start the day right**?"
      ]
    },
    {
      "id": 202,
      "question": "What is the strangest food combination you secretly enjoy?",
      "category": "Food",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "acquired taste",
          "translation": "gusto acquisito",
          "type": "Noun Phrase",
          "example": "Olives are an acquired taste for many people."
        },
        {
          "phrase": "guilty pleasure",
          "translation": "piacere inconfessabile",
          "type": "Noun Phrase",
          "example": "Eating pizza with pineapple is my guilty pleasure."
        },
        {
          "phrase": "flavor profile",
          "translation": "profilo di sapori",
          "type": "Collocation",
          "example": "Sweet and salty make a great flavor profile."
        },
        {
          "phrase": "gross out",
          "translation": "fare schifo",
          "type": "Phrasal Verb",
          "example": "Does seeing someone eat ketchup with eggs gross you out?"
        },
        {
          "phrase": "culinary experiment",
          "translation": "esperimento culinario",
          "type": "Collocation",
          "example": "What is your most successful culinary experiment?"
        }
      ],
      "guidedQuestions": [
        "Do you have a food that is an **acquired taste** for you?",
        "What is your ultimate **guilty pleasure** snack?",
        "Does mixing sweet and savory ever **gross you out**?"
      ]
    },
    {
      "id": 203,
      "question": "If you could instantly learn any pointless skill, what would it be?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "party trick",
          "translation": "trucchetto da festa",
          "type": "Noun Phrase",
          "example": "Juggling is my favorite party trick."
        },
        {
          "phrase": "knack for",
          "translation": "inclinazione per",
          "type": "Noun Phrase",
          "example": "Does he have a knack for remembering random facts?"
        },
        {
          "phrase": "show off",
          "translation": "mettersi in mostra",
          "type": "Phrasal Verb",
          "example": "I love to show off my ability to solve a Rubik's cube."
        },
        {
          "phrase": "useless talent",
          "translation": "talento inutile",
          "type": "Noun Phrase",
          "example": "What is the most useless talent you possess?"
        },
        {
          "phrase": "pick up",
          "translation": "imparare (rapidamente)",
          "type": "Phrasal Verb",
          "example": "Did you pick up that trick from a YouTube video?"
        }
      ],
      "guidedQuestions": [
        "What is your go-to **party trick**?",
        "Do you have a **knack for** learning useless things quickly?",
        "Would you like to **show off** a weird talent on live TV?"
      ]
    },
    {
      "id": 204,
      "question": "What movie universe would be the absolute worst to live in?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "dystopian",
          "translation": "distopico",
          "type": "Adjective",
          "example": "A dystopian future sounds terrifying."
        },
        {
          "phrase": "fend for oneself",
          "translation": "cavarsela da soli",
          "type": "Idiom",
          "example": "In a zombie apocalypse, you must fend for yourself."
        },
        {
          "phrase": "plot twist",
          "translation": "colpo di scena",
          "type": "Noun Phrase",
          "example": "I hate when a movie relies on a cheap plot twist."
        },
        {
          "phrase": "bleak",
          "translation": "desolante",
          "type": "Adjective",
          "example": "The world of Mad Max is incredibly bleak."
        },
        {
          "phrase": "survival guide",
          "translation": "guida di sopravvivenza",
          "type": "Noun Phrase",
          "example": "You would need a survival guide to make it there."
        }
      ],
      "guidedQuestions": [
        "Do you enjoy reading **dystopian** novels?",
        "How well could you **fend for yourself** in the wilderness?",
        "Why do you think **bleak** settings are so popular in movies?"
      ]
    },
    {
      "id": 205,
      "question": "What is the most underrated household chore?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "odd job",
          "translation": "lavoretto",
          "type": "Noun Phrase",
          "example": "I like doing odd jobs around the house on Sundays."
        },
        {
          "phrase": "mindless task",
          "translation": "compito che non richiede di pensare",
          "type": "Noun Phrase",
          "example": "Folding laundry is a relaxing, mindless task."
        },
        {
          "phrase": "tidying up",
          "translation": "mettere in ordine",
          "type": "Phrasal Verb",
          "example": "Is tidying up therapeutic for you?"
        },
        {
          "phrase": "get it over with",
          "translation": "togliersi il pensiero",
          "type": "Idiom",
          "example": "I always do the dishes immediately to get it over with."
        },
        {
          "phrase": "sense of accomplishment",
          "translation": "senso di realizzazione",
          "type": "Noun Phrase",
          "example": "A clean kitchen gives me a strong sense of accomplishment."
        }
      ],
      "guidedQuestions": [
        "What **mindless task** actually helps you relax?",
        "Do you usually procrastinate cleaning or try to **get it over with**?",
        "Does **tidying up** your physical space help clear your mind?"
      ]
    },
    {
      "id": 206,
      "question": "What is a highly generic compliment you've received that you still secretly treasure?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "make my day",
          "translation": "svoltarmi la giornata",
          "type": "Idiom",
          "example": "A small compliment like that can make my day."
        },
        {
          "phrase": "flattered",
          "translation": "lusingato",
          "type": "Adjective",
          "example": "I was so flattered when they praised my work."
        },
        {
          "phrase": "boost someone's ego",
          "translation": "pompare l'ego",
          "type": "Idiom",
          "example": "A generic compliment can sometimes boost someone's ego exactly when they need it."
        },
        {
          "phrase": "stick with you",
          "translation": "rimanerti impresso",
          "type": "Idiom",
          "example": "Why do some offhand comments stick with you for years?"
        },
        {
          "phrase": "brush it off",
          "translation": "non darci peso / ignorare",
          "type": "Phrasal Verb",
          "example": "I normally brush off compliments because I get shy."
        }
      ],
      "guidedQuestions": [
        "What compliment could instantly **make your day**?",
        "Is it wrong if we sometimes want to **boost our ego**?",
        "Why do some small remarks **stick with you** for decades?"
      ]
    },
    {
      "id": 207,
      "question": "Have you ever kept a secret that wasn't yours, just to avoid drama?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "stir the pot",
          "translation": "mettere zizzania",
          "type": "Idiom",
          "example": "I didn't tell him because I didn't want to stir the pot."
        },
        {
          "phrase": "turn a blind eye",
          "translation": "chiudere un occhio",
          "type": "Idiom",
          "example": "Is it ever okay to turn a blind eye to someone else's mistake?"
        },
        {
          "phrase": "spill the beans",
          "translation": "svuotare il sacco",
          "type": "Idiom",
          "example": "I accidentally spilled the beans about the surprise party."
        },
        {
          "phrase": "bystander",
          "translation": "spettatore",
          "type": "Noun",
          "example": "Sometimes it is safer to remain a bystander."
        },
        {
          "phrase": "burden",
          "translation": "fardello",
          "type": "Noun",
          "example": "Keeping that secret felt like a heavy burden."
        }
      ],
      "guidedQuestions": [
        "When is it justified to **turn a blind eye**?",
        "Have you ever accidentally **spilled the beans** on something important?",
        "Does staying quiet make you a responsible friend, or a cowardly **bystander**?"
      ]
    },
    {
      "id": 208,
      "question": "What completely normal social interaction always feels intensely awkward to you?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "small talk",
          "translation": "chiacchiere di circostanza",
          "type": "Noun Phrase",
          "example": "I hate making small talk in elevators."
        },
        {
          "phrase": "overthink",
          "translation": "pensare troppo",
          "type": "Verb",
          "example": "Do you overthink every text message before sending it?"
        },
        {
          "phrase": "break eye contact",
          "translation": "distogliere lo sguardo",
          "type": "Collocation",
          "example": "I never know when to break eye contact."
        },
        {
          "phrase": "second-guess",
          "translation": "mettere in dubbio / ripensarci",
          "type": "Verb",
          "example": "I always second-guess myself after a job interview."
        },
        {
          "phrase": "social cue",
          "translation": "segnale sociale",
          "type": "Noun Phrase",
          "example": "Are you good at reading social cues, or do you miss them?"
        }
      ],
      "guidedQuestions": [
        "Why is **small talk** so difficult for introverts?",
        "Do you tend to **overthink** conversations after they happen?",
        "What is the easiest **social cue** to misinterpret?"
      ]
    },
    {
      "id": 209,
      "question": "How do you act when you intensely dislike someone but are forced to work with them?",
      "category": "Relationships",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "bite my tongue",
          "translation": "mordersi la lingua",
          "type": "Idiom",
          "example": "I had to bite my tongue during the meeting to keep the peace."
        },
        {
          "phrase": "fake a smile",
          "translation": "fingere un sorriso",
          "type": "Collocation",
          "example": "Can you easily fake a smile when you are annoyed?"
        },
        {
          "phrase": "keep it professional",
          "translation": "mantenere un atteggiamento professionale",
          "type": "Phrase",
          "example": "No matter what, you must keep it professional."
        },
        {
          "phrase": "grin and bear it",
          "translation": "stringere i denti e sopportare",
          "type": "Idiom",
          "example": "Sometimes you just have to grin and bear it."
        },
        {
          "phrase": "rub someone the wrong way",
          "translation": "irritare qualcuno",
          "type": "Idiom",
          "example": "His arrogant tone really rubs me the wrong way."
        }
      ],
      "guidedQuestions": [
        "Have you ever had to **bite your tongue** to save your job?",
        "Is it dishonest to **fake a smile**, or is it just polite?",
        "What personality trait usually **rubs you the wrong way**?"
      ]
    },
    {
      "id": 210,
      "question": "What is a trend you enthusiastically participated in, but now deeply regret?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "jump on the bandwagon",
          "translation": "saltare sul carro del vincitore",
          "type": "Idiom",
          "example": "Everyone was doing it, so I decided to jump on the bandwagon."
        },
        {
          "phrase": "cringe",
          "translation": "imbarazzarsi (per se stessi)",
          "type": "Verb",
          "example": "I cringe whenever I see my old high school photos."
        },
        {
          "phrase": "fad",
          "translation": "moda passeggera",
          "type": "Noun",
          "example": "Do you think TikTok dances will just be a forgotten fad?"
        },
        {
          "phrase": "peer pressure",
          "translation": "pressione dei pari",
          "type": "Noun Phrase",
          "example": "Did you follow the trend because you liked it, or because of peer pressure?"
        },
        {
          "phrase": "look back on",
          "translation": "ripensare al passato",
          "type": "Phrasal Verb",
          "example": "When you look back on it, why did you do it?"
        }
      ],
      "guidedQuestions": [
        "Have you ever **jumped on the bandwagon** for something silly?",
        "What makes old trends so **cringe-worthy** later on?",
        "Is **peer pressure** stronger on teenagers or adults?"
      ]
    },
    {
      "id": 211,
      "question": "Do you think people are generally more genuine in person or online?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "hide behind a screen",
          "translation": "nascondersi dietro uno schermo",
          "type": "Idiom",
          "example": "It is easy to be brave when you hide behind a screen."
        },
        {
          "phrase": "true colors",
          "translation": "veri colori (vera natura)",
          "type": "Idiom",
          "example": "Social media often reveals people's true colors."
        },
        {
          "phrase": "put up a front",
          "translation": "creare una facciata",
          "type": "Idiom",
          "example": "Is he truly happy, or just putting up a front online?"
        },
        {
          "phrase": "sugar-coat",
          "translation": "indorare la pillola",
          "type": "Verb",
          "example": "Don't sugar-coat it, tell me the absolute truth."
        },
        {
          "phrase": "keyboard warrior",
          "translation": "leone da tastiera",
          "type": "Noun Phrase",
          "example": "He acts tough on Twitter, but he's just a keyboard warrior."
        }
      ],
      "guidedQuestions": [
        "Why is it so easy to **hide behind a screen**?",
        "Have you ever discovered someone's **true colors** through their online behavior?",
        "Why do people feel the need to **put up a front** on Instagram?"
      ]
    },
    {
      "id": 212,
      "question": "When is the last time you changed a deeply held opinion?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "stubbornly hold onto",
          "translation": "aggrapparsi ostinatamente a",
          "type": "Phrase",
          "example": "Why do we stubbornly hold onto ideas long after they are disproven?"
        },
        {
          "phrase": "see the light",
          "translation": "vedere la luce (cambiare idea)",
          "type": "Idiom",
          "example": "It took years, but he finally saw the light."
        },
        {
          "phrase": "cognitive dissonance",
          "translation": "dissonanza cognitiva",
          "type": "Noun Phrase",
          "example": "Admitting you are wrong often causes cognitive dissonance."
        },
        {
          "phrase": "play devil's advocate",
          "translation": "fare l'avvocato del diavolo",
          "type": "Idiom",
          "example": "I'll play devil's advocate just to test your theory."
        },
        {
          "phrase": "broaden my horizons",
          "translation": "allargare i miei orizzonti",
          "type": "Idiom",
          "example": "Traveling helped me completely broaden my horizons."
        }
      ],
      "guidedQuestions": [
        "Why is it so hard to stop **stubbornly holding onto** a wrong opinion?",
        "Do you ever **play devil's advocate** just to make a conversation more interesting?",
        "What has helped you **broaden your horizons** the most?"
      ]
    },
    {
      "id": 213,
      "question": "What is the most beautiful thing about the city you grew up in?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "hometown pride",
          "translation": "orgoglio per la propria città",
          "type": "Noun Phrase",
          "example": "No matter how flawed it is, I still have hometown pride."
        },
        {
          "phrase": "fond memories",
          "translation": "bei ricordi",
          "type": "Collocation",
          "example": "I have so many fond memories of that old park."
        },
        {
          "phrase": "hidden gem",
          "translation": "gemma nascosta",
          "type": "Noun Phrase",
          "example": "This tiny bakery is a true hidden gem."
        },
        {
          "phrase": "nostalgia hits hard",
          "translation": "la nostalgia colpisce forte",
          "type": "Phrase",
          "example": "Whenever I visit my old school, nostalgia hits me hard."
        },
        {
          "phrase": "hustle and bustle",
          "translation": "trambusto",
          "type": "Idiom",
          "example": "I love the hustle and bustle of downtown Rome."
        }
      ],
      "guidedQuestions": [
        "What is a **hidden gem** in your hometown?",
        "Do you miss the **hustle and bustle** when you are in a quiet place?",
        "When you think of your childhood, what **fond memories** come to mind?"
      ]
    },
    {
      "id": 214,
      "question": "If you had to teach a class on one highly specific topic tomorrow, what would it be?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "niche",
          "translation": "di nicchia",
          "type": "Adjective",
          "example": "I have a very niche interest in vintage typewriters."
        },
        {
          "phrase": "infodump",
          "translation": "scaricare informazioni",
          "type": "Verb",
          "example": "I tend to infodump when someone asks about my favorite movie."
        },
        {
          "phrase": "master the basics",
          "translation": "imparare le basi",
          "type": "Phrase",
          "example": "You cannot innovate until you master the basics."
        },
        {
          "phrase": "subject matter expert",
          "translation": "esperto del settore",
          "type": "Noun Phrase",
          "example": "Are you a subject matter expert in anything?"
        },
        {
          "phrase": "wing it",
          "translation": "improvvisare",
          "type": "Idiom",
          "example": "I didn't prepare a presentation, so I'll just wing it."
        }
      ],
      "guidedQuestions": [
        "What is a **niche** topic you know way too much about?",
        "Would you prepare for a completely spontaneous speech, or just **wing it**?",
        "Is it better to **master the basics** widely, or become an expert in one thing?"
      ]
    },
    {
      "id": 215,
      "question": "Do you believe 'the journey is more important than the destination'?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "instant gratification",
          "translation": "gratificazione istantanea",
          "type": "Noun Phrase",
          "example": "Social media trains us to seek instant gratification."
        },
        {
          "phrase": "burnout",
          "translation": "esaurimento",
          "type": "Noun",
          "example": "Focusing only on the goal leads to serious burnout."
        },
        {
          "phrase": "embrace the grind",
          "translation": "accettare la fatica",
          "type": "Phrase",
          "example": "If you want to be an athlete, you must embrace the grind."
        },
        {
          "phrase": "tunnel vision",
          "translation": "visione a tunnel (fissarsi)",
          "type": "Noun Phrase",
          "example": "He had such tunnel vision on his career that he lost his friends."
        },
        {
          "phrase": "delayed reward",
          "translation": "ricompensa ritardata",
          "type": "Noun Phrase",
          "example": "Are you capable of waiting for a delayed reward?"
        }
      ],
      "guidedQuestions": [
        "Is social media ruining our ability to wait for a **delayed reward**?",
        "Have you ever experienced **burnout** from focusing too hard on a goal?",
        "How do you avoid getting **tunnel vision** in your career?"
      ]
    },
    {
      "id": 220,
      "question": "What is your most useless, but highly impressive skill?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "party trick",
          "translation": "trucco da festa",
          "type": "Noun Phrase",
          "example": "Being able to recite pi to 100 digits is a neat party trick."
        },
        {
          "phrase": "show off",
          "translation": "mettersi in mostra",
          "type": "Phrasal Verb",
          "example": "He loves to show off his new language skills."
        },
        {
          "phrase": "hidden talent",
          "translation": "talento nascosto",
          "type": "Noun Phrase",
          "example": "Does anyone in your family have a funny hidden talent?"
        },
        {
          "phrase": "useless",
          "translation": "inutile",
          "type": "Adjective",
          "example": "It is a completely useless skill, but I love doing it."
        },
        {
          "phrase": "knack for",
          "translation": "inclinazione per",
          "type": "Noun Phrase",
          "example": "She has a real knack for remembering random facts."
        }
      ],
      "guidedQuestions": [
        "What is your favorite **party trick**?",
        "Do you think having a **hidden talent** makes someone more interesting?",
        "Who do you know that loves to **show off**?"
      ]
    },
    {
      "id": 221,
      "question": "If you had to be famous for one highly embarrassing thing, what would you choose?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "go viral",
          "translation": "diventare virale",
          "type": "Verb Phrase",
          "example": "The video of him tripping over the rug went viral."
        },
        {
          "phrase": "laugh at yourself",
          "translation": "ridere di se stessi",
          "type": "Phrase",
          "example": "You need to learn how to laugh at yourself in life."
        },
        {
          "phrase": "mortifying",
          "translation": "mortificante",
          "type": "Adjective",
          "example": "It was a mortifying experience to spill coffee on the boss."
        },
        {
          "phrase": "claim to fame",
          "translation": "motivo di celebrità",
          "type": "Noun Phrase",
          "example": "His only claim to fame is eating 50 hot dogs in ten minutes."
        },
        {
          "phrase": "own it",
          "translation": "assumersene la responsabilità / farsi scivolare le critiche addosso",
          "type": "Idiom",
          "example": "When you make an embarrassing mistake, just own it."
        }
      ],
      "guidedQuestions": [
        "Have you ever seen something incredibly **mortifying** go viral?",
        "Is it easy for you to **laugh at yourself**?",
        "What is your strangest **claim to fame**?"
      ]
    },
    {
      "id": 222,
      "question": "What is a controversial opinion you hold about cooking or food?",
      "category": "Food",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "overrated",
          "translation": "sopravvalutato",
          "type": "Adjective",
          "example": "I think truffle oil is highly overrated."
        },
        {
          "phrase": "dealbreaker",
          "translation": "fattore decisivo (in negativo)",
          "type": "Noun",
          "example": "For me, having raisins in bread is a dealbreaker."
        },
        {
          "phrase": "culinary sin",
          "translation": "peccato culinario",
          "type": "Noun Phrase",
          "example": "Putting ketchup on pasta is considered a culinary sin in Italy."
        },
        {
          "phrase": "acquired taste",
          "translation": "gusto acquisito",
          "type": "Noun Phrase",
          "example": "Black licorice is definitely an acquired taste."
        },
        {
          "phrase": "picky eater",
          "translation": "schizzinoso (col cibo)",
          "type": "Noun Phrase",
          "example": "Are you an adventurous eater or a picky eater?"
        }
      ],
      "guidedQuestions": [
        "What popular food is completely **overrated** in your opinion?",
        "Is making a traditional recipe incorrectly a **culinary sin**?",
        "Were you a **picky eater** as a child?"
      ]
    },
    {
      "id": 223,
      "question": "When was the last time you felt truly proud of a friend?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "root for",
          "translation": "fare il tifo per",
          "type": "Phrasal Verb",
          "example": "We were all rooting for her to get the promotion."
        },
        {
          "phrase": "milestone",
          "translation": "traguardo importante",
          "type": "Noun",
          "example": "Graduating from college is a huge milestone."
        },
        {
          "phrase": "overcome adversity",
          "translation": "superare le avversità",
          "type": "Collocation",
          "example": "Watching him overcome adversity was incredibly inspiring."
        },
        {
          "phrase": "beam with pride",
          "translation": "raggiungere dall'orgoglio",
          "type": "Idiom",
          "example": "Her parents were beaming with pride at the wedding."
        },
        {
          "phrase": "support system",
          "translation": "rete di supporto",
          "type": "Noun Phrase",
          "example": "Having a strong support system makes tough times easier."
        }
      ],
      "guidedQuestions": [
        "Who are you always **rooting for** in life?",
        "When someone hits a major **milestone**, how do you celebrate them?",
        "Why is a reliable **support system** so important?"
      ]
    },
    {
      "id": 224,
      "question": "What is the most emotionally difficult lesson you had to learn in your 20s?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "hard truth",
          "translation": "dura verità",
          "type": "Noun Phrase",
          "example": "The hard truth is that you cannot please everyone."
        },
        {
          "phrase": "let go of",
          "translation": "lasciar andare",
          "type": "Phrasal Verb",
          "example": "I had to let go of toxic relationships to find peace."
        },
        {
          "phrase": "trial by fire",
          "translation": "prova del fuoco (imparare in situazioni difficili)",
          "type": "Idiom",
          "example": "My first year running a business was a total trial by fire."
        },
        {
          "phrase": "silver lining",
          "translation": "lato positivo",
          "type": "Idiom",
          "example": "Even in a painful breakup, there is usually a silver lining."
        },
        {
          "phrase": "hindsight is 20/20",
          "translation": "col senno di poi è tutto chiaro",
          "type": "Idiom",
          "example": "I should not have trusted him, but hindsight is 20/20."
        }
      ],
      "guidedQuestions": [
        "What **hard truth** took you years to finally accept?",
        "Is it true that **hindsight is 20/20**, or do we still repeat mistakes?",
        "Have you ever struggled to **let go of** a dream?"
      ]
    },
    {
      "id": 225,
      "question": "If you could only keep three memories before losing the rest of your mind, what would they be?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "cherish",
          "translation": "custodire gelosamente",
          "type": "Verb",
          "example": "I cherish the summers I spent at my grandparents' house."
        },
        {
          "phrase": "fade away",
          "translation": "svanire / sbiadire",
          "type": "Phrasal Verb",
          "example": "Over time, even the most important memories fade away."
        },
        {
          "phrase": "core memory",
          "translation": "ricordo fondamentale",
          "type": "Noun Phrase",
          "example": "That family trip to the lake is a core memory for me."
        },
        {
          "phrase": "flashback",
          "translation": "ritorno di fiamma / flashback",
          "type": "Noun",
          "example": "The smell of that perfume gave me a sudden flashback."
        },
        {
          "phrase": "hold onto",
          "translation": "aggrapparsi a",
          "type": "Phrasal Verb",
          "example": "Why do we hold onto memories of people who hurt us?"
        }
      ],
      "guidedQuestions": [
        "What is one **core memory** from your childhood?",
        "Why do some painful memories never **fade away**?",
        "What do you **cherish** most about your current life?"
      ]
    },
    {
      "id": 226,
      "question": "Do you think suffering is absolutely necessary to create great art or achieve wisdom?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "romanticize",
          "translation": "romanticizzare",
          "type": "Verb",
          "example": "Society tends to romanticize the 'starving artist' trope."
        },
        {
          "phrase": "catalyst",
          "translation": "catalizzatore",
          "type": "Noun",
          "example": "Pain is often a powerful catalyst for personal growth."
        },
        {
          "phrase": "inner turmoil",
          "translation": "tormento interiore",
          "type": "Noun Phrase",
          "example": "His paintings perfectly capture his deep inner turmoil."
        },
        {
          "phrase": "school of hard knocks",
          "translation": "l'università della strada / la dura scuola della vita",
          "type": "Idiom",
          "example": "She didn't get a degree; she learned from the school of hard knocks."
        },
        {
          "phrase": "profound",
          "translation": "profondo",
          "type": "Adjective",
          "example": "Only through loss did he write something truly profound."
        }
      ],
      "guidedQuestions": [
        "Do we culturally **romanticize** pain too much?",
        "Can pure happiness ever be a **catalyst** for great art?",
        "Why is **inner turmoil** so compelling in movies and books?"
      ]
    },
    {
      "id": 227,
      "question": "Do you think the universe is chaotic and random, or is there a hidden order?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "blind chance",
          "translation": "puro caso",
          "type": "Noun Phrase",
          "example": "Do you believe meeting your partner was destiny or blind chance?"
        },
        {
          "phrase": "grand design",
          "translation": "disegno superiore",
          "type": "Noun Phrase",
          "example": "Some argue that the complexity of nature points to a grand design."
        },
        {
          "phrase": "ripple effect",
          "translation": "effetto a catena",
          "type": "Noun Phrase",
          "example": "One small decision can create a massive ripple effect in your life."
        },
        {
          "phrase": "meaningless",
          "translation": "privo di senso",
          "type": "Adjective",
          "example": "If everything is meaningless, how do you find purpose?"
        },
        {
          "phrase": "interconnected",
          "translation": "interconnesso",
          "type": "Adjective",
          "example": "Eastern philosophies often view everything in the universe as interconnected."
        }
      ],
      "guidedQuestions": [
        "Do you think your life is guided by a **grand design** or **blind chance**?",
        "How do small choices create a **ripple effect** in your career?",
        "Does the idea of a chaotic, **meaningless** universe scare you?"
      ]
    },
    {
      "id": 228,
      "question": "What is the most 'out of character' thing you've ever done?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "act on impulse",
          "translation": "agire d'impulso",
          "type": "Phrase",
          "example": "I rarely act on impulse, but buying that ticket was spontaneous."
        },
        {
          "phrase": "step out of my comfort zone",
          "translation": "uscire dalla mia zona di comfort",
          "type": "Idiom",
          "example": "Taking a dance class was a big step out of my comfort zone."
        },
        {
          "phrase": "uncharacteristic",
          "translation": "insolito (per la persona)",
          "type": "Adjective",
          "example": "His sudden angry outburst was highly uncharacteristic."
        },
        {
          "phrase": "let your hair down",
          "translation": "lasciarsi andare",
          "type": "Idiom",
          "example": "At the Christmas party, she finally let her hair down."
        },
        {
          "phrase": "spur of the moment",
          "translation": "succo del momento / impulso del momento",
          "type": "Idiom",
          "example": "It was a spur of the moment decision to move to Paris."
        }
      ],
      "guidedQuestions": [
        "Have you ever made a major decision on the **spur of the moment**?",
        "Why is it healthy to **step out of your comfort zone** occasionally?",
        "What is something completely **uncharacteristic** of you?"
      ]
    },
    {
      "id": 229,
      "question": "If you could see statistics hovering over people's heads, what stat would you want to see?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "hidden agenda",
          "translation": "secondo fine",
          "type": "Noun Phrase",
          "example": "I wish I could see who has a hidden agenda in business meetings."
        },
        {
          "phrase": "break the ice",
          "translation": "rompere il ghiaccio",
          "type": "Idiom",
          "example": "Knowing someone's favorite hobby would make it easy to break the ice."
        },
        {
          "phrase": "compatibility",
          "translation": "compatibilità",
          "type": "Noun",
          "example": "Imagine seeing a compatibility score above everyone you date."
        },
        {
          "phrase": "vibe check",
          "translation": "controllo dell'energia / atmosfera",
          "type": "Slang",
          "example": "Seeing their 'kindness score' would be the ultimate vibe check."
        },
        {
          "phrase": "intrusive",
          "translation": "invadente",
          "type": "Adjective",
          "example": "Knowing everyone's secrets would feel far too intrusive."
        }
      ],
      "guidedQuestions": [
        "Would seeing a **compatibility** score ruin the magic of dating?",
        "How do you usually figure out if someone has a **hidden agenda**?",
        "Would knowing everyone's biggest fear be helpful or **intrusive**?"
      ]
    },
    {
      "id": 230,
      "question": "What is the most beautiful sound you have ever heard in nature?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "soothing",
          "translation": "rilassante / calmante",
          "type": "Adjective",
          "example": "The sound of rain against the window is incredibly soothing."
        },
        {
          "phrase": "deafening silence",
          "translation": "silenzio assordante",
          "type": "Oxymoron",
          "example": "In the middle of the desert, the deafening silence is magical."
        },
        {
          "phrase": "rustling leaves",
          "translation": "foglie che frusciano",
          "type": "Collocation",
          "example": "I love hiking and listening to the wind and rustling leaves."
        },
        {
          "phrase": "in awe",
          "translation": "in soggezione / incantato",
          "type": "Idiom",
          "example": "Standing next to the waterfall left me completely in awe."
        },
        {
          "phrase": "unwind",
          "translation": "rilassarsi",
          "type": "Verb",
          "example": "Nature sounds are the best way to unwind after a stressful week."
        }
      ],
      "guidedQuestions": [
        "Do you find the sound of a thunderstorm frightening or **soothing**?",
        "When was the last time a landscape left you **in awe**?",
        "Why do most people use nature sounds to **unwind**?"
      ]
    },
    {
      "id": 231,
      "question": "Which of your current habits would your childhood self be most surprised by?",
      "category": "Personal",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "old habits die hard",
          "translation": "le vecchie abitudini sono dure a morire",
          "type": "Idiom",
          "example": "I still bite my nails when I get nervous; old habits die hard."
        },
        {
          "phrase": "transform",
          "translation": "trasformare",
          "type": "Verb",
          "example": "Moving abroad completely transformed my daily routine."
        },
        {
          "phrase": "acquire a taste",
          "translation": "acquisire un gusto per qualcosa",
          "type": "Phrase",
          "example": "I never thought I would acquire a taste for black coffee."
        },
        {
          "phrase": "outgrow",
          "translation": "superare crescendo",
          "type": "Verb",
          "example": "Did you outgrow your love for video games?"
        },
        {
          "phrase": "second nature",
          "translation": "seconda natura (istinto)",
          "type": "Idiom",
          "example": "Waking up at 5am has become second nature to me."
        }
      ],
      "guidedQuestions": [
        "What is something you used to hate, but now it is **second nature** to do?",
        "Did you **outgrow** your childhood friends or stay close?",
        "Why is true that **old habits die hard**?"
      ]
    },
    {
      "id": 232,
      "question": "What is the one phrase you hear people say that instantly annoys you?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "pet peeve",
          "translation": "fastidio personale",
          "type": "Noun Phrase",
          "example": "People chewing loudly is my biggest pet peeve."
        },
        {
          "phrase": "buzzword",
          "translation": "parola d'ordine (moda)",
          "type": "Noun",
          "example": "Corporate emails are always full of meaningless buzzwords."
        },
        {
          "phrase": "grate on my nerves",
          "translation": "urtare i nervi",
          "type": "Idiom",
          "example": "Hearing the phrase 'it is what it is' really grates on my nerves."
        },
        {
          "phrase": "cliché",
          "translation": "cliché / luogo comune",
          "type": "Noun",
          "example": "I hate romantic movies that rely on every cliché in the book."
        },
        {
          "phrase": "roll my eyes",
          "translation": "alzare gli occhi al cielo",
          "type": "Idiom",
          "example": "I always roll my eyes when influencers say 'link in bio'."
        }
      ],
      "guidedQuestions": [
        "What corporate **buzzword** do you hear way too often?",
        "What is your biggest conversational **pet peeve**?",
        "Does the phrase 'everything happens for a reason' comfort you or make you **roll your eyes**?"
      ]
    },
    {
      "id": 233,
      "question": "If you were forced to give up music or movies for the rest of your life, which would you sacrifice?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "tough call",
          "translation": "scelta difficile",
          "type": "Idiom",
          "example": "Deciding between pizza and sushi is always a tough call."
        },
        {
          "phrase": "soundtrack to your life",
          "translation": "colonna sonora della propria vita",
          "type": "Idiom",
          "example": "Music acts as the emotional soundtrack to your life."
        },
        {
          "phrase": "escapism",
          "translation": "escapismo / evasione",
          "type": "Noun",
          "example": "Watching fantasy movies is my favorite form of escapism."
        },
        {
          "phrase": "resonates with",
          "translation": "risuona con",
          "type": "Phrasal Verb",
          "example": "Which song deeply resonates with your current mood?"
        },
        {
          "phrase": "make a sacrifice",
          "translation": "fare un sacrificio",
          "type": "Phrase",
          "example": "Sometimes you must make a sacrifice to achieve big goals."
        }
      ],
      "guidedQuestions": [
        "Why do specific songs suddenly become the **soundtrack to your life**?",
        "Is cinema the ultimate form of **escapism**?",
        "What is a **tough call** you recently had to make?"
      ]
    },
    {
      "id": 234,
      "question": "What is something deeply unethical that humanity accepts as totally normal?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "turn a blind eye",
          "translation": "chiudere un occhio",
          "type": "Idiom",
          "example": "We turn a blind eye to the reality of factory farming."
        },
        {
          "phrase": "status quo",
          "translation": "lo stato delle cose / lo status quo",
          "type": "Noun",
          "example": "People are terrified of challenging the terrifying status quo."
        },
        {
          "phrase": "normalized",
          "translation": "normalizzato",
          "type": "Adjective",
          "example": "Working 60 hours a week has been completely normalized."
        },
        {
          "phrase": "cognitive dissonance",
          "translation": "dissonanza cognitiva",
          "type": "Noun Phrase",
          "example": "Buying cheap clothes from sweatshops requires immense cognitive dissonance."
        },
        {
          "phrase": "moral compass",
          "translation": "bussola morale",
          "type": "Noun Phrase",
          "example": "Does a high salary often compromise a person's moral compass?"
        }
      ],
      "guidedQuestions": [
        "Why is extreme wealth inequality **normalized** in modern society?",
        "Do you think humanity's **moral compass** is improving or decaying?",
        "Why do we **turn a blind eye** to global suffering?"
      ]
    },
    {
      "id": 250,
      "question": "Do you think true altruism exists, or is every good deed ultimately selfish?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "altruism",
          "translation": "altruismo",
          "type": "Noun",
          "example": "True altruism means helping others with zero expectation of reward."
        },
        {
          "phrase": "ulterior motive",
          "translation": "secondo fine / scopo nascosto",
          "type": "Noun Phrase",
          "example": "I always wonder if philanthropists have an ulterior motive."
        },
        {
          "phrase": "inherently",
          "translation": "intrinsecamente",
          "type": "Adverb",
          "example": "Are humans inherently selfish or inherently good?"
        },
        {
          "phrase": "self-serving",
          "translation": "opportunistico / egoistico",
          "type": "Adjective",
          "example": "Even charity can be a self-serving act if it just makes you feel good."
        },
        {
          "phrase": "cynical",
          "translation": "cinico",
          "type": "Adjective",
          "example": "It is a very cynical worldview to believe no one is truly kind."
        }
      ],
      "guidedQuestions": [
        "Is it possible to act without an **ulterior motive**?",
        "Why is the debate about **altruism** so controversial?",
        "Are we **inherently** driven by survival or kindness?"
      ]
    },
    {
      "id": 251,
      "question": "What is the most beautiful lie you've ever been told?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "white lie",
          "translation": "bugia a fin di bene",
          "type": "Noun Phrase",
          "example": "Sometimes a white lie is necessary to protect someone's feelings."
        },
        {
          "phrase": "fabricate",
          "translation": "fabbricare / inventare",
          "type": "Verb",
          "example": "Did they fabricate the story to make you feel better?"
        },
        {
          "phrase": "blissful ignorance",
          "translation": "beata ignoranza",
          "type": "Noun Phrase",
          "example": "I prefer blissful ignorance over a painful truth."
        },
        {
          "phrase": "sugar-coat",
          "translation": "indorare la pillola",
          "type": "Verb",
          "example": "Stop trying to sugar-coat the reality of the situation."
        },
        {
          "phrase": "harsh reality",
          "translation": "dura realtà",
          "type": "Noun Phrase",
          "example": "Do you prefer a beautiful lie or the harsh reality?"
        }
      ],
      "guidedQuestions": [
        "When is a **white lie** morally completely justified?",
        "Have you ever chosen **blissful ignorance** over the truth?",
        "What happens when you discover someone tried to **sugar-coat** a tragedy?"
      ]
    },
    {
      "id": 252,
      "question": "If you had access to a machine that could accurately predict your exact time and cause of death, would you use it?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "inevitability",
          "translation": "inevitabilità",
          "type": "Noun",
          "example": "The inevitability of death is humanity's greatest fear."
        },
        {
          "phrase": "ignorance is bliss",
          "translation": "l'ignoranza è una benedizione",
          "type": "Idiom",
          "example": "When it comes to the future, sometimes ignorance is bliss."
        },
        {
          "phrase": "foreknowledge",
          "translation": "prescienza",
          "type": "Noun",
          "example": "Would foreknowledge of your death change how you live today?"
        },
        {
          "phrase": "impending doom",
          "translation": "destino incombente",
          "type": "Noun Phrase",
          "example": "Knowing the exact date would leave me with a sense of impending doom."
        },
        {
          "phrase": "carpe diem",
          "translation": "cogli l'attimo",
          "type": "Phrase",
          "example": "Would you finally embrace 'carpe diem' if you knew your time was limited?"
        }
      ],
      "guidedQuestions": [
        "Does **foreknowledge** ruin the surprise of living?",
        "Why do some people believe that **ignorance is bliss**?",
        "Would a deadline give you a sense of purpose or **impending doom**?"
      ]
    },
    {
      "id": 253,
      "question": "What do you think is the biggest flaw in the modern education system?",
      "category": "Philosophy",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "one-size-fits-all",
          "translation": "standardizzato / valido per tutti",
          "type": "Adjective Phrase",
          "example": "A one-size-fits-all approach to learning rarely works."
        },
        {
          "phrase": "stifle creativity",
          "translation": "soffocare la creatività",
          "type": "Collocation",
          "example": "Do standardized tests actually stifle creativity in children?"
        },
        {
          "phrase": "rote memorization",
          "translation": "apprendimento mnemonico",
          "type": "Noun Phrase",
          "example": "Rote memorization doesn't teach you how to think."
        },
        {
          "phrase": "conformity",
          "translation": "conformismo",
          "type": "Noun",
          "example": "Schools often reward conformity over original thought."
        },
        {
          "phrase": "obsolete",
          "translation": "obsoleto",
          "type": "Adjective",
          "example": "Many of the skills taught in high school are entirely obsolete."
        }
      ],
      "guidedQuestions": [
        "Does a **one-size-fits-all** classroom leave gifted students behind?",
        "How relying heavily on **rote memorization** creates poor problem solvers?",
        "What is the most **obsolete** subject taught in modern schools?"
      ]
    },
    {
      "id": 254,
      "question": "If you could instantly completely erase one emotion from human existence, which would it be?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "eradicate",
          "translation": "sradicare",
          "type": "Verb",
          "example": "If we could eradicate jealousy, would relationships survive?"
        },
        {
          "phrase": "double-edged sword",
          "translation": "arma a doppio taglio",
          "type": "Idiom",
          "example": "Fear is a double-edged sword; it protects us but also traps us."
        },
        {
          "phrase": "necessary evil",
          "translation": "male necessario",
          "type": "Noun Phrase",
          "example": "Do you consider sadness a necessary evil to appreciate joy?"
        },
        {
          "phrase": "apathy",
          "translation": "apatia",
          "type": "Noun",
          "example": "Without anger at injustice, we might just fall into total apathy."
        },
        {
          "phrase": "human condition",
          "translation": "condizione umana",
          "type": "Noun Phrase",
          "example": "Pain is a fundamental part of the human condition."
        }
      ],
      "guidedQuestions": [
        "Is fear a **necessary evil** for keeping humanity alive?",
        "Why is anger a **double-edged sword**?",
        "Would eliminating sadness reduce the richness of the **human condition**?"
      ]
    },
    {
      "id": 255,
      "question": "Do you believe that people are capable of profound, fundamental change?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "set in their ways",
          "translation": "fossilizzato nelle proprie abitudini",
          "type": "Idiom",
          "example": "My grandfather is entirely set in his ways."
        },
        {
          "phrase": "epiphany",
          "translation": "epifania / illuminazione",
          "type": "Noun",
          "example": "It took a massive epiphany for him to quit smoking."
        },
        {
          "phrase": "turn over a new leaf",
          "translation": "voltare pagina (cambiare in meglio)",
          "type": "Idiom",
          "example": "She promised to turn over a new leaf this year."
        },
        {
          "phrase": "ingrained",
          "translation": "radicato",
          "type": "Adjective",
          "example": "Those toxic behaviors are deeply ingrained in his personality."
        },
        {
          "phrase": "catalyst for change",
          "translation": "catalizzatore del cambiamento",
          "type": "Collocation",
          "example": "Sometimes a tragedy is the only real catalyst for change."
        }
      ],
      "guidedQuestions": [
        "Are humans too **set in their ways** to change after age 30?",
        "Have you ever seen someone totally **turn over a new leaf**?",
        "What is the most common **catalyst for change** in a person's life?"
      ]
    },
    {
      "id": 256,
      "question": "What is a memory you have that you aren't sure is actually real?",
      "category": "Dreams",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "false memory",
          "translation": "falso ricordo",
          "type": "Noun Phrase",
          "example": "The brain can easily create a detailed false memory."
        },
        {
          "phrase": "blur the lines",
          "translation": "sfumare i confini",
          "type": "Phrase",
          "example": "Over time, we blur the lines between reality and dreams."
        },
        {
          "phrase": "vividly",
          "translation": "vividamente",
          "type": "Adverb",
          "example": "I vividly remember a dog we never even owned."
        },
        {
          "phrase": "figment of my imagination",
          "translation": "frutto della mia immaginazione",
          "type": "Idiom",
          "example": "Was that conversation real, or just a figment of my imagination?"
        },
        {
          "phrase": "distort",
          "translation": "distorcere",
          "type": "Verb",
          "example": "Every time you recall a memory, you slightly distort it."
        }
      ],
      "guidedQuestions": [
        "Do you have a **vividly** clear memory from a very young age?",
        "Why does the brain **distort** the past to protect us?",
        "Has a dream ever **blurred the lines** between sleep and reality for you?"
      ]
    },
    {
      "id": 257,
      "question": "If you could spend one hour speaking with anyone who is dead, who would you choose and what would you ask?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "closure",
          "translation": "chiusura (psicologica)",
          "type": "Noun",
          "example": "Many people want to talk to deceased relatives just for closure."
        },
        {
          "phrase": "pick someone's brain",
          "translation": "chiedere consiglio a qualcuno (estrarre idee)",
          "type": "Idiom",
          "example": "I would love to pick Leonardo da Vinci's brain."
        },
        {
          "phrase": "beyond the grave",
          "translation": "dall'oltretomba",
          "type": "Phrase",
          "example": "What advice would they give from beyond the grave?"
        },
        {
          "phrase": "leave unsaid",
          "translation": "lasciare non detto",
          "type": "Phrase",
          "example": "There is always something you leave unsaid when someone dies."
        },
        {
          "phrase": "profound insight",
          "translation": "intuizione profonda",
          "type": "Collocation",
          "example": "Seeking profound insight from historical figures is a common fantasy."
        }
      ],
      "guidedQuestions": [
        "Is seeking **closure** the main reason we miss the dead?",
        "Whose brain would you love to **pick** about history?",
        "What is the hardest thing to **leave unsaid**?"
      ]
    },
    {
      "id": 258,
      "question": "When did you first realize that your parents are just ordinary people making it up as they go?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "put on a pedestal",
          "translation": "mettere su un piedistallo",
          "type": "Idiom",
          "example": "As children, we put our parents on a pedestal."
        },
        {
          "phrase": "shatter the illusion",
          "translation": "infrangere l'illusione",
          "type": "Phrase",
          "example": "Seeing my father cry for the first time shattered the illusion."
        },
        {
          "phrase": "flawed",
          "translation": "imperfetto / difettoso",
          "type": "Adjective",
          "example": "It is scary to realize your heroes are deeply flawed."
        },
        {
          "phrase": "wing it",
          "translation": "improvvisare",
          "type": "Idiom",
          "example": "Most adults are just winging it, hoping for the best."
        },
        {
          "phrase": "coming of age",
          "translation": "raggiungimento della maturità",
          "type": "Noun Phrase",
          "example": "Realizing your parents are human is a crucial coming of age moment."
        }
      ],
      "guidedQuestions": [
        "Why do we naturally **put our parents on a pedestal**?",
        "What was the moment that **shattered the illusion** for you?",
        "Is it comforting or terrifying to know all adults are just **winging it**?"
      ]
    },
    {
      "id": 259,
      "question": "What is something that society treats as a luxury, but you believe should be a fundamental human right?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "commodify",
          "translation": "mercificare",
          "type": "Verb",
          "example": "We shouldn't commodify basic needs like water and shelter."
        },
        {
          "phrase": "disparity",
          "translation": "disparità",
          "type": "Noun",
          "example": "The disparity between the rich and the poor is growing."
        },
        {
          "phrase": "basic necessity",
          "translation": "necessità di base",
          "type": "Noun Phrase",
          "example": "Internet access is now a basic necessity, not a luxury."
        },
        {
          "phrase": "privilege",
          "translation": "privilegio",
          "type": "Noun",
          "example": "Having access to mental healthcare is currently a massive privilege."
        },
        {
          "phrase": "level the playing field",
          "translation": "livellare il campo di gioco (dare pari opportunità)",
          "type": "Idiom",
          "example": "Universal education helps level the playing field."
        }
      ],
      "guidedQuestions": [
        "Should access to fast internet be a **basic necessity**?",
        "How does free healthcare **level the playing field**?",
        "Is it dangerous to **commodify** human attention on social media?"
      ]
    },
    {
      "id": 260,
      "question": "What is a belief you held 5 years ago that you completely disagree with today?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "change my tune",
          "translation": "cambiare musica / opinione",
          "type": "Idiom",
          "example": "After seeing the evidence, I had to completely change my tune."
        },
        {
          "phrase": "outdated",
          "translation": "datato / obsoleto",
          "type": "Adjective",
          "example": "That is a highly outdated way of looking at gender roles."
        },
        {
          "phrase": "paradigm shift",
          "translation": "cambiamento di paradigma",
          "type": "Noun Phrase",
          "example": "Moving across the world caused a paradigm shift in my thinking."
        },
        {
          "phrase": "double down",
          "translation": "raddoppiare (ostinarsi)",
          "type": "Phrasal Verb",
          "example": "When confronted with facts, some people just double down on their errors."
        },
        {
          "phrase": "humbling experience",
          "translation": "esperienza che rende umili",
          "type": "Collocation",
          "example": "Realizing you were wrong for years is a deeply humbling experience."
        }
      ],
      "guidedQuestions": [
        "What evidence forced you to **change your tune**?",
        "Why do people **double down** when they know they are wrong?",
        "Has therapy ever caused a **paradigm shift** in your life?"
      ]
    },
    {
      "id": 261,
      "question": "Do you think humanity will ultimately destroy itself or save itself?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "tipping point",
          "translation": "punto di non ritorno",
          "type": "Noun Phrase",
          "example": "Have we already passed the climate tipping point?"
        },
        {
          "phrase": "self-destruction",
          "translation": "autodistruzione",
          "type": "Noun",
          "example": "Our greed is driving us toward total self-destruction."
        },
        {
          "phrase": "resilience",
          "translation": "resilienza",
          "type": "Noun",
          "example": "Human resilience has survived ice ages and plagues."
        },
        {
          "phrase": "hubris",
          "translation": "arroganza / tracotanza",
          "type": "Noun",
          "example": "Our technological hubris might be our downfall."
        },
        {
          "phrase": "doom and gloom",
          "translation": "pessimismo e catastrofismo",
          "type": "Idiom",
          "example": "I get tired of hearing constantly about doom and gloom in the news."
        }
      ],
      "guidedQuestions": [
        "Are we approaching a dangerous **tipping point** in history?",
        "Is **hubris** humanity's worst flaw?",
        "Can human **resilience** overcome our tendency for war?"
      ]
    },
    {
      "id": 262,
      "question": "If you could measure the total impact of your life in one specific metric, what would you want that metric to be?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "leave a legacy",
          "translation": "lasciare un'eredità",
          "type": "Idiom",
          "example": "Everyone wants to leave a legacy, but very few do."
        },
        {
          "phrase": "quantify",
          "translation": "quantificare",
          "type": "Verb",
          "example": "You cannot quantify love or human connection."
        },
        {
          "phrase": "ripple effect",
          "translation": "effetto a catena",
          "type": "Noun Phrase",
          "example": "The ripple effect of one good teacher can span generations."
        },
        {
          "phrase": "benchmark",
          "translation": "parametro di riferimento",
          "type": "Noun",
          "example": "Wealth is a terrible benchmark for human value."
        },
        {
          "phrase": "net positive",
          "translation": "saldo positivo",
          "type": "Noun Phrase",
          "example": "Was my existence a net positive for the planet?"
        }
      ],
      "guidedQuestions": [
        "Is it possible to accurately **quantify** happiness?",
        "What is the ultimate **benchmark** of a successful life?",
        "Do you think your life will ultimately be a **net positive** to society?"
      ]
    },
    {
      "id": 263,
      "question": "Do you think true freedom is having unlimited choices, or having no choices to make?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "paradox of choice",
          "translation": "il paradosso della scelta",
          "type": "Noun Phrase",
          "example": "The paradox of choice means more options make us incredibly unhappy."
        },
        {
          "phrase": "liberating",
          "translation": "liberatorio",
          "type": "Adjective",
          "example": "Having your schedule strictly managed can actually be very liberating."
        },
        {
          "phrase": "boundless",
          "translation": "senza limiti",
          "type": "Adjective",
          "example": "Boundless freedom often leads to heavy anxiety."
        },
        {
          "phrase": "burden of responsibility",
          "translation": "peso della responsabilità",
          "type": "Collocation",
          "example": "With total freedom comes the crushing burden of responsibility."
        },
        {
          "phrase": "paralyzed",
          "translation": "paralizzato",
          "type": "Adjective",
          "example": "I am paralyzed by trying to pick a movie on Netflix."
        }
      ],
      "guidedQuestions": [
        "Have you ever felt **paralyzed** by the **paradox of choice**?",
        "Can strict routines actually be **liberating**?",
        "Is **boundless** freedom mostly an illusion?"
      ]
    },
    {
      "id": 264,
      "question": "What is the hardest part about getting older that nobody warns you about?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "take a toll",
          "translation": "lasciare il segno / pesare",
          "type": "Phrase",
          "example": "Years of stress will rapidly take a toll on your body."
        },
        {
          "phrase": "drift apart",
          "translation": "allontanarsi",
          "type": "Phrasal Verb",
          "example": "It is incredibly painful to watch close friends slowly drift apart."
        },
        {
          "phrase": "blink of an eye",
          "translation": "un batter d'occhio",
          "type": "Idiom",
          "example": "Your twenties are gone in the blink of an eye."
        },
        {
          "phrase": "mortality",
          "translation": "mortalità",
          "type": "Noun",
          "example": "Facing your fading mortality changes everything."
        },
        {
          "phrase": "trade-off",
          "translation": "compromesso",
          "type": "Noun",
          "example": "Aging is a trade-off: you lose energy, but gain wisdom."
        }
      ],
      "guidedQuestions": [
        "Why do childhood friends naturally **drift apart** over time?",
        "Does understanding your **mortality** make life richer?",
        "What is the biggest **trade-off** between being young and old?"
      ]
    },
    {
      "id": 270,
      "question": "What is a seemingly simple word that you always spell wrong?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "mind blank",
          "translation": "vuoto di memoria",
          "type": "Noun Phrase",
          "example": "I had a total mind blank on how to spell 'restaurant'."
        },
        {
          "phrase": "second-guess",
          "translation": "mettere in dubbio",
          "type": "Verb",
          "example": "I always second-guess myself when writing emails."
        },
        {
          "phrase": "rely heavily on",
          "translation": "fare grande affidamento su",
          "type": "Phrase",
          "example": "We rely heavily on autocorrect nowadays."
        },
        {
          "phrase": "slip up",
          "translation": "scivolone / errore",
          "type": "Noun/Verb",
          "example": "It was just a minor slip up in the text message."
        },
        {
          "phrase": "pet peeve",
          "translation": "cosa fastidiosa",
          "type": "Noun Phrase",
          "example": "Bad grammar is my biggest pet peeve."
        }
      ],
      "guidedQuestions": [
        "Have you ever had a sudden **mind blank** during a presentation?",
        "Do people **rely heavily on** AI for writing too much?",
        "What spelling mistake is a major **pet peeve** for you?"
      ]
    },
    {
      "id": 271,
      "question": "What is the most beautiful piece of architecture you've ever seen?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "breathtaking",
          "translation": "mozzafiato",
          "type": "Adjective",
          "example": "The ceiling of the cathedral was simply breathtaking."
        },
        {
          "phrase": "stand the test of time",
          "translation": "resistere alla prova del tempo",
          "type": "Idiom",
          "example": "Roman aqueducts certainly stand the test of time."
        },
        {
          "phrase": "intricate details",
          "translation": "dettagli complessi",
          "type": "Collocation",
          "example": "I was amazed by the intricate details of the wood carvings."
        },
        {
          "phrase": "in awe",
          "translation": "incantato / in soggezione",
          "type": "Idiom",
          "example": "Standing inside the Colosseum left me in awe."
        },
        {
          "phrase": "monstrosity",
          "translation": "mostruosità",
          "type": "Noun",
          "example": "Some people think modern skyscrapers are a visual monstrosity."
        }
      ],
      "guidedQuestions": [
        "Does classical architecture **stand the test of time** better than modern designs?",
        "What famous building left you entirely **in awe**?",
        "Do you consider brutalist concrete buildings a masterpiece or a **monstrosity**?"
      ]
    },
    {
      "id": 272,
      "question": "If you had to master one instrument instantly, which one would fit your personality best?",
      "category": "Dreams",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "struck a chord",
          "translation": "toccare le corde del cuore (fig)",
          "type": "Idiom",
          "example": "The sad melody completely struck a chord with me."
        },
        {
          "phrase": "steep learning curve",
          "translation": "curva di apprendimento ripida",
          "type": "Noun Phrase",
          "example": "The violin has a notoriously steep learning curve."
        },
        {
          "phrase": "in tune with",
          "translation": "in sintonia con",
          "type": "Idiom",
          "example": "Are you in tune with your artistic side?"
        },
        {
          "phrase": "virtuoso",
          "translation": "virtuoso",
          "type": "Noun",
          "example": "It takes decades to become a true piano virtuoso."
        },
        {
          "phrase": "jam out",
          "translation": "suonare liberamente / fare jam session",
          "type": "Phrasal Verb",
          "example": "It would be fun to just jam out with a band on weekends."
        }
      ],
      "guidedQuestions": [
        "Why does a specific instrument have such a **steep learning curve**?",
        "What type of music generally **strikes a chord** with you?",
        "Are you highly **in tune with** your emotions when listening to sad songs?"
      ]
    },
    {
      "id": 273,
      "question": "What is an assumption people always make about you that is completely wrong?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "judge a book by its cover",
          "translation": "giudicare dalle apparenze",
          "type": "Idiom",
          "example": "People judge a book by its cover, assuming I am arrogant because I'm quiet."
        },
        {
          "phrase": "misread",
          "translation": "fraintendere / leggere male",
          "type": "Verb",
          "example": "They completely misread my intentions."
        },
        {
          "phrase": "vibe",
          "translation": "vibrazione / energia",
          "type": "Noun",
          "example": "I apparently give off a highly intimidating vibe."
        },
        {
          "phrase": "first impression",
          "translation": "prima impressione",
          "type": "Noun Phrase",
          "example": "My first impression of him was totally off the mark."
        },
        {
          "phrase": "deep down",
          "translation": "in fondo",
          "type": "Phrase",
          "example": "Deep down, I am actually incredibly sensitive."
        }
      ],
      "guidedQuestions": [
        "Do you think it's impossible not to **judge a book by its cover**?",
        "Why do people often **misread** your tone in text messages?",
        "What **vibe** do you think you give off to strangers?"
      ]
    },
    {
      "id": 274,
      "question": "Do you think we are living in the 'good old days' right now?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "nostalgia",
          "translation": "nostalgia",
          "type": "Noun",
          "example": "Nostalgia makes us remember the past as better than it actually was."
        },
        {
          "phrase": "take for granted",
          "translation": "dare per scontato",
          "type": "Phrase",
          "example": "We take the internet for granted until it breaks."
        },
        {
          "phrase": "rose-tinted glasses",
          "translation": "lenti rosa (vedere il mondo in modo idealizzato)",
          "type": "Idiom",
          "example": "Looking back at the 90s with rose-tinted glasses ignores the real problems."
        },
        {
          "phrase": "fleeting",
          "translation": "fugace",
          "type": "Adjective",
          "example": "Happiness is a very fleeting emotion."
        },
        {
          "phrase": "ignorance is bliss",
          "translation": "l'ignoranza è una benedizione",
          "type": "Idiom",
          "example": "We were happy as kids mainly because ignorance is bliss."
        }
      ],
      "guidedQuestions": [
        "Is **nostalgia** a dangerous emotion?",
        "What technology do we currently **take for granted**?",
        "Why do generations always view their childhood through **rose-tinted glasses**?"
      ]
    },
    {
      "id": 275,
      "question": "What is an unconventional feature you would build into your dream house?",
      "category": "Dreams",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "spare no expense",
          "translation": "non badare a spese",
          "type": "Phrase",
          "example": "If I built a house, I would spare no expense on the kitchen."
        },
        {
          "phrase": "novelty",
          "translation": "novità / stravaganza",
          "type": "Noun",
          "example": "A slide instead of stairs is a fun novelty."
        },
        {
          "phrase": "game-changer",
          "translation": "punto di svolta",
          "type": "Noun Phrase",
          "example": "Having heated floors in the winter is considered a game-changer."
        },
        {
          "phrase": "cozy nook",
          "translation": "angolino accogliente",
          "type": "Noun Phrase",
          "example": "I want a cozy reading nook built into the wall."
        },
        {
          "phrase": "over-the-top",
          "translation": "esagerato",
          "type": "Adjective",
          "example": "An indoor waterfall might be a little over-the-top."
        }
      ],
      "guidedQuestions": [
        "If you could **spare no expense**, what is the first room you would design?",
        "What modern home appliance is a total **game-changer**?",
        "Would you prefer an **over-the-top** mansion or a small cabin?"
      ]
    },
    {
      "id": 276,
      "question": "What is the biggest risk you've actively decided NOT to take?",
      "category": "Deep",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "play it safe",
          "translation": "non rischiare / andare sul sicuro",
          "type": "Idiom",
          "example": "Instead of moving to New York, I chose to play it safe."
        },
        {
          "phrase": "what-if",
          "translation": "il 'cosa succederebbe se'",
          "type": "Noun",
          "example": "Do you constantly live with the 'what-if' of that decision?"
        },
        {
          "phrase": "leap of faith",
          "translation": "salto nel buio / atto di fede",
          "type": "Noun Phrase",
          "example": "Quitting my job was a massive leap of faith."
        },
        {
          "phrase": "weigh the pros and cons",
          "translation": "soppesare i pro e i contro",
          "type": "Phrase",
          "example": "You must carefully weigh the pros and cons before buying a house."
        },
        {
          "phrase": "dodged a bullet",
          "translation": "schivato un proiettile",
          "type": "Idiom",
          "example": "Looking back at that toxic startup, I really dodged a bullet."
        }
      ],
      "guidedQuestions": [
        "Is it better to **play it safe** or take wild risks in your 20s?",
        "Have you ever taken a massive **leap of faith** that actually worked?",
        "When evaluating a job offer, how do you **weigh the pros and cons**?"
      ]
    },
    {
      "id": 277,
      "question": "What is something that strongly gives you a sense of purpose?",
      "category": "Wisdom",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "anchor",
          "translation": "àncora (fig.)",
          "type": "Noun",
          "example": "My family acts as an anchor when I feel lost."
        },
        {
          "phrase": "driving force",
          "translation": "forza motrice",
          "type": "Noun Phrase",
          "example": "Curiosity is the main driving force behind my career."
        },
        {
          "phrase": "give back",
          "translation": "restituire (alla comunità)",
          "type": "Phrasal Verb",
          "example": "I want to gain wealth so I can eventually give back."
        },
        {
          "phrase": "inner compass",
          "translation": "bussola interiore",
          "type": "Noun Phrase",
          "example": "When society is chaotic, you have to follow your inner compass."
        },
        {
          "phrase": "larger than life",
          "translation": "più grande della vita",
          "type": "Idiom",
          "example": "To feel fulfilled, do we need to be part of something larger than life?"
        }
      ],
      "guidedQuestions": [
        "What is your primary **driving force** to wake up in the morning?",
        "How do you plan to **give back** to your local community?",
        "Is it possible to live without an **inner compass**?"
      ]
    },
    {
      "id": 278,
      "question": "What is an incredibly difficult task that you actually genuinely enjoy doing?",
      "category": "Personal",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "flow state",
          "translation": "stato di flusso",
          "type": "Noun Phrase",
          "example": "When I am painting, I enter a deep flow state."
        },
        {
          "phrase": "get lost in",
          "translation": "perdersi in",
          "type": "Phrasal Verb",
          "example": "I can easily get lost in organizing scattered data."
        },
        {
          "phrase": "labor of love",
          "translation": "lavoro fatto con amore",
          "type": "Noun Phrase",
          "example": "Restoring that old car was a total labor of love."
        },
        {
          "phrase": "daunting",
          "translation": "scoraggiante",
          "type": "Adjective",
          "example": "Writing a novel seemed daunting, but I loved it."
        },
        {
          "phrase": "rewarding",
          "translation": "gratificante",
          "type": "Adjective",
          "example": "Nothing is more rewarding than a hard-earned victory."
        }
      ],
      "guidedQuestions": [
        "What activity reliably puts you into a deep **flow state**?",
        "Have you ever completed a project that was pure **labor of love**?",
        "Why do some **daunting** tasks ultimately feel so **rewarding**?"
      ]
    },
    {
      "id": 279,
      "question": "If humans stopped needing to sleep, what would you do with your extra 8 hours?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "hustle culture",
          "translation": "cultura del lavoro incessante",
          "type": "Noun Phrase",
          "example": "Hustle culture would completely ruin the extra time."
        },
        {
          "phrase": "night owl",
          "translation": "nottambulo",
          "type": "Noun Phrase",
          "example": "As a night owl, I would love the quiet hours of 3 AM."
        },
        {
          "phrase": "monopolize",
          "translation": "monopolizzare",
          "type": "Verb",
          "example": "Our employers would just monopolize the extra hours."
        },
        {
          "phrase": "pass the time",
          "translation": "far passare il tempo",
          "type": "Phrase",
          "example": "We would probably just invent more scrolling apps to pass the time."
        },
        {
          "phrase": "burn the midnight oil",
          "translation": "lavorare fino a tardi",
          "type": "Idiom",
          "example": "Without sleep, everyone would burn the midnight oil forever."
        }
      ],
      "guidedQuestions": [
        "Would **hustle culture** force us to work 16 hour days?",
        "Do you think the quiet peace of the **night owl** hours would be ruined?",
        "Is it unhealthy to constantly **burn the midnight oil**?"
      ]
    },
    {
      "id": 280,
      "question": "If you could witness any event past, present, or future, what would it be?",
      "category": "Dreams",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "front-row seat",
          "translation": "posto in prima fila",
          "type": "Noun Phrase",
          "example": "I would want a front-row seat to the building of the pyramids."
        },
        {
          "phrase": "monumental",
          "translation": "storico / monumentale",
          "type": "Adjective",
          "example": "Graduating from college was a monumental achievement for her family."
        },
        {
          "phrase": "unprecedented",
          "translation": "senza precedenti",
          "type": "Adjective",
          "example": "Landing on Mars will be an unprecedented event in human history."
        },
        {
          "phrase": "turn back the clock",
          "translation": "riportare indietro le lancette dell'orologio (il tempo)",
          "type": "Idiom",
          "example": "If I could turn back the clock, I would visit ancient Rome."
        },
        {
          "phrase": "awe-inspiring",
          "translation": "che incute soggezione (in senso positivo)",
          "type": "Adjective",
          "example": "The sheer scale of the universe is awe-inspiring."
        }
      ],
      "guidedQuestions": [
        "What **monumental** moment in history do you wish you saw?",
        "Would you rather **turn back the clock** or see the future?",
        "What is the most **awe-inspiring** thing you have ever seen in real life?"
      ]
    },
    {
      "id": 281,
      "question": "What is a seemingly innocent habit that surprisingly reveals a lot about a person?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "tell-tale sign",
          "translation": "segno rivelatore",
          "type": "Noun Phrase",
          "example": "Looking at their phone while you speak is a tell-tale sign of disrespect."
        },
        {
          "phrase": "subtle cue",
          "translation": "segnale sottile",
          "type": "Noun Phrase",
          "example": "Are you good at picking up on subtle cues during a date?"
        },
        {
          "phrase": "give away",
          "translation": "rivelare (involontariamente)",
          "type": "Phrasal Verb",
          "example": "Does your face give away what you are thinking?"
        },
        {
          "phrase": "read between the lines",
          "translation": "leggere tra le righe",
          "type": "Idiom",
          "example": "You have to read between the lines to know what they truly mean."
        },
        {
          "phrase": "idiosyncrasy",
          "translation": "idiosincrasia / vezzo",
          "type": "Noun",
          "example": "Everyone has a unique idiosyncrasy when they are stressed."
        }
      ],
      "guidedQuestions": [
        "What is a **tell-tale sign** that someone is uncomfortable?",
        "Do people often **give away** their true feelings through body language?",
        "What personal **idiosyncrasy** do you have that people notice?"
      ]
    },
    {
      "id": 282,
      "question": "Do you believe the pursuit of happiness actually makes people more miserable?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "chasing a mirage",
          "translation": "inseguire un miraggio",
          "type": "Idiom",
          "example": "Searching for perfect happiness is like chasing a mirage."
        },
        {
          "phrase": "fleeting",
          "translation": "fugace",
          "type": "Adjective",
          "example": "Joy is a very fleeting emotion; it never lasts forever."
        },
        {
          "phrase": "baseline",
          "translation": "livello base",
          "type": "Noun",
          "example": "People generally return to their baseline level of happiness."
        },
        {
          "phrase": "paradox",
          "translation": "paradosso",
          "type": "Noun",
          "example": "The paradox is that the harder you try to sleep, the more awake you feel."
        },
        {
          "phrase": "contentment",
          "translation": "appagamento",
          "type": "Noun",
          "example": "Is there a difference between happiness and contentment?"
        }
      ],
      "guidedQuestions": [
        "Is constantly searching for joy just **chasing a mirage**?",
        "Why is happiness so **fleeting** compared to sadness?",
        "Should we aim for peace and **contentment** over intense joy?"
      ]
    },
    {
      "id": 283,
      "question": "What is the most beautiful word you know in any language?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "roll off the tongue",
          "translation": "scivolare sulla lingua (suonare bene)",
          "type": "Idiom",
          "example": "Italian words just effortlessly roll off the tongue."
        },
        {
          "phrase": "profound",
          "translation": "profondo",
          "type": "Adjective",
          "example": "That poem contains a very profound truth about aging."
        },
        {
          "phrase": "lost in translation",
          "translation": "perso nella traduzione",
          "type": "Phrase",
          "example": "Some beautiful concepts are completely lost in translation."
        },
        {
          "phrase": "eloquent",
          "translation": "eloquente / facondo",
          "type": "Adjective",
          "example": "He is an extremely eloquent speaker when he talks about art."
        },
        {
          "phrase": "evoke",
          "translation": "evocare",
          "type": "Verb",
          "example": "What emotions does the word 'home' evoke for you?"
        }
      ],
      "guidedQuestions": [
        "What foreign word doesn't translate but is deeply **profound**?",
        "Do you think poetry is always **lost in translation**?",
        "What name do you think **rolls off the tongue** beautifully?"
      ]
    },
    {
      "id": 284,
      "question": "If your life was a movie, what would the current chapter be named?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "plot twist",
          "translation": "colpo di scena",
          "type": "Noun Phrase",
          "example": "Losing my job was an unexpected plot twist in my life."
        },
        {
          "phrase": "turning point",
          "translation": "punto di svolta",
          "type": "Noun Phrase",
          "example": "Moving abroad was the ultimate turning point for me."
        },
        {
          "phrase": "in limbo",
          "translation": "in un limbo / in sospeso",
          "type": "Idiom",
          "example": "I feel like my career is currently stuck in limbo."
        },
        {
          "phrase": "character development",
          "translation": "sviluppo del personaggio",
          "type": "Noun Phrase",
          "example": "Painful breakups are just aggressive character development."
        },
        {
          "phrase": "cliffhanger",
          "translation": "finale in sospeso",
          "type": "Noun",
          "example": "Last year ended on a massive cliffhanger for my family."
        }
      ],
      "guidedQuestions": [
        "Was your last major life change a good or bad **plot twist**?",
        "Are you currently stuck **in limbo** or moving forward quickly?",
        "What event provided the most **character development** for you?"
      ]
    },
    {
      "id": 285,
      "question": "What is the most subtle, passive-aggressive thing people do regularly?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "backhanded compliment",
          "translation": "complimento velato (offesa travestita da complimento)",
          "type": "Noun Phrase",
          "example": "Saying 'you look great for your age' is a classic backhanded compliment."
        },
        {
          "phrase": "sugar-coat",
          "translation": "indorare la pillola",
          "type": "Verb",
          "example": "She tried to sugar-coat the criticism, but it still hurt."
        },
        {
          "phrase": "give the cold shoulder",
          "translation": "trattare con freddezza",
          "type": "Idiom",
          "example": "Why would anyone give the cold shoulder instead of talking?"
        },
        {
          "phrase": "read the room",
          "translation": "leggere la stanza (capire l'atmosfera)",
          "type": "Idiom",
          "example": "You need to learn to read the room before making a joke."
        },
        {
          "phrase": "ulterior motive",
          "translation": "secondo fine",
          "type": "Noun Phrase",
          "example": "Did she actually mean that, or did she have an ulterior motive?"
        }
      ],
      "guidedQuestions": [
        "Have you ever received a truly terrible **backhanded compliment**?",
        "Why is it so painful when someone **gives you the cold shoulder**?",
        "Is it polite to **sugar-coat** negative feedback at work?"
      ]
    },
    {
      "id": 286,
      "question": "What is a seemingly boring topic that you could talk about passionately for an hour?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "niche",
          "translation": "di nicchia",
          "type": "Adjective",
          "example": "He has a very niche interest in vintage fountain pens."
        },
        {
          "phrase": "go on a tangent",
          "translation": "partire per la tangente (divagare)",
          "type": "Idiom",
          "example": "I try to quickly answer, but I always go on a tangent."
        },
        {
          "phrase": "infodump",
          "translation": "scaricare informazioni",
          "type": "Verb",
          "example": "I accidentally infodumped about coffee brewing to a stranger."
        },
        {
          "phrase": "passionate",
          "translation": "appassionato",
          "type": "Adjective",
          "example": "She is incredibly passionate about urban city planning."
        },
        {
          "phrase": "geek out",
          "translation": "entusiasmarsi da 'nerd'",
          "type": "Phrasal Verb",
          "example": "I love to geek out over new camera equipment."
        }
      ],
      "guidedQuestions": [
        "What extremely **niche** hobby do you have?",
        "When was the last time you completely **geeked out** over something?",
        "Do people ever get annoyed when you **go on a tangent**?"
      ]
    },
    {
      "id": 287,
      "question": "If you had to sacrifice your most treasured personal possession to save a stranger, would you?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "sentimental value",
          "translation": "valore affettivo",
          "type": "Noun Phrase",
          "example": "This cheap old watch has massive sentimental value to me."
        },
        {
          "phrase": "materialistic",
          "translation": "materialista",
          "type": "Adjective",
          "example": "Do you consider yourself a highly materialistic person?"
        },
        {
          "phrase": "greater good",
          "translation": "bene superiore",
          "type": "Noun Phrase",
          "example": "Are you willing to sacrifice personal joy for the greater good?"
        },
        {
          "phrase": "part ways with",
          "translation": "separarsi da",
          "type": "Phrase",
          "example": "It is incredibly difficult to part ways with sentimental items."
        },
        {
          "phrase": "moral dilemma",
          "translation": "dilemma morale",
          "type": "Noun Phrase",
          "example": "The trolley problem is a classic moral dilemma."
        }
      ],
      "guidedQuestions": [
        "Is an item's **sentimental value** more important than its price?",
        "Are humans naturally selfish, or naturally geared toward the **greater good**?",
        "What makes this specific **moral dilemma** so difficult to answer?"
      ]
    },
    {
      "id": 288,
      "question": "What is your best tip for instantly getting out of a bad mood?",
      "category": "Feelings",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "snap out of it",
          "translation": "riprendersi / scuotersi",
          "type": "Idiom",
          "example": "Sometimes you just need to slap your face to snap out of it."
        },
        {
          "phrase": "change of scenery",
          "translation": "cambio d'aria / di cenário",
          "type": "Noun Phrase",
          "example": "A quick walk outside provides a nice change of scenery."
        },
        {
          "phrase": "coping mechanism",
          "translation": "meccanismo di difesa / di adattamento",
          "type": "Noun Phrase",
          "example": "Listening to angry music is my primary coping mechanism."
        },
        {
          "phrase": "silver lining",
          "translation": "lato positivo",
          "type": "Idiom",
          "example": "Can you usually find the silver lining when things go wrong?"
        },
        {
          "phrase": "blow off steam",
          "translation": "sfogarsi",
          "type": "Idiom",
          "example": "I like to go for a run just to blow off steam."
        }
      ],
      "guidedQuestions": [
        "What is the fastest way to **snap out of it** when you feel miserable?",
        "Does a sudden **change of scenery** really impact your brain?",
        "Is complaining to friends a healthy **coping mechanism**?"
      ]
    },
    {
      "id": 289,
      "question": "If you could only listen to one album for the rest of your life, what would it be?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "all-time favorite",
          "translation": "preferito di tutti i tempi",
          "type": "Noun Phrase",
          "example": "That is undoubtedly my all-time favorite movie."
        },
        {
          "phrase": "stand the test of time",
          "translation": "resistere alla prova del tempo",
          "type": "Idiom",
          "example": "The Beatles' music completely stands the test of time."
        },
        {
          "phrase": "on repeat",
          "translation": "a ripetizione",
          "type": "Phrase",
          "example": "I have had this new song on repeat for three days."
        },
        {
          "phrase": "nostalgic",
          "translation": "nostalgico",
          "type": "Adjective",
          "example": "Listening to 2000s pop makes me incredibly nostalgic."
        },
        {
          "phrase": "skip a track",
          "translation": "saltare una traccia",
          "type": "Phrase",
          "example": "It is a perfect album; I never skip a track."
        }
      ],
      "guidedQuestions": [
        "Why do some songs **stand the test of time** while others fade?",
        "Have you ever completely ruined an **all-time favorite** song by playing it **on repeat**?",
        "What music makes you instantly feel **nostalgic** for your childhood?"
      ]
    },
    {
      "id": 290,
      "question": "Is it more important to be respected, or to be loved?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "mutual respect",
          "translation": "rispetto reciproco",
          "type": "Noun Phrase",
          "example": "Every healthy relationship must be built on mutual respect."
        },
        {
          "phrase": "people pleaser",
          "translation": "persona che cerca sempre di accontentare gli altri",
          "type": "Noun Phrase",
          "example": "As a people pleaser, she sacrifices her own needs completely."
        },
        {
          "phrase": "cross the line",
          "translation": "passare il limite",
          "type": "Idiom",
          "example": "Without respect, people will eventually cross the line."
        },
        {
          "phrase": "foundation",
          "translation": "fondamenta / base",
          "type": "Noun",
          "example": "Trust is the absolute foundation of love."
        },
        {
          "phrase": "dictate",
          "translation": "dettare / imporre",
          "type": "Verb",
          "example": "Do not let other people's opinions dictate your self-worth."
        }
      ],
      "guidedQuestions": [
        "Can love truly exist without **mutual respect**?",
        "Does being a **people pleaser** guarantee you will be loved?",
        "Why is respect considered the ultimate **foundation** of a professional career?"
      ]
    },
    {
      "id": 291,
      "question": "What is a seemingly weird rule you have for yourself?",
      "category": "Personal",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "strict code",
          "translation": "codice rigoroso",
          "type": "Noun Phrase",
          "example": "He lives by a highly strict code of ethics."
        },
        {
          "phrase": "non-negotiable",
          "translation": "non negoziabile",
          "type": "Adjective",
          "example": "Eight hours of sleep is absolutely non-negotiable for me."
        },
        {
          "phrase": "set boundaries",
          "translation": "stabilire dei limiti / confini",
          "type": "Phrase",
          "example": "You must learn to set boundaries with your employer."
        },
        {
          "phrase": "stick to my guns",
          "translation": "tenere duro (sulle proprie posizioni)",
          "type": "Idiom",
          "example": "Even when mocked, I will firmly stick to my guns."
        },
        {
          "phrase": "creature of habit",
          "translation": "abitudinario / animale abitudinario",
          "type": "Idiom",
          "example": "I am a total creature of habit when it comes to breakfast."
        }
      ],
      "guidedQuestions": [
        "What is one daily routine that is completely **non-negotiable** for you?",
        "Why is it so difficult for some people to **set boundaries**?",
        "Are you a **creature of habit**, or do you prefer total chaos?"
      ]
    },
    {
      "id": 292,
      "question": "If you were given one million dollars right now, what is the first purely selfish thing you would buy?",
      "category": "Dreams",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "spare no expense",
          "translation": "non badare a spese",
          "type": "Phrase",
          "example": "I would spare no expense on building a home cinema."
        },
        {
          "phrase": "guilty pleasure",
          "translation": "piacere inconfessabile",
          "type": "Noun Phrase",
          "example": "Buying designer shoes is a massive guilty pleasure."
        },
        {
          "phrase": "splurge on",
          "translation": "sperperare in / fare una pazzia per",
          "type": "Phrasal Verb",
          "example": "I would immediately splurge on a first-class ticket to Tokyo."
        },
        {
          "phrase": "materialistic",
          "translation": "materialista",
          "type": "Adjective",
          "example": "Is it materialistic to want a beautiful, expensive car?"
        },
        {
          "phrase": "treat myself",
          "translation": "concedermi uno sfizio",
          "type": "Phrase",
          "example": "After finishing exams, I like to treat myself to a fancy dinner."
        }
      ],
      "guidedQuestions": [
        "What item would you instantly **splurge on** without hesitation?",
        "Do people judge others too harshly for being slightly **materialistic**?",
        "If you could **spare no expense**, where would you travel tomorrow?"
      ]
    },
    {
      "id": 293,
      "question": "Do you believe the universe cares about human affairs, or are we entirely on our own?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "insignificant",
          "translation": "insignificante",
          "type": "Adjective",
          "example": "Looking at the stars makes humanity feel totally insignificant."
        },
        {
          "phrase": "grand scheme of things",
          "translation": "nel grande schema delle cose",
          "type": "Idiom",
          "example": "In the grand scheme of things, our problems are incredibly tiny."
        },
        {
          "phrase": "destiny",
          "translation": "destino",
          "type": "Noun",
          "example": "Do you think meeting her was destiny or random chance?"
        },
        {
          "phrase": "cold and indifferent",
          "translation": "freddo e indifferente",
          "type": "Phrase",
          "example": "Many believe the cosmos is vast, cold, and entirely indifferent."
        },
        {
          "phrase": "seek meaning",
          "translation": "cercare il senso",
          "type": "Phrase",
          "example": "Humans are biologically wired to constantly seek meaning."
        }
      ],
      "guidedQuestions": [
        "Does feeling **insignificant** in the universe depress you or comfort you?",
        "**In the grand scheme of things**, do our daily choices really matter?",
        "Is nature inherently cruel, or just **cold and indifferent**?"
      ]
    },
    {
      "id": 294,
      "question": "What is a small detail you notice about someone the moment you meet them?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "first impression",
          "translation": "prima impressione",
          "type": "Noun Phrase",
          "example": "You never get a second chance to make a first impression."
        },
        {
          "phrase": "body language",
          "translation": "linguaggio del corpo",
          "type": "Noun Phrase",
          "example": "Her closed-off body language heavily suggested she was angry."
        },
        {
          "phrase": "eye contact",
          "translation": "contatto visivo",
          "type": "Noun Phrase",
          "example": "Maintaining firm eye contact implies great confidence."
        },
        {
          "phrase": "vibe",
          "translation": "energia (aura)",
          "type": "Noun",
          "example": "He gave off a very weird, uncomfortable vibe immediately."
        },
        {
          "phrase": "pay attention to",
          "translation": "prestare attenzione a",
          "type": "Phrase",
          "example": "Do you pay attention to the shoes people wear?"
        }
      ],
      "guidedQuestions": [
        "How reliable is a gut-feeling **first impression**?",
        "Do you actively **pay attention to** someone's **body language**?",
        "Is lack of **eye contact** a sign of disrespect or just shyness?"
      ]
    },
    {
      "id": 300,
      "question": "What is a piece of advice you often give but rarely follow yourself?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "easier said than done",
          "translation": "più facile a dirsi che a farsi",
          "type": "Idiom",
          "example": "Telling someone to calm down is always easier said than done."
        },
        {
          "phrase": "practice what you preach",
          "translation": "predicare bene e razzolare male (mancare di coerenza)",
          "type": "Idiom",
          "example": "You must learn to practice what you preach."
        },
        {
          "phrase": "hypocrite",
          "translation": "ipocrita",
          "type": "Noun",
          "example": "I felt like a massive hypocrite giving her relationship advice."
        },
        {
          "phrase": "take to heart",
          "translation": "prendere a cuore / sul serio",
          "type": "Phrase",
          "example": "Did you actually take that harsh criticism to heart?"
        },
        {
          "phrase": "blind spot",
          "translation": "punto cieco (difetto non visto)",
          "type": "Noun Phrase",
          "example": "We all have a massive blind spot regarding our own flaws."
        }
      ],
      "guidedQuestions": [
        "Why is it so incredibly hard to **practice what you preach**?",
        "Do you think having a **blind spot** is entirely natural?",
        "If advice is **easier said than done**, is it still good advice?"
      ]
    },
    {
      "id": 301,
      "question": "Do you think artificial intelligence will eventually understand human emotion?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "mimic",
          "translation": "imitare",
          "type": "Verb",
          "example": "An algorithm can easily mimic sadness, but does it feel it?"
        },
        {
          "phrase": "sentient",
          "translation": "senziente",
          "type": "Adjective",
          "example": "If an AI becomes fully sentient, do we have to give it human rights?"
        },
        {
          "phrase": "soul",
          "translation": "anima",
          "type": "Noun",
          "example": "Many argue that the soul is what separates humans from machines."
        },
        {
          "phrase": "uncanny valley",
          "translation": "zona perturbante (teoria)",
          "type": "Noun Phrase",
          "example": "The robot falls into the uncanny valley because it looks too human."
        },
        {
          "phrase": "boundless",
          "translation": "sconfinato",
          "type": "Adjective",
          "example": "The boundless potential of AI is both exciting and terrifying."
        }
      ],
      "guidedQuestions": [
        "Is it inevitable that computers become fully **sentient**?",
        "Can a machine ever replicate a human **soul**?",
        "If a robot can perfectly **mimic** love, is it actually love?"
      ]
    },
    {
      "id": 302,
      "question": "If you could fast forward to the end of your life and watch a 5-minute highlight reel, would you?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "spoiler alert",
          "translation": "allerta spoiler",
          "type": "Noun Phrase",
          "example": "Knowing the ending is the ultimate spoiler alert for life."
        },
        {
          "phrase": "journey over destination",
          "translation": "il viaggio più della destinazione",
          "type": "Phrase",
          "example": "I firmly believe the journey is significantly more important than the destination."
        },
        {
          "phrase": "inevitability",
          "translation": "inevitabilità",
          "type": "Noun",
          "example": "The inevitability of death makes life incredibly precious."
        },
        {
          "phrase": "regret",
          "translation": "rimpianto / rimpiangere",
          "type": "Noun/Verb",
          "example": "Would that highlight reel fill you with immense regret?"
        },
        {
          "phrase": "appreciate the present",
          "translation": "apprezzare il presente",
          "type": "Phrase",
          "example": "Knowing the future would make it impossible to appreciate the present."
        }
      ],
      "guidedQuestions": [
        "Would seeing an early death fill you with **regret** or peace?",
        "Does knowing the ending ruin the ability to **appreciate the present**?",
        "Do you truly value the **journey over destination**?"
      ]
    },
    {
      "id": 303,
      "question": "What is your absolute favorite smell in the whole world?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "whiff",
          "translation": "folata / zaffata",
          "type": "Noun",
          "example": "I caught a brief whiff of fresh coffee from the bakery."
        },
        {
          "phrase": "trigger a memory",
          "translation": "scatenare un ricordo",
          "type": "Phrase",
          "example": "The smell of pine needles can instantly trigger a memory."
        },
        {
          "phrase": "intoxicating",
          "translation": "inebriante",
          "type": "Adjective",
          "example": "The scent of wild jasmine on a summer night is intoxicating."
        },
        {
          "phrase": "nostalgia",
          "translation": "nostalgia",
          "type": "Noun",
          "example": "The smell of old books brings me an intense sense of nostalgia."
        },
        {
          "phrase": "comforting",
          "translation": "confortante",
          "type": "Adjective",
          "example": "There is nothing more comforting than the smell of baking bread."
        }
      ],
      "guidedQuestions": [
        "Can a random **whiff** of perfume completely **trigger a memory**?",
        "Why is the smell of rain so universally **comforting**?",
        "What scent gives you the deepest feeling of childhood **nostalgia**?"
      ]
    },
    {
      "id": 304,
      "question": "What is an assumption you made about adult life when you were kids that turned out to be wildly inaccurate?",
      "category": "Personal",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "have it all figured out",
          "translation": "aver capito tutto / avere il controllo",
          "type": "Idiom",
          "example": "Does anyone really have it all figured out?"
        },
        {
          "phrase": "rude awakening",
          "translation": "brusco risveglio",
          "type": "Noun Phrase",
          "example": "Paying taxes for the first time was a very rude awakening."
        },
        {
          "phrase": "wing it",
          "translation": "improvvisare",
          "type": "Idiom",
          "example": "The terrifying secret is that most adults are just winging it."
        },
        {
          "phrase": "disillusioned",
          "translation": "disilluso",
          "type": "Adjective",
          "example": "Many young graduates quickly become highly disillusioned."
        },
        {
          "phrase": "on autopilot",
          "translation": "col pilota automatico",
          "type": "Idiom",
          "example": "Sometimes I feel like I am just living my life on autopilot."
        }
      ],
      "guidedQuestions": [
        "When was your biggest **rude awakening** regarding adulthood?",
        "Do you think anyone actually **has it all figured out**?",
        "How do we avoid living the next 30 years entirely **on autopilot**?"
      ]
    },
    {
      "id": 305,
      "question": "Do you believe there is such a thing as a truly selfless act?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "selfish motive",
          "translation": "motivo egoistico",
          "type": "Noun Phrase",
          "example": "Even giving money to a beggar might stem from a selfish motive."
        },
        {
          "phrase": "altruism",
          "translation": "altruismo",
          "type": "Noun",
          "example": "Biological altruism exists in many wild animal species."
        },
        {
          "phrase": "ego boost",
          "translation": "innalzamento dell'ego",
          "type": "Noun Phrase",
          "example": "Posting your charity work online gives a massive ego boost."
        },
        {
          "phrase": "wired to",
          "translation": "programmato per (biologicamente)",
          "type": "Phrase",
          "example": "Humans are biologically wired to ultimately protect themselves."
        },
        {
          "phrase": "hidden agenda",
          "translation": "secondo fine",
          "type": "Noun Phrase",
          "example": "Why do we always assume politicians have a deep hidden agenda?"
        }
      ],
      "guidedQuestions": [
        "If helping someone gives you an **ego boost**, is it still **altruism**?",
        "Are humans naturally **wired to** care for strangers?",
        "Can we ever do something kind without a **hidden agenda**?"
      ]
    },
    {
      "id": 306,
      "question": "What was the most stressful situation you eventually learned to laugh at?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "nightmare",
          "translation": "incubo",
          "type": "Noun",
          "example": "Getting stuck at the airport for two days was an absolute nightmare."
        },
        {
          "phrase": "silver lining",
          "translation": "lato positivo",
          "type": "Idiom",
          "example": "The only silver lining was that I got a funny story out of it."
        },
        {
          "phrase": "laugh it off",
          "translation": "farsela passare con una risata",
          "type": "Phrasal Verb",
          "example": "We were furious at the time, but now we just laugh it off."
        },
        {
          "phrase": "hindsight",
          "translation": "col senno di poi",
          "type": "Noun",
          "example": "In hindsight, it was actually a highly comedic sequence of events."
        },
        {
          "phrase": "overreact",
          "translation": "reagire in modo spropositato",
          "type": "Verb",
          "example": "I tend to completely overreact to minor inconveniences."
        }
      ],
      "guidedQuestions": [
        "Have you ever completely **overreacted** to a minor failure?",
        "Is it true that tragedy plus time equals comedy in **hindsight**?",
        "How quickly do you usually find the **silver lining**?"
      ]
    },
    {
      "id": 307,
      "question": "What is your strangest irrational fear?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "irrational",
          "translation": "irrazionale",
          "type": "Adjective",
          "example": "I have a completely irrational fear of large moths."
        },
        {
          "phrase": "give the creeps",
          "translation": "fare venire i brividi",
          "type": "Idiom",
          "example": "Those old porcelain dolls give me the serious creeps."
        },
        {
          "phrase": "phobia",
          "translation": "fobia",
          "type": "Noun",
          "example": "She developed an intense phobia of crowded spaces."
        },
        {
          "phrase": "freak out",
          "translation": "andare fuori di testa / farsi prendere dal panico",
          "type": "Phrasal Verb",
          "example": "I heavily freak out whenever an airplane shakes."
        },
        {
          "phrase": "paranoia",
          "translation": "paranoia",
          "type": "Noun",
          "example": "Is checking the door lock five times caution or mild paranoia?"
        }
      ],
      "guidedQuestions": [
        "Does thinking about the deep ocean **give you the creeps**?",
        "Why do completely **irrational** fears persist in adults?",
        "Has a childhood fear eventually turned into a lifelong **phobia**?"
      ]
    },
    {
      "id": 308,
      "question": "Do you think society is currently becoming more lonely or more connected?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "paradox",
          "translation": "paradosso",
          "type": "Noun",
          "example": "The great paradox is that we have social media but zero friends."
        },
        {
          "phrase": "superficial",
          "translation": "superficiale",
          "type": "Adjective",
          "example": "Online interactions are often incredibly superficial."
        },
        {
          "phrase": "epidemic of isolation",
          "translation": "epidemia di isolamento",
          "type": "Noun Phrase",
          "example": "We are currently living through a silent epidemic of isolation."
        },
        {
          "phrase": "echo chamber",
          "translation": "cassa di risonanza (bolla)",
          "type": "Noun Phrase",
          "example": "The internet just traps people in a comforting echo chamber."
        },
        {
          "phrase": "crave connection",
          "translation": "bramare connessione",
          "type": "Collocation",
          "example": "As humans, we biologically crave deep, meaningful connection."
        }
      ],
      "guidedQuestions": [
        "Why does a highly **superficial** network leave us feeling empty?",
        "Are we living in a dangerous **epidemic of isolation**?",
        "Do we use social media to **crave connection** or avoid it?"
      ]
    },
    {
      "id": 309,
      "question": "What is a major goal you successfully achieved, only to discover it didn't make you happy?",
      "category": "Dreams",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "letdown",
          "translation": "delusione",
          "type": "Noun",
          "example": "Reaching the summit was honestly a massive letdown for him."
        },
        {
          "phrase": "anticipation",
          "translation": "anticipazione / attesa",
          "type": "Noun",
          "example": "Often, the anticipation is vastly better than the reward."
        },
        {
          "phrase": "empty victory",
          "translation": "vittoria vuota",
          "type": "Noun Phrase",
          "example": "Getting promoted but losing my friends felt like a totally empty victory."
        },
        {
          "phrase": "misplaced priorities",
          "translation": "priorità sbagliate",
          "type": "Noun Phrase",
          "example": "Focusing solely on money reveals highly misplaced priorities."
        },
        {
          "phrase": "soul-searching",
          "translation": "introspezione",
          "type": "Noun",
          "example": "After the project failed, I had to do some serious soul-searching."
        }
      ],
      "guidedQuestions": [
        "Is the **anticipation** of an event always better than the reality?",
        "Have you ever experienced a completely **empty victory**?",
        "When did you realize you had heavily **misplaced priorities**?"
      ]
    },
    {
      "id": 310,
      "question": "If there were absolutely zero consequences, what mildly illegal thing would you do today?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "consequence",
          "translation": "conseguenza",
          "type": "Noun",
          "example": "Actions online usually have zero real-world consequences."
        },
        {
          "phrase": "bend the rules",
          "translation": "piegare le regole / chiudere un occhio sulle regole",
          "type": "Idiom",
          "example": "Sometimes you have to bend the rules to get things done securely."
        },
        {
          "phrase": "victimless crime",
          "translation": "crimine senza vittime",
          "type": "Noun Phrase",
          "example": "Jaywalking is widely considered a victimless crime."
        },
        {
          "phrase": "thrill-seeker",
          "translation": "amante del brivido",
          "type": "Noun Phrase",
          "example": "Are you a natural thrill-seeker or generally highly cautious?"
        },
        {
          "phrase": "rebellious",
          "translation": "ribelle",
          "type": "Adjective",
          "example": "Stealing an extra pastry felt like a very rebellious act."
        }
      ],
      "guidedQuestions": [
        "Are you the type of person to **bend the rules**?",
        "Do you think digital piracy is a completely **victimless crime**?",
        "Does a lack of **consequences** turn good people evil?"
      ]
    },
    {
      "id": 311,
      "question": "Do you think art is essentially a luxury for the rich, or a basic necessity for the human soul?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "intrinsic value",
          "translation": "valore intrinseco",
          "type": "Noun Phrase",
          "example": "Music has massive intrinsic value beyond its commercial price."
        },
        {
          "phrase": "elitist",
          "translation": "elitario",
          "type": "Adjective",
          "example": "The modern fine art market often feels incredibly elitist."
        },
        {
          "phrase": "food for the soul",
          "translation": "nutrimento per l'anima",
          "type": "Idiom",
          "example": "Poetry might not pay the bills, but it is food for the soul."
        },
        {
          "phrase": "commodify",
          "translation": "mercificare",
          "type": "Verb",
          "example": "Should we heavily commodify creative expression?"
        },
        {
          "phrase": "frivolous",
          "translation": "frivolo",
          "type": "Adjective",
          "example": "Some politicians view arts funding as a totally frivolous expense."
        }
      ],
      "guidedQuestions": [
        "Does the expensive art market make the concept of art **elitist**?",
        "Why do some people view painting as a totally **frivolous** career?",
        "Is storytelling the ultimate **food for the soul**?"
      ]
    },
    {
      "id": 312,
      "question": "What is a simple thing you do that instantly makes you feel like your life is together?",
      "category": "Daily",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "on top of things",
          "translation": "avere il controllo della situazione",
          "type": "Idiom",
          "example": "Making my bed every morning makes me feel absolutely on top of things."
        },
        {
          "phrase": "momentum",
          "translation": "slancio",
          "type": "Noun",
          "example": "Starting the day with exercise builds incredible momentum."
        },
        {
          "phrase": "clutter",
          "translation": "disordine",
          "type": "Noun",
          "example": "Physical clutter almost always leads to severe mental clutter."
        },
        {
          "phrase": "grounding",
          "translation": "radicante / che ti fa stare coi piedi per terra",
          "type": "Adjective",
          "example": "Watering my plants is a surprisingly grounding daily ritual."
        },
        {
          "phrase": "small win",
          "translation": "piccola vittoria",
          "type": "Noun Phrase",
          "example": "Getting up on the first alarm is a crucial small win."
        }
      ],
      "guidedQuestions": [
        "How heavily does physical **clutter** affect your mental health?",
        "What is your favorite highly **grounding** habit?",
        "Does securing a **small win** early give you daily **momentum**?"
      ]
    },
    {
      "id": 313,
      "question": "When did you finally forgive someone who never formally apologized to you?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "hold a grudge",
          "translation": "portare rancore",
          "type": "Idiom",
          "example": "Choosing to hold a grudge is like drinking poison."
        },
        {
          "phrase": "closure",
          "translation": "chiusura (psicologica)",
          "type": "Noun",
          "example": "You cannot always wait for them to give you closure."
        },
        {
          "phrase": "make peace with",
          "translation": "fare pace con / accettare",
          "type": "Phrase",
          "example": "I had to eventually make peace with the painful reality."
        },
        {
          "phrase": "let go of the past",
          "translation": "lasciar andare il passato",
          "type": "Phrase",
          "example": "It takes immense strength to truly let go of the past."
        },
        {
          "phrase": "resentment",
          "translation": "risentimento",
          "type": "Noun",
          "example": "Deep resentment will slowly destroy your own mental health."
        }
      ],
      "guidedQuestions": [
        "Why is it so harmful to **hold a grudge** for years?",
        "Is it possible to find internal **closure** without an apology?",
        "How do you successfully **make peace with** a broken friendship?"
      ]
    },
    {
      "id": 314,
      "question": "If you found out you were a character in a simulation, what is the first thing you would do?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "mind-bending",
          "translation": "da far girare la testa (sconvolgente)",
          "type": "Adjective",
          "example": "The ending of that movie was a totally mind-bending experience."
        },
        {
          "phrase": "glitch in the matrix",
          "translation": "falla nel sistema",
          "type": "Idiom",
          "example": "Experiencing heavy déjà vu feels like a bizarre glitch in the matrix."
        },
        {
          "phrase": "free will",
          "translation": "libero arbitrio",
          "type": "Noun Phrase",
          "example": "Does human free will exist if someone else programmed us?"
        },
        {
          "phrase": "nihilistic",
          "translation": "nichilista",
          "type": "Adjective",
          "example": "Knowing the truth might lead to an intensely nihilistic spiral."
        },
        {
          "phrase": "embrace the absurdity",
          "translation": "accettare l'assurdità",
          "type": "Phrase",
          "example": "If nothing is real, we must simply embrace the absurdity."
        }
      ],
      "guidedQuestions": [
        "Would losing your **free will** completely break your mind?",
        "How often do you experience a surreal **glitch in the matrix**?",
        "Is it healthier to panic or wildly **embrace the absurdity**?"
      ]
    },
    {
      "id": 315,
      "question": "What would your neighbourhood lose if you moved away tomorrow?",
      "category": "Community",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "leave a gap",
          "type": "Idiom",
          "translation": "lasciare un vuoto",
          "example": "Would you leave a gap in your street, or would nobody notice?"
        },
        {
          "phrase": "put down roots",
          "type": "Idiom",
          "translation": "mettere radici",
          "example": "How long does it take you to put down roots somewhere new?"
        },
        {
          "phrase": "look out for each other",
          "type": "Phrase",
          "translation": "badare gli uni agli altri",
          "example": "Do the people on your street look out for each other?"
        },
        {
          "phrase": "a familiar face",
          "type": "Noun Phrase",
          "translation": "un volto familiare",
          "example": "Is there a familiar face you would genuinely miss?"
        },
        {
          "phrase": "take something for granted",
          "type": "Idiom",
          "translation": "dare qualcosa per scontato",
          "example": "We tend to take our neighbours for granted until we move."
        }
      ],
      "guidedQuestions": [
        "How long does it take you to **put down roots** in a new place?",
        "Do the people around you genuinely **look out for each other**?",
        "Which **familiar face** would you miss the most?"
      ]
    },
    {
      "id": 316,
      "question": "Is it possible to belong somewhere you were not born?",
      "category": "Community",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "feel at home",
          "type": "Phrase",
          "translation": "sentirsi a casa",
          "example": "How long did it take you to feel at home there?"
        },
        {
          "phrase": "an outsider",
          "type": "Noun",
          "translation": "un estraneo",
          "example": "Is there anywhere you will always be an outsider?"
        },
        {
          "phrase": "fit in",
          "type": "Phrasal Verb",
          "translation": "integrarsi",
          "example": "Did you have to change to fit in, or were you accepted as you were?"
        },
        {
          "phrase": "a sense of belonging",
          "type": "Noun Phrase",
          "translation": "un senso di appartenenza",
          "example": "Where do you get your strongest sense of belonging?"
        },
        {
          "phrase": "earn your place",
          "type": "Phrase",
          "translation": "guadagnarsi il proprio posto",
          "example": "Do newcomers have to earn their place, or should belonging be given freely?"
        }
      ],
      "guidedQuestions": [
        "How long did it take you to **feel at home** where you live now?",
        "Have you ever had to change yourself to **fit in**?",
        "Should newcomers have to **earn your place** in a community?"
      ]
    },
    {
      "id": 317,
      "question": "When was the last time a stranger helped you for no reason?",
      "category": "Community",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "go out of your way",
          "type": "Idiom",
          "translation": "farsi in quattro",
          "example": "Someone went out of their way to help me and asked for nothing."
        },
        {
          "phrase": "a random act of kindness",
          "type": "Noun Phrase",
          "translation": "un gesto gentile spontaneo",
          "example": "What was the last random act of kindness you received?"
        },
        {
          "phrase": "pay it forward",
          "type": "Phrase",
          "translation": "restituire il favore ad altri",
          "example": "Did you pay it forward to someone else afterwards?"
        },
        {
          "phrase": "restore your faith",
          "type": "Phrase",
          "translation": "restituire fiducia",
          "example": "That moment can restore your faith in people."
        },
        {
          "phrase": "lend a hand",
          "type": "Idiom",
          "translation": "dare una mano",
          "example": "Are you quick to lend a hand to someone you do not know?"
        }
      ],
      "guidedQuestions": [
        "When did someone last **go out of your way** for you?",
        "Do you usually **pay it forward** afterwards?",
        "How quickly do you **lend a hand** to a stranger?"
      ]
    },
    {
      "id": 318,
      "question": "Should you be loyal to a place, or only to the people in it?",
      "category": "Community",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "loyalty",
          "type": "Noun",
          "translation": "lealtà",
          "example": "Does loyalty to a place make any real sense?"
        },
        {
          "phrase": "hometown pride",
          "type": "Noun Phrase",
          "translation": "orgoglio per la propria città",
          "example": "Do you have any hometown pride left?"
        },
        {
          "phrase": "move on",
          "type": "Phrasal Verb",
          "translation": "andare avanti",
          "example": "Is it disloyal to move on from where you grew up?"
        },
        {
          "phrase": "the ties that bind",
          "type": "Idiom",
          "translation": "i legami che uniscono",
          "example": "What are the ties that bind you to your town?"
        },
        {
          "phrase": "rooted",
          "type": "Adjective",
          "translation": "radicato",
          "example": "Do you feel rooted anywhere, or are you happy drifting?"
        }
      ],
      "guidedQuestions": [
        "Do you still have any **hometown pride**?",
        "Is it disloyal to **move on** from where you grew up?",
        "What are **the ties that bind** you to a place?"
      ]
    },
    {
      "id": 319,
      "question": "What is one thing your community does badly that everyone accepts?",
      "category": "Community",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "turn a blind eye",
          "type": "Idiom",
          "translation": "chiudere un occhio",
          "example": "Why does everybody turn a blind eye to it?"
        },
        {
          "phrase": "the way things are done",
          "type": "Phrase",
          "translation": "il modo in cui si fanno le cose",
          "example": "Nobody questions the way things are done around here."
        },
        {
          "phrase": "put up with",
          "type": "Phrasal Verb",
          "translation": "sopportare",
          "example": "What do you put up with that a visitor would find strange?"
        },
        {
          "phrase": "speak up",
          "type": "Phrasal Verb",
          "translation": "farsi sentire",
          "example": "Would you speak up, or keep quiet to avoid trouble?"
        },
        {
          "phrase": "collective denial",
          "type": "Noun Phrase",
          "translation": "negazione collettiva",
          "example": "Is it laziness, or genuine collective denial?"
        }
      ],
      "guidedQuestions": [
        "Why does everyone **turn a blind eye** to it?",
        "What do you **put up with** that a visitor would find strange?",
        "Would you actually **speak up** about it?"
      ]
    },
    {
      "id": 320,
      "question": "Do you owe anything to people you will never meet?",
      "category": "Community",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "the greater good",
          "type": "Noun Phrase",
          "translation": "il bene comune",
          "example": "Would you sacrifice comfort for the greater good?"
        },
        {
          "phrase": "future generations",
          "type": "Noun Phrase",
          "translation": "le generazioni future",
          "example": "What do we actually owe future generations?"
        },
        {
          "phrase": "a moral duty",
          "type": "Noun Phrase",
          "translation": "un dovere morale",
          "example": "Is it a moral duty, or simply a nice idea?"
        },
        {
          "phrase": "ripple effect",
          "type": "Noun Phrase",
          "translation": "effetto a catena",
          "example": "Small choices have a ripple effect you will never see."
        },
        {
          "phrase": "abstract",
          "type": "Adjective",
          "translation": "astratto",
          "example": "It is hard to care about something this abstract."
        }
      ],
      "guidedQuestions": [
        "Would you give up comfort for **the greater good**?",
        "What do we owe **future generations**?",
        "Can you feel the **ripple effect** of your own choices?"
      ]
    },
    {
      "id": 321,
      "question": "Has the internet made your local community stronger or weaker?",
      "category": "Community",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "bring people together",
          "type": "Phrase",
          "translation": "unire le persone",
          "example": "Does it genuinely bring people together, or just simulate it?"
        },
        {
          "phrase": "drift apart",
          "type": "Phrasal Verb",
          "translation": "allontanarsi",
          "example": "Neighbours drift apart when everything happens on a screen."
        },
        {
          "phrase": "a double-edged sword",
          "type": "Idiom",
          "translation": "un'arma a doppio taglio",
          "example": "Local group chats are a double-edged sword."
        },
        {
          "phrase": "face-to-face",
          "type": "Adjective",
          "translation": "faccia a faccia",
          "example": "How much face-to-face contact do you have in a normal week?"
        },
        {
          "phrase": "echo chamber",
          "type": "Noun Phrase",
          "translation": "camera dell'eco",
          "example": "Even a local forum can become an echo chamber."
        }
      ],
      "guidedQuestions": [
        "Does it really **bring people together**?",
        "Have your neighbours started to **drift apart**?",
        "How much **face-to-face** contact do you actually get?"
      ]
    },
    {
      "id": 322,
      "question": "What tradition in your area deserves to disappear?",
      "category": "Community",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "outdated",
          "type": "Adjective",
          "translation": "superato",
          "example": "Which local tradition feels completely outdated to you?"
        },
        {
          "phrase": "hand down",
          "type": "Phrasal Verb",
          "translation": "tramandare",
          "example": "Should we hand down every tradition without question?"
        },
        {
          "phrase": "for the sake of it",
          "type": "Idiom",
          "translation": "tanto per farlo",
          "example": "We keep doing it purely for the sake of it."
        },
        {
          "phrase": "sacred cow",
          "type": "Idiom",
          "translation": "vacca sacra (tabù intoccabile)",
          "example": "Every town has a sacred cow nobody dares criticise."
        },
        {
          "phrase": "let go of",
          "type": "Phrasal Verb",
          "translation": "lasciar andare",
          "example": "What would your town never let go of?"
        }
      ],
      "guidedQuestions": [
        "Which local custom feels **outdated** to you?",
        "Should we **hand down** every tradition without question?",
        "What is the **sacred cow** nobody dares criticise?"
      ]
    },
    {
      "id": 323,
      "question": "Would you rather live somewhere beautiful and cold, or ordinary and warm?",
      "category": "Community",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "welcoming",
          "type": "Adjective",
          "translation": "accogliente",
          "example": "Is your town welcoming to people who just arrived?"
        },
        {
          "phrase": "stunning",
          "type": "Adjective",
          "translation": "stupendo",
          "example": "The scenery is stunning but nobody speaks to you."
        },
        {
          "phrase": "warmth",
          "type": "Noun",
          "translation": "calore umano",
          "example": "Would you trade beauty for genuine warmth?"
        },
        {
          "phrase": "settle for",
          "type": "Phrasal Verb",
          "translation": "accontentarsi di",
          "example": "Would you settle for an ordinary town full of good people?"
        },
        {
          "phrase": "grow on you",
          "type": "Phrasal Verb",
          "translation": "piacere col tempo",
          "example": "Some places really grow on you after a year."
        }
      ],
      "guidedQuestions": [
        "Is your town genuinely **welcoming**?",
        "Would you trade beauty for human **warmth**?",
        "Has a place ever **grow on you** unexpectedly?"
      ]
    },
    {
      "id": 324,
      "question": "Who in your life do you rely on that you have never thanked?",
      "category": "Community",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "take for granted",
          "type": "Idiom",
          "translation": "dare per scontato",
          "example": "Who do you take for granted every single week?"
        },
        {
          "phrase": "behind the scenes",
          "type": "Idiom",
          "translation": "dietro le quinte",
          "example": "Someone works behind the scenes so your life runs smoothly."
        },
        {
          "phrase": "unsung hero",
          "type": "Noun Phrase",
          "translation": "eroe silenzioso",
          "example": "Who is the unsung hero of your daily routine?"
        },
        {
          "phrase": "long overdue",
          "type": "Adjective",
          "translation": "atteso da tempo",
          "example": "That thank-you is long overdue."
        },
        {
          "phrase": "count on",
          "type": "Phrasal Verb",
          "translation": "contare su",
          "example": "Who can you always count on without asking?"
        }
      ],
      "guidedQuestions": [
        "Who do you **take for granted** every week?",
        "Who is the **unsung hero** of your routine?",
        "Who can you always **count on**?"
      ]
    },
    {
      "id": 325,
      "question": "Is it selfish to leave the place that raised you?",
      "category": "Community",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "brain drain",
          "type": "Noun Phrase",
          "translation": "fuga di cervelli",
          "example": "Is brain drain the fault of the people who leave?"
        },
        {
          "phrase": "give back",
          "type": "Phrasal Verb",
          "translation": "restituire",
          "example": "Do you have any duty to give back to where you grew up?"
        },
        {
          "phrase": "opportunity",
          "type": "Noun",
          "translation": "opportunità",
          "example": "Should you follow opportunity wherever it goes?"
        },
        {
          "phrase": "guilt",
          "type": "Noun",
          "translation": "senso di colpa",
          "example": "Do you carry any guilt about leaving?"
        },
        {
          "phrase": "spread your wings",
          "type": "Idiom",
          "translation": "spiccare il volo",
          "example": "At some point you have to spread your wings."
        }
      ],
      "guidedQuestions": [
        "Whose fault is **brain drain**, really?",
        "Do you have a duty to **give back**?",
        "Is it wrong to **spread your wings** and go?"
      ]
    },
    {
      "id": 326,
      "question": "What would make you volunteer every week for a year?",
      "category": "Community",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "give up your time",
          "type": "Phrase",
          "translation": "dedicare il proprio tempo",
          "example": "What cause would make you give up your time every week?"
        },
        {
          "phrase": "make a difference",
          "type": "Idiom",
          "translation": "fare la differenza",
          "example": "Do you need to see that you make a difference?"
        },
        {
          "phrase": "burn out",
          "type": "Phrasal Verb",
          "translation": "esaurirsi",
          "example": "Volunteers often burn out within a few months."
        },
        {
          "phrase": "hands-on",
          "type": "Adjective",
          "translation": "pratico, sul campo",
          "example": "Would you prefer hands-on work or organising behind a desk?"
        },
        {
          "phrase": "a worthy cause",
          "type": "Noun Phrase",
          "translation": "una causa nobile",
          "example": "What counts as a worthy cause for you?"
        }
      ],
      "guidedQuestions": [
        "What would make you **give up your time** weekly?",
        "Do you need proof that you **make a difference**?",
        "How quickly would you **burn out**?"
      ]
    },
    {
      "id": 327,
      "question": "Do people behave better when everyone knows their name?",
      "category": "Community",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "anonymity",
          "type": "Noun",
          "translation": "anonimato",
          "example": "Does anonymity bring out the worst in people?"
        },
        {
          "phrase": "accountability",
          "type": "Noun",
          "translation": "responsabilità",
          "example": "Small towns have built-in accountability."
        },
        {
          "phrase": "reputation",
          "type": "Noun",
          "translation": "reputazione",
          "example": "How much of your behaviour is protecting your reputation?"
        },
        {
          "phrase": "get away with",
          "type": "Phrasal Verb",
          "translation": "farla franca",
          "example": "In a city you can get away with far more."
        },
        {
          "phrase": "keep tabs on",
          "type": "Idiom",
          "translation": "tenere d'occhio",
          "example": "Is it comforting or suffocating when neighbours keep tabs on you?"
        }
      ],
      "guidedQuestions": [
        "Does **anonymity** bring out the worst in us?",
        "How much of your behaviour protects your **reputation**?",
        "Is it comforting when people **keep tabs on** you?"
      ]
    },
    {
      "id": 328,
      "question": "What is one thing your family does that you will never repeat?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "break the cycle",
          "type": "Idiom",
          "translation": "spezzare il ciclo",
          "example": "How hard is it to break the cycle you grew up in?"
        },
        {
          "phrase": "pass down",
          "type": "Phrasal Verb",
          "translation": "tramandare",
          "example": "Families pass down habits without ever discussing them."
        },
        {
          "phrase": "sweep under the rug",
          "type": "Idiom",
          "translation": "nascondere sotto il tappeto",
          "example": "What does your family sweep under the rug?"
        },
        {
          "phrase": "a sore subject",
          "type": "Noun Phrase",
          "translation": "un tasto dolente",
          "example": "Every family has one sore subject at dinner."
        },
        {
          "phrase": "deliberate",
          "type": "Adjective",
          "translation": "intenzionale",
          "example": "Change has to be deliberate, or the old pattern returns."
        }
      ],
      "guidedQuestions": [
        "How hard is it to **break the cycle**?",
        "What does your family **sweep under the rug**?",
        "What is the **sore subject** at your table?"
      ]
    },
    {
      "id": 329,
      "question": "Do you know your parents as people, or only as parents?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "see someone in a new light",
          "type": "Idiom",
          "translation": "vedere qualcuno sotto una nuova luce",
          "example": "When did you first see your mother in a new light?"
        },
        {
          "phrase": "let your guard down",
          "type": "Idiom",
          "translation": "abbassare la guardia",
          "example": "Do your parents ever let their guard down with you?"
        },
        {
          "phrase": "a whole life before",
          "type": "Phrase",
          "translation": "tutta una vita prima",
          "example": "They had a whole life before you existed."
        },
        {
          "phrase": "open up",
          "type": "Phrasal Verb",
          "translation": "aprirsi",
          "example": "What would make your father finally open up?"
        },
        {
          "phrase": "role",
          "type": "Noun",
          "translation": "ruolo",
          "example": "Is it possible to step outside the role of parent and child?"
        }
      ],
      "guidedQuestions": [
        "When did you **see** a parent **in a new light**?",
        "Do they ever **let your guard down** with you?",
        "What would make them **open up**?"
      ]
    },
    {
      "id": 330,
      "question": "Is blood really thicker than water?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "blood is thicker than water",
          "type": "Idiom",
          "translation": "il sangue non è acqua",
          "example": "Do you actually believe blood is thicker than water?"
        },
        {
          "phrase": "chosen family",
          "type": "Noun Phrase",
          "translation": "famiglia scelta",
          "example": "Is your chosen family closer than your relatives?"
        },
        {
          "phrase": "obligation",
          "type": "Noun",
          "translation": "obbligo",
          "example": "How much of family life is pure obligation?"
        },
        {
          "phrase": "estranged",
          "type": "Adjective",
          "translation": "allontanato",
          "example": "Is it ever right to become estranged from a relative?"
        },
        {
          "phrase": "stand by someone",
          "type": "Phrasal Verb",
          "translation": "stare al fianco di qualcuno",
          "example": "Would you stand by a relative who was clearly wrong?"
        }
      ],
      "guidedQuestions": [
        "Is your **chosen family** closer than your relatives?",
        "How much of it is **obligation**?",
        "Would you **stand by** a relative who was wrong?"
      ]
    },
    {
      "id": 331,
      "question": "What did your family never talk about?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "an unspoken rule",
          "type": "Noun Phrase",
          "translation": "una regola non detta",
          "example": "What was the unspoken rule in your house?"
        },
        {
          "phrase": "elephant in the room",
          "type": "Idiom",
          "translation": "elefante nella stanza",
          "example": "There was always an elephant in the room at Christmas."
        },
        {
          "phrase": "brush off",
          "type": "Phrasal Verb",
          "translation": "liquidare, minimizzare",
          "example": "My questions were always brushed off."
        },
        {
          "phrase": "taboo",
          "type": "Noun",
          "translation": "tabù",
          "example": "Money was a complete taboo growing up."
        },
        {
          "phrase": "bring it up",
          "type": "Phrasal Verb",
          "translation": "tirarlo fuori",
          "example": "Would you bring it up now, as an adult?"
        }
      ],
      "guidedQuestions": [
        "What was the **unspoken rule** in your house?",
        "What was the **elephant in the room**?",
        "Would you **bring it up** now?"
      ]
    },
    {
      "id": 332,
      "question": "Should you tell a relative a truth that will hurt them?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "a hard truth",
          "type": "Noun Phrase",
          "translation": "una verità scomoda",
          "example": "Is a hard truth always better than a kind silence?"
        },
        {
          "phrase": "spare someone's feelings",
          "type": "Phrase",
          "translation": "risparmiare i sentimenti a qualcuno",
          "example": "Do you lie to spare their feelings?"
        },
        {
          "phrase": "keep the peace",
          "type": "Idiom",
          "translation": "mantenere la pace",
          "example": "How much do you swallow just to keep the peace?"
        },
        {
          "phrase": "come clean",
          "type": "Phrasal Verb",
          "translation": "vuotare il sacco",
          "example": "When would you finally come clean?"
        },
        {
          "phrase": "the damage is done",
          "type": "Phrase",
          "translation": "il danno è fatto",
          "example": "Sometimes you speak and the damage is done."
        }
      ],
      "guidedQuestions": [
        "Is **a hard truth** always better than kind silence?",
        "How much do you swallow to **keep the peace**?",
        "When would you **come clean**?"
      ]
    },
    {
      "id": 333,
      "question": "What do you hope your family says about you when you are not in the room?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "speak highly of",
          "type": "Phrase",
          "translation": "parlare bene di",
          "example": "Would they speak highly of you honestly?"
        },
        {
          "phrase": "black sheep",
          "type": "Idiom",
          "translation": "pecora nera",
          "example": "Is there a black sheep in every family?"
        },
        {
          "phrase": "live up to",
          "type": "Phrasal Verb",
          "translation": "essere all'altezza di",
          "example": "Are you still trying to live up to their expectations?"
        },
        {
          "phrase": "dependable",
          "type": "Adjective",
          "translation": "affidabile",
          "example": "Would they describe you as dependable?"
        },
        {
          "phrase": "behind your back",
          "type": "Idiom",
          "translation": "alle tue spalle",
          "example": "What is said behind your back at family dinners?"
        }
      ],
      "guidedQuestions": [
        "Would they genuinely **speak highly of** you?",
        "Is there a **black sheep** in your family?",
        "Are you still trying to **live up to** something?"
      ]
    },
    {
      "id": 334,
      "question": "Which family member shaped you most without meaning to?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "rub off on",
          "type": "Phrasal Verb",
          "translation": "influenzare, attaccarsi",
          "example": "Their attitude really rubbed off on me."
        },
        {
          "phrase": "lead by example",
          "type": "Idiom",
          "translation": "dare l'esempio",
          "example": "She never lectured me; she preferred to lead by example."
        },
        {
          "phrase": "take after",
          "type": "Phrasal Verb",
          "translation": "assomigliare a",
          "example": "Who do you take after most?"
        },
        {
          "phrase": "formative",
          "type": "Adjective",
          "translation": "formativo",
          "example": "Which years were most formative for you?"
        },
        {
          "phrase": "without realising it",
          "type": "Phrase",
          "translation": "senza rendersene conto",
          "example": "They changed me without realising it."
        }
      ],
      "guidedQuestions": [
        "Whose attitude did **rub off on** you?",
        "Who chose to **lead by example** instead of lecturing?",
        "Who do you **take after** most?"
      ]
    },
    {
      "id": 335,
      "question": "Is it your job to look after your parents when they are old?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "look after",
          "type": "Phrasal Verb",
          "translation": "prendersi cura di",
          "example": "Who will look after them when they cannot manage?"
        },
        {
          "phrase": "a duty of care",
          "type": "Noun Phrase",
          "translation": "un dovere di assistenza",
          "example": "Is there a duty of care that children cannot refuse?"
        },
        {
          "phrase": "sandwich generation",
          "type": "Noun Phrase",
          "translation": "generazione sandwich",
          "example": "The sandwich generation cares for children and parents at once."
        },
        {
          "phrase": "shoulder the burden",
          "type": "Idiom",
          "translation": "farsi carico del peso",
          "example": "Who in your family will shoulder the burden?"
        },
        {
          "phrase": "resentment",
          "type": "Noun",
          "translation": "risentimento",
          "example": "Caring without choice can breed resentment."
        }
      ],
      "guidedQuestions": [
        "Who will **look after** them?",
        "Is there a **duty of care** you cannot refuse?",
        "Who will **shoulder the burden** in your family?"
      ]
    },
    {
      "id": 336,
      "question": "What family story has been told so often that nobody checks if it is true?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "family lore",
          "type": "Noun Phrase",
          "translation": "leggenda di famiglia",
          "example": "Every family has its own lore."
        },
        {
          "phrase": "embellish",
          "type": "Verb",
          "translation": "abbellire, esagerare",
          "example": "Has the story been embellished over the years?"
        },
        {
          "phrase": "set the record straight",
          "type": "Idiom",
          "translation": "mettere le cose in chiaro",
          "example": "Would you set the record straight, or let it stand?"
        },
        {
          "phrase": "take on a life of its own",
          "type": "Idiom",
          "translation": "prendere vita propria",
          "example": "Over the years the story began to take on a life of its own."
        },
        {
          "phrase": "hand-me-down",
          "type": "Adjective",
          "translation": "di seconda mano",
          "example": "These are hand-me-down memories, not real ones."
        }
      ],
      "guidedQuestions": [
        "What is your **family lore**?",
        "Has it been **embellished** over the years?",
        "Would you **set the record straight**?"
      ]
    },
    {
      "id": 337,
      "question": "Would you want your children to live the life you have lived?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "in hindsight",
          "type": "Phrase",
          "translation": "col senno di poi",
          "example": "In hindsight, what would you change?"
        },
        {
          "phrase": "follow in your footsteps",
          "type": "Idiom",
          "translation": "seguire le tue orme",
          "example": "Do you want them to follow in your footsteps?"
        },
        {
          "phrase": "make your own mistakes",
          "type": "Phrase",
          "translation": "commettere i propri errori",
          "example": "Should they be free to make their own mistakes?"
        },
        {
          "phrase": "a fresh start",
          "type": "Noun Phrase",
          "translation": "un nuovo inizio",
          "example": "Would you want them to have a completely fresh start?"
        },
        {
          "phrase": "well-trodden path",
          "type": "Noun Phrase",
          "translation": "strada battuta",
          "example": "Is the well-trodden path really the safest one?"
        }
      ],
      "guidedQuestions": [
        "**In hindsight**, what would you change?",
        "Should they **follow in your footsteps**?",
        "Do they need to **make your own mistakes**?"
      ]
    },
    {
      "id": 338,
      "question": "What does your family argue about that is never really about that?",
      "category": "Family",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "the real issue",
          "type": "Noun Phrase",
          "translation": "il vero problema",
          "example": "The dishes are never the real issue."
        },
        {
          "phrase": "bottle up",
          "type": "Phrasal Verb",
          "translation": "reprimere",
          "example": "We bottle things up for months and then explode."
        },
        {
          "phrase": "a proxy war",
          "type": "Noun Phrase",
          "translation": "una guerra per procura",
          "example": "Most family arguments are a proxy war over respect."
        },
        {
          "phrase": "blow out of proportion",
          "type": "Idiom",
          "translation": "esagerare a dismisura",
          "example": "Why do we blow small things out of proportion?"
        },
        {
          "phrase": "get to the bottom of",
          "type": "Idiom",
          "translation": "andare a fondo di",
          "example": "Has anyone tried to get to the bottom of it?"
        }
      ],
      "guidedQuestions": [
        "What is **the real issue** underneath?",
        "Do you **bottle up** things for months?",
        "Has anyone tried to **get to the bottom of** it?"
      ]
    },
    {
      "id": 339,
      "question": "Is there a version of you that only your family gets to see?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "revert to",
          "type": "Verb",
          "translation": "tornare a",
          "example": "Do you revert to being fifteen at your parents' house?"
        },
        {
          "phrase": "let your hair down",
          "type": "Idiom",
          "translation": "lasciarsi andare",
          "example": "Can you actually let your hair down with them?"
        },
        {
          "phrase": "put on a front",
          "type": "Idiom",
          "translation": "fare finta",
          "example": "Do you put on a front for everyone except family?"
        },
        {
          "phrase": "unfiltered",
          "type": "Adjective",
          "translation": "senza filtri",
          "example": "Are you unfiltered at home in a good way or a bad way?"
        },
        {
          "phrase": "old habits",
          "type": "Noun Phrase",
          "translation": "vecchie abitudini",
          "example": "Old habits reappear the moment you walk in."
        }
      ],
      "guidedQuestions": [
        "Do you **revert to** an older version of yourself at home?",
        "Can you truly **let your hair down** there?",
        "Are you **unfiltered** with them?"
      ]
    },
    {
      "id": 340,
      "question": "What would you want a grandchild to ask you about?",
      "category": "Family",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "pass on",
          "type": "Phrasal Verb",
          "translation": "trasmettere",
          "example": "What would you pass on if you had one conversation?"
        },
        {
          "phrase": "a turning point",
          "type": "Noun Phrase",
          "translation": "una svolta",
          "example": "Which turning point would you describe first?"
        },
        {
          "phrase": "worth knowing",
          "type": "Phrase",
          "translation": "che vale la pena sapere",
          "example": "What is genuinely worth knowing about your life?"
        },
        {
          "phrase": "gloss over",
          "type": "Phrasal Verb",
          "translation": "sorvolare su",
          "example": "What would you gloss over completely?"
        },
        {
          "phrase": "legacy",
          "type": "Noun",
          "translation": "eredità",
          "example": "Is a legacy stories, or something more solid?"
        }
      ],
      "guidedQuestions": [
        "What would you **pass on** in one conversation?",
        "Which **turning point** would you describe?",
        "What would you quietly **gloss over**?"
      ]
    },
    {
      "id": 341,
      "question": "What is something you stopped being curious about, and why?",
      "category": "Curiosity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "lose interest",
          "type": "Phrase",
          "translation": "perdere interesse",
          "example": "When exactly did you lose interest in it?"
        },
        {
          "phrase": "take something for granted",
          "type": "Idiom",
          "translation": "dare qualcosa per scontato",
          "example": "We take the strangest things for granted as adults."
        },
        {
          "phrase": "wonder",
          "type": "Noun",
          "translation": "meraviglia",
          "example": "Do you still feel any wonder about the world?"
        },
        {
          "phrase": "jaded",
          "type": "Adjective",
          "translation": "disilluso",
          "example": "Have you become jaded about things you once loved?"
        },
        {
          "phrase": "rekindle",
          "type": "Verb",
          "translation": "riaccendere",
          "example": "How would you rekindle that curiosity?"
        }
      ],
      "guidedQuestions": [
        "When did you **lose interest** in it?",
        "Do you still feel any **wonder** about the world?",
        "How could you **rekindle** it?"
      ]
    },
    {
      "id": 342,
      "question": "What question would you ask if you knew you would get a true answer?",
      "category": "Curiosity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "burning question",
          "type": "Noun Phrase",
          "translation": "domanda scottante",
          "example": "What is your burning question about your own life?"
        },
        {
          "phrase": "dying to know",
          "type": "Idiom",
          "translation": "morire dalla voglia di sapere",
          "example": "What are you dying to know but afraid to ask?"
        },
        {
          "phrase": "the unvarnished truth",
          "type": "Noun Phrase",
          "translation": "la verità nuda e cruda",
          "example": "Could you handle the unvarnished truth?"
        },
        {
          "phrase": "regret asking",
          "type": "Phrase",
          "translation": "pentirsi di aver chiesto",
          "example": "Would you regret asking it?"
        },
        {
          "phrase": "peace of mind",
          "type": "Noun Phrase",
          "translation": "serenità",
          "example": "Would the answer cost you your peace of mind?"
        }
      ],
      "guidedQuestions": [
        "What is your **burning question**?",
        "What are you **dying to know** but afraid to ask?",
        "Could you handle **the unvarnished truth**?"
      ]
    },
    {
      "id": 343,
      "question": "Do you prefer to know how something works or just enjoy it?",
      "category": "Curiosity",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "take apart",
          "type": "Phrasal Verb",
          "translation": "smontare",
          "example": "Were you the child who liked to take apart every gadget?"
        },
        {
          "phrase": "spoil the magic",
          "type": "Phrase",
          "translation": "rovinare la magia",
          "example": "Does understanding it spoil the magic?"
        },
        {
          "phrase": "under the hood",
          "type": "Idiom",
          "translation": "sotto il cofano",
          "example": "Do you want to see under the hood, or just drive?"
        },
        {
          "phrase": "nuts and bolts",
          "type": "Idiom",
          "translation": "aspetti pratici",
          "example": "Are you interested in the nuts and bolts of it?"
        },
        {
          "phrase": "blissfully unaware",
          "type": "Phrase",
          "translation": "beatamente ignaro",
          "example": "Sometimes it is better to stay blissfully unaware."
        }
      ],
      "guidedQuestions": [
        "Were you the child who had to **take apart** everything?",
        "Does knowing **spoil the magic**?",
        "Do you care about the **nuts and bolts**?"
      ]
    },
    {
      "id": 344,
      "question": "What do you pretend to understand but do not?",
      "category": "Curiosity",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "nod along",
          "type": "Phrasal Verb",
          "translation": "annuire per finta",
          "example": "How often do you just nod along in meetings?"
        },
        {
          "phrase": "save face",
          "type": "Idiom",
          "translation": "salvare la faccia",
          "example": "We stay quiet to save face."
        },
        {
          "phrase": "out of your depth",
          "type": "Idiom",
          "translation": "fuori dalla propria portata",
          "example": "When did you last feel out of your depth?"
        },
        {
          "phrase": "admit ignorance",
          "type": "Phrase",
          "translation": "ammettere la propria ignoranza",
          "example": "Why is it so hard to admit ignorance?"
        },
        {
          "phrase": "look it up",
          "type": "Phrasal Verb",
          "translation": "cercarlo",
          "example": "Do you look it up afterwards, or forget about it?"
        }
      ],
      "guidedQuestions": [
        "How often do you just **nod along**?",
        "When did you last feel **out of your depth**?",
        "Why is it hard to **admit ignorance**?"
      ]
    },
    {
      "id": 345,
      "question": "If you could watch one hour of any moment in history, which would it be?",
      "category": "Curiosity",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "a fly on the wall",
          "type": "Idiom",
          "translation": "una mosca sul muro",
          "example": "Where would you be a fly on the wall?"
        },
        {
          "phrase": "witness",
          "type": "Verb",
          "translation": "assistere a",
          "example": "What would you want to witness with your own eyes?"
        },
        {
          "phrase": "turning point",
          "type": "Noun Phrase",
          "translation": "punto di svolta",
          "example": "Which turning point in history fascinates you?"
        },
        {
          "phrase": "first-hand",
          "type": "Adjective",
          "translation": "di prima mano",
          "example": "Would first-hand experience change your view?"
        },
        {
          "phrase": "shed light on",
          "type": "Idiom",
          "translation": "far luce su",
          "example": "What would it shed light on?"
        }
      ],
      "guidedQuestions": [
        "Where would you be **a fly on the wall**?",
        "Which **turning point** fascinates you?",
        "What would it **shed light on**?"
      ]
    },
    {
      "id": 346,
      "question": "What is the last thing that genuinely surprised you?",
      "category": "Curiosity",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "caught off guard",
          "type": "Phrase",
          "translation": "colto alla sprovvista",
          "example": "When were you last caught off guard by good news?"
        },
        {
          "phrase": "out of the blue",
          "type": "Idiom",
          "translation": "di punto in bianco",
          "example": "It came completely out of the blue."
        },
        {
          "phrase": "take aback",
          "type": "Phrasal Verb",
          "translation": "sconcertare",
          "example": "I was really taken aback by their reaction."
        },
        {
          "phrase": "predictable",
          "type": "Adjective",
          "translation": "prevedibile",
          "example": "Has your life become too predictable?"
        },
        {
          "phrase": "eye-opening",
          "type": "Adjective",
          "translation": "illuminante",
          "example": "It was a genuinely eye-opening moment."
        }
      ],
      "guidedQuestions": [
        "When were you last **caught off guard**?",
        "Did it come **out of the blue**?",
        "Has your life become too **predictable**?"
      ]
    },
    {
      "id": 347,
      "question": "Would you read a book that changed your mind about something you care about?",
      "category": "Curiosity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "change your mind",
          "type": "Phrase",
          "translation": "cambiare idea",
          "example": "When did you last genuinely change your mind?"
        },
        {
          "phrase": "confirmation bias",
          "type": "Noun Phrase",
          "translation": "bias di conferma",
          "example": "Confirmation bias makes us read what we already believe."
        },
        {
          "phrase": "seek out",
          "type": "Phrasal Verb",
          "translation": "andare in cerca di",
          "example": "Do you seek out views that oppose yours?"
        },
        {
          "phrase": "unsettling",
          "type": "Adjective",
          "translation": "inquietante",
          "example": "Good arguments can be deeply unsettling."
        },
        {
          "phrase": "stand your ground",
          "type": "Idiom",
          "translation": "tenere il punto",
          "example": "Do you stand your ground, or stay open?"
        }
      ],
      "guidedQuestions": [
        "When did you last really **change your mind**?",
        "Do you **seek out** views that oppose yours?",
        "When should you **stand your ground**?"
      ]
    },
    {
      "id": 348,
      "question": "What would you study if nobody ever asked what you would do with it?",
      "category": "Curiosity",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "for its own sake",
          "type": "Phrase",
          "translation": "fine a se stesso",
          "example": "Can you learn something for its own sake?"
        },
        {
          "phrase": "impractical",
          "type": "Adjective",
          "translation": "poco pratico",
          "example": "What impractical subject secretly appeals to you?"
        },
        {
          "phrase": "delve into",
          "type": "Phrasal Verb",
          "translation": "approfondire",
          "example": "What would you delve into for a whole year?"
        },
        {
          "phrase": "justify",
          "type": "Verb",
          "translation": "giustificare",
          "example": "Why do we feel we must justify our interests?"
        },
        {
          "phrase": "a rabbit hole",
          "type": "Idiom",
          "translation": "un buco nero (di approfondimento)",
          "example": "Which rabbit hole could you disappear into?"
        }
      ],
      "guidedQuestions": [
        "Can you learn something **for its own sake**?",
        "What would you **delve into** for a year?",
        "Which **rabbit hole** could you disappear into?"
      ]
    },
    {
      "id": 349,
      "question": "Is there anything you would rather not know about yourself?",
      "category": "Curiosity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "ignorance is bliss",
          "type": "Idiom",
          "translation": "l'ignoranza è una benedizione",
          "example": "Is ignorance really bliss in this case?"
        },
        {
          "phrase": "blind spot",
          "type": "Noun Phrase",
          "translation": "punto cieco",
          "example": "What is your biggest blind spot?"
        },
        {
          "phrase": "face up to",
          "type": "Phrasal Verb",
          "translation": "affrontare",
          "example": "What would you have to face up to?"
        },
        {
          "phrase": "self-deception",
          "type": "Noun",
          "translation": "autoinganno",
          "example": "How much self-deception keeps you comfortable?"
        },
        {
          "phrase": "open a can of worms",
          "type": "Idiom",
          "translation": "aprire un vaso di Pandora",
          "example": "Asking that would open a can of worms."
        }
      ],
      "guidedQuestions": [
        "Is **ignorance** really **bliss** here?",
        "What is your biggest **blind spot**?",
        "What would you have to **face up to**?"
      ]
    },
    {
      "id": 350,
      "question": "What do children ask that adults have stopped asking?",
      "category": "Curiosity",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "why",
          "type": "Noun",
          "translation": "il perché",
          "example": "Children never run out of the why."
        },
        {
          "phrase": "grow out of",
          "type": "Phrasal Verb",
          "translation": "smettere con la crescita",
          "example": "Why do we grow out of asking questions?"
        },
        {
          "phrase": "settle for",
          "type": "Phrasal Verb",
          "translation": "accontentarsi di",
          "example": "Adults settle for answers that explain nothing."
        },
        {
          "phrase": "childlike",
          "type": "Adjective",
          "translation": "fanciullesco",
          "example": "Is childlike curiosity worth protecting?"
        },
        {
          "phrase": "embarrassing question",
          "type": "Noun Phrase",
          "translation": "domanda imbarazzante",
          "example": "What embarrassing question would you love to ask?"
        }
      ],
      "guidedQuestions": [
        "Why do we **grow out of** asking?",
        "Why do adults **settle for** empty answers?",
        "Is **childlike** curiosity worth protecting?"
      ]
    },
    {
      "id": 351,
      "question": "What everyday object would you most like explained to you properly?",
      "category": "Curiosity",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "take for granted",
          "type": "Idiom",
          "translation": "dare per scontato",
          "example": "Which object do you completely take for granted?"
        },
        {
          "phrase": "figure out",
          "type": "Phrasal Verb",
          "translation": "capire",
          "example": "Have you ever tried to figure out how it works?"
        },
        {
          "phrase": "black box",
          "type": "Noun Phrase",
          "translation": "scatola nera",
          "example": "For most of us a phone is a black box."
        },
        {
          "phrase": "in plain English",
          "type": "Idiom",
          "translation": "in parole povere",
          "example": "Could someone explain it in plain English?"
        },
        {
          "phrase": "mundane",
          "type": "Adjective",
          "translation": "banale",
          "example": "The most mundane objects hide the best stories."
        }
      ],
      "guidedQuestions": [
        "Which object do you **take for granted**?",
        "Is it a complete **black box** to you?",
        "Could someone explain it **in plain English**?"
      ]
    },
    {
      "id": 352,
      "question": "Do you ask people questions because you care, or because you are curious?",
      "category": "Curiosity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "nosy",
          "type": "Adjective",
          "translation": "ficcanaso",
          "example": "Is there a line between curious and nosy?"
        },
        {
          "phrase": "genuine interest",
          "type": "Noun Phrase",
          "translation": "interesse sincero",
          "example": "Can people tell the difference between genuine interest and prying?"
        },
        {
          "phrase": "pry",
          "type": "Verb",
          "translation": "ficcare il naso",
          "example": "When does a question start to pry?"
        },
        {
          "phrase": "draw someone out",
          "type": "Phrasal Verb",
          "translation": "far aprire qualcuno",
          "example": "How do you draw a quiet person out?"
        },
        {
          "phrase": "an ulterior motive",
          "type": "Noun Phrase",
          "translation": "un secondo fine",
          "example": "Do your questions ever have an ulterior motive?"
        }
      ],
      "guidedQuestions": [
        "Where is the line between curious and **nosy**?",
        "Can people sense **genuine interest**?",
        "How do you **draw** a quiet person **out**?"
      ]
    },
    {
      "id": 353,
      "question": "What meal would you want as your last?",
      "category": "Food",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "comfort food",
          "type": "Noun Phrase",
          "translation": "cibo consolatorio",
          "example": "Is your answer comfort food or something impressive?"
        },
        {
          "phrase": "mouth-watering",
          "type": "Adjective",
          "translation": "che fa venire l'acquolina",
          "example": "Describe something mouth-watering from your childhood."
        },
        {
          "phrase": "savour",
          "type": "Verb",
          "translation": "assaporare",
          "example": "Would you savour every bite, or eat it too fast?"
        },
        {
          "phrase": "go-to dish",
          "type": "Noun Phrase",
          "translation": "piatto di riferimento",
          "example": "What is your go-to dish when you need cheering up?"
        },
        {
          "phrase": "nostalgia",
          "type": "Noun",
          "translation": "nostalgia",
          "example": "How much of taste is pure nostalgia?"
        }
      ],
      "guidedQuestions": [
        "Is it **comfort food** or something impressive?",
        "Would you **savour** every bite?",
        "How much of it is **nostalgia**?"
      ]
    },
    {
      "id": 354,
      "question": "Does the food you grew up with still taste like home?",
      "category": "Food",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "taste of home",
          "type": "Noun Phrase",
          "translation": "sapore di casa",
          "example": "What is your taste of home?"
        },
        {
          "phrase": "bring back memories",
          "type": "Phrase",
          "translation": "riportare alla memoria",
          "example": "Which smell brings back memories instantly?"
        },
        {
          "phrase": "acquired taste",
          "type": "Noun Phrase",
          "translation": "gusto che si acquisisce",
          "example": "Was it an acquired taste, or love at first bite?"
        },
        {
          "phrase": "just like grandma used to make",
          "type": "Phrase",
          "translation": "come le faceva la nonna",
          "example": "Nothing is ever just like grandma used to make."
        },
        {
          "phrase": "outgrow",
          "type": "Verb",
          "translation": "superare con l'età",
          "example": "Have you outgrown any childhood favourites?"
        }
      ],
      "guidedQuestions": [
        "What is your **taste of home**?",
        "Which smell can **bring back memories** instantly?",
        "Have you **outgrown** any childhood favourite?"
      ]
    },
    {
      "id": 355,
      "question": "Is cooking for someone a bigger gesture than buying them a gift?",
      "category": "Food",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "from scratch",
          "type": "Idiom",
          "translation": "da zero",
          "example": "Does it count more if you made it from scratch?"
        },
        {
          "phrase": "put effort in",
          "type": "Phrase",
          "translation": "metterci impegno",
          "example": "People notice when you put real effort in."
        },
        {
          "phrase": "a labour of love",
          "type": "Idiom",
          "translation": "un lavoro fatto con amore",
          "example": "A long recipe is a labour of love."
        },
        {
          "phrase": "thoughtful",
          "type": "Adjective",
          "translation": "premuroso",
          "example": "Which is more thoughtful, time or money?"
        },
        {
          "phrase": "break bread",
          "type": "Idiom",
          "translation": "spezzare il pane insieme",
          "example": "There is something ancient about breaking bread together."
        }
      ],
      "guidedQuestions": [
        "Does **from scratch** genuinely count more?",
        "Is it **a labour of love** or just work?",
        "Why does it matter to **break bread** together?"
      ]
    },
    {
      "id": 356,
      "question": "What food do you refuse to try, and what is that really about?",
      "category": "Food",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "put off by",
          "type": "Phrasal Verb",
          "translation": "scoraggiato da",
          "example": "Are you put off by the texture or the idea?"
        },
        {
          "phrase": "fussy eater",
          "type": "Noun Phrase",
          "translation": "schizzinoso a tavola",
          "example": "Were you a fussy eater as a child?"
        },
        {
          "phrase": "an open mind",
          "type": "Noun Phrase",
          "translation": "una mente aperta",
          "example": "Do you approach food with an open mind?"
        },
        {
          "phrase": "turn your nose up at",
          "type": "Idiom",
          "translation": "storcere il naso davanti a",
          "example": "What do you turn your nose up at?"
        },
        {
          "phrase": "squeamish",
          "type": "Adjective",
          "translation": "schizzinoso, impressionabile",
          "example": "Are you squeamish about certain ingredients?"
        }
      ],
      "guidedQuestions": [
        "Are you **put off by** the texture or the idea?",
        "Were you a **fussy eater** as a child?",
        "What do you **turn your nose up at**?"
      ]
    },
    {
      "id": 357,
      "question": "Would you rather eat alone in peace or in company with noise?",
      "category": "Food",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "wolf down",
          "type": "Phrasal Verb",
          "translation": "divorare",
          "example": "Do you wolf down lunch at your desk?"
        },
        {
          "phrase": "linger",
          "type": "Verb",
          "translation": "attardarsi",
          "example": "Do you linger at the table after eating?"
        },
        {
          "phrase": "in good company",
          "type": "Phrase",
          "translation": "in buona compagnia",
          "example": "Food tastes better in good company."
        },
        {
          "phrase": "a moment to yourself",
          "type": "Noun Phrase",
          "translation": "un momento per sé",
          "example": "Is lunch your only moment to yourself?"
        },
        {
          "phrase": "eat on the go",
          "type": "Phrase",
          "translation": "mangiare di corsa",
          "example": "How often do you eat on the go?"
        }
      ],
      "guidedQuestions": [
        "Do you **wolf down** your lunch?",
        "Do you **linger** at the table?",
        "How often do you **eat on the go**?"
      ]
    },
    {
      "id": 358,
      "question": "What does the way someone eats tell you about them?",
      "category": "Food",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "table manners",
          "type": "Noun Phrase",
          "translation": "buone maniere a tavola",
          "example": "Do table manners still matter to you?"
        },
        {
          "phrase": "make a judgement",
          "type": "Phrase",
          "translation": "dare un giudizio",
          "example": "Do you make a judgement about someone from one meal?"
        },
        {
          "phrase": "tell-tale sign",
          "type": "Noun Phrase",
          "translation": "segno rivelatore",
          "example": "What is a tell-tale sign of how someone was raised?"
        },
        {
          "phrase": "adventurous",
          "type": "Adjective",
          "translation": "avventuroso",
          "example": "Do adventurous eaters make better company?"
        },
        {
          "phrase": "reveal",
          "type": "Verb",
          "translation": "rivelare",
          "example": "A shared meal reveals more than an interview."
        }
      ],
      "guidedQuestions": [
        "Do **table manners** still matter?",
        "What is the **tell-tale sign** you notice?",
        "Do **adventurous** eaters make better company?"
      ]
    },
    {
      "id": 359,
      "question": "Is it wrong to spend a lot of money on one meal?",
      "category": "Food",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "splash out",
          "type": "Phrasal Verb",
          "translation": "spendere e spandere",
          "example": "When did you last splash out on dinner?"
        },
        {
          "phrase": "worth every penny",
          "type": "Idiom",
          "translation": "vale ogni centesimo",
          "example": "Was it worth every penny?"
        },
        {
          "phrase": "an indulgence",
          "type": "Noun",
          "translation": "uno sfizio",
          "example": "Is it a harmless indulgence or genuine waste?"
        },
        {
          "phrase": "value for money",
          "type": "Noun Phrase",
          "translation": "rapporto qualità-prezzo",
          "example": "Do you always think about value for money?"
        },
        {
          "phrase": "an experience, not a meal",
          "type": "Phrase",
          "translation": "un'esperienza, non un pasto",
          "example": "You are paying for an experience, not a meal."
        }
      ],
      "guidedQuestions": [
        "When did you last **splash out**?",
        "Was it **worth every penny**?",
        "Is it a harmless **indulgence**?"
      ]
    },
    {
      "id": 360,
      "question": "What dish would you want to learn from someone before they are gone?",
      "category": "Food",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "pass down a recipe",
          "type": "Phrase",
          "translation": "tramandare una ricetta",
          "example": "Has anyone passed down a recipe to you?"
        },
        {
          "phrase": "by heart",
          "type": "Idiom",
          "translation": "a memoria",
          "example": "She cooked it by heart, never with a book."
        },
        {
          "phrase": "a pinch of this",
          "type": "Phrase",
          "translation": "un pizzico di questo",
          "example": "The recipe is a pinch of this and a handful of that."
        },
        {
          "phrase": "lost forever",
          "type": "Phrase",
          "translation": "perduto per sempre",
          "example": "Some recipes are lost forever when someone dies."
        },
        {
          "phrase": "get it right",
          "type": "Phrase",
          "translation": "farlo come si deve",
          "example": "Will you ever get it right the way they did?"
        }
      ],
      "guidedQuestions": [
        "Did anyone **pass down a recipe** to you?",
        "Do they cook it **by heart**?",
        "Will you ever **get it right**?"
      ]
    },
    {
      "id": 361,
      "question": "Do you eat to live, or live to eat?",
      "category": "Food",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "fuel",
          "type": "Noun",
          "translation": "carburante",
          "example": "Is food just fuel for you?"
        },
        {
          "phrase": "a foodie",
          "type": "Noun",
          "translation": "un buongustaio",
          "example": "Would you call yourself a foodie?"
        },
        {
          "phrase": "look forward to",
          "type": "Phrasal Verb",
          "translation": "non vedere l'ora di",
          "example": "Do you look forward to meals all day?"
        },
        {
          "phrase": "grab a bite",
          "type": "Idiom",
          "translation": "mangiare un boccone",
          "example": "I usually just grab a bite between meetings."
        },
        {
          "phrase": "pleasure",
          "type": "Noun",
          "translation": "piacere",
          "example": "How much daily pleasure comes from eating?"
        }
      ],
      "guidedQuestions": [
        "Is food just **fuel** to you?",
        "Would you call yourself **a foodie**?",
        "Do you **look forward to** meals all day?"
      ]
    },
    {
      "id": 362,
      "question": "What would change if you had to grow or catch everything you ate?",
      "category": "Food",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "from farm to table",
          "type": "Phrase",
          "translation": "dalla fattoria alla tavola",
          "example": "Do you think about the journey from farm to table?"
        },
        {
          "phrase": "disconnected",
          "type": "Adjective",
          "translation": "scollegato",
          "example": "Are we disconnected from where food comes from?"
        },
        {
          "phrase": "waste",
          "type": "Verb",
          "translation": "sprecare",
          "example": "Would you waste less if you grew it yourself?"
        },
        {
          "phrase": "appreciate",
          "type": "Verb",
          "translation": "apprezzare",
          "example": "Would you appreciate every meal more?"
        },
        {
          "phrase": "back-breaking",
          "type": "Adjective",
          "translation": "massacrante",
          "example": "Growing your own food is back-breaking work."
        }
      ],
      "guidedQuestions": [
        "Are we **disconnected** from our food?",
        "Would you **waste** less?",
        "Could you handle **back-breaking** work daily?"
      ]
    },
    {
      "id": 363,
      "question": "What is the best thing you have ever eaten while travelling?",
      "category": "Food",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "street food",
          "type": "Noun Phrase",
          "translation": "cibo di strada",
          "example": "Is the best street food always the simplest?"
        },
        {
          "phrase": "off the beaten track",
          "type": "Idiom",
          "translation": "fuori dai percorsi turistici",
          "example": "Did you find it off the beaten track?"
        },
        {
          "phrase": "hole in the wall",
          "type": "Idiom",
          "translation": "localino nascosto",
          "example": "The best meal was in a hole in the wall."
        },
        {
          "phrase": "recreate",
          "type": "Verb",
          "translation": "ricreare",
          "example": "Have you ever tried to recreate it at home?"
        },
        {
          "phrase": "it just hits different",
          "type": "Phrase",
          "translation": "ha tutto un altro sapore",
          "example": "Eaten there, it just hits different."
        }
      ],
      "guidedQuestions": [
        "Was it **off the beaten track**?",
        "Was it a **hole in the wall**?",
        "Did you try to **recreate** it at home?"
      ]
    },
    {
      "id": 364,
      "question": "Should a host cook what they love or what the guest loves?",
      "category": "Food",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "play it safe",
          "type": "Idiom",
          "translation": "andare sul sicuro",
          "example": "Do you play it safe when guests come?"
        },
        {
          "phrase": "show off",
          "type": "Phrasal Verb",
          "translation": "mettersi in mostra",
          "example": "Is cooking for guests a chance to show off?"
        },
        {
          "phrase": "cater to",
          "type": "Verb",
          "translation": "soddisfare le esigenze di",
          "example": "How far should you cater to everyone's diet?"
        },
        {
          "phrase": "crowd-pleaser",
          "type": "Noun",
          "translation": "piatto che piace a tutti",
          "example": "Every host needs one reliable crowd-pleaser."
        },
        {
          "phrase": "put your heart into",
          "type": "Phrase",
          "translation": "metterci il cuore",
          "example": "You can taste it when someone puts their heart into a dish."
        }
      ],
      "guidedQuestions": [
        "Do you **play it safe** with guests?",
        "Is it a chance to **show off**?",
        "What is your **crowd-pleaser**?"
      ]
    },
    {
      "id": 365,
      "question": "Who were you before other people had opinions about you?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "shape",
          "type": "Verb",
          "translation": "plasmare",
          "example": "How much did other people shape who you became?"
        },
        {
          "phrase": "true self",
          "type": "Noun Phrase",
          "translation": "vero sé",
          "example": "Is there a true self underneath all of it?"
        },
        {
          "phrase": "internalise",
          "type": "Verb",
          "translation": "interiorizzare",
          "example": "Which criticism did you internalise as a child?"
        },
        {
          "phrase": "peel back the layers",
          "type": "Idiom",
          "translation": "togliere gli strati",
          "example": "What happens when you peel back the layers?"
        },
        {
          "phrase": "conditioning",
          "type": "Noun",
          "translation": "condizionamento",
          "example": "How much of your taste is just conditioning?"
        }
      ],
      "guidedQuestions": [
        "How much did others **shape** you?",
        "Which criticism did you **internalise**?",
        "What is left when you **peel back the layers**?"
      ]
    },
    {
      "id": 366,
      "question": "Which label that people use for you fits worst?",
      "category": "Identity",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "pigeonhole",
          "type": "Verb",
          "translation": "etichettare",
          "example": "Have you been pigeonholed by one trait?"
        },
        {
          "phrase": "live down",
          "type": "Phrasal Verb",
          "translation": "far dimenticare",
          "example": "Is there a reputation you can never live down?"
        },
        {
          "phrase": "reduce someone to",
          "type": "Phrase",
          "translation": "ridurre qualcuno a",
          "example": "People reduce you to a single word."
        },
        {
          "phrase": "misread",
          "type": "Verb",
          "translation": "fraintendere",
          "example": "Are you often misread by strangers?"
        },
        {
          "phrase": "shorthand",
          "type": "Noun",
          "translation": "scorciatoia (linguistica)",
          "example": "Labels are lazy shorthand for a whole person."
        }
      ],
      "guidedQuestions": [
        "Have you been **pigeonholed**?",
        "Is there something you can never **live down**?",
        "Are you often **misread**?"
      ]
    },
    {
      "id": 367,
      "question": "Are you the same person online as you are in a room?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "curate",
          "type": "Verb",
          "translation": "curare, selezionare",
          "example": "How carefully do you curate what you post?"
        },
        {
          "phrase": "highlight reel",
          "type": "Noun Phrase",
          "translation": "raccolta dei momenti migliori",
          "example": "Your profile is a highlight reel, not a life."
        },
        {
          "phrase": "let the mask slip",
          "type": "Idiom",
          "translation": "far cadere la maschera",
          "example": "When did you last let the mask slip?"
        },
        {
          "phrase": "authentic",
          "type": "Adjective",
          "translation": "autentico",
          "example": "Is anyone truly authentic online?"
        },
        {
          "phrase": "a persona",
          "type": "Noun",
          "translation": "un personaggio",
          "example": "Have you built a persona without meaning to?"
        }
      ],
      "guidedQuestions": [
        "How much do you **curate** what you show?",
        "Is your profile just a **highlight reel**?",
        "Have you built **a persona** by accident?"
      ]
    },
    {
      "id": 368,
      "question": "What part of your identity did you choose, and what were you given?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "inherit",
          "type": "Verb",
          "translation": "ereditare",
          "example": "Which beliefs did you simply inherit?"
        },
        {
          "phrase": "opt out of",
          "type": "Phrasal Verb",
          "translation": "tirarsi fuori da",
          "example": "Can you opt out of the identity you were born into?"
        },
        {
          "phrase": "by default",
          "type": "Phrase",
          "translation": "per impostazione predefinita",
          "example": "How much of you exists by default?"
        },
        {
          "phrase": "consciously",
          "type": "Adverb",
          "translation": "consapevolmente",
          "example": "What did you consciously decide to become?"
        },
        {
          "phrase": "birthright",
          "type": "Noun",
          "translation": "diritto di nascita",
          "example": "Is culture a birthright or a choice?"
        }
      ],
      "guidedQuestions": [
        "Which beliefs did you simply **inherit**?",
        "Can you **opt out of** what you were born into?",
        "What did you **consciously** choose?"
      ]
    },
    {
      "id": 369,
      "question": "If you lost your job tomorrow, how much of you would be gone?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "define yourself by",
          "type": "Phrase",
          "translation": "definirsi in base a",
          "example": "Do you define yourself by what you do?"
        },
        {
          "phrase": "wrapped up in",
          "type": "Phrase",
          "translation": "tutto preso da",
          "example": "How wrapped up in your work is your identity?"
        },
        {
          "phrase": "start over",
          "type": "Phrasal Verb",
          "translation": "ricominciare da capo",
          "example": "Could you start over as someone else?"
        },
        {
          "phrase": "self-worth",
          "type": "Noun",
          "translation": "autostima",
          "example": "Is your self-worth tied to your job title?"
        },
        {
          "phrase": "who you are",
          "type": "Phrase",
          "translation": "chi sei",
          "example": "What is left of who you are without the role?"
        }
      ],
      "guidedQuestions": [
        "Do you **define yourself by** what you do?",
        "Is your **self-worth** tied to a job title?",
        "Could you **start over** as someone else?"
      ]
    },
    {
      "id": 370,
      "question": "What do you do that nobody would guess from looking at you?",
      "category": "Identity",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "judge by appearances",
          "type": "Phrase",
          "translation": "giudicare dalle apparenze",
          "example": "People always judge by appearances first."
        },
        {
          "phrase": "a hidden talent",
          "type": "Noun Phrase",
          "translation": "un talento nascosto",
          "example": "What is your hidden talent?"
        },
        {
          "phrase": "at odds with",
          "type": "Phrase",
          "translation": "in contrasto con",
          "example": "My hobby is completely at odds with my job."
        },
        {
          "phrase": "surprise people",
          "type": "Phrase",
          "translation": "sorprendere le persone",
          "example": "Do you like to surprise people who think they know you?"
        },
        {
          "phrase": "keep quiet about",
          "type": "Phrase",
          "translation": "tenere per sé",
          "example": "What do you keep quiet about at work?"
        }
      ],
      "guidedQuestions": [
        "Do people **judge** you **by appearances**?",
        "What is your **hidden talent**?",
        "What do you **keep quiet about**?"
      ]
    },
    {
      "id": 371,
      "question": "Has anyone ever described you in a way that felt truer than your own words?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "hit the nail on the head",
          "type": "Idiom",
          "translation": "cogliere nel segno",
          "example": "They hit the nail on the head in one sentence."
        },
        {
          "phrase": "sum up",
          "type": "Phrasal Verb",
          "translation": "riassumere",
          "example": "Can anyone really sum you up?"
        },
        {
          "phrase": "see through someone",
          "type": "Phrasal Verb",
          "translation": "leggere dentro qualcuno",
          "example": "Who can see straight through you?"
        },
        {
          "phrase": "put into words",
          "type": "Phrase",
          "translation": "mettere in parole",
          "example": "They put into words what I could not."
        },
        {
          "phrase": "uncomfortably accurate",
          "type": "Phrase",
          "translation": "scomodamente preciso",
          "example": "It was uncomfortably accurate."
        }
      ],
      "guidedQuestions": [
        "Who **hit the nail on the head** about you?",
        "Who can **see through** you?",
        "Who can **put into words** what you cannot?"
      ]
    },
    {
      "id": 372,
      "question": "Do you become a different person in another language?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "a different side of you",
          "type": "Noun Phrase",
          "translation": "un altro lato di te",
          "example": "Does a second language show a different side of you?"
        },
        {
          "phrase": "hold back",
          "type": "Phrasal Verb",
          "translation": "trattenersi",
          "example": "Do you hold back more in your second language?"
        },
        {
          "phrase": "express yourself",
          "type": "Phrase",
          "translation": "esprimersi",
          "example": "Where can you express yourself most fully?"
        },
        {
          "phrase": "blunt",
          "type": "Adjective",
          "translation": "diretto, brusco",
          "example": "Some people become blunt in a foreign language."
        },
        {
          "phrase": "find your voice",
          "type": "Idiom",
          "translation": "trovare la propria voce",
          "example": "How long does it take to find your voice in a new language?"
        }
      ],
      "guidedQuestions": [
        "Does it show **a different side of you**?",
        "Do you **hold back** more?",
        "How do you **find your voice** in a new language?"
      ]
    },
    {
      "id": 373,
      "question": "What version of yourself do you miss?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "look back on",
          "type": "Phrasal Verb",
          "translation": "ripensare a",
          "example": "Which years do you look back on fondly?"
        },
        {
          "phrase": "lose touch with",
          "type": "Phrase",
          "translation": "perdere il contatto con",
          "example": "Is it easy to lose touch with who you used to be?"
        },
        {
          "phrase": "carefree",
          "type": "Adjective",
          "translation": "spensierato",
          "example": "Were you more carefree then?"
        },
        {
          "phrase": "get back to",
          "type": "Phrasal Verb",
          "translation": "tornare a",
          "example": "Can you get back to that person?"
        },
        {
          "phrase": "grow into",
          "type": "Phrasal Verb",
          "translation": "crescere fino a diventare",
          "example": "Or did you simply grow into someone better?"
        }
      ],
      "guidedQuestions": [
        "Which years do you **look back on** fondly?",
        "Did you **lose touch with** that person?",
        "Can you **get back to** them, or did you **grow into** someone better?"
      ]
    },
    {
      "id": 374,
      "question": "Would the ten-year-old you be impressed or confused by your life?",
      "category": "Identity",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "live up to",
          "type": "Phrasal Verb",
          "translation": "essere all'altezza di",
          "example": "Did you live up to your own expectations?"
        },
        {
          "phrase": "sell out",
          "type": "Phrasal Verb",
          "translation": "vendersi, tradire i propri ideali",
          "example": "At what point does someone sell out completely?"
        },
        {
          "phrase": "make sense of",
          "type": "Phrase",
          "translation": "dare un senso a",
          "example": "Could a child make sense of your daily routine?"
        },
        {
          "phrase": "let down",
          "type": "Phrasal Verb",
          "translation": "deludere",
          "example": "Have you let that child down in any way?"
        },
        {
          "phrase": "come a long way",
          "type": "Idiom",
          "translation": "aver fatto molta strada",
          "example": "You have come a long way, even if it looks ordinary."
        }
      ],
      "guidedQuestions": [
        "Did you **live up to** your own expectations?",
        "Would they think you had to **sell out**?",
        "Have you **come a long way**?"
      ]
    },
    {
      "id": 375,
      "question": "Is there a room where you always feel like you do not belong?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "imposter syndrome",
          "type": "Noun Phrase",
          "translation": "sindrome dell'impostore",
          "example": "Where does your imposter syndrome hit hardest?"
        },
        {
          "phrase": "out of place",
          "type": "Phrase",
          "translation": "fuori posto",
          "example": "When do you feel most out of place?"
        },
        {
          "phrase": "brace yourself",
          "type": "Phrase",
          "translation": "prepararsi psicologicamente",
          "example": "Do you brace yourself before walking in?"
        },
        {
          "phrase": "hold your own",
          "type": "Idiom",
          "translation": "tenere testa",
          "example": "Can you hold your own in that room?"
        },
        {
          "phrase": "earned your seat",
          "type": "Phrase",
          "translation": "esserti guadagnato il posto",
          "example": "You earned your seat as much as anyone."
        }
      ],
      "guidedQuestions": [
        "Where does **imposter syndrome** hit hardest?",
        "When do you feel most **out of place**?",
        "Can you **hold your own** there?"
      ]
    },
    {
      "id": 376,
      "question": "What would you have to stop doing to still be yourself?",
      "category": "Identity",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "non-negotiable",
          "type": "Adjective",
          "translation": "non negoziabile",
          "example": "What is genuinely non-negotiable for you?"
        },
        {
          "phrase": "core",
          "type": "Noun",
          "translation": "nucleo",
          "example": "What sits at the core of who you are?"
        },
        {
          "phrase": "strip away",
          "type": "Phrasal Verb",
          "translation": "spogliare, togliere",
          "example": "Strip away the habits and what remains?"
        },
        {
          "phrase": "a deal-breaker",
          "type": "Noun",
          "translation": "una condizione insormontabile",
          "example": "Which compromise would be a deal-breaker?"
        },
        {
          "phrase": "compromise",
          "type": "Verb",
          "translation": "scendere a compromessi",
          "example": "How much can you compromise before you disappear?"
        }
      ],
      "guidedQuestions": [
        "What is truly **non-negotiable**?",
        "What sits at your **core**?",
        "How much can you **compromise** before you disappear?"
      ]
    },
    {
      "id": 377,
      "question": "What do you need that you have never asked anyone for?",
      "category": "Personal",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "reach out",
          "type": "Phrasal Verb",
          "translation": "farsi avanti",
          "example": "Why is it so hard to reach out when you need help?"
        },
        {
          "phrase": "a burden",
          "type": "Noun",
          "translation": "un peso",
          "example": "Do you worry about being a burden to people?"
        },
        {
          "phrase": "swallow your pride",
          "type": "Idiom",
          "translation": "ingoiare l'orgoglio",
          "example": "Could you swallow your pride and ask?"
        },
        {
          "phrase": "go without",
          "type": "Phrasal Verb",
          "translation": "farne a meno",
          "example": "How long have you chosen to go without it?"
        },
        {
          "phrase": "unmet need",
          "type": "Noun Phrase",
          "translation": "bisogno insoddisfatto",
          "example": "Which unmet need has followed you for years?"
        }
      ],
      "guidedQuestions": [
        "Why is it hard to **reach out**?",
        "Do you fear being **a burden**?",
        "Could you **swallow your pride** and ask?"
      ]
    },
    {
      "id": 378,
      "question": "What are you still angry about that you claim to be over?",
      "category": "Personal",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "hold a grudge",
          "type": "Idiom",
          "translation": "portare rancore",
          "example": "How long can you hold a grudge before it changes you?"
        },
        {
          "phrase": "let it go",
          "type": "Phrase",
          "translation": "lasciar perdere",
          "example": "Have you really managed to let it go?"
        },
        {
          "phrase": "simmer",
          "type": "Verb",
          "translation": "covare",
          "example": "Some anger will simmer quietly for years."
        },
        {
          "phrase": "closure",
          "type": "Noun",
          "translation": "chiusura",
          "example": "Do you need an apology to find closure?"
        },
        {
          "phrase": "kid yourself",
          "type": "Phrasal Verb",
          "translation": "illudersi",
          "example": "Are you kidding yourself about being fine?"
        }
      ],
      "guidedQuestions": [
        "How long can you **hold a grudge**?",
        "Have you truly managed to **let it go**?",
        "Do you need an apology to find **closure**?"
      ]
    },
    {
      "id": 379,
      "question": "What compliment do you struggle to believe?",
      "category": "Personal",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "brush off",
          "type": "Phrasal Verb",
          "translation": "minimizzare",
          "example": "Do you brush off praise automatically?"
        },
        {
          "phrase": "take a compliment",
          "type": "Phrase",
          "translation": "accettare un complimento",
          "example": "Why can nobody take a compliment gracefully?"
        },
        {
          "phrase": "deep down",
          "type": "Phrase",
          "translation": "in fondo",
          "example": "What do you believe about yourself deep down?"
        },
        {
          "phrase": "deflect",
          "type": "Verb",
          "translation": "deviare",
          "example": "Do you deflect with a joke every time?"
        },
        {
          "phrase": "inner critic",
          "type": "Noun Phrase",
          "translation": "critico interiore",
          "example": "How loud is your inner critic?"
        }
      ],
      "guidedQuestions": [
        "Do you **brush off** praise automatically?",
        "Why can nobody **take a compliment**?",
        "How loud is your **inner critic**?"
      ]
    },
    {
      "id": 380,
      "question": "What would you do differently if nobody would ever find out?",
      "category": "Personal",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "behind closed doors",
          "type": "Idiom",
          "translation": "a porte chiuse",
          "example": "Who are you behind closed doors?"
        },
        {
          "phrase": "keep up appearances",
          "type": "Idiom",
          "translation": "salvare le apparenze",
          "example": "How much energy goes into keeping up appearances?"
        },
        {
          "phrase": "integrity",
          "type": "Noun",
          "translation": "integrità",
          "example": "Is integrity what you do when nobody is watching?"
        },
        {
          "phrase": "get away with",
          "type": "Phrasal Verb",
          "translation": "farla franca",
          "example": "What would you get away with if there were no consequences?"
        },
        {
          "phrase": "temptation",
          "type": "Noun",
          "translation": "tentazione",
          "example": "Which temptation is hardest to resist?"
        }
      ],
      "guidedQuestions": [
        "Who are you **behind closed doors**?",
        "How much energy goes into **keep up appearances**?",
        "Is **integrity** what you do unobserved?"
      ]
    },
    {
      "id": 381,
      "question": "Which of your habits would you be embarrassed to explain?",
      "category": "Personal",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "a guilty pleasure",
          "type": "Noun Phrase",
          "translation": "un piacere colpevole",
          "example": "What is your most ridiculous guilty pleasure?"
        },
        {
          "phrase": "own up to",
          "type": "Phrasal Verb",
          "translation": "ammettere",
          "example": "Could you own up to it in front of friends?"
        },
        {
          "phrase": "quirk",
          "type": "Noun",
          "translation": "stranezza",
          "example": "Which quirk do you hide from new people?"
        },
        {
          "phrase": "harmless",
          "type": "Adjective",
          "translation": "innocuo",
          "example": "Is it harmless, or is it costing you something?"
        },
        {
          "phrase": "cringe",
          "type": "Verb",
          "translation": "rabbrividire d'imbarazzo",
          "example": "Do you cringe just thinking about it?"
        }
      ],
      "guidedQuestions": [
        "What is your **guilty pleasure**?",
        "Could you **own up to** it publicly?",
        "Which **quirk** do you hide?"
      ]
    },
    {
      "id": 382,
      "question": "What do you keep buying that you never use?",
      "category": "Personal",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "impulse buy",
          "type": "Noun Phrase",
          "translation": "acquisto d'impulso",
          "example": "What was your last impulse buy?"
        },
        {
          "phrase": "gather dust",
          "type": "Idiom",
          "translation": "prendere polvere",
          "example": "What is gathering dust in your cupboard?"
        },
        {
          "phrase": "aspirational",
          "type": "Adjective",
          "translation": "aspirazionale",
          "example": "Was it an aspirational purchase rather than a practical one?"
        },
        {
          "phrase": "declutter",
          "type": "Verb",
          "translation": "liberarsi del superfluo",
          "example": "When did you last declutter properly?"
        },
        {
          "phrase": "buyer's remorse",
          "type": "Noun Phrase",
          "translation": "rimorso dell'acquirente",
          "example": "Do you get buyer's remorse quickly?"
        }
      ],
      "guidedQuestions": [
        "What was your last **impulse buy**?",
        "What is **gather dust** in your home?",
        "Do you get **buyer's remorse**?"
      ]
    },
    {
      "id": 383,
      "question": "When did you last change your mind about a person?",
      "category": "Personal",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "first impression",
          "type": "Noun Phrase",
          "translation": "prima impressione",
          "example": "How often is your first impression wrong?"
        },
        {
          "phrase": "warm to someone",
          "type": "Phrasal Verb",
          "translation": "affezionarsi a qualcuno",
          "example": "How long does it take you to warm to someone?"
        },
        {
          "phrase": "give someone a chance",
          "type": "Phrase",
          "translation": "dare una possibilità a qualcuno",
          "example": "Do you give someone a chance after a bad start?"
        },
        {
          "phrase": "write someone off",
          "type": "Phrasal Verb",
          "translation": "cancellare qualcuno",
          "example": "How quickly do you write someone off?"
        },
        {
          "phrase": "grow to like",
          "type": "Phrase",
          "translation": "imparare ad apprezzare",
          "example": "Did you grow to like them eventually?"
        }
      ],
      "guidedQuestions": [
        "How often is your **first impression** wrong?",
        "How quickly do you **write someone off**?",
        "Did you **grow to like** them eventually?"
      ]
    },
    {
      "id": 384,
      "question": "What is the kindest thing you have done that nobody knows about?",
      "category": "Personal",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "quietly",
          "type": "Adverb",
          "translation": "in silenzio",
          "example": "Do you prefer to help quietly?"
        },
        {
          "phrase": "take credit",
          "type": "Phrase",
          "translation": "prendersi il merito",
          "example": "Why did you not take credit for it?"
        },
        {
          "phrase": "anonymous",
          "type": "Adjective",
          "translation": "anonimo",
          "example": "Is an anonymous good deed worth more?"
        },
        {
          "phrase": "for show",
          "type": "Phrase",
          "translation": "di facciata",
          "example": "Kindness done for show is not really kindness."
        },
        {
          "phrase": "no strings attached",
          "type": "Idiom",
          "translation": "senza condizioni",
          "example": "Was it truly no strings attached?"
        }
      ],
      "guidedQuestions": [
        "Do you prefer to help **quietly**?",
        "Why did you not **take credit**?",
        "Was it genuinely **no strings attached**?"
      ]
    },
    {
      "id": 385,
      "question": "What are you avoiding right now?",
      "category": "Personal",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "put off",
          "type": "Phrasal Verb",
          "translation": "rimandare",
          "example": "What have you put off for months?"
        },
        {
          "phrase": "face the music",
          "type": "Idiom",
          "translation": "affrontare le conseguenze",
          "example": "When will you finally face the music?"
        },
        {
          "phrase": "procrastinate",
          "type": "Verb",
          "translation": "procrastinare",
          "example": "Do you procrastinate on small things or big ones?"
        },
        {
          "phrase": "hang over you",
          "type": "Phrasal Verb",
          "translation": "pesare addosso",
          "example": "What is hanging over you at the moment?"
        },
        {
          "phrase": "bite the bullet",
          "type": "Idiom",
          "translation": "stringere i denti",
          "example": "What would happen if you decided to bite the bullet today?"
        }
      ],
      "guidedQuestions": [
        "What have you **put off** for months?",
        "When will you **face the music**?",
        "What is **hang over you** right now?"
      ]
    },
    {
      "id": 386,
      "question": "What do you do when nobody needs anything from you?",
      "category": "Personal",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "downtime",
          "type": "Noun",
          "translation": "tempo libero",
          "example": "How do you actually spend your downtime?"
        },
        {
          "phrase": "at a loose end",
          "type": "Idiom",
          "translation": "senza sapere che fare",
          "example": "Are you uncomfortable at a loose end?"
        },
        {
          "phrase": "recharge",
          "type": "Verb",
          "translation": "ricaricarsi",
          "example": "What genuinely helps you recharge?"
        },
        {
          "phrase": "fill the silence",
          "type": "Phrase",
          "translation": "riempire il silenzio",
          "example": "Do you rush to fill the silence?"
        },
        {
          "phrase": "be still",
          "type": "Phrase",
          "translation": "stare fermi",
          "example": "Is it hard for you to just be still?"
        }
      ],
      "guidedQuestions": [
        "How do you spend your **downtime**?",
        "Are you uneasy **at a loose end**?",
        "Do you rush to **fill the silence**?"
      ]
    },
    {
      "id": 387,
      "question": "What would your closest friend say is your blind spot?",
      "category": "Personal",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "blind spot",
          "type": "Noun Phrase",
          "translation": "punto cieco",
          "example": "Everyone has a blind spot they cannot see."
        },
        {
          "phrase": "call you out",
          "type": "Phrasal Verb",
          "translation": "riprendere apertamente",
          "example": "Who is brave enough to call you out?"
        },
        {
          "phrase": "defensive",
          "type": "Adjective",
          "translation": "sulla difensiva",
          "example": "Do you get defensive when someone points it out?"
        },
        {
          "phrase": "home truth",
          "type": "Noun Phrase",
          "translation": "verità scomoda",
          "example": "When did you last hear a home truth?"
        },
        {
          "phrase": "take it on board",
          "type": "Idiom",
          "translation": "farne tesoro",
          "example": "Would you take it on board or dismiss it?"
        }
      ],
      "guidedQuestions": [
        "What is your **blind spot**?",
        "Who is brave enough to **call you out**?",
        "Would you **take it on board**?"
      ]
    },
    {
      "id": 388,
      "question": "Are you more afraid of failing or of being ordinary?",
      "category": "Personal",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "fall short",
          "type": "Phrasal Verb",
          "translation": "non essere all'altezza",
          "example": "What happens if you fall short of your own standard?"
        },
        {
          "phrase": "mediocre",
          "type": "Adjective",
          "translation": "mediocre",
          "example": "Is a mediocre life really a failure?"
        },
        {
          "phrase": "stand out",
          "type": "Phrasal Verb",
          "translation": "distinguersi",
          "example": "Why do we need so badly to stand out?"
        },
        {
          "phrase": "measure up",
          "type": "Phrasal Verb",
          "translation": "essere all'altezza",
          "example": "Who are you trying to measure up to?"
        },
        {
          "phrase": "settle",
          "type": "Verb",
          "translation": "accontentarsi",
          "example": "Is it wrong to settle for a quiet life?"
        }
      ],
      "guidedQuestions": [
        "What if you **fall short** of your own standard?",
        "Is a **mediocre** life really a failure?",
        "Who are you trying to **measure up** to?"
      ]
    },
    {
      "id": 389,
      "question": "Does your life need a purpose to be worth living?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "meaning",
          "type": "Noun",
          "translation": "significato",
          "example": "Where do you find meaning on an ordinary Tuesday?"
        },
        {
          "phrase": "a higher purpose",
          "type": "Noun Phrase",
          "translation": "uno scopo superiore",
          "example": "Do you need a higher purpose to get out of bed?"
        },
        {
          "phrase": "make peace with",
          "type": "Phrase",
          "translation": "fare pace con",
          "example": "Can you make peace with having no grand plan?"
        },
        {
          "phrase": "existential dread",
          "type": "Noun Phrase",
          "translation": "angoscia esistenziale",
          "example": "When does existential dread hit you hardest?"
        },
        {
          "phrase": "enough",
          "type": "Adjective",
          "translation": "abbastanza",
          "example": "Is simply being alive enough?"
        }
      ],
      "guidedQuestions": [
        "Where do you find **meaning** on an ordinary day?",
        "Do you need **a higher purpose**?",
        "Can you **make peace with** having no plan?"
      ]
    },
    {
      "id": 390,
      "question": "If nothing you did was remembered, would you live differently?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "leave a mark",
          "type": "Idiom",
          "translation": "lasciare il segno",
          "example": "Do you need to leave a mark on the world?"
        },
        {
          "phrase": "be forgotten",
          "type": "Phrase",
          "translation": "essere dimenticato",
          "example": "Everyone will be forgotten eventually."
        },
        {
          "phrase": "legacy",
          "type": "Noun",
          "translation": "eredità",
          "example": "Is a legacy for you, or for the people left behind?"
        },
        {
          "phrase": "in vain",
          "type": "Phrase",
          "translation": "invano",
          "example": "Does that make the effort in vain?"
        },
        {
          "phrase": "live for the moment",
          "type": "Phrase",
          "translation": "vivere il momento",
          "example": "Would you simply live for the moment instead?"
        }
      ],
      "guidedQuestions": [
        "Do you need to **leave a mark**?",
        "Is a **legacy** for you or for others?",
        "Would you just **live for the moment**?"
      ]
    },
    {
      "id": 391,
      "question": "Is it better to have a short intense life or a long quiet one?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "burn brightly",
          "type": "Phrase",
          "translation": "brillare intensamente",
          "example": "Is it better to burn brightly for a short time?"
        },
        {
          "phrase": "longevity",
          "type": "Noun",
          "translation": "longevità",
          "example": "Do you actually want longevity, or good years?"
        },
        {
          "phrase": "quality over quantity",
          "type": "Phrase",
          "translation": "qualità più che quantità",
          "example": "Is it quality over quantity with time as well?"
        },
        {
          "phrase": "play it safe",
          "type": "Idiom",
          "translation": "andare sul sicuro",
          "example": "Have you played it safe for too long?"
        },
        {
          "phrase": "no regrets",
          "type": "Phrase",
          "translation": "nessun rimpianto",
          "example": "Which path leaves you with no regrets?"
        }
      ],
      "guidedQuestions": [
        "Is it better to **burn brightly** briefly?",
        "Is it **quality over quantity** with time?",
        "Have you had to **play it safe** for too long?"
      ]
    },
    {
      "id": 392,
      "question": "What would you want to be doing in your final ordinary hour?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "the little things",
          "type": "Noun Phrase",
          "translation": "le piccole cose",
          "example": "Would it be the little things you chose?"
        },
        {
          "phrase": "cherish",
          "type": "Verb",
          "translation": "custodire con affetto",
          "example": "Which ordinary moment do you cherish most?"
        },
        {
          "phrase": "an ordinary day",
          "type": "Noun Phrase",
          "translation": "un giorno qualunque",
          "example": "Why does an ordinary day feel so precious in hindsight?"
        },
        {
          "phrase": "take stock",
          "type": "Idiom",
          "translation": "fare un bilancio",
          "example": "Would you take stock, or just enjoy it?"
        },
        {
          "phrase": "at peace",
          "type": "Phrase",
          "translation": "in pace",
          "example": "What would leave you genuinely at peace?"
        }
      ],
      "guidedQuestions": [
        "Would you choose **the little things**?",
        "Which ordinary moment do you **cherish**?",
        "What would leave you **at peace**?"
      ]
    },
    {
      "id": 393,
      "question": "Do you think you are living your life, or a life you were handed?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "on autopilot",
          "type": "Idiom",
          "translation": "col pilota automatico",
          "example": "How much of your week runs on autopilot?"
        },
        {
          "phrase": "a script",
          "type": "Noun",
          "translation": "un copione",
          "example": "Are you following a script written by someone else?"
        },
        {
          "phrase": "conscious choice",
          "type": "Noun Phrase",
          "translation": "scelta consapevole",
          "example": "What was your last genuinely conscious choice?"
        },
        {
          "phrase": "drift",
          "type": "Verb",
          "translation": "andare alla deriva",
          "example": "Is it possible to drift for a decade?"
        },
        {
          "phrase": "take the wheel",
          "type": "Idiom",
          "translation": "prendere il volante",
          "example": "When did you last take the wheel of your own life?"
        }
      ],
      "guidedQuestions": [
        "How much runs **on autopilot**?",
        "Are you following someone else's **script**?",
        "When did you last **take the wheel**?"
      ]
    },
    {
      "id": 394,
      "question": "Is suffering necessary for a life to mean something?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "hardship",
          "type": "Noun",
          "translation": "avversità",
          "example": "Has hardship taught you anything you would keep?"
        },
        {
          "phrase": "romanticise",
          "type": "Verb",
          "translation": "romanticizzare",
          "example": "Do we romanticise suffering too much?"
        },
        {
          "phrase": "come out stronger",
          "type": "Phrase",
          "translation": "uscirne più forti",
          "example": "Did you genuinely come out stronger?"
        },
        {
          "phrase": "senseless",
          "type": "Adjective",
          "translation": "insensato",
          "example": "Some suffering is simply senseless."
        },
        {
          "phrase": "growth",
          "type": "Noun",
          "translation": "crescita",
          "example": "Is growth possible without pain?"
        }
      ],
      "guidedQuestions": [
        "Has **hardship** taught you anything?",
        "Do we **romanticise** suffering?",
        "Did you genuinely **come out stronger**?"
      ]
    },
    {
      "id": 395,
      "question": "If the universe is indifferent, does that free you or frighten you?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "indifferent",
          "type": "Adjective",
          "translation": "indifferente",
          "example": "Is the universe indifferent to what you do?"
        },
        {
          "phrase": "liberating",
          "type": "Adjective",
          "translation": "liberatorio",
          "example": "Some find that thought strangely liberating."
        },
        {
          "phrase": "insignificant",
          "type": "Adjective",
          "translation": "insignificante",
          "example": "Does feeling insignificant comfort or crush you?"
        },
        {
          "phrase": "make your own meaning",
          "type": "Phrase",
          "translation": "crearsi il proprio significato",
          "example": "You may have to make your own meaning."
        },
        {
          "phrase": "cosmic",
          "type": "Adjective",
          "translation": "cosmico",
          "example": "Is there any cosmic plan at all?"
        }
      ],
      "guidedQuestions": [
        "Is the universe truly **indifferent**?",
        "Is that thought **liberating**?",
        "Must we **make your own meaning**?"
      ]
    },
    {
      "id": 396,
      "question": "What belief would be hardest for you to give up, even if proven wrong?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "cling to",
          "type": "Phrasal Verb",
          "translation": "aggrapparsi a",
          "example": "Which belief do you cling to hardest?"
        },
        {
          "phrase": "a foundation",
          "type": "Noun",
          "translation": "una base",
          "example": "Some beliefs are a foundation you cannot remove."
        },
        {
          "phrase": "shake",
          "type": "Verb",
          "translation": "scuotere",
          "example": "What would shake you to your core?"
        },
        {
          "phrase": "worldview",
          "type": "Noun",
          "translation": "visione del mondo",
          "example": "Would your whole worldview collapse?"
        },
        {
          "phrase": "evidence",
          "type": "Noun",
          "translation": "prove",
          "example": "How much evidence would you actually need?"
        }
      ],
      "guidedQuestions": [
        "Which belief do you **cling to** hardest?",
        "What would **shake** you to your core?",
        "Would your **worldview** collapse?"
      ]
    },
    {
      "id": 397,
      "question": "Would you accept a perfectly happy life if none of it were real?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "blissful ignorance",
          "type": "Noun Phrase",
          "translation": "beata ignoranza",
          "example": "Would you choose blissful ignorance?"
        },
        {
          "phrase": "authentic",
          "type": "Adjective",
          "translation": "autentico",
          "example": "Does an experience have to be authentic to count?"
        },
        {
          "phrase": "an illusion",
          "type": "Noun",
          "translation": "un'illusione",
          "example": "Could you knowingly live inside an illusion?"
        },
        {
          "phrase": "plug in",
          "type": "Phrasal Verb",
          "translation": "collegarsi",
          "example": "Would you plug in and never come back?"
        },
        {
          "phrase": "hollow",
          "type": "Adjective",
          "translation": "vuoto",
          "example": "Would that happiness feel hollow?"
        }
      ],
      "guidedQuestions": [
        "Would you choose **blissful ignorance**?",
        "Must experience be **authentic** to count?",
        "Would that happiness feel **hollow**?"
      ]
    },
    {
      "id": 398,
      "question": "What question about existence do you deliberately avoid?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "steer clear of",
          "type": "Idiom",
          "translation": "stare alla larga da",
          "example": "Which thought do you steer clear of at night?"
        },
        {
          "phrase": "spiral",
          "type": "Verb",
          "translation": "avvitarsi",
          "example": "Do you spiral if you think about it too long?"
        },
        {
          "phrase": "keep busy",
          "type": "Phrase",
          "translation": "tenersi occupati",
          "example": "Do you keep busy to avoid thinking?"
        },
        {
          "phrase": "confront",
          "type": "Verb",
          "translation": "affrontare",
          "example": "Is it healthier to confront it directly?"
        },
        {
          "phrase": "unanswerable",
          "type": "Adjective",
          "translation": "senza risposta",
          "example": "Some questions are simply unanswerable."
        }
      ],
      "guidedQuestions": [
        "Which thought do you **steer clear of**?",
        "Do you **keep busy** to avoid thinking?",
        "Is it healthier to **confront** it?"
      ]
    },
    {
      "id": 399,
      "question": "Do you think time is running out, or that you have plenty?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "running out of time",
          "type": "Phrase",
          "translation": "il tempo sta finendo",
          "example": "Do you feel like you are running out of time?"
        },
        {
          "phrase": "urgency",
          "type": "Noun",
          "translation": "urgenza",
          "example": "Where does your sense of urgency come from?"
        },
        {
          "phrase": "put off",
          "type": "Phrasal Verb",
          "translation": "rimandare",
          "example": "What do you put off because there is always next year?"
        },
        {
          "phrase": "make the most of",
          "type": "Idiom",
          "translation": "sfruttare al massimo",
          "example": "Do you make the most of an ordinary decade?"
        },
        {
          "phrase": "fleeting",
          "type": "Adjective",
          "translation": "fugace",
          "example": "Everything good feels fleeting in hindsight."
        }
      ],
      "guidedQuestions": [
        "Do you feel you are **running out of time**?",
        "Where does your **urgency** come from?",
        "Are you **make the most of** this decade?"
      ]
    },
    {
      "id": 400,
      "question": "Is a life spent helping others better than one spent enjoying yourself?",
      "category": "Existential",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "selfless",
          "type": "Adjective",
          "translation": "altruista",
          "example": "Is anyone genuinely selfless?"
        },
        {
          "phrase": "self-indulgent",
          "type": "Adjective",
          "translation": "autoindulgente",
          "example": "Is enjoying your life self-indulgent?"
        },
        {
          "phrase": "worthwhile",
          "type": "Adjective",
          "translation": "che vale la pena",
          "example": "What makes a life worthwhile to you?"
        },
        {
          "phrase": "martyr",
          "type": "Noun",
          "translation": "martire",
          "example": "Nobody thanks a martyr in the end."
        },
        {
          "phrase": "strike a balance",
          "type": "Idiom",
          "translation": "trovare un equilibrio",
          "example": "Can you strike a balance between the two?"
        }
      ],
      "guidedQuestions": [
        "Is anyone genuinely **selfless**?",
        "What makes a life **worthwhile**?",
        "Can you **strike a balance**?"
      ]
    },
    {
      "id": 401,
      "question": "What would you never do, even for a great deal of money?",
      "category": "Values",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "draw the line",
          "type": "Idiom",
          "translation": "porre un limite",
          "example": "Where exactly do you draw the line?"
        },
        {
          "phrase": "a price on it",
          "type": "Phrase",
          "translation": "un prezzo su di esso",
          "example": "Is there a price on it, or truly not?"
        },
        {
          "phrase": "sell your soul",
          "type": "Idiom",
          "translation": "vendere l'anima",
          "example": "What would count as selling your soul?"
        },
        {
          "phrase": "principle",
          "type": "Noun",
          "translation": "principio",
          "example": "Which principle have you never broken?"
        },
        {
          "phrase": "sleep at night",
          "type": "Idiom",
          "translation": "dormire sonni tranquilli",
          "example": "Could you still sleep at night afterwards?"
        }
      ],
      "guidedQuestions": [
        "Where do you **draw the line**?",
        "Which **principle** have you never broken?",
        "Could you still **sleep at night**?"
      ]
    },
    {
      "id": 402,
      "question": "Is honesty always kind?",
      "category": "Values",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "brutally honest",
          "type": "Phrase",
          "translation": "brutalmente onesto",
          "example": "Is being brutally honest ever an excuse?"
        },
        {
          "phrase": "a white lie",
          "type": "Noun Phrase",
          "translation": "una bugia a fin di bene",
          "example": "Is a white lie ever the better choice?"
        },
        {
          "phrase": "tact",
          "type": "Noun",
          "translation": "tatto",
          "example": "Can you tell the truth with tact?"
        },
        {
          "phrase": "sugar-coat",
          "type": "Verb",
          "translation": "indorare la pillola",
          "example": "Do you sugar-coat bad news?"
        },
        {
          "phrase": "well-intentioned",
          "type": "Adjective",
          "translation": "ben intenzionato",
          "example": "Plenty of cruelty is well-intentioned."
        }
      ],
      "guidedQuestions": [
        "Is **brutally honest** ever an excuse?",
        "Is **a white lie** sometimes better?",
        "Do you **sugar-coat** bad news?"
      ]
    },
    {
      "id": 403,
      "question": "Would you report a friend who did something seriously wrong?",
      "category": "Values",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "turn someone in",
          "type": "Phrasal Verb",
          "translation": "denunciare qualcuno",
          "example": "Could you turn someone in that you love?"
        },
        {
          "phrase": "loyalty",
          "type": "Noun",
          "translation": "lealtà",
          "example": "Where does loyalty stop and complicity begin?"
        },
        {
          "phrase": "look the other way",
          "type": "Idiom",
          "translation": "girarsi dall'altra parte",
          "example": "Would you look the other way just once?"
        },
        {
          "phrase": "an accomplice",
          "type": "Noun",
          "translation": "un complice",
          "example": "Does silence make you an accomplice?"
        },
        {
          "phrase": "do the right thing",
          "type": "Phrase",
          "translation": "fare la cosa giusta",
          "example": "Is it obvious what the right thing is?"
        }
      ],
      "guidedQuestions": [
        "Could you **turn someone in**?",
        "Would you **look the other way**?",
        "Does silence make you **an accomplice**?"
      ]
    },
    {
      "id": 404,
      "question": "Do you judge people for things you have done yourself?",
      "category": "Values",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "double standard",
          "type": "Noun Phrase",
          "translation": "doppio standard",
          "example": "Which double standard do you hold?"
        },
        {
          "phrase": "hypocrisy",
          "type": "Noun",
          "translation": "ipocrisia",
          "example": "Is a little hypocrisy unavoidable?"
        },
        {
          "phrase": "give yourself a pass",
          "type": "Phrase",
          "translation": "farsi uno sconto",
          "example": "Why do we give yourself a pass so easily?"
        },
        {
          "phrase": "the benefit of the doubt",
          "type": "Noun Phrase",
          "translation": "il beneficio del dubbio",
          "example": "Who gets the benefit of the doubt from you?"
        },
        {
          "phrase": "self-aware",
          "type": "Adjective",
          "translation": "consapevole di sé",
          "example": "Are you self-aware enough to notice?"
        }
      ],
      "guidedQuestions": [
        "Which **double standard** do you hold?",
        "Is a little **hypocrisy** unavoidable?",
        "Who gets **the benefit of the doubt**?"
      ]
    },
    {
      "id": 405,
      "question": "What rule do you break without feeling guilty?",
      "category": "Values",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "bend the rules",
          "type": "Idiom",
          "translation": "aggirare le regole",
          "example": "When is it acceptable to bend the rules?"
        },
        {
          "phrase": "a victimless crime",
          "type": "Noun Phrase",
          "translation": "un reato senza vittime",
          "example": "Is there any such thing as a victimless crime?"
        },
        {
          "phrase": "let yourself off",
          "type": "Phrasal Verb",
          "translation": "perdonarsi",
          "example": "How easily do you let yourself off?"
        },
        {
          "phrase": "petty",
          "type": "Adjective",
          "translation": "meschino, di poco conto",
          "example": "Is it petty, or does it genuinely matter?"
        },
        {
          "phrase": "conscience",
          "type": "Noun",
          "translation": "coscienza",
          "example": "Does your conscience ever complain about it?"
        }
      ],
      "guidedQuestions": [
        "When is it fine to **bend the rules**?",
        "Is there such a thing as **a victimless crime**?",
        "Does your **conscience** complain?"
      ]
    },
    {
      "id": 406,
      "question": "Should you forgive someone who is not sorry?",
      "category": "Values",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "forgive",
          "type": "Verb",
          "translation": "perdonare",
          "example": "Can you forgive without an apology?"
        },
        {
          "phrase": "for your own sake",
          "type": "Phrase",
          "translation": "per il tuo bene",
          "example": "Is forgiveness for your own sake?"
        },
        {
          "phrase": "let someone off the hook",
          "type": "Idiom",
          "translation": "lasciare qualcuno impunito",
          "example": "Does forgiving let someone off the hook?"
        },
        {
          "phrase": "bitterness",
          "type": "Noun",
          "translation": "amarezza",
          "example": "Bitterness costs you more than them."
        },
        {
          "phrase": "move on",
          "type": "Phrasal Verb",
          "translation": "andare avanti",
          "example": "Can you move on without forgiving?"
        }
      ],
      "guidedQuestions": [
        "Can you **forgive** without an apology?",
        "Is it **for your own sake**?",
        "Can you **move on** without forgiving?"
      ]
    },
    {
      "id": 407,
      "question": "Is it wrong to want more than you need?",
      "category": "Values",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "enough",
          "type": "Noun",
          "translation": "abbastanza",
          "example": "How do you know when you have enough?"
        },
        {
          "phrase": "greed",
          "type": "Noun",
          "translation": "avidità",
          "example": "Where does ambition end and greed begin?"
        },
        {
          "phrase": "keep up with the Joneses",
          "type": "Idiom",
          "translation": "stare al passo con i vicini",
          "example": "Are you trying to keep up with the Joneses?"
        },
        {
          "phrase": "contentment",
          "type": "Noun",
          "translation": "appagamento",
          "example": "Is contentment a skill you can learn?"
        },
        {
          "phrase": "modest",
          "type": "Adjective",
          "translation": "modesto",
          "example": "Could you be happy with a modest life?"
        }
      ],
      "guidedQuestions": [
        "How do you know when you have **enough**?",
        "Where does ambition become **greed**?",
        "Is **contentment** a learnable skill?"
      ]
    },
    {
      "id": 408,
      "question": "What do you value that your parents did not?",
      "category": "Values",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "a generation gap",
          "type": "Noun Phrase",
          "translation": "un divario generazionale",
          "example": "Is the generation gap widening?"
        },
        {
          "phrase": "priorities",
          "type": "Noun",
          "translation": "priorità",
          "example": "How different are your priorities from theirs?"
        },
        {
          "phrase": "reject",
          "type": "Verb",
          "translation": "rifiutare",
          "example": "Which of their values did you reject outright?"
        },
        {
          "phrase": "come round to",
          "type": "Phrasal Verb",
          "translation": "ricredersi su",
          "example": "Have you come round to any of their views?"
        },
        {
          "phrase": "hard-won",
          "type": "Adjective",
          "translation": "conquistato a fatica",
          "example": "Their values were hard-won, not lazy."
        }
      ],
      "guidedQuestions": [
        "Is the **generation gap** widening?",
        "Which value did you **reject** outright?",
        "Have you **come round to** any of theirs?"
      ]
    },
    {
      "id": 409,
      "question": "Would you rather be respected or liked?",
      "category": "Values",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "well-liked",
          "type": "Adjective",
          "translation": "benvoluto",
          "example": "Is being well-liked worth compromising for?"
        },
        {
          "phrase": "command respect",
          "type": "Phrase",
          "translation": "imporre rispetto",
          "example": "How do you command respect without fear?"
        },
        {
          "phrase": "a people-pleaser",
          "type": "Noun",
          "translation": "chi cerca di accontentare tutti",
          "example": "Are you a people-pleaser at work?"
        },
        {
          "phrase": "stand firm",
          "type": "Phrase",
          "translation": "restare fermo",
          "example": "Can you stand firm and stay popular?"
        },
        {
          "phrase": "approval",
          "type": "Noun",
          "translation": "approvazione",
          "example": "Whose approval do you still chase?"
        }
      ],
      "guidedQuestions": [
        "Is being **well-liked** worth compromising for?",
        "Are you **a people-pleaser**?",
        "Whose **approval** do you chase?"
      ]
    },
    {
      "id": 410,
      "question": "Is loyalty a virtue or an excuse?",
      "category": "Values",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "blind loyalty",
          "type": "Noun Phrase",
          "translation": "lealtà cieca",
          "example": "Where does blind loyalty become dangerous?"
        },
        {
          "phrase": "stick by someone",
          "type": "Phrasal Verb",
          "translation": "restare accanto a qualcuno",
          "example": "Would you stick by someone who was wrong?"
        },
        {
          "phrase": "unconditional",
          "type": "Adjective",
          "translation": "incondizionato",
          "example": "Should support ever be unconditional?"
        },
        {
          "phrase": "enable",
          "type": "Verb",
          "translation": "assecondare",
          "example": "Do you support them, or quietly enable the behaviour?"
        },
        {
          "phrase": "tough love",
          "type": "Noun Phrase",
          "translation": "amore severo",
          "example": "Is tough love the more loyal option?"
        }
      ],
      "guidedQuestions": [
        "When does **blind loyalty** become dangerous?",
        "Would you **stick by someone** who was wrong?",
        "Are you helping or **enable** them?"
      ]
    },
    {
      "id": 411,
      "question": "What do you spend money on that reveals what you actually value?",
      "category": "Values",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "put your money where your mouth is",
          "type": "Idiom",
          "translation": "passare dalle parole ai fatti",
          "example": "Do you put your money where your mouth is?"
        },
        {
          "phrase": "a spending habit",
          "type": "Noun Phrase",
          "translation": "un'abitudine di spesa",
          "example": "Which spending habit surprises you?"
        },
        {
          "phrase": "reveal",
          "type": "Verb",
          "translation": "rivelare",
          "example": "A bank statement can reveal more than a diary."
        },
        {
          "phrase": "justify",
          "type": "Verb",
          "translation": "giustificare",
          "example": "How do you justify the expensive ones?"
        },
        {
          "phrase": "align with",
          "type": "Phrase",
          "translation": "essere in linea con",
          "example": "Does your spending align with your stated values?"
        }
      ],
      "guidedQuestions": [
        "Do you **put your money where your mouth is**?",
        "What does it **reveal** about you?",
        "Does it **align with** your stated values?"
      ]
    },
    {
      "id": 412,
      "question": "What emotion do you find hardest to admit to?",
      "category": "Feelings",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "own up to",
          "type": "Phrasal Verb",
          "translation": "ammettere",
          "example": "Which feeling can you never own up to out loud?"
        },
        {
          "phrase": "envy",
          "type": "Noun",
          "translation": "invidia",
          "example": "Is envy the emotion nobody will confess to?"
        },
        {
          "phrase": "bottle up",
          "type": "Phrasal Verb",
          "translation": "reprimere",
          "example": "Do you bottle up anger until it leaks out?"
        },
        {
          "phrase": "vulnerable",
          "type": "Adjective",
          "translation": "vulnerabile",
          "example": "Does admitting it make you feel too vulnerable?"
        },
        {
          "phrase": "put on a brave face",
          "type": "Idiom",
          "translation": "fare buon viso",
          "example": "How often do you put on a brave face?"
        }
      ],
      "guidedQuestions": [
        "Which feeling can you never **own up to**?",
        "Do you **bottle up** anger until it leaks?",
        "How often do you **put on a brave face**?"
      ]
    },
    {
      "id": 413,
      "question": "When did you last cry, and what caused it?",
      "category": "Feelings",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "well up",
          "type": "Phrasal Verb",
          "translation": "inumidirsi (gli occhi)",
          "example": "What makes your eyes well up unexpectedly?"
        },
        {
          "phrase": "hold back tears",
          "type": "Phrase",
          "translation": "trattenere le lacrime",
          "example": "Where do you have to hold back tears?"
        },
        {
          "phrase": "a release",
          "type": "Noun",
          "translation": "uno sfogo",
          "example": "Is crying a release or an embarrassment for you?"
        },
        {
          "phrase": "overwhelmed",
          "type": "Adjective",
          "translation": "sopraffatto",
          "example": "Do you cry when you feel overwhelmed?"
        },
        {
          "phrase": "out of nowhere",
          "type": "Idiom",
          "translation": "dal nulla",
          "example": "Sometimes it arrives out of nowhere."
        }
      ],
      "guidedQuestions": [
        "What makes your eyes **well up**?",
        "Where must you **hold back tears**?",
        "Is it **a release** or an embarrassment?"
      ]
    },
    {
      "id": 414,
      "question": "Do you trust your feelings or your reasoning more?",
      "category": "Feelings",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "gut feeling",
          "type": "Noun Phrase",
          "translation": "istinto",
          "example": "Has your gut feeling ever been badly wrong?"
        },
        {
          "phrase": "think it through",
          "type": "Phrase",
          "translation": "ragionarci su",
          "example": "Do you always think it through first?"
        },
        {
          "phrase": "rational",
          "type": "Adjective",
          "translation": "razionale",
          "example": "Are your rational decisions actually better?"
        },
        {
          "phrase": "listen to your heart",
          "type": "Phrase",
          "translation": "ascoltare il cuore",
          "example": "When should you listen to your heart instead?"
        },
        {
          "phrase": "second-guess",
          "type": "Verb",
          "translation": "mettere in dubbio",
          "example": "Do you second-guess yourself constantly?"
        }
      ],
      "guidedQuestions": [
        "Has your **gut feeling** been badly wrong?",
        "Do you always **think it through**?",
        "Do you **second-guess** yourself?"
      ]
    },
    {
      "id": 415,
      "question": "What makes you feel small in a good way?",
      "category": "Feelings",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "in awe",
          "type": "Phrase",
          "translation": "in soggezione, ammirato",
          "example": "When were you last in awe of something?"
        },
        {
          "phrase": "humbling",
          "type": "Adjective",
          "translation": "che rende umili",
          "example": "What was the most humbling moment of your year?"
        },
        {
          "phrase": "put things in perspective",
          "type": "Idiom",
          "translation": "ridimensionare le cose",
          "example": "What helps you put things in perspective?"
        },
        {
          "phrase": "insignificant",
          "type": "Adjective",
          "translation": "insignificante",
          "example": "Feeling insignificant can be strangely calming."
        },
        {
          "phrase": "take your breath away",
          "type": "Idiom",
          "translation": "togliere il fiato",
          "example": "What can still take your breath away?"
        }
      ],
      "guidedQuestions": [
        "When were you last **in awe**?",
        "What helps you **put things in perspective**?",
        "What can still **take your breath away**?"
      ]
    },
    {
      "id": 416,
      "question": "Is there a feeling you miss having?",
      "category": "Feelings",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "butterflies",
          "type": "Noun",
          "translation": "farfalle nello stomaco",
          "example": "When did you last get butterflies about anything?"
        },
        {
          "phrase": "numb",
          "type": "Adjective",
          "translation": "insensibile",
          "example": "Have you gone a bit numb to things?"
        },
        {
          "phrase": "feel deeply",
          "type": "Phrase",
          "translation": "provare intensamente",
          "example": "Do you still feel deeply about anything?"
        },
        {
          "phrase": "wear off",
          "type": "Phrasal Verb",
          "translation": "svanire",
          "example": "Does excitement always wear off eventually?"
        },
        {
          "phrase": "long for",
          "type": "Phrasal Verb",
          "translation": "desiderare ardentemente",
          "example": "Which feeling do you long for most?"
        }
      ],
      "guidedQuestions": [
        "When did you last get **butterflies**?",
        "Have you gone **numb** to things?",
        "Which feeling do you **long for**?"
      ]
    },
    {
      "id": 417,
      "question": "How do you know when you are genuinely happy?",
      "category": "Feelings",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "content",
          "type": "Adjective",
          "translation": "appagato",
          "example": "Is being content the same as being happy?"
        },
        {
          "phrase": "in the moment",
          "type": "Phrase",
          "translation": "nel momento",
          "example": "Can you notice it in the moment, or only later?"
        },
        {
          "phrase": "fleeting",
          "type": "Adjective",
          "translation": "fugace",
          "example": "Is happiness always fleeting?"
        },
        {
          "phrase": "chase",
          "type": "Verb",
          "translation": "rincorrere",
          "example": "Do you chase happiness or let it arrive?"
        },
        {
          "phrase": "light",
          "type": "Adjective",
          "translation": "leggero",
          "example": "Do you feel physically light when you are happy?"
        }
      ],
      "guidedQuestions": [
        "Is being **content** the same as happy?",
        "Can you notice it **in the moment**?",
        "Do you **chase** it or let it come?"
      ]
    },
    {
      "id": 418,
      "question": "What do you do with a bad mood?",
      "category": "Feelings",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "snap at",
          "type": "Phrasal Verb",
          "translation": "sbottare contro",
          "example": "Do you snap at people when you are low?"
        },
        {
          "phrase": "shake it off",
          "type": "Phrasal Verb",
          "translation": "scrollarselo di dosso",
          "example": "How quickly can you shake it off?"
        },
        {
          "phrase": "wallow",
          "type": "Verb",
          "translation": "crogiolarsi",
          "example": "Do you wallow, or force yourself out?"
        },
        {
          "phrase": "take it out on",
          "type": "Idiom",
          "translation": "prendersela con",
          "example": "Who do you take it out on unfairly?"
        },
        {
          "phrase": "ride it out",
          "type": "Phrasal Verb",
          "translation": "lasciar passare",
          "example": "Is it better to ride it out quietly?"
        }
      ],
      "guidedQuestions": [
        "Do you **snap at** people when low?",
        "Who do you **take it out on**?",
        "Is it better to **ride it out**?"
      ]
    },
    {
      "id": 419,
      "question": "Which of your feelings do other people misread most often?",
      "category": "Feelings",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "come across as",
          "type": "Phrasal Verb",
          "translation": "dare l'impressione di",
          "example": "Do you come across as cold when you are just tired?"
        },
        {
          "phrase": "resting face",
          "type": "Noun Phrase",
          "translation": "espressione a riposo",
          "example": "Has your resting face caused problems?"
        },
        {
          "phrase": "misinterpret",
          "type": "Verb",
          "translation": "fraintendere",
          "example": "What do people consistently misinterpret?"
        },
        {
          "phrase": "read the room",
          "type": "Idiom",
          "translation": "capire l'atmosfera",
          "example": "Are you good at reading the room yourself?"
        },
        {
          "phrase": "give the wrong impression",
          "type": "Phrase",
          "translation": "dare l'impressione sbagliata",
          "example": "How often do you give the wrong impression?"
        }
      ],
      "guidedQuestions": [
        "Do you **come across as** cold by accident?",
        "What do people **misinterpret**?",
        "Are you good at **read the room**?"
      ]
    },
    {
      "id": 420,
      "question": "Does talking about a feeling make it smaller or bigger?",
      "category": "Feelings",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "get it off your chest",
          "type": "Idiom",
          "translation": "togliersi un peso",
          "example": "Do you feel lighter once you get it off your chest?"
        },
        {
          "phrase": "dwell on",
          "type": "Phrasal Verb",
          "translation": "rimuginare su",
          "example": "Does talking make you dwell on it longer?"
        },
        {
          "phrase": "put into words",
          "type": "Phrase",
          "translation": "mettere in parole",
          "example": "Some feelings shrink once you put into words what they are."
        },
        {
          "phrase": "a sounding board",
          "type": "Noun Phrase",
          "translation": "cassa di risonanza (confidente)",
          "example": "Who is your sounding board?"
        },
        {
          "phrase": "keep it in",
          "type": "Phrase",
          "translation": "tenerselo dentro",
          "example": "Is it healthier to keep it in sometimes?"
        }
      ],
      "guidedQuestions": [
        "Do you feel lighter once you **get it off your chest**?",
        "Does it make you **dwell on** it longer?",
        "Who is your **sounding board**?"
      ]
    },
    {
      "id": 421,
      "question": "What situation reliably makes you nervous, even now?",
      "category": "Feelings",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "on edge",
          "type": "Idiom",
          "translation": "sulle spine",
          "example": "What puts you on edge every single time?"
        },
        {
          "phrase": "butterflies in your stomach",
          "type": "Idiom",
          "translation": "farfalle nello stomaco",
          "example": "Do you still get butterflies in your stomach before it?"
        },
        {
          "phrase": "psych yourself up",
          "type": "Phrasal Verb",
          "translation": "caricarsi",
          "example": "How do you psych yourself up beforehand?"
        },
        {
          "phrase": "nerves",
          "type": "Noun",
          "translation": "nervosismo",
          "example": "Do your nerves help or hurt your performance?"
        },
        {
          "phrase": "get used to",
          "type": "Phrase",
          "translation": "abituarsi a",
          "example": "Will you ever get used to it?"
        }
      ],
      "guidedQuestions": [
        "What puts you **on edge** every time?",
        "How do you **psych yourself up**?",
        "Will you ever **get used to** it?"
      ]
    },
    {
      "id": 422,
      "question": "Is it possible to be lonely surrounded by people?",
      "category": "Feelings",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "lonely in a crowd",
          "type": "Phrase",
          "translation": "soli in mezzo alla folla",
          "example": "Have you ever felt lonely in a crowd?"
        },
        {
          "phrase": "surface-level",
          "type": "Adjective",
          "translation": "superficiale",
          "example": "Are most of your conversations surface-level?"
        },
        {
          "phrase": "be seen",
          "type": "Phrase",
          "translation": "essere visti davvero",
          "example": "What does it take for you to be seen?"
        },
        {
          "phrase": "small talk",
          "type": "Noun Phrase",
          "translation": "chiacchiere di circostanza",
          "example": "Does endless small talk make it worse?"
        },
        {
          "phrase": "connection",
          "type": "Noun",
          "translation": "connessione",
          "example": "How much real connection does a week contain?"
        }
      ],
      "guidedQuestions": [
        "Have you felt **lonely in a crowd**?",
        "Are your conversations **surface-level**?",
        "What does it take to **be seen**?"
      ]
    },
    {
      "id": 423,
      "question": "What feeling do you get from finishing something difficult?",
      "category": "Feelings",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "a sense of achievement",
          "type": "Noun Phrase",
          "translation": "senso di realizzazione",
          "example": "Where do you get your strongest sense of achievement?"
        },
        {
          "phrase": "relief",
          "type": "Noun",
          "translation": "sollievo",
          "example": "Is it pride, or mostly relief?"
        },
        {
          "phrase": "see something through",
          "type": "Phrasal Verb",
          "translation": "portare a termine",
          "example": "How often do you see something through to the end?"
        },
        {
          "phrase": "anticlimax",
          "type": "Noun",
          "translation": "delusione finale",
          "example": "Was finishing an anticlimax?"
        },
        {
          "phrase": "worth the effort",
          "type": "Phrase",
          "translation": "valere lo sforzo",
          "example": "Was it worth the effort in the end?"
        }
      ],
      "guidedQuestions": [
        "Where do you get **a sense of achievement**?",
        "Is it pride, or mostly **relief**?",
        "How often do you **see something through**?"
      ]
    },
    {
      "id": 424,
      "question": "What advice did you ignore that turned out to be right?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "take advice",
          "type": "Phrase",
          "translation": "accettare consigli",
          "example": "Why is it so hard to take advice from family?"
        },
        {
          "phrase": "learn the hard way",
          "type": "Idiom",
          "translation": "imparare a proprie spese",
          "example": "Did you have to learn the hard way?"
        },
        {
          "phrase": "brush aside",
          "type": "Phrasal Verb",
          "translation": "scartare",
          "example": "Why did you brush aside their warning?"
        },
        {
          "phrase": "in hindsight",
          "type": "Phrase",
          "translation": "col senno di poi",
          "example": "In hindsight, who was right all along?"
        },
        {
          "phrase": "swallow your pride",
          "type": "Idiom",
          "translation": "ingoiare l'orgoglio",
          "example": "Could you swallow your pride and admit it?"
        }
      ],
      "guidedQuestions": [
        "Why is it hard to **take advice**?",
        "Did you **learn the hard way**?",
        "**In hindsight**, who was right?"
      ]
    },
    {
      "id": 425,
      "question": "What is something you understand now that you could not have been told?",
      "category": "Wisdom",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "see for yourself",
          "type": "Phrase",
          "translation": "vedere con i propri occhi",
          "example": "Some things you must see for yourself."
        },
        {
          "phrase": "sink in",
          "type": "Phrasal Verb",
          "translation": "penetrare, farsi capire",
          "example": "How long did it take to sink in?"
        },
        {
          "phrase": "lived experience",
          "type": "Noun Phrase",
          "translation": "esperienza vissuta",
          "example": "Does lived experience beat good advice?"
        },
        {
          "phrase": "a penny drops",
          "type": "Idiom",
          "translation": "capire all'improvviso",
          "example": "When did the penny drop for you?"
        },
        {
          "phrase": "the hard way",
          "type": "Phrase",
          "translation": "nel modo difficile",
          "example": "Was there any route other than the hard way?"
        }
      ],
      "guidedQuestions": [
        "Must some things be **see for yourself**?",
        "How long did it take to **sink in**?",
        "When did **a penny drops** for you?"
      ]
    },
    {
      "id": 426,
      "question": "Who is the wisest person you know, and what makes them so?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "level-headed",
          "type": "Adjective",
          "translation": "equilibrato",
          "example": "Are they simply more level-headed than everyone else?"
        },
        {
          "phrase": "know when to stay quiet",
          "type": "Phrase",
          "translation": "sapere quando tacere",
          "example": "Wise people know when to stay quiet."
        },
        {
          "phrase": "life experience",
          "type": "Noun Phrase",
          "translation": "esperienza di vita",
          "example": "Is wisdom just life experience, or something else?"
        },
        {
          "phrase": "give perspective",
          "type": "Phrase",
          "translation": "dare prospettiva",
          "example": "Who can give perspective when you panic?"
        },
        {
          "phrase": "unassuming",
          "type": "Adjective",
          "translation": "modesto, senza pretese",
          "example": "The wisest people are often unassuming."
        }
      ],
      "guidedQuestions": [
        "Are they simply more **level-headed**?",
        "Do they **know when to stay quiet**?",
        "Who can **give perspective** when you panic?"
      ]
    },
    {
      "id": 427,
      "question": "Is experience always better than enthusiasm?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "set in your ways",
          "type": "Idiom",
          "translation": "fossilizzato nelle abitudini",
          "example": "Does experience make you set in your ways?"
        },
        {
          "phrase": "fresh eyes",
          "type": "Noun Phrase",
          "translation": "occhi nuovi",
          "example": "Sometimes a problem needs fresh eyes."
        },
        {
          "phrase": "been there before",
          "type": "Phrase",
          "translation": "esserci già passato",
          "example": "Is it useful that they have been there before?"
        },
        {
          "phrase": "cynical",
          "type": "Adjective",
          "translation": "cinico",
          "example": "Does experience make people cynical?"
        },
        {
          "phrase": "beginner's mind",
          "type": "Noun Phrase",
          "translation": "mente del principiante",
          "example": "Can you keep a beginner's mind after twenty years?"
        }
      ],
      "guidedQuestions": [
        "Does experience make you **set in your ways**?",
        "When does a problem need **fresh eyes**?",
        "Can you keep a **beginner's mind**?"
      ]
    },
    {
      "id": 428,
      "question": "What have you changed your mind about in the last five years?",
      "category": "Wisdom",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "come round to",
          "type": "Phrasal Verb",
          "translation": "ricredersi su",
          "example": "What have you come round to lately?"
        },
        {
          "phrase": "dig your heels in",
          "type": "Idiom",
          "translation": "impuntarsi",
          "example": "Do you dig your heels in when challenged?"
        },
        {
          "phrase": "revise",
          "type": "Verb",
          "translation": "rivedere",
          "example": "How often do you revise a strong opinion?"
        },
        {
          "phrase": "a sign of strength",
          "type": "Noun Phrase",
          "translation": "un segno di forza",
          "example": "Is changing your mind a sign of strength?"
        },
        {
          "phrase": "stubborn",
          "type": "Adjective",
          "translation": "testardo",
          "example": "Are you more stubborn than you admit?"
        }
      ],
      "guidedQuestions": [
        "What have you **come round to**?",
        "Do you **dig your heels in** when challenged?",
        "Is it **a sign of strength**?"
      ]
    },
    {
      "id": 429,
      "question": "What is worth being patient about, and what is not?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "bide your time",
          "type": "Idiom",
          "translation": "aspettare il momento giusto",
          "example": "When should you bide your time?"
        },
        {
          "phrase": "cut your losses",
          "type": "Idiom",
          "translation": "tagliare le perdite",
          "example": "When is it wiser to cut your losses?"
        },
        {
          "phrase": "in the long run",
          "type": "Phrase",
          "translation": "a lungo andare",
          "example": "What pays off in the long run?"
        },
        {
          "phrase": "waste your time",
          "type": "Phrase",
          "translation": "perdere tempo",
          "example": "What are you refusing to admit is a waste your time?"
        },
        {
          "phrase": "worth waiting for",
          "type": "Phrase",
          "translation": "che vale l'attesa",
          "example": "What is genuinely worth waiting for?"
        }
      ],
      "guidedQuestions": [
        "When should you **bide your time**?",
        "When should you **cut your losses**?",
        "What pays off **in the long run**?"
      ]
    },
    {
      "id": 430,
      "question": "What mistake do you watch other people make and say nothing?",
      "category": "Wisdom",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "hold your tongue",
          "type": "Idiom",
          "translation": "trattenere la lingua",
          "example": "When do you hold your tongue deliberately?"
        },
        {
          "phrase": "interfere",
          "type": "Verb",
          "translation": "immischiarsi",
          "example": "Is it your place to interfere?"
        },
        {
          "phrase": "let someone learn",
          "type": "Phrase",
          "translation": "lasciare imparare qualcuno",
          "example": "Should you let someone learn on their own?"
        },
        {
          "phrase": "unsolicited advice",
          "type": "Noun Phrase",
          "translation": "consigli non richiesti",
          "example": "Nobody wants unsolicited advice."
        },
        {
          "phrase": "see it coming",
          "type": "Phrase",
          "translation": "vederlo arrivare",
          "example": "You can see it coming from a mile away."
        }
      ],
      "guidedQuestions": [
        "When do you **hold your tongue**?",
        "Is it your place to **interfere**?",
        "Does anyone want **unsolicited advice**?"
      ]
    },
    {
      "id": 431,
      "question": "Is common sense actually common?",
      "category": "Wisdom",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "common sense",
          "type": "Noun Phrase",
          "translation": "buon senso",
          "example": "Whose common sense are we talking about?"
        },
        {
          "phrase": "obvious",
          "type": "Adjective",
          "translation": "ovvio",
          "example": "What is obvious to you and baffling to others?"
        },
        {
          "phrase": "cultural",
          "type": "Adjective",
          "translation": "culturale",
          "example": "How much of it is purely cultural?"
        },
        {
          "phrase": "take for granted",
          "type": "Idiom",
          "translation": "dare per scontato",
          "example": "Which assumptions do you take for granted?"
        },
        {
          "phrase": "self-evident",
          "type": "Adjective",
          "translation": "evidente di per sé",
          "example": "Very little is genuinely self-evident."
        }
      ],
      "guidedQuestions": [
        "Whose **common sense** are we discussing?",
        "How much of it is **cultural**?",
        "Which assumptions do you **take for granted**?"
      ]
    },
    {
      "id": 432,
      "question": "What would you tell yourself at your lowest point?",
      "category": "Wisdom",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "rock bottom",
          "type": "Idiom",
          "translation": "il fondo",
          "example": "What did you learn at rock bottom?"
        },
        {
          "phrase": "this too shall pass",
          "type": "Phrase",
          "translation": "anche questo passerà",
          "example": "Does this too shall pass actually help?"
        },
        {
          "phrase": "hang in there",
          "type": "Idiom",
          "translation": "tieni duro",
          "example": "Would hang in there have been enough?"
        },
        {
          "phrase": "be kind to yourself",
          "type": "Phrase",
          "translation": "essere gentili con sé stessi",
          "example": "Why is it so hard to be kind to yourself?"
        },
        {
          "phrase": "get through",
          "type": "Phrasal Verb",
          "translation": "superare",
          "example": "What actually helped you get through it?"
        }
      ],
      "guidedQuestions": [
        "What did you learn at **rock bottom**?",
        "Why is it hard to **be kind to yourself**?",
        "What helped you **get through** it?"
      ]
    },
    {
      "id": 433,
      "question": "Does getting older make you wiser or just more certain?",
      "category": "Wisdom",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "set in stone",
          "type": "Idiom",
          "translation": "scolpito nella pietra",
          "example": "Are your opinions now set in stone?"
        },
        {
          "phrase": "open-minded",
          "type": "Adjective",
          "translation": "di mentalità aperta",
          "example": "Is it harder to stay open-minded at fifty?"
        },
        {
          "phrase": "certainty",
          "type": "Noun",
          "translation": "certezza",
          "example": "Is certainty the enemy of wisdom?"
        },
        {
          "phrase": "mellow",
          "type": "Verb",
          "translation": "ammorbidirsi",
          "example": "Do people mellow with age, or harden?"
        },
        {
          "phrase": "doubt",
          "type": "Noun",
          "translation": "dubbio",
          "example": "Is doubt a sign of intelligence?"
        }
      ],
      "guidedQuestions": [
        "Are your opinions now **set in stone**?",
        "Is **certainty** the enemy of wisdom?",
        "Do people **mellow** with age?"
      ]
    },
    {
      "id": 434,
      "question": "What have you never said out loud to anyone?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "keep to yourself",
          "type": "Phrase",
          "translation": "tenere per sé",
          "example": "What do you keep to yourself entirely?"
        },
        {
          "phrase": "unspoken",
          "type": "Adjective",
          "translation": "non detto",
          "example": "How much of your life stays unspoken?"
        },
        {
          "phrase": "voice something",
          "type": "Verb",
          "translation": "dare voce a qualcosa",
          "example": "What would happen if you voiced it?"
        },
        {
          "phrase": "a weight off",
          "type": "Phrase",
          "translation": "un peso in meno",
          "example": "Would saying it be a weight off your shoulders?"
        },
        {
          "phrase": "confide in",
          "type": "Phrasal Verb",
          "translation": "confidarsi con",
          "example": "Who could you confide in without fear?"
        }
      ],
      "guidedQuestions": [
        "What do you **keep to yourself**?",
        "How much stays **unspoken**?",
        "Who could you **confide in**?"
      ]
    },
    {
      "id": 435,
      "question": "What do you think happens after we die?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "the afterlife",
          "type": "Noun",
          "translation": "l'aldilà",
          "example": "Do you believe in the afterlife at all?"
        },
        {
          "phrase": "comfort",
          "type": "Noun",
          "translation": "conforto",
          "example": "Do you believe it because it gives comfort?"
        },
        {
          "phrase": "cease to exist",
          "type": "Phrase",
          "translation": "cessare di esistere",
          "example": "Is it terrifying to simply cease to exist?"
        },
        {
          "phrase": "live on",
          "type": "Phrasal Verb",
          "translation": "sopravvivere, continuare a vivere",
          "example": "Do we live on in the memory of others?"
        },
        {
          "phrase": "faith",
          "type": "Noun",
          "translation": "fede",
          "example": "Has your faith changed as you got older?"
        }
      ],
      "guidedQuestions": [
        "Do you believe in **the afterlife**?",
        "Is it terrifying to **cease to exist**?",
        "Do we **live on** in memory?"
      ]
    },
    {
      "id": 436,
      "question": "What part of your past still shapes your decisions today?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "cast a long shadow",
          "type": "Idiom",
          "translation": "gettare un'ombra lunga",
          "example": "Which year casts a long shadow over you?"
        },
        {
          "phrase": "unresolved",
          "type": "Adjective",
          "translation": "irrisolto",
          "example": "What remains unresolved after all this time?"
        },
        {
          "phrase": "a pattern",
          "type": "Noun",
          "translation": "uno schema",
          "example": "Can you see a pattern repeating in your choices?"
        },
        {
          "phrase": "carry with you",
          "type": "Phrase",
          "translation": "portarsi dietro",
          "example": "What do you carry with you from that time?"
        },
        {
          "phrase": "shape",
          "type": "Verb",
          "translation": "plasmare",
          "example": "How much does one event shape a whole life?"
        }
      ],
      "guidedQuestions": [
        "Which period **cast a long shadow**?",
        "What remains **unresolved**?",
        "Can you see **a pattern** repeating?"
      ]
    },
    {
      "id": 437,
      "question": "If someone read your thoughts for one day, what would shock them?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "inner monologue",
          "type": "Noun Phrase",
          "translation": "monologo interiore",
          "example": "Is your inner monologue kind or brutal?"
        },
        {
          "phrase": "intrusive thought",
          "type": "Noun Phrase",
          "translation": "pensiero intrusivo",
          "example": "Does everyone have the odd intrusive thought?"
        },
        {
          "phrase": "filter",
          "type": "Noun",
          "translation": "filtro",
          "example": "How much filter sits between thought and speech?"
        },
        {
          "phrase": "petty",
          "type": "Adjective",
          "translation": "meschino",
          "example": "Are your private thoughts more petty than your words?"
        },
        {
          "phrase": "judge",
          "type": "Verb",
          "translation": "giudicare",
          "example": "Would they judge you, or recognise themselves?"
        }
      ],
      "guidedQuestions": [
        "Is your **inner monologue** kind or brutal?",
        "How much **filter** sits between thought and speech?",
        "Would they **judge** you or recognise themselves?"
      ]
    },
    {
      "id": 438,
      "question": "What are you pretending not to know?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "deep down",
          "type": "Phrase",
          "translation": "in fondo",
          "example": "What do you already know deep down?"
        },
        {
          "phrase": "in denial",
          "type": "Phrase",
          "translation": "in negazione",
          "example": "How long have you been in denial about it?"
        },
        {
          "phrase": "the writing on the wall",
          "type": "Idiom",
          "translation": "i segnali evidenti",
          "example": "Can you see the writing on the wall?"
        },
        {
          "phrase": "act on it",
          "type": "Phrase",
          "translation": "agire di conseguenza",
          "example": "Knowing is easy; you have to act on it."
        },
        {
          "phrase": "inconvenient",
          "type": "Adjective",
          "translation": "scomodo",
          "example": "The truth is simply inconvenient right now."
        }
      ],
      "guidedQuestions": [
        "What do you already know **deep down**?",
        "How long have you been **in denial**?",
        "Can you see **the writing on the wall**?"
      ]
    },
    {
      "id": 439,
      "question": "Who would you apologise to if there were no consequences?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "make amends",
          "type": "Idiom",
          "translation": "rimediare",
          "example": "Is it too late to make amends?"
        },
        {
          "phrase": "own your mistake",
          "type": "Phrase",
          "translation": "assumersi l'errore",
          "example": "Could you fully own your mistake?"
        },
        {
          "phrase": "reopen old wounds",
          "type": "Idiom",
          "translation": "riaprire vecchie ferite",
          "example": "Would an apology reopen old wounds?"
        },
        {
          "phrase": "for their sake",
          "type": "Phrase",
          "translation": "per il loro bene",
          "example": "Is the apology for their sake or yours?"
        },
        {
          "phrase": "unfinished business",
          "type": "Noun Phrase",
          "translation": "questioni in sospeso",
          "example": "What unfinished business do you still carry?"
        }
      ],
      "guidedQuestions": [
        "Is it too late to **make amends**?",
        "Would it **reopen old wounds**?",
        "What **unfinished business** remains?"
      ]
    },
    {
      "id": 440,
      "question": "What would break you, and what have you survived already?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "breaking point",
          "type": "Noun Phrase",
          "translation": "punto di rottura",
          "example": "Have you ever reached your breaking point?"
        },
        {
          "phrase": "resilience",
          "type": "Noun",
          "translation": "resilienza",
          "example": "Where does your resilience actually come from?"
        },
        {
          "phrase": "hold it together",
          "type": "Idiom",
          "translation": "reggere",
          "example": "How do you hold it together in a crisis?"
        },
        {
          "phrase": "unthinkable",
          "type": "Adjective",
          "translation": "impensabile",
          "example": "People survive the unthinkable every day."
        },
        {
          "phrase": "come through",
          "type": "Phrasal Verb",
          "translation": "uscirne",
          "example": "What did you come through that you never discuss?"
        }
      ],
      "guidedQuestions": [
        "Have you reached your **breaking point**?",
        "Where does your **resilience** come from?",
        "What did you **come through** quietly?"
      ]
    },
    {
      "id": 441,
      "question": "Is the person you present to the world a lie or a choice?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "put on a mask",
          "type": "Idiom",
          "translation": "indossare una maschera",
          "example": "How often do you put on a mask at work?"
        },
        {
          "phrase": "a social contract",
          "type": "Noun Phrase",
          "translation": "un contratto sociale",
          "example": "Is politeness just a social contract?"
        },
        {
          "phrase": "dishonest",
          "type": "Adjective",
          "translation": "disonesto",
          "example": "Is editing yourself dishonest?"
        },
        {
          "phrase": "self-preservation",
          "type": "Noun",
          "translation": "autoconservazione",
          "example": "Is it self-preservation rather than deceit?"
        },
        {
          "phrase": "drop the act",
          "type": "Phrase",
          "translation": "smettere di fingere",
          "example": "Where can you finally drop the act?"
        }
      ],
      "guidedQuestions": [
        "How often do you **put on a mask**?",
        "Is it **self-preservation** rather than deceit?",
        "Where can you **drop the act**?"
      ]
    },
    {
      "id": 442,
      "question": "What do you want that you are ashamed of wanting?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "long for",
          "type": "Phrasal Verb",
          "translation": "desiderare ardentemente",
          "example": "What do you secretly long for?"
        },
        {
          "phrase": "shameful",
          "type": "Adjective",
          "translation": "vergognoso",
          "example": "Why does wanting it feel shameful?"
        },
        {
          "phrase": "admit to yourself",
          "type": "Phrase",
          "translation": "ammettere a sé stessi",
          "example": "Can you even admit to yourself that you want it?"
        },
        {
          "phrase": "socially acceptable",
          "type": "Adjective",
          "translation": "socialmente accettabile",
          "example": "Is your desire simply not socially acceptable?"
        },
        {
          "phrase": "suppress",
          "type": "Verb",
          "translation": "reprimere",
          "example": "How long can you suppress a real desire?"
        }
      ],
      "guidedQuestions": [
        "What do you secretly **long for**?",
        "Can you **admit to yourself** that you want it?",
        "How long can you **suppress** it?"
      ]
    },
    {
      "id": 443,
      "question": "When did you last feel completely understood?",
      "category": "Deep",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "get you",
          "type": "Phrase",
          "translation": "capirti davvero",
          "example": "Who genuinely seems to get you?"
        },
        {
          "phrase": "on the same wavelength",
          "type": "Idiom",
          "translation": "sulla stessa lunghezza d'onda",
          "example": "Who are you instantly on the same wavelength with?"
        },
        {
          "phrase": "explain yourself",
          "type": "Phrase",
          "translation": "spiegarsi",
          "example": "Is it exhausting to always explain yourself?"
        },
        {
          "phrase": "seen and heard",
          "type": "Phrase",
          "translation": "visti e ascoltati",
          "example": "When did you last feel seen and heard?"
        },
        {
          "phrase": "rare",
          "type": "Adjective",
          "translation": "raro",
          "example": "Is that feeling rare for everyone, or just you?"
        }
      ],
      "guidedQuestions": [
        "Who genuinely seems to **get you**?",
        "Who are you **on the same wavelength** with?",
        "Is it exhausting to always **explain yourself**?"
      ]
    },
    {
      "id": 444,
      "question": "How long can you go without speaking to anyone before it bothers you?",
      "category": "Social",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "recharge",
          "type": "Verb",
          "translation": "ricaricarsi",
          "example": "Do you recharge alone or with people?"
        },
        {
          "phrase": "crave company",
          "type": "Phrase",
          "translation": "avere bisogno di compagnia",
          "example": "After how long do you crave company?"
        },
        {
          "phrase": "an introvert",
          "type": "Noun",
          "translation": "un introverso",
          "example": "Are you an introvert or just tired?"
        },
        {
          "phrase": "cabin fever",
          "type": "Noun Phrase",
          "translation": "claustrofobia da isolamento",
          "example": "How quickly does cabin fever set in?"
        },
        {
          "phrase": "reach out",
          "type": "Phrasal Verb",
          "translation": "farsi vivo",
          "example": "Who do you reach out to first?"
        }
      ],
      "guidedQuestions": [
        "Do you **recharge** alone or with others?",
        "After how long do you **crave company**?",
        "Who do you **reach out** to first?"
      ]
    },
    {
      "id": 445,
      "question": "What do you talk about when you have nothing to say?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "small talk",
          "type": "Noun Phrase",
          "translation": "chiacchiere di circostanza",
          "example": "Are you any good at small talk?"
        },
        {
          "phrase": "fall back on",
          "type": "Phrasal Verb",
          "translation": "ripiegare su",
          "example": "Which topic do you fall back on every time?"
        },
        {
          "phrase": "an awkward silence",
          "type": "Noun Phrase",
          "translation": "un silenzio imbarazzante",
          "example": "How do you survive an awkward silence?"
        },
        {
          "phrase": "keep the conversation going",
          "type": "Phrase",
          "translation": "tenere viva la conversazione",
          "example": "Is it your job to keep the conversation going?"
        },
        {
          "phrase": "filler",
          "type": "Noun",
          "translation": "riempitivo",
          "example": "The weather is pure filler."
        }
      ],
      "guidedQuestions": [
        "Are you good at **small talk**?",
        "Which topic do you **fall back on**?",
        "How do you survive **an awkward silence**?"
      ]
    },
    {
      "id": 446,
      "question": "Is it rude to leave a party without saying goodbye?",
      "category": "Social",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "slip away",
          "type": "Phrasal Verb",
          "translation": "svignarsela",
          "example": "Do you slip away when nobody is looking?"
        },
        {
          "phrase": "make the rounds",
          "type": "Idiom",
          "translation": "fare il giro dei saluti",
          "example": "Do you have to make the rounds before leaving?"
        },
        {
          "phrase": "outstay your welcome",
          "type": "Idiom",
          "translation": "trattenersi troppo",
          "example": "How do you know when you outstay your welcome?"
        },
        {
          "phrase": "drain",
          "type": "Verb",
          "translation": "prosciugare",
          "example": "Do big groups drain you completely?"
        },
        {
          "phrase": "obligation",
          "type": "Noun",
          "translation": "obbligo",
          "example": "How much of socialising is pure obligation?"
        }
      ],
      "guidedQuestions": [
        "Do you **slip away** quietly?",
        "Must you **make the rounds** first?",
        "How much is pure **obligation**?"
      ]
    },
    {
      "id": 447,
      "question": "Who do you become around people you want to impress?",
      "category": "Social",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "put on a show",
          "type": "Idiom",
          "translation": "mettere in scena uno spettacolo",
          "example": "Do you put on a show for certain people?"
        },
        {
          "phrase": "name-drop",
          "type": "Verb",
          "translation": "citare nomi altisonanti",
          "example": "Do you catch yourself starting to name-drop?"
        },
        {
          "phrase": "try too hard",
          "type": "Phrase",
          "translation": "sforzarsi troppo",
          "example": "Can people tell when you try too hard?"
        },
        {
          "phrase": "self-conscious",
          "type": "Adjective",
          "translation": "impacciato, a disagio",
          "example": "Do you get self-conscious in that room?"
        },
        {
          "phrase": "at ease",
          "type": "Phrase",
          "translation": "a proprio agio",
          "example": "Who makes you feel instantly at ease?"
        }
      ],
      "guidedQuestions": [
        "Do you **put on a show** for some people?",
        "Can people tell when you **try too hard**?",
        "Who makes you feel **at ease**?"
      ]
    },
    {
      "id": 448,
      "question": "Would you rather have five close friends or fifty good acquaintances?",
      "category": "Social",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "an inner circle",
          "type": "Noun Phrase",
          "translation": "cerchia ristretta",
          "example": "How big is your inner circle really?"
        },
        {
          "phrase": "spread thin",
          "type": "Phrase",
          "translation": "sparpagliato, sovraccarico",
          "example": "Are your friendships spread thin?"
        },
        {
          "phrase": "depth",
          "type": "Noun",
          "translation": "profondità",
          "example": "Do you prefer depth over breadth?"
        },
        {
          "phrase": "keep in touch",
          "type": "Phrase",
          "translation": "mantenere i contatti",
          "example": "How many people can you keep in touch with properly?"
        },
        {
          "phrase": "a fair-weather friend",
          "type": "Noun Phrase",
          "translation": "amico dei bei tempi",
          "example": "How do you spot a fair-weather friend?"
        }
      ],
      "guidedQuestions": [
        "How big is your **an inner circle**?",
        "Are your friendships **spread thin**?",
        "How do you spot **a fair-weather friend**?"
      ]
    },
    {
      "id": 449,
      "question": "What social rule do you find genuinely pointless?",
      "category": "Social",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "go through the motions",
          "type": "Idiom",
          "translation": "fare le cose meccanicamente",
          "example": "We all go through the motions at these events."
        },
        {
          "phrase": "etiquette",
          "type": "Noun",
          "translation": "etichetta",
          "example": "Which piece of etiquette makes no sense to you?"
        },
        {
          "phrase": "for form's sake",
          "type": "Phrase",
          "translation": "per pura formalità",
          "example": "We only do it for form's sake."
        },
        {
          "phrase": "unwritten rule",
          "type": "Noun Phrase",
          "translation": "regola non scritta",
          "example": "Which unwritten rule did you learn the hard way?"
        },
        {
          "phrase": "conform",
          "type": "Verb",
          "translation": "conformarsi",
          "example": "How much do you conform without noticing?"
        }
      ],
      "guidedQuestions": [
        "Do we just **go through the motions**?",
        "Which **unwritten rule** confuses you?",
        "How much do you **conform** without noticing?"
      ]
    },
    {
      "id": 450,
      "question": "Do you find it easier to talk to strangers or people you know well?",
      "category": "Social",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "open up",
          "type": "Phrasal Verb",
          "translation": "aprirsi",
          "example": "Is it easier to open up to a stranger?"
        },
        {
          "phrase": "history",
          "type": "Noun",
          "translation": "passato condiviso",
          "example": "Does shared history make honesty harder?"
        },
        {
          "phrase": "no baggage",
          "type": "Phrase",
          "translation": "senza bagagli emotivi",
          "example": "A stranger comes with no baggage."
        },
        {
          "phrase": "let your guard down",
          "type": "Idiom",
          "translation": "abbassare la guardia",
          "example": "Where do you let your guard down fastest?"
        },
        {
          "phrase": "judgement",
          "type": "Noun",
          "translation": "giudizio",
          "example": "Do you fear judgement more from friends?"
        }
      ],
      "guidedQuestions": [
        "Is it easier to **open up** to a stranger?",
        "Does shared **history** make honesty harder?",
        "Where do you **let your guard down**?"
      ]
    },
    {
      "id": 451,
      "question": "What do you do when someone tells a joke you find offensive?",
      "category": "Social",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "laugh along",
          "type": "Phrase",
          "translation": "ridere per accondiscendenza",
          "example": "Do you laugh along to avoid a scene?"
        },
        {
          "phrase": "call it out",
          "type": "Phrasal Verb",
          "translation": "denunciarlo apertamente",
          "example": "Would you call it out in front of everyone?"
        },
        {
          "phrase": "pick your battles",
          "type": "Idiom",
          "translation": "scegliere le battaglie",
          "example": "Do you pick your battles carefully?"
        },
        {
          "phrase": "complicit",
          "type": "Adjective",
          "translation": "complice",
          "example": "Does silence make you complicit?"
        },
        {
          "phrase": "kill the mood",
          "type": "Phrase",
          "translation": "rovinare l'atmosfera",
          "example": "Are you afraid to kill the mood?"
        }
      ],
      "guidedQuestions": [
        "Do you **laugh along** to avoid a scene?",
        "Would you **call it out**?",
        "Does silence make you **complicit**?"
      ]
    },
    {
      "id": 452,
      "question": "What skill have you given up on learning?",
      "category": "Growth",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "give up on",
          "type": "Phrasal Verb",
          "translation": "rinunciare a",
          "example": "What did you give up on too early?"
        },
        {
          "phrase": "plateau",
          "type": "Verb",
          "translation": "stagnare",
          "example": "Did you plateau and lose interest?"
        },
        {
          "phrase": "stick with it",
          "type": "Phrase",
          "translation": "perseverare",
          "example": "Why is it so hard to stick with it?"
        },
        {
          "phrase": "too late",
          "type": "Phrase",
          "translation": "troppo tardi",
          "example": "Is it ever genuinely too late to start?"
        },
        {
          "phrase": "put in the hours",
          "type": "Phrase",
          "translation": "metterci le ore",
          "example": "Are you willing to put in the hours?"
        }
      ],
      "guidedQuestions": [
        "What did you **give up on** too early?",
        "Did you **plateau** and lose interest?",
        "Are you willing to **put in the hours**?"
      ]
    },
    {
      "id": 453,
      "question": "What feedback have you received more than once?",
      "category": "Growth",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "a recurring theme",
          "type": "Noun Phrase",
          "translation": "un tema ricorrente",
          "example": "Is there a recurring theme in your reviews?"
        },
        {
          "phrase": "take on board",
          "type": "Idiom",
          "translation": "far tesoro di",
          "example": "Did you take on board what they said?"
        },
        {
          "phrase": "dismiss",
          "type": "Verb",
          "translation": "liquidare",
          "example": "Why did you dismiss it the first time?"
        },
        {
          "phrase": "a pattern",
          "type": "Noun",
          "translation": "uno schema",
          "example": "When two people say it, it is a pattern."
        },
        {
          "phrase": "act on",
          "type": "Phrasal Verb",
          "translation": "agire in base a",
          "example": "What would it take for you to act on it?"
        }
      ],
      "guidedQuestions": [
        "Is there **a recurring theme**?",
        "Did you **take on board** what they said?",
        "What would make you **act on** it?"
      ]
    },
    {
      "id": 454,
      "question": "Do you grow more from success or from being told no?",
      "category": "Growth",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "a setback",
          "type": "Noun",
          "translation": "una battuta d'arresto",
          "example": "Which setback taught you the most?"
        },
        {
          "phrase": "rejection",
          "type": "Noun",
          "translation": "rifiuto",
          "example": "How do you handle rejection now?"
        },
        {
          "phrase": "complacent",
          "type": "Adjective",
          "translation": "compiacente, appagato",
          "example": "Does success make you complacent?"
        },
        {
          "phrase": "bounce back",
          "type": "Phrasal Verb",
          "translation": "riprendersi",
          "example": "How quickly do you bounce back?"
        },
        {
          "phrase": "prove someone wrong",
          "type": "Phrase",
          "translation": "smentire qualcuno",
          "example": "Do you need to prove someone wrong to move?"
        }
      ],
      "guidedQuestions": [
        "Which **a setback** taught you most?",
        "Does success make you **complacent**?",
        "How quickly do you **bounce back**?"
      ]
    },
    {
      "id": 455,
      "question": "What are you better at than you were a year ago?",
      "category": "Growth",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "come a long way",
          "type": "Idiom",
          "translation": "aver fatto molta strada",
          "example": "Have you come a long way without noticing?"
        },
        {
          "phrase": "incremental",
          "type": "Adjective",
          "translation": "graduale",
          "example": "Most progress is incremental and invisible."
        },
        {
          "phrase": "give yourself credit",
          "type": "Phrase",
          "translation": "riconoscersi il merito",
          "example": "Do you ever give yourself credit?"
        },
        {
          "phrase": "keep at it",
          "type": "Phrasal Verb",
          "translation": "insistere",
          "example": "You only improve if you keep at it."
        },
        {
          "phrase": "track progress",
          "type": "Phrase",
          "translation": "monitorare i progressi",
          "example": "Do you track progress, or just guess?"
        }
      ],
      "guidedQuestions": [
        "Have you **come a long way** without noticing?",
        "Do you ever **give yourself credit**?",
        "Do you **track progress** at all?"
      ]
    },
    {
      "id": 456,
      "question": "What habit would change your life if you kept it for a year?",
      "category": "Growth",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "stick to",
          "type": "Phrasal Verb",
          "translation": "mantenere",
          "example": "Which habit could you actually stick to?"
        },
        {
          "phrase": "compound",
          "type": "Verb",
          "translation": "accumularsi",
          "example": "Small habits compound over a year."
        },
        {
          "phrase": "fall off the wagon",
          "type": "Idiom",
          "translation": "ricadere nelle vecchie abitudini",
          "example": "How fast do you fall off the wagon?"
        },
        {
          "phrase": "keystone habit",
          "type": "Noun Phrase",
          "translation": "abitudine chiave",
          "example": "What is your keystone habit?"
        },
        {
          "phrase": "show up",
          "type": "Phrasal Verb",
          "translation": "presentarsi, esserci",
          "example": "Most of it is just choosing to show up."
        }
      ],
      "guidedQuestions": [
        "Which habit could you **stick to**?",
        "How fast do you **fall off the wagon**?",
        "Is it mostly about choosing to **show up**?"
      ]
    },
    {
      "id": 457,
      "question": "Who has outgrown you, or who have you outgrown?",
      "category": "Growth",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "outgrow",
          "type": "Verb",
          "translation": "superare, crescere oltre",
          "example": "Is it arrogant to say you outgrow a friend?"
        },
        {
          "phrase": "drift apart",
          "type": "Phrasal Verb",
          "translation": "allontanarsi",
          "example": "Did you drift apart, or did something break?"
        },
        {
          "phrase": "hold you back",
          "type": "Phrasal Verb",
          "translation": "frenare",
          "example": "Who was starting to hold you back?"
        },
        {
          "phrase": "grow at different speeds",
          "type": "Phrase",
          "translation": "crescere a velocità diverse",
          "example": "People simply grow at different speeds."
        },
        {
          "phrase": "no hard feelings",
          "type": "Phrase",
          "translation": "nessun rancore",
          "example": "Can it end with no hard feelings?"
        }
      ],
      "guidedQuestions": [
        "Is it arrogant to **outgrow** a friend?",
        "Did you **drift apart** or did something break?",
        "Who was starting to **hold you back**?"
      ]
    },
    {
      "id": 458,
      "question": "What would you attempt if you were guaranteed to be bad at it for a year?",
      "category": "Growth",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "beginner",
          "type": "Noun",
          "translation": "principiante",
          "example": "Are you willing to be a beginner again?"
        },
        {
          "phrase": "embarrass yourself",
          "type": "Phrase",
          "translation": "mettersi in imbarazzo",
          "example": "How much can you embarrass yourself in public?"
        },
        {
          "phrase": "steep learning curve",
          "type": "Noun Phrase",
          "translation": "curva di apprendimento ripida",
          "example": "Can you survive a steep learning curve?"
        },
        {
          "phrase": "ego",
          "type": "Noun",
          "translation": "ego",
          "example": "Does your ego get in the way of learning?"
        },
        {
          "phrase": "stick it out",
          "type": "Phrasal Verb",
          "translation": "resistere fino in fondo",
          "example": "Would you stick it out for twelve months?"
        }
      ],
      "guidedQuestions": [
        "Can you be a **beginner** again?",
        "Does your **ego** get in the way?",
        "Would you **stick it out** for a year?"
      ]
    },
    {
      "id": 459,
      "question": "What did failing at something teach you that succeeding never could?",
      "category": "Growth",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "fall flat",
          "type": "Idiom",
          "translation": "fare fiasco",
          "example": "What did you watch fall flat despite your best effort?"
        },
        {
          "phrase": "humbling",
          "type": "Adjective",
          "translation": "che rende umili",
          "example": "Was it a humbling experience?"
        },
        {
          "phrase": "reassess",
          "type": "Verb",
          "translation": "rivalutare",
          "example": "Did it force you to reassess everything?"
        },
        {
          "phrase": "a blessing in disguise",
          "type": "Idiom",
          "translation": "una fortuna travestita",
          "example": "Was it a blessing in disguise?"
        },
        {
          "phrase": "silver lining",
          "type": "Noun Phrase",
          "translation": "lato positivo",
          "example": "Did you find any silver lining?"
        }
      ],
      "guidedQuestions": [
        "What did you watch **fall flat**?",
        "Was it genuinely **humbling**?",
        "Was it **a blessing in disguise**?"
      ]
    },
    {
      "id": 460,
      "question": "Is a person the same person they were ten years ago?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "continuity",
          "type": "Noun",
          "translation": "continuità",
          "example": "What gives you continuity across a decade?"
        },
        {
          "phrase": "the same in name only",
          "type": "Phrase",
          "translation": "uguale solo di nome",
          "example": "Are you the same in name only?"
        },
        {
          "phrase": "gradual",
          "type": "Adjective",
          "translation": "graduale",
          "example": "Change is gradual enough that you miss it."
        },
        {
          "phrase": "core self",
          "type": "Noun Phrase",
          "translation": "nucleo di sé",
          "example": "Is there a core self that never moves?"
        },
        {
          "phrase": "replace",
          "type": "Verb",
          "translation": "sostituire",
          "example": "Every cell will replace itself eventually."
        }
      ],
      "guidedQuestions": [
        "What gives you **continuity**?",
        "Is change too **gradual** to notice?",
        "Is there a **core self** underneath?"
      ]
    },
    {
      "id": 461,
      "question": "Can an action be good if the motive is selfish?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "motive",
          "type": "Noun",
          "translation": "movente",
          "example": "Does the motive change the value of the act?"
        },
        {
          "phrase": "the ends justify the means",
          "type": "Phrase",
          "translation": "il fine giustifica i mezzi",
          "example": "Do the ends justify the means here?"
        },
        {
          "phrase": "outcome",
          "type": "Noun",
          "translation": "risultato",
          "example": "Should we only judge the outcome?"
        },
        {
          "phrase": "virtue signalling",
          "type": "Noun Phrase",
          "translation": "ostentazione di virtù",
          "example": "Is it charity or virtue signalling?"
        },
        {
          "phrase": "beside the point",
          "type": "Idiom",
          "translation": "irrilevante",
          "example": "Perhaps intention is beside the point."
        }
      ],
      "guidedQuestions": [
        "Does the **motive** change the act's value?",
        "Should we judge only the **outcome**?",
        "Is intention **beside the point**?"
      ]
    },
    {
      "id": 462,
      "question": "Do we choose what we believe?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "free will",
          "type": "Noun Phrase",
          "translation": "libero arbitrio",
          "example": "Does free will apply to belief at all?"
        },
        {
          "phrase": "be persuaded",
          "type": "Phrase",
          "translation": "essere persuasi",
          "example": "You can only be persuaded, not commanded."
        },
        {
          "phrase": "wishful thinking",
          "type": "Noun Phrase",
          "translation": "pio desiderio",
          "example": "How much of belief is wishful thinking?"
        },
        {
          "phrase": "evidence",
          "type": "Noun",
          "translation": "prove",
          "example": "Do you follow the evidence honestly?"
        },
        {
          "phrase": "upbringing",
          "type": "Noun",
          "translation": "educazione ricevuta",
          "example": "How much did your upbringing decide for you?"
        }
      ],
      "guidedQuestions": [
        "Does **free will** apply to belief?",
        "How much is **wishful thinking**?",
        "How much did **upbringing** decide?"
      ]
    },
    {
      "id": 463,
      "question": "Is it better to be just or to be merciful?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "justice",
          "type": "Noun",
          "translation": "giustizia",
          "example": "Is justice always the kinder option?"
        },
        {
          "phrase": "mercy",
          "type": "Noun",
          "translation": "misericordia",
          "example": "When does mercy become weakness?"
        },
        {
          "phrase": "let off lightly",
          "type": "Phrase",
          "translation": "cavarsela con poco",
          "example": "Should anyone be let off lightly?"
        },
        {
          "phrase": "deserve",
          "type": "Verb",
          "translation": "meritare",
          "example": "Does anyone truly deserve what they get?"
        },
        {
          "phrase": "a second chance",
          "type": "Noun Phrase",
          "translation": "una seconda possibilità",
          "example": "Who has earned a second chance?"
        }
      ],
      "guidedQuestions": [
        "Is **justice** always kinder?",
        "When does **mercy** become weakness?",
        "Who has earned **a second chance**?"
      ]
    },
    {
      "id": 464,
      "question": "If you could not compare yourself to anyone, would you still want what you want?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "keep up",
          "type": "Phrasal Verb",
          "translation": "stare al passo",
          "example": "How much of your ambition is just to keep up?"
        },
        {
          "phrase": "relative",
          "type": "Adjective",
          "translation": "relativo",
          "example": "Is satisfaction always relative?"
        },
        {
          "phrase": "in a vacuum",
          "type": "Phrase",
          "translation": "nel vuoto, isolatamente",
          "example": "Nobody wants anything in a vacuum."
        },
        {
          "phrase": "borrowed desire",
          "type": "Noun Phrase",
          "translation": "desiderio preso in prestito",
          "example": "How much of it is borrowed desire?"
        },
        {
          "phrase": "measure yourself against",
          "type": "Phrase",
          "translation": "misurarsi con",
          "example": "Who do you measure yourself against?"
        }
      ],
      "guidedQuestions": [
        "Is your ambition just to **keep up**?",
        "Is satisfaction always **relative**?",
        "Who do you **measure yourself against**?"
      ]
    },
    {
      "id": 465,
      "question": "Should people be judged by their worst moment?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "define",
          "type": "Verb",
          "translation": "definire",
          "example": "Should one hour define a whole life?"
        },
        {
          "phrase": "out of character",
          "type": "Phrase",
          "translation": "fuori dal proprio carattere",
          "example": "What if it was completely out of character?"
        },
        {
          "phrase": "redemption",
          "type": "Noun",
          "translation": "redenzione",
          "example": "Is redemption still possible for anyone?"
        },
        {
          "phrase": "context",
          "type": "Noun",
          "translation": "contesto",
          "example": "How much does context excuse?"
        },
        {
          "phrase": "hold against",
          "type": "Phrasal Verb",
          "translation": "rinfacciare",
          "example": "How long should we hold it against someone?"
        }
      ],
      "guidedQuestions": [
        "Should one hour **define** a life?",
        "Is **redemption** always possible?",
        "How long should we **hold** it **against** them?"
      ]
    },
    {
      "id": 466,
      "question": "Is there any difference between what is true and what works?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "useful fiction",
          "type": "Noun Phrase",
          "translation": "finzione utile",
          "example": "Is religion a useful fiction to some people?"
        },
        {
          "phrase": "hold up",
          "type": "Phrasal Verb",
          "translation": "reggere",
          "example": "Does the idea hold up under scrutiny?"
        },
        {
          "phrase": "pragmatic",
          "type": "Adjective",
          "translation": "pragmatico",
          "example": "Is a pragmatic answer good enough?"
        },
        {
          "phrase": "objective",
          "type": "Adjective",
          "translation": "oggettivo",
          "example": "Is anything genuinely objective?"
        },
        {
          "phrase": "settle for",
          "type": "Phrasal Verb",
          "translation": "accontentarsi di",
          "example": "Should we settle for what works?"
        }
      ],
      "guidedQuestions": [
        "Is it a **useful fiction**?",
        "Does the idea **hold up** under scrutiny?",
        "Should we **settle for** what works?"
      ]
    },
    {
      "id": 467,
      "question": "Would a world without any suffering be better?",
      "category": "Philosophy",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "trade-off",
          "type": "Noun",
          "translation": "compromesso",
          "example": "What would the trade-off be?"
        },
        {
          "phrase": "meaningful",
          "type": "Adjective",
          "translation": "significativo",
          "example": "Would anything still be meaningful?"
        },
        {
          "phrase": "by contrast",
          "type": "Phrase",
          "translation": "per contrasto",
          "example": "We know joy by contrast with pain."
        },
        {
          "phrase": "sterile",
          "type": "Adjective",
          "translation": "sterile",
          "example": "Would such a world feel sterile?"
        },
        {
          "phrase": "worth having",
          "type": "Phrase",
          "translation": "che vale la pena avere",
          "example": "Is a painless life worth having?"
        }
      ],
      "guidedQuestions": [
        "What would the **trade-off** be?",
        "Would anything still be **meaningful**?",
        "Is a painless life **worth having**?"
      ]
    },
    {
      "id": 468,
      "question": "What do you forgive in a friend that you would not in a partner?",
      "category": "Relationships",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "hold to a higher standard",
          "type": "Phrase",
          "translation": "tenere a uno standard più alto",
          "example": "Why do we hold to a higher standard the people closest to us?"
        },
        {
          "phrase": "let slide",
          "type": "Phrasal Verb",
          "translation": "lasciar correre",
          "example": "What do you let slide with old friends?"
        },
        {
          "phrase": "a deal-breaker",
          "type": "Noun",
          "translation": "condizione insormontabile",
          "example": "What is an absolute deal-breaker for you?"
        },
        {
          "phrase": "double standard",
          "type": "Noun Phrase",
          "translation": "doppio standard",
          "example": "Is that a double standard you can defend?"
        },
        {
          "phrase": "expectations",
          "type": "Noun",
          "translation": "aspettative",
          "example": "Are your expectations realistic?"
        }
      ],
      "guidedQuestions": [
        "What do you **let slide** with friends?",
        "What is your **a deal-breaker**?",
        "Is that a **double standard**?"
      ]
    },
    {
      "id": 469,
      "question": "Can you love someone and not like them?",
      "category": "Relationships",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "put up with",
          "type": "Phrasal Verb",
          "translation": "sopportare",
          "example": "How much do you put up with out of love?"
        },
        {
          "phrase": "grate on you",
          "type": "Phrasal Verb",
          "translation": "dare sui nervi",
          "example": "What about them grates on you daily?"
        },
        {
          "phrase": "unconditional",
          "type": "Adjective",
          "translation": "incondizionato",
          "example": "Is love ever truly unconditional?"
        },
        {
          "phrase": "duty",
          "type": "Noun",
          "translation": "dovere",
          "example": "Is it love, or is it duty by now?"
        },
        {
          "phrase": "stay together",
          "type": "Phrase",
          "translation": "restare insieme",
          "example": "Why do people stay together without affection?"
        }
      ],
      "guidedQuestions": [
        "How much do you **put up with**?",
        "What **grate on you** daily?",
        "Is love ever **unconditional**?"
      ]
    },
    {
      "id": 470,
      "question": "What is the most useful thing a partner can say during an argument?",
      "category": "Relationships",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "de-escalate",
          "type": "Verb",
          "translation": "disinnescare",
          "example": "Which phrase can de-escalate anything?"
        },
        {
          "phrase": "hear you out",
          "type": "Phrasal Verb",
          "translation": "ascoltarti fino in fondo",
          "example": "Will they hear you out before replying?"
        },
        {
          "phrase": "get defensive",
          "type": "Phrase",
          "translation": "mettersi sulla difensiva",
          "example": "How fast do you get defensive?"
        },
        {
          "phrase": "concede",
          "type": "Verb",
          "translation": "concedere",
          "example": "Can you concede a point mid-argument?"
        },
        {
          "phrase": "win the argument",
          "type": "Phrase",
          "translation": "vincere la discussione",
          "example": "Do you need to win the argument, or fix the problem?"
        }
      ],
      "guidedQuestions": [
        "Which phrase can **de-escalate** anything?",
        "Will they **hear you out**?",
        "Do you need to **win the argument**?"
      ]
    },
    {
      "id": 471,
      "question": "Is jealousy ever a useful signal?",
      "category": "Relationships",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "jealousy",
          "type": "Noun",
          "translation": "gelosia",
          "example": "Is jealousy always about insecurity?"
        },
        {
          "phrase": "a red flag",
          "type": "Noun Phrase",
          "translation": "un campanello d'allarme",
          "example": "Is it a red flag or useful information?"
        },
        {
          "phrase": "possessive",
          "type": "Adjective",
          "translation": "possessivo",
          "example": "Where is the line before possessive?"
        },
        {
          "phrase": "insecurity",
          "type": "Noun",
          "translation": "insicurezza",
          "example": "Which insecurity is it really pointing at?"
        },
        {
          "phrase": "trust",
          "type": "Noun",
          "translation": "fiducia",
          "example": "Can trust survive constant suspicion?"
        }
      ],
      "guidedQuestions": [
        "Is **jealousy** always insecurity?",
        "Is it **a red flag**?",
        "Can **trust** survive suspicion?"
      ]
    },
    {
      "id": 472,
      "question": "What do you need from people that you find hard to ask for?",
      "category": "Relationships",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "reassurance",
          "type": "Noun",
          "translation": "rassicurazione",
          "example": "Do you need more reassurance than you admit?"
        },
        {
          "phrase": "needy",
          "type": "Adjective",
          "translation": "bisognoso",
          "example": "Are you afraid of seeming needy?"
        },
        {
          "phrase": "spell it out",
          "type": "Idiom",
          "translation": "dirlo chiaro e tondo",
          "example": "Do you expect people to guess, or spell it out?"
        },
        {
          "phrase": "mind-reader",
          "type": "Noun",
          "translation": "chi legge nel pensiero",
          "example": "Nobody is a mind-reader."
        },
        {
          "phrase": "meet halfway",
          "type": "Idiom",
          "translation": "venirsi incontro",
          "example": "Can you both meet halfway?"
        }
      ],
      "guidedQuestions": [
        "Do you need more **reassurance** than you admit?",
        "Are you afraid of seeming **needy**?",
        "Do you **spell it out**, or expect guessing?"
      ]
    },
    {
      "id": 473,
      "question": "Should couples tell each other everything?",
      "category": "Relationships",
      "depthLevel": 4,
      "vocabulary": [
        {
          "phrase": "full disclosure",
          "type": "Noun Phrase",
          "translation": "trasparenza totale",
          "example": "Does full disclosure make a couple stronger?"
        },
        {
          "phrase": "keep something back",
          "type": "Phrase",
          "translation": "tenersi qualcosa",
          "example": "Is it healthy to keep something back?"
        },
        {
          "phrase": "privacy",
          "type": "Noun",
          "translation": "privacy",
          "example": "Where does privacy end and secrecy begin?"
        },
        {
          "phrase": "come between",
          "type": "Phrasal Verb",
          "translation": "mettersi in mezzo",
          "example": "Could that truth come between you?"
        },
        {
          "phrase": "need to know",
          "type": "Phrase",
          "translation": "bisogno di sapere",
          "example": "Does your partner need to know everything?"
        }
      ],
      "guidedQuestions": [
        "Does **full disclosure** help?",
        "Is it healthy to **keep something back**?",
        "Where does **privacy** become secrecy?"
      ]
    },
    {
      "id": 474,
      "question": "What is the most fun you have had for free?",
      "category": "Fun",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "cost a penny",
          "type": "Phrase",
          "translation": "costare un centesimo",
          "example": "It did not cost a penny and it was perfect."
        },
        {
          "phrase": "make your own fun",
          "type": "Phrase",
          "translation": "inventarsi il divertimento",
          "example": "Did you have to make your own fun as a child?"
        },
        {
          "phrase": "spontaneous",
          "type": "Adjective",
          "translation": "spontaneo",
          "example": "Was it spontaneous or carefully planned?"
        },
        {
          "phrase": "in stitches",
          "type": "Idiom",
          "translation": "piegati dalle risate",
          "example": "We were absolutely in stitches."
        },
        {
          "phrase": "a laugh",
          "type": "Noun",
          "translation": "una risata, uno spasso",
          "example": "Was it just a laugh, or something more?"
        }
      ],
      "guidedQuestions": [
        "Did it **cost a penny**?",
        "Did you have to **make your own fun**?",
        "Were you **in stitches**?"
      ]
    },
    {
      "id": 475,
      "question": "What is something everyone finds fun that you secretly do not?",
      "category": "Fun",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "go along with",
          "type": "Phrasal Verb",
          "translation": "assecondare",
          "example": "Do you just go along with it every time?"
        },
        {
          "phrase": "not your cup of tea",
          "type": "Idiom",
          "translation": "non fa per te",
          "example": "It is simply not your cup of tea."
        },
        {
          "phrase": "pretend to enjoy",
          "type": "Phrase",
          "translation": "fingere di divertirsi",
          "example": "How long can you pretend to enjoy something?"
        },
        {
          "phrase": "spoil it",
          "type": "Phrase",
          "translation": "rovinarlo",
          "example": "Would saying so spoil it for everyone?"
        },
        {
          "phrase": "overrated",
          "type": "Adjective",
          "translation": "sopravvalutato",
          "example": "Which popular activity is completely overrated?"
        }
      ],
      "guidedQuestions": [
        "Do you just **go along with** it?",
        "Is it simply **not your cup of tea**?",
        "Which activity is **overrated**?"
      ]
    },
    {
      "id": 476,
      "question": "When did you last do something purely because it was silly?",
      "category": "Fun",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "let loose",
          "type": "Phrasal Verb",
          "translation": "scatenarsi",
          "example": "When did you last let loose completely?"
        },
        {
          "phrase": "act your age",
          "type": "Phrase",
          "translation": "comportarsi da adulto",
          "example": "Who told you to act your age?"
        },
        {
          "phrase": "playful",
          "type": "Adjective",
          "translation": "giocoso",
          "example": "Are you still playful as an adult?"
        },
        {
          "phrase": "self-conscious",
          "type": "Adjective",
          "translation": "impacciato",
          "example": "Do you get too self-conscious to be silly?"
        },
        {
          "phrase": "for no reason",
          "type": "Phrase",
          "translation": "senza motivo",
          "example": "Do you ever laugh for no reason?"
        }
      ],
      "guidedQuestions": [
        "When did you last **let loose**?",
        "Who told you to **act your age**?",
        "Are you still **playful**?"
      ]
    },
    {
      "id": 477,
      "question": "What game or activity brings out your competitive side?",
      "category": "Fun",
      "depthLevel": 2,
      "vocabulary": [
        {
          "phrase": "bring out",
          "type": "Phrasal Verb",
          "translation": "far emergere",
          "example": "What can bring out your worst side?"
        },
        {
          "phrase": "a sore loser",
          "type": "Noun Phrase",
          "translation": "chi non sa perdere",
          "example": "Are you a sore loser?"
        },
        {
          "phrase": "take it seriously",
          "type": "Phrase",
          "translation": "prenderla sul serio",
          "example": "Do you take it seriously or laugh it off?"
        },
        {
          "phrase": "trash talk",
          "type": "Noun",
          "translation": "provocazioni",
          "example": "Is trash talk part of the fun?"
        },
        {
          "phrase": "sportsmanship",
          "type": "Noun",
          "translation": "spirito sportivo",
          "example": "Does sportsmanship still matter to you?"
        }
      ],
      "guidedQuestions": [
        "What can **bring out** your worst side?",
        "Are you **a sore loser**?",
        "Does **sportsmanship** still matter?"
      ]
    },
    {
      "id": 478,
      "question": "Would you rather laugh a lot or be deeply moved?",
      "category": "Fun",
      "depthLevel": 3,
      "vocabulary": [
        {
          "phrase": "belly laugh",
          "type": "Noun Phrase",
          "translation": "risata di pancia",
          "example": "When did you last have a proper belly laugh?"
        },
        {
          "phrase": "moved to tears",
          "type": "Phrase",
          "translation": "commosso fino alle lacrime",
          "example": "What last left you moved to tears?"
        },
        {
          "phrase": "light-hearted",
          "type": "Adjective",
          "translation": "spensierato",
          "example": "Do you choose light-hearted films every time?"
        },
        {
          "phrase": "stay with you",
          "type": "Phrase",
          "translation": "restare impresso",
          "example": "Which one will stay with you longer?"
        },
        {
          "phrase": "escapism",
          "type": "Noun",
          "translation": "evasione",
          "example": "Is it escapism, and is that a problem?"
        }
      ],
      "guidedQuestions": [
        "When did you last have a **belly laugh**?",
        "What left you **moved to tears**?",
        "Which will **stay with you** longer?"
      ]
    },
    {
      "id": 479,
      "question": "What would a perfect lazy day look like?",
      "category": "Fun",
      "depthLevel": 1,
      "vocabulary": [
        {
          "phrase": "have a lie-in",
          "type": "Phrase",
          "translation": "dormire fino a tardi",
          "example": "Would you have a lie-in or get up early?"
        },
        {
          "phrase": "potter about",
          "type": "Phrasal Verb",
          "translation": "gironzolare senza scopo",
          "example": "Do you like to potter about the house?"
        },
        {
          "phrase": "guilt-free",
          "type": "Adjective",
          "translation": "senza sensi di colpa",
          "example": "Can you have a guilt-free day off?"
        },
        {
          "phrase": "unwind",
          "type": "Verb",
          "translation": "rilassarsi",
          "example": "What helps you unwind completely?"
        },
        {
          "phrase": "no plans",
          "type": "Phrase",
          "translation": "nessun programma",
          "example": "Is a day with no plans a treat or a worry?"
        }
      ],
      "guidedQuestions": [
        "Would you **have a lie-in**?",
        "Can you have a **guilt-free** day?",
        "Is a day with **no plans** a treat?"
      ]
    }
  ];

export const categories = [...new Set(questions.map(q => q.category))];

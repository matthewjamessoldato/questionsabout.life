import type { Question } from './questions';

export const batch2: Question[] = [
  {
    id: 220,
    question: "What is your most useless, but highly impressive skill?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "party trick", translation: "trucco da festa", type: "Noun Phrase", example: "Being able to recite pi to 100 digits is a neat party trick." },
      { phrase: "show off", translation: "mettersi in mostra", type: "Phrasal Verb", example: "He loves to show off his new language skills." },
      { phrase: "hidden talent", translation: "talento nascosto", type: "Noun Phrase", example: "Does anyone in your family have a funny hidden talent?" },
      { phrase: "useless", translation: "inutile", type: "Adjective", example: "It is a completely useless skill, but I love doing it." },
      { phrase: "knack for", translation: "inclinazione per", type: "Noun Phrase", example: "She has a real knack for remembering random facts." }
    ],
    guidedQuestions: [
      "What is your favorite **party trick**?",
      "Do you think having a **hidden talent** makes someone more interesting?",
      "Who do you know that loves to **show off**?"
    ]
  },
  {
    id: 221,
    question: "If you had to be famous for one highly embarrassing thing, what would you choose?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "go viral", translation: "diventare virale", type: "Verb Phrase", example: "The video of him tripping over the rug went viral." },
      { phrase: "laugh at yourself", translation: "ridere di se stessi", type: "Phrase", example: "You need to learn how to laugh at yourself in life." },
      { phrase: "mortifying", translation: "mortificante", type: "Adjective", example: "It was a mortifying experience to spill coffee on the boss." },
      { phrase: "claim to fame", translation: "motivo di celebrità", type: "Noun Phrase", example: "His only claim to fame is eating 50 hot dogs in ten minutes." },
      { phrase: "own it", translation: "assumersene la responsabilità / farsi scivolare le critiche addosso", type: "Idiom", example: "When you make an embarrassing mistake, just own it." }
    ],
    guidedQuestions: [
      "Have you ever seen something incredibly **mortifying** go viral?",
      "Is it easy for you to **laugh at yourself**?",
      "What is your strangest **claim to fame**?"
    ]
  },
  {
    id: 222,
    question: "What is a controversial opinion you hold about cooking or food?",
    category: "Food",
    depthLevel: 1,
    vocabulary: [
      { phrase: "overrated", translation: "sopravvalutato", type: "Adjective", example: "I think truffle oil is highly overrated." },
      { phrase: "dealbreaker", translation: "fattore decisivo (in negativo)", type: "Noun", example: "For me, having raisins in bread is a dealbreaker." },
      { phrase: "culinary sin", translation: "peccato culinario", type: "Noun Phrase", example: "Putting ketchup on pasta is considered a culinary sin in Italy." },
      { phrase: "acquired taste", translation: "gusto acquisito", type: "Noun Phrase", example: "Black licorice is definitely an acquired taste." },
      { phrase: "picky eater", translation: "schizzinoso (col cibo)", type: "Noun Phrase", example: "Are you an adventurous eater or a picky eater?" }
    ],
    guidedQuestions: [
      "What popular food is completely **overrated** in your opinion?",
      "Is making a traditional recipe incorrectly a **culinary sin**?",
      "Were you a **picky eater** as a child?"
    ]
  },
  {
    id: 223,
    question: "When was the last time you felt truly proud of a friend?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "root for", translation: "fare il tifo per", type: "Phrasal Verb", example: "We were all rooting for her to get the promotion." },
      { phrase: "milestone", translation: "traguardo importante", type: "Noun", example: "Graduating from college is a huge milestone." },
      { phrase: "overcome adversity", translation: "superare le avversità", type: "Collocation", example: "Watching him overcome adversity was incredibly inspiring." },
      { phrase: "beam with pride", translation: "raggiungere dall'orgoglio", type: "Idiom", example: "Her parents were beaming with pride at the wedding." },
      { phrase: "support system", translation: "rete di supporto", type: "Noun Phrase", example: "Having a strong support system makes tough times easier." }
    ],
    guidedQuestions: [
      "Who are you always **rooting for** in life?",
      "When someone hits a major **milestone**, how do you celebrate them?",
      "Why is a reliable **support system** so important?"
    ]
  },
  {
    id: 224,
    question: "What is the most emotionally difficult lesson you had to learn in your 20s?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "hard truth", translation: "dura verità", type: "Noun Phrase", example: "The hard truth is that you cannot please everyone." },
      { phrase: "let go of", translation: "lasciar andare", type: "Phrasal Verb", example: "I had to let go of toxic relationships to find peace." },
      { phrase: "trial by fire", translation: "prova del fuoco (imparare in situazioni difficili)", type: "Idiom", example: "My first year running a business was a total trial by fire." },
      { phrase: "silver lining", translation: "lato positivo", type: "Idiom", example: "Even in a painful breakup, there is usually a silver lining." },
      { phrase: "hindsight is 20/20", translation: "col senno di poi è tutto chiaro", type: "Idiom", example: "I should not have trusted him, but hindsight is 20/20." }
    ],
    guidedQuestions: [
      "What **hard truth** took you years to finally accept?",
      "Is it true that **hindsight is 20/20**, or do we still repeat mistakes?",
      "Have you ever struggled to **let go of** a dream?"
    ]
  },
  {
    id: 225,
    question: "If you could only keep three memories before losing the rest of your mind, what would they be?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "cherish", translation: "custodire gelosamente", type: "Verb", example: "I cherish the summers I spent at my grandparents' house." },
      { phrase: "fade away", translation: "svanire / sbiadire", type: "Phrasal Verb", example: "Over time, even the most important memories fade away." },
      { phrase: "core memory", translation: "ricordo fondamentale", type: "Noun Phrase", example: "That family trip to the lake is a core memory for me." },
      { phrase: "flashback", translation: "ritorno di fiamma / flashback", type: "Noun", example: "The smell of that perfume gave me a sudden flashback." },
      { phrase: "hold onto", translation: "aggrapparsi a", type: "Phrasal Verb", example: "Why do we hold onto memories of people who hurt us?" }
    ],
    guidedQuestions: [
      "What is one **core memory** from your childhood?",
      "Why do some painful memories never **fade away**?",
      "What do you **cherish** most about your current life?"
    ]
  },
  {
    id: 226,
    question: "Do you think suffering is absolutely necessary to create great art or achieve wisdom?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "romanticize", translation: "romanticizzare", type: "Verb", example: "Society tends to romanticize the 'starving artist' trope." },
      { phrase: "catalyst", translation: "catalizzatore", type: "Noun", example: "Pain is often a powerful catalyst for personal growth." },
      { phrase: "inner turmoil", translation: "tormento interiore", type: "Noun Phrase", example: "His paintings perfectly capture his deep inner turmoil." },
      { phrase: "school of hard knocks", translation: "l'università della strada / la dura scuola della vita", type: "Idiom", example: "She didn't get a degree; she learned from the school of hard knocks." },
      { phrase: "profound", translation: "profondo", type: "Adjective", example: "Only through loss did he write something truly profound." }
    ],
    guidedQuestions: [
      "Do we culturally **romanticize** pain too much?",
      "Can pure happiness ever be a **catalyst** for great art?",
      "Why is **inner turmoil** so compelling in movies and books?"
    ]
  },
  {
    id: 227,
    question: "Do you think the universe is chaotic and random, or is there a hidden order?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "blind chance", translation: "puro caso", type: "Noun Phrase", example: "Do you believe meeting your partner was destiny or blind chance?" },
      { phrase: "grand design", translation: "disegno superiore", type: "Noun Phrase", example: "Some argue that the complexity of nature points to a grand design." },
      { phrase: "ripple effect", translation: "effetto a catena", type: "Noun Phrase", example: "One small decision can create a massive ripple effect in your life." },
      { phrase: "meaningless", translation: "privo di senso", type: "Adjective", example: "If everything is meaningless, how do you find purpose?" },
      { phrase: "interconnected", translation: "interconnesso", type: "Adjective", example: "Eastern philosophies often view everything in the universe as interconnected." }
    ],
    guidedQuestions: [
      "Do you think your life is guided by a **grand design** or **blind chance**?",
      "How do small choices create a **ripple effect** in your career?",
      "Does the idea of a chaotic, **meaningless** universe scare you?"
    ]
  },
  {
    id: 228,
    question: "What is the most 'out of character' thing you've ever done?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "act on impulse", translation: "agire d'impulso", type: "Phrase", example: "I rarely act on impulse, but buying that ticket was spontaneous." },
      { phrase: "step out of my comfort zone", translation: "uscire dalla mia zona di comfort", type: "Idiom", example: "Taking a dance class was a big step out of my comfort zone." },
      { phrase: "uncharacteristic", translation: "insolito (per la persona)", type: "Adjective", example: "His sudden angry outburst was highly uncharacteristic." },
      { phrase: "let your hair down", translation: "lasciarsi andare", type: "Idiom", example: "At the Christmas party, she finally let her hair down." },
      { phrase: "spur of the moment", translation: "succo del momento / impulso del momento", type: "Idiom", example: "It was a spur of the moment decision to move to Paris." }
    ],
    guidedQuestions: [
      "Have you ever made a major decision on the **spur of the moment**?",
      "Why is it healthy to **step out of your comfort zone** occasionally?",
      "What is something completely **uncharacteristic** of you?"
    ]
  },
  {
    id: 229,
    question: "If you could see statistics hovering over people's heads, what stat would you want to see?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "hidden agenda", translation: "secondo fine", type: "Noun Phrase", example: "I wish I could see who has a hidden agenda in business meetings." },
      { phrase: "break the ice", translation: "rompere il ghiaccio", type: "Idiom", example: "Knowing someone's favorite hobby would make it easy to break the ice." },
      { phrase: "compatibility", translation: "compatibilità", type: "Noun", example: "Imagine seeing a compatibility score above everyone you date." },
      { phrase: "vibe check", translation: "controllo dell'energia / atmosfera", type: "Slang", example: "Seeing their 'kindness score' would be the ultimate vibe check." },
      { phrase: "intrusive", translation: "invadente", type: "Adjective", example: "Knowing everyone's secrets would feel far too intrusive." }
    ],
    guidedQuestions: [
      "Would seeing a **compatibility** score ruin the magic of dating?",
      "How do you usually figure out if someone has a **hidden agenda**?",
      "Would knowing everyone's biggest fear be helpful or **intrusive**?"
    ]
  },
  {
    id: 230,
    question: "What is the most beautiful sound you have ever heard in nature?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "soothing", translation: "rilassante / calmante", type: "Adjective", example: "The sound of rain against the window is incredibly soothing." },
      { phrase: "deafening silence", translation: "silenzio assordante", type: "Oxymoron", example: "In the middle of the desert, the deafening silence is magical." },
      { phrase: "rustling leaves", translation: "foglie che frusciano", type: "Collocation", example: "I love hiking and listening to the wind and rustling leaves." },
      { phrase: "in awe", translation: "in soggezione / incantato", type: "Idiom", example: "Standing next to the waterfall left me completely in awe." },
      { phrase: "unwind", translation: "rilassarsi", type: "Verb", example: "Nature sounds are the best way to unwind after a stressful week." }
    ],
    guidedQuestions: [
      "Do you find the sound of a thunderstorm frightening or **soothing**?",
      "When was the last time a landscape left you **in awe**?",
      "Why do most people use nature sounds to **unwind**?"
    ]
  },
  {
    id: 231,
    question: "Which of your current habits would your childhood self be most surprised by?",
    category: "Personal",
    depthLevel: 2,
    vocabulary: [
      { phrase: "old habits die hard", translation: "le vecchie abitudini sono dure a morire", type: "Idiom", example: "I still bite my nails when I get nervous; old habits die hard." },
      { phrase: "transform", translation: "trasformare", type: "Verb", example: "Moving abroad completely transformed my daily routine." },
      { phrase: "acquire a taste", translation: "acquisire un gusto per qualcosa", type: "Phrase", example: "I never thought I would acquire a taste for black coffee." },
      { phrase: "outgrow", translation: "superare crescendo", type: "Verb", example: "Did you outgrow your love for video games?" },
      { phrase: "second nature", translation: "seconda natura (istinto)", type: "Idiom", example: "Waking up at 5am has become second nature to me." }
    ],
    guidedQuestions: [
      "What is something you used to hate, but now it is **second nature** to do?",
      "Did you **outgrow** your childhood friends or stay close?",
      "Why is true that **old habits die hard**?"
    ]
  },
  {
    id: 232,
    question: "What is the one phrase you hear people say that instantly annoys you?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "pet peeve", translation: "fastidio personale", type: "Noun Phrase", example: "People chewing loudly is my biggest pet peeve." },
      { phrase: "buzzword", translation: "parola d'ordine (moda)", type: "Noun", example: "Corporate emails are always full of meaningless buzzwords." },
      { phrase: "grate on my nerves", translation: "urtare i nervi", type: "Idiom", example: "Hearing the phrase 'it is what it is' really grates on my nerves." },
      { phrase: "cliché", translation: "cliché / luogo comune", type: "Noun", example: "I hate romantic movies that rely on every cliché in the book." },
      { phrase: "roll my eyes", translation: "alzare gli occhi al cielo", type: "Idiom", example: "I always roll my eyes when influencers say 'link in bio'." }
    ],
    guidedQuestions: [
      "What corporate **buzzword** do you hear way too often?",
      "What is your biggest conversational **pet peeve**?",
      "Does the phrase 'everything happens for a reason' comfort you or make you **roll your eyes**?"
    ]
  },
  {
    id: 233,
    question: "If you were forced to give up music or movies for the rest of your life, which would you sacrifice?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "tough call", translation: "scelta difficile", type: "Idiom", example: "Deciding between pizza and sushi is always a tough call." },
      { phrase: "soundtrack to your life", translation: "colonna sonora della propria vita", type: "Idiom", example: "Music acts as the emotional soundtrack to your life." },
      { phrase: "escapism", translation: "escapismo / evasione", type: "Noun", example: "Watching fantasy movies is my favorite form of escapism." },
      { phrase: "resonates with", translation: "risuona con", type: "Phrasal Verb", example: "Which song deeply resonates with your current mood?" },
      { phrase: "make a sacrifice", translation: "fare un sacrificio", type: "Phrase", example: "Sometimes you must make a sacrifice to achieve big goals." }
    ],
    guidedQuestions: [
      "Why do specific songs suddenly become the **soundtrack to your life**?",
      "Is cinema the ultimate form of **escapism**?",
      "What is a **tough call** you recently had to make?"
    ]
  },
  {
    id: 234,
    question: "What is something deeply unethical that humanity accepts as totally normal?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "turn a blind eye", translation: "chiudere un occhio", type: "Idiom", example: "We turn a blind eye to the reality of factory farming." },
      { phrase: "status quo", translation: "lo stato delle cose / lo status quo", type: "Noun", example: "People are terrified of challenging the terrifying status quo." },
      { phrase: "normalized", translation: "normalizzato", type: "Adjective", example: "Working 60 hours a week has been completely normalized." },
      { phrase: "cognitive dissonance", translation: "dissonanza cognitiva", type: "Noun Phrase", example: "Buying cheap clothes from sweatshops requires immense cognitive dissonance." },
      { phrase: "moral compass", translation: "bussola morale", type: "Noun Phrase", example: "Does a high salary often compromise a person's moral compass?" }
    ],
    guidedQuestions: [
      "Why is extreme wealth inequality **normalized** in modern society?",
      "Do you think humanity's **moral compass** is improving or decaying?",
      "Why do we **turn a blind eye** to global suffering?"
    ]
  }
];

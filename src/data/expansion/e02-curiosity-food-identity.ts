import type { AuthoredQuestion } from '../authoring';

export const batch: AuthoredQuestion[] = [
  {
    question: "What is something you stopped being curious about, and why?",
    category: "Curiosity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "lose interest", type: "Phrase", translation: "perdere interesse", example: "When exactly did you lose interest in it?" },
      { phrase: "take something for granted", type: "Idiom", translation: "dare qualcosa per scontato", example: "We take the strangest things for granted as adults." },
      { phrase: "wonder", type: "Noun", translation: "meraviglia", example: "Do you still feel any wonder about the world?" },
      { phrase: "jaded", type: "Adjective", translation: "disilluso", example: "Have you become jaded about things you once loved?" },
      { phrase: "rekindle", type: "Verb", translation: "riaccendere", example: "How would you rekindle that curiosity?" }
    ],
    guidedQuestions: [
      "When did you **lose interest** in it?",
      "Do you still feel any **wonder** about the world?",
      "How could you **rekindle** it?"
    ]
  },
  {
    question: "What question would you ask if you knew you would get a true answer?",
    category: "Curiosity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "burning question", type: "Noun Phrase", translation: "domanda scottante", example: "What is your burning question about your own life?" },
      { phrase: "dying to know", type: "Idiom", translation: "morire dalla voglia di sapere", example: "What are you dying to know but afraid to ask?" },
      { phrase: "the unvarnished truth", type: "Noun Phrase", translation: "la verità nuda e cruda", example: "Could you handle the unvarnished truth?" },
      { phrase: "regret asking", type: "Phrase", translation: "pentirsi di aver chiesto", example: "Would you regret asking it?" },
      { phrase: "peace of mind", type: "Noun Phrase", translation: "serenità", example: "Would the answer cost you your peace of mind?" }
    ],
    guidedQuestions: [
      "What is your **burning question**?",
      "What are you **dying to know** but afraid to ask?",
      "Could you handle **the unvarnished truth**?"
    ]
  },
  {
    question: "Do you prefer to know how something works or just enjoy it?",
    category: "Curiosity",
    depthLevel: 2,
    vocabulary: [
      { phrase: "take apart", type: "Phrasal Verb", translation: "smontare", example: "Were you the child who liked to take apart every gadget?" },
      { phrase: "spoil the magic", type: "Phrase", translation: "rovinare la magia", example: "Does understanding it spoil the magic?" },
      { phrase: "under the hood", type: "Idiom", translation: "sotto il cofano", example: "Do you want to see under the hood, or just drive?" },
      { phrase: "nuts and bolts", type: "Idiom", translation: "aspetti pratici", example: "Are you interested in the nuts and bolts of it?" },
      { phrase: "blissfully unaware", type: "Phrase", translation: "beatamente ignaro", example: "Sometimes it is better to stay blissfully unaware." }
    ],
    guidedQuestions: [
      "Were you the child who had to **take apart** everything?",
      "Does knowing **spoil the magic**?",
      "Do you care about the **nuts and bolts**?"
    ]
  },
  {
    question: "What do you pretend to understand but do not?",
    category: "Curiosity",
    depthLevel: 3,
    vocabulary: [
      { phrase: "nod along", type: "Phrasal Verb", translation: "annuire per finta", example: "How often do you just nod along in meetings?" },
      { phrase: "save face", type: "Idiom", translation: "salvare la faccia", example: "We stay quiet to save face." },
      { phrase: "out of your depth", type: "Idiom", translation: "fuori dalla propria portata", example: "When did you last feel out of your depth?" },
      { phrase: "admit ignorance", type: "Phrase", translation: "ammettere la propria ignoranza", example: "Why is it so hard to admit ignorance?" },
      { phrase: "look it up", type: "Phrasal Verb", translation: "cercarlo", example: "Do you look it up afterwards, or forget about it?" }
    ],
    guidedQuestions: [
      "How often do you just **nod along**?",
      "When did you last feel **out of your depth**?",
      "Why is it hard to **admit ignorance**?"
    ]
  },
  {
    question: "If you could watch one hour of any moment in history, which would it be?",
    category: "Curiosity",
    depthLevel: 3,
    vocabulary: [
      { phrase: "a fly on the wall", type: "Idiom", translation: "una mosca sul muro", example: "Where would you be a fly on the wall?" },
      { phrase: "witness", type: "Verb", translation: "assistere a", example: "What would you want to witness with your own eyes?" },
      { phrase: "turning point", type: "Noun Phrase", translation: "punto di svolta", example: "Which turning point in history fascinates you?" },
      { phrase: "first-hand", type: "Adjective", translation: "di prima mano", example: "Would first-hand experience change your view?" },
      { phrase: "shed light on", type: "Idiom", translation: "far luce su", example: "What would it shed light on?" }
    ],
    guidedQuestions: [
      "Where would you be **a fly on the wall**?",
      "Which **turning point** fascinates you?",
      "What would it **shed light on**?"
    ]
  },
  {
    question: "What is the last thing that genuinely surprised you?",
    category: "Curiosity",
    depthLevel: 2,
    vocabulary: [
      { phrase: "caught off guard", type: "Phrase", translation: "colto alla sprovvista", example: "When were you last caught off guard by good news?" },
      { phrase: "out of the blue", type: "Idiom", translation: "di punto in bianco", example: "It came completely out of the blue." },
      { phrase: "take aback", type: "Phrasal Verb", translation: "sconcertare", example: "I was really taken aback by their reaction." },
      { phrase: "predictable", type: "Adjective", translation: "prevedibile", example: "Has your life become too predictable?" },
      { phrase: "eye-opening", type: "Adjective", translation: "illuminante", example: "It was a genuinely eye-opening moment." }
    ],
    guidedQuestions: [
      "When were you last **caught off guard**?",
      "Did it come **out of the blue**?",
      "Has your life become too **predictable**?"
    ]
  },
  {
    question: "Would you read a book that changed your mind about something you care about?",
    category: "Curiosity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "change your mind", type: "Phrase", translation: "cambiare idea", example: "When did you last genuinely change your mind?" },
      { phrase: "confirmation bias", type: "Noun Phrase", translation: "bias di conferma", example: "Confirmation bias makes us read what we already believe." },
      { phrase: "seek out", type: "Phrasal Verb", translation: "andare in cerca di", example: "Do you seek out views that oppose yours?" },
      { phrase: "unsettling", type: "Adjective", translation: "inquietante", example: "Good arguments can be deeply unsettling." },
      { phrase: "stand your ground", type: "Idiom", translation: "tenere il punto", example: "Do you stand your ground, or stay open?" }
    ],
    guidedQuestions: [
      "When did you last really **change your mind**?",
      "Do you **seek out** views that oppose yours?",
      "When should you **stand your ground**?"
    ]
  },
  {
    question: "What would you study if nobody ever asked what you would do with it?",
    category: "Curiosity",
    depthLevel: 3,
    vocabulary: [
      { phrase: "for its own sake", type: "Phrase", translation: "fine a se stesso", example: "Can you learn something for its own sake?" },
      { phrase: "impractical", type: "Adjective", translation: "poco pratico", example: "What impractical subject secretly appeals to you?" },
      { phrase: "delve into", type: "Phrasal Verb", translation: "approfondire", example: "What would you delve into for a whole year?" },
      { phrase: "justify", type: "Verb", translation: "giustificare", example: "Why do we feel we must justify our interests?" },
      { phrase: "a rabbit hole", type: "Idiom", translation: "un buco nero (di approfondimento)", example: "Which rabbit hole could you disappear into?" }
    ],
    guidedQuestions: [
      "Can you learn something **for its own sake**?",
      "What would you **delve into** for a year?",
      "Which **rabbit hole** could you disappear into?"
    ]
  },
  {
    question: "Is there anything you would rather not know about yourself?",
    category: "Curiosity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "ignorance is bliss", type: "Idiom", translation: "l'ignoranza è una benedizione", example: "Is ignorance really bliss in this case?" },
      { phrase: "blind spot", type: "Noun Phrase", translation: "punto cieco", example: "What is your biggest blind spot?" },
      { phrase: "face up to", type: "Phrasal Verb", translation: "affrontare", example: "What would you have to face up to?" },
      { phrase: "self-deception", type: "Noun", translation: "autoinganno", example: "How much self-deception keeps you comfortable?" },
      { phrase: "open a can of worms", type: "Idiom", translation: "aprire un vaso di Pandora", example: "Asking that would open a can of worms." }
    ],
    guidedQuestions: [
      "Is **ignorance** really **bliss** here?",
      "What is your biggest **blind spot**?",
      "What would you have to **face up to**?"
    ]
  },
  {
    question: "What do children ask that adults have stopped asking?",
    category: "Curiosity",
    depthLevel: 3,
    vocabulary: [
      { phrase: "why", type: "Noun", translation: "il perché", example: "Children never run out of the why." },
      { phrase: "grow out of", type: "Phrasal Verb", translation: "smettere con la crescita", example: "Why do we grow out of asking questions?" },
      { phrase: "settle for", type: "Phrasal Verb", translation: "accontentarsi di", example: "Adults settle for answers that explain nothing." },
      { phrase: "childlike", type: "Adjective", translation: "fanciullesco", example: "Is childlike curiosity worth protecting?" },
      { phrase: "embarrassing question", type: "Noun Phrase", translation: "domanda imbarazzante", example: "What embarrassing question would you love to ask?" }
    ],
    guidedQuestions: [
      "Why do we **grow out of** asking?",
      "Why do adults **settle for** empty answers?",
      "Is **childlike** curiosity worth protecting?"
    ]
  },
  {
    question: "What everyday object would you most like explained to you properly?",
    category: "Curiosity",
    depthLevel: 2,
    vocabulary: [
      { phrase: "take for granted", type: "Idiom", translation: "dare per scontato", example: "Which object do you completely take for granted?" },
      { phrase: "figure out", type: "Phrasal Verb", translation: "capire", example: "Have you ever tried to figure out how it works?" },
      { phrase: "black box", type: "Noun Phrase", translation: "scatola nera", example: "For most of us a phone is a black box." },
      { phrase: "in plain English", type: "Idiom", translation: "in parole povere", example: "Could someone explain it in plain English?" },
      { phrase: "mundane", type: "Adjective", translation: "banale", example: "The most mundane objects hide the best stories." }
    ],
    guidedQuestions: [
      "Which object do you **take for granted**?",
      "Is it a complete **black box** to you?",
      "Could someone explain it **in plain English**?"
    ]
  },
  {
    question: "Do you ask people questions because you care, or because you are curious?",
    category: "Curiosity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "nosy", type: "Adjective", translation: "ficcanaso", example: "Is there a line between curious and nosy?" },
      { phrase: "genuine interest", type: "Noun Phrase", translation: "interesse sincero", example: "Can people tell the difference between genuine interest and prying?" },
      { phrase: "pry", type: "Verb", translation: "ficcare il naso", example: "When does a question start to pry?" },
      { phrase: "draw someone out", type: "Phrasal Verb", translation: "far aprire qualcuno", example: "How do you draw a quiet person out?" },
      { phrase: "an ulterior motive", type: "Noun Phrase", translation: "un secondo fine", example: "Do your questions ever have an ulterior motive?" }
    ],
    guidedQuestions: [
      "Where is the line between curious and **nosy**?",
      "Can people sense **genuine interest**?",
      "How do you **draw** a quiet person **out**?"
    ]
  },

  {
    question: "What meal would you want as your last?",
    category: "Food",
    depthLevel: 2,
    vocabulary: [
      { phrase: "comfort food", type: "Noun Phrase", translation: "cibo consolatorio", example: "Is your answer comfort food or something impressive?" },
      { phrase: "mouth-watering", type: "Adjective", translation: "che fa venire l'acquolina", example: "Describe something mouth-watering from your childhood." },
      { phrase: "savour", type: "Verb", translation: "assaporare", example: "Would you savour every bite, or eat it too fast?" },
      { phrase: "go-to dish", type: "Noun Phrase", translation: "piatto di riferimento", example: "What is your go-to dish when you need cheering up?" },
      { phrase: "nostalgia", type: "Noun", translation: "nostalgia", example: "How much of taste is pure nostalgia?" }
    ],
    guidedQuestions: [
      "Is it **comfort food** or something impressive?",
      "Would you **savour** every bite?",
      "How much of it is **nostalgia**?"
    ]
  },
  {
    question: "Does the food you grew up with still taste like home?",
    category: "Food",
    depthLevel: 3,
    vocabulary: [
      { phrase: "taste of home", type: "Noun Phrase", translation: "sapore di casa", example: "What is your taste of home?" },
      { phrase: "bring back memories", type: "Phrase", translation: "riportare alla memoria", example: "Which smell brings back memories instantly?" },
      { phrase: "acquired taste", type: "Noun Phrase", translation: "gusto che si acquisisce", example: "Was it an acquired taste, or love at first bite?" },
      { phrase: "just like grandma used to make", type: "Phrase", translation: "come le faceva la nonna", example: "Nothing is ever just like grandma used to make." },
      { phrase: "outgrow", type: "Verb", translation: "superare con l'età", example: "Have you outgrown any childhood favourites?" }
    ],
    guidedQuestions: [
      "What is your **taste of home**?",
      "Which smell can **bring back memories** instantly?",
      "Have you **outgrown** any childhood favourite?"
    ]
  },
  {
    question: "Is cooking for someone a bigger gesture than buying them a gift?",
    category: "Food",
    depthLevel: 3,
    vocabulary: [
      { phrase: "from scratch", type: "Idiom", translation: "da zero", example: "Does it count more if you made it from scratch?" },
      { phrase: "put effort in", type: "Phrase", translation: "metterci impegno", example: "People notice when you put real effort in." },
      { phrase: "a labour of love", type: "Idiom", translation: "un lavoro fatto con amore", example: "A long recipe is a labour of love." },
      { phrase: "thoughtful", type: "Adjective", translation: "premuroso", example: "Which is more thoughtful, time or money?" },
      { phrase: "break bread", type: "Idiom", translation: "spezzare il pane insieme", example: "There is something ancient about breaking bread together." }
    ],
    guidedQuestions: [
      "Does **from scratch** genuinely count more?",
      "Is it **a labour of love** or just work?",
      "Why does it matter to **break bread** together?"
    ]
  },
  {
    question: "What food do you refuse to try, and what is that really about?",
    category: "Food",
    depthLevel: 3,
    vocabulary: [
      { phrase: "put off by", type: "Phrasal Verb", translation: "scoraggiato da", example: "Are you put off by the texture or the idea?" },
      { phrase: "fussy eater", type: "Noun Phrase", translation: "schizzinoso a tavola", example: "Were you a fussy eater as a child?" },
      { phrase: "an open mind", type: "Noun Phrase", translation: "una mente aperta", example: "Do you approach food with an open mind?" },
      { phrase: "turn your nose up at", type: "Idiom", translation: "storcere il naso davanti a", example: "What do you turn your nose up at?" },
      { phrase: "squeamish", type: "Adjective", translation: "schizzinoso, impressionabile", example: "Are you squeamish about certain ingredients?" }
    ],
    guidedQuestions: [
      "Are you **put off by** the texture or the idea?",
      "Were you a **fussy eater** as a child?",
      "What do you **turn your nose up at**?"
    ]
  },
  {
    question: "Would you rather eat alone in peace or in company with noise?",
    category: "Food",
    depthLevel: 2,
    vocabulary: [
      { phrase: "wolf down", type: "Phrasal Verb", translation: "divorare", example: "Do you wolf down lunch at your desk?" },
      { phrase: "linger", type: "Verb", translation: "attardarsi", example: "Do you linger at the table after eating?" },
      { phrase: "in good company", type: "Phrase", translation: "in buona compagnia", example: "Food tastes better in good company." },
      { phrase: "a moment to yourself", type: "Noun Phrase", translation: "un momento per sé", example: "Is lunch your only moment to yourself?" },
      { phrase: "eat on the go", type: "Phrase", translation: "mangiare di corsa", example: "How often do you eat on the go?" }
    ],
    guidedQuestions: [
      "Do you **wolf down** your lunch?",
      "Do you **linger** at the table?",
      "How often do you **eat on the go**?"
    ]
  },
  {
    question: "What does the way someone eats tell you about them?",
    category: "Food",
    depthLevel: 3,
    vocabulary: [
      { phrase: "table manners", type: "Noun Phrase", translation: "buone maniere a tavola", example: "Do table manners still matter to you?" },
      { phrase: "make a judgement", type: "Phrase", translation: "dare un giudizio", example: "Do you make a judgement about someone from one meal?" },
      { phrase: "tell-tale sign", type: "Noun Phrase", translation: "segno rivelatore", example: "What is a tell-tale sign of how someone was raised?" },
      { phrase: "adventurous", type: "Adjective", translation: "avventuroso", example: "Do adventurous eaters make better company?" },
      { phrase: "reveal", type: "Verb", translation: "rivelare", example: "A shared meal reveals more than an interview." }
    ],
    guidedQuestions: [
      "Do **table manners** still matter?",
      "What is the **tell-tale sign** you notice?",
      "Do **adventurous** eaters make better company?"
    ]
  },
  {
    question: "Is it wrong to spend a lot of money on one meal?",
    category: "Food",
    depthLevel: 3,
    vocabulary: [
      { phrase: "splash out", type: "Phrasal Verb", translation: "spendere e spandere", example: "When did you last splash out on dinner?" },
      { phrase: "worth every penny", type: "Idiom", translation: "vale ogni centesimo", example: "Was it worth every penny?" },
      { phrase: "an indulgence", type: "Noun", translation: "uno sfizio", example: "Is it a harmless indulgence or genuine waste?" },
      { phrase: "value for money", type: "Noun Phrase", translation: "rapporto qualità-prezzo", example: "Do you always think about value for money?" },
      { phrase: "an experience, not a meal", type: "Phrase", translation: "un'esperienza, non un pasto", example: "You are paying for an experience, not a meal." }
    ],
    guidedQuestions: [
      "When did you last **splash out**?",
      "Was it **worth every penny**?",
      "Is it a harmless **indulgence**?"
    ]
  },
  {
    question: "What dish would you want to learn from someone before they are gone?",
    category: "Food",
    depthLevel: 4,
    vocabulary: [
      { phrase: "pass down a recipe", type: "Phrase", translation: "tramandare una ricetta", example: "Has anyone passed down a recipe to you?" },
      { phrase: "by heart", type: "Idiom", translation: "a memoria", example: "She cooked it by heart, never with a book." },
      { phrase: "a pinch of this", type: "Phrase", translation: "un pizzico di questo", example: "The recipe is a pinch of this and a handful of that." },
      { phrase: "lost forever", type: "Phrase", translation: "perduto per sempre", example: "Some recipes are lost forever when someone dies." },
      { phrase: "get it right", type: "Phrase", translation: "farlo come si deve", example: "Will you ever get it right the way they did?" }
    ],
    guidedQuestions: [
      "Did anyone **pass down a recipe** to you?",
      "Do they cook it **by heart**?",
      "Will you ever **get it right**?"
    ]
  },
  {
    question: "Do you eat to live, or live to eat?",
    category: "Food",
    depthLevel: 2,
    vocabulary: [
      { phrase: "fuel", type: "Noun", translation: "carburante", example: "Is food just fuel for you?" },
      { phrase: "a foodie", type: "Noun", translation: "un buongustaio", example: "Would you call yourself a foodie?" },
      { phrase: "look forward to", type: "Phrasal Verb", translation: "non vedere l'ora di", example: "Do you look forward to meals all day?" },
      { phrase: "grab a bite", type: "Idiom", translation: "mangiare un boccone", example: "I usually just grab a bite between meetings." },
      { phrase: "pleasure", type: "Noun", translation: "piacere", example: "How much daily pleasure comes from eating?" }
    ],
    guidedQuestions: [
      "Is food just **fuel** to you?",
      "Would you call yourself **a foodie**?",
      "Do you **look forward to** meals all day?"
    ]
  },
  {
    question: "What would change if you had to grow or catch everything you ate?",
    category: "Food",
    depthLevel: 4,
    vocabulary: [
      { phrase: "from farm to table", type: "Phrase", translation: "dalla fattoria alla tavola", example: "Do you think about the journey from farm to table?" },
      { phrase: "disconnected", type: "Adjective", translation: "scollegato", example: "Are we disconnected from where food comes from?" },
      { phrase: "waste", type: "Verb", translation: "sprecare", example: "Would you waste less if you grew it yourself?" },
      { phrase: "appreciate", type: "Verb", translation: "apprezzare", example: "Would you appreciate every meal more?" },
      { phrase: "back-breaking", type: "Adjective", translation: "massacrante", example: "Growing your own food is back-breaking work." }
    ],
    guidedQuestions: [
      "Are we **disconnected** from our food?",
      "Would you **waste** less?",
      "Could you handle **back-breaking** work daily?"
    ]
  },
  {
    question: "What is the best thing you have ever eaten while travelling?",
    category: "Food",
    depthLevel: 2,
    vocabulary: [
      { phrase: "street food", type: "Noun Phrase", translation: "cibo di strada", example: "Is the best street food always the simplest?" },
      { phrase: "off the beaten track", type: "Idiom", translation: "fuori dai percorsi turistici", example: "Did you find it off the beaten track?" },
      { phrase: "hole in the wall", type: "Idiom", translation: "localino nascosto", example: "The best meal was in a hole in the wall." },
      { phrase: "recreate", type: "Verb", translation: "ricreare", example: "Have you ever tried to recreate it at home?" },
      { phrase: "it just hits different", type: "Phrase", translation: "ha tutto un altro sapore", example: "Eaten there, it just hits different." }
    ],
    guidedQuestions: [
      "Was it **off the beaten track**?",
      "Was it a **hole in the wall**?",
      "Did you try to **recreate** it at home?"
    ]
  },
  {
    question: "Should a host cook what they love or what the guest loves?",
    category: "Food",
    depthLevel: 3,
    vocabulary: [
      { phrase: "play it safe", type: "Idiom", translation: "andare sul sicuro", example: "Do you play it safe when guests come?" },
      { phrase: "show off", type: "Phrasal Verb", translation: "mettersi in mostra", example: "Is cooking for guests a chance to show off?" },
      { phrase: "cater to", type: "Verb", translation: "soddisfare le esigenze di", example: "How far should you cater to everyone's diet?" },
      { phrase: "crowd-pleaser", type: "Noun", translation: "piatto che piace a tutti", example: "Every host needs one reliable crowd-pleaser." },
      { phrase: "put your heart into", type: "Phrase", translation: "metterci il cuore", example: "You can taste it when someone puts their heart into a dish." }
    ],
    guidedQuestions: [
      "Do you **play it safe** with guests?",
      "Is it a chance to **show off**?",
      "What is your **crowd-pleaser**?"
    ]
  },

  {
    question: "Who were you before other people had opinions about you?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "shape", type: "Verb", translation: "plasmare", example: "How much did other people shape who you became?" },
      { phrase: "true self", type: "Noun Phrase", translation: "vero sé", example: "Is there a true self underneath all of it?" },
      { phrase: "internalise", type: "Verb", translation: "interiorizzare", example: "Which criticism did you internalise as a child?" },
      { phrase: "peel back the layers", type: "Idiom", translation: "togliere gli strati", example: "What happens when you peel back the layers?" },
      { phrase: "conditioning", type: "Noun", translation: "condizionamento", example: "How much of your taste is just conditioning?" }
    ],
    guidedQuestions: [
      "How much did others **shape** you?",
      "Which criticism did you **internalise**?",
      "What is left when you **peel back the layers**?"
    ]
  },
  {
    question: "Which label that people use for you fits worst?",
    category: "Identity",
    depthLevel: 3,
    vocabulary: [
      { phrase: "pigeonhole", type: "Verb", translation: "etichettare", example: "Have you been pigeonholed by one trait?" },
      { phrase: "live down", type: "Phrasal Verb", translation: "far dimenticare", example: "Is there a reputation you can never live down?" },
      { phrase: "reduce someone to", type: "Phrase", translation: "ridurre qualcuno a", example: "People reduce you to a single word." },
      { phrase: "misread", type: "Verb", translation: "fraintendere", example: "Are you often misread by strangers?" },
      { phrase: "shorthand", type: "Noun", translation: "scorciatoia (linguistica)", example: "Labels are lazy shorthand for a whole person." }
    ],
    guidedQuestions: [
      "Have you been **pigeonholed**?",
      "Is there something you can never **live down**?",
      "Are you often **misread**?"
    ]
  },
  {
    question: "Are you the same person online as you are in a room?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "curate", type: "Verb", translation: "curare, selezionare", example: "How carefully do you curate what you post?" },
      { phrase: "highlight reel", type: "Noun Phrase", translation: "raccolta dei momenti migliori", example: "Your profile is a highlight reel, not a life." },
      { phrase: "let the mask slip", type: "Idiom", translation: "far cadere la maschera", example: "When did you last let the mask slip?" },
      { phrase: "authentic", type: "Adjective", translation: "autentico", example: "Is anyone truly authentic online?" },
      { phrase: "a persona", type: "Noun", translation: "un personaggio", example: "Have you built a persona without meaning to?" }
    ],
    guidedQuestions: [
      "How much do you **curate** what you show?",
      "Is your profile just a **highlight reel**?",
      "Have you built **a persona** by accident?"
    ]
  },
  {
    question: "What part of your identity did you choose, and what were you given?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "inherit", type: "Verb", translation: "ereditare", example: "Which beliefs did you simply inherit?" },
      { phrase: "opt out of", type: "Phrasal Verb", translation: "tirarsi fuori da", example: "Can you opt out of the identity you were born into?" },
      { phrase: "by default", type: "Phrase", translation: "per impostazione predefinita", example: "How much of you exists by default?" },
      { phrase: "consciously", type: "Adverb", translation: "consapevolmente", example: "What did you consciously decide to become?" },
      { phrase: "birthright", type: "Noun", translation: "diritto di nascita", example: "Is culture a birthright or a choice?" }
    ],
    guidedQuestions: [
      "Which beliefs did you simply **inherit**?",
      "Can you **opt out of** what you were born into?",
      "What did you **consciously** choose?"
    ]
  },
  {
    question: "If you lost your job tomorrow, how much of you would be gone?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "define yourself by", type: "Phrase", translation: "definirsi in base a", example: "Do you define yourself by what you do?" },
      { phrase: "wrapped up in", type: "Phrase", translation: "tutto preso da", example: "How wrapped up in your work is your identity?" },
      { phrase: "start over", type: "Phrasal Verb", translation: "ricominciare da capo", example: "Could you start over as someone else?" },
      { phrase: "self-worth", type: "Noun", translation: "autostima", example: "Is your self-worth tied to your job title?" },
      { phrase: "who you are", type: "Phrase", translation: "chi sei", example: "What is left of who you are without the role?" }
    ],
    guidedQuestions: [
      "Do you **define yourself by** what you do?",
      "Is your **self-worth** tied to a job title?",
      "Could you **start over** as someone else?"
    ]
  },
  {
    question: "What do you do that nobody would guess from looking at you?",
    category: "Identity",
    depthLevel: 2,
    vocabulary: [
      { phrase: "judge by appearances", type: "Phrase", translation: "giudicare dalle apparenze", example: "People always judge by appearances first." },
      { phrase: "a hidden talent", type: "Noun Phrase", translation: "un talento nascosto", example: "What is your hidden talent?" },
      { phrase: "at odds with", type: "Phrase", translation: "in contrasto con", example: "My hobby is completely at odds with my job." },
      { phrase: "surprise people", type: "Phrase", translation: "sorprendere le persone", example: "Do you like to surprise people who think they know you?" },
      { phrase: "keep quiet about", type: "Phrase", translation: "tenere per sé", example: "What do you keep quiet about at work?" }
    ],
    guidedQuestions: [
      "Do people **judge** you **by appearances**?",
      "What is your **hidden talent**?",
      "What do you **keep quiet about**?"
    ]
  },
  {
    question: "Has anyone ever described you in a way that felt truer than your own words?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "hit the nail on the head", type: "Idiom", translation: "cogliere nel segno", example: "They hit the nail on the head in one sentence." },
      { phrase: "sum up", type: "Phrasal Verb", translation: "riassumere", example: "Can anyone really sum you up?" },
      { phrase: "see through someone", type: "Phrasal Verb", translation: "leggere dentro qualcuno", example: "Who can see straight through you?" },
      { phrase: "put into words", type: "Phrase", translation: "mettere in parole", example: "They put into words what I could not." },
      { phrase: "uncomfortably accurate", type: "Phrase", translation: "scomodamente preciso", example: "It was uncomfortably accurate." }
    ],
    guidedQuestions: [
      "Who **hit the nail on the head** about you?",
      "Who can **see through** you?",
      "Who can **put into words** what you cannot?"
    ]
  },
  {
    question: "Do you become a different person in another language?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "a different side of you", type: "Noun Phrase", translation: "un altro lato di te", example: "Does a second language show a different side of you?" },
      { phrase: "hold back", type: "Phrasal Verb", translation: "trattenersi", example: "Do you hold back more in your second language?" },
      { phrase: "express yourself", type: "Phrase", translation: "esprimersi", example: "Where can you express yourself most fully?" },
      { phrase: "blunt", type: "Adjective", translation: "diretto, brusco", example: "Some people become blunt in a foreign language." },
      { phrase: "find your voice", type: "Idiom", translation: "trovare la propria voce", example: "How long does it take to find your voice in a new language?" }
    ],
    guidedQuestions: [
      "Does it show **a different side of you**?",
      "Do you **hold back** more?",
      "How do you **find your voice** in a new language?"
    ]
  },
  {
    question: "What version of yourself do you miss?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "look back on", type: "Phrasal Verb", translation: "ripensare a", example: "Which years do you look back on fondly?" },
      { phrase: "lose touch with", type: "Phrase", translation: "perdere il contatto con", example: "Is it easy to lose touch with who you used to be?" },
      { phrase: "carefree", type: "Adjective", translation: "spensierato", example: "Were you more carefree then?" },
      { phrase: "get back to", type: "Phrasal Verb", translation: "tornare a", example: "Can you get back to that person?" },
      { phrase: "grow into", type: "Phrasal Verb", translation: "crescere fino a diventare", example: "Or did you simply grow into someone better?" }
    ],
    guidedQuestions: [
      "Which years do you **look back on** fondly?",
      "Did you **lose touch with** that person?",
      "Can you **get back to** them, or did you **grow into** someone better?"
    ]
  },
  {
    question: "Would the ten-year-old you be impressed or confused by your life?",
    category: "Identity",
    depthLevel: 3,
    vocabulary: [
      { phrase: "live up to", type: "Phrasal Verb", translation: "essere all'altezza di", example: "Did you live up to your own expectations?" },
      { phrase: "sell out", type: "Phrasal Verb", translation: "vendersi, tradire i propri ideali", example: "At what point does someone sell out completely?" },
      { phrase: "make sense of", type: "Phrase", translation: "dare un senso a", example: "Could a child make sense of your daily routine?" },
      { phrase: "let down", type: "Phrasal Verb", translation: "deludere", example: "Have you let that child down in any way?" },
      { phrase: "come a long way", type: "Idiom", translation: "aver fatto molta strada", example: "You have come a long way, even if it looks ordinary." }
    ],
    guidedQuestions: [
      "Did you **live up to** your own expectations?",
      "Would they think you had to **sell out**?",
      "Have you **come a long way**?"
    ]
  },
  {
    question: "Is there a room where you always feel like you do not belong?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "imposter syndrome", type: "Noun Phrase", translation: "sindrome dell'impostore", example: "Where does your imposter syndrome hit hardest?" },
      { phrase: "out of place", type: "Phrase", translation: "fuori posto", example: "When do you feel most out of place?" },
      { phrase: "brace yourself", type: "Phrase", translation: "prepararsi psicologicamente", example: "Do you brace yourself before walking in?" },
      { phrase: "hold your own", type: "Idiom", translation: "tenere testa", example: "Can you hold your own in that room?" },
      { phrase: "earned your seat", type: "Phrase", translation: "esserti guadagnato il posto", example: "You earned your seat as much as anyone." }
    ],
    guidedQuestions: [
      "Where does **imposter syndrome** hit hardest?",
      "When do you feel most **out of place**?",
      "Can you **hold your own** there?"
    ]
  },
  {
    question: "What would you have to stop doing to still be yourself?",
    category: "Identity",
    depthLevel: 4,
    vocabulary: [
      { phrase: "non-negotiable", type: "Adjective", translation: "non negoziabile", example: "What is genuinely non-negotiable for you?" },
      { phrase: "core", type: "Noun", translation: "nucleo", example: "What sits at the core of who you are?" },
      { phrase: "strip away", type: "Phrasal Verb", translation: "spogliare, togliere", example: "Strip away the habits and what remains?" },
      { phrase: "a deal-breaker", type: "Noun", translation: "una condizione insormontabile", example: "Which compromise would be a deal-breaker?" },
      { phrase: "compromise", type: "Verb", translation: "scendere a compromessi", example: "How much can you compromise before you disappear?" }
    ],
    guidedQuestions: [
      "What is truly **non-negotiable**?",
      "What sits at your **core**?",
      "How much can you **compromise** before you disappear?"
    ]
  }
];

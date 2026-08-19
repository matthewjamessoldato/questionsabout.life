import type { Question } from '../questions';

export const batch: Omit<Question, 'id'>[] = [
  {
    question: "What emotion do you find hardest to admit to?",
    category: "Feelings",
    depthLevel: 4,
    vocabulary: [
      { phrase: "own up to", type: "Phrasal Verb", translation: "ammettere", example: "Which feeling can you never own up to out loud?" },
      { phrase: "envy", type: "Noun", translation: "invidia", example: "Is envy the emotion nobody will confess to?" },
      { phrase: "bottle up", type: "Phrasal Verb", translation: "reprimere", example: "Do you bottle up anger until it leaks out?" },
      { phrase: "vulnerable", type: "Adjective", translation: "vulnerabile", example: "Does admitting it make you feel too vulnerable?" },
      { phrase: "put on a brave face", type: "Idiom", translation: "fare buon viso", example: "How often do you put on a brave face?" }
    ],
    guidedQuestions: [
      "Which feeling can you never **own up to**?",
      "Do you **bottle up** anger until it leaks?",
      "How often do you **put on a brave face**?"
    ]
  },
  {
    question: "When did you last cry, and what caused it?",
    category: "Feelings",
    depthLevel: 3,
    vocabulary: [
      { phrase: "well up", type: "Phrasal Verb", translation: "inumidirsi (gli occhi)", example: "What makes your eyes well up unexpectedly?" },
      { phrase: "hold back tears", type: "Phrase", translation: "trattenere le lacrime", example: "Where do you have to hold back tears?" },
      { phrase: "a release", type: "Noun", translation: "uno sfogo", example: "Is crying a release or an embarrassment for you?" },
      { phrase: "overwhelmed", type: "Adjective", translation: "sopraffatto", example: "Do you cry when you feel overwhelmed?" },
      { phrase: "out of nowhere", type: "Idiom", translation: "dal nulla", example: "Sometimes it arrives out of nowhere." }
    ],
    guidedQuestions: [
      "What makes your eyes **well up**?",
      "Where must you **hold back tears**?",
      "Is it **a release** or an embarrassment?"
    ]
  },
  {
    question: "Do you trust your feelings or your reasoning more?",
    category: "Feelings",
    depthLevel: 4,
    vocabulary: [
      { phrase: "gut feeling", type: "Noun Phrase", translation: "istinto", example: "Has your gut feeling ever been badly wrong?" },
      { phrase: "think it through", type: "Phrase", translation: "ragionarci su", example: "Do you always think it through first?" },
      { phrase: "rational", type: "Adjective", translation: "razionale", example: "Are your rational decisions actually better?" },
      { phrase: "listen to your heart", type: "Phrase", translation: "ascoltare il cuore", example: "When should you listen to your heart instead?" },
      { phrase: "second-guess", type: "Verb", translation: "mettere in dubbio", example: "Do you second-guess yourself constantly?" }
    ],
    guidedQuestions: [
      "Has your **gut feeling** been badly wrong?",
      "Do you always **think it through**?",
      "Do you **second-guess** yourself?"
    ]
  },
  {
    question: "What makes you feel small in a good way?",
    category: "Feelings",
    depthLevel: 3,
    vocabulary: [
      { phrase: "in awe", type: "Phrase", translation: "in soggezione, ammirato", example: "When were you last in awe of something?" },
      { phrase: "humbling", type: "Adjective", translation: "che rende umili", example: "What was the most humbling moment of your year?" },
      { phrase: "put things in perspective", type: "Idiom", translation: "ridimensionare le cose", example: "What helps you put things in perspective?" },
      { phrase: "insignificant", type: "Adjective", translation: "insignificante", example: "Feeling insignificant can be strangely calming." },
      { phrase: "take your breath away", type: "Idiom", translation: "togliere il fiato", example: "What can still take your breath away?" }
    ],
    guidedQuestions: [
      "When were you last **in awe**?",
      "What helps you **put things in perspective**?",
      "What can still **take your breath away**?"
    ]
  },
  {
    question: "Is there a feeling you miss having?",
    category: "Feelings",
    depthLevel: 4,
    vocabulary: [
      { phrase: "butterflies", type: "Noun", translation: "farfalle nello stomaco", example: "When did you last get butterflies about anything?" },
      { phrase: "numb", type: "Adjective", translation: "insensibile", example: "Have you gone a bit numb to things?" },
      { phrase: "feel deeply", type: "Phrase", translation: "provare intensamente", example: "Do you still feel deeply about anything?" },
      { phrase: "wear off", type: "Phrasal Verb", translation: "svanire", example: "Does excitement always wear off eventually?" },
      { phrase: "long for", type: "Phrasal Verb", translation: "desiderare ardentemente", example: "Which feeling do you long for most?" }
    ],
    guidedQuestions: [
      "When did you last get **butterflies**?",
      "Have you gone **numb** to things?",
      "Which feeling do you **long for**?"
    ]
  },
  {
    question: "How do you know when you are genuinely happy?",
    category: "Feelings",
    depthLevel: 3,
    vocabulary: [
      { phrase: "content", type: "Adjective", translation: "appagato", example: "Is being content the same as being happy?" },
      { phrase: "in the moment", type: "Phrase", translation: "nel momento", example: "Can you notice it in the moment, or only later?" },
      { phrase: "fleeting", type: "Adjective", translation: "fugace", example: "Is happiness always fleeting?" },
      { phrase: "chase", type: "Verb", translation: "rincorrere", example: "Do you chase happiness or let it arrive?" },
      { phrase: "light", type: "Adjective", translation: "leggero", example: "Do you feel physically light when you are happy?" }
    ],
    guidedQuestions: [
      "Is being **content** the same as happy?",
      "Can you notice it **in the moment**?",
      "Do you **chase** it or let it come?"
    ]
  },
  {
    question: "What do you do with a bad mood?",
    category: "Feelings",
    depthLevel: 2,
    vocabulary: [
      { phrase: "snap at", type: "Phrasal Verb", translation: "sbottare contro", example: "Do you snap at people when you are low?" },
      { phrase: "shake it off", type: "Phrasal Verb", translation: "scrollarselo di dosso", example: "How quickly can you shake it off?" },
      { phrase: "wallow", type: "Verb", translation: "crogiolarsi", example: "Do you wallow, or force yourself out?" },
      { phrase: "take it out on", type: "Idiom", translation: "prendersela con", example: "Who do you take it out on unfairly?" },
      { phrase: "ride it out", type: "Phrasal Verb", translation: "lasciar passare", example: "Is it better to ride it out quietly?" }
    ],
    guidedQuestions: [
      "Do you **snap at** people when low?",
      "Who do you **take it out on**?",
      "Is it better to **ride it out**?"
    ]
  },
  {
    question: "Which of your feelings do other people misread most often?",
    category: "Feelings",
    depthLevel: 3,
    vocabulary: [
      { phrase: "come across as", type: "Phrasal Verb", translation: "dare l'impressione di", example: "Do you come across as cold when you are just tired?" },
      { phrase: "resting face", type: "Noun Phrase", translation: "espressione a riposo", example: "Has your resting face caused problems?" },
      { phrase: "misinterpret", type: "Verb", translation: "fraintendere", example: "What do people consistently misinterpret?" },
      { phrase: "read the room", type: "Idiom", translation: "capire l'atmosfera", example: "Are you good at reading the room yourself?" },
      { phrase: "give the wrong impression", type: "Phrase", translation: "dare l'impressione sbagliata", example: "How often do you give the wrong impression?" }
    ],
    guidedQuestions: [
      "Do you **come across as** cold by accident?",
      "What do people **misinterpret**?",
      "Are you good at **read the room**?"
    ]
  },
  {
    question: "Does talking about a feeling make it smaller or bigger?",
    category: "Feelings",
    depthLevel: 4,
    vocabulary: [
      { phrase: "get it off your chest", type: "Idiom", translation: "togliersi un peso", example: "Do you feel lighter once you get it off your chest?" },
      { phrase: "dwell on", type: "Phrasal Verb", translation: "rimuginare su", example: "Does talking make you dwell on it longer?" },
      { phrase: "put into words", type: "Phrase", translation: "mettere in parole", example: "Some feelings shrink once you put into words what they are." },
      { phrase: "a sounding board", type: "Noun Phrase", translation: "cassa di risonanza (confidente)", example: "Who is your sounding board?" },
      { phrase: "keep it in", type: "Phrase", translation: "tenerselo dentro", example: "Is it healthier to keep it in sometimes?" }
    ],
    guidedQuestions: [
      "Do you feel lighter once you **get it off your chest**?",
      "Does it make you **dwell on** it longer?",
      "Who is your **sounding board**?"
    ]
  },
  {
    question: "What situation reliably makes you nervous, even now?",
    category: "Feelings",
    depthLevel: 3,
    vocabulary: [
      { phrase: "on edge", type: "Idiom", translation: "sulle spine", example: "What puts you on edge every single time?" },
      { phrase: "butterflies in your stomach", type: "Idiom", translation: "farfalle nello stomaco", example: "Do you still get butterflies in your stomach before it?" },
      { phrase: "psych yourself up", type: "Phrasal Verb", translation: "caricarsi", example: "How do you psych yourself up beforehand?" },
      { phrase: "nerves", type: "Noun", translation: "nervosismo", example: "Do your nerves help or hurt your performance?" },
      { phrase: "get used to", type: "Phrase", translation: "abituarsi a", example: "Will you ever get used to it?" }
    ],
    guidedQuestions: [
      "What puts you **on edge** every time?",
      "How do you **psych yourself up**?",
      "Will you ever **get used to** it?"
    ]
  },
  {
    question: "Is it possible to be lonely surrounded by people?",
    category: "Feelings",
    depthLevel: 4,
    vocabulary: [
      { phrase: "lonely in a crowd", type: "Phrase", translation: "soli in mezzo alla folla", example: "Have you ever felt lonely in a crowd?" },
      { phrase: "surface-level", type: "Adjective", translation: "superficiale", example: "Are most of your conversations surface-level?" },
      { phrase: "be seen", type: "Phrase", translation: "essere visti davvero", example: "What does it take for you to be seen?" },
      { phrase: "small talk", type: "Noun Phrase", translation: "chiacchiere di circostanza", example: "Does endless small talk make it worse?" },
      { phrase: "connection", type: "Noun", translation: "connessione", example: "How much real connection does a week contain?" }
    ],
    guidedQuestions: [
      "Have you felt **lonely in a crowd**?",
      "Are your conversations **surface-level**?",
      "What does it take to **be seen**?"
    ]
  },
  {
    question: "What feeling do you get from finishing something difficult?",
    category: "Feelings",
    depthLevel: 2,
    vocabulary: [
      { phrase: "a sense of achievement", type: "Noun Phrase", translation: "senso di realizzazione", example: "Where do you get your strongest sense of achievement?" },
      { phrase: "relief", type: "Noun", translation: "sollievo", example: "Is it pride, or mostly relief?" },
      { phrase: "see something through", type: "Phrasal Verb", translation: "portare a termine", example: "How often do you see something through to the end?" },
      { phrase: "anticlimax", type: "Noun", translation: "delusione finale", example: "Was finishing an anticlimax?" },
      { phrase: "worth the effort", type: "Phrase", translation: "valere lo sforzo", example: "Was it worth the effort in the end?" }
    ],
    guidedQuestions: [
      "Where do you get **a sense of achievement**?",
      "Is it pride, or mostly **relief**?",
      "How often do you **see something through**?"
    ]
  },

  {
    question: "What advice did you ignore that turned out to be right?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "take advice", type: "Phrase", translation: "accettare consigli", example: "Why is it so hard to take advice from family?" },
      { phrase: "learn the hard way", type: "Idiom", translation: "imparare a proprie spese", example: "Did you have to learn the hard way?" },
      { phrase: "brush aside", type: "Phrasal Verb", translation: "scartare", example: "Why did you brush aside their warning?" },
      { phrase: "in hindsight", type: "Phrase", translation: "col senno di poi", example: "In hindsight, who was right all along?" },
      { phrase: "swallow your pride", type: "Idiom", translation: "ingoiare l'orgoglio", example: "Could you swallow your pride and admit it?" }
    ],
    guidedQuestions: [
      "Why is it hard to **take advice**?",
      "Did you **learn the hard way**?",
      "**In hindsight**, who was right?"
    ]
  },
  {
    question: "What is something you understand now that you could not have been told?",
    category: "Wisdom",
    depthLevel: 4,
    vocabulary: [
      { phrase: "see for yourself", type: "Phrase", translation: "vedere con i propri occhi", example: "Some things you must see for yourself." },
      { phrase: "sink in", type: "Phrasal Verb", translation: "penetrare, farsi capire", example: "How long did it take to sink in?" },
      { phrase: "lived experience", type: "Noun Phrase", translation: "esperienza vissuta", example: "Does lived experience beat good advice?" },
      { phrase: "a penny drops", type: "Idiom", translation: "capire all'improvviso", example: "When did the penny drop for you?" },
      { phrase: "the hard way", type: "Phrase", translation: "nel modo difficile", example: "Was there any route other than the hard way?" }
    ],
    guidedQuestions: [
      "Must some things be **see for yourself**?",
      "How long did it take to **sink in**?",
      "When did **a penny drops** for you?"
    ]
  },
  {
    question: "Who is the wisest person you know, and what makes them so?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "level-headed", type: "Adjective", translation: "equilibrato", example: "Are they simply more level-headed than everyone else?" },
      { phrase: "know when to stay quiet", type: "Phrase", translation: "sapere quando tacere", example: "Wise people know when to stay quiet." },
      { phrase: "life experience", type: "Noun Phrase", translation: "esperienza di vita", example: "Is wisdom just life experience, or something else?" },
      { phrase: "give perspective", type: "Phrase", translation: "dare prospettiva", example: "Who can give perspective when you panic?" },
      { phrase: "unassuming", type: "Adjective", translation: "modesto, senza pretese", example: "The wisest people are often unassuming." }
    ],
    guidedQuestions: [
      "Are they simply more **level-headed**?",
      "Do they **know when to stay quiet**?",
      "Who can **give perspective** when you panic?"
    ]
  },
  {
    question: "Is experience always better than enthusiasm?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "set in your ways", type: "Idiom", translation: "fossilizzato nelle abitudini", example: "Does experience make you set in your ways?" },
      { phrase: "fresh eyes", type: "Noun Phrase", translation: "occhi nuovi", example: "Sometimes a problem needs fresh eyes." },
      { phrase: "been there before", type: "Phrase", translation: "esserci già passato", example: "Is it useful that they have been there before?" },
      { phrase: "cynical", type: "Adjective", translation: "cinico", example: "Does experience make people cynical?" },
      { phrase: "beginner's mind", type: "Noun Phrase", translation: "mente del principiante", example: "Can you keep a beginner's mind after twenty years?" }
    ],
    guidedQuestions: [
      "Does experience make you **set in your ways**?",
      "When does a problem need **fresh eyes**?",
      "Can you keep a **beginner's mind**?"
    ]
  },
  {
    question: "What have you changed your mind about in the last five years?",
    category: "Wisdom",
    depthLevel: 4,
    vocabulary: [
      { phrase: "come round to", type: "Phrasal Verb", translation: "ricredersi su", example: "What have you come round to lately?" },
      { phrase: "dig your heels in", type: "Idiom", translation: "impuntarsi", example: "Do you dig your heels in when challenged?" },
      { phrase: "revise", type: "Verb", translation: "rivedere", example: "How often do you revise a strong opinion?" },
      { phrase: "a sign of strength", type: "Noun Phrase", translation: "un segno di forza", example: "Is changing your mind a sign of strength?" },
      { phrase: "stubborn", type: "Adjective", translation: "testardo", example: "Are you more stubborn than you admit?" }
    ],
    guidedQuestions: [
      "What have you **come round to**?",
      "Do you **dig your heels in** when challenged?",
      "Is it **a sign of strength**?"
    ]
  },
  {
    question: "What is worth being patient about, and what is not?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "bide your time", type: "Idiom", translation: "aspettare il momento giusto", example: "When should you bide your time?" },
      { phrase: "cut your losses", type: "Idiom", translation: "tagliare le perdite", example: "When is it wiser to cut your losses?" },
      { phrase: "in the long run", type: "Phrase", translation: "a lungo andare", example: "What pays off in the long run?" },
      { phrase: "waste your time", type: "Phrase", translation: "perdere tempo", example: "What are you refusing to admit is a waste your time?" },
      { phrase: "worth waiting for", type: "Phrase", translation: "che vale l'attesa", example: "What is genuinely worth waiting for?" }
    ],
    guidedQuestions: [
      "When should you **bide your time**?",
      "When should you **cut your losses**?",
      "What pays off **in the long run**?"
    ]
  },
  {
    question: "What mistake do you watch other people make and say nothing?",
    category: "Wisdom",
    depthLevel: 4,
    vocabulary: [
      { phrase: "hold your tongue", type: "Idiom", translation: "trattenere la lingua", example: "When do you hold your tongue deliberately?" },
      { phrase: "interfere", type: "Verb", translation: "immischiarsi", example: "Is it your place to interfere?" },
      { phrase: "let someone learn", type: "Phrase", translation: "lasciare imparare qualcuno", example: "Should you let someone learn on their own?" },
      { phrase: "unsolicited advice", type: "Noun Phrase", translation: "consigli non richiesti", example: "Nobody wants unsolicited advice." },
      { phrase: "see it coming", type: "Phrase", translation: "vederlo arrivare", example: "You can see it coming from a mile away." }
    ],
    guidedQuestions: [
      "When do you **hold your tongue**?",
      "Is it your place to **interfere**?",
      "Does anyone want **unsolicited advice**?"
    ]
  },
  {
    question: "Is common sense actually common?",
    category: "Wisdom",
    depthLevel: 3,
    vocabulary: [
      { phrase: "common sense", type: "Noun Phrase", translation: "buon senso", example: "Whose common sense are we talking about?" },
      { phrase: "obvious", type: "Adjective", translation: "ovvio", example: "What is obvious to you and baffling to others?" },
      { phrase: "cultural", type: "Adjective", translation: "culturale", example: "How much of it is purely cultural?" },
      { phrase: "take for granted", type: "Idiom", translation: "dare per scontato", example: "Which assumptions do you take for granted?" },
      { phrase: "self-evident", type: "Adjective", translation: "evidente di per sé", example: "Very little is genuinely self-evident." }
    ],
    guidedQuestions: [
      "Whose **common sense** are we discussing?",
      "How much of it is **cultural**?",
      "Which assumptions do you **take for granted**?"
    ]
  },
  {
    question: "What would you tell yourself at your lowest point?",
    category: "Wisdom",
    depthLevel: 4,
    vocabulary: [
      { phrase: "rock bottom", type: "Idiom", translation: "il fondo", example: "What did you learn at rock bottom?" },
      { phrase: "this too shall pass", type: "Phrase", translation: "anche questo passerà", example: "Does this too shall pass actually help?" },
      { phrase: "hang in there", type: "Idiom", translation: "tieni duro", example: "Would hang in there have been enough?" },
      { phrase: "be kind to yourself", type: "Phrase", translation: "essere gentili con sé stessi", example: "Why is it so hard to be kind to yourself?" },
      { phrase: "get through", type: "Phrasal Verb", translation: "superare", example: "What actually helped you get through it?" }
    ],
    guidedQuestions: [
      "What did you learn at **rock bottom**?",
      "Why is it hard to **be kind to yourself**?",
      "What helped you **get through** it?"
    ]
  },
  {
    question: "Does getting older make you wiser or just more certain?",
    category: "Wisdom",
    depthLevel: 4,
    vocabulary: [
      { phrase: "set in stone", type: "Idiom", translation: "scolpito nella pietra", example: "Are your opinions now set in stone?" },
      { phrase: "open-minded", type: "Adjective", translation: "di mentalità aperta", example: "Is it harder to stay open-minded at fifty?" },
      { phrase: "certainty", type: "Noun", translation: "certezza", example: "Is certainty the enemy of wisdom?" },
      { phrase: "mellow", type: "Verb", translation: "ammorbidirsi", example: "Do people mellow with age, or harden?" },
      { phrase: "doubt", type: "Noun", translation: "dubbio", example: "Is doubt a sign of intelligence?" }
    ],
    guidedQuestions: [
      "Are your opinions now **set in stone**?",
      "Is **certainty** the enemy of wisdom?",
      "Do people **mellow** with age?"
    ]
  },

  {
    question: "What have you never said out loud to anyone?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "keep to yourself", type: "Phrase", translation: "tenere per sé", example: "What do you keep to yourself entirely?" },
      { phrase: "unspoken", type: "Adjective", translation: "non detto", example: "How much of your life stays unspoken?" },
      { phrase: "voice something", type: "Verb", translation: "dare voce a qualcosa", example: "What would happen if you voiced it?" },
      { phrase: "a weight off", type: "Phrase", translation: "un peso in meno", example: "Would saying it be a weight off your shoulders?" },
      { phrase: "confide in", type: "Phrasal Verb", translation: "confidarsi con", example: "Who could you confide in without fear?" }
    ],
    guidedQuestions: [
      "What do you **keep to yourself**?",
      "How much stays **unspoken**?",
      "Who could you **confide in**?"
    ]
  },
  {
    question: "What do you think happens after we die?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "the afterlife", type: "Noun", translation: "l'aldilà", example: "Do you believe in the afterlife at all?" },
      { phrase: "comfort", type: "Noun", translation: "conforto", example: "Do you believe it because it gives comfort?" },
      { phrase: "cease to exist", type: "Phrase", translation: "cessare di esistere", example: "Is it terrifying to simply cease to exist?" },
      { phrase: "live on", type: "Phrasal Verb", translation: "sopravvivere, continuare a vivere", example: "Do we live on in the memory of others?" },
      { phrase: "faith", type: "Noun", translation: "fede", example: "Has your faith changed as you got older?" }
    ],
    guidedQuestions: [
      "Do you believe in **the afterlife**?",
      "Is it terrifying to **cease to exist**?",
      "Do we **live on** in memory?"
    ]
  },
  {
    question: "What part of your past still shapes your decisions today?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "cast a long shadow", type: "Idiom", translation: "gettare un'ombra lunga", example: "Which year casts a long shadow over you?" },
      { phrase: "unresolved", type: "Adjective", translation: "irrisolto", example: "What remains unresolved after all this time?" },
      { phrase: "a pattern", type: "Noun", translation: "uno schema", example: "Can you see a pattern repeating in your choices?" },
      { phrase: "carry with you", type: "Phrase", translation: "portarsi dietro", example: "What do you carry with you from that time?" },
      { phrase: "shape", type: "Verb", translation: "plasmare", example: "How much does one event shape a whole life?" }
    ],
    guidedQuestions: [
      "Which period **cast a long shadow**?",
      "What remains **unresolved**?",
      "Can you see **a pattern** repeating?"
    ]
  },
  {
    question: "If someone read your thoughts for one day, what would shock them?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "inner monologue", type: "Noun Phrase", translation: "monologo interiore", example: "Is your inner monologue kind or brutal?" },
      { phrase: "intrusive thought", type: "Noun Phrase", translation: "pensiero intrusivo", example: "Does everyone have the odd intrusive thought?" },
      { phrase: "filter", type: "Noun", translation: "filtro", example: "How much filter sits between thought and speech?" },
      { phrase: "petty", type: "Adjective", translation: "meschino", example: "Are your private thoughts more petty than your words?" },
      { phrase: "judge", type: "Verb", translation: "giudicare", example: "Would they judge you, or recognise themselves?" }
    ],
    guidedQuestions: [
      "Is your **inner monologue** kind or brutal?",
      "How much **filter** sits between thought and speech?",
      "Would they **judge** you or recognise themselves?"
    ]
  },
  {
    question: "What are you pretending not to know?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "deep down", type: "Phrase", translation: "in fondo", example: "What do you already know deep down?" },
      { phrase: "in denial", type: "Phrase", translation: "in negazione", example: "How long have you been in denial about it?" },
      { phrase: "the writing on the wall", type: "Idiom", translation: "i segnali evidenti", example: "Can you see the writing on the wall?" },
      { phrase: "act on it", type: "Phrase", translation: "agire di conseguenza", example: "Knowing is easy; you have to act on it." },
      { phrase: "inconvenient", type: "Adjective", translation: "scomodo", example: "The truth is simply inconvenient right now." }
    ],
    guidedQuestions: [
      "What do you already know **deep down**?",
      "How long have you been **in denial**?",
      "Can you see **the writing on the wall**?"
    ]
  },
  {
    question: "Who would you apologise to if there were no consequences?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "make amends", type: "Idiom", translation: "rimediare", example: "Is it too late to make amends?" },
      { phrase: "own your mistake", type: "Phrase", translation: "assumersi l'errore", example: "Could you fully own your mistake?" },
      { phrase: "reopen old wounds", type: "Idiom", translation: "riaprire vecchie ferite", example: "Would an apology reopen old wounds?" },
      { phrase: "for their sake", type: "Phrase", translation: "per il loro bene", example: "Is the apology for their sake or yours?" },
      { phrase: "unfinished business", type: "Noun Phrase", translation: "questioni in sospeso", example: "What unfinished business do you still carry?" }
    ],
    guidedQuestions: [
      "Is it too late to **make amends**?",
      "Would it **reopen old wounds**?",
      "What **unfinished business** remains?"
    ]
  },
  {
    question: "What would break you, and what have you survived already?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "breaking point", type: "Noun Phrase", translation: "punto di rottura", example: "Have you ever reached your breaking point?" },
      { phrase: "resilience", type: "Noun", translation: "resilienza", example: "Where does your resilience actually come from?" },
      { phrase: "hold it together", type: "Idiom", translation: "reggere", example: "How do you hold it together in a crisis?" },
      { phrase: "unthinkable", type: "Adjective", translation: "impensabile", example: "People survive the unthinkable every day." },
      { phrase: "come through", type: "Phrasal Verb", translation: "uscirne", example: "What did you come through that you never discuss?" }
    ],
    guidedQuestions: [
      "Have you reached your **breaking point**?",
      "Where does your **resilience** come from?",
      "What did you **come through** quietly?"
    ]
  },
  {
    question: "Is the person you present to the world a lie or a choice?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "put on a mask", type: "Idiom", translation: "indossare una maschera", example: "How often do you put on a mask at work?" },
      { phrase: "a social contract", type: "Noun Phrase", translation: "un contratto sociale", example: "Is politeness just a social contract?" },
      { phrase: "dishonest", type: "Adjective", translation: "disonesto", example: "Is editing yourself dishonest?" },
      { phrase: "self-preservation", type: "Noun", translation: "autoconservazione", example: "Is it self-preservation rather than deceit?" },
      { phrase: "drop the act", type: "Phrase", translation: "smettere di fingere", example: "Where can you finally drop the act?" }
    ],
    guidedQuestions: [
      "How often do you **put on a mask**?",
      "Is it **self-preservation** rather than deceit?",
      "Where can you **drop the act**?"
    ]
  },
  {
    question: "What do you want that you are ashamed of wanting?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "long for", type: "Phrasal Verb", translation: "desiderare ardentemente", example: "What do you secretly long for?" },
      { phrase: "shameful", type: "Adjective", translation: "vergognoso", example: "Why does wanting it feel shameful?" },
      { phrase: "admit to yourself", type: "Phrase", translation: "ammettere a sé stessi", example: "Can you even admit to yourself that you want it?" },
      { phrase: "socially acceptable", type: "Adjective", translation: "socialmente accettabile", example: "Is your desire simply not socially acceptable?" },
      { phrase: "suppress", type: "Verb", translation: "reprimere", example: "How long can you suppress a real desire?" }
    ],
    guidedQuestions: [
      "What do you secretly **long for**?",
      "Can you **admit to yourself** that you want it?",
      "How long can you **suppress** it?"
    ]
  },
  {
    question: "When did you last feel completely understood?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "get you", type: "Phrase", translation: "capirti davvero", example: "Who genuinely seems to get you?" },
      { phrase: "on the same wavelength", type: "Idiom", translation: "sulla stessa lunghezza d'onda", example: "Who are you instantly on the same wavelength with?" },
      { phrase: "explain yourself", type: "Phrase", translation: "spiegarsi", example: "Is it exhausting to always explain yourself?" },
      { phrase: "seen and heard", type: "Phrase", translation: "visti e ascoltati", example: "When did you last feel seen and heard?" },
      { phrase: "rare", type: "Adjective", translation: "raro", example: "Is that feeling rare for everyone, or just you?" }
    ],
    guidedQuestions: [
      "Who genuinely seems to **get you**?",
      "Who are you **on the same wavelength** with?",
      "Is it exhausting to always **explain yourself**?"
    ]
  }
];

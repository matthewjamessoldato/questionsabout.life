import type { Question } from '../questions';

export const batch: Omit<Question, 'id'>[] = [
  {
    question: "What do you need that you have never asked anyone for?",
    category: "Personal",
    depthLevel: 4,
    vocabulary: [
      { phrase: "reach out", type: "Phrasal Verb", translation: "farsi avanti", example: "Why is it so hard to reach out when you need help?" },
      { phrase: "a burden", type: "Noun", translation: "un peso", example: "Do you worry about being a burden to people?" },
      { phrase: "swallow your pride", type: "Idiom", translation: "ingoiare l'orgoglio", example: "Could you swallow your pride and ask?" },
      { phrase: "go without", type: "Phrasal Verb", translation: "farne a meno", example: "How long have you chosen to go without it?" },
      { phrase: "unmet need", type: "Noun Phrase", translation: "bisogno insoddisfatto", example: "Which unmet need has followed you for years?" }
    ],
    guidedQuestions: [
      "Why is it hard to **reach out**?",
      "Do you fear being **a burden**?",
      "Could you **swallow your pride** and ask?"
    ]
  },
  {
    question: "What are you still angry about that you claim to be over?",
    category: "Personal",
    depthLevel: 4,
    vocabulary: [
      { phrase: "hold a grudge", type: "Idiom", translation: "portare rancore", example: "How long can you hold a grudge before it changes you?" },
      { phrase: "let it go", type: "Phrase", translation: "lasciar perdere", example: "Have you really managed to let it go?" },
      { phrase: "simmer", type: "Verb", translation: "covare", example: "Some anger will simmer quietly for years." },
      { phrase: "closure", type: "Noun", translation: "chiusura", example: "Do you need an apology to find closure?" },
      { phrase: "kid yourself", type: "Phrasal Verb", translation: "illudersi", example: "Are you kidding yourself about being fine?" }
    ],
    guidedQuestions: [
      "How long can you **hold a grudge**?",
      "Have you truly managed to **let it go**?",
      "Do you need an apology to find **closure**?"
    ]
  },
  {
    question: "What compliment do you struggle to believe?",
    category: "Personal",
    depthLevel: 3,
    vocabulary: [
      { phrase: "brush off", type: "Phrasal Verb", translation: "minimizzare", example: "Do you brush off praise automatically?" },
      { phrase: "take a compliment", type: "Phrase", translation: "accettare un complimento", example: "Why can nobody take a compliment gracefully?" },
      { phrase: "deep down", type: "Phrase", translation: "in fondo", example: "What do you believe about yourself deep down?" },
      { phrase: "deflect", type: "Verb", translation: "deviare", example: "Do you deflect with a joke every time?" },
      { phrase: "inner critic", type: "Noun Phrase", translation: "critico interiore", example: "How loud is your inner critic?" }
    ],
    guidedQuestions: [
      "Do you **brush off** praise automatically?",
      "Why can nobody **take a compliment**?",
      "How loud is your **inner critic**?"
    ]
  },
  {
    question: "What would you do differently if nobody would ever find out?",
    category: "Personal",
    depthLevel: 4,
    vocabulary: [
      { phrase: "behind closed doors", type: "Idiom", translation: "a porte chiuse", example: "Who are you behind closed doors?" },
      { phrase: "keep up appearances", type: "Idiom", translation: "salvare le apparenze", example: "How much energy goes into keeping up appearances?" },
      { phrase: "integrity", type: "Noun", translation: "integrità", example: "Is integrity what you do when nobody is watching?" },
      { phrase: "get away with", type: "Phrasal Verb", translation: "farla franca", example: "What would you get away with if there were no consequences?" },
      { phrase: "temptation", type: "Noun", translation: "tentazione", example: "Which temptation is hardest to resist?" }
    ],
    guidedQuestions: [
      "Who are you **behind closed doors**?",
      "How much energy goes into **keep up appearances**?",
      "Is **integrity** what you do unobserved?"
    ]
  },
  {
    question: "Which of your habits would you be embarrassed to explain?",
    category: "Personal",
    depthLevel: 3,
    vocabulary: [
      { phrase: "a guilty pleasure", type: "Noun Phrase", translation: "un piacere colpevole", example: "What is your most ridiculous guilty pleasure?" },
      { phrase: "own up to", type: "Phrasal Verb", translation: "ammettere", example: "Could you own up to it in front of friends?" },
      { phrase: "quirk", type: "Noun", translation: "stranezza", example: "Which quirk do you hide from new people?" },
      { phrase: "harmless", type: "Adjective", translation: "innocuo", example: "Is it harmless, or is it costing you something?" },
      { phrase: "cringe", type: "Verb", translation: "rabbrividire d'imbarazzo", example: "Do you cringe just thinking about it?" }
    ],
    guidedQuestions: [
      "What is your **guilty pleasure**?",
      "Could you **own up to** it publicly?",
      "Which **quirk** do you hide?"
    ]
  },
  {
    question: "What do you keep buying that you never use?",
    category: "Personal",
    depthLevel: 2,
    vocabulary: [
      { phrase: "impulse buy", type: "Noun Phrase", translation: "acquisto d'impulso", example: "What was your last impulse buy?" },
      { phrase: "gather dust", type: "Idiom", translation: "prendere polvere", example: "What is gathering dust in your cupboard?" },
      { phrase: "aspirational", type: "Adjective", translation: "aspirazionale", example: "Was it an aspirational purchase rather than a practical one?" },
      { phrase: "declutter", type: "Verb", translation: "liberarsi del superfluo", example: "When did you last declutter properly?" },
      { phrase: "buyer's remorse", type: "Noun Phrase", translation: "rimorso dell'acquirente", example: "Do you get buyer's remorse quickly?" }
    ],
    guidedQuestions: [
      "What was your last **impulse buy**?",
      "What is **gather dust** in your home?",
      "Do you get **buyer's remorse**?"
    ]
  },
  {
    question: "When did you last change your mind about a person?",
    category: "Personal",
    depthLevel: 3,
    vocabulary: [
      { phrase: "first impression", type: "Noun Phrase", translation: "prima impressione", example: "How often is your first impression wrong?" },
      { phrase: "warm to someone", type: "Phrasal Verb", translation: "affezionarsi a qualcuno", example: "How long does it take you to warm to someone?" },
      { phrase: "give someone a chance", type: "Phrase", translation: "dare una possibilità a qualcuno", example: "Do you give someone a chance after a bad start?" },
      { phrase: "write someone off", type: "Phrasal Verb", translation: "cancellare qualcuno", example: "How quickly do you write someone off?" },
      { phrase: "grow to like", type: "Phrase", translation: "imparare ad apprezzare", example: "Did you grow to like them eventually?" }
    ],
    guidedQuestions: [
      "How often is your **first impression** wrong?",
      "How quickly do you **write someone off**?",
      "Did you **grow to like** them eventually?"
    ]
  },
  {
    question: "What is the kindest thing you have done that nobody knows about?",
    category: "Personal",
    depthLevel: 3,
    vocabulary: [
      { phrase: "quietly", type: "Adverb", translation: "in silenzio", example: "Do you prefer to help quietly?" },
      { phrase: "take credit", type: "Phrase", translation: "prendersi il merito", example: "Why did you not take credit for it?" },
      { phrase: "anonymous", type: "Adjective", translation: "anonimo", example: "Is an anonymous good deed worth more?" },
      { phrase: "for show", type: "Phrase", translation: "di facciata", example: "Kindness done for show is not really kindness." },
      { phrase: "no strings attached", type: "Idiom", translation: "senza condizioni", example: "Was it truly no strings attached?" }
    ],
    guidedQuestions: [
      "Do you prefer to help **quietly**?",
      "Why did you not **take credit**?",
      "Was it genuinely **no strings attached**?"
    ]
  },
  {
    question: "What are you avoiding right now?",
    category: "Personal",
    depthLevel: 3,
    vocabulary: [
      { phrase: "put off", type: "Phrasal Verb", translation: "rimandare", example: "What have you put off for months?" },
      { phrase: "face the music", type: "Idiom", translation: "affrontare le conseguenze", example: "When will you finally face the music?" },
      { phrase: "procrastinate", type: "Verb", translation: "procrastinare", example: "Do you procrastinate on small things or big ones?" },
      { phrase: "hang over you", type: "Phrasal Verb", translation: "pesare addosso", example: "What is hanging over you at the moment?" },
      { phrase: "bite the bullet", type: "Idiom", translation: "stringere i denti", example: "What would happen if you decided to bite the bullet today?" }
    ],
    guidedQuestions: [
      "What have you **put off** for months?",
      "When will you **face the music**?",
      "What is **hang over you** right now?"
    ]
  },
  {
    question: "What do you do when nobody needs anything from you?",
    category: "Personal",
    depthLevel: 3,
    vocabulary: [
      { phrase: "downtime", type: "Noun", translation: "tempo libero", example: "How do you actually spend your downtime?" },
      { phrase: "at a loose end", type: "Idiom", translation: "senza sapere che fare", example: "Are you uncomfortable at a loose end?" },
      { phrase: "recharge", type: "Verb", translation: "ricaricarsi", example: "What genuinely helps you recharge?" },
      { phrase: "fill the silence", type: "Phrase", translation: "riempire il silenzio", example: "Do you rush to fill the silence?" },
      { phrase: "be still", type: "Phrase", translation: "stare fermi", example: "Is it hard for you to just be still?" }
    ],
    guidedQuestions: [
      "How do you spend your **downtime**?",
      "Are you uneasy **at a loose end**?",
      "Do you rush to **fill the silence**?"
    ]
  },
  {
    question: "What would your closest friend say is your blind spot?",
    category: "Personal",
    depthLevel: 4,
    vocabulary: [
      { phrase: "blind spot", type: "Noun Phrase", translation: "punto cieco", example: "Everyone has a blind spot they cannot see." },
      { phrase: "call you out", type: "Phrasal Verb", translation: "riprendere apertamente", example: "Who is brave enough to call you out?" },
      { phrase: "defensive", type: "Adjective", translation: "sulla difensiva", example: "Do you get defensive when someone points it out?" },
      { phrase: "home truth", type: "Noun Phrase", translation: "verità scomoda", example: "When did you last hear a home truth?" },
      { phrase: "take it on board", type: "Idiom", translation: "farne tesoro", example: "Would you take it on board or dismiss it?" }
    ],
    guidedQuestions: [
      "What is your **blind spot**?",
      "Who is brave enough to **call you out**?",
      "Would you **take it on board**?"
    ]
  },
  {
    question: "Are you more afraid of failing or of being ordinary?",
    category: "Personal",
    depthLevel: 4,
    vocabulary: [
      { phrase: "fall short", type: "Phrasal Verb", translation: "non essere all'altezza", example: "What happens if you fall short of your own standard?" },
      { phrase: "mediocre", type: "Adjective", translation: "mediocre", example: "Is a mediocre life really a failure?" },
      { phrase: "stand out", type: "Phrasal Verb", translation: "distinguersi", example: "Why do we need so badly to stand out?" },
      { phrase: "measure up", type: "Phrasal Verb", translation: "essere all'altezza", example: "Who are you trying to measure up to?" },
      { phrase: "settle", type: "Verb", translation: "accontentarsi", example: "Is it wrong to settle for a quiet life?" }
    ],
    guidedQuestions: [
      "What if you **fall short** of your own standard?",
      "Is a **mediocre** life really a failure?",
      "Who are you trying to **measure up** to?"
    ]
  },

  {
    question: "Does your life need a purpose to be worth living?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "meaning", type: "Noun", translation: "significato", example: "Where do you find meaning on an ordinary Tuesday?" },
      { phrase: "a higher purpose", type: "Noun Phrase", translation: "uno scopo superiore", example: "Do you need a higher purpose to get out of bed?" },
      { phrase: "make peace with", type: "Phrase", translation: "fare pace con", example: "Can you make peace with having no grand plan?" },
      { phrase: "existential dread", type: "Noun Phrase", translation: "angoscia esistenziale", example: "When does existential dread hit you hardest?" },
      { phrase: "enough", type: "Adjective", translation: "abbastanza", example: "Is simply being alive enough?" }
    ],
    guidedQuestions: [
      "Where do you find **meaning** on an ordinary day?",
      "Do you need **a higher purpose**?",
      "Can you **make peace with** having no plan?"
    ]
  },
  {
    question: "If nothing you did was remembered, would you live differently?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "leave a mark", type: "Idiom", translation: "lasciare il segno", example: "Do you need to leave a mark on the world?" },
      { phrase: "be forgotten", type: "Phrase", translation: "essere dimenticato", example: "Everyone will be forgotten eventually." },
      { phrase: "legacy", type: "Noun", translation: "eredità", example: "Is a legacy for you, or for the people left behind?" },
      { phrase: "in vain", type: "Phrase", translation: "invano", example: "Does that make the effort in vain?" },
      { phrase: "live for the moment", type: "Phrase", translation: "vivere il momento", example: "Would you simply live for the moment instead?" }
    ],
    guidedQuestions: [
      "Do you need to **leave a mark**?",
      "Is a **legacy** for you or for others?",
      "Would you just **live for the moment**?"
    ]
  },
  {
    question: "Is it better to have a short intense life or a long quiet one?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "burn brightly", type: "Phrase", translation: "brillare intensamente", example: "Is it better to burn brightly for a short time?" },
      { phrase: "longevity", type: "Noun", translation: "longevità", example: "Do you actually want longevity, or good years?" },
      { phrase: "quality over quantity", type: "Phrase", translation: "qualità più che quantità", example: "Is it quality over quantity with time as well?" },
      { phrase: "play it safe", type: "Idiom", translation: "andare sul sicuro", example: "Have you played it safe for too long?" },
      { phrase: "no regrets", type: "Phrase", translation: "nessun rimpianto", example: "Which path leaves you with no regrets?" }
    ],
    guidedQuestions: [
      "Is it better to **burn brightly** briefly?",
      "Is it **quality over quantity** with time?",
      "Have you had to **play it safe** for too long?"
    ]
  },
  {
    question: "What would you want to be doing in your final ordinary hour?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "the little things", type: "Noun Phrase", translation: "le piccole cose", example: "Would it be the little things you chose?" },
      { phrase: "cherish", type: "Verb", translation: "custodire con affetto", example: "Which ordinary moment do you cherish most?" },
      { phrase: "an ordinary day", type: "Noun Phrase", translation: "un giorno qualunque", example: "Why does an ordinary day feel so precious in hindsight?" },
      { phrase: "take stock", type: "Idiom", translation: "fare un bilancio", example: "Would you take stock, or just enjoy it?" },
      { phrase: "at peace", type: "Phrase", translation: "in pace", example: "What would leave you genuinely at peace?" }
    ],
    guidedQuestions: [
      "Would you choose **the little things**?",
      "Which ordinary moment do you **cherish**?",
      "What would leave you **at peace**?"
    ]
  },
  {
    question: "Do you think you are living your life, or a life you were handed?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "on autopilot", type: "Idiom", translation: "col pilota automatico", example: "How much of your week runs on autopilot?" },
      { phrase: "a script", type: "Noun", translation: "un copione", example: "Are you following a script written by someone else?" },
      { phrase: "conscious choice", type: "Noun Phrase", translation: "scelta consapevole", example: "What was your last genuinely conscious choice?" },
      { phrase: "drift", type: "Verb", translation: "andare alla deriva", example: "Is it possible to drift for a decade?" },
      { phrase: "take the wheel", type: "Idiom", translation: "prendere il volante", example: "When did you last take the wheel of your own life?" }
    ],
    guidedQuestions: [
      "How much runs **on autopilot**?",
      "Are you following someone else's **script**?",
      "When did you last **take the wheel**?"
    ]
  },
  {
    question: "Is suffering necessary for a life to mean something?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "hardship", type: "Noun", translation: "avversità", example: "Has hardship taught you anything you would keep?" },
      { phrase: "romanticise", type: "Verb", translation: "romanticizzare", example: "Do we romanticise suffering too much?" },
      { phrase: "come out stronger", type: "Phrase", translation: "uscirne più forti", example: "Did you genuinely come out stronger?" },
      { phrase: "senseless", type: "Adjective", translation: "insensato", example: "Some suffering is simply senseless." },
      { phrase: "growth", type: "Noun", translation: "crescita", example: "Is growth possible without pain?" }
    ],
    guidedQuestions: [
      "Has **hardship** taught you anything?",
      "Do we **romanticise** suffering?",
      "Did you genuinely **come out stronger**?"
    ]
  },
  {
    question: "If the universe is indifferent, does that free you or frighten you?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "indifferent", type: "Adjective", translation: "indifferente", example: "Is the universe indifferent to what you do?" },
      { phrase: "liberating", type: "Adjective", translation: "liberatorio", example: "Some find that thought strangely liberating." },
      { phrase: "insignificant", type: "Adjective", translation: "insignificante", example: "Does feeling insignificant comfort or crush you?" },
      { phrase: "make your own meaning", type: "Phrase", translation: "crearsi il proprio significato", example: "You may have to make your own meaning." },
      { phrase: "cosmic", type: "Adjective", translation: "cosmico", example: "Is there any cosmic plan at all?" }
    ],
    guidedQuestions: [
      "Is the universe truly **indifferent**?",
      "Is that thought **liberating**?",
      "Must we **make your own meaning**?"
    ]
  },
  {
    question: "What belief would be hardest for you to give up, even if proven wrong?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "cling to", type: "Phrasal Verb", translation: "aggrapparsi a", example: "Which belief do you cling to hardest?" },
      { phrase: "a foundation", type: "Noun", translation: "una base", example: "Some beliefs are a foundation you cannot remove." },
      { phrase: "shake", type: "Verb", translation: "scuotere", example: "What would shake you to your core?" },
      { phrase: "worldview", type: "Noun", translation: "visione del mondo", example: "Would your whole worldview collapse?" },
      { phrase: "evidence", type: "Noun", translation: "prove", example: "How much evidence would you actually need?" }
    ],
    guidedQuestions: [
      "Which belief do you **cling to** hardest?",
      "What would **shake** you to your core?",
      "Would your **worldview** collapse?"
    ]
  },
  {
    question: "Would you accept a perfectly happy life if none of it were real?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "blissful ignorance", type: "Noun Phrase", translation: "beata ignoranza", example: "Would you choose blissful ignorance?" },
      { phrase: "authentic", type: "Adjective", translation: "autentico", example: "Does an experience have to be authentic to count?" },
      { phrase: "an illusion", type: "Noun", translation: "un'illusione", example: "Could you knowingly live inside an illusion?" },
      { phrase: "plug in", type: "Phrasal Verb", translation: "collegarsi", example: "Would you plug in and never come back?" },
      { phrase: "hollow", type: "Adjective", translation: "vuoto", example: "Would that happiness feel hollow?" }
    ],
    guidedQuestions: [
      "Would you choose **blissful ignorance**?",
      "Must experience be **authentic** to count?",
      "Would that happiness feel **hollow**?"
    ]
  },
  {
    question: "What question about existence do you deliberately avoid?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "steer clear of", type: "Idiom", translation: "stare alla larga da", example: "Which thought do you steer clear of at night?" },
      { phrase: "spiral", type: "Verb", translation: "avvitarsi", example: "Do you spiral if you think about it too long?" },
      { phrase: "keep busy", type: "Phrase", translation: "tenersi occupati", example: "Do you keep busy to avoid thinking?" },
      { phrase: "confront", type: "Verb", translation: "affrontare", example: "Is it healthier to confront it directly?" },
      { phrase: "unanswerable", type: "Adjective", translation: "senza risposta", example: "Some questions are simply unanswerable." }
    ],
    guidedQuestions: [
      "Which thought do you **steer clear of**?",
      "Do you **keep busy** to avoid thinking?",
      "Is it healthier to **confront** it?"
    ]
  },
  {
    question: "Do you think time is running out, or that you have plenty?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "running out of time", type: "Phrase", translation: "il tempo sta finendo", example: "Do you feel like you are running out of time?" },
      { phrase: "urgency", type: "Noun", translation: "urgenza", example: "Where does your sense of urgency come from?" },
      { phrase: "put off", type: "Phrasal Verb", translation: "rimandare", example: "What do you put off because there is always next year?" },
      { phrase: "make the most of", type: "Idiom", translation: "sfruttare al massimo", example: "Do you make the most of an ordinary decade?" },
      { phrase: "fleeting", type: "Adjective", translation: "fugace", example: "Everything good feels fleeting in hindsight." }
    ],
    guidedQuestions: [
      "Do you feel you are **running out of time**?",
      "Where does your **urgency** come from?",
      "Are you **make the most of** this decade?"
    ]
  },
  {
    question: "Is a life spent helping others better than one spent enjoying yourself?",
    category: "Existential",
    depthLevel: 4,
    vocabulary: [
      { phrase: "selfless", type: "Adjective", translation: "altruista", example: "Is anyone genuinely selfless?" },
      { phrase: "self-indulgent", type: "Adjective", translation: "autoindulgente", example: "Is enjoying your life self-indulgent?" },
      { phrase: "worthwhile", type: "Adjective", translation: "che vale la pena", example: "What makes a life worthwhile to you?" },
      { phrase: "martyr", type: "Noun", translation: "martire", example: "Nobody thanks a martyr in the end." },
      { phrase: "strike a balance", type: "Idiom", translation: "trovare un equilibrio", example: "Can you strike a balance between the two?" }
    ],
    guidedQuestions: [
      "Is anyone genuinely **selfless**?",
      "What makes a life **worthwhile**?",
      "Can you **strike a balance**?"
    ]
  },

  {
    question: "What would you never do, even for a great deal of money?",
    category: "Values",
    depthLevel: 4,
    vocabulary: [
      { phrase: "draw the line", type: "Idiom", translation: "porre un limite", example: "Where exactly do you draw the line?" },
      { phrase: "a price on it", type: "Phrase", translation: "un prezzo su di esso", example: "Is there a price on it, or truly not?" },
      { phrase: "sell your soul", type: "Idiom", translation: "vendere l'anima", example: "What would count as selling your soul?" },
      { phrase: "principle", type: "Noun", translation: "principio", example: "Which principle have you never broken?" },
      { phrase: "sleep at night", type: "Idiom", translation: "dormire sonni tranquilli", example: "Could you still sleep at night afterwards?" }
    ],
    guidedQuestions: [
      "Where do you **draw the line**?",
      "Which **principle** have you never broken?",
      "Could you still **sleep at night**?"
    ]
  },
  {
    question: "Is honesty always kind?",
    category: "Values",
    depthLevel: 4,
    vocabulary: [
      { phrase: "brutally honest", type: "Phrase", translation: "brutalmente onesto", example: "Is being brutally honest ever an excuse?" },
      { phrase: "a white lie", type: "Noun Phrase", translation: "una bugia a fin di bene", example: "Is a white lie ever the better choice?" },
      { phrase: "tact", type: "Noun", translation: "tatto", example: "Can you tell the truth with tact?" },
      { phrase: "sugar-coat", type: "Verb", translation: "indorare la pillola", example: "Do you sugar-coat bad news?" },
      { phrase: "well-intentioned", type: "Adjective", translation: "ben intenzionato", example: "Plenty of cruelty is well-intentioned." }
    ],
    guidedQuestions: [
      "Is **brutally honest** ever an excuse?",
      "Is **a white lie** sometimes better?",
      "Do you **sugar-coat** bad news?"
    ]
  },
  {
    question: "Would you report a friend who did something seriously wrong?",
    category: "Values",
    depthLevel: 4,
    vocabulary: [
      { phrase: "turn someone in", type: "Phrasal Verb", translation: "denunciare qualcuno", example: "Could you turn someone in that you love?" },
      { phrase: "loyalty", type: "Noun", translation: "lealtà", example: "Where does loyalty stop and complicity begin?" },
      { phrase: "look the other way", type: "Idiom", translation: "girarsi dall'altra parte", example: "Would you look the other way just once?" },
      { phrase: "an accomplice", type: "Noun", translation: "un complice", example: "Does silence make you an accomplice?" },
      { phrase: "do the right thing", type: "Phrase", translation: "fare la cosa giusta", example: "Is it obvious what the right thing is?" }
    ],
    guidedQuestions: [
      "Could you **turn someone in**?",
      "Would you **look the other way**?",
      "Does silence make you **an accomplice**?"
    ]
  },
  {
    question: "Do you judge people for things you have done yourself?",
    category: "Values",
    depthLevel: 4,
    vocabulary: [
      { phrase: "double standard", type: "Noun Phrase", translation: "doppio standard", example: "Which double standard do you hold?" },
      { phrase: "hypocrisy", type: "Noun", translation: "ipocrisia", example: "Is a little hypocrisy unavoidable?" },
      { phrase: "give yourself a pass", type: "Phrase", translation: "farsi uno sconto", example: "Why do we give yourself a pass so easily?" },
      { phrase: "the benefit of the doubt", type: "Noun Phrase", translation: "il beneficio del dubbio", example: "Who gets the benefit of the doubt from you?" },
      { phrase: "self-aware", type: "Adjective", translation: "consapevole di sé", example: "Are you self-aware enough to notice?" }
    ],
    guidedQuestions: [
      "Which **double standard** do you hold?",
      "Is a little **hypocrisy** unavoidable?",
      "Who gets **the benefit of the doubt**?"
    ]
  },
  {
    question: "What rule do you break without feeling guilty?",
    category: "Values",
    depthLevel: 3,
    vocabulary: [
      { phrase: "bend the rules", type: "Idiom", translation: "aggirare le regole", example: "When is it acceptable to bend the rules?" },
      { phrase: "a victimless crime", type: "Noun Phrase", translation: "un reato senza vittime", example: "Is there any such thing as a victimless crime?" },
      { phrase: "let yourself off", type: "Phrasal Verb", translation: "perdonarsi", example: "How easily do you let yourself off?" },
      { phrase: "petty", type: "Adjective", translation: "meschino, di poco conto", example: "Is it petty, or does it genuinely matter?" },
      { phrase: "conscience", type: "Noun", translation: "coscienza", example: "Does your conscience ever complain about it?" }
    ],
    guidedQuestions: [
      "When is it fine to **bend the rules**?",
      "Is there such a thing as **a victimless crime**?",
      "Does your **conscience** complain?"
    ]
  },
  {
    question: "Should you forgive someone who is not sorry?",
    category: "Values",
    depthLevel: 4,
    vocabulary: [
      { phrase: "forgive", type: "Verb", translation: "perdonare", example: "Can you forgive without an apology?" },
      { phrase: "for your own sake", type: "Phrase", translation: "per il tuo bene", example: "Is forgiveness for your own sake?" },
      { phrase: "let someone off the hook", type: "Idiom", translation: "lasciare qualcuno impunito", example: "Does forgiving let someone off the hook?" },
      { phrase: "bitterness", type: "Noun", translation: "amarezza", example: "Bitterness costs you more than them." },
      { phrase: "move on", type: "Phrasal Verb", translation: "andare avanti", example: "Can you move on without forgiving?" }
    ],
    guidedQuestions: [
      "Can you **forgive** without an apology?",
      "Is it **for your own sake**?",
      "Can you **move on** without forgiving?"
    ]
  },
  {
    question: "Is it wrong to want more than you need?",
    category: "Values",
    depthLevel: 3,
    vocabulary: [
      { phrase: "enough", type: "Noun", translation: "abbastanza", example: "How do you know when you have enough?" },
      { phrase: "greed", type: "Noun", translation: "avidità", example: "Where does ambition end and greed begin?" },
      { phrase: "keep up with the Joneses", type: "Idiom", translation: "stare al passo con i vicini", example: "Are you trying to keep up with the Joneses?" },
      { phrase: "contentment", type: "Noun", translation: "appagamento", example: "Is contentment a skill you can learn?" },
      { phrase: "modest", type: "Adjective", translation: "modesto", example: "Could you be happy with a modest life?" }
    ],
    guidedQuestions: [
      "How do you know when you have **enough**?",
      "Where does ambition become **greed**?",
      "Is **contentment** a learnable skill?"
    ]
  },
  {
    question: "What do you value that your parents did not?",
    category: "Values",
    depthLevel: 3,
    vocabulary: [
      { phrase: "a generation gap", type: "Noun Phrase", translation: "un divario generazionale", example: "Is the generation gap widening?" },
      { phrase: "priorities", type: "Noun", translation: "priorità", example: "How different are your priorities from theirs?" },
      { phrase: "reject", type: "Verb", translation: "rifiutare", example: "Which of their values did you reject outright?" },
      { phrase: "come round to", type: "Phrasal Verb", translation: "ricredersi su", example: "Have you come round to any of their views?" },
      { phrase: "hard-won", type: "Adjective", translation: "conquistato a fatica", example: "Their values were hard-won, not lazy." }
    ],
    guidedQuestions: [
      "Is the **generation gap** widening?",
      "Which value did you **reject** outright?",
      "Have you **come round to** any of theirs?"
    ]
  },
  {
    question: "Would you rather be respected or liked?",
    category: "Values",
    depthLevel: 3,
    vocabulary: [
      { phrase: "well-liked", type: "Adjective", translation: "benvoluto", example: "Is being well-liked worth compromising for?" },
      { phrase: "command respect", type: "Phrase", translation: "imporre rispetto", example: "How do you command respect without fear?" },
      { phrase: "a people-pleaser", type: "Noun", translation: "chi cerca di accontentare tutti", example: "Are you a people-pleaser at work?" },
      { phrase: "stand firm", type: "Phrase", translation: "restare fermo", example: "Can you stand firm and stay popular?" },
      { phrase: "approval", type: "Noun", translation: "approvazione", example: "Whose approval do you still chase?" }
    ],
    guidedQuestions: [
      "Is being **well-liked** worth compromising for?",
      "Are you **a people-pleaser**?",
      "Whose **approval** do you chase?"
    ]
  },
  {
    question: "Is loyalty a virtue or an excuse?",
    category: "Values",
    depthLevel: 4,
    vocabulary: [
      { phrase: "blind loyalty", type: "Noun Phrase", translation: "lealtà cieca", example: "Where does blind loyalty become dangerous?" },
      { phrase: "stick by someone", type: "Phrasal Verb", translation: "restare accanto a qualcuno", example: "Would you stick by someone who was wrong?" },
      { phrase: "unconditional", type: "Adjective", translation: "incondizionato", example: "Should support ever be unconditional?" },
      { phrase: "enable", type: "Verb", translation: "assecondare", example: "Do you support them, or quietly enable the behaviour?" },
      { phrase: "tough love", type: "Noun Phrase", translation: "amore severo", example: "Is tough love the more loyal option?" }
    ],
    guidedQuestions: [
      "When does **blind loyalty** become dangerous?",
      "Would you **stick by someone** who was wrong?",
      "Are you helping or **enable** them?"
    ]
  },
  {
    question: "What do you spend money on that reveals what you actually value?",
    category: "Values",
    depthLevel: 3,
    vocabulary: [
      { phrase: "put your money where your mouth is", type: "Idiom", translation: "passare dalle parole ai fatti", example: "Do you put your money where your mouth is?" },
      { phrase: "a spending habit", type: "Noun Phrase", translation: "un'abitudine di spesa", example: "Which spending habit surprises you?" },
      { phrase: "reveal", type: "Verb", translation: "rivelare", example: "A bank statement can reveal more than a diary." },
      { phrase: "justify", type: "Verb", translation: "giustificare", example: "How do you justify the expensive ones?" },
      { phrase: "align with", type: "Phrase", translation: "essere in linea con", example: "Does your spending align with your stated values?" }
    ],
    guidedQuestions: [
      "Do you **put your money where your mouth is**?",
      "What does it **reveal** about you?",
      "Does it **align with** your stated values?"
    ]
  }
];

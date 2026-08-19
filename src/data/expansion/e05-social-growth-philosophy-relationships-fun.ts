import type { AuthoredQuestion } from '../authoring';

export const batch: AuthoredQuestion[] = [
  {
    question: "How long can you go without speaking to anyone before it bothers you?",
    category: "Social",
    depthLevel: 3,
    vocabulary: [
      { phrase: "recharge", type: "Verb", translation: "ricaricarsi", example: "Do you recharge alone or with people?" },
      { phrase: "crave company", type: "Phrase", translation: "avere bisogno di compagnia", example: "After how long do you crave company?" },
      { phrase: "an introvert", type: "Noun", translation: "un introverso", example: "Are you an introvert or just tired?" },
      { phrase: "cabin fever", type: "Noun Phrase", translation: "claustrofobia da isolamento", example: "How quickly does cabin fever set in?" },
      { phrase: "reach out", type: "Phrasal Verb", translation: "farsi vivo", example: "Who do you reach out to first?" }
    ],
    guidedQuestions: [
      "Do you **recharge** alone or with others?",
      "After how long do you **crave company**?",
      "Who do you **reach out** to first?"
    ]
  },
  {
    question: "What do you talk about when you have nothing to say?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "small talk", type: "Noun Phrase", translation: "chiacchiere di circostanza", example: "Are you any good at small talk?" },
      { phrase: "fall back on", type: "Phrasal Verb", translation: "ripiegare su", example: "Which topic do you fall back on every time?" },
      { phrase: "an awkward silence", type: "Noun Phrase", translation: "un silenzio imbarazzante", example: "How do you survive an awkward silence?" },
      { phrase: "keep the conversation going", type: "Phrase", translation: "tenere viva la conversazione", example: "Is it your job to keep the conversation going?" },
      { phrase: "filler", type: "Noun", translation: "riempitivo", example: "The weather is pure filler." }
    ],
    guidedQuestions: [
      "Are you good at **small talk**?",
      "Which topic do you **fall back on**?",
      "How do you survive **an awkward silence**?"
    ]
  },
  {
    question: "Is it rude to leave a party without saying goodbye?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "slip away", type: "Phrasal Verb", translation: "svignarsela", example: "Do you slip away when nobody is looking?" },
      { phrase: "make the rounds", type: "Idiom", translation: "fare il giro dei saluti", example: "Do you have to make the rounds before leaving?" },
      { phrase: "outstay your welcome", type: "Idiom", translation: "trattenersi troppo", example: "How do you know when you outstay your welcome?" },
      { phrase: "drain", type: "Verb", translation: "prosciugare", example: "Do big groups drain you completely?" },
      { phrase: "obligation", type: "Noun", translation: "obbligo", example: "How much of socialising is pure obligation?" }
    ],
    guidedQuestions: [
      "Do you **slip away** quietly?",
      "Must you **make the rounds** first?",
      "How much is pure **obligation**?"
    ]
  },
  {
    question: "Who do you become around people you want to impress?",
    category: "Social",
    depthLevel: 4,
    vocabulary: [
      { phrase: "put on a show", type: "Idiom", translation: "mettere in scena uno spettacolo", example: "Do you put on a show for certain people?" },
      { phrase: "name-drop", type: "Verb", translation: "citare nomi altisonanti", example: "Do you catch yourself starting to name-drop?" },
      { phrase: "try too hard", type: "Phrase", translation: "sforzarsi troppo", example: "Can people tell when you try too hard?" },
      { phrase: "self-conscious", type: "Adjective", translation: "impacciato, a disagio", example: "Do you get self-conscious in that room?" },
      { phrase: "at ease", type: "Phrase", translation: "a proprio agio", example: "Who makes you feel instantly at ease?" }
    ],
    guidedQuestions: [
      "Do you **put on a show** for some people?",
      "Can people tell when you **try too hard**?",
      "Who makes you feel **at ease**?"
    ]
  },
  {
    question: "Would you rather have five close friends or fifty good acquaintances?",
    category: "Social",
    depthLevel: 3,
    vocabulary: [
      { phrase: "an inner circle", type: "Noun Phrase", translation: "cerchia ristretta", example: "How big is your inner circle really?" },
      { phrase: "spread thin", type: "Phrase", translation: "sparpagliato, sovraccarico", example: "Are your friendships spread thin?" },
      { phrase: "depth", type: "Noun", translation: "profondità", example: "Do you prefer depth over breadth?" },
      { phrase: "keep in touch", type: "Phrase", translation: "mantenere i contatti", example: "How many people can you keep in touch with properly?" },
      { phrase: "a fair-weather friend", type: "Noun Phrase", translation: "amico dei bei tempi", example: "How do you spot a fair-weather friend?" }
    ],
    guidedQuestions: [
      "How big is your **an inner circle**?",
      "Are your friendships **spread thin**?",
      "How do you spot **a fair-weather friend**?"
    ]
  },
  {
    question: "What social rule do you find genuinely pointless?",
    category: "Social",
    depthLevel: 3,
    vocabulary: [
      { phrase: "go through the motions", type: "Idiom", translation: "fare le cose meccanicamente", example: "We all go through the motions at these events." },
      { phrase: "etiquette", type: "Noun", translation: "etichetta", example: "Which piece of etiquette makes no sense to you?" },
      { phrase: "for form's sake", type: "Phrase", translation: "per pura formalità", example: "We only do it for form's sake." },
      { phrase: "unwritten rule", type: "Noun Phrase", translation: "regola non scritta", example: "Which unwritten rule did you learn the hard way?" },
      { phrase: "conform", type: "Verb", translation: "conformarsi", example: "How much do you conform without noticing?" }
    ],
    guidedQuestions: [
      "Do we just **go through the motions**?",
      "Which **unwritten rule** confuses you?",
      "How much do you **conform** without noticing?"
    ]
  },
  {
    question: "Do you find it easier to talk to strangers or people you know well?",
    category: "Social",
    depthLevel: 3,
    vocabulary: [
      { phrase: "open up", type: "Phrasal Verb", translation: "aprirsi", example: "Is it easier to open up to a stranger?" },
      { phrase: "history", type: "Noun", translation: "passato condiviso", example: "Does shared history make honesty harder?" },
      { phrase: "no baggage", type: "Phrase", translation: "senza bagagli emotivi", example: "A stranger comes with no baggage." },
      { phrase: "let your guard down", type: "Idiom", translation: "abbassare la guardia", example: "Where do you let your guard down fastest?" },
      { phrase: "judgement", type: "Noun", translation: "giudizio", example: "Do you fear judgement more from friends?" }
    ],
    guidedQuestions: [
      "Is it easier to **open up** to a stranger?",
      "Does shared **history** make honesty harder?",
      "Where do you **let your guard down**?"
    ]
  },
  {
    question: "What do you do when someone tells a joke you find offensive?",
    category: "Social",
    depthLevel: 4,
    vocabulary: [
      { phrase: "laugh along", type: "Phrase", translation: "ridere per accondiscendenza", example: "Do you laugh along to avoid a scene?" },
      { phrase: "call it out", type: "Phrasal Verb", translation: "denunciarlo apertamente", example: "Would you call it out in front of everyone?" },
      { phrase: "pick your battles", type: "Idiom", translation: "scegliere le battaglie", example: "Do you pick your battles carefully?" },
      { phrase: "complicit", type: "Adjective", translation: "complice", example: "Does silence make you complicit?" },
      { phrase: "kill the mood", type: "Phrase", translation: "rovinare l'atmosfera", example: "Are you afraid to kill the mood?" }
    ],
    guidedQuestions: [
      "Do you **laugh along** to avoid a scene?",
      "Would you **call it out**?",
      "Does silence make you **complicit**?"
    ]
  },

  {
    question: "What skill have you given up on learning?",
    category: "Growth",
    depthLevel: 3,
    vocabulary: [
      { phrase: "give up on", type: "Phrasal Verb", translation: "rinunciare a", example: "What did you give up on too early?" },
      { phrase: "plateau", type: "Verb", translation: "stagnare", example: "Did you plateau and lose interest?" },
      { phrase: "stick with it", type: "Phrase", translation: "perseverare", example: "Why is it so hard to stick with it?" },
      { phrase: "too late", type: "Phrase", translation: "troppo tardi", example: "Is it ever genuinely too late to start?" },
      { phrase: "put in the hours", type: "Phrase", translation: "metterci le ore", example: "Are you willing to put in the hours?" }
    ],
    guidedQuestions: [
      "What did you **give up on** too early?",
      "Did you **plateau** and lose interest?",
      "Are you willing to **put in the hours**?"
    ]
  },
  {
    question: "What feedback have you received more than once?",
    category: "Growth",
    depthLevel: 4,
    vocabulary: [
      { phrase: "a recurring theme", type: "Noun Phrase", translation: "un tema ricorrente", example: "Is there a recurring theme in your reviews?" },
      { phrase: "take on board", type: "Idiom", translation: "far tesoro di", example: "Did you take on board what they said?" },
      { phrase: "dismiss", type: "Verb", translation: "liquidare", example: "Why did you dismiss it the first time?" },
      { phrase: "a pattern", type: "Noun", translation: "uno schema", example: "When two people say it, it is a pattern." },
      { phrase: "act on", type: "Phrasal Verb", translation: "agire in base a", example: "What would it take for you to act on it?" }
    ],
    guidedQuestions: [
      "Is there **a recurring theme**?",
      "Did you **take on board** what they said?",
      "What would make you **act on** it?"
    ]
  },
  {
    question: "Do you grow more from success or from being told no?",
    category: "Growth",
    depthLevel: 4,
    vocabulary: [
      { phrase: "a setback", type: "Noun", translation: "una battuta d'arresto", example: "Which setback taught you the most?" },
      { phrase: "rejection", type: "Noun", translation: "rifiuto", example: "How do you handle rejection now?" },
      { phrase: "complacent", type: "Adjective", translation: "compiacente, appagato", example: "Does success make you complacent?" },
      { phrase: "bounce back", type: "Phrasal Verb", translation: "riprendersi", example: "How quickly do you bounce back?" },
      { phrase: "prove someone wrong", type: "Phrase", translation: "smentire qualcuno", example: "Do you need to prove someone wrong to move?" }
    ],
    guidedQuestions: [
      "Which **a setback** taught you most?",
      "Does success make you **complacent**?",
      "How quickly do you **bounce back**?"
    ]
  },
  {
    question: "What are you better at than you were a year ago?",
    category: "Growth",
    depthLevel: 2,
    vocabulary: [
      { phrase: "come a long way", type: "Idiom", translation: "aver fatto molta strada", example: "Have you come a long way without noticing?" },
      { phrase: "incremental", type: "Adjective", translation: "graduale", example: "Most progress is incremental and invisible." },
      { phrase: "give yourself credit", type: "Phrase", translation: "riconoscersi il merito", example: "Do you ever give yourself credit?" },
      { phrase: "keep at it", type: "Phrasal Verb", translation: "insistere", example: "You only improve if you keep at it." },
      { phrase: "track progress", type: "Phrase", translation: "monitorare i progressi", example: "Do you track progress, or just guess?" }
    ],
    guidedQuestions: [
      "Have you **come a long way** without noticing?",
      "Do you ever **give yourself credit**?",
      "Do you **track progress** at all?"
    ]
  },
  {
    question: "What habit would change your life if you kept it for a year?",
    category: "Growth",
    depthLevel: 3,
    vocabulary: [
      { phrase: "stick to", type: "Phrasal Verb", translation: "mantenere", example: "Which habit could you actually stick to?" },
      { phrase: "compound", type: "Verb", translation: "accumularsi", example: "Small habits compound over a year." },
      { phrase: "fall off the wagon", type: "Idiom", translation: "ricadere nelle vecchie abitudini", example: "How fast do you fall off the wagon?" },
      { phrase: "keystone habit", type: "Noun Phrase", translation: "abitudine chiave", example: "What is your keystone habit?" },
      { phrase: "show up", type: "Phrasal Verb", translation: "presentarsi, esserci", example: "Most of it is just choosing to show up." }
    ],
    guidedQuestions: [
      "Which habit could you **stick to**?",
      "How fast do you **fall off the wagon**?",
      "Is it mostly about choosing to **show up**?"
    ]
  },
  {
    question: "Who has outgrown you, or who have you outgrown?",
    category: "Growth",
    depthLevel: 4,
    vocabulary: [
      { phrase: "outgrow", type: "Verb", translation: "superare, crescere oltre", example: "Is it arrogant to say you outgrow a friend?" },
      { phrase: "drift apart", type: "Phrasal Verb", translation: "allontanarsi", example: "Did you drift apart, or did something break?" },
      { phrase: "hold you back", type: "Phrasal Verb", translation: "frenare", example: "Who was starting to hold you back?" },
      { phrase: "grow at different speeds", type: "Phrase", translation: "crescere a velocità diverse", example: "People simply grow at different speeds." },
      { phrase: "no hard feelings", type: "Phrase", translation: "nessun rancore", example: "Can it end with no hard feelings?" }
    ],
    guidedQuestions: [
      "Is it arrogant to **outgrow** a friend?",
      "Did you **drift apart** or did something break?",
      "Who was starting to **hold you back**?"
    ]
  },
  {
    question: "What would you attempt if you were guaranteed to be bad at it for a year?",
    category: "Growth",
    depthLevel: 3,
    vocabulary: [
      { phrase: "beginner", type: "Noun", translation: "principiante", example: "Are you willing to be a beginner again?" },
      { phrase: "embarrass yourself", type: "Phrase", translation: "mettersi in imbarazzo", example: "How much can you embarrass yourself in public?" },
      { phrase: "steep learning curve", type: "Noun Phrase", translation: "curva di apprendimento ripida", example: "Can you survive a steep learning curve?" },
      { phrase: "ego", type: "Noun", translation: "ego", example: "Does your ego get in the way of learning?" },
      { phrase: "stick it out", type: "Phrasal Verb", translation: "resistere fino in fondo", example: "Would you stick it out for twelve months?" }
    ],
    guidedQuestions: [
      "Can you be a **beginner** again?",
      "Does your **ego** get in the way?",
      "Would you **stick it out** for a year?"
    ]
  },
  {
    question: "What did failing at something teach you that succeeding never could?",
    category: "Growth",
    depthLevel: 4,
    vocabulary: [
      { phrase: "fall flat", type: "Idiom", translation: "fare fiasco", example: "What did you watch fall flat despite your best effort?" },
      { phrase: "humbling", type: "Adjective", translation: "che rende umili", example: "Was it a humbling experience?" },
      { phrase: "reassess", type: "Verb", translation: "rivalutare", example: "Did it force you to reassess everything?" },
      { phrase: "a blessing in disguise", type: "Idiom", translation: "una fortuna travestita", example: "Was it a blessing in disguise?" },
      { phrase: "silver lining", type: "Noun Phrase", translation: "lato positivo", example: "Did you find any silver lining?" }
    ],
    guidedQuestions: [
      "What did you watch **fall flat**?",
      "Was it genuinely **humbling**?",
      "Was it **a blessing in disguise**?"
    ]
  },

  {
    question: "Is a person the same person they were ten years ago?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "continuity", type: "Noun", translation: "continuità", example: "What gives you continuity across a decade?" },
      { phrase: "the same in name only", type: "Phrase", translation: "uguale solo di nome", example: "Are you the same in name only?" },
      { phrase: "gradual", type: "Adjective", translation: "graduale", example: "Change is gradual enough that you miss it." },
      { phrase: "core self", type: "Noun Phrase", translation: "nucleo di sé", example: "Is there a core self that never moves?" },
      { phrase: "replace", type: "Verb", translation: "sostituire", example: "Every cell will replace itself eventually." }
    ],
    guidedQuestions: [
      "What gives you **continuity**?",
      "Is change too **gradual** to notice?",
      "Is there a **core self** underneath?"
    ]
  },
  {
    question: "Can an action be good if the motive is selfish?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "motive", type: "Noun", translation: "movente", example: "Does the motive change the value of the act?" },
      { phrase: "the ends justify the means", type: "Phrase", translation: "il fine giustifica i mezzi", example: "Do the ends justify the means here?" },
      { phrase: "outcome", type: "Noun", translation: "risultato", example: "Should we only judge the outcome?" },
      { phrase: "virtue signalling", type: "Noun Phrase", translation: "ostentazione di virtù", example: "Is it charity or virtue signalling?" },
      { phrase: "beside the point", type: "Idiom", translation: "irrilevante", example: "Perhaps intention is beside the point." }
    ],
    guidedQuestions: [
      "Does the **motive** change the act's value?",
      "Should we judge only the **outcome**?",
      "Is intention **beside the point**?"
    ]
  },
  {
    question: "Do we choose what we believe?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "free will", type: "Noun Phrase", translation: "libero arbitrio", example: "Does free will apply to belief at all?" },
      { phrase: "be persuaded", type: "Phrase", translation: "essere persuasi", example: "You can only be persuaded, not commanded." },
      { phrase: "wishful thinking", type: "Noun Phrase", translation: "pio desiderio", example: "How much of belief is wishful thinking?" },
      { phrase: "evidence", type: "Noun", translation: "prove", example: "Do you follow the evidence honestly?" },
      { phrase: "upbringing", type: "Noun", translation: "educazione ricevuta", example: "How much did your upbringing decide for you?" }
    ],
    guidedQuestions: [
      "Does **free will** apply to belief?",
      "How much is **wishful thinking**?",
      "How much did **upbringing** decide?"
    ]
  },
  {
    question: "Is it better to be just or to be merciful?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "justice", type: "Noun", translation: "giustizia", example: "Is justice always the kinder option?" },
      { phrase: "mercy", type: "Noun", translation: "misericordia", example: "When does mercy become weakness?" },
      { phrase: "let off lightly", type: "Phrase", translation: "cavarsela con poco", example: "Should anyone be let off lightly?" },
      { phrase: "deserve", type: "Verb", translation: "meritare", example: "Does anyone truly deserve what they get?" },
      { phrase: "a second chance", type: "Noun Phrase", translation: "una seconda possibilità", example: "Who has earned a second chance?" }
    ],
    guidedQuestions: [
      "Is **justice** always kinder?",
      "When does **mercy** become weakness?",
      "Who has earned **a second chance**?"
    ]
  },
  {
    question: "If you could not compare yourself to anyone, would you still want what you want?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "keep up", type: "Phrasal Verb", translation: "stare al passo", example: "How much of your ambition is just to keep up?" },
      { phrase: "relative", type: "Adjective", translation: "relativo", example: "Is satisfaction always relative?" },
      { phrase: "in a vacuum", type: "Phrase", translation: "nel vuoto, isolatamente", example: "Nobody wants anything in a vacuum." },
      { phrase: "borrowed desire", type: "Noun Phrase", translation: "desiderio preso in prestito", example: "How much of it is borrowed desire?" },
      { phrase: "measure yourself against", type: "Phrase", translation: "misurarsi con", example: "Who do you measure yourself against?" }
    ],
    guidedQuestions: [
      "Is your ambition just to **keep up**?",
      "Is satisfaction always **relative**?",
      "Who do you **measure yourself against**?"
    ]
  },
  {
    question: "Should people be judged by their worst moment?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "define", type: "Verb", translation: "definire", example: "Should one hour define a whole life?" },
      { phrase: "out of character", type: "Phrase", translation: "fuori dal proprio carattere", example: "What if it was completely out of character?" },
      { phrase: "redemption", type: "Noun", translation: "redenzione", example: "Is redemption still possible for anyone?" },
      { phrase: "context", type: "Noun", translation: "contesto", example: "How much does context excuse?" },
      { phrase: "hold against", type: "Phrasal Verb", translation: "rinfacciare", example: "How long should we hold it against someone?" }
    ],
    guidedQuestions: [
      "Should one hour **define** a life?",
      "Is **redemption** always possible?",
      "How long should we **hold** it **against** them?"
    ]
  },
  {
    question: "Is there any difference between what is true and what works?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "useful fiction", type: "Noun Phrase", translation: "finzione utile", example: "Is religion a useful fiction to some people?" },
      { phrase: "hold up", type: "Phrasal Verb", translation: "reggere", example: "Does the idea hold up under scrutiny?" },
      { phrase: "pragmatic", type: "Adjective", translation: "pragmatico", example: "Is a pragmatic answer good enough?" },
      { phrase: "objective", type: "Adjective", translation: "oggettivo", example: "Is anything genuinely objective?" },
      { phrase: "settle for", type: "Phrasal Verb", translation: "accontentarsi di", example: "Should we settle for what works?" }
    ],
    guidedQuestions: [
      "Is it a **useful fiction**?",
      "Does the idea **hold up** under scrutiny?",
      "Should we **settle for** what works?"
    ]
  },
  {
    question: "Would a world without any suffering be better?",
    category: "Philosophy",
    depthLevel: 4,
    vocabulary: [
      { phrase: "trade-off", type: "Noun", translation: "compromesso", example: "What would the trade-off be?" },
      { phrase: "meaningful", type: "Adjective", translation: "significativo", example: "Would anything still be meaningful?" },
      { phrase: "by contrast", type: "Phrase", translation: "per contrasto", example: "We know joy by contrast with pain." },
      { phrase: "sterile", type: "Adjective", translation: "sterile", example: "Would such a world feel sterile?" },
      { phrase: "worth having", type: "Phrase", translation: "che vale la pena avere", example: "Is a painless life worth having?" }
    ],
    guidedQuestions: [
      "What would the **trade-off** be?",
      "Would anything still be **meaningful**?",
      "Is a painless life **worth having**?"
    ]
  },

  {
    question: "What do you forgive in a friend that you would not in a partner?",
    category: "Relationships",
    depthLevel: 4,
    vocabulary: [
      { phrase: "hold to a higher standard", type: "Phrase", translation: "tenere a uno standard più alto", example: "Why do we hold to a higher standard the people closest to us?" },
      { phrase: "let slide", type: "Phrasal Verb", translation: "lasciar correre", example: "What do you let slide with old friends?" },
      { phrase: "a deal-breaker", type: "Noun", translation: "condizione insormontabile", example: "What is an absolute deal-breaker for you?" },
      { phrase: "double standard", type: "Noun Phrase", translation: "doppio standard", example: "Is that a double standard you can defend?" },
      { phrase: "expectations", type: "Noun", translation: "aspettative", example: "Are your expectations realistic?" }
    ],
    guidedQuestions: [
      "What do you **let slide** with friends?",
      "What is your **a deal-breaker**?",
      "Is that a **double standard**?"
    ]
  },
  {
    question: "Can you love someone and not like them?",
    category: "Relationships",
    depthLevel: 4,
    vocabulary: [
      { phrase: "put up with", type: "Phrasal Verb", translation: "sopportare", example: "How much do you put up with out of love?" },
      { phrase: "grate on you", type: "Phrasal Verb", translation: "dare sui nervi", example: "What about them grates on you daily?" },
      { phrase: "unconditional", type: "Adjective", translation: "incondizionato", example: "Is love ever truly unconditional?" },
      { phrase: "duty", type: "Noun", translation: "dovere", example: "Is it love, or is it duty by now?" },
      { phrase: "stay together", type: "Phrase", translation: "restare insieme", example: "Why do people stay together without affection?" }
    ],
    guidedQuestions: [
      "How much do you **put up with**?",
      "What **grate on you** daily?",
      "Is love ever **unconditional**?"
    ]
  },
  {
    question: "What is the most useful thing a partner can say during an argument?",
    category: "Relationships",
    depthLevel: 3,
    vocabulary: [
      { phrase: "de-escalate", type: "Verb", translation: "disinnescare", example: "Which phrase can de-escalate anything?" },
      { phrase: "hear you out", type: "Phrasal Verb", translation: "ascoltarti fino in fondo", example: "Will they hear you out before replying?" },
      { phrase: "get defensive", type: "Phrase", translation: "mettersi sulla difensiva", example: "How fast do you get defensive?" },
      { phrase: "concede", type: "Verb", translation: "concedere", example: "Can you concede a point mid-argument?" },
      { phrase: "win the argument", type: "Phrase", translation: "vincere la discussione", example: "Do you need to win the argument, or fix the problem?" }
    ],
    guidedQuestions: [
      "Which phrase can **de-escalate** anything?",
      "Will they **hear you out**?",
      "Do you need to **win the argument**?"
    ]
  },
  {
    question: "Is jealousy ever a useful signal?",
    category: "Relationships",
    depthLevel: 4,
    vocabulary: [
      { phrase: "jealousy", type: "Noun", translation: "gelosia", example: "Is jealousy always about insecurity?" },
      { phrase: "a red flag", type: "Noun Phrase", translation: "un campanello d'allarme", example: "Is it a red flag or useful information?" },
      { phrase: "possessive", type: "Adjective", translation: "possessivo", example: "Where is the line before possessive?" },
      { phrase: "insecurity", type: "Noun", translation: "insicurezza", example: "Which insecurity is it really pointing at?" },
      { phrase: "trust", type: "Noun", translation: "fiducia", example: "Can trust survive constant suspicion?" }
    ],
    guidedQuestions: [
      "Is **jealousy** always insecurity?",
      "Is it **a red flag**?",
      "Can **trust** survive suspicion?"
    ]
  },
  {
    question: "What do you need from people that you find hard to ask for?",
    category: "Relationships",
    depthLevel: 4,
    vocabulary: [
      { phrase: "reassurance", type: "Noun", translation: "rassicurazione", example: "Do you need more reassurance than you admit?" },
      { phrase: "needy", type: "Adjective", translation: "bisognoso", example: "Are you afraid of seeming needy?" },
      { phrase: "spell it out", type: "Idiom", translation: "dirlo chiaro e tondo", example: "Do you expect people to guess, or spell it out?" },
      { phrase: "mind-reader", type: "Noun", translation: "chi legge nel pensiero", example: "Nobody is a mind-reader." },
      { phrase: "meet halfway", type: "Idiom", translation: "venirsi incontro", example: "Can you both meet halfway?" }
    ],
    guidedQuestions: [
      "Do you need more **reassurance** than you admit?",
      "Are you afraid of seeming **needy**?",
      "Do you **spell it out**, or expect guessing?"
    ]
  },
  {
    question: "Should couples tell each other everything?",
    category: "Relationships",
    depthLevel: 4,
    vocabulary: [
      { phrase: "full disclosure", type: "Noun Phrase", translation: "trasparenza totale", example: "Does full disclosure make a couple stronger?" },
      { phrase: "keep something back", type: "Phrase", translation: "tenersi qualcosa", example: "Is it healthy to keep something back?" },
      { phrase: "privacy", type: "Noun", translation: "privacy", example: "Where does privacy end and secrecy begin?" },
      { phrase: "come between", type: "Phrasal Verb", translation: "mettersi in mezzo", example: "Could that truth come between you?" },
      { phrase: "need to know", type: "Phrase", translation: "bisogno di sapere", example: "Does your partner need to know everything?" }
    ],
    guidedQuestions: [
      "Does **full disclosure** help?",
      "Is it healthy to **keep something back**?",
      "Where does **privacy** become secrecy?"
    ]
  },

  {
    question: "What is the most fun you have had for free?",
    category: "Fun",
    depthLevel: 2,
    vocabulary: [
      { phrase: "cost a penny", type: "Phrase", translation: "costare un centesimo", example: "It did not cost a penny and it was perfect." },
      { phrase: "make your own fun", type: "Phrase", translation: "inventarsi il divertimento", example: "Did you have to make your own fun as a child?" },
      { phrase: "spontaneous", type: "Adjective", translation: "spontaneo", example: "Was it spontaneous or carefully planned?" },
      { phrase: "in stitches", type: "Idiom", translation: "piegati dalle risate", example: "We were absolutely in stitches." },
      { phrase: "a laugh", type: "Noun", translation: "una risata, uno spasso", example: "Was it just a laugh, or something more?" }
    ],
    guidedQuestions: [
      "Did it **cost a penny**?",
      "Did you have to **make your own fun**?",
      "Were you **in stitches**?"
    ]
  },
  {
    question: "What is something everyone finds fun that you secretly do not?",
    category: "Fun",
    depthLevel: 3,
    vocabulary: [
      { phrase: "go along with", type: "Phrasal Verb", translation: "assecondare", example: "Do you just go along with it every time?" },
      { phrase: "not your cup of tea", type: "Idiom", translation: "non fa per te", example: "It is simply not your cup of tea." },
      { phrase: "pretend to enjoy", type: "Phrase", translation: "fingere di divertirsi", example: "How long can you pretend to enjoy something?" },
      { phrase: "spoil it", type: "Phrase", translation: "rovinarlo", example: "Would saying so spoil it for everyone?" },
      { phrase: "overrated", type: "Adjective", translation: "sopravvalutato", example: "Which popular activity is completely overrated?" }
    ],
    guidedQuestions: [
      "Do you just **go along with** it?",
      "Is it simply **not your cup of tea**?",
      "Which activity is **overrated**?"
    ]
  },
  {
    question: "When did you last do something purely because it was silly?",
    category: "Fun",
    depthLevel: 2,
    vocabulary: [
      { phrase: "let loose", type: "Phrasal Verb", translation: "scatenarsi", example: "When did you last let loose completely?" },
      { phrase: "act your age", type: "Phrase", translation: "comportarsi da adulto", example: "Who told you to act your age?" },
      { phrase: "playful", type: "Adjective", translation: "giocoso", example: "Are you still playful as an adult?" },
      { phrase: "self-conscious", type: "Adjective", translation: "impacciato", example: "Do you get too self-conscious to be silly?" },
      { phrase: "for no reason", type: "Phrase", translation: "senza motivo", example: "Do you ever laugh for no reason?" }
    ],
    guidedQuestions: [
      "When did you last **let loose**?",
      "Who told you to **act your age**?",
      "Are you still **playful**?"
    ]
  },
  {
    question: "What game or activity brings out your competitive side?",
    category: "Fun",
    depthLevel: 2,
    vocabulary: [
      { phrase: "bring out", type: "Phrasal Verb", translation: "far emergere", example: "What can bring out your worst side?" },
      { phrase: "a sore loser", type: "Noun Phrase", translation: "chi non sa perdere", example: "Are you a sore loser?" },
      { phrase: "take it seriously", type: "Phrase", translation: "prenderla sul serio", example: "Do you take it seriously or laugh it off?" },
      { phrase: "trash talk", type: "Noun", translation: "provocazioni", example: "Is trash talk part of the fun?" },
      { phrase: "sportsmanship", type: "Noun", translation: "spirito sportivo", example: "Does sportsmanship still matter to you?" }
    ],
    guidedQuestions: [
      "What can **bring out** your worst side?",
      "Are you **a sore loser**?",
      "Does **sportsmanship** still matter?"
    ]
  },
  {
    question: "Would you rather laugh a lot or be deeply moved?",
    category: "Fun",
    depthLevel: 3,
    vocabulary: [
      { phrase: "belly laugh", type: "Noun Phrase", translation: "risata di pancia", example: "When did you last have a proper belly laugh?" },
      { phrase: "moved to tears", type: "Phrase", translation: "commosso fino alle lacrime", example: "What last left you moved to tears?" },
      { phrase: "light-hearted", type: "Adjective", translation: "spensierato", example: "Do you choose light-hearted films every time?" },
      { phrase: "stay with you", type: "Phrase", translation: "restare impresso", example: "Which one will stay with you longer?" },
      { phrase: "escapism", type: "Noun", translation: "evasione", example: "Is it escapism, and is that a problem?" }
    ],
    guidedQuestions: [
      "When did you last have a **belly laugh**?",
      "What left you **moved to tears**?",
      "Which will **stay with you** longer?"
    ]
  },
  {
    question: "What would a perfect lazy day look like?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "have a lie-in", type: "Phrase", translation: "dormire fino a tardi", example: "Would you have a lie-in or get up early?" },
      { phrase: "potter about", type: "Phrasal Verb", translation: "gironzolare senza scopo", example: "Do you like to potter about the house?" },
      { phrase: "guilt-free", type: "Adjective", translation: "senza sensi di colpa", example: "Can you have a guilt-free day off?" },
      { phrase: "unwind", type: "Verb", translation: "rilassarsi", example: "What helps you unwind completely?" },
      { phrase: "no plans", type: "Phrase", translation: "nessun programma", example: "Is a day with no plans a treat or a worry?" }
    ],
    guidedQuestions: [
      "Would you **have a lie-in**?",
      "Can you have a **guilt-free** day?",
      "Is a day with **no plans** a treat?"
    ]
  }
];

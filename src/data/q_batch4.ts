import type { Question } from './questions';

export const batch4: Question[] = [
  {
    id: 270,
    question: "What is a seemingly simple word that you always spell wrong?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "mind blank", translation: "vuoto di memoria", type: "Noun Phrase", example: "I had a total mind blank on how to spell 'restaurant'." },
      { phrase: "second-guess", translation: "mettere in dubbio", type: "Verb", example: "I always second-guess myself when writing emails." },
      { phrase: "rely heavily on", translation: "fare grande affidamento su", type: "Phrase", example: "We rely heavily on autocorrect nowadays." },
      { phrase: "slip up", translation: "scivolone / errore", type: "Noun/Verb", example: "It was just a minor slip up in the text message." },
      { phrase: "pet peeve", translation: "cosa fastidiosa", type: "Noun Phrase", example: "Bad grammar is my biggest pet peeve." }
    ],
    guidedQuestions: [
      "Have you ever had a sudden **mind blank** during a presentation?",
      "Do people **rely heavily on** AI for writing too much?",
      "What spelling mistake is a major **pet peeve** for you?"
    ]
  },
  {
    id: 271,
    question: "What is the most beautiful piece of architecture you've ever seen?",
    category: "Daily",
    depthLevel: 1,
    vocabulary: [
      { phrase: "breathtaking", translation: "mozzafiato", type: "Adjective", example: "The ceiling of the cathedral was simply breathtaking." },
      { phrase: "stand the test of time", translation: "resistere alla prova del tempo", type: "Idiom", example: "Roman aqueducts certainly stand the test of time." },
      { phrase: "intricate details", translation: "dettagli complessi", type: "Collocation", example: "I was amazed by the intricate details of the wood carvings." },
      { phrase: "in awe", translation: "incantato / in soggezione", type: "Idiom", example: "Standing inside the Colosseum left me in awe." },
      { phrase: "monstrosity", translation: "mostruosità", type: "Noun", example: "Some people think modern skyscrapers are a visual monstrosity." }
    ],
    guidedQuestions: [
      "Does classical architecture **stand the test of time** better than modern designs?",
      "What famous building left you entirely **in awe**?",
      "Do you consider brutalist concrete buildings a masterpiece or a **monstrosity**?"
    ]
  },
  {
    id: 272,
    question: "If you had to master one instrument instantly, which one would fit your personality best?",
    category: "Dreams",
    depthLevel: 2,
    vocabulary: [
      { phrase: "struck a chord", translation: "toccare le corde del cuore (fig)", type: "Idiom", example: "The sad melody completely struck a chord with me." },
      { phrase: "steep learning curve", translation: "curva di apprendimento ripida", type: "Noun Phrase", example: "The violin has a notoriously steep learning curve." },
      { phrase: "in tune with", translation: "in sintonia con", type: "Idiom", example: "Are you in tune with your artistic side?" },
      { phrase: "virtuoso", translation: "virtuoso", type: "Noun", example: "It takes decades to become a true piano virtuoso." },
      { phrase: "jam out", translation: "suonare liberamente / fare jam session", type: "Phrasal Verb", example: "It would be fun to just jam out with a band on weekends." }
    ],
    guidedQuestions: [
      "Why does a specific instrument have such a **steep learning curve**?",
      "What type of music generally **strikes a chord** with you?",
      "Are you highly **in tune with** your emotions when listening to sad songs?"
    ]
  },
  {
    id: 273,
    question: "What is an assumption people always make about you that is completely wrong?",
    category: "Social",
    depthLevel: 2,
    vocabulary: [
      { phrase: "judge a book by its cover", translation: "giudicare dalle apparenze", type: "Idiom", example: "People judge a book by its cover, assuming I am arrogant because I'm quiet." },
      { phrase: "misread", translation: "fraintendere / leggere male", type: "Verb", example: "They completely misread my intentions." },
      { phrase: "vibe", translation: "vibrazione / energia", type: "Noun", example: "I apparently give off a highly intimidating vibe." },
      { phrase: "first impression", translation: "prima impressione", type: "Noun Phrase", example: "My first impression of him was totally off the mark." },
      { phrase: "deep down", translation: "in fondo", type: "Phrase", example: "Deep down, I am actually incredibly sensitive." }
    ],
    guidedQuestions: [
      "Do you think it's impossible not to **judge a book by its cover**?",
      "Why do people often **misread** your tone in text messages?",
      "What **vibe** do you think you give off to strangers?"
    ]
  },
  {
    id: 274,
    question: "Do you think we are living in the 'good old days' right now?",
    category: "Deep",
    depthLevel: 4,
    vocabulary: [
      { phrase: "nostalgia", translation: "nostalgia", type: "Noun", example: "Nostalgia makes us remember the past as better than it actually was." },
      { phrase: "take for granted", translation: "dare per scontato", type: "Phrase", example: "We take the internet for granted until it breaks." },
      { phrase: "rose-tinted glasses", translation: "lenti rosa (vedere il mondo in modo idealizzato)", type: "Idiom", example: "Looking back at the 90s with rose-tinted glasses ignores the real problems." },
      { phrase: "fleeting", translation: "fugace", type: "Adjective", example: "Happiness is a very fleeting emotion." },
      { phrase: "ignorance is bliss", translation: "l'ignoranza è una benedizione", type: "Idiom", example: "We were happy as kids mainly because ignorance is bliss." }
    ],
    guidedQuestions: [
      "Is **nostalgia** a dangerous emotion?",
      "What technology do we currently **take for granted**?",
      "Why do generations always view their childhood through **rose-tinted glasses**?"
    ]
  },
  {
    id: 275,
    question: "What is an unconventional feature you would build into your dream house?",
    category: "Dreams",
    depthLevel: 2,
    vocabulary: [
      { phrase: "spare no expense", translation: "non badare a spese", type: "Phrase", example: "If I built a house, I would spare no expense on the kitchen." },
      { phrase: "novelty", translation: "novità / stravaganza", type: "Noun", example: "A slide instead of stairs is a fun novelty." },
      { phrase: "game-changer", translation: "punto di svolta", type: "Noun Phrase", example: "Having heated floors in the winter is considered a game-changer." },
      { phrase: "cozy nook", translation: "angolino accogliente", type: "Noun Phrase", example: "I want a cozy reading nook built into the wall." },
      { phrase: "over-the-top", translation: "esagerato", type: "Adjective", example: "An indoor waterfall might be a little over-the-top." }
    ],
    guidedQuestions: [
      "If you could **spare no expense**, what is the first room you would design?",
      "What modern home appliance is a total **game-changer**?",
      "Would you prefer an **over-the-top** mansion or a small cabin?"
    ]
  },
  {
    id: 276,
    question: "What is the biggest risk you've actively decided NOT to take?",
    category: "Deep",
    depthLevel: 3,
    vocabulary: [
      { phrase: "play it safe", translation: "non rischiare / andare sul sicuro", type: "Idiom", example: "Instead of moving to New York, I chose to play it safe." },
      { phrase: "what-if", translation: "il 'cosa succederebbe se'", type: "Noun", example: "Do you constantly live with the 'what-if' of that decision?" },
      { phrase: "leap of faith", translation: "salto nel buio / atto di fede", type: "Noun Phrase", example: "Quitting my job was a massive leap of faith." },
      { phrase: "weigh the pros and cons", translation: "soppesare i pro e i contro", type: "Phrase", example: "You must carefully weigh the pros and cons before buying a house." },
      { phrase: "dodged a bullet", translation: "schivato un proiettile", type: "Idiom", example: "Looking back at that toxic startup, I really dodged a bullet." }
    ],
    guidedQuestions: [
      "Is it better to **play it safe** or take wild risks in your 20s?",
      "Have you ever taken a massive **leap of faith** that actually worked?",
      "When evaluating a job offer, how do you **weigh the pros and cons**?"
    ]
  },
  {
    id: 277,
    question: "What is something that strongly gives you a sense of purpose?",
    category: "Wisdom",
    depthLevel: 4,
    vocabulary: [
      { phrase: "anchor", translation: "àncora (fig.)", type: "Noun", example: "My family acts as an anchor when I feel lost." },
      { phrase: "driving force", translation: "forza motrice", type: "Noun Phrase", example: "Curiosity is the main driving force behind my career." },
      { phrase: "give back", translation: "restituire (alla comunità)", type: "Phrasal Verb", example: "I want to gain wealth so I can eventually give back." },
      { phrase: "inner compass", translation: "bussola interiore", type: "Noun Phrase", example: "When society is chaotic, you have to follow your inner compass." },
      { phrase: "larger than life", translation: "più grande della vita", type: "Idiom", example: "To feel fulfilled, do we need to be part of something larger than life?" }
    ],
    guidedQuestions: [
      "What is your primary **driving force** to wake up in the morning?",
      "How do you plan to **give back** to your local community?",
      "Is it possible to live without an **inner compass**?"
    ]
  },
  {
    id: 278,
    question: "What is an incredibly difficult task that you actually genuinely enjoy doing?",
    category: "Personal",
    depthLevel: 2,
    vocabulary: [
      { phrase: "flow state", translation: "stato di flusso", type: "Noun Phrase", example: "When I am painting, I enter a deep flow state." },
      { phrase: "get lost in", translation: "perdersi in", type: "Phrasal Verb", example: "I can easily get lost in organizing scattered data." },
      { phrase: "labor of love", translation: "lavoro fatto con amore", type: "Noun Phrase", example: "Restoring that old car was a total labor of love." },
      { phrase: "daunting", translation: "scoraggiante", type: "Adjective", example: "Writing a novel seemed daunting, but I loved it." },
      { phrase: "rewarding", translation: "gratificante", type: "Adjective", example: "Nothing is more rewarding than a hard-earned victory." }
    ],
    guidedQuestions: [
      "What activity reliably puts you into a deep **flow state**?",
      "Have you ever completed a project that was pure **labor of love**?",
      "Why do some **daunting** tasks ultimately feel so **rewarding**?"
    ]
  },
  {
    id: 279,
    question: "If humans stopped needing to sleep, what would you do with your extra 8 hours?",
    category: "Fun",
    depthLevel: 1,
    vocabulary: [
      { phrase: "hustle culture", translation: "cultura del lavoro incessante", type: "Noun Phrase", example: "Hustle culture would completely ruin the extra time." },
      { phrase: "night owl", translation: "nottambulo", type: "Noun Phrase", example: "As a night owl, I would love the quiet hours of 3 AM." },
      { phrase: "monopolize", translation: "monopolizzare", type: "Verb", example: "Our employers would just monopolize the extra hours." },
      { phrase: "pass the time", translation: "far passare il tempo", type: "Phrase", example: "We would probably just invent more scrolling apps to pass the time." },
      { phrase: "burn the midnight oil", translation: "lavorare fino a tardi", type: "Idiom", example: "Without sleep, everyone would burn the midnight oil forever." }
    ],
    guidedQuestions: [
      "Would **hustle culture** force us to work 16 hour days?",
      "Do you think the quiet peace of the **night owl** hours would be ruined?",
      "Is it unhealthy to constantly **burn the midnight oil**?"
    ]
  }
];

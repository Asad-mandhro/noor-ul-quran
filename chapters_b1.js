// ALL CHAPTERS — COMPLETE MADINAH ARABIC CURRICULUM
// Books 1, 2, 3 — 49 chapters total

const V1 = "W56bEvyXaVM";
const V2 = "hBV7MiorOUY";
const V3 = "rEOQmQmApOg";
const GOLD = "#c9a84c";
const GREEN = "#8bbd6b";
const BLUE = "#6b8bbd";
const PURPLE = "#b08bdd";
const BROWN = "#bd8b6b";

const r = (heading, body, tip, items) => ({ type:"rule", heading, body: body||"", tip:tip||null, items:items||null });
const v = (heading, words) => ({ type:"vocab_list", heading, words });
const p = (heading, instruction, words) => ({ type:"reading_practice", heading, instruction, words });
const intro = (heading, body) => ({ type:"letter_intro", heading, body });
const fact = (heading, points) => ({ type:"fact", heading, points });
const w = (arabic, roman, meaning, note) => ({ arabic, roman, meaning, note: note||"" });
const q = (question, a, b, c, d, ans, exp) => ({ q: question, opts:[a,b,c,d], ans, exp });

window.EXTRA_CHAPTERS = [
{
  id:"ch3",num:3,book:1,arabic:"ذَلِكَ وَتِلْكَ",english:"That is...",
  desc:"Near vs far demonstratives",color:GREEN,videoId:V1,
  slides:[
    intro("ذَلِكَ / تِلْكَ","You know هَذَا/هَذِهِ for THIS. Now learn ذَلِكَ (that — masculine) and تِلْكَ (that — feminine) for things far away."),
    r("Near vs Far",
      "هَذَا كِتَابٌ = This is a book (near)\nذَلِكَ كِتَابٌ = That is a book (far)\n\nهَذِهِ مَدْرَسَةٌ = This is a school (near)\nتِلْكَ مَدْرَسَةٌ = That is a school (far)",
      "ذَلِكَ has a longer sound — it points further away.",
      [{arabic:"ذَلِكَ",label:"That (masculine)"},{arabic:"تِلْكَ",label:"That (feminine)"}]
    ),
    v("More Nouns",[
      w("قَمِيصٌ","qameesun","a shirt","ذَلِكَ قَمِيصٌ = That is a shirt"),
      w("حَجَرٌ","hajarun","a stone","ذَلِكَ حَجَرٌ = That is a stone"),
      w("سُكَّرٌ","sukkarun","sugar","ذَلِكَ سُكَّرٌ = That is sugar"),
      w("نَجْمٌ","najmun","a star","ذَلِكَ نَجْمٌ = That is a star"),
      w("وَ","wa","and","connects two nouns/sentences"),
    ]),
    p("Full Sentences","Read and tap 🔊:",[
      {arabic:"هَذَا كِتَابٌ وَذَلِكَ قَلَمٌ",roman:"haadha kitaabun wa dhaalika qalamun",meaning:"This is a book and that is a pen"},
      {arabic:"هَذِهِ مَدْرَسَةٌ وَتِلْكَ مَسْجِدٌ",roman:"haadhihi madrasatun wa tilka masjid",meaning:"This is a school and that is a mosque"},
    ])
  ],
  quiz:[
    q("ذَلِكَ is used for:","That (masculine far)","That (feminine far)","This (masculine near)","This (feminine near)",0,"ذَلِكَ = That (masculine far). تِلْكَ = That (feminine far)."),
    q("تِلْكَ سَيَّارَةٌ means:","This is a car","That is a car","Where is a car","That is a school",1,"تِلْكَ = that (fem far). سَيَّارَةٌ = a car → That is a car."),
    q("How do you say 'That is a book'?","هَذَا كِتَابٌ","ذَلِكَ كِتَابٌ","تِلْكَ كِتَابٌ","هَذِهِ كِتَابٌ",1,"ذَلِكَ كِتَابٌ = That is a book (masc)."),
    q("وَ means:","or","but","and","however",2,"وَ = and. Very common in Quran: وَاللهُ عَلِيمٌ = And Allah is All-Knowing.")
  ]
},
{
  id:"ch4",num:4,book:1,arabic:"الصِّفَة",english:"Adjectives",
  desc:"Describing nouns — big, small, new, old",color:GREEN,videoId:V1,
  slides:[
    intro("Adjectives","In Arabic, the adjective comes AFTER the noun and must match it in gender and definiteness — opposite to English!"),
    r("Adjective + Noun Rule",
      "بَيْتٌ كَبِيرٌ = a big house (both indefinite)\nاَلْبَيْتُ الكَبِيرُ = the big house (both definite)\n\nGender must match:\nمُدَرِّسٌ جَيِّدٌ (m) vs مُدَرِّسَةٌ جَيِّدَةٌ (f)",
      "The adjective mirrors the noun always.",null),
    v("Essential Adjectives",[
      w("كَبِيرٌ","kabeerun","big/great","بَيْتٌ كَبِيرٌ = a big house"),
      w("صَغِيرٌ","sagheerun","small","وَلَدٌ صَغِيرٌ = a small boy"),
      w("جَدِيدٌ","jadeedun","new","كِتَابٌ جَدِيدٌ = a new book"),
      w("قَدِيمٌ","qadeemun","old/ancient","مَسْجِدٌ قَدِيمٌ = an old mosque"),
      w("جَيِّدٌ","jayyidun","good","طَالِبٌ جَيِّدٌ = a good student"),
      w("طَوِيلٌ","taweelon","tall/long","رَجُلٌ طَوِيلٌ = a tall man"),
      w("قَصِيرٌ","qaseerun","short","بِنْتٌ قَصِيرَةٌ = a short girl"),
      w("كَثِيرٌ","katheerun","many/much","كُتُبٌ كَثِيرَةٌ = many books"),
    ])
  ],
  quiz:[
    q("Adjective comes ___ the noun in Arabic:","Before","After","Either position","At sentence end",1,"Arabic: بَيْتٌ كَبِيرٌ (a big house) — adjective AFTER noun."),
    q("بَيْتٌ كَبِيرٌ means:","a small house","a big house","the big house","a new house",1,"كَبِيرٌ = big. بَيْتٌ كَبِيرٌ = a big house."),
    q("How do you say 'a good female teacher'?","مُدَرِّسٌ جَيِّدٌ","مُدَرِّسَةٌ جَيِّدٌ","مُدَرِّسَةٌ جَيِّدَةٌ","مُدَرِّسٌ جَيِّدَةٌ",2,"Both noun and adjective must be feminine: مُدَرِّسَةٌ جَيِّدَةٌ."),
    q("اَلْكِتَابُ الجَدِيدُ means:","a new book","the old book","the new book","a big book",2,"Both have الـ → both definite → 'the new book'.")
  ]
},
{
  id:"ch5",num:5,book:1,arabic:"مَنْ وَمَا",english:"Who? & What?",
  desc:"Interrogative pronouns and question words",color:GREEN,videoId:V1,
  slides:[
    r("Two Key Questions",
      "مَا هَذَا؟ = What is this?\nمَنْ هَذَا؟ = Who is this?\n\nمَا = for things. مَنْ = for people.",
      "مَنْ appears in Quran: مَنْ يَعْمَلْ سُوءاً = Whoever does evil...",null),
    v("All Question Words",[
      w("مَنْ","man","who","مَنْ أَنْتَ؟ = Who are you?"),
      w("مَا","maa","what (thing)","مَا هَذَا؟ = What is this?"),
      w("مَاذَا","maadhaa","what (action)","مَاذَا تَفْعَلُ؟ = What are you doing?"),
      w("أَيْنَ","ayna","where","أَيْنَ البَيْتُ؟ = Where is the house?"),
      w("مَتَى","mataa","when","مَتَى الدَّرْسُ؟ = When is the lesson?"),
      w("كَيْفَ","kayfa","how","كَيْفَ حَالُكَ؟ = How are you?"),
      w("كَمْ","kam","how many","كَمْ كِتَاباً؟ = How many books?"),
      w("لِمَاذَا","limaadha","why","لِمَاذَا؟ = Why?"),
    ]),
    p("Q&A Dialogues","Read and practice:",[
      {arabic:"مَا هَذَا؟ — هَذَا كِتَابٌ",roman:"maa haadha? — haadha kitaabun",meaning:"What is this? — This is a book"},
      {arabic:"مَنْ هَذَا؟ — هَذَا مُدَرِّسٌ",roman:"man haadha? — haadha mudarrisun",meaning:"Who is this? — This is a teacher"},
      {arabic:"كَيْفَ حَالُكَ؟ — بِخَيْرٍ الحَمْدُ لِلّٰهِ",roman:"kayfa haaluk? — bikhayrin alhamdulillah",meaning:"How are you? — Fine, all praise to Allah"},
    ])
  ],
  quiz:[
    q("مَنْ is used for:","Things","Places","People","Times",2,"مَنْ = who — for people. مَا = what — for things."),
    q("مَا هَذَا؟ means:","Who is this?","What is this?","Where is this?","How is this?",1,"مَا = what, هَذَا = this → What is this?"),
    q("كَيْفَ حَالُكَ؟ means:","What is your name?","Where are you?","How are you?","Who are you?",2,"كَيْفَ = how, حَال = condition, كَ = your → How are you?"),
    q("لِمَاذَا means:","when","how many","where","why",3,"لِمَاذَا = why. لِـ = for/why + مَاذَا = what.")
  ]
},
{
  id:"ch6",num:6,book:1,arabic:"حُرُوف الجَرّ",english:"Prepositions",
  desc:"In, on, from, to, with — فِي عَلَى مِنْ إِلَى بِـ لِـ",color:GREEN,videoId:V1,
  slides:[
    intro("حُرُوف الجَرّ","Prepositions connect nouns to sentences. After a preposition, the noun takes kasra (genitive). These 6 appear constantly in the Quran."),
    v("The 6 Core Prepositions",[
      w("فِي","fee","in / inside","اَلْكِتَابُ فِي الحَقِيبَةِ = The book is in the bag"),
      w("عَلَى","alaa","on / upon","اَلْقَلَمُ عَلَى الطَّاوِلَةِ = The pen is on the table"),
      w("مِنْ","min","from","جِئْتُ مِنَ المَسْجِدِ = I came from the mosque"),
      w("إِلَى","ilaa","to / towards","ذَهَبَ إِلَى البَيْتِ = He went to the house"),
      w("بِـ","bi","with / by","كَتَبْتُ بِالقَلَمِ = I wrote with the pen"),
      w("لِـ","li","for / belonging to","هَذَا لِمُحَمَّدٍ = This is for Muhammad"),
    ]),
    r("Genitive Case",
      "After a preposition, noun ending changes to kasra:\n\nفِي البَيْتِ = in the house (kasra)\nعَلَى الطَّاوِلَةِ = on the table\nمِنَ المَسْجِدِ = from the mosque\n\nIndefinite: فِي بَيْتٍ = in a house (tanween kasra ٍ)",
      "Quran: فِي السَّمَاوَاتِ (in the heavens), عَلَى كُلِّ شَيْءٍ (over all things).",null),
    p("Quranic Phrases","Tap 🔊:",[
      {arabic:"فِي السَّمَاوَاتِ وَالأَرْضِ",roman:"fis samaawaati wal ard",meaning:"In the heavens and the earth"},
      {arabic:"إِلَى اللهِ المَصِير",roman:"ilallaahil maseer",meaning:"To Allah is the return"},
      {arabic:"بِسْمِ اللهِ",roman:"bismillah",meaning:"In the name of Allah (بِـ = in/with)"},
    ])
  ],
  quiz:[
    q("Prepositions cause which case?","Nominative (damma)","Accusative (fatha)","Genitive (kasra)","No change",2,"Prepositions cause the genitive — noun gets kasra."),
    q("فِي البَيْتِ means:","on the house","to the house","in the house","from the house",2,"فِي = in. فِي البَيْتِ = in the house."),
    q("عَلَى means:","in","from","to","on / upon",3,"عَلَى = on/upon. عَلَى الطَّاوِلَةِ = on the table."),
    q("لِـ in هَذَا لِمُحَمَّدٍ means:","from","for / belonging to","with","in",1,"لِـ = for/belonging to.")
  ]
},
{
  id:"ch7",num:7,book:1,arabic:"هُوَ وَهِيَ",english:"He & She",
  desc:"3rd person pronouns",color:GREEN,videoId:V1,
  slides:[
    fact("All Basic Pronouns",["أَنَا = I","أَنْتَ = You (masculine)","أَنْتِ = You (feminine)","هُوَ = He / It (masculine)","هِيَ = She / It (feminine)"]),
    v("Pronoun Sentences",[
      w("هُوَ مُدَرِّسٌ","huwa mudarrisun","He is a teacher","هُوَ also means 'it' for masc nouns"),
      w("هِيَ طَالِبَةٌ","hiya taalibatun","She is a student","هِيَ also means 'it' for fem nouns"),
      w("أَنَا مُسْلِمٌ","anaa muslimun","I am a Muslim","أَنَا = I"),
      w("أَنْتَ كَرِيمٌ","anta kareemun","You are generous (m)","أَنْتَ = you (m)"),
      w("أَنْتِ جَمِيلَةٌ","anti jameelatun","You are beautiful (f)","أَنْتِ = you (f)"),
    ]),
    r("قُلْ هُوَ اللهُ أَحَدٌ",
      "هُوَ in Surah Al-Ikhlas refers to Allah.\n\nقُلْ هُوَ اللهُ أَحَدٌ = Say: He is Allah, the One.\n\nهُوَ here establishes Allah\'s existence and Oneness before naming Him.",
      "In Arabic, pronouns agree with gender. Never use هُوَ for a feminine noun.",null),
  ],
  quiz:[
    q("هُوَ means:","I","You (m)","He / It (m)","She / It (f)",2,"هُوَ = He or It (masculine). هِيَ = She or It (feminine)."),
    q("In قُلْ هُوَ اللهُ أَحَدٌ, هُوَ refers to:","The Prophet","The Quran","Allah","Angels",2,"هُوَ = He (Allah) in Surah Al-Ikhlas."),
    q("أَنَا مُسْلِمٌ means:","He is a Muslim","You are a Muslim","I am a Muslim","She is a Muslim",2,"أَنَا = I. أَنَا مُسْلِمٌ = I am a Muslim."),
    q("أَنْتِ is:","You (masculine)","You (feminine)","He","She",1,"أَنْتِ = you (feminine). Kasra at the end signals feminine.")
  ]
},
{
  id:"ch8",num:8,book:1,arabic:"الإِضَافَة",english:"Possession (X of Y)",
  desc:"Genitive construction — no word for of",color:GREEN,videoId:V1,
  slides:[
    r("الإِضَافَة — X of Y",
      "English: the book OF the student\nArabic: كِتَابُ الطَّالِبِ\n\nNo word for 'of'! Just put two nouns together:\n1. First noun — loses tanween, NO الـ\n2. Second noun — genitive (kasra)",
      "The first noun in idafa can NEVER have الـ.",null),
    v("Idafa Examples",[
      w("كِتَابُ الطَّالِبِ","kitaabut taalib","the student's book","book + of-the-student"),
      w("بَابُ البَيْتِ","baabul bayt","the door of the house","door + of-the-house"),
      w("كِتَابُ اللهِ","kitaabullah","the Book of Allah","= the Quran!"),
      w("رَسُولُ اللهِ","rasoolullah","Messenger of Allah","رَسُول = messenger"),
      w("بَيْتُ اللهِ","baytullah","House of Allah","= the Kaaba!"),
      w("عَبْدُ اللهِ","abdullah","Servant of Allah","عَبْد = servant"),
      w("رَبِّ العَالَمِيْن","rabbil aalameen","Lord of all worlds","from Al-Fatiha"),
    ])
  ],
  quiz:[
    q("In إِضَافَة, the first noun:","Takes الـ","Loses tanween and has no الـ","Takes tanween","Takes kasra",1,"First noun in idafa: no tanween, no الـ. Second noun: genitive (kasra)."),
    q("كِتَابُ اللهِ means:","the student's book","the Book of Allah (Quran)","a book","the big book",1,"كِتَابُ اللهِ = the Book of Allah = the Quran!"),
    q("بَيْتُ اللهِ refers to:","The mosque","The Quran","The Kaaba","Paradise",2,"بَيْتُ اللهِ = The House of Allah = the Kaaba in Makkah."),
    q("Which is correct idafa for 'door of the house'?","البَابُ البَيْتِ","بَابُ البَيْتِ","البَابُ الكَبِيرُ","بَابٌ البَيْتُ",1,"بَابُ البَيْتِ — first noun: no الـ, no tanween; second noun: genitive.")
  ]
},
{
  id:"ch9",num:9,book:1,arabic:"الضَّمَائِر المُتَّصِلَة",english:"Attached Pronouns",
  desc:"ـهُ ـهَا ـكَ ـي — my your his her",color:GREEN,videoId:V1,
  slides:[
    intro("Attached Pronouns","These suffixes attach to nouns, prepositions, or verbs. You see them constantly in the Quran — especially in Al-Fatiha."),
    v("Suffix Pronouns",[
      w("ـِي / ـي","—i","my","كِتَابِي = my book"),
      w("ـكَ","—ka","your (m)","كِتَابُكَ = your book (m)"),
      w("ـكِ","—ki","your (f)","كِتَابُكِ = your book (f)"),
      w("ـهُ","—hu","his / its (m)","كِتَابُهُ = his book"),
      w("ـهَا","—ha","her / its (f)","كِتَابُهَا = her book"),
      w("ـنَا","—na","our","رَبَّنَا = our Lord"),
      w("ـكُمْ","—kum","your (pl m)","رَبُّكُمْ = your Lord"),
      w("ـهُمْ","—hum","their (m)","رَبُّهُمْ = their Lord"),
    ]),
    p("Quranic Examples","Tap 🔊:",[
      {arabic:"رَبَّنَا",roman:"rabbanaa",meaning:"Our Lord — ـنَا = our"},
      {arabic:"إِيَّاكَ نَعْبُدُ",roman:"iyyaaka na'bud",meaning:"You alone we worship — كَ = you"},
      {arabic:"إِنَّهُ هُوَ السَّمِيعُ العَلِيم",roman:"innahu huwas samee'ul aleem",meaning:"Indeed He is the All-Hearing, All-Knowing — ـهُ = He"},
    ])
  ],
  quiz:[
    q("كِتَابِي means:","your book","his book","my book","her book",2,"ـِي = my. كِتَاب + ي = my book."),
    q("رَبَّنَا means:","Our Lord","Your Lord","His Lord","My Lord",0,"ـنَا = our. رَبّ + نَا = Our Lord."),
    q("In كِتَابُهُ, ـهُ means:","my","your","his/its","her",2,"ـهُ = his/its (masculine). كِتَابُهُ = his book."),
    q("How do you say 'your book' (to a male)?","كِتَابِي","كِتَابُكَ","كِتَابُهُ","كِتَابُنَا",1,"ـكَ = your (masculine). كِتَابُكَ = your book.")
  ]
},
{
  id:"ch10",num:10,book:1,arabic:"أَيْنَ",english:"Where? — Locations",
  desc:"Place words and spatial vocabulary",color:GREEN,videoId:V1,
  slides:[
    v("Location Words",[
      w("فِيْ","fee","in","اَلكِتَابُ فِي الحَقِيبَةِ"),
      w("عَلَى","alaa","on","اَلقَلَمُ عَلَى الطَّاوِلَةِ"),
      w("تَحْتَ","tahta","under","اَلكَلْبُ تَحْتَ الكُرْسِيِّ"),
      w("فَوْقَ","fawqa","above","اَلطَّائِرُ فَوْقَ البَيْتِ"),
      w("أَمَامَ","amaama","in front of","اَلبَابُ أَمَامَكَ"),
      w("وَرَاءَ","waraa'a","behind","اَلحَدِيقَةُ وَرَاءَ البَيْتِ"),
      w("بَيْنَ","bayna","between","اَلمَسْجِدُ بَيْنَ البَيْتَيْنِ"),
      w("قَرِيبٌ مِنْ","qareebun min","near to","اَلمَدْرَسَةُ قَرِيبَةٌ مِنَ البَيْتِ"),
    ]),
    p("Where is it?","Ask and answer:",[
      {arabic:"أَيْنَ الكِتَابُ؟ — هُوَ عَلَى الطَّاوِلَةِ",roman:"ayna al-kitaab? — huwa alat taawila",meaning:"Where is the book? — It is on the table"},
      {arabic:"أَيْنَ المَسْجِدُ؟ — هُوَ قَرِيبٌ مِنْ هُنَا",roman:"ayna al-masjid? — huwa qareebun min hunaa",meaning:"Where is the mosque? — Near here"},
    ])
  ],
  quiz:[
    q("تَحْتَ means:","above","in front","under","behind",2,"تَحْتَ = under. Quran: مِنْ تَحْتِهِمُ الأَنْهَار (rivers beneath them)."),
    q("فَوْقَ means:","under","behind","in","above/over",3,"فَوْقَ = above/over. Quran: وَهُوَ القَاهِرُ فَوْقَ عِبَادِهِ."),
    q("بَيْنَ means:","near","far","between","around",2,"بَيْنَ = between."),
    q("أَيْنَ means:","when","why","how","where",3,"أَيْنَ = where.")
  ]
},
{
  id:"ch11",num:11,book:1,arabic:"عِنْدَ",english:"Having — I have",
  desc:"عِنْدِي كِتَابٌ = I have a book",color:GREEN,videoId:V1,
  slides:[
    r("No Verb To Have",
      "Arabic has no verb 'to have'. Use عِنْدَ + pronoun:\n\nعِنْدِي كِتَابٌ = I have a book (lit: at-me a-book)\nعِنْدَكَ قَلَمٌ = You have a pen\nعِنْدَهُ سَيَّارَةٌ = He has a car",
      "عِنْدَ اللهِ خَيْرٌ = With Allah is goodness.",null),
    v("عِنْد + Pronouns",[
      w("عِنْدِي","indee","I have","عِنْدِي وَقْتٌ = I have time"),
      w("عِنْدَكَ","indaka","you have (m)","هَلْ عِنْدَكَ قَلَمٌ؟ = Do you have a pen?"),
      w("عِنْدَهُ","indahu","he has","عِنْدَهُ سَيَّارَةٌ = He has a car"),
      w("عِنْدَهَا","indaha","she has","عِنْدَهَا وَقْتٌ = She has time"),
      w("عِنْدَنَا","indanaa","we have","عِنْدَنَا بَيْتٌ كَبِيرٌ = We have a big house"),
      w("لَيْسَ عِنْدِي","laysa indee","I don't have","لَيْسَ عِنْدِي مَال = I don't have money"),
    ])
  ],
  quiz:[
    q("How do you say 'I have a book'?","أَنَا كِتَابٌ","عِنْدِي كِتَابٌ","لَيْسَ كِتَابٌ","كِتَابُكَ",1,"عِنْدِي = I have (at-me). عِنْدِي كِتَابٌ = I have a book."),
    q("عِنْدَهُ سَيَّارَةٌ means:","I have a car","You have a car","He has a car","She has a car",2,"عِنْدَهُ = he has. سَيَّارَةٌ = a car."),
    q("How do you say 'I don't have money'?","عِنْدِي مَال","لَيْسَ عِنْدَكَ مَال","لَيْسَ عِنْدِي مَال","عِنْدَهُ مَال",2,"لَيْسَ + عِنْدِي = I don't have."),
    q("عِنْدَ اللهِ خَيْرٌ means:","With Allah there is goodness","Allah has a book","There is no goodness","I have goodness",0,"عِنْدَ اللهِ = with Allah. خَيْرٌ = goodness.")
  ]
},
{
  id:"ch12",num:12,book:1,arabic:"الأَعْدَاد ١-١٠",english:"Numbers 1–10",
  desc:"Cardinal numbers and counting",color:GREEN,videoId:V1,
  slides:[
    v("Numbers 1–10",[
      w("وَاحِد","waahid","1","same root as أَحَد (the One — Allah)"),
      w("اِثْنَان","ithnaani","2","اِثْنَانِ / اِثْنَتَانِ (feminine)"),
      w("ثَلَاثَة","thalaatha","3","ثَلَاثَةُ كُتُبٍ = 3 books"),
      w("أَرْبَعَة","arba'a","4","أَرْبَعَةُ أَيَّامٍ = 4 days"),
      w("خَمْسَة","khamsa","5","خَمْسُ صَلَوَاتٍ = 5 prayers"),
      w("سِتَّة","sitta","6","سِتَّةُ أَيَّامٍ = 6 days (of creation)"),
      w("سَبْعَة","sab'a","7","سَبْعُ سَمَاوَاتٍ = 7 heavens"),
      w("ثَمَانِيَة","thamaaniya","8","8 gates of Jannah"),
      w("تِسْعَة","tis'a","9","99 names of Allah"),
      w("عَشَرَة","ashara","10","عَشَرَةُ أَيَّامٍ = 10 days"),
    ]),
    r("Number Gender Rule",
      "Numbers 3–10 take OPPOSITE gender of the noun!\n\nثَلَاثَةُ كُتُبٍ = 3 books (كتب masc, ثلاثة fem)\nثَلَاثُ بَنَاتٍ = 3 girls (بنات fem, ثلاث masc)",
      "Numbers 1–2 agree with the noun's gender. 3–10 flip!",null)
  ],
  quiz:[
    q("خَمْسَة means:","4","5","6","7",1,"خَمْسَة = 5. خَمْسُ صَلَوَاتٍ = 5 prayers."),
    q("سَبْعُ سَمَاوَاتٍ means:","7 earths","7 heavens","7 angels","7 prophets",1,"سَبْع = 7. سَمَاوَات = heavens → 7 heavens."),
    q("Numbers 3–10 take ___ gender vs the noun:","Same","Opposite","No gender","Feminine always",1,"Numbers 3–10 flip gender: ثَلَاثَةُ كُتُبٍ (books=masc, three=fem)."),
    q("وَاحِد shares its root with:","كَبِير","أَحَد (the One — Allah)","كَثِير","رَحِيم",1,"وَاحِد and أَحَد both mean One — same root و-ح-د.")
  ]
},
{
  id:"ch13",num:13,book:1,arabic:"الفِعْل المَاضِي ١",english:"Past Tense — Part 1",
  desc:"3rd person past: he went she wrote",color:BROWN,videoId:V1,
  slides:[
    r("The Past Tense Pattern",
      "Arabic verbs are built on a 3-letter root.\n\nBase form (he did) = فَعَلَ (fa-a-la)\n\nذَهَبَ = he went (root: ذ-ه-ب)\nكَتَبَ = he wrote (root: ك-ت-ب)\nخَرَجَ = he exited (root: خ-ر-ج)\n\nFeminine (she): add تْ at the end\nذَهَبَتْ = she went",
      "The past tense = الفِعْل الماضي.",null),
    v("Common Verbs",[
      w("ذَهَبَ","dhahaba","he went","ذَهَبَتْ = she went"),
      w("كَتَبَ","kataba","he wrote","كَتَبَتْ = she wrote"),
      w("قَرَأَ","qara'a","he read","قَرَأَتْ = she read"),
      w("جَلَسَ","jalasa","he sat","جَلَسَتْ = she sat"),
      w("دَخَلَ","dakhala","he entered","دَخَلَتْ = she entered"),
      w("خَرَجَ","kharaja","he exited","خَرَجَتْ = she exited"),
      w("سَمِعَ","sami'a","he heard","سَمِعَتْ = she heard"),
      w("فَتَحَ","fataha","he opened","فَتَحَتْ = she opened"),
    ])
  ],
  quiz:[
    q("ذَهَبَ means:","he wrote","he went","he read","he sat",1,"ذَهَبَ = he went. Root: ذ-ه-ب."),
    q("How to make past tense feminine (she)?","Add ت at start","Add ة at end","Add تْ at end","No change",2,"Add تْ at end: ذَهَبَ → ذَهَبَتْ."),
    q("كَتَبَتْ means:","he wrote","she went","she wrote","he opened",2,"كَتَبَ = he wrote. كَتَبَتْ = she wrote."),
    q("The base past tense pattern is:","فُعِلَ","فَعَلَ","يَفْعَلُ","مَفْعُول",1,"فَعَلَ = basic past pattern (fa-a-la). All 3 root letters with fatha.")
  ]
},
{
  id:"ch14",num:14,book:1,arabic:"الفِعْل المَاضِي ٢",english:"Past Tense — Full Table",
  desc:"All persons conjugated",color:BROWN,videoId:V1,
  slides:[
    r("Full Past Tense Table",
      "Root: ذَهَبَ (to go)\n\nHe: ذَهَبَ\nShe: ذَهَبَتْ\nYou (m): ذَهَبْتَ\nYou (f): ذَهَبْتِ\nI: ذَهَبْتُ\nWe: ذَهَبْنَا\nThey (m): ذَهَبُوا\nThey (f): ذَهَبْنَ",
      "ذَهَبُوا has a silent alif — written but not pronounced. Called الألف الفارقة.",null),
    v("Key Forms",[
      w("ذَهَبْتُ","dhahabtu","I went","ـتُ = I"),
      w("ذَهَبْتَ","dhahabta","you went (m)","ـتَ = you (m)"),
      w("ذَهَبْتِ","dhahabti","you went (f)","ـتِ = you (f)"),
      w("ذَهَبْنَا","dhahabnaa","we went","ـنَا = we"),
      w("ذَهَبُوا","dhahaboo","they went (m)","ـوا = they (m) — silent alif after و"),
    ]),
    p("Practice","Read aloud:",[
      {arabic:"ذَهَبْتُ إِلَى المَسْجِدِ",roman:"dhahabtu ilal masjid",meaning:"I went to the mosque"},
      {arabic:"ذَهَبْنَا إِلَى مَكَّةَ",roman:"dhahabnaa ilaa makkata",meaning:"We went to Makkah"},
    ])
  ],
  quiz:[
    q("ذَهَبْتُ means:","he went","she went","I went","we went",2,"ـتُ = I. ذَهَبْتُ = I went."),
    q("ذَهَبْنَا means:","you went","they went","she went","we went",3,"ـنَا = we. ذَهَبْنَا = we went."),
    q("ذَهَبُوا has a silent alif because:","Mistake","The alif is الألف الفارقة — written not spoken","It changes sound","It makes it feminine",1,"الألف الفارقة after و in ذَهَبُوا is silent — just written."),
    q("ذَهَبْتِ (kasra) means:","he went","you went (m)","you went (f)","I went",2,"ذَهَبْتِ (kasra) = you went (feminine). ذَهَبْتَ (fatha) = you went (masculine).")
  ]
},
{
  id:"ch15",num:15,book:1,arabic:"لَيْسَ",english:"Is Not — Negation",
  desc:"Negating nouns",color:BROWN,videoId:V1,
  slides:[
    r("لَيْسَ — Is Not",
      "To negate 'is':\n\nهُوَ مُدَرِّسٌ = He is a teacher\nلَيْسَ هُوَ مُدَرِّساً = He is NOT a teacher\n\nAfter لَيْسَ, predicate takes fatha (accusative).\n\nلَيْسَ conjugated:\nلَسْتُ = I am not\nلَسْتَ = you are not (m)\nلَسْتِ = you are not (f)\nلَسْنَا = we are not",
      "لَيْسَ اللهُ ظَالِماً = Allah is not unjust.",null),
    v("لَيْسَ Forms",[
      w("لَسْتُ","lastu","I am not","لَسْتُ مُدَرِّساً = I am not a teacher"),
      w("لَسْتَ","lasta","you are not (m)","لَسْتَ كَاذِباً = You are not a liar"),
      w("لَيْسَ","laysa","he is not","لَيْسَ هُنَا = He is not here"),
      w("لَيْسَتْ","laysat","she is not","لَيْسَتْ هُنَا = She is not here"),
      w("لَسْنَا","lasnaa","we are not","لَسْنَا مِنْ هُنَا = We are not from here"),
    ])
  ],
  quiz:[
    q("لَيْسَ هَذَا كِتَاباً means:","This is a book","This is not a book","Where is the book","That is a book",1,"لَيْسَ = is not. Predicate كِتَاباً takes fatha."),
    q("After لَيْسَ, predicate takes:","Damma","Kasra","Fatha (accusative)","No change",2,"Predicate of لَيْسَ = accusative (fatha)."),
    q("لَسْتُ means:","He is not","She is not","I am not","You are not",2,"لَسْتُ = I am not."),
    q("لَيْسَ اللهُ ظَالِماً means:","Allah is just","Allah is unjust","Allah is not unjust","Allah knows",2,"لَيْسَ = is not. ظَالِماً = unjust (accusative) → Allah is not unjust.")
  ]
},
{
  id:"ch16",num:16,book:1,arabic:"جَمْع التَّكْسِير",english:"Broken Plurals",
  desc:"Irregular plurals — change internally",color:BROWN,videoId:V1,
  slides:[
    r("Broken Plurals",
      "Most Arabic plurals change internally:\n\nكِتَاب → كُتُب (books)\nرَجُل → رِجَال (men)\nبَيْت → بُيُوت (houses)\nبَاب → أَبْوَاب (doors)\n\nNo single rule — memorize each, but patterns exist.",
      "Most common patterns: فُعُل، فِعَال، أَفْعَال، فُعُول",null),
    v("Common Broken Plurals",[
      w("كِتَاب → كُتُب","kitaab → kutub","book → books","Pattern: فُعُل"),
      w("رَجُل → رِجَال","rajul → rijaal","man → men","Pattern: فِعَال"),
      w("بَيْت → بُيُوت","bayt → buyoot","house → houses","Pattern: فُعُول"),
      w("بَاب → أَبْوَاب","baab → abwaab","door → doors","Pattern: أَفْعَال"),
      w("قَلَم → أَقْلَام","qalam → aqlaam","pen → pens","Pattern: أَفْعَال"),
      w("مَسْجِد → مَسَاجِد","masjid → masaajid","mosque → mosques","Pattern: مَفَاعِل"),
      w("عَالِم → عُلَمَاء","aalim → ulama","scholar → scholars","Pattern: فُعَلَاء"),
    ])
  ],
  quiz:[
    q("Plural of كِتَاب (book)?","كِتَابَات","كُتُب","كِتَابُون","كِتَابَان",1,"كِتَاب → كُتُب."),
    q("Plural of بَاب (door)?","بُيُوت","بَابَات","أَبْوَاب","بَابَان",2,"بَاب → أَبْوَاب."),
    q("Broken plurals change:","By adding ون","By adding ات","Internally — vowels change","By adding ان",2,"Broken plurals change internally — the root stays but vowels rearrange."),
    q("عُلَمَاء is plural of:","كِتَاب","قَلَم","عَالِم (scholar)","مَسْجِد",2,"عَالِم → عُلَمَاء. الَّذِينَ يَخْشَى اللهَ مِنْ عِبَادِهِ الْعُلَمَاءُ (Quran 35:28).")
  ]
},
{
  id:"ch17",num:17,book:1,arabic:"جَمْع مُذَكَّر سَالِم",english:"Sound Masculine Plural",
  desc:"Adding ون / ين — regular masculine plural",color:BROWN,videoId:V1,
  slides:[
    r("Sound Masculine Plural",
      "Add suffix — regular pattern:\n\nNominative: ـُون (oon)\nGenitive/Accusative: ـِين (een)\n\nمُسْلِم → مُسْلِمُون (Muslims, nominative)\nمُسْلِم → مُسْلِمِين (Muslims, genitive)\n\nUsed for: groups of male people and professions.",
      "Key Quranic words: مُؤْمِنُون, مُسْلِمُون, مُتَّقُون, كَافِرُون.",null),
    v("Sound Masculine Plurals",[
      w("مُسْلِمُون","muslimoon","Muslims","قُلْ يَا أَيُّهَا الكَافِرُون"),
      w("مُؤْمِنُون","mu'minoon","believers","قَدْ أَفْلَحَ الْمُؤْمِنُون"),
      w("كَافِرُون","kaafiroon","disbelievers","قُلْ يَا أَيُّهَا الْكَافِرُون"),
      w("مُدَرِّسُون","mudarrisoon","teachers","الْمُدَرِّسُون فِي المَدْرَسَة"),
      w("صَالِحُون","saalihoon","righteous people","عِبَادِيَ الصَّالِحُون"),
    ])
  ],
  quiz:[
    q("مُسْلِمُون ending ـُون is:","Genitive","Accusative","Nominative sound masculine plural","Dual",2,"ـُون = nominative sound masculine plural."),
    q("قَدْ أَفْلَحَ الْمُؤْمِنُون means:","The Muslims are here","The believers have succeeded","Scholars have come","Teachers are present",1,"أَفْلَحَ = succeeded. الْمُؤْمِنُون = the believers → The believers have succeeded."),
    q("Genitive/accusative form ends in:","ـُون","ـَات","ـِين","ـَان",2,"Genitive/accusative: ـِين. مُسْلِمِين، مُؤْمِنِين."),
    q("How do you say 'the disbelievers'?","مُؤْمِنُون","كَافِرُون","مُسْلِمُون","مُدَرِّسُون",1,"كَافِرُون = the disbelievers — sound masculine plural of كَافِر.")
  ]
},
{
  id:"ch18",num:18,book:1,arabic:"جَمْع مُؤَنَّث سَالِم",english:"Sound Feminine Plural",
  desc:"Adding ات — regular feminine plural",color:BROWN,videoId:V1,
  slides:[
    r("Sound Feminine Plural — ـَات",
      "Add ات (remove ة first):\n\nمُسْلِمَة → مُسْلِمَات\nطَالِبَة → طَالِبَات\nصَلَاة → صَلَوَات\nآيَة → آيَات\n\nAlso for modern/foreign words:\nتِلِفُون → تِلِفُونَات",
      "In genitive/accusative: ـَات changes to ـَاتِ (kasra added).",null),
    v("Sound Feminine Plurals",[
      w("مُسْلِمَات","muslimaat","Muslim women","كُنَّ مُسْلِمَات"),
      w("مُؤْمِنَات","mu'minaat","believing women","وَالْمُؤْمِنَاتُ أَوْلِيَاءُ بَعْضٍ"),
      w("صَلَوَات","salawaat","prayers","خَمْسُ صَلَوَاتٍ = 5 prayers"),
      w("آيَات","aayaat","verses / signs","آيَاتُ اللهِ = Allah's signs"),
      w("كَلِمَات","kalimaat","words","كَلِمَاتُ اللهِ = Allah's words"),
    ])
  ],
  quiz:[
    q("آيَات is plural of:","صَلَاة","آيَة (verse/sign)","كَلِمَة","مُسْلِمَة",1,"آيَة → آيَات. آيَاتُ اللهِ = signs/verses of Allah."),
    q("Sound feminine plural is formed by:","Adding ـُون","Adding ـِين","Adding ـَات","Adding ـَان",2,"Add ـَات: طَالِبَة → طَالِبَات."),
    q("صَلَوَات means:","one prayer","two prayers","prayers (plural)","the prayer",2,"صَلَوَات = prayers. خَمْسُ صَلَوَاتٍ = 5 prayers."),
    q("كَلِمَاتُ اللهِ means:","Signs of Allah","Verses of Allah","Words of Allah","Names of Allah",2,"كَلِمَات = words. كَلِمَاتُ اللهِ = Words of Allah.")
  ]
},
{
  id:"ch19",num:19,book:1,arabic:"الْمُثَنَّى",english:"Dual",
  desc:"Two of anything",color:BROWN,videoId:V1,
  slides:[
    r("The Dual",
      "Add suffix to noun:\n\nNominative: ـَان\nGenitive/Accusative: ـَيْن\n\nكِتَاب → كِتَابَان (two books, nominative)\nكِتَاب → كِتَابَيْن (two books, gen/acc)\n\nFeminine (remove ة, add تَان):\nمَدْرَسَة → مَدْرَسَتَان",
      "Quran: رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْن = Lord of the two Easts and two Wests.",null),
    v("Dual Examples",[
      w("رَجُلَان","rajulaan","two men","هَذَانِ رَجُلَان"),
      w("كِتَابَان","kitaabaan","two books","عِنْدِي كِتَابَان"),
      w("الْمَشْرِقَيْن","al-mashriqayn","the two Easts","رَبُّ الْمَشْرِقَيْن"),
      w("يَدَان","yadaan","two hands","تَبَّتْ يَدَا أَبِي لَهَب"),
      w("عَيْنَان","aynaani","two eyes","الإِنْسَانُ لَهُ عَيْنَان"),
    ])
  ],
  quiz:[
    q("Two books (nominative)?","كُتُب","كِتَابَات","كِتَابَان","كِتَابَيْن",2,"Nominative dual: كِتَابَان."),
    q("تَبَّتْ يَدَا أَبِي لَهَب — يَدَا is:","Singular","Plural","Dual of يَد (hand)","Broken plural",2,"يَدَا = dual of يَد (Surah Al-Masad — perish the two hands of Abu Lahab)."),
    q("For feminine noun ة, dual is:","Keep ة add ان","Remove ة add تَان","Add ان to ة","Add يْن to ة",1,"Remove ة then add تَان: مَدْرَسَة → مَدْرَسَتَان."),
    q("رَبُّ الْمَشْرِقَيْنِ means:","Lord of the East","Lord of two Easts","Lord of all directions","Lord of West",1,"الْمَشْرِقَيْن = dual of الْمَشْرِق → Lord of the two Easts.")
  ]
},
{
  id:"ch20",num:20,book:1,arabic:"الْفِعْل الْمُضَارِع",english:"Present Tense",
  desc:"يَفْعَلُ — he does she does I do",color:BROWN,videoId:V1,
  slides:[
    r("Present Tense — يَفْعَلُ",
      "Uses a prefix (and sometimes suffix):\n\nيَكْتُبُ = he writes (يـ prefix)\nتَكْتُبُ = she writes (تـ prefix)\nأَكْتُبُ = I write (أـ prefix)\nنَكْتُبُ = we write (نـ prefix)\n\nPresent tense = الفِعْل المُضَارِع.",
      "Present tense expresses both present and future.",null),
    v("Common Present Verbs",[
      w("يَكْتُبُ","yaktabu","he writes","أَكْتُبُ = I write"),
      w("يَقْرَأُ","yaqra'u","he reads","تَقْرَأُ = she reads"),
      w("يَذْهَبُ","yadhabu","he goes","نَذْهَبُ = we go"),
      w("يَقُولُ","yaqoolu","he says","يَقُولُ اللهُ = Allah says"),
      w("يَعْلَمُ","ya'lamu","he knows","اللهُ يَعْلَمُ = Allah knows"),
      w("يُرِيدُ","yureedu","he wants","يُرِيدُ اللهُ بِكُمُ الْيُسْر"),
    ]),
    p("Present Tense in Quran","Tap 🔊:",[
      {arabic:"اللهُ يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالأَرْضِ",roman:"allahu ya'lamu",meaning:"Allah knows what is in the heavens and the earth"},
      {arabic:"يُرِيدُ اللهُ بِكُمُ الْيُسْرَ",roman:"yureedul lahu bikumul yusr",meaning:"Allah wants ease for you (Al-Baqarah)"},
    ])
  ],
  quiz:[
    q("يَكْتُبُ means:","he wrote","he writes","I write","she writes",1,"يَكْتُبُ = he writes (present). يـ prefix = he."),
    q("Prefix أـ means:","He","She","I","We",2,"أـ = I. أَكْتُبُ = I write."),
    q("نَذْهَبُ means:","he goes","she goes","I go","we go",3,"نـ = we. نَذْهَبُ = we go."),
    q("اللهُ يَعْلَمُ means:","Allah knew","Allah will know","Allah knows","Allah does not know",2,"يَعْلَمُ = present. اللهُ يَعْلَمُ = Allah knows.")
  ]
},
{
  id:"ch21",num:21,book:1,arabic:"لَا النَّاهِيَة",english:"Prohibition — Don't!",
  desc:"Forbidding actions",color:BROWN,videoId:V1,
  slides:[
    r("لَا النَّاهِيَة",
      "لَا + jussive verb = Don't do X!\n\nلَا تَكْذِبْ = Don't lie!\nلَا تَذْهَبْ = Don't go!\nلَا تُشْرِكْ = Don't commit shirk!\nلَا تَحْزَنْ = Don't grieve!\nلَا تَقْنَطُوا = Don't despair!",
      "لَا تَقْنَطُوا مِنْ رَحْمَةِ اللهِ — Do not despair of Allah's mercy! (Az-Zumar 39:53) One of the most comforting Quranic verses.",null),
    v("Prohibitions from Quran",[
      w("لَا تُشْرِكْ","laa tushrik","Do not commit shirk","وَإِذْ قَالَ لُقْمَانُ لَا تُشْرِكْ بِاللهِ"),
      w("لَا تَحْزَنْ","laa tahzan","Do not grieve","لَا تَحْزَنْ إِنَّ اللهَ مَعَنَا (Cave of Thawr)"),
      w("لَا تَقْنَطُوا","laa taqnatoo","Do not despair","مِنْ رَحْمَةِ اللهِ = of Allah's mercy"),
      w("لَا تَكْذِبْ","laa takdhib","Do not lie","From كَذَبَ = to lie"),
      w("لَا تَيْأَسُوا","laa tay'asoo","Do not lose hope","وَلَا تَيْأَسُوا مِنْ رَوْحِ اللهِ"),
    ])
  ],
  quiz:[
    q("لَا تَحْزَنْ means:","Don't go","Don't lie","Don't grieve","Don't despair",2,"Don't grieve! Said by Prophet ﷺ to Abu Bakr in the cave."),
    q("لَا النَّاهِيَة is used for:","Negating a noun","Giving permission","Prohibiting an action","Asking a question",2,"لَا النَّاهِيَة = prohibitory لَا — forbids actions."),
    q("لَا تُشْرِكْ بِاللهِ means:","Don't pray","Don't associate partners with Allah","Don't forget Allah","Don't fear Allah",1,"تُشْرِكْ = commit shirk. لَا تُشْرِكْ = Don't commit shirk."),
    q("The verb after لَا النَّاهِيَة uses:","Damma ending","Fatha ending","Jussive (no final vowel)","Kasra",2,"Jussive (مَجْزُوم) — final vowel removed: تَكْذِبُ → تَكْذِبْ.")
  ]
},
{
  id:"ch22",num:22,book:1,arabic:"النَّعْت",english:"Adjective Agreement",
  desc:"4-way matching of adjectives",color:BROWN,videoId:V1,
  slides:[
    r("4-Way Agreement",
      "Arabic adjectives match noun in 4 ways:\n1. GENDER (m/f)\n2. NUMBER (singular/dual/plural)\n3. DEFINITENESS (with/without الـ)\n4. CASE (nominative/accusative/genitive)\n\nكِتَابٌ كَبِيرٌ = a big book\nالكِتَابُ الكَبِيرُ = the big book\nكِتَابٍ كَبِيرٍ = of a big book",
      "For non-human plurals use FEMININE SINGULAR: كُتُبٌ كَبِيرَةٌ = big books.",null),
    v("Agreement Examples",[
      w("وَلَدٌ صَغِيرٌ","waladun sagheer","a small boy","m indef + m indef"),
      w("بِنْتٌ صَغِيرَةٌ","bintun sagheera","a small girl","f indef + f indef"),
      w("اَلْوَلَدُ الصَّغِيرُ","al-waladus sagheer","the small boy","m def + m def"),
      w("كُتُبٌ كَبِيرَةٌ","kutubun kabeera","big books","inanimate plural → fem singular adj"),
      w("رِجَالٌ كِرَامٌ","rijaalun kiraam","noble men","human plural → plural adj"),
    ])
  ],
  quiz:[
    q("For non-human plural nouns, adjective is:","Masculine plural","Feminine plural","Feminine singular","Masculine singular",2,"Non-human plurals take FEMININE SINGULAR: كُتُبٌ كَبِيرَةٌ."),
    q("اَلْبَيْتُ الكَبِيرُ means:","a big house","the big house","a small house","the small house",1,"Both have الـ = both definite → the big house."),
    q("A small girl?","بِنْتٌ صَغِيرٌ","وَلَدٌ صَغِيرَةٌ","بِنْتٌ صَغِيرَةٌ","الْبِنْتُ الصَّغِيرُ",2,"بِنْت = feminine → adjective must be feminine: صَغِيرَة."),
    q("Adjectives agree with noun in:","Gender only","Gender and number only","Gender, number, definiteness, case","Number only",2,"Complete 4-way agreement.")
  ]
},
{
  id:"ch23",num:23,book:1,arabic:"مُرَاجَعَة ١",english:"Book 1 Review",
  desc:"Consolidate all Book 1 grammar",color:BROWN,videoId:V1,
  slides:[
    fact("Book 1 Complete!",[
      "Demonstratives: هَذَا هَذِهِ ذَلِكَ تِلْكَ",
      "Adjective agreement (4 ways)",
      "Question words: مَنْ مَا أَيْنَ كَيْفَ مَتَى",
      "Prepositions: فِي عَلَى مِنْ إِلَى بِـ لِـ",
      "All pronouns (separate + attached)",
      "الإِضَافَة (genitive possession)",
      "Past tense: full conjugation table",
      "Present tense: يَفْعَلُ pattern",
      "Plurals: broken + sound m + sound f + dual",
      "لَيْسَ (negation) + لَا النَّاهِيَة (prohibition)"
    ]),
    p("Full Passage — Read and Understand","Apply all Book 1 grammar:",[
      {arabic:"ذَهَبَ الطَّالِبُ إِلَى الْمَدْرَسَةِ وَجَلَسَ فِي الْفَصْلِ",roman:"",meaning:"The student went to the school and sat in the classroom"},
      {arabic:"كَتَبَ الدَّرْسَ بِقَلَمٍ جَدِيدٍ",roman:"",meaning:"He wrote the lesson with a new pen"},
      {arabic:"اَلْمُدَرِّسُ رَجُلٌ كَرِيمٌ وَعِنْدَهُ كُتُبٌ كَثِيرَةٌ",roman:"",meaning:"The teacher is a generous man and has many books"},
    ])
  ],
  quiz:[
    q("ذَهَبَ الطَّالِبُ means:","The teacher went","The student went","The student comes","The teacher sat",1,"ذَهَبَ = went, الطَّالِب = the student."),
    q("بِقَلَمٍ جَدِيدٍ means:","with a new pen","in a new book","from a new school","on a new desk",0,"بِـ = with, قَلَمٍ = pen (genitive), جَدِيدٍ = new."),
    q("عِنْدَهُ كُتُبٌ كَثِيرَةٌ means:","He has many pens","He has many books","She has books","We have books",1,"عِنْدَهُ = he has, كُتُب = books, كَثِيرَة = many."),
    q("You completed:","Book 2","Book 3","Book 1","Half of Book 2",2,"مَاشَاءَ الله! Book 1 complete!")
  ]
}
];

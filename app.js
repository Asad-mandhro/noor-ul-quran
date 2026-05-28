"use strict";
var useState = React.useState;
var useEffect = React.useEffect;
var useCallback = React.useCallback;
var useRef = React.useRef;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// ─── CHAPTER 1 DATA — Full teaching content ────────────────────────
var CHAPTER_1 = [{
  id: "c1-l0",
  title: "Why Learn Arabic?",
  subtitle: "The language of the Quran",
  type: "intro",
  xp: 15,
  slides: [{
    type: "welcome",
    heading: "مرحباً بك",
    subheading: "Welcome to Arabic",
    body: "Arabic is the language Allah chose to reveal the Quran. Every word you learn brings you closer to understanding His words directly — without translation."
  }, {
    type: "fact",
    heading: "Did you know?",
    points: ["The Quran uses only about 2,000 unique root words", "Learning just 300 words lets you understand 70% of the Quran", "Arabic is written RIGHT to LEFT", "Every Arabic word comes from a 3-letter root"]
  }, {
    type: "alphabet_overview",
    heading: "28 Letters",
    body: "Arabic has 28 letters. Unlike English, most letters change shape depending on where they appear in a word — beginning, middle, or end.",
    letters: "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي"
  }, {
    type: "tip",
    heading: "How this app works",
    body: "Each lesson teaches you something new first. Then a short quiz tests only what you just learned. You cannot skip — each lesson unlocks the next.",
    tip: "Aim for one lesson per day. Consistency beats speed."
  }],
  quiz: [{
    q: "How many letters are in the Arabic alphabet?",
    opts: ["24", "26", "28", "30"],
    ans: 2,
    exp: "Arabic has exactly 28 letters."
  }, {
    q: "Arabic is written in which direction?",
    opts: ["Left to right", "Right to left", "Top to bottom", "Any direction"],
    ans: 1,
    exp: "Arabic is always written right to left."
  }, {
    q: "What language is the Quran written in?",
    opts: ["Urdu", "Persian", "Arabic", "Hebrew"],
    ans: 2,
    exp: "Allah revealed the Quran in Arabic."
  }, {
    q: "Most Arabic words come from a root of how many letters?",
    opts: ["2", "3", "4", "5"],
    ans: 1,
    exp: "Almost all Arabic words come from a 3-letter root."
  }]
}, {
  id: "c1-l1",
  title: "Letters: أ ب ت ث",
  subtitle: "Your first 4 Arabic letters",
  type: "letters",
  xp: 25,
  slides: [{
    type: "letter_intro",
    heading: "Group 1 — 4 Letters",
    body: "We'll learn 4 letters today. For each one, study its shape, its name, its sound, and a real word from Islamic vocabulary."
  }, {
    type: "letter",
    arabic: "أ",
    name: "Alif",
    sound: "'a' or silent — like the letter A",
    shape: "A single vertical stroke — the simplest letter",
    word: "أَحَد",
    wordRoman: "Ahad",
    wordMeaning: "One (referring to Allah)",
    context: "This word appears in Surah Al-Ikhlas: قُلْ هُوَ اللهُ أَحَد — Say: He is Allah, the One."
  }, {
    type: "letter",
    arabic: "ب",
    name: "Ba",
    sound: "'b' — exactly like English B",
    shape: "A bowl shape with ONE dot BELOW",
    word: "بِسْمِ",
    wordRoman: "Bismi",
    wordMeaning: "In the name of",
    context: "بِسْمِ اللهِ — In the name of Allah. You say this before doing anything."
  }, {
    type: "letter",
    arabic: "ت",
    name: "Ta",
    sound: "'t' — exactly like English T",
    shape: "Same bowl as Ba but TWO dots ABOVE",
    word: "تَوْبَة",
    wordRoman: "Tawbah",
    wordMeaning: "Repentance",
    context: "اَلتَّوَّابُ — Al-Tawwaab is one of Allah's names: The Ever-Accepting of Repentance."
  }, {
    type: "letter",
    arabic: "ث",
    name: "Tha",
    sound: "'th' — like 'th' in 'three'",
    shape: "Same bowl as Ba/Ta but THREE dots ABOVE",
    word: "ثَوَاب",
    wordRoman: "Thawaab",
    wordMeaning: "Reward (from Allah)",
    context: "When you do a good deed, you earn ثَوَاب — reward from Allah."
  }, {
    type: "pattern",
    heading: "Notice the pattern!",
    body: "Ba, Ta, and Tha are the SAME shape — only the dots change:",
    items: [{
      arabic: "ب",
      label: "1 dot below = Ba (ب)"
    }, {
      arabic: "ت",
      label: "2 dots above = Ta (ت)"
    }, {
      arabic: "ث",
      label: "3 dots above = Tha (ث)"
    }],
    tip: "Dots are everything in Arabic. One wrong dot changes the entire word."
  }],
  quiz: [{
    q: "Which letter has ONE dot BELOW?",
    opts: ["أ (Alif)", "ب (Ba)", "ت (Ta)", "ث (Tha)"],
    ans: 1,
    exp: "Ba (ب) has one dot below. Ta has 2 dots above, Tha has 3 dots above."
  }, {
    q: "The word أَحَد (Ahad) means:",
    opts: ["Praise", "One", "Lord", "Merciful"],
    ans: 1,
    exp: "أَحَد means 'One' — referring to the Oneness of Allah in Surah Al-Ikhlas."
  }, {
    q: "Which letter makes the 'th' sound (like in 'three')?",
    opts: ["أ", "ب", "ت", "ث"],
    ans: 3,
    exp: "Tha (ث) makes the 'th' sound. It has 3 dots above."
  }, {
    q: "بِسْمِ اللهِ means:",
    opts: ["In the name of Allah", "Praise be to Allah", "Allah is One", "Allah is Great"],
    ans: 0,
    exp: "بِسْمِ اللهِ means 'In the name of Allah' — said before any action."
  }, {
    q: "Alif (أ) looks like:",
    opts: ["A bowl with dots", "A vertical stroke", "A curved hook", "Two lines"],
    ans: 1,
    exp: "Alif (أ) is the simplest letter — just a single vertical stroke."
  }]
}, {
  id: "c1-l2",
  title: "Letters: ج ح خ",
  subtitle: "Three throat sounds",
  type: "letters",
  xp: 25,
  slides: [{
    type: "letter_intro",
    heading: "Group 2 — 3 Letters",
    body: "These 3 letters share the same base shape but different dots. Pay special attention to ح and خ — these sounds don't exist in English."
  }, {
    type: "letter",
    arabic: "ج",
    name: "Jim",
    sound: "'j' — like English J or G in 'gem'",
    shape: "A curved shape with ONE dot INSIDE/BELOW",
    word: "جَنَّة",
    wordRoman: "Jannah",
    wordMeaning: "Paradise / Heaven",
    context: "جَنَّة is the Arabic word for Paradise — what every Muslim strives to reach."
  }, {
    type: "letter",
    arabic: "ح",
    name: "Ha (deep)",
    sound: "A strong 'h' from deep in your throat — like breathing on cold glass",
    shape: "Same curved shape as Jim but NO dot",
    word: "حَمْد",
    wordRoman: "Hamd",
    wordMeaning: "Praise",
    context: "اَلْحَمْدُ لِلّٰهِ — Alhamdulillah: All praise belongs to Allah. You say this countless times daily."
  }, {
    type: "letter",
    arabic: "خ",
    name: "Kha",
    sound: "A rasping 'kh' from the back of throat — like the Scottish 'loch'",
    shape: "Same curved shape with ONE dot ABOVE",
    word: "خَيْر",
    wordRoman: "Khayr",
    wordMeaning: "Goodness / Blessing",
    context: "اَللّٰهُ خَيْر — Allah is the best. Khayr means goodness and blessing."
  }, {
    type: "pattern",
    heading: "Same shape — 3 different letters",
    body: "Jim, Ha, and Kha share one base shape. The dot tells you which letter it is:",
    items: [{
      arabic: "ج",
      label: "1 dot inside = Jim (ج)"
    }, {
      arabic: "ح",
      label: "No dot = Ha (ح)"
    }, {
      arabic: "خ",
      label: "1 dot above = Kha (خ)"
    }],
    tip: "ح without a dot is the deeper, breathy H. Don't confuse it with ه (Ha) which comes later and is a lighter sound."
  }],
  quiz: [{
    q: "Which letter has NO dot?",
    opts: ["ج (Jim)", "ح (Ha)", "خ (Kha)", "ب (Ba)"],
    ans: 1,
    exp: "Ha (ح) has no dot. Jim has a dot inside, Kha has a dot above."
  }, {
    q: "جَنَّة (Jannah) means:",
    opts: ["Hellfire", "Prayer", "Paradise", "Fasting"],
    ans: 2,
    exp: "جَنَّة means Paradise — the eternal reward for believers."
  }, {
    q: "اَلْحَمْد means:",
    opts: ["One", "Praise", "Mercy", "Guidance"],
    ans: 1,
    exp: "الحمد means 'The Praise' — as in Alhamdulillah: All praise belongs to Allah."
  }, {
    q: "Kha (خ) sounds like:",
    opts: ["J in 'jam'", "H in 'hot'", "Kh in 'loch' (Scottish)", "Ch in 'cheese'"],
    ans: 2,
    exp: "Kha (خ) is a rasping throat sound like the Scottish 'loch' or clearing your throat gently."
  }, {
    q: "خَيْر means:",
    opts: ["Repentance", "Reward", "Goodness/Blessing", "Knowledge"],
    ans: 2,
    exp: "خَيْر means goodness or blessing. A common Islamic word."
  }]
}, {
  id: "c1-l3",
  title: "Letters: د ذ ر ز",
  subtitle: "Four familiar sounds",
  type: "letters",
  xp: 25,
  slides: [{
    type: "letter_intro",
    heading: "Group 3 — 4 Letters",
    body: "Good news — these 4 letters have sounds you already know from English: D, Dh, R, and Z. But notice: Dal and Dhal share a shape. Ra and Zay share a shape."
  }, {
    type: "letter",
    arabic: "د",
    name: "Dal",
    sound: "'d' — exactly like English D",
    shape: "A small angular wedge or boomerang shape — NO dot",
    word: "دِيْن",
    wordRoman: "Deen",
    wordMeaning: "Religion / Way of life",
    context: "اَلْإِسْلَامُ دِيْن — Islam is a Deen (a complete way of life, not just rituals)."
  }, {
    type: "letter",
    arabic: "ذ",
    name: "Dhal",
    sound: "'dh' — like 'th' in 'the' or 'this' (voiced)",
    shape: "Same wedge as Dal but ONE dot ABOVE",
    word: "ذِكْر",
    wordRoman: "Dhikr",
    wordMeaning: "Remembrance of Allah",
    context: "اَلا بِذِكْرِ اللهِ تَطْمَئِنُّ الْقُلُوْب — Verily in the remembrance of Allah do hearts find rest. (Quran 13:28)"
  }, {
    type: "letter",
    arabic: "ر",
    name: "Ra",
    sound: "'r' — a slightly rolled R, like Spanish R",
    shape: "A small curved tail swooping to the right — NO dot",
    word: "رَحْمَة",
    wordRoman: "Rahmah",
    wordMeaning: "Mercy",
    context: "اَلرَّحْمٰنُ الرَّحِيْم — Ar-Rahman Ar-Raheem: The Most Gracious, The Most Merciful. (Surah Al-Fatiha)"
  }, {
    type: "letter",
    arabic: "ز",
    name: "Zay",
    sound: "'z' — exactly like English Z",
    shape: "Same curved tail as Ra but ONE dot ABOVE",
    word: "زَكَاة",
    wordRoman: "Zakah",
    wordMeaning: "Obligatory charity",
    context: "زَكَاة is one of the 5 pillars of Islam — giving 2.5% of wealth to those in need."
  }],
  quiz: [{
    q: "دِيْن (Deen) means:",
    opts: ["Prayer", "Religion/Way of life", "Fasting", "Pilgrimage"],
    ans: 1,
    exp: "دِيْن means religion or way of life. Islam is described as a complete Deen."
  }, {
    q: "Which letter is Dal (د)?",
    opts: ["A curved tail with no dot", "A wedge with a dot above", "A wedge with no dot", "A bowl with dots"],
    ans: 2,
    exp: "Dal (د) is a small wedge/boomerang shape with no dot. Dhal (ذ) has a dot above."
  }, {
    q: "ذِكْر (Dhikr) means:",
    opts: ["Charity", "Remembrance of Allah", "Mercy", "Guidance"],
    ans: 1,
    exp: "ذِكْر is remembrance of Allah — through saying SubhanAllah, Alhamdulillah, Allahu Akbar etc."
  }, {
    q: "رَحْمَة (Rahmah) means:",
    opts: ["Praise", "One", "Mercy", "Paradise"],
    ans: 2,
    exp: "رَحْمَة means mercy. Allah's names Ar-Rahman and Ar-Raheem both come from this root."
  }, {
    q: "Zay (ز) and Ra (ر) have the same base shape. What distinguishes Zay?",
    opts: ["It has a dot below", "It has a dot above", "It has two dots", "It has no dot"],
    ans: 1,
    exp: "Zay (ز) has one dot above. Ra (ر) has no dot."
  }]
}, {
  id: "c1-l4",
  title: "Letters: س ش ص ض",
  subtitle: "Teeth, tongue, and emphasis",
  type: "letters",
  xp: 30,
  slides: [{
    type: "letter_intro",
    heading: "Group 4 — 4 Letters",
    body: "This group introduces something important: EMPHATIC letters. Sin sounds like S in English. Sad looks different and sounds deeper — your tongue presses the roof of your mouth. This matters greatly for Tajweed."
  }, {
    type: "letter",
    arabic: "س",
    name: "Sin",
    sound: "'s' — like English S in 'sun'",
    shape: "Three small bumps/teeth followed by a tail",
    word: "سُبْحَان",
    wordRoman: "Subhaan",
    wordMeaning: "Glory be to / Far above any imperfection",
    context: "سُبْحَانَ اللهِ — SubhanAllah: Glory be to Allah. Said in amazement or appreciation."
  }, {
    type: "letter",
    arabic: "ش",
    name: "Shin",
    sound: "'sh' — like English SH in 'ship'",
    shape: "Same three bumps as Sin but THREE dots ABOVE",
    word: "شُكْر",
    wordRoman: "Shukr",
    wordMeaning: "Gratitude / Thankfulness",
    context: "اَلْحَمْدُ لِلّٰهِ is a form of شُكْر — expressing gratitude to Allah."
  }, {
    type: "letter",
    arabic: "ص",
    name: "Sad (emphatic)",
    sound: "A heavy 'S' — tongue pressed to roof of mouth, lips rounded",
    shape: "An oval loop with a small extension and NO dot",
    word: "صَلَاة",
    wordRoman: "Salah",
    wordMeaning: "Prayer",
    context: "صَلَاة is the 2nd pillar of Islam — the 5 daily prayers. The Quran says: أَقِيمُوا الصَّلَاة — Establish the prayer."
  }, {
    type: "letter",
    arabic: "ض",
    name: "Dad (emphatic)",
    sound: "A heavy emphatic 'D' — Arabic is sometimes called 'the language of Dad'",
    shape: "Same oval loop as Sad but ONE dot ABOVE",
    word: "ضُحَى",
    wordRoman: "Duhaa",
    wordMeaning: "The morning light / Forenoon",
    context: "وَالضُّحَى — Wad-Duhaa: By the morning light. Allah swears by it in Surah Ad-Duhaa (Chapter 93)."
  }, {
    type: "rule",
    heading: "Emphatic vs Normal",
    body: "Arabic has 4 'emphatic' letters: ص ض ط ظ. When you say them, your voice becomes heavier and deeper. This affects ALL surrounding vowels in the word — making them sound deeper too. This is crucial in Tajweed.",
    tip: "Practice: Say 'seen' then 'saad'. Feel how your throat changes? That depth is the emphatic sound."
  }],
  quiz: [{
    q: "سُبْحَان (Subhaan) means:",
    opts: ["Praise", "One", "Glory be to / Far above imperfection", "Mercy"],
    ans: 2,
    exp: "سُبْحَانَ اللهِ means 'Glory be to Allah' — expressing that Allah is above all imperfections."
  }, {
    q: "Which letter is Shin (ش)?",
    opts: ["Three bumps, no dots", "Three bumps, three dots above", "Oval loop, no dot", "Oval loop, one dot"],
    ans: 1,
    exp: "Shin (ش) is the same as Sin (س) but with 3 dots above."
  }, {
    q: "صَلَاة (Salah) means:",
    opts: ["Fasting", "Charity", "Pilgrimage", "Prayer"],
    ans: 3,
    exp: "صَلَاة is prayer — the 5 daily prayers, the 2nd pillar of Islam."
  }, {
    q: "Arabic is sometimes called 'the language of' which letter?",
    opts: ["ص Sad", "ض Dad", "س Sin", "ش Shin"],
    ans: 1,
    exp: "Arabic is called 'Lughat al-Daad' (language of Dad ض) because this emphatic letter exists in no other language."
  }, {
    q: "What makes ص and ض 'emphatic' letters?",
    opts: ["They are silent", "They deepen the sound — tongue presses roof of mouth", "They have dots", "They are only used in the Quran"],
    ans: 1,
    exp: "Emphatic letters are pronounced with the tongue pressing the roof of the mouth, creating a heavier, deeper sound."
  }]
}, {
  id: "c1-l5",
  title: "Letters: ط ظ ع غ",
  subtitle: "The powerful letters",
  type: "letters",
  xp: 30,
  slides: [{
    type: "letter_intro",
    heading: "Group 5 — 4 Letters",
    body: "This group has two more emphatic letters (ط ظ) and two letters unique to Arabic that don't exist in English at all: Ayn (ع) and Ghayn (غ). Pay special attention — these are key to proper recitation."
  }, {
    type: "letter",
    arabic: "ط",
    name: "Ta (emphatic)",
    sound: "A heavy 'T' — like T but tongue pushes roof of mouth firmly",
    shape: "A loop with a vertical stroke rising from it — NO dot",
    word: "طَرِيْق",
    wordRoman: "Tareeq",
    wordMeaning: "Path / Way",
    context: "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْم — Guide us to the straight path. (Surah Al-Fatiha, verse 6)"
  }, {
    type: "letter",
    arabic: "ظ",
    name: "Dha (emphatic)",
    sound: "A heavy 'Dh' — like 'th' in 'the' but deeper and emphatic",
    shape: "Same loop as Ta with a dot ABOVE the vertical stroke",
    word: "ظُلْم",
    wordRoman: "Dhulm",
    wordMeaning: "Injustice / Oppression",
    context: "اَللّٰهُمَّ لَا تَجْعَلْ ظُلْماً — O Allah, do not inflict injustice. Dhulm is wrong deeply condemned in Islam."
  }, {
    type: "letter",
    arabic: "ع",
    name: "Ayn",
    sound: "A deep squeezed sound from the throat — no English equivalent. Constrict your throat.",
    shape: "Like a small eye or fish shape — NO dot",
    word: "عِلْم",
    wordRoman: "'Ilm",
    wordMeaning: "Knowledge",
    context: "طَلَبُ الْعِلْمِ فَرِيْضَة — Seeking knowledge is an obligation. (Hadith) علم is one of Islam's highest values."
  }, {
    type: "letter",
    arabic: "غ",
    name: "Ghayn",
    sound: "A gargling sound from the back of the throat — like a French R or gargling water",
    shape: "Same eye shape as Ayn but ONE dot ABOVE",
    word: "غَيْب",
    wordRoman: "Ghayb",
    wordMeaning: "The Unseen",
    context: "عَالِمُ الْغَيْب — Aalim ul-Ghayb: The Knower of the Unseen. Only Allah knows the غَيْب."
  }, {
    type: "rule",
    heading: "Ayn (ع) — The most important unique letter",
    body: "Ayn has no equivalent in any other language. To produce it: open your mouth, constrict the middle of your throat, and push sound through. You'll feel a slight pressure. This letter appears everywhere in the Quran — including in اَللهُ عَلِيم (Allah is All-Knowing).",
    tip: "Practice Ayn by saying 'aaah' and slowly squeezing your throat mid-sound. That constriction IS the Ayn sound."
  }],
  quiz: [{
    q: "عِلْم ('Ilm) means:",
    opts: ["Prayer", "Knowledge", "Patience", "Paradise"],
    ans: 1,
    exp: "عِلْم means knowledge. Seeking knowledge is obligatory in Islam."
  }, {
    q: "Which letter requires constricting the throat — unique to Arabic?",
    opts: ["ط (Ta)", "ظ (Dha)", "ع (Ayn)", "غ (Ghayn)"],
    ans: 2,
    exp: "Ayn (ع) is produced by constricting the throat — it has no equivalent in English or most other languages."
  }, {
    q: "غَيْب (Ghayb) means:",
    opts: ["The Prayer", "The Quran", "The Unseen", "The Guidance"],
    ans: 2,
    exp: "الغَيْب is the Unseen — matters beyond human perception that only Allah knows."
  }, {
    q: "Tha (ط) and Dha (ظ) are both:",
    opts: ["Throat letters", "Emphatic letters", "Lip letters", "Silent letters"],
    ans: 1,
    exp: "Ta (ط) and Dha (ظ) are emphatic letters — pronounced with the tongue pressing firmly on the roof of the mouth."
  }, {
    q: "Ghayn (غ) sounds like:",
    opts: ["Hard G in 'go'", "Gargling from the back of throat", "Gh in 'ghost' (silent)", "J in 'job'"],
    ans: 1,
    exp: "Ghayn (غ) is a gargling/rasping sound from the back of the throat — like a French R or very gentle gargling."
  }]
}, {
  id: "c1-l6",
  title: "Letters: ف ق ك ل",
  subtitle: "Familiar and unfamiliar",
  type: "letters",
  xp: 25,
  slides: [{
    type: "letter_intro",
    heading: "Group 6 — 4 Letters",
    body: "Fa is straightforward like F. Qaf is a deep Q from the very back of your throat. Kaf is like K. Lam is L — but when Lam and Alif combine, they make a special shape you'll see constantly in the Quran."
  }, {
    type: "letter",
    arabic: "ف",
    name: "Fa",
    sound: "'f' — exactly like English F",
    shape: "A curved loop with ONE dot ABOVE",
    word: "فَلَاح",
    wordRoman: "Falaah",
    wordMeaning: "Success / Prosperity",
    context: "حَيَّ عَلَى الْفَلَاح — Hayya 'alal Falaah: Come to success! Called out in the Adhan (call to prayer)."
  }, {
    type: "letter",
    arabic: "ق",
    name: "Qaf",
    sound: "A deep 'Q' pressed from the very back of the tongue against the throat",
    shape: "A round bowl with TWO dots BELOW",
    word: "قُرْآن",
    wordRoman: "Qur'aan",
    wordMeaning: "The Quran — 'that which is recited'",
    context: "Qaf (ق) is the first letter of Quran. The sound comes from your uvula — the very back of your mouth."
  }, {
    type: "letter",
    arabic: "ك",
    name: "Kaf",
    sound: "'k' — like English K or C in 'cat'",
    shape: "An angular shape — like a backwards C with a small stroke",
    word: "كَرِيْم",
    wordRoman: "Kareem",
    wordMeaning: "Generous / Noble",
    context: "اَلْكَرِيْم — Al-Kareem: The Most Generous. One of Allah's 99 names."
  }, {
    type: "letter",
    arabic: "ل",
    name: "Lam",
    sound: "'l' — exactly like English L",
    shape: "A curved upward stroke to the right",
    word: "لِلّٰه",
    wordRoman: "Lillah",
    wordMeaning: "For Allah / Belonging to Allah",
    context: "اَلْحَمْدُ لِلّٰهِ — All praise is FOR ALLAH. The لِ means 'for/belonging to'."
  }, {
    type: "pattern",
    heading: "Special: لا Lam-Alif",
    body: "When Lam (ل) is followed by Alif (ا), they join into a special combined shape:",
    items: [{
      arabic: "لا",
      label: "Lam + Alif = لا (No / None)"
    }, {
      arabic: "لَا إِلٰهَ إِلَّا اللهُ",
      label: "There is no god except Allah"
    }],
    tip: "لَا إِلٰهَ إِلَّا اللهُ — the Shahada. Spot the لا in it!"
  }],
  quiz: [{
    q: "فَلَاح (Falaah) means:",
    opts: ["Prayer", "Knowledge", "Success/Prosperity", "Guidance"],
    ans: 2,
    exp: "فَلَاح means success/prosperity. 'Come to success!' is called in the Adhan."
  }, {
    q: "Qaf (ق) has:",
    opts: ["1 dot above", "1 dot below", "2 dots below", "No dots"],
    ans: 2,
    exp: "Qaf (ق) has TWO dots below. This is different from Fa (ف) which has one dot above."
  }, {
    q: "كَرِيْم (Kareem) means:",
    opts: ["Strong", "Generous/Noble", "Merciful", "Forgiving"],
    ans: 1,
    exp: "كَرِيْم means generous or noble. Al-Kareem is one of Allah's beautiful names."
  }, {
    q: "In لَا إِلٰهَ إِلَّا اللهُ, what does لَا mean?",
    opts: ["Yes", "All", "No/None", "One"],
    ans: 2,
    exp: "لَا means 'no' or 'none'. The Shahada means: There is NO god EXCEPT Allah."
  }, {
    q: "Where is Qaf (ق) produced in the mouth?",
    opts: ["Lips", "Tip of tongue", "Teeth", "Very back of tongue near throat"],
    ans: 3,
    exp: "Qaf is produced at the very back of the tongue, pressing against the throat area — much deeper than English K."
  }]
}, {
  id: "c1-l7",
  title: "Letters: م ن ه و ي",
  subtitle: "The final five — including vowel letters",
  type: "letters",
  xp: 25,
  slides: [{
    type: "letter_intro",
    heading: "Group 7 — The Last 5 Letters",
    body: "Congratulations — this is your last group of letters! After this, you'll know all 28. Three of these (ا و ي) are special — they act as both consonants AND long vowels."
  }, {
    type: "letter",
    arabic: "م",
    name: "Mim",
    sound: "'m' — exactly like English M",
    shape: "A small circle with a short tail",
    word: "مَسْجِد",
    wordRoman: "Masjid",
    wordMeaning: "Mosque",
    context: "اَلْمَسَاجِد بُيُوْتُ اللهِ — Mosques are the houses of Allah. Masjid literally means 'place of prostration'."
  }, {
    type: "letter",
    arabic: "ن",
    name: "Nun",
    sound: "'n' — exactly like English N",
    shape: "A small bowl with ONE dot ABOVE (inside the bowl when connected)",
    word: "نُوْر",
    wordRoman: "Noor",
    wordMeaning: "Light",
    context: "اَللهُ نُوْرُ السَّمَاوَاتِ وَالأَرْض — Allah is the Light of the heavens and the earth. (Surah An-Nur 24:35)"
  }, {
    type: "letter",
    arabic: "ه",
    name: "Ha (light)",
    sound: "A light 'h' — like a sigh, air barely touching",
    shape: "Two connected loops in the middle of a word — a single loop at the end",
    word: "هِدَايَة",
    wordRoman: "Hidaayah",
    wordMeaning: "Guidance",
    context: "اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْم — Guide us to the straight path. (Al-Fatiha) The root is ه-د-ي."
  }, {
    type: "letter",
    arabic: "و",
    name: "Waw",
    sound: "'w' as a consonant — or 'oo' as a long vowel",
    shape: "A small circle with a descending tail",
    word: "وَحْي",
    wordRoman: "Wahy",
    wordMeaning: "Divine Revelation",
    context: "وَحْي is the revelation Allah sent to the prophets. The Quran came through وَحْي to Prophet Muhammad ﷺ."
  }, {
    type: "letter",
    arabic: "ي",
    name: "Ya",
    sound: "'y' as a consonant — or 'ee' as a long vowel",
    shape: "A curved tail with TWO dots BELOW",
    word: "يَوْم",
    wordRoman: "Yawm",
    wordMeaning: "Day",
    context: "يَوْمُ الْقِيَامَة — Yawm al-Qiyaamah: The Day of Resurrection / Judgement Day."
  }, {
    type: "rule",
    heading: "The 3 Long Vowel Letters",
    body: "Three letters double as long vowels in Arabic:",
    items: [{
      arabic: "ا",
      label: "Alif = long 'aa' sound — e.g. كِتَاب (kitaab)"
    }, {
      arabic: "و",
      label: "Waw = long 'oo' sound — e.g. نُوْر (noor)"
    }, {
      arabic: "ي",
      label: "Ya = long 'ee' sound — e.g. دِيْن (deen)"
    }],
    tip: "You've now seen all 28 letters! Next: vowel marks (harakat) that tell you HOW to pronounce each letter."
  }],
  quiz: [{
    q: "مَسْجِد (Masjid) literally means:",
    opts: ["House of Allah", "Place of prostration", "Place of prayer", "Holy building"],
    ans: 1,
    exp: "مَسْجِد comes from the root س-ج-د meaning to prostrate. It means 'place of prostration'."
  }, {
    q: "نُوْر (Noor) means:",
    opts: ["Darkness", "Light", "Sky", "Star"],
    ans: 1,
    exp: "نُوْر means light. Allah is described as the Light of the heavens and the earth in Surah An-Nur."
  }, {
    q: "Which letter makes both a 'w' consonant sound AND a long 'oo' vowel sound?",
    opts: ["ن (Nun)", "م (Mim)", "و (Waw)", "ي (Ya)"],
    ans: 2,
    exp: "Waw (و) acts as the consonant 'w' and also as the long 'oo' vowel."
  }, {
    q: "يَوْم (Yawm) means:",
    opts: ["Night", "Month", "Year", "Day"],
    ans: 3,
    exp: "يَوْم means day. يَوْمُ الْقِيَامَة is the Day of Resurrection."
  }, {
    q: "هِدَايَة (Hidaayah) means:",
    opts: ["Light", "Knowledge", "Guidance", "Mercy"],
    ans: 2,
    exp: "هِدَايَة means guidance. We ask for it every day in Al-Fatiha: 'Guide us to the straight path'."
  }]
}, {
  id: "c1-l8",
  title: "Short Vowels (Harakat)",
  subtitle: "فَتْحَة — ضَمَّة — كَسْرَة",
  type: "grammar",
  xp: 35,
  slides: [{
    type: "rule",
    heading: "What are Harakat?",
    body: "Arabic letters are CONSONANTS only. The small marks written above or below them — called حَرَكَات (harakat) — tell you which VOWEL sound to add. Without harakat, you cannot read Arabic correctly."
  }, {
    type: "vowel",
    arabic: "فَتْحَة",
    symbol: "َ",
    name: "Fatha",
    sound: "Short 'a' — like 'a' in 'cat'",
    position: "Written ABOVE the letter",
    examples: [{
      arabic: "بَ",
      roman: "ba",
      breakdown: "ب + fatha = 'ba'"
    }, {
      arabic: "كَ",
      roman: "ka",
      breakdown: "ك + fatha = 'ka'"
    }, {
      arabic: "رَب",
      roman: "rab",
      breakdown: "ر+fatha + ب = 'rab'"
    }],
    qExample: {
      arabic: "رَبّ",
      roman: "Rabb",
      meaning: "Lord"
    }
  }, {
    type: "vowel",
    arabic: "ضَمَّة",
    symbol: "ُ",
    name: "Damma",
    sound: "Short 'u' — like 'u' in 'put'",
    position: "Written ABOVE the letter (looks like a small waw و)",
    examples: [{
      arabic: "بُ",
      roman: "bu",
      breakdown: "ب + damma = 'bu'"
    }, {
      arabic: "كُ",
      roman: "ku",
      breakdown: "ك + damma = 'ku'"
    }, {
      arabic: "نُوْر",
      roman: "noor",
      breakdown: "نُ = nu, وْر = or → noor"
    }],
    qExample: {
      arabic: "نُوْر",
      roman: "Noor",
      meaning: "Light"
    }
  }, {
    type: "vowel",
    arabic: "كَسْرَة",
    symbol: "ِ",
    name: "Kasra",
    sound: "Short 'i' — like 'i' in 'sit'",
    position: "Written BELOW the letter",
    examples: [{
      arabic: "بِ",
      roman: "bi",
      breakdown: "ب + kasra = 'bi'"
    }, {
      arabic: "بِسْمِ",
      roman: "bismi",
      breakdown: "بِ=bi, سْ=s, مِ=mi → bismi"
    }],
    qExample: {
      arabic: "بِسْمِ اللهِ",
      roman: "Bismillah",
      meaning: "In the name of Allah"
    }
  }, {
    type: "reading_practice",
    heading: "Practice: Read These Words",
    instruction: "Use the harakat to sound out each word, then check the meaning.",
    words: [{
      arabic: "كِتَاب",
      roman: "ki-taab",
      meaning: "Book"
    }, {
      arabic: "بَيْت",
      roman: "bayt",
      meaning: "House"
    }, {
      arabic: "رَجُل",
      roman: "ra-jul",
      meaning: "Man"
    }, {
      arabic: "كَبِير",
      roman: "ka-beer",
      meaning: "Big/Great"
    }]
  }],
  quiz: [{
    q: "Fatha (فَتْحَة) produces which sound?",
    opts: ["Short 'u' (put)", "Short 'a' (cat)", "Short 'i' (sit)", "Long 'aa'"],
    ans: 1,
    exp: "Fatha is written above the letter and produces a short 'a' sound like 'a' in 'cat'."
  }, {
    q: "Where is Kasra (كَسْرَة) written?",
    opts: ["Above the letter", "Below the letter", "Inside the letter", "After the letter"],
    ans: 1,
    exp: "Kasra is written BELOW the letter, producing a short 'i' sound like 'i' in 'sit'."
  }, {
    q: "What does the Damma (ضَمَّة) look like?",
    opts: ["A diagonal line above", "A small waw (و) above the letter", "A line below the letter", "A dot above"],
    ans: 1,
    exp: "Damma looks like a miniature Waw (و) written above the letter. It produces 'u' as in 'put'."
  }, {
    q: "How do you read بِسْمِ?",
    opts: ["basma", "busmu", "bismi", "besme"],
    ans: 2,
    exp: "بِ = bi (kasra under ba), سْ = s (sukoon), مِ = mi (kasra under mim) → bismi."
  }, {
    q: "The word رَبّ (with fatha) is pronounced:",
    opts: ["rub", "rib", "rab", "rob"],
    ans: 2,
    exp: "Ra + fatha = 'ra'. Ba = 'b'. So رَبّ = 'Rabb' (Lord). Fatha gives the 'a' sound."
  }]
}, {
  id: "c1-l9",
  title: "Sukoon & Shadda",
  subtitle: "سُكُوْن — شَدَّة",
  type: "grammar",
  xp: 30,
  slides: [{
    type: "rule",
    heading: "Two More Marks",
    body: "Besides the three short vowels, Arabic has two more vital marks: Sukoon tells you a letter has NO vowel — it stops the sound. Shadda tells you a letter is DOUBLED — pronounced with double emphasis."
  }, {
    type: "vowel",
    arabic: "سُكُوْن",
    symbol: "ْ",
    name: "Sukoon",
    sound: "No vowel — the letter STOPS the sound",
    position: "A small circle written ABOVE the letter",
    examples: [{
      arabic: "مِنْ",
      roman: "min",
      breakdown: "مِ=mi, نْ=n (stops) → 'min'"
    }, {
      arabic: "عَنْ",
      roman: "'an",
      breakdown: "عَ='a, نْ=n (stops) → 'an'"
    }, {
      arabic: "قُلْ",
      roman: "qul",
      breakdown: "قُ=qu, لْ=l (stops) → 'qul'"
    }],
    qExample: {
      arabic: "قُلْ هُوَ اللهُ أَحَد",
      roman: "Qul huwallahu ahad",
      meaning: "Say: He is Allah, the One"
    }
  }, {
    type: "vowel",
    arabic: "شَدَّة",
    symbol: "ّ",
    name: "Shadda",
    sound: "Doubled/emphasised consonant — hold the sound longer",
    position: "A small 'w' shape written ABOVE the letter",
    examples: [{
      arabic: "رَبّ",
      roman: "Rabb",
      breakdown: "ر+fatha, بّ = doubled ba → 'Rabb'"
    }, {
      arabic: "اللهِ",
      roman: "Allahi",
      breakdown: "The lam (ل) in Allah has a shadda → strong 'll'"
    }],
    qExample: {
      arabic: "إِنَّ اللهَ",
      roman: "Innallaha",
      meaning: "Indeed, Allah..."
    }
  }, {
    type: "reading_practice",
    heading: "Spot the Sukoon and Shadda",
    instruction: "Can you identify the sukoon (ْ) and shadda (ّ) in these Quranic phrases?",
    words: [{
      arabic: "بِسْمِ اللهِ",
      roman: "Bismillah",
      meaning: "In the name of Allah — سْ has sukoon"
    }, {
      arabic: "الرَّحْمَن",
      roman: "Ar-Rahman",
      meaning: "The Most Gracious — رّ has shadda, حْ has sukoon"
    }, {
      arabic: "قُلْ أَعُوْذُ",
      roman: "Qul a'oodhu",
      meaning: "Say: I seek refuge — لْ has sukoon"
    }]
  }],
  quiz: [{
    q: "Sukoon (سُكُوْن) means the letter has:",
    opts: ["A long vowel", "No vowel — stops the sound", "A doubled sound", "A nasal sound"],
    ans: 1,
    exp: "Sukoon means 'stillness' — the letter has no vowel and acts as a stop consonant."
  }, {
    q: "What does Shadda (شَدَّة) indicate?",
    opts: ["The letter is silent", "A short 'a' vowel", "The letter is doubled/emphasized", "A long vowel follows"],
    ans: 2,
    exp: "Shadda doubles the consonant. رَبّ is pronounced 'Rabb' not 'Rab' — the ba is held double."
  }, {
    q: "In قُلْ (Qul — Say!), which letter has a Sukoon?",
    opts: ["ق (Qaf)", "ل (Lam)", "Both", "Neither"],
    ans: 1,
    exp: "Lam (لْ) has the sukoon in قُلْ — so you say 'qu' then stop at 'l': Qul."
  }, {
    q: "Shadda looks like:",
    opts: ["A small circle above", "A diagonal line", "A small 'w' shape above the letter", "A dot below"],
    ans: 2,
    exp: "Shadda (ّ) looks like a small 'w' or curved 'sh' shape written above the letter."
  }, {
    q: "In اللهِ (Allahi), the doubled Lam sound is because of:",
    opts: ["Sukoon", "Fatha", "Shadda", "Kasra"],
    ans: 2,
    exp: "The Lam in Allah has a shadda (ّ) making it a strong doubled 'll' sound."
  }]
}, {
  id: "c1-l10",
  title: "Reading Al-Fatiha",
  subtitle: "Your first full Quranic reading",
  type: "quran",
  xp: 50,
  slides: [{
    type: "rule",
    heading: "You're Ready",
    body: "You now know all 28 letters and all the harakat marks. Al-Fatiha is the opening chapter of the Quran — 7 verses, recited 17 times daily in Salah. Let's read it word by word using everything you've learned."
  }, {
    type: "quran_verse",
    arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    roman: "Bismillahir rahmanir raheem",
    meaning: "In the name of Allah, the Most Gracious, the Most Merciful",
    breakdown: [{
      word: "بِسْمِ",
      meaning: "In the name of",
      note: "بِ = in, سْمِ = name"
    }, {
      word: "اللهِ",
      meaning: "Allah",
      note: "The Lam has a shadda"
    }, {
      word: "الرَّحْمٰنِ",
      meaning: "The Most Gracious",
      note: "رّ has shadda, حْ has sukoon"
    }, {
      word: "الرَّحِيْمِ",
      meaning: "The Most Merciful",
      note: "يْمِ = long ee + mim + kasra"
    }]
  }, {
    type: "quran_verse",
    arabic: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْن",
    roman: "Alhamdu lillahi rabbil 'aalameen",
    meaning: "All praise is for Allah, Lord of all the worlds",
    breakdown: [{
      word: "اَلْحَمْدُ",
      meaning: "All praise",
      note: "الْ = 'the', حَمْدُ = praise"
    }, {
      word: "لِلّٰهِ",
      meaning: "for Allah",
      note: "لِ = for/to + اللهِ = Allah"
    }, {
      word: "رَبِّ",
      meaning: "Lord of",
      note: "rabba = Lord, بّ has shadda"
    }, {
      word: "الْعَالَمِيْن",
      meaning: "all the worlds",
      note: "عَالَم = world, يْن = plural"
    }]
  }, {
    type: "quran_verse",
    arabic: "اَلرَّحْمٰنِ الرَّحِيْم",
    roman: "Ar-Rahmanir Raheem",
    meaning: "The Most Gracious, the Most Merciful",
    breakdown: [{
      word: "اَلرَّحْمٰن",
      meaning: "The Most Gracious",
      note: "رّ = shadda, massive mercy"
    }, {
      word: "الرَّحِيْم",
      meaning: "The Most Merciful",
      note: "رَّ = shadda, ongoing mercy"
    }]
  }, {
    type: "quran_verse",
    arabic: "مَالِكِ يَوْمِ الدِّيْن",
    roman: "Maaliki yawmid-deen",
    meaning: "Master of the Day of Judgement",
    breakdown: [{
      word: "مَالِك",
      meaning: "Master/Owner",
      note: "From root م-ل-ك (power/ownership)"
    }, {
      word: "يَوْم",
      meaning: "Day",
      note: "yawm — you learned this word!"
    }, {
      word: "الدِّيْن",
      meaning: "The Judgement/Religion",
      note: "دِّ has shadda, يْن = long ee + nun"
    }]
  }, {
    type: "rule",
    heading: "مَا شَاءَ اللهُ",
    body: "You just read 4 verses of Al-Fatiha with understanding! Every time you now recite Al-Fatiha in Salah, you know WHAT you are saying to Allah. This is exactly the purpose of learning Arabic.",
    tip: "Next chapter: We go deeper into Quranic vocabulary — the 100 most repeated words in the Quran."
  }],
  quiz: [{
    q: "اَلْحَمْدُ لِلّٰهِ means:",
    opts: ["In the name of Allah", "All praise is for Allah", "Guide us to the straight path", "The Most Merciful"],
    ans: 1,
    exp: "اَلْحَمْدُ لِلّٰهِ = Alhamdulillah = All praise is for Allah."
  }, {
    q: "In the Fatiha, مَالِك means:",
    opts: ["Merciful", "Gracious", "Master/Owner", "Guide"],
    ans: 2,
    exp: "مَالِك means Master or Owner. Allah is the Maalik (Master) of the Day of Judgement."
  }, {
    q: "يَوْم in يَوْمِ الدِّيْن means:",
    opts: ["Lord", "Day", "Judgement", "Religion"],
    ans: 1,
    exp: "يَوْم means Day. You learned this in Lesson 7 — يَوْمُ الْقِيَامَة = Day of Resurrection."
  }, {
    q: "The two names الرَّحْمٰن الرَّحِيْم both come from the root meaning:",
    opts: ["Knowledge", "Mercy", "Power", "Praise"],
    ans: 1,
    exp: "Both Rahman and Raheem come from رحم (rahm) — the root meaning mercy/womb. Allah's mercy is overwhelming."
  }, {
    q: "Al-Fatiha is recited how many times daily in the 5 prayers?",
    opts: ["5 times", "10 times", "17 times", "25 times"],
    ans: 2,
    exp: "Al-Fatiha is recited in every rak'ah — 17 times across the 5 daily prayers."
  }]
}];

// ─── Utility ───────────────────────────────────────────────────────
var store = function store(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (_unused) {}
};
var load = function load(k, d) {
  try {
    var r = localStorage.getItem(k);
    return r ? JSON.parse(r) : d;
  } catch (_unused2) {
    return d;
  }
};

// ─── ICONS ─────────────────────────────────────────────────────────
var IC = {
  Fire: function Fire() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
    }));
  },
  Check: function Check() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }));
  },
  Lock: function Lock() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    }));
  },
  Arrow: function Arrow() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m15 18-6-6 6-6"
    }));
  },
  ChevR: function ChevR() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    }));
  },
  Star: function Star() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }));
  },
  Book: function Book() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
    }));
  }
};
var C = {
  gold: "#c9a84c",
  bg: "#0a0f1a",
  card: "#141824",
  border: "#1e2333",
  text: "#e8e0d4",
  muted: "#6b6355",
  green: "#7ac97a",
  red: "#c97a7a",
  navy: "#1a1f2e"
};

// ─── HOME SCREEN ───────────────────────────────────────────────────
function HomeScreen(_ref) {
  var onStart = _ref.onStart;
  var _useState = useState(function () {
      return load("nq_done", []);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    done = _useState2[0],
    setDone = _useState2[1];
  var _useState3 = useState(function () {
      return load("nq_xp", 0);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    xp = _useState4[0],
    setXp = _useState4[1];
  var _useState5 = useState(function () {
      return load("nq_streak", 0);
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    streak = _useState6[0],
    setStreak = _useState6[1];
  var level = Math.floor(xp / 300) + 1;
  var xpInLevel = xp % 300;
  var totalLessons = CHAPTER_1.length;
  var completedCount = done.length;
  var isUnlocked = function isUnlocked(idx) {
    return idx === 0 || done.includes(CHAPTER_1[idx - 1].id);
  };
  var typeColor = {
    intro: "#6b8bbd",
    letters: "#c9a84c",
    grammar: "#8bbd6b",
    quran: "#bd6b8b"
  };
  var typeLabel = {
    intro: "INTRO",
    letters: "LETTERS",
    grammar: "GRAMMAR",
    quran: "QURAN"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: C.bg,
      color: C.text,
      fontFamily: "'Amiri','Georgia',serif",
      overflowX: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      opacity: 0.025,
      zIndex: 0,
      backgroundImage: "repeating-linear-gradient(60deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 480,
      margin: "0 auto",
      padding: "0 16px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 0 18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      margin: 0,
      fontWeight: 700,
      background: "linear-gradient(135deg,#c9a84c,#e8d5a3)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  }, "\u0646\u0648\u0631 \u0627\u0644\u0642\u0631\u0622\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 0 0",
      fontSize: 11,
      color: C.muted,
      letterSpacing: 2,
      textTransform: "uppercase"
    }
  }, "Quranic Arabic \u2014 Chapter 1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      color: "#e8734a",
      fontSize: 15,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(IC.Fire, null), streak), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2a1a,#141824)",
      border: "1px solid #3a6a3a",
      borderRadius: 20,
      padding: "5px 14px",
      fontSize: 13,
      fontWeight: 700,
      color: C.green
    }
  }, "Lvl ", level))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "14px 16px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.muted
    }
  }, xp, " XP"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.gold
    }
  }, xpInLevel, "/300 \u2192 Lvl ", level + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: C.border,
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(xpInLevel / 300 * 100, "%"),
      background: "linear-gradient(90deg,".concat(C.gold, ",#e8d5a3)"),
      borderRadius: 3,
      transition: "width 0.6s ease"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.navy,
      borderRadius: 10,
      padding: "10px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: C.green
    }
  }, completedCount), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Done")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.navy,
      borderRadius: 10,
      padding: "10px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#6b8bbd"
    }
  }, totalLessons), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Total")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.navy,
      borderRadius: 10,
      padding: "10px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#e8734a"
    }
  }, streak, "d"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Streak")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2235,#12192a)",
      border: "1px solid ".concat(C.gold, "33"),
      borderRadius: 16,
      padding: "18px 20px",
      marginBottom: 20,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -20,
      right: -20,
      width: 100,
      height: 100,
      background: "radial-gradient(circle,".concat(C.gold, "15,transparent 70%)")
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 8,
      fontWeight: 700
    }
  }, "CHAPTER ONE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      color: C.gold,
      marginBottom: 4
    }
  }, "\u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0639\u0631\u0628\u064A\u0629"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.text,
      marginBottom: 6
    }
  }, "The Arabic Alphabet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, totalLessons, " lessons \xB7 From zero to reading Al-Fatiha")), CHAPTER_1.map(function (lesson, idx) {
    var unlocked = isUnlocked(idx);
    var isDone = done.includes(lesson.id);
    var isNext = !isDone && unlocked;
    var color = typeColor[lesson.type] || C.gold;
    return /*#__PURE__*/React.createElement("button", {
      key: lesson.id,
      onClick: function onClick() {
        return unlocked && onStart(lesson, function (id, earnedXp) {
          var newDone = done.includes(id) ? done : [].concat(_toConsumableArray(done), [id]);
          setDone(newDone);
          store("nq_done", newDone);
          var newXp = done.includes(id) ? xp : xp + earnedXp;
          setXp(newXp);
          store("nq_xp", newXp);
          var today = new Date().toDateString();
          var last = load("nq_lastDate", null);
          if (last !== today) {
            var s = streak + 1;
            setStreak(s);
            store("nq_streak", s);
            store("nq_lastDate", today);
          }
        });
      },
      style: {
        width: "100%",
        textAlign: "left",
        cursor: unlocked ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        background: isDone ? "#111d11" : isNext ? "".concat(C.gold, "0a") : C.card,
        border: "1px solid ".concat(isDone ? "#2a4a2a" : isNext ? "".concat(C.gold, "44") : C.border),
        borderRadius: 14,
        marginBottom: 10,
        opacity: unlocked ? 1 : 0.4,
        transition: "all 0.2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: isDone ? "#1a3a1a" : unlocked ? C.navy : "#0f1420",
        border: "1px solid ".concat(isDone ? "#3a6a3a" : unlocked ? color + "44" : C.border),
        color: isDone ? C.green : unlocked ? color : C.muted,
        fontSize: 20
      }
    }, isDone ? /*#__PURE__*/React.createElement(IC.Check, null) : unlocked ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Amiri',serif",
        fontSize: 22
      }
    }, lesson.id === "c1-l0" ? "١" : lesson.id === "c1-l1" ? "أ" : lesson.id === "c1-l2" ? "ج" : lesson.id === "c1-l3" ? "د" : lesson.id === "c1-l4" ? "س" : lesson.id === "c1-l5" ? "ع" : lesson.id === "c1-l6" ? "ف" : lesson.id === "c1-l7" ? "م" : lesson.id === "c1-l8" ? "َ" : lesson.id === "c1-l9" ? "ْ" : "ق") : /*#__PURE__*/React.createElement(IC.Lock, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        padding: "2px 8px",
        borderRadius: 6,
        background: "".concat(color, "18"),
        color: color,
        textTransform: "uppercase",
        letterSpacing: 1,
        fontWeight: 700
      }
    }, typeLabel[lesson.type]), isNext && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: C.gold,
        letterSpacing: 1
      }
    }, "\u25B6 NEXT")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: isDone ? C.green : C.text
      }
    }, lesson.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.muted,
        marginTop: 2
      }
    }, lesson.subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: isDone ? C.green : C.gold
      }
    }, "+", lesson.xp), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: C.muted
      }
    }, "XP")));
  })), /*#__PURE__*/React.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); *{box-sizing:border-box;margin:0;padding:0} button{font-family:inherit;border:none;background:none}"));
}

// ─── LESSON SCREEN ─────────────────────────────────────────────────
function LessonScreen(_ref2) {
  var lesson = _ref2.lesson,
    onBack = _ref2.onBack,
    onComplete = _ref2.onComplete;
  var _useState7 = useState("teach"),
    _useState8 = _slicedToArray(_useState7, 2),
    phase = _useState8[0],
    setPhase = _useState8[1]; // teach | quiz | done
  var _useState9 = useState(0),
    _useState0 = _slicedToArray(_useState9, 2),
    slideIdx = _useState0[0],
    setSlideIdx = _useState0[1];
  var _useState1 = useState(0),
    _useState10 = _slicedToArray(_useState1, 2),
    qIdx = _useState10[0],
    setQIdx = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selected = _useState12[0],
    setSelected = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    answered = _useState14[0],
    setAnswered = _useState14[1];
  var _useState15 = useState(0),
    _useState16 = _slicedToArray(_useState15, 2),
    correct = _useState16[0],
    setCorrect = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showExp = _useState18[0],
    setShowExp = _useState18[1];
  var slides = lesson.slides;
  var quiz = lesson.quiz;
  var slide = slides[slideIdx];
  var q = quiz[qIdx];
  var nextSlide = function nextSlide() {
    if (slideIdx < slides.length - 1) setSlideIdx(function (s) {
      return s + 1;
    });else setPhase("quiz");
  };
  var prevSlide = function prevSlide() {
    if (slideIdx > 0) setSlideIdx(function (s) {
      return s - 1;
    });
  };
  var handleAnswer = function handleAnswer(i) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    setShowExp(true);
    if (i === q.ans) setCorrect(function (c) {
      return c + 1;
    });
  };
  var nextQ = function nextQ() {
    setSelected(null);
    setAnswered(false);
    setShowExp(false);
    if (qIdx < quiz.length - 1) setQIdx(function (i) {
      return i + 1;
    });else {
      setPhase("done");
      onComplete(lesson.id, lesson.xp);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: C.bg,
      color: C.text,
      fontFamily: "'Amiri','Georgia',serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto",
      padding: "0 16px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "18px 0 14px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: C.card,
      border: "1px solid ".concat(C.border),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: C.muted
    }
  }, /*#__PURE__*/React.createElement(IC.Arrow, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.text,
      marginBottom: 6
    }
  }, phase === "teach" ? "".concat(lesson.title) : phase === "quiz" ? "Quiz \u2014 ".concat(lesson.title) : "Complete!"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.border,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      background: "linear-gradient(90deg,".concat(C.gold, ",#e8d5a3)"),
      borderRadius: 2,
      transition: "width 0.4s ease",
      width: phase === "teach" ? "".concat((slideIdx + 1) / slides.length * 50, "%") : phase === "quiz" ? "".concat(50 + (qIdx + 1) / quiz.length * 50, "%") : "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: phase === "teach" ? C.gold : C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Lesson ", slideIdx + 1, "/", slides.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: phase === "quiz" ? C.gold : C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Quiz ", phase === "quiz" ? qIdx + 1 : 0, "/", quiz.length)))), phase === "teach" && /*#__PURE__*/React.createElement(TeachSlide, {
    slide: slide,
    onNext: nextSlide,
    onPrev: prevSlide,
    isFirst: slideIdx === 0,
    isLast: slideIdx === slides.length - 1
  }), phase === "quiz" && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 18,
      padding: "24px 20px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Question ", qIdx + 1, " of ", quiz.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.6,
      color: C.text
    }
  }, q.q)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 16
    }
  }, q.opts.map(function (opt, i) {
    var isCorrect = i === q.ans;
    var isSel = selected === i;
    var bg = C.navy,
      border = "#2a2f3e",
      textColor = C.text;
    if (answered) {
      if (isCorrect) {
        bg = "#1a2a1a";
        border = "#4a8c4a";
        textColor = C.green;
      } else if (isSel) {
        bg = "#2a1a1a";
        border = "#8c4a4a";
        textColor = C.red;
      }
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return handleAnswer(i);
      },
      style: {
        padding: "15px 18px",
        border: "1px solid ".concat(border),
        borderRadius: 12,
        background: bg,
        color: textColor,
        fontSize: 14,
        cursor: answered ? "default" : "pointer",
        textAlign: "left",
        fontFamily: "inherit",
        transition: "all 0.2s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 24,
        height: 24,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        background: answered && isCorrect ? "#2a4a2a" : C.card,
        marginRight: 12,
        fontSize: 11,
        fontWeight: 700,
        color: answered && isCorrect ? C.green : C.muted
      }
    }, String.fromCharCode(65 + i)), opt);
  })), showExp && /*#__PURE__*/React.createElement("div", {
    style: {
      background: selected === q.ans ? "#111d11" : "#1d1111",
      border: "1px solid ".concat(selected === q.ans ? "#3a6a3a" : "#6a3a3a"),
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 16,
      animation: "fadeIn 0.3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: selected === q.ans ? C.green : C.red,
      letterSpacing: 1,
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: 6
    }
  }, selected === q.ans ? "✓ Correct" : "✗ Incorrect"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#b0a898",
      lineHeight: 1.6
    }
  }, q.exp)), answered && /*#__PURE__*/React.createElement("button", {
    onClick: nextQ,
    style: {
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: 13,
      background: "linear-gradient(135deg,".concat(C.gold, ",#a88a3a)"),
      color: C.bg,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      animation: "fadeIn 0.3s ease"
    }
  }, qIdx < quiz.length - 1 ? "Next Question →" : "See Results →")), phase === "done" && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.4s ease",
      textAlign: "center",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2235,#141824)",
      border: "1px solid ".concat(C.gold, "33"),
      borderRadius: 22,
      padding: "36px 24px",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      marginBottom: 16
    }
  }, correct === quiz.length ? "🌟" : correct >= quiz.length * 0.6 ? "✅" : "📖"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "Lesson Complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: C.text,
      marginBottom: 4
    }
  }, correct, "/", quiz.length, " Correct"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.muted,
      marginBottom: 24
    }
  }, correct === quiz.length ? "ما شاء الله — Perfect score!" : correct >= quiz.length * 0.6 ? "Good work — keep going!" : "Review the lesson and try again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: C.gold
    }
  }, "+", lesson.xp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.muted,
      letterSpacing: 1
    }
  }, "XP EARNED")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: C.border
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: C.green
    }
  }, Math.round(correct / quiz.length * 100), "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.muted,
      letterSpacing: 1
    }
  }, "ACCURACY")))), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: 13,
      background: "linear-gradient(135deg,".concat(C.gold, ",#a88a3a)"),
      color: C.bg,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Back to Lessons \u2192"))), /*#__PURE__*/React.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); *{box-sizing:border-box;margin:0;padding:0} button{font-family:inherit} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"));
}

// ─── TEACH SLIDE RENDERER ──────────────────────────────────────────
function TeachSlide(_ref3) {
  var slide = _ref3.slide,
    onNext = _ref3.onNext,
    onPrev = _ref3.onPrev,
    isFirst = _ref3.isFirst,
    isLast = _ref3.isLast;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.35s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 420,
      display: "flex",
      flexDirection: "column"
    }
  }, slide.type === "welcome" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg,#1a2235,#0f1520)",
      border: "1px solid ".concat(C.gold, "33"),
      borderRadius: 20,
      padding: "36px 24px",
      textAlign: "center",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      color: C.gold,
      marginBottom: 16,
      fontWeight: 700
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: C.text,
      marginBottom: 16
    }
  }, slide.subheading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#a09880",
      lineHeight: 1.8
    }
  }, slide.body)), slide.type === "fact" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "24px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: 20
    }
  }, slide.heading), slide.points.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 8,
        background: "".concat(C.gold, "18"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: C.gold,
        fontWeight: 700,
        flexShrink: 0
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: C.text,
        lineHeight: 1.6
      }
    }, p));
  })), slide.type === "alphabet_overview" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "24px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.gold,
      fontWeight: 700,
      marginBottom: 8
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      lineHeight: 1.7,
      marginBottom: 20
    }
  }, slide.body), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.navy,
      borderRadius: 14,
      padding: "18px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      color: C.gold,
      lineHeight: 2.2,
      fontFamily: "'Amiri',serif",
      direction: "rtl",
      letterSpacing: 4
    }
  }, slide.letters))), slide.type === "tip" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#111d11",
      border: "1px solid #2a4a2a",
      borderRadius: 20,
      padding: "28px 22px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      marginBottom: 14
    }
  }, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: C.green,
      marginBottom: 12
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#8aaa7a",
      lineHeight: 1.8,
      marginBottom: 16
    }
  }, slide.body), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1a2a1a",
      borderRadius: 10,
      padding: "12px 14px",
      fontSize: 13,
      color: C.green,
      fontStyle: "italic"
    }
  }, "\"", slide.tip, "\"")), slide.type === "letter" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2235,#0f1825)",
      border: "1px solid ".concat(C.gold, "44"),
      borderRadius: 20,
      padding: "28px 20px",
      textAlign: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 96,
      color: C.gold,
      fontFamily: "'Amiri',serif",
      lineHeight: 1.1,
      marginBottom: 10
    }
  }, slide.arabic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      color: C.text,
      fontWeight: 700,
      marginBottom: 4
    }
  }, slide.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.muted
    }
  }, slide.sound)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "14px 16px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#6b8bbd",
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "SHAPE GUIDE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.text
    }
  }, slide.shape)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1a1420",
      border: "1px solid #3a2a4a",
      borderRadius: 14,
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#bd8bbd",
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "QURANIC WORD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      color: "#ddb8dd",
      fontFamily: "'Amiri',serif"
    }
  }, slide.word), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.text,
      fontWeight: 600
    }
  }, slide.wordRoman), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.muted
    }
  }, slide.wordMeaning))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 12,
      color: "#9a7a9a",
      lineHeight: 1.7,
      borderTop: "1px solid #3a2a4a",
      paddingTop: 10
    }
  }, slide.context))), slide.type === "letter_intro" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2030,".concat(C.card, ")"),
      border: "1px solid ".concat(C.gold, "33"),
      borderRadius: 20,
      padding: "30px 22px",
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 16
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: C.text,
      lineHeight: 1.8
    }
  }, slide.body)), slide.type === "pattern" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "24px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: C.gold,
      marginBottom: 8
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.muted,
      marginBottom: 20
    }
  }, slide.body), slide.items.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: C.navy,
        borderRadius: 12,
        padding: "14px 16px",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 40,
        color: C.gold,
        fontFamily: "'Amiri',serif",
        width: 50,
        textAlign: "center"
      }
    }, item.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: C.text
      }
    }, item.label));
  }), slide.tip && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: "#111d11",
      borderRadius: 10,
      padding: "12px 14px",
      fontSize: 12,
      color: C.green,
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", slide.tip)), slide.type === "rule" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "24px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: C.gold,
      marginBottom: 14
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.text,
      lineHeight: 1.8,
      marginBottom: slide.items ? 16 : 0
    }
  }, slide.body), slide.items && slide.items.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: C.navy,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 36,
        color: C.gold,
        fontFamily: "'Amiri',serif",
        minWidth: 50,
        textAlign: "center"
      }
    }, item.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: C.text
      }
    }, item.label));
  }), slide.tip && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: "#111d11",
      borderRadius: 10,
      padding: "12px 14px",
      fontSize: 12,
      color: C.green,
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", slide.tip)), slide.type === "vowel" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2235,#0f1825)",
      border: "1px solid ".concat(C.gold, "44"),
      borderRadius: 20,
      padding: "24px 20px",
      textAlign: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, slide.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      color: C.gold,
      fontFamily: "'Amiri',serif",
      marginBottom: 8
    }
  }, "\u0628\u064E \u2190 ", slide.symbol), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: C.text,
      marginBottom: 4
    }
  }, slide.sound), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, slide.position)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "16px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#6b8bbd",
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "EXAMPLES"), slide.examples.map(function (ex, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: i < slide.examples.length - 1 ? "1px solid ".concat(C.border) : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        color: C.gold,
        fontFamily: "'Amiri',serif"
      }
    }, ex.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: C.text,
        fontWeight: 600
      }
    }, ex.roman), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.muted
      }
    }, ex.breakdown)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1a1420",
      border: "1px solid #3a2a4a",
      borderRadius: 14,
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#bd8bbd",
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "QURANIC EXAMPLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      color: "#ddb8dd",
      fontFamily: "'Amiri',serif",
      marginBottom: 6
    }
  }, slide.qExample.arabic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.text,
      fontWeight: 600
    }
  }, slide.qExample.roman), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, slide.qExample.meaning))), slide.type === "reading_practice" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "24px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: C.gold,
      marginBottom: 6
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      marginBottom: 18
    }
  }, slide.instruction), slide.words.map(function (w, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: C.navy,
        borderRadius: 12,
        padding: "14px 16px",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        color: C.gold,
        fontFamily: "'Amiri',serif"
      }
    }, w.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: C.text,
        fontWeight: 600
      }
    }, w.roman), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.muted
      }
    }, w.meaning))));
  })), slide.type === "quran_verse" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg,#1a1428,#100f20)",
      border: "1px solid #4a3a6a",
      borderRadius: 20,
      padding: "24px 20px",
      marginBottom: 14,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#b08bdd",
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "QURANIC ARABIC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      color: "#e0c8ff",
      fontFamily: "'Amiri',serif",
      lineHeight: 1.8,
      direction: "rtl",
      marginBottom: 14
    }
  }, slide.arabic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#b08bdd",
      fontStyle: "italic",
      marginBottom: 6
    }
  }, slide.roman), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.text,
      fontWeight: 600
    }
  }, slide.meaning)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.gold,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "WORD BY WORD"), slide.breakdown.map(function (b, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "10px 0",
        borderBottom: i < slide.breakdown.length - 1 ? "1px solid ".concat(C.border) : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        color: C.gold,
        fontFamily: "'Amiri',serif",
        minWidth: 80,
        textAlign: "center"
      }
    }, b.word), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: C.text,
        fontWeight: 600
      }
    }, b.meaning), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.muted,
        marginTop: 2
      }
    }, b.note)));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 20
    }
  }, !isFirst && /*#__PURE__*/React.createElement("button", {
    onClick: onPrev,
    style: {
      flex: 1,
      padding: "14px",
      border: "1px solid ".concat(C.border),
      borderRadius: 13,
      background: C.card,
      color: C.muted,
      fontSize: 14,
      cursor: "pointer"
    }
  }, "\u2190 Back"), /*#__PURE__*/React.createElement("button", {
    onClick: onNext,
    style: {
      flex: 2,
      padding: "14px",
      border: "none",
      borderRadius: 13,
      background: "linear-gradient(135deg,".concat(C.gold, ",#a88a3a)"),
      color: C.bg,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, isLast ? "Take Quiz →" : "Continue →")));
}

// ─── APP ROOT ──────────────────────────────────────────────────────
function App() {
  var _useState19 = useState("home"),
    _useState20 = _slicedToArray(_useState19, 2),
    screen = _useState20[0],
    setScreen = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    activeLesson = _useState22[0],
    setActiveLesson = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    completeCallback = _useState24[0],
    setCompleteCallback = _useState24[1];
  var handleStart = useCallback(function (lesson, cb) {
    setActiveLesson(lesson);
    setCompleteCallback(function () {
      return cb;
    });
    setScreen("lesson");
  }, []);
  if (screen === "lesson" && activeLesson) {
    return /*#__PURE__*/React.createElement(LessonScreen, {
      lesson: activeLesson,
      onBack: function onBack() {
        setScreen("home");
        setActiveLesson(null);
      },
      onComplete: function onComplete(id, xp) {
        completeCallback && completeCallback(id, xp);
      }
    });
  }
  return /*#__PURE__*/React.createElement(HomeScreen, {
    onStart: handleStart
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));

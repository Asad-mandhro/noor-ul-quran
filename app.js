"use strict";
var useState=React.useState,useEffect=React.useEffect,useCallback=React.useCallback,useRef=React.useRef;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// ─── SPEAK UTILITY ─────────────────────────────────────────────────
var speak = function speak(text) {
  var rate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.75;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  u.rate = rate;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
};

// ─── COLOR / STYLE TOKENS ──────────────────────────────────────────
var C = {
  gold: "#c9a84c",
  bg: "#0a0f1a",
  card: "#141824",
  border: "#1e2333",
  text: "#e8e0d4",
  muted: "#6b6355",
  green: "#7ac97a",
  red: "#c97a7a",
  navy: "#1a1f2e",
  purple: "#b08bdd",
  blue: "#6b8bbd"
};

// ─── CHAPTERS DATA ─────────────────────────────────────────────────
var BOOK_COLORS = {
  1: "#8bbd6b",
  2: "#6b8bbd",
  3: "#b08bdd",
  tajweed: "#e8734a"
};
var buildAllChapters = function buildAllChapters() {
  var inline = [{
    id: "ch1",
    number: 1,
    book: 1,
    arabic: "الحروف العربية",
    english: "The Arabic Alphabet",
    desc: "All 28 letters, vowels, and read Al-Fatiha",
    color: "#c9a84c",
    videoId: "rEOQmQmApOg",
    data: "ch1"
  }, {
    id: "ch2",
    number: 2,
    book: 1,
    arabic: "هَذَا وَهَذِهِ",
    english: "This Is...",
    desc: "Madinah Book 1 — Demonstrative pronouns, nouns, sentences",
    color: "#8bbd6b",
    videoId: "W56bEvyXaVM",
    data: "ch2"
  }];
  var b1 = typeof window !== "undefined" && window.EXTRA_CHAPTERS || [];
  var b2b3 = typeof window !== "undefined" && window.EXTRA_CHAPTERS_B2B3 || [];
  var ext = [].concat(_toConsumableArray(b1), _toConsumableArray(b2b3)).map(function (ch) {
    return _objectSpread(_objectSpread({}, ch), {}, {
      number: ch.num,
      desc: ch.desc || ch.english,
      data: ch.id
    });
  });
  return [].concat(inline, _toConsumableArray(ext));
};
var buildTajweedChapters = function buildTajweedChapters() {
  var tj = typeof window !== "undefined" && window.TAJWEED_CHAPTERS || [];
  return tj.map(function (ch) {
    return _objectSpread(_objectSpread({}, ch), {}, {
      number: ch.num,
      desc: ch.desc || ch.english,
      data: ch.id
    });
  });
};
var CHAPTERS = buildAllChapters();
var TAJWEED_CHAPTERS = buildTajweedChapters();

// ─── CHAPTER 1 LESSONS (condensed but complete) ────────────────────
var CH1_LESSONS = [{
  id: "c1-l0",
  title: "Why Learn Arabic?",
  subtitle: "The language of the Quran",
  type: "intro",
  xp: 15,
  videoId: "rEOQmQmApOg",
  slides: [{
    type: "welcome",
    heading: "مرحباً بك",
    subheading: "Welcome to Arabic",
    body: "Arabic is the language Allah chose to reveal the Quran. Every word you learn brings you closer to understanding His words directly — without translation."
  }, {
    type: "fact",
    heading: "Did you know?",
    points: ["Arabic has 28 letters — written right to left", "The Quran uses ~2,000 unique root words", "Learning 300 words = understanding 70% of the Quran", "Every Arabic word comes from a 3-letter root"]
  }, {
    type: "alphabet_overview",
    heading: "All 28 Letters",
    body: "We'll learn them in groups. Each letter changes shape at the start, middle, or end of a word.",
    letters: "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي"
  }, {
    type: "tip",
    heading: "How this works",
    body: "Each lesson teaches first. Then a quiz tests only what you just saw. Tap 🔊 on any Arabic word to hear it pronounced.",
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
    q: "Most Arabic words come from a root of how many letters?",
    opts: ["2", "3", "4", "5"],
    ans: 1,
    exp: "Almost all Arabic words come from a 3-letter root."
  }]
}, {
  id: "c1-l1",
  title: "Letters: أ ب ت ث",
  subtitle: "Your first 4 letters",
  type: "letters",
  xp: 25,
  videoId: "rEOQmQmApOg",
  slides: [{
    type: "letter_intro",
    heading: "Group 1 — 4 Letters",
    body: "Study each letter: its name, shape, sound, and a Quranic word. Tap 🔊 to hear."
  }, {
    type: "letter",
    arabic: "أ",
    name: "Alif",
    sound: "'a' or silent",
    shape: "Single vertical stroke — simplest letter",
    word: "أَحَد",
    wordRoman: "Ahad",
    wordMeaning: "One (Allah)",
    context: "قُلْ هُوَ اللهُ أَحَد — Say: He is Allah, the One. (Surah Al-Ikhlas)"
  }, {
    type: "letter",
    arabic: "ب",
    name: "Ba",
    sound: "'b' — like English B",
    shape: "Bowl shape with ONE dot BELOW",
    word: "بِسْمِ",
    wordRoman: "Bismi",
    wordMeaning: "In the name of",
    context: "بِسْمِ اللهِ — In the name of Allah. Said before every action."
  }, {
    type: "letter",
    arabic: "ت",
    name: "Ta",
    sound: "'t' — like English T",
    shape: "Same bowl as Ba, TWO dots ABOVE",
    word: "تَوْبَة",
    wordRoman: "Tawbah",
    wordMeaning: "Repentance",
    context: "اَلتَّوَّابُ — Al-Tawwaab: The Ever-Accepting of Repentance (Allah's name)."
  }, {
    type: "letter",
    arabic: "ث",
    name: "Tha",
    sound: "'th' — like 'th' in three",
    shape: "Same bowl, THREE dots ABOVE",
    word: "ثَوَاب",
    wordRoman: "Thawaab",
    wordMeaning: "Reward from Allah",
    context: "Good deeds earn ثَوَاب — reward from Allah on the Day of Judgement."
  }, {
    type: "pattern",
    heading: "Same shape — different dots!",
    body: "Ba, Ta, Tha share one base. Dots change the letter:",
    items: [{
      arabic: "ب",
      label: "1 dot BELOW = Ba (ب)"
    }, {
      arabic: "ت",
      label: "2 dots ABOVE = Ta (ت)"
    }, {
      arabic: "ث",
      label: "3 dots ABOVE = Tha (ث)"
    }],
    tip: "Dots are everything in Arabic. One wrong dot changes the entire word."
  }],
  quiz: [{
    q: "Which letter has ONE dot BELOW?",
    opts: ["أ (Alif)", "ب (Ba)", "ت (Ta)", "ث (Tha)"],
    ans: 1,
    exp: "Ba (ب) has one dot below. Ta has 2 above, Tha has 3 above."
  }, {
    q: "أَحَد (Ahad) means:",
    opts: ["Praise", "One", "Lord", "Merciful"],
    ans: 1,
    exp: "أَحَد means 'One' — Allah the One, in Surah Al-Ikhlas."
  }, {
    q: "Which letter makes the 'th' sound (as in 'three')?",
    opts: ["أ", "ب", "ت", "ث"],
    ans: 3,
    exp: "Tha (ث) makes the 'th' sound and has 3 dots above."
  }, {
    q: "بِسْمِ اللهِ means:",
    opts: ["In the name of Allah", "Praise be to Allah", "Allah is One", "Allah is Great"],
    ans: 0,
    exp: "بِسْمِ اللهِ = In the name of Allah."
  }]
}, {
  id: "c1-l2",
  title: "Letters: ج ح خ",
  subtitle: "Three throat sounds",
  type: "letters",
  xp: 25,
  videoId: "rEOQmQmApOg",
  slides: [{
    type: "letter_intro",
    heading: "Group 2 — 3 Letters",
    body: "These share one base shape. ح and خ have no English equivalent — they come from the throat."
  }, {
    type: "letter",
    arabic: "ج",
    name: "Jim",
    sound: "'j' — like English J",
    shape: "Curved shape with ONE dot INSIDE",
    word: "جَنَّة",
    wordRoman: "Jannah",
    wordMeaning: "Paradise",
    context: "جَنَّة is Paradise — the eternal reward for the believers."
  }, {
    type: "letter",
    arabic: "ح",
    name: "Ha (deep)",
    sound: "Strong 'h' from the throat — breathe hard on cold glass",
    shape: "Same curved shape, NO dot",
    word: "حَمْد",
    wordRoman: "Hamd",
    wordMeaning: "Praise",
    context: "اَلْحَمْدُ لِلّٰهِ — All praise belongs to Allah. (Opening of Al-Fatiha)"
  }, {
    type: "letter",
    arabic: "خ",
    name: "Kha",
    sound: "Rasping 'kh' from back of throat — like Scottish 'loch'",
    shape: "Same curved shape, ONE dot ABOVE",
    word: "خَيْر",
    wordRoman: "Khayr",
    wordMeaning: "Goodness / Blessing",
    context: "اَللّٰهُ خَيْر — Allah is the best of all good."
  }, {
    type: "pattern",
    heading: "One shape — 3 letters",
    body: "The dot position is everything:",
    items: [{
      arabic: "ج",
      label: "Dot inside = Jim (ج)"
    }, {
      arabic: "ح",
      label: "No dot = Ha (ح)"
    }, {
      arabic: "خ",
      label: "Dot above = Kha (خ)"
    }],
    tip: "ح (no dot) is a breathy H. It appears in اَلْحَمْدُ, رَحْمَة, مُحَمَّد."
  }],
  quiz: [{
    q: "Which letter has NO dot?",
    opts: ["ج (Jim)", "ح (Ha)", "خ (Kha)", "ب (Ba)"],
    ans: 1,
    exp: "Ha (ح) has no dot. Jim has a dot inside, Kha has one above."
  }, {
    q: "جَنَّة (Jannah) means:",
    opts: ["Hellfire", "Prayer", "Paradise", "Fasting"],
    ans: 2,
    exp: "جَنَّة means Paradise."
  }, {
    q: "اَلْحَمْد means:",
    opts: ["One", "Praise", "Mercy", "Guidance"],
    ans: 1,
    exp: "الحمد = The Praise. Alhamdulillah = All praise is for Allah."
  }, {
    q: "Kha (خ) sounds like:",
    opts: ["J in jam", "H in hot", "Kh in loch (Scottish)", "Ch in cheese"],
    ans: 2,
    exp: "Kha (خ) is a rasping throat sound, like the Scottish 'loch'."
  }]
}, {
  id: "c1-l3",
  title: "Short Vowels — حَرَكَات",
  subtitle: "Fatha · Damma · Kasra",
  type: "grammar",
  xp: 35,
  videoId: "rEOQmQmApOg",
  slides: [{
    type: "rule",
    heading: "Arabic Letters Need Vowels",
    body: "Arabic letters are consonants only. The tiny marks written above or below — حَرَكَات (harakat) — add the vowel sound. Without them, you cannot read correctly."
  }, {
    type: "vowel",
    arabic: "فَتْحَة",
    symbol: "َ",
    name: "Fatha",
    sound: "Short 'a' — like 'a' in cat",
    position: "Written ABOVE the letter",
    examples: [{
      arabic: "بَ",
      roman: "ba",
      breakdown: "ب + fatha = 'ba'"
    }, {
      arabic: "كَتَبَ",
      roman: "kataba",
      breakdown: "He wrote — k+a, t+a, b+a"
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
    sound: "Short 'u' — like 'u' in put",
    position: "Written ABOVE (looks like a small و)",
    examples: [{
      arabic: "بُ",
      roman: "bu",
      breakdown: "ب + damma = 'bu'"
    }, {
      arabic: "نُوْر",
      roman: "noor",
      breakdown: "نُ=nu, وْر=or → noor"
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
    sound: "Short 'i' — like 'i' in sit",
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
    heading: "Read These Words",
    instruction: "Use the vowel marks. Tap 🔊 to check your pronunciation.",
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
      arabic: "مَسْجِد",
      roman: "mas-jid",
      meaning: "Mosque"
    }]
  }],
  quiz: [{
    q: "Fatha (فَتْحَة) produces which sound?",
    opts: ["Short 'u' (put)", "Short 'a' (cat)", "Short 'i' (sit)", "Long 'aa'"],
    ans: 1,
    exp: "Fatha is above the letter and gives a short 'a' sound."
  }, {
    q: "Where is Kasra (كَسْرَة) written?",
    opts: ["Above the letter", "Below the letter", "Inside the letter", "After the letter"],
    ans: 1,
    exp: "Kasra is written BELOW the letter, giving a short 'i' sound."
  }, {
    q: "How do you read بِسْمِ?",
    opts: ["basma", "busmu", "bismi", "besme"],
    ans: 2,
    exp: "بِ=bi (kasra), سْ=s (sukoon), مِ=mi (kasra) → bismi"
  }, {
    q: "نُوْر (Noor) means:",
    opts: ["Darkness", "Light", "Sky", "Star"],
    ans: 1,
    exp: "نُوْر means Light. Allah is the Light of the heavens and the earth."
  }]
}, {
  id: "c1-l4",
  title: "Sukoon & Shadda",
  subtitle: "سُكُوْن · شَدَّة",
  type: "grammar",
  xp: 30,
  videoId: "rEOQmQmApOg",
  slides: [{
    type: "rule",
    heading: "Two More Vital Marks",
    body: "Sukoon = no vowel, the letter stops the sound. Shadda = doubled consonant, emphasised."
  }, {
    type: "vowel",
    arabic: "سُكُوْن",
    symbol: "ْ",
    name: "Sukoon",
    sound: "No vowel — the letter stops",
    position: "Small circle ABOVE the letter",
    examples: [{
      arabic: "مِنْ",
      roman: "min",
      breakdown: "مِ=mi, نْ=n(stop) → min"
    }, {
      arabic: "قُلْ",
      roman: "qul",
      breakdown: "قُ=qu, لْ=l(stop) → qul"
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
    sound: "Doubled consonant — hold the sound",
    position: "Small 'w' shape ABOVE the letter",
    examples: [{
      arabic: "رَبّ",
      roman: "Rabb",
      breakdown: "رَ=ra, بّ=doubled ba → Rabb"
    }, {
      arabic: "إِنَّ",
      roman: "Inna",
      breakdown: "إِ=i, نَّ=doubled na → Inna"
    }],
    qExample: {
      arabic: "إِنَّ اللهَ",
      roman: "Innallaha",
      meaning: "Indeed, Allah..."
    }
  }, {
    type: "reading_practice",
    heading: "Spot Sukoon & Shadda",
    instruction: "Find the ْ (sukoon) and ّ (shadda) in each phrase:",
    words: [{
      arabic: "بِسْمِ اللهِ",
      roman: "Bismillah",
      meaning: "سْ has sukoon"
    }, {
      arabic: "الرَّحْمَن",
      roman: "Ar-Rahman",
      meaning: "رّ has shadda, حْ has sukoon"
    }, {
      arabic: "رَبِّ الْعَالَمِيْن",
      roman: "Rabbil 'aalameen",
      meaning: "بّ has shadda"
    }]
  }],
  quiz: [{
    q: "Sukoon means the letter has:",
    opts: ["A long vowel", "No vowel — stops", "A doubled sound", "A nasal sound"],
    ans: 1,
    exp: "Sukoon means stillness — no vowel, the letter acts as a stop."
  }, {
    q: "What does Shadda indicate?",
    opts: ["Letter is silent", "Short 'a' vowel", "Doubled/emphasized consonant", "Long vowel follows"],
    ans: 2,
    exp: "Shadda doubles the consonant. رَبّ = Rabb (not Rab)."
  }, {
    q: "In قُلْ (Qul), which letter has sukoon?",
    opts: ["ق (Qaf)", "ل (Lam)", "Both", "Neither"],
    ans: 1,
    exp: "Lam (لْ) has the sukoon in قُلْ."
  }, {
    q: "Shadda looks like:",
    opts: ["Small circle", "Diagonal line", "Small 'w' shape above", "Dot below"],
    ans: 2,
    exp: "Shadda (ّ) looks like a small curved 'w' above the letter."
  }]
}, {
  id: "c1-l5",
  title: "Reading Al-Fatiha",
  subtitle: "Word by word",
  type: "quran",
  xp: 50,
  videoId: "rEOQmQmApOg",
  slides: [{
    type: "rule",
    heading: "You're Ready to Read",
    body: "You know all vowel marks now. Al-Fatiha is recited 17 times daily in Salah. Let's break it down word by word. Tap 🔊 on any phrase to hear it."
  }, {
    type: "quran_verse",
    arabic: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    roman: "Bismillahir rahmanir raheem",
    meaning: "In the name of Allah, the Most Gracious, the Most Merciful",
    breakdown: [{
      word: "بِسْمِ",
      meaning: "In the name of",
      note: "بِ=in, اِسْم=name"
    }, {
      word: "اللهِ",
      meaning: "Allah",
      note: "The lam has a shadda"
    }, {
      word: "الرَّحْمٰنِ",
      meaning: "The Most Gracious",
      note: "رّ has shadda"
    }, {
      word: "الرَّحِيْمِ",
      meaning: "The Most Merciful",
      note: "Ongoing mercy"
    }]
  }, {
    type: "quran_verse",
    arabic: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْن",
    roman: "Alhamdu lillahi rabbil 'aalameen",
    meaning: "All praise is for Allah, Lord of all the worlds",
    breakdown: [{
      word: "اَلْحَمْدُ",
      meaning: "All praise",
      note: "الْ=the, حَمْد=praise"
    }, {
      word: "لِلّٰهِ",
      meaning: "for Allah",
      note: "لِ=for"
    }, {
      word: "رَبِّ",
      meaning: "Lord of",
      note: "بّ has shadda"
    }, {
      word: "الْعَالَمِيْن",
      meaning: "all the worlds",
      note: "يْن=plural ending"
    }]
  }, {
    type: "quran_verse",
    arabic: "مَالِكِ يَوْمِ الدِّيْن",
    roman: "Maaliki yawmid-deen",
    meaning: "Master of the Day of Judgement",
    breakdown: [{
      word: "مَالِك",
      meaning: "Master/Owner",
      note: "Root: م-ل-ك"
    }, {
      word: "يَوْم",
      meaning: "Day",
      note: "Learned in alphabet chapter"
    }, {
      word: "الدِّيْن",
      meaning: "Judgement/Religion",
      note: "دّ has shadda"
    }]
  }, {
    type: "quran_verse",
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْن",
    roman: "Iyyaaka na'budu wa iyyaaka nasta'een",
    meaning: "You alone we worship, and You alone we ask for help",
    breakdown: [{
      word: "إِيَّاكَ",
      meaning: "You alone",
      note: "Emphatic — only You"
    }, {
      word: "نَعْبُدُ",
      meaning: "we worship",
      note: "نَـ prefix = we (present)"
    }, {
      word: "نَسْتَعِيْن",
      meaning: "we seek help",
      note: "Root: ع-و-ن (help)"
    }]
  }],
  quiz: [{
    q: "اَلْحَمْدُ لِلّٰهِ means:",
    opts: ["In the name of Allah", "All praise is for Allah", "Guide us to the path", "The Most Merciful"],
    ans: 1,
    exp: "الحمد لله = Alhamdulillah = All praise is for Allah."
  }, {
    q: "مَالِك in مَالِكِ يَوْمِ الدِّيْن means:",
    opts: ["Merciful", "Gracious", "Master/Owner", "Guide"],
    ans: 2,
    exp: "مَالِك means Master or Owner. Allah is the Master of the Day of Judgement."
  }, {
    q: "إِيَّاكَ نَعْبُدُ means:",
    opts: ["Guide us to the path", "You alone we worship", "All praise for Allah", "The Most Merciful"],
    ans: 1,
    exp: "إِيَّاكَ نَعْبُدُ = You alone we worship — exclusive devotion to Allah."
  }, {
    q: "Al-Fatiha is recited how many times daily?",
    opts: ["5", "10", "17", "25"],
    ans: 2,
    exp: "Al-Fatiha is recited in every rak'ah — 17 times across 5 prayers."
  }]
}];

// ─── CHAPTER 2 LESSONS ─────────────────────────────────────────────
var CH2_LESSONS = [{
  id: "c2-l0",
  title: "What is هَذَا?",
  subtitle: "Demonstrative pronouns — intro",
  type: "intro",
  xp: 20,
  videoId: "W56bEvyXaVM",
  slides: [{
    type: "welcome",
    heading: "هَذَا",
    subheading: "This is...",
    body: "In this chapter we learn the most important sentence pattern in Arabic: هَذَا (this — masculine) and هَذِهِ (this — feminine). These two words unlock hundreds of sentences."
  }, {
    type: "fact",
    heading: "What you'll learn",
    points: ["هَذَا — 'this' for masculine nouns", "هَذِهِ — 'this' for feminine nouns", "Tanween (ٌ) — how to say 'a house', 'a book'", "The definite article الـ — 'the house', 'the book'", "Building simple sentences: هَذَا بَيْتٌ = This is a house"]
  }, {
    type: "rule",
    heading: "Arabic Nouns Have Gender",
    body: "Every noun in Arabic is either masculine (مُذَكَّر) or feminine (مُؤَنَّث). You must use the right 'this' for each.\n\nهَذَا + masculine noun\nهَذِهِ + feminine noun",
    tip: "Feminine nouns usually end in ة (ta marbuta). When you see ة at the end, use هَذِهِ."
  }],
  quiz: [{
    q: "هَذَا is used with which type of noun?",
    opts: ["Feminine", "Masculine", "Both", "Neither"],
    ans: 1,
    exp: "هَذَا is the masculine 'this'. هَذِهِ is the feminine 'this'."
  }, {
    q: "Feminine nouns in Arabic usually end with:",
    opts: ["ب", "ا", "ة", "ن"],
    ans: 2,
    exp: "Feminine nouns usually end in ة (ta marbuta). e.g. مَدْرَسَة (school), غُرْفَة (room)."
  }, {
    q: "How do you say 'This is...' for a masculine noun?",
    opts: ["هَذِهِ", "تِلْكَ", "هَذَا", "ذَلِكَ"],
    ans: 2,
    exp: "هَذَا = This is (masculine). هَذِهِ = This is (feminine)."
  }]
}, {
  id: "c2-l1",
  title: "Masculine Nouns",
  subtitle: "هَذَا + 10 essential words",
  type: "vocab",
  xp: 30,
  videoId: "W56bEvyXaVM",
  slides: [{
    type: "letter_intro",
    heading: "10 Masculine Nouns",
    body: "All these nouns are masculine — used with هَذَا. Tap 🔊 to hear each word. Notice the ٌ ending — that means 'a ___' (indefinite)."
  }, {
    type: "vocab_list",
    words: [{
      arabic: "بَيْتٌ",
      roman: "baytun",
      meaning: "a house",
      note: "هَذَا بَيْتٌ = This is a house"
    }, {
      arabic: "مَسْجِدٌ",
      roman: "masjidun",
      meaning: "a mosque",
      note: "هَذَا مَسْجِدٌ = This is a mosque"
    }, {
      arabic: "بَابٌ",
      roman: "baabun",
      meaning: "a door",
      note: "هَذَا بَابٌ = This is a door"
    }, {
      arabic: "كِتَابٌ",
      roman: "kitaabun",
      meaning: "a book",
      note: "هَذَا كِتَابٌ = This is a book"
    }, {
      arabic: "قَلَمٌ",
      roman: "qalamun",
      meaning: "a pen",
      note: "هَذَا قَلَمٌ = This is a pen"
    }]
  }, {
    type: "vocab_list",
    words: [{
      arabic: "مِفْتَاحٌ",
      roman: "miftaahun",
      meaning: "a key",
      note: "هَذَا مِفْتَاحٌ = This is a key"
    }, {
      arabic: "كُرْسِيٌّ",
      roman: "kursiyyun",
      meaning: "a chair",
      note: "هَذَا كُرْسِيٌّ = This is a chair"
    }, {
      arabic: "كَلْبٌ",
      roman: "kalbun",
      meaning: "a dog",
      note: "هَذَا كَلْبٌ = This is a dog"
    }, {
      arabic: "رَجُلٌ",
      roman: "rajulun",
      meaning: "a man",
      note: "هَذَا رَجُلٌ = This is a man"
    }, {
      arabic: "وَلَدٌ",
      roman: "waladun",
      meaning: "a boy",
      note: "هَذَا وَلَدٌ = This is a boy"
    }]
  }, {
    type: "rule",
    heading: "The Tanween ٌ",
    body: "The double damma ٌ on the end of a word means 'a ___' (indefinite, like English 'a house').\n\nبَيْتٌ = a house\nكِتَابٌ = a book\nقَلَمٌ = a pen\n\nWhen reading, pronounce it as 'un' at the end:\nbay-TUN, ki-TAA-bun, qa-LA-mun",
    tip: "In the Quran you see tanween everywhere. Now you know what it means."
  }],
  quiz: [{
    q: "كِتَابٌ means:",
    opts: ["a door", "a pen", "a book", "a chair"],
    ans: 2,
    exp: "كِتَابٌ = a book. هَذَا كِتَابٌ = This is a book."
  }, {
    q: "The ٌ on the end of a noun means:",
    opts: ["the (definite)", "a/an (indefinite)", "two", "plural"],
    ans: 1,
    exp: "Tanween ٌ = indefinite 'a/an'. It's pronounced 'un': baytUN = a house."
  }, {
    q: "هَذَا رَجُلٌ means:",
    opts: ["This is a boy", "This is a man", "This is a teacher", "This is a book"],
    ans: 1,
    exp: "رَجُلٌ = a man. هَذَا رَجُلٌ = This is a man."
  }, {
    q: "قَلَمٌ means:",
    opts: ["a key", "a door", "a chair", "a pen"],
    ans: 3,
    exp: "قَلَمٌ = a pen. هَذَا قَلَمٌ = This is a pen."
  }, {
    q: "مَسْجِدٌ means:",
    opts: ["a house", "a mosque", "a book", "a door"],
    ans: 1,
    exp: "مَسْجِدٌ = a mosque. هَذَا مَسْجِدٌ = This is a mosque."
  }]
}, {
  id: "c2-l2",
  title: "Feminine Nouns",
  subtitle: "هَذِهِ + 10 essential words",
  type: "vocab",
  xp: 30,
  videoId: "W56bEvyXaVM",
  slides: [{
    type: "letter_intro",
    heading: "10 Feminine Nouns",
    body: "These nouns all end in ة (ta marbuta) — the mark of femininity. Use هَذِهِ with all of them. Tap 🔊 to hear."
  }, {
    type: "vocab_list",
    words: [{
      arabic: "مَدْرَسَةٌ",
      roman: "madrasatun",
      meaning: "a school",
      note: "هَذِهِ مَدْرَسَةٌ = This is a school"
    }, {
      arabic: "غُرْفَةٌ",
      roman: "ghurfatun",
      meaning: "a room",
      note: "هَذِهِ غُرْفَةٌ = This is a room"
    }, {
      arabic: "سَيَّارَةٌ",
      roman: "sayyaaratun",
      meaning: "a car",
      note: "هَذِهِ سَيَّارَةٌ = This is a car"
    }, {
      arabic: "شَجَرَةٌ",
      roman: "shajaratun",
      meaning: "a tree",
      note: "هَذِهِ شَجَرَةٌ = This is a tree"
    }, {
      arabic: "طَاوِلَةٌ",
      roman: "taawilatun",
      meaning: "a table",
      note: "هَذِهِ طَاوِلَةٌ = This is a table"
    }]
  }, {
    type: "vocab_list",
    words: [{
      arabic: "نَافِذَةٌ",
      roman: "naafidhatan",
      meaning: "a window",
      note: "هَذِهِ نَافِذَةٌ = This is a window"
    }, {
      arabic: "بِنْتٌ",
      roman: "bintun",
      meaning: "a girl",
      note: "هَذِهِ بِنْتٌ = This is a girl (exception: no ة)"
    }, {
      arabic: "امْرَأَةٌ",
      roman: "imraatun",
      meaning: "a woman",
      note: "هَذِهِ امْرَأَةٌ = This is a woman"
    }, {
      arabic: "هِرَّةٌ",
      roman: "hirratun",
      meaning: "a cat",
      note: "هَذِهِ هِرَّةٌ = This is a cat"
    }, {
      arabic: "حَقِيبَةٌ",
      roman: "haqeebatun",
      meaning: "a bag",
      note: "هَذِهِ حَقِيبَةٌ = This is a bag"
    }]
  }, {
    type: "rule",
    heading: "بِنْتٌ — The Exception",
    body: "Most feminine words end in ة, but some don't. بِنْتٌ (girl) has no ة but is still feminine. How do you know? Memorize these exceptions or check with a dictionary.\n\nOther exceptions: أُمٌّ (mother), أَرْضٌ (earth), شَمْسٌ (sun).",
    tip: "When in doubt — if it's naturally female (woman, girl, mother) it's feminine regardless of ending."
  }],
  quiz: [{
    q: "مَدْرَسَةٌ means:",
    opts: ["a mosque", "a house", "a school", "a room"],
    ans: 2,
    exp: "مَدْرَسَةٌ = a school. هَذِهِ مَدْرَسَةٌ = This is a school."
  }, {
    q: "هَذِهِ سَيَّارَةٌ means:",
    opts: ["This is a house", "This is a car", "This is a tree", "This is a school"],
    ans: 1,
    exp: "سَيَّارَةٌ = a car. هَذِهِ سَيَّارَةٌ = This is a car."
  }, {
    q: "Why is بِنْتٌ (girl) feminine even though it has no ة?",
    opts: ["It's not feminine", "It naturally refers to a female", "It has a hidden ة", "It's a mistake"],
    ans: 1,
    exp: "Words that naturally refer to females are feminine even without ة. بِنْت = girl is always feminine."
  }, {
    q: "Which of these is feminine?",
    opts: ["كِتَابٌ (book)", "قَلَمٌ (pen)", "غُرْفَةٌ (room)", "بَابٌ (door)"],
    ans: 2,
    exp: "غُرْفَةٌ ends in ة (ta marbuta), making it feminine. The others are masculine."
  }, {
    q: "هَذِهِ هِرَّةٌ means:",
    opts: ["This is a dog", "This is a cat", "This is a tree", "This is a window"],
    ans: 1,
    exp: "هِرَّةٌ = a cat. هَذِهِ هِرَّةٌ = This is a cat."
  }]
}, {
  id: "c2-l3",
  title: "الـ — The Definite Article",
  subtitle: "بَيْتٌ → البَيْتُ",
  type: "grammar",
  xp: 30,
  videoId: "W56bEvyXaVM",
  slides: [{
    type: "rule",
    heading: "From 'a' to 'the'",
    body: "In English: 'a house' → 'the house'\nIn Arabic: بَيْتٌ → البَيْتُ\n\nAdd الـ to the front and the tanween ٌ disappears.\n\nبَيْتٌ = a house\nاَلْبَيْتُ = the house\n\nكِتَابٌ = a book\naَلْكِتَابُ = the book"
  }, {
    type: "rule",
    heading: "Sun Letters & Moon Letters",
    body: "When الـ attaches to certain letters, the lam (ل) becomes silent — absorbed into the next letter. These are called Sun Letters (الحروف الشمسية).\n\nWith Moon Letters the lam stays clear.",
    items: [{
      arabic: "اَلشَّمْس",
      label: "Sun Letter — الشَّمْس (the sun). Lam absorbed → 'ash-SHAMS'"
    }, {
      arabic: "اَلْقَمَر",
      label: "Moon Letter — الْقَمَر (the moon). Lam clear → 'al-QAMAR'"
    }],
    tip: "Sun letters: ت ث د ذ ر ز س ش ص ض ط ظ ل ن — letters that sound like 'ts/ds/rs' where tongue touches teeth/ridge."
  }, {
    type: "reading_practice",
    heading: "بَيْتٌ vs اَلْبَيْتُ",
    instruction: "Compare indefinite and definite. Tap 🔊 to hear the difference:",
    words: [{
      arabic: "بَيْتٌ ← اَلْبَيْتُ",
      roman: "baytun → al-baytu",
      meaning: "a house → the house"
    }, {
      arabic: "كِتَابٌ ← اَلْكِتَابُ",
      roman: "kitaabun → al-kitaabu",
      meaning: "a book → the book"
    }, {
      arabic: "مَسْجِدٌ ← اَلْمَسْجِدُ",
      roman: "masjidun → al-masjidu",
      meaning: "a mosque → the mosque"
    }, {
      arabic: "شَمْسٌ ← اَلشَّمْسُ",
      roman: "shamsun → ash-shamsu",
      meaning: "a sun → the sun (sun letter!)"
    }]
  }],
  quiz: [{
    q: "What happens to tanween ٌ when you add الـ?",
    opts: ["It doubles", "It disappears", "It moves below", "Nothing changes"],
    ans: 1,
    exp: "Tanween ٌ means indefinite ('a'). When you add الـ for 'the', the tanween disappears."
  }, {
    q: "اَلْكِتَابُ means:",
    opts: ["a book", "the book", "books", "this book"],
    ans: 1,
    exp: "اَلْكِتَابُ = the book (definite). كِتَابٌ = a book (indefinite)."
  }, {
    q: "In اَلشَّمْسُ (the sun), the lam is:",
    opts: ["Clearly pronounced", "Silent — absorbed into Shin", "Dropped completely", "Doubled"],
    ans: 1,
    exp: "Shin (ش) is a Sun Letter. The lam of الـ is absorbed: al-Shams → ASH-shams."
  }, {
    q: "Which is correct for 'the mosque'?",
    opts: ["مَسْجِدٌ", "اَلْمَسْجِدُ", "هَذَا مَسْجِدٌ", "مَسَاجِد"],
    ans: 1,
    exp: "اَلْمَسْجِدُ = the mosque. The الـ makes it definite."
  }]
}, {
  id: "c2-l4",
  title: "Building Sentences",
  subtitle: "هَذَا/هَذِهِ in action",
  type: "grammar",
  xp: 35,
  videoId: "W56bEvyXaVM",
  slides: [{
    type: "rule",
    heading: "The Arabic Sentence",
    body: "Arabic doesn't need 'is' in a simple sentence.\n\nEnglish: 'This is a house'\nArabic: هَذَا بَيْتٌ\n(literally: 'This a-house')\n\nNo verb needed. This is called a جُمْلَة اِسْمِيَّة (nominal sentence)."
  }, {
    type: "vocab_list",
    heading: "Sentences — Masculine",
    words: [{
      arabic: "هَذَا بَيْتٌ",
      roman: "haadha baytun",
      meaning: "This is a house"
    }, {
      arabic: "هَذَا كِتَابٌ",
      roman: "haadha kitaabun",
      meaning: "This is a book"
    }, {
      arabic: "هَذَا مَسْجِدٌ",
      roman: "haadha masjidun",
      meaning: "This is a mosque"
    }, {
      arabic: "هَذَا قَلَمٌ",
      roman: "haadha qalamun",
      meaning: "This is a pen"
    }, {
      arabic: "هَذَا رَجُلٌ",
      roman: "haadha rajulun",
      meaning: "This is a man"
    }]
  }, {
    type: "vocab_list",
    heading: "Sentences — Feminine",
    words: [{
      arabic: "هَذِهِ مَدْرَسَةٌ",
      roman: "haadhihi madrasatun",
      meaning: "This is a school"
    }, {
      arabic: "هَذِهِ سَيَّارَةٌ",
      roman: "haadhihi sayyaaratun",
      meaning: "This is a car"
    }, {
      arabic: "هَذِهِ غُرْفَةٌ",
      roman: "haadhihi ghurfatun",
      meaning: "This is a room"
    }, {
      arabic: "هَذِهِ شَجَرَةٌ",
      roman: "haadhihi shajaratun",
      meaning: "This is a tree"
    }, {
      arabic: "هَذِهِ بِنْتٌ",
      roman: "haadhihi bintun",
      meaning: "This is a girl"
    }]
  }, {
    type: "rule",
    heading: "Ask a Question: مَا هَذَا؟",
    body: "To ask 'What is this?'\n\nمَا هَذَا؟ = What is this? (masculine)\nمَا هَذِهِ؟ = What is this? (feminine)\n\nAnswer: هَذَا بَيْتٌ = This is a house.",
    tip: "مَا means 'what'. You'll see مَا throughout the Quran: مَا خَلَقَ = what He created."
  }],
  quiz: [{
    q: "هَذَا كِتَابٌ means:",
    opts: ["This is a pen", "This is a book", "This is a school", "What is this?"],
    ans: 1,
    exp: "هَذَا كِتَابٌ = This is a book. هَذَا = this (m), كِتَابٌ = a book."
  }, {
    q: "How do you say 'This is a car' in Arabic?",
    opts: ["هَذَا سَيَّارَةٌ", "هَذِهِ سَيَّارَةٌ", "هَذِهِ كِتَابٌ", "هَذَا مَدْرَسَةٌ"],
    ans: 1,
    exp: "سَيَّارَة is feminine (ends in ة), so use هَذِهِ → هَذِهِ سَيَّارَةٌ."
  }, {
    q: "In Arabic, a simple 'This is a house' sentence needs:",
    opts: ["A verb", "No verb", "Two verbs", "A pronoun"],
    ans: 1,
    exp: "Arabic nominal sentences don't need 'is'. هَذَا بَيْتٌ literally means 'This a-house'."
  }, {
    q: "مَا هَذَا؟ means:",
    opts: ["This is a house", "What is this?", "That is a book", "What is that?"],
    ans: 1,
    exp: "مَا = what, هَذَا = this → مَا هَذَا؟ = What is this?"
  }, {
    q: "Which sentence is correct for 'This is a room'?",
    opts: ["هَذَا غُرْفَةٌ", "هَذِهِ غُرْفَةٌ", "هَذَا غُرْفَةُ", "هَذِهِ غُرْفَةْ"],
    ans: 1,
    exp: "غُرْفَةٌ is feminine (ends in ة) → هَذِهِ غُرْفَةٌ = This is a room."
  }]
}, {
  id: "c2-l5",
  title: "مَنْ هَذَا؟ — Who is this?",
  subtitle: "Professions & identities",
  type: "vocab",
  xp: 40,
  videoId: "W56bEvyXaVM",
  slides: [{
    type: "rule",
    heading: "مَنْ — Who",
    body: "You learned مَا (what). Now learn مَنْ (who).\n\nمَا هَذَا؟ = What is this?\nمَنْ هَذَا؟ = Who is this?\n\nمَنْ is used for people."
  }, {
    type: "vocab_list",
    heading: "People & Professions",
    words: [{
      arabic: "مُدَرِّسٌ",
      roman: "mudarrisun",
      meaning: "a teacher (m)",
      note: "هَذَا مُدَرِّسٌ = This is a teacher"
    }, {
      arabic: "مُدَرِّسَةٌ",
      roman: "mudarrisatun",
      meaning: "a teacher (f)",
      note: "هَذِهِ مُدَرِّسَةٌ = This is a teacher (f)"
    }, {
      arabic: "طَالِبٌ",
      roman: "taalibun",
      meaning: "a student (m)",
      note: "هَذَا طَالِبٌ = This is a student"
    }, {
      arabic: "طَالِبَةٌ",
      roman: "taalibatun",
      meaning: "a student (f)",
      note: "هَذِهِ طَالِبَةٌ = This is a student (f)"
    }, {
      arabic: "طَبِيبٌ",
      roman: "tabeebun",
      meaning: "a doctor (m)",
      note: "هَذَا طَبِيبٌ = This is a doctor"
    }]
  }, {
    type: "vocab_list",
    heading: "More People",
    words: [{
      arabic: "تَاجِرٌ",
      roman: "taajirun",
      meaning: "a merchant",
      note: "هَذَا تَاجِرٌ = This is a merchant"
    }, {
      arabic: "كَاتِبٌ",
      roman: "kaatibun",
      meaning: "a writer/secretary",
      note: "Root: ك-ت-ب (to write)"
    }, {
      arabic: "وَزِيرٌ",
      roman: "wazeerun",
      meaning: "a minister",
      note: "هَذَا وَزِيرٌ = This is a minister"
    }, {
      arabic: "أُسْتَاذٌ",
      roman: "ustadhun",
      meaning: "a professor",
      note: "The word Ustad comes from here!"
    }, {
      arabic: "مُهَنْدِسٌ",
      roman: "muhandisun",
      meaning: "an engineer",
      note: "هَذَا مُهَنْدِسٌ = This is an engineer"
    }]
  }, {
    type: "rule",
    heading: "Pattern: مُـَـِّسٌ = Doer",
    body: "Notice مُدَرِّسٌ (teacher) and مُهَنْدِسٌ (engineer) both start with مُـ.\n\nIn Arabic, مُـ at the start often means 'one who does ___'. This is from Verb Form II — you'll learn this in Book 2.",
    tip: "طَالِبٌ comes from the root ط-ل-ب meaning 'to seek/request'. A طَالِب is a seeker of knowledge."
  }],
  quiz: [{
    q: "مَنْ هَذَا؟ means:",
    opts: ["What is this?", "Who is this?", "Where is this?", "How is this?"],
    ans: 1,
    exp: "مَنْ = who. مَنْ هَذَا؟ = Who is this?"
  }, {
    q: "طَالِبٌ means:",
    opts: ["a teacher", "a doctor", "a student", "a merchant"],
    ans: 2,
    exp: "طَالِبٌ = a student. It comes from the root ط-ل-ب meaning 'to seek'."
  }, {
    q: "How do you say 'This is a female teacher'?",
    opts: ["هَذَا مُدَرِّسٌ", "هَذِهِ مُدَرِّسَةٌ", "هَذَا مُدَرِّسَةٌ", "هَذِهِ مُدَرِّسٌ"],
    ans: 1,
    exp: "Female teacher = مُدَرِّسَةٌ (with ة). هَذِهِ مُدَرِّسَةٌ = This is a (female) teacher."
  }, {
    q: "أُسْتَاذٌ means:",
    opts: ["student", "engineer", "minister", "professor/teacher"],
    ans: 3,
    exp: "أُسْتَاذٌ = professor or respected teacher. You say 'Ustad' in Urdu — same Arabic origin!"
  }, {
    q: "طَبِيبٌ means:",
    opts: ["a teacher", "a doctor", "a student", "a writer"],
    ans: 1,
    exp: "طَبِيبٌ = a doctor. هَذَا طَبِيبٌ = This is a doctor."
  }]
}];
var ALL_LESSONS = {
  ch1: CH1_LESSONS,
  ch2: CH2_LESSONS
};

// Load external chapter lessons dynamically
var getLessons = function getLessons(chapterId) {
  var _ch$slides$, _ch$slides$2;
  if (ALL_LESSONS[chapterId]) return ALL_LESSONS[chapterId];
  // Find from external data
  var allExt = [].concat(_toConsumableArray(typeof window !== "undefined" && window.EXTRA_CHAPTERS || []), _toConsumableArray(typeof window !== "undefined" && window.EXTRA_CHAPTERS_B2B3 || []), _toConsumableArray(typeof window !== "undefined" && window.TAJWEED_CHAPTERS || []));
  var ch = allExt.find(function (c) {
    return c.id === chapterId;
  });
  if (!ch || !ch.slides) return [];
  // Each external chapter IS a single lesson with slides + quiz
  return [{
    id: chapterId + "-main",
    title: ch.english,
    subtitle: ch.arabic,
    type: ((_ch$slides$ = ch.slides[0]) === null || _ch$slides$ === void 0 ? void 0 : _ch$slides$.type) === "fact" || ((_ch$slides$2 = ch.slides[0]) === null || _ch$slides$2 === void 0 ? void 0 : _ch$slides$2.type) === "letter_intro" ? "grammar" : "vocab",
    xp: ch.quiz ? ch.quiz.length * 10 + 20 : 30,
    videoId: ch.videoId,
    slides: ch.slides,
    quiz: ch.quiz || []
  }];
};

// ─── STORE / LOAD ──────────────────────────────────────────────────
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
  Check: function Check() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
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
  Fire: function Fire() {
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
    }));
  },
  Play: function Play() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    }));
  },
  Speaker: function Speaker() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
    }));
  },
  Video: function Video() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "23 7 16 12 23 17 23 7"
    }), /*#__PURE__*/React.createElement("rect", {
      width: "15",
      height: "14",
      x: "1",
      y: "5",
      rx: "2"
    }));
  }
};

// ─── SPEAK BUTTON ──────────────────────────────────────────────────
function SpeakBtn(_ref) {
  var text = _ref.text,
    verseId = _ref.verseId,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var handleSpeak = function handleSpeak(e) {
    e.stopPropagation();
    setActive(true);
    if (verseId) {
      // Qari recitation from everyayah.com (Mishary Alafasy 128kbps)
      var audio = new Audio("https://everyayah.com/data/Alafasy_128kbps/".concat(verseId, ".mp3"));
      audio.play().catch(function () {
        // Fallback to TTS if audio fails
        speak(text);
      });
      audio.onended = function () {
        return setActive(false);
      };
      setTimeout(function () {
        return setActive(false);
      }, 8000);
    } else {
      // General Arabic — use Web Speech API
      speak(text);
      setTimeout(function () {
        return setActive(false);
      }, 1200);
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: handleSpeak,
    style: _objectSpread({
      background: active ? "".concat(C.gold, "33") : "".concat(C.gold, "15"),
      border: "1px solid ".concat(active ? C.gold : C.gold + "44"),
      borderRadius: 8,
      padding: "5px 10px",
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      color: active ? C.gold : verseId ? C.gold : C.muted,
      cursor: "pointer",
      fontSize: 12,
      transition: "all 0.2s"
    }, style),
    title: verseId ? "Qari recitation" : "Listen"
  }, /*#__PURE__*/React.createElement(IC.Speaker, null), " ", active ? "▶" : verseId ? "🕋" : "🔊");
}

// ─── VIDEO PLAYER ──────────────────────────────────────────────────
// PDF filenames map for Tajweed chapters
var TJ_PDFS = {
  tj1: "Ch01-Introduction-to-Tajweed.pdf",
  tj2: "Ch02-Makhaarij-Articulation-Points.pdf",
  tj3: "Ch03-Sifaat-Letter-Characteristics.pdf",
  tj4: "Ch04-Noon-Sakinah-Izhar.pdf",
  tj5: "Ch05-Noon-Sakinah-Idgham.pdf",
  tj6: "Ch06-Noon-Sakinah-Iqlab.pdf",
  tj7: "Ch07-Noon-Sakinah-Ikhfa.pdf",
  tj8: "Ch08-Meem-Sakinah.pdf",
  tj9: "Ch09-Madd-Elongation.pdf",
  tj10: "Ch10-Qalqalah.pdf",
  tj11: "Ch11-Waqf-Stopping-Starting.pdf",
  tj12: "Ch12-Practical-Al-Fatiha.pdf"
};
var AR_PDFS = {
  ch2: "Arabic-Ch02-Haadha-Haadhihi.pdf",
  ch3: "Arabic-Ch03-Dhaalika-Tilka.pdf",
  ch4: "Arabic-Ch04-Adjectives.pdf",
  ch5: "Arabic-Ch05-Question-Words.pdf",
  ch6: "Arabic-Ch06-Prepositions.pdf",
  ch7: "Arabic-Ch07-Pronouns.pdf",
  ch8: "Arabic-Ch08-Idafa-Possession.pdf",
  ch9: "Arabic-Ch09-Attached-Pronouns.pdf",
  ch10: "Arabic-Ch10-Locations.pdf",
  ch11: "Arabic-Ch11-Inda-Having.pdf",
  ch12: "Arabic-Ch12-Numbers.pdf",
  ch13: "Arabic-Ch13-Past-Tense-1.pdf",
  ch14: "Arabic-Ch14-Past-Tense-Full.pdf",
  ch15: "Arabic-Ch15-Laysa-Negation.pdf",
  ch16: "Arabic-Ch16-Broken-Plurals.pdf",
  ch17: "Arabic-Ch17-Sound-Masc-Plural.pdf",
  ch18: "Arabic-Ch18-Sound-Fem-Plural.pdf",
  ch19: "Arabic-Ch19-Dual.pdf",
  ch20: "Arabic-Ch20-Present-Tense.pdf",
  ch21: "Arabic-Ch21-Prohibition.pdf",
  ch22: "Arabic-Ch22-Adjective-Agreement.pdf",
  ch23: "Arabic-Ch23-Book1-Review.pdf",
  ch24: "Arabic-Ch24-Kana-Sisters.pdf",
  ch25: "Arabic-Ch25-Inna-Sisters.pdf",
  ch26: "Arabic-Ch26-Masdar.pdf",
  ch27: "Arabic-Ch27-Active-Participle.pdf",
  ch28: "Arabic-Ch28-Passive-Participle.pdf",
  ch29: "Arabic-Ch29-Passive-Voice.pdf",
  ch30: "Arabic-Ch30-Form2.pdf",
  ch31: "Arabic-Ch31-Form3.pdf",
  ch32: "Arabic-Ch32-Form4.pdf",
  ch33: "Arabic-Ch33-Forms5to10.pdf",
  ch34: "Arabic-Ch34-Relative-Pronouns.pdf",
  ch35: "Arabic-Ch35-Conditional-Comparative.pdf",
  ch36: "Arabic-Ch36-Book2-Review.pdf",
  ch37: "Arabic-Ch37-Parsing.pdf",
  ch38: "Arabic-Ch38-Weak-Verbs.pdf",
  ch39: "Arabic-Ch39-Quran-Ikhlas.pdf",
  ch40: "Arabic-Ch40-Quran-Fatiha.pdf",
  ch41: "Arabic-Ch41-Hadith.pdf",
  ch42: "Arabic-Ch42-Classical-Texts.pdf"
};
function PDFDownloadBtn(_ref2) {
  var chapterId = _ref2.chapterId;
  var filename = TJ_PDFS[chapterId] || AR_PDFS[chapterId];
  if (!filename) return null;
  var url = "https://asad-mandhro.github.io/noor-ul-quran/pdfs/".concat(filename);
  return /*#__PURE__*/React.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    download: filename,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: "linear-gradient(135deg,#1a2818,#111d11)",
      border: "1px solid #3a6a3a",
      borderRadius: 13,
      padding: "13px 16px",
      textDecoration: "none",
      marginBottom: 12,
      transition: "all 0.2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: "#cc2200",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 15 12 18 15 15"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#7ac97a"
    }
  }, "Download Study Notes (PDF)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#5a8a5a",
      marginTop: 2
    }
  }, "Summary \xB7 Key rules \xB7 Tables \xB7 Quranic examples")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      fontSize: 10,
      color: "#7ac97a",
      background: "#2a4a2a",
      padding: "3px 8px",
      borderRadius: 6,
      fontWeight: 600
    }
  }, "PDF \u2193"));
}
function VideoPlayer(_ref3) {
  var videoId = _ref3.videoId;
  var _useState3 = useState("idle"),
    _useState4 = _slicedToArray(_useState3, 2),
    mode = _useState4[0],
    setMode = _useState4[1]; // idle | embed
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    embedFailed = _useState6[0],
    setEmbedFailed = _useState6[1];
  if (!videoId) return null;
  var openInYouTube = function openInYouTube(e) {
    e.stopPropagation();
    window.open("https://www.youtube.com/watch?v=".concat(videoId), "_blank", "noopener,noreferrer");
  };
  var tryEmbed = function tryEmbed() {
    setMode("embed");
    // Detect embed failure after 2.5s — if iframe still hidden, fall back
    setTimeout(function () {
      var iframe = document.querySelector("iframe[data-vid=\"".concat(videoId, "\"]"));
      if (iframe && iframe.offsetHeight < 50) setEmbedFailed(true);
    }, 2500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, mode === "idle" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: tryEmbed,
    style: {
      flex: 1,
      background: "#0f1520",
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      color: C.text,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: "#cc0000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IC.Play, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: C.text
    }
  }, "Watch Video Lesson"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.muted,
      marginTop: 2,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IC.Video, null), " Play here or open YouTube"))), /*#__PURE__*/React.createElement("button", {
    onClick: openInYouTube,
    style: {
      background: "#1a1f2e",
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "0 14px",
      cursor: "pointer",
      color: C.gold,
      fontSize: 11,
      fontWeight: 600,
      minWidth: 60
    }
  }, "Open in", /*#__PURE__*/React.createElement("br", null), "YouTube \u2197")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      overflow: "hidden",
      background: "#000",
      position: "relative",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    "data-vid": videoId,
    src: "https://www.youtube.com/embed/".concat(videoId, "?autoplay=1&rel=0&playsinline=1"),
    title: "Lesson Video",
    width: "100%",
    height: "220",
    frameBorder: "0",
    allowFullScreen: true,
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    style: {
      display: "block",
      minHeight: embedFailed ? 0 : 220
    }
  }), embedFailed && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 18px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.muted,
      marginBottom: 10
    }
  }, "This video can't be embedded here."), /*#__PURE__*/React.createElement("button", {
    onClick: openInYouTube,
    style: {
      background: "#cc0000",
      border: "none",
      borderRadius: 10,
      padding: "10px 18px",
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Open in YouTube \u2197"))), /*#__PURE__*/React.createElement("button", {
    onClick: openInYouTube,
    style: {
      background: "transparent",
      border: "none",
      color: C.muted,
      fontSize: 11,
      cursor: "pointer",
      textDecoration: "underline"
    }
  }, "Open on YouTube \u2197")));
}

// ─── HOME SCREEN ───────────────────────────────────────────────────
function HomeScreen(_ref4) {
  var onSelectChapter = _ref4.onSelectChapter;
  var _useState7 = useState(function () {
      return load("nq_xp", 0);
    }),
    _useState8 = _slicedToArray(_useState7, 1),
    xp = _useState8[0];
  var _useState9 = useState(function () {
      return load("nq_streak", 0);
    }),
    _useState0 = _slicedToArray(_useState9, 1),
    streak = _useState0[0];
  var _useState1 = useState(function () {
      return load("nq_done", []);
    }),
    _useState10 = _slicedToArray(_useState1, 1),
    done = _useState10[0];
  var _useState11 = useState(function () {
      return load("nq_track", "arabic");
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    track = _useState12[0],
    setTrack = _useState12[1];
  var level = Math.floor(xp / 300) + 1;
  var xpInLevel = xp % 300;
  var switchTrack = function switchTrack(t) {
    setTrack(t);
    store("nq_track", t);
  };
  var activeChapters = track === "tajweed" ? TAJWEED_CHAPTERS : CHAPTERS;
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
      opacity: 0.02,
      zIndex: 0,
      backgroundImage: "repeating-linear-gradient(60deg,transparent,transparent 40px,#c9a84c 40px,#c9a84c 41px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 480,
      margin: "0 auto",
      padding: "0 16px 40px"
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
  }, "Quranic Arabic Academy")), /*#__PURE__*/React.createElement("div", {
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
      background: "#1a2a1a",
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
      marginBottom: 24
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
  }, xp, " XP total"), /*#__PURE__*/React.createElement("span", {
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
      transition: "width 0.6s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8
    }
  }, [{
    label: "Done",
    val: done.length,
    color: C.green
  }, {
    label: "XP",
    val: xp,
    color: C.gold
  }, {
    label: "Streak",
    val: "".concat(streak, "d"),
    color: "#e8734a"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        background: C.navy,
        borderRadius: 10,
        padding: "10px 0",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        color: s.color
      }
    }, s.val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: C.muted,
        textTransform: "uppercase",
        letterSpacing: 1
      }
    }, s.label));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: C.card,
      borderRadius: 12,
      border: "1px solid ".concat(C.border),
      padding: 4,
      marginBottom: 18
    }
  }, [{
    key: "arabic",
    label: "Arabic",
    sub: "".concat(CHAPTERS.length, " chapters"),
    color: C.gold
  }, {
    key: "tajweed",
    label: "Tajweed",
    sub: "".concat(TAJWEED_CHAPTERS.length, " chapters"),
    color: "#e8734a"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return switchTrack(t.key);
      },
      style: {
        flex: 1,
        padding: "11px 8px",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
        background: track === t.key ? "linear-gradient(135deg,".concat(t.color, "22,").concat(t.color, "11)") : "transparent",
        borderBottom: track === t.key ? "2px solid ".concat(t.color) : "2px solid transparent",
        transition: "all 0.2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: track === t.key ? t.color : C.muted
      }
    }, t.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: track === t.key ? "".concat(t.color, "aa") : C.muted,
        marginTop: 2
      }
    }, t.sub));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.muted,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, track === "tajweed" ? "Tajweed Chapters" : "Arabic Chapters"), activeChapters.map(function (ch, idx) {
    var lessons = getLessons(ch.data);
    var completed = lessons.filter(function (l) {
      return done.includes(l.id);
    }).length;
    var pct = completed / lessons.length * 100;
    var isLocked = idx <= 1 ? false : getLessons(activeChapters[idx - 1].data).some(function (l) {
      return !done.includes(l.id);
    });
    return /*#__PURE__*/React.createElement("button", {
      key: ch.id,
      onClick: function onClick() {
        return !isLocked && onSelectChapter(ch);
      },
      style: {
        width: "100%",
        textAlign: "left",
        cursor: isLocked ? "default" : "pointer",
        background: C.card,
        border: "1px solid ".concat(isLocked ? C.border : ch.color + "44"),
        borderRadius: 18,
        padding: "20px 18px",
        marginBottom: 14,
        opacity: isLocked ? 0.5 : 1,
        transition: "all 0.2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 14,
        background: "".concat(ch.color, "18"),
        border: "1px solid ".concat(ch.color, "44"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: 22,
        color: ch.color
      }
    }, isLocked ? /*#__PURE__*/React.createElement(IC.Lock, null) : idx === 0 ? "أ" : "ه"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: ch.color,
        letterSpacing: 2,
        textTransform: "uppercase",
        fontWeight: 700,
        marginBottom: 4
      }
    }, "Chapter ", ch.number), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        color: ch.color,
        fontFamily: "'Amiri',serif"
      }
    }, ch.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: C.text,
        marginTop: 2
      }
    }, ch.english)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0,
        marginLeft: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: completed === lessons.length ? C.green : C.gold
      }
    }, completed, "/", lessons.length), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: C.muted
      }
    }, "lessons"))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.muted,
        marginTop: 6,
        marginBottom: 10
      }
    }, ch.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        background: C.border,
        borderRadius: 2,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(pct, "%"),
        borderRadius: 2,
        background: pct === 100 ? C.green : "linear-gradient(90deg,".concat(ch.color, ",").concat(ch.color, "aa)"),
        transition: "width 0.5s"
      }
    })))));
  })), /*#__PURE__*/React.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); *{box-sizing:border-box;margin:0;padding:0} button{font-family:inherit;border:none;background:none}"));
}

// ─── CHAPTER SCREEN ────────────────────────────────────────────────
function ChapterScreen(_ref5) {
  var chapter = _ref5.chapter,
    onBack = _ref5.onBack,
    onStartLesson = _ref5.onStartLesson;
  var _useState13 = useState(function () {
      return load("nq_done", []);
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    done = _useState14[0],
    setDone = _useState14[1];
  var lessons = getLessons(chapter.data);
  var typeColor = {
    intro: C.blue,
    letters: C.gold,
    grammar: "#8bbd6b",
    vocab: "#bd8b6b",
    quran: C.purple
  };
  var typeLabel = {
    intro: "INTRO",
    letters: "LETTERS",
    grammar: "GRAMMAR",
    vocab: "VOCAB",
    quran: "QURAN"
  };
  var isUnlocked = function isUnlocked(idx) {
    return idx === 0 || done.includes(lessons[idx - 1].id);
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
  }, /*#__PURE__*/React.createElement(IC.Arrow, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      color: chapter.color,
      fontFamily: "'Amiri',serif"
    }
  }, chapter.arabic), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, chapter.english))), lessons.map(function (lesson, idx) {
    var unlocked = isUnlocked(idx);
    var isDone = done.includes(lesson.id);
    var isNext = !isDone && unlocked;
    var color = typeColor[lesson.type] || C.gold;
    return /*#__PURE__*/React.createElement("button", {
      key: lesson.id,
      onClick: function onClick() {
        return unlocked && onStartLesson(lesson, chapter, function (id, xp) {
          var newDone = done.includes(id) ? done : [].concat(_toConsumableArray(done), [id]);
          setDone(newDone);
          store("nq_done", newDone);
          var curXp = load("nq_xp", 0);
          var newXp = done.includes(id) ? curXp : curXp + xp;
          store("nq_xp", newXp);
          var today = new Date().toDateString();
          var last = load("nq_lastDate", null);
          if (last !== today) {
            var s = load("nq_streak", 0) + 1;
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
        background: isDone ? "#111d11" : isNext ? "".concat(chapter.color, "0a") : C.card,
        border: "1px solid ".concat(isDone ? "#2a4a2a" : isNext ? "".concat(chapter.color, "44") : C.border),
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
        color: isDone ? C.green : unlocked ? color : C.muted
      }
    }, isDone ? /*#__PURE__*/React.createElement(IC.Check, null) : unlocked ? /*#__PURE__*/React.createElement(IC.Play, null) : /*#__PURE__*/React.createElement(IC.Lock, null)), /*#__PURE__*/React.createElement("div", {
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
        color: chapter.color,
        fontWeight: 700
      }
    }, "\u25B6 UP NEXT"), lesson.videoId && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: "#cc6666",
        display: "flex",
        alignItems: "center",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement(IC.Video, null), "VIDEO")), /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); *{box-sizing:border-box;margin:0;padding:0} button{font-family:inherit}"));
}

// ─── LESSON SCREEN ─────────────────────────────────────────────────
function LessonScreen(_ref6) {
  var lesson = _ref6.lesson,
    chapter = _ref6.chapter,
    onBack = _ref6.onBack,
    onComplete = _ref6.onComplete;
  var _useState15 = useState("teach"),
    _useState16 = _slicedToArray(_useState15, 2),
    phase = _useState16[0],
    setPhase = _useState16[1];
  var _useState17 = useState(0),
    _useState18 = _slicedToArray(_useState17, 2),
    slideIdx = _useState18[0],
    setSlide = _useState18[1];
  var _useState19 = useState(0),
    _useState20 = _slicedToArray(_useState19, 2),
    qIdx = _useState20[0],
    setQIdx = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    selected = _useState22[0],
    setSel = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    answered = _useState24[0],
    setAns = _useState24[1];
  var _useState25 = useState(0),
    _useState26 = _slicedToArray(_useState25, 2),
    correct = _useState26[0],
    setCorr = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showExp = _useState28[0],
    setExp = _useState28[1];
  var slides = lesson.slides || [];
  var quiz = lesson.quiz || [];
  var slide = slides[slideIdx];
  var q = quiz[qIdx];
  var color = (chapter === null || chapter === void 0 ? void 0 : chapter.color) || C.gold;
  var nextSlide = function nextSlide() {
    if (slideIdx < slides.length - 1) setSlide(function (s) {
      return s + 1;
    });else setPhase("quiz");
  };
  var prevSlide = function prevSlide() {
    if (slideIdx > 0) setSlide(function (s) {
      return s - 1;
    });
  };
  var handleAns = function handleAns(i) {
    if (answered) return;
    setSel(i);
    setAns(true);
    setExp(true);
    if (i === q.ans) setCorr(function (c) {
      return c + 1;
    });
  };
  var nextQ = function nextQ() {
    setSel(null);
    setAns(false);
    setExp(false);
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
      padding: "18px 0 12px"
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
      fontSize: 12,
      fontWeight: 600,
      color: C.text,
      marginBottom: 5
    }
  }, phase === "teach" ? lesson.title : phase === "quiz" ? "Quiz — " + lesson.title : "Complete!"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: C.border,
      borderRadius: 2,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      borderRadius: 2,
      transition: "width 0.4s",
      background: "linear-gradient(90deg,".concat(color, ",").concat(color, "aa)"),
      width: phase === "teach" ? "".concat((slideIdx + 1) / slides.length * 50, "%") : phase === "quiz" ? "".concat(50 + (qIdx + 1) / quiz.length * 50, "%") : "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: phase === "teach" ? color : C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Slide ", slideIdx + 1, "/", slides.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: phase === "quiz" ? color : C.muted,
      textTransform: "uppercase",
      letterSpacing: 1
    }
  }, "Quiz ", phase === "quiz" ? qIdx + 1 : 0, "/", quiz.length)))), phase === "teach" && slideIdx === 0 && lesson.videoId && /*#__PURE__*/React.createElement(VideoPlayer, {
    videoId: lesson.videoId
  }), phase === "teach" && slideIdx === 0 && /*#__PURE__*/React.createElement(PDFDownloadBtn, {
    chapterId: lesson.id.replace("-main", "")
  }), phase === "teach" && slide && /*#__PURE__*/React.createElement(TeachSlide, {
    slide: slide,
    color: color,
    onNext: nextSlide,
    onPrev: prevSlide,
    isFirst: slideIdx === 0,
    isLast: slideIdx === slides.length - 1
  }), phase === "quiz" && q && /*#__PURE__*/React.createElement("div", {
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
      color: color,
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
    var isCorr = i === q.ans,
      isSel = selected === i;
    var bg = C.navy,
      border = "#2a2f3e",
      tc = C.text;
    if (answered) {
      if (isCorr) {
        bg = "#1a2a1a";
        border = "#4a8c4a";
        tc = C.green;
      } else if (isSel) {
        bg = "#2a1a1a";
        border = "#8c4a4a";
        tc = C.red;
      }
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return handleAns(i);
      },
      style: {
        padding: "15px 18px",
        border: "1px solid ".concat(border),
        borderRadius: 12,
        background: bg,
        color: tc,
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
        background: answered && isCorr ? "#2a4a2a" : C.card,
        marginRight: 12,
        fontSize: 11,
        fontWeight: 700,
        color: answered && isCorr ? C.green : C.muted
      }
    }, String.fromCharCode(65 + i)), opt);
  })), showExp && /*#__PURE__*/React.createElement("div", {
    style: {
      background: selected === q.ans ? "#111d11" : "#1d1111",
      border: "1px solid ".concat(selected === q.ans ? "#3a6a3a" : "#6a3a3a"),
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 16,
      animation: "fadeIn 0.3s"
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
      background: "linear-gradient(135deg,".concat(color, ",").concat(color, "aa)"),
      color: C.bg,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      animation: "fadeIn 0.3s"
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
      border: "1px solid ".concat(color, "33"),
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
      color: color,
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
  }, correct === quiz.length ? "ما شاء الله — Perfect!" : correct >= quiz.length * 0.6 ? "Good work — keep going!" : "Review the lesson and try again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: color
    }
  }, " +", lesson.xp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.muted,
      letterSpacing: 1
    }
  }, "XP")), /*#__PURE__*/React.createElement("div", {
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
      background: "linear-gradient(135deg,".concat(color, ",").concat(color, "aa)"),
      color: C.bg,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Back to Lessons \u2192"))), /*#__PURE__*/React.createElement("style", null, "@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'); *{box-sizing:border-box;margin:0;padding:0} button{font-family:inherit} @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}"));
}

// ─── TEACH SLIDE ───────────────────────────────────────────────────
function TeachSlide(_ref7) {
  var slide = _ref7.slide,
    color = _ref7.color,
    onNext = _ref7.onNext,
    onPrev = _ref7.onPrev,
    isFirst = _ref7.isFirst,
    isLast = _ref7.isLast;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.35s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 380
    }
  }, slide.type === "welcome" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(160deg,#1a2235,#0f1520)",
      border: "1px solid ".concat(color, "33"),
      borderRadius: 20,
      padding: "36px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      color: color,
      marginBottom: 14,
      fontWeight: 700
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: C.text,
      marginBottom: 14
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
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: color,
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
        background: "".concat(color, "18"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: color,
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
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: color,
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
      fontSize: 22,
      color: color,
      lineHeight: 2.2,
      fontFamily: "'Amiri',serif",
      direction: "rtl",
      letterSpacing: 4
    }
  }, slide.letters)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SpeakBtn, {
    text: slide.letters
  }))), slide.type === "tip" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#111d11",
      border: "1px solid #2a4a2a",
      borderRadius: 20,
      padding: "28px 22px"
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
      border: "1px solid ".concat(color, "44"),
      borderRadius: 20,
      padding: "28px 20px",
      textAlign: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 96,
      color: color,
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
      fontSize: 13,
      color: C.muted,
      marginBottom: 12
    }
  }, slide.sound), /*#__PURE__*/React.createElement(SpeakBtn, {
    text: slide.arabic
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "14px 16px",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.blue,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "SHAPE"), /*#__PURE__*/React.createElement("div", {
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
      color: C.purple,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, "QURANIC WORD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
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
  }, slide.wordMeaning)), /*#__PURE__*/React.createElement(SpeakBtn, {
    text: slide.word,
    style: {
      marginLeft: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#9a7a9a",
      lineHeight: 1.7,
      borderTop: "1px solid #3a2a4a",
      paddingTop: 10
    }
  }, slide.context))), slide.type === "letter_intro" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#1a2030,".concat(C.card, ")"),
      border: "1px solid ".concat(color, "33"),
      borderRadius: 20,
      padding: "30px 22px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: color,
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
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: color,
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
        gap: 14,
        background: C.navy,
        borderRadius: 12,
        padding: "14px 16px",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 40,
        color: color,
        fontFamily: "'Amiri',serif",
        width: 50,
        textAlign: "center"
      }
    }, item.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 14,
        color: C.text
      }
    }, item.label), /*#__PURE__*/React.createElement(SpeakBtn, {
      text: item.arabic
    }));
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
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: color,
      marginBottom: 14
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: C.text,
      lineHeight: 1.8,
      whiteSpace: "pre-line",
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
        fontSize: 30,
        color: color,
        fontFamily: "'Amiri',serif",
        minWidth: 60,
        textAlign: "center"
      }
    }, item.arabic), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 13,
        color: C.text
      }
    }, item.label), /*#__PURE__*/React.createElement(SpeakBtn, {
      text: item.arabic
    }));
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
      border: "1px solid ".concat(color, "44"),
      borderRadius: 20,
      padding: "24px 20px",
      textAlign: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: color,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 10
    }
  }, slide.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72,
      color: color,
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
      color: C.muted,
      marginBottom: 12
    }
  }, slide.position), /*#__PURE__*/React.createElement(SpeakBtn, {
    text: slide.arabic
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 14,
      padding: "16px",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.blue,
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
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 30,
        color: color,
        fontFamily: "'Amiri',serif"
      }
    }, ex.arabic), /*#__PURE__*/React.createElement(SpeakBtn, {
      text: ex.arabic
    })), /*#__PURE__*/React.createElement("div", {
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
      color: C.purple,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, "QURANIC EXAMPLE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      color: "#ddb8dd",
      fontFamily: "'Amiri',serif"
    }
  }, slide.qExample.arabic), /*#__PURE__*/React.createElement(SpeakBtn, {
    text: slide.qExample.arabic
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.text,
      fontWeight: 600,
      marginTop: 6
    }
  }, slide.qExample.roman), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted
    }
  }, slide.qExample.meaning))), slide.type === "vocab_list" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "18px 16px"
    }
  }, slide.heading && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: color,
      fontWeight: 700,
      marginBottom: 14,
      letterSpacing: 1
    }
  }, slide.heading), (slide.words || []).map(function (w, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: C.navy,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 70,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        color: color,
        fontFamily: "'Amiri',serif"
      }
    }, w.arabic)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
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
    }, w.meaning), w.note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: color,
        marginTop: 4,
        fontStyle: "italic"
      }
    }, w.note)), /*#__PURE__*/React.createElement(SpeakBtn, {
      text: w.arabic
    }));
  })), slide.type === "reading_practice" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      border: "1px solid ".concat(C.border),
      borderRadius: 20,
      padding: "24px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: color,
      marginBottom: 6
    }
  }, slide.heading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.muted,
      marginBottom: 18
    }
  }, slide.instruction), (slide.words || []).map(function (w, i) {
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
        fontSize: 28,
        color: color,
        fontFamily: "'Amiri',serif"
      }
    }, w.arabic), /*#__PURE__*/React.createElement(SpeakBtn, {
      text: w.arabic
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: C.text,
        fontWeight: 600
      }
    }, w.roman), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: C.muted
      }
    }, w.meaning)));
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
      color: C.purple,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "QURANIC ARABIC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      color: "#e0c8ff",
      fontFamily: "'Amiri',serif",
      lineHeight: 1.8,
      direction: "rtl",
      marginBottom: 14
    }
  }, slide.arabic), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(SpeakBtn, {
    text: slide.arabic,
    verseId: slide.verseId
  })), slide.verseId && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.gold,
      marginBottom: 8,
      letterSpacing: 1
    }
  }, "\uD83D\uDD4B Tap to hear Mishary Alafasy recite this verse"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.purple,
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
      color: color,
      letterSpacing: 2,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "WORD BY WORD"), (slide.breakdown || []).map(function (b, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "10px 0",
        borderBottom: i < slide.breakdown.length - 1 ? "1px solid ".concat(C.border) : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth: 90
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        color: color,
        fontFamily: "'Amiri',serif"
      }
    }, b.word), /*#__PURE__*/React.createElement(SpeakBtn, {
      text: b.word
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
      background: "linear-gradient(135deg,".concat(color, ",").concat(color, "aa)"),
      color: C.bg,
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, isLast ? "Take Quiz →" : "Continue →")));
}

// ─── APP ROOT ──────────────────────────────────────────────────────
function App() {
  var _useState29 = useState("home"),
    _useState30 = _slicedToArray(_useState29, 2),
    screen = _useState30[0],
    setScreen = _useState30[1]; // home | chapter | lesson
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    activeChapter = _useState32[0],
    setChapter = _useState32[1];
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    activeLesson = _useState34[0],
    setLesson = _useState34[1];
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    completeCb = _useState36[0],
    setCb = _useState36[1];
  var goHome = useCallback(function () {
    setScreen("home");
    setChapter(null);
    setLesson(null);
  }, []);
  var goChapter = useCallback(function () {
    setScreen("chapter");
    setLesson(null);
  }, []);
  var handleSelectChapter = useCallback(function (ch) {
    setChapter(ch);
    setScreen("chapter");
  }, []);
  var handleStartLesson = useCallback(function (lesson, chapter, cb) {
    setLesson(lesson);
    setChapter(chapter);
    setCb(function () {
      return cb;
    });
    setScreen("lesson");
  }, []);
  if (screen === "lesson" && activeLesson) {
    return /*#__PURE__*/React.createElement(LessonScreen, {
      lesson: activeLesson,
      chapter: activeChapter,
      onBack: goChapter,
      onComplete: function onComplete(id, xp) {
        completeCb && completeCb(id, xp);
      }
    });
  }
  if (screen === "chapter" && activeChapter) {
    return /*#__PURE__*/React.createElement(ChapterScreen, {
      chapter: activeChapter,
      onBack: goHome,
      onStartLesson: handleStartLesson
    });
  }
  return /*#__PURE__*/React.createElement(HomeScreen, {
    onSelectChapter: handleSelectChapter
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));

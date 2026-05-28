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
// ─── DATA: Course Curriculum ───────────────────────────────────────
var ARABIC_MODULES = [{
  id: "a1",
  title: "حروف الهجاء",
  subtitle: "Arabic Alphabet & Pronunciation",
  source: "Foundation — Reading & Writing",
  lessons: [{
    id: "a1-1",
    title: "Letters أ to خ — Shapes & Sounds",
    type: "vocab",
    xp: 20,
    duration: "15 min"
  }, {
    id: "a1-2",
    title: "Letters د to ظ — Writing Practice",
    type: "writing",
    xp: 20,
    duration: "15 min"
  }, {
    id: "a1-3",
    title: "Letters ع to ي — Complete Set",
    type: "vocab",
    xp: 20,
    duration: "15 min"
  }, {
    id: "a1-4",
    title: "Short Vowels: فَتحَة ضَمَّة كَسرَة",
    type: "vocab",
    xp: 25,
    duration: "20 min"
  }, {
    id: "a1-5",
    title: "Long Vowels & Sukoon",
    type: "grammar",
    xp: 25,
    duration: "20 min"
  }, {
    id: "a1-6",
    title: "Tanween: ـًـٍـٌ",
    type: "grammar",
    xp: 30,
    duration: "20 min"
  }]
}, {
  id: "a2",
  title: "الكلمات الأساسية",
  subtitle: "Essential Quranic Vocabulary",
  source: "Foundation — Core Words",
  lessons: [{
    id: "a2-1",
    title: "Most Frequent 50 Quran Words",
    type: "vocab",
    xp: 30,
    duration: "20 min"
  }, {
    id: "a2-2",
    title: "Salah Vocabulary & Meanings",
    type: "vocab",
    xp: 25,
    duration: "15 min"
  }, {
    id: "a2-3",
    title: "Dua Phrases — Word Breakdown",
    type: "vocab",
    xp: 25,
    duration: "15 min"
  }, {
    id: "a2-4",
    title: "Common Verbs in Quran",
    type: "vocab",
    xp: 30,
    duration: "20 min"
  }, {
    id: "a2-5",
    title: "Nouns & Pronouns — Quran Context",
    type: "grammar",
    xp: 30,
    duration: "20 min"
  }]
}, {
  id: "a3",
  title: "النحو الأساسي",
  subtitle: "Basic Nahw (Grammar)",
  source: "Intermediate — Sentence Structure",
  lessons: [{
    id: "a3-1",
    title: "اسم فعل حرف — Word Categories",
    type: "grammar",
    xp: 35,
    duration: "25 min"
  }, {
    id: "a3-2",
    title: "المبتدأ والخبر — Subject & Predicate",
    type: "grammar",
    xp: 35,
    duration: "25 min"
  }, {
    id: "a3-3",
    title: "Masculine & Feminine — مذكر و مؤنث",
    type: "grammar",
    xp: 30,
    duration: "20 min"
  }, {
    id: "a3-4",
    title: "Singular, Dual, Plural",
    type: "grammar",
    xp: 35,
    duration: "25 min"
  }, {
    id: "a3-5",
    title: "Attached Pronouns — الضمائر المتصلة",
    type: "grammar",
    xp: 40,
    duration: "25 min"
  }]
}, {
  id: "a4",
  title: "الصرف",
  subtitle: "Morphology (Sarf)",
  source: "Intermediate — Word Patterns",
  lessons: [{
    id: "a4-1",
    title: "Root System — فعل Pattern",
    type: "grammar",
    xp: 40,
    duration: "25 min"
  }, {
    id: "a4-2",
    title: "Past Tense Conjugation — الماضي",
    type: "grammar",
    xp: 40,
    duration: "25 min"
  }, {
    id: "a4-3",
    title: "Present Tense — المضارع",
    type: "grammar",
    xp: 40,
    duration: "25 min"
  }, {
    id: "a4-4",
    title: "Command Form — الأمر",
    type: "grammar",
    xp: 35,
    duration: "20 min"
  }, {
    id: "a4-5",
    title: "Verb Forms I-X — أوزان الأفعال",
    type: "grammar",
    xp: 50,
    duration: "30 min"
  }]
}, {
  id: "a5",
  title: "فهم القرآن",
  subtitle: "Quran Comprehension",
  source: "Advanced — Applied Reading",
  lessons: [{
    id: "a5-1",
    title: "سورة الفاتحة — Word-by-Word",
    type: "quran",
    xp: 40,
    duration: "25 min"
  }, {
    id: "a5-2",
    title: "Last 10 Surahs — Vocabulary",
    type: "quran",
    xp: 45,
    duration: "25 min"
  }, {
    id: "a5-3",
    title: "آية الكرسي — Grammar Breakdown",
    type: "quran",
    xp: 50,
    duration: "30 min"
  }, {
    id: "a5-4",
    title: "سورة يس — Selected Passages",
    type: "quran",
    xp: 50,
    duration: "30 min"
  }, {
    id: "a5-5",
    title: "سورة الملك — Complete Analysis",
    type: "quran",
    xp: 55,
    duration: "30 min"
  }]
}];
var TAJWEED_MODULES = [{
  id: "t1",
  title: "مخارج الحروف",
  subtitle: "Articulation Points",
  source: "Foundation — Letter Origins",
  lessons: [{
    id: "t1-1",
    title: "Throat Letters — حروف الحلق",
    type: "tajweed",
    xp: 25,
    duration: "15 min"
  }, {
    id: "t1-2",
    title: "Tongue Letters — حروف اللسان",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }, {
    id: "t1-3",
    title: "Lip Letters — حروف الشفتين",
    type: "tajweed",
    xp: 25,
    duration: "15 min"
  }, {
    id: "t1-4",
    title: "Nasal Cavity — الخَيشوم",
    type: "tajweed",
    xp: 25,
    duration: "15 min"
  }, {
    id: "t1-5",
    title: "Empty Space — الجَوف",
    type: "tajweed",
    xp: 20,
    duration: "15 min"
  }]
}, {
  id: "t2",
  title: "صفات الحروف",
  subtitle: "Letter Characteristics",
  source: "Foundation — Letter Qualities",
  lessons: [{
    id: "t2-1",
    title: "Heavy & Light Letters — تفخيم و ترقيق",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }, {
    id: "t2-2",
    title: "Qalqalah — القلقلة",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t2-3",
    title: "Whispered & Voiced — همس و جهر",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }, {
    id: "t2-4",
    title: "Elongation & Constriction",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }]
}, {
  id: "t3",
  title: "أحكام النون الساكنة",
  subtitle: "Noon Sakinah & Tanween Rules",
  source: "Intermediate — Noon Rules",
  lessons: [{
    id: "t3-1",
    title: "إظهار — Clear Pronunciation",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t3-2",
    title: "إدغام — Merging",
    type: "tajweed",
    xp: 40,
    duration: "25 min"
  }, {
    id: "t3-3",
    title: "إقلاب — Conversion",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t3-4",
    title: "إخفاء — Concealment",
    type: "tajweed",
    xp: 40,
    duration: "25 min"
  }]
}, {
  id: "t4",
  title: "أحكام الميم",
  subtitle: "Meem Sakinah Rules",
  source: "Intermediate — Meem Rules",
  lessons: [{
    id: "t4-1",
    title: "إخفاء شفوي — Lip Concealment",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t4-2",
    title: "إدغام شفوي — Lip Merging",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t4-3",
    title: "إظهار شفوي — Lip Clarity",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }]
}, {
  id: "t5",
  title: "المدود",
  subtitle: "Elongation Rules",
  source: "Advanced — Madd Types",
  lessons: [{
    id: "t5-1",
    title: "مد طبيعي — Natural Madd (2 beats)",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }, {
    id: "t5-2",
    title: "مد متصل — Connected Madd (4-5)",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t5-3",
    title: "مد منفصل — Separated Madd",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }, {
    id: "t5-4",
    title: "مد لازم — Necessary Madd (6 beats)",
    type: "tajweed",
    xp: 40,
    duration: "25 min"
  }, {
    id: "t5-5",
    title: "مد عارض — Temporary Madd",
    type: "tajweed",
    xp: 35,
    duration: "20 min"
  }]
}, {
  id: "t6",
  title: "الوقف والابتداء",
  subtitle: "Stopping & Starting Rules",
  source: "Advanced — Recitation Flow",
  lessons: [{
    id: "t6-1",
    title: "Signs of Waqf — علامات الوقف",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }, {
    id: "t6-2",
    title: "Types of Stops — Compulsory & Permissible",
    type: "tajweed",
    xp: 35,
    duration: "25 min"
  }, {
    id: "t6-3",
    title: "Starting After a Stop — الابتداء",
    type: "tajweed",
    xp: 30,
    duration: "20 min"
  }]
}];

// ─── Quiz Data ─────────────────────────────────────────────────────
var QUIZ_BANK = {
  "a1-1": [{
    q: "What is the first letter of the Arabic alphabet?",
    opts: ["أ (Alif)", "ب (Ba)", "ت (Ta)", "ج (Jim)"],
    ans: 0
  }, {
    q: "How many letters are in the Arabic alphabet?",
    opts: ["24", "26", "28", "30"],
    ans: 2
  }, {
    q: "Which letter makes the 'kh' sound (like clearing throat)?",
    opts: ["ح", "خ", "ه", "ع"],
    ans: 1
  }],
  "a2-1": [{
    q: "What does 'الله' mean?",
    opts: ["The Book", "The Prayer", "Allah (God)", "The Day"],
    ans: 2
  }, {
    q: "'الحمد' means:",
    opts: ["Mercy", "Praise", "Lord", "Guide"],
    ans: 1
  }, {
    q: "The word 'رَبّ' appears frequently. It means:",
    opts: ["King", "Lord/Sustainer", "Creator", "Judge"],
    ans: 1
  }],
  "a3-1": [{
    q: "Arabic words are categorized into how many types?",
    opts: ["2", "3", "4", "5"],
    ans: 1
  }, {
    q: "A word that has meaning and is tied to time is called:",
    opts: ["اسم (Ism)", "فعل (Fi'l)", "حرف (Harf)", "صفة (Sifa)"],
    ans: 1
  }, {
    q: "Particles (حروف) in Arabic:",
    opts: ["Have independent meaning", "Need other words for meaning", "Are always nouns", "Are always verbs"],
    ans: 1
  }],
  "t1-1": [{
    q: "How many articulation points (مخارج) are there?",
    opts: ["5 main areas", "3 main areas", "7 main areas", "10 main areas"],
    ans: 0
  }, {
    q: "Which letters come from the throat?",
    opts: ["ب م و", "ه ع ح غ خ ء", "ت د ن", "ف ش"],
    ans: 1
  }, {
    q: "ء (Hamza) originates from:",
    opts: ["Tongue tip", "Lips", "Deepest part of throat", "Nasal cavity"],
    ans: 2
  }],
  "t2-2": [{
    q: "Qalqalah letters are:",
    opts: ["ق ط ب ج د", "ن م و ي", "ح خ ع غ", "ص ض ط ظ"],
    ans: 0
  }, {
    q: "Qalqalah means:",
    opts: ["Elongation", "Echo/Bounce", "Nasalization", "Merging"],
    ans: 1
  }, {
    q: "When is Qalqalah strongest?",
    opts: ["In the middle of a word", "When letter has a vowel", "At the end during a stop", "Always the same"],
    ans: 2
  }],
  "t3-2": [{
    q: "Idgham applies when Noon Sakinah is followed by:",
    opts: ["ي ر م ل و ن", "ء ه ع ح غ خ", "ب only", "Any letter"],
    ans: 0
  }, {
    q: "Idgham with Ghunnah uses which letters?",
    opts: ["ل ر", "ي ن م و", "All 6", "None"],
    ans: 1
  }, {
    q: "In Idgham, the Noon Sakinah:",
    opts: ["Is pronounced clearly", "Merges into next letter", "Becomes a Meem", "Is silent"],
    ans: 1
  }],
  "t5-1": [{
    q: "Natural Madd (مد طبيعي) is held for:",
    opts: ["1 beat", "2 beats", "4 beats", "6 beats"],
    ans: 1
  }, {
    q: "Natural Madd occurs with:",
    opts: ["Alif after Fathah, Waw after Dammah, Ya after Kasrah", "Only Alif", "Any letter", "Hamzah only"],
    ans: 0
  }, {
    q: "If no Hamzah or Sukoon follows, the Madd is:",
    opts: ["Connected", "Separated", "Natural", "Necessary"],
    ans: 2
  }]
};

// ─── Utility Functions ─────────────────────────────────────────────
var getStoredData = function getStoredData(key, fallback) {
  try {
    var raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_unused) {
    return fallback;
  }
};
var setStoredData = function setStoredData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_unused2) {}
};

// ─── ICONS ─────────────────────────────────────────────────────────
var Icons = {
  Fire: function Fire() {
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
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
      width: "14",
      height: "14",
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
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 11V7a5 5 0 0 1 10 0v4"
    }));
  },
  Play: function Play() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "5 3 19 12 5 21 5 3"
    }));
  },
  Star: function Star() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }));
  },
  Trophy: function Trophy() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 22h16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
    }));
  },
  Arrow: function Arrow() {
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
      d: "m15 18-6-6 6-6"
    }));
  },
  Clock: function Clock() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    }));
  },
  Target: function Target() {
    return /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }));
  }
};

// ─── Main App ──────────────────────────────────────────────────────
function QuranLearningApp() {
  var _useState = useState("home"),
    _useState2 = _slicedToArray(_useState, 2),
    screen = _useState2[0],
    setScreen = _useState2[1];
  var _useState3 = useState("arabic"),
    _useState4 = _slicedToArray(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedLesson = _useState6[0],
    setSelectedLesson = _useState6[1];
  var _useState7 = useState(function () {
      return getStoredData("q_completed", []);
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    completedLessons = _useState8[0],
    setCompletedLessons = _useState8[1];
  var _useState9 = useState(function () {
      return getStoredData("q_streak", 0);
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    streak = _useState0[0],
    setStreak = _useState0[1];
  var _useState1 = useState(function () {
      return getStoredData("q_xp", 0);
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    totalXP = _useState10[0],
    setTotalXP = _useState10[1];
  var _useState11 = useState(function () {
      return getStoredData("q_lastDate", null);
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    lastDate = _useState12[0],
    setLastDate = _useState12[1];
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    quizState = _useState14[0],
    setQuizState = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    dailyGoalMet = _useState16[0],
    setDailyGoalMet = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showCelebration = _useState18[0],
    setShowCelebration = _useState18[1];
  var today = new Date().toDateString();
  useEffect(function () {
    setStoredData("q_completed", completedLessons);
    setStoredData("q_xp", totalXP);
    setStoredData("q_streak", streak);
    setStoredData("q_lastDate", lastDate);
  }, [completedLessons, totalXP, streak, lastDate]);
  useEffect(function () {
    if (lastDate && lastDate !== today) {
      var last = new Date(lastDate);
      var diff = Math.floor((new Date(today) - last) / 86400000);
      if (diff > 1) {
        setStreak(0);
        setStoredData("q_streak", 0);
      }
    }
  }, []);
  var completeLesson = useCallback(function (lessonId, xp) {
    if (completedLessons.includes(lessonId)) return;
    setCompletedLessons(function (prev) {
      return [].concat(_toConsumableArray(prev), [lessonId]);
    });
    setTotalXP(function (prev) {
      return prev + xp;
    });
    if (lastDate !== today) {
      setStreak(function (prev) {
        return prev + 1;
      });
      setLastDate(today);
    }
    setDailyGoalMet(true);
    setShowCelebration(true);
    setTimeout(function () {
      return setShowCelebration(false);
    }, 2500);
  }, [completedLessons, lastDate, today]);
  var allModules = activeTab === "arabic" ? ARABIC_MODULES : TAJWEED_MODULES;
  var totalLessons = [].concat(ARABIC_MODULES, TAJWEED_MODULES).reduce(function (s, m) {
    return s + m.lessons.length;
  }, 0);
  var completedCount = completedLessons.length;
  var level = Math.floor(totalXP / 200) + 1;
  var xpInLevel = totalXP % 200;
  var isLessonUnlocked = function isLessonUnlocked(moduleIdx, lessonIdx) {
    if (moduleIdx === 0 && lessonIdx === 0) return true;
    var mod = allModules[moduleIdx];
    if (lessonIdx > 0) return completedLessons.includes(mod.lessons[lessonIdx - 1].id);
    var prevMod = allModules[moduleIdx - 1];
    return prevMod.lessons.every(function (l) {
      return completedLessons.includes(l.id);
    });
  };
  var getNextLesson = function getNextLesson() {
    for (var _i = 0, _arr = [ARABIC_MODULES, TAJWEED_MODULES]; _i < _arr.length; _i++) {
      var mods = _arr[_i];
      for (var mi = 0; mi < mods.length; mi++) {
        for (var li = 0; li < mods[mi].lessons.length; li++) {
          var l = mods[mi].lessons[li];
          if (!completedLessons.includes(l.id)) return l;
        }
      }
    }
    return null;
  };

  // ─── Screens ───────────────────────────────────────────────────
  if (screen === "lesson" && selectedLesson) {
    return /*#__PURE__*/React.createElement(LessonScreen, {
      lesson: selectedLesson,
      onBack: function onBack() {
        setScreen("home");
        setSelectedLesson(null);
      },
      onComplete: completeLesson,
      isCompleted: completedLessons.includes(selectedLesson.id),
      quizState: quizState,
      setQuizState: setQuizState
    });
  }
  var nextLesson = getNextLesson();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#0a0f1a",
      color: "#e8e0d4",
      fontFamily: "'Amiri', 'Georgia', serif",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      opacity: 0.03,
      zIndex: 0,
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, #c9a84c 30px, #c9a84c 31px)"
    }
  }), showCelebration && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(10,15,26,0.85)",
      backdropFilter: "blur(8px)",
      animation: "fadeIn 0.3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      animation: "scaleIn 0.4s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      marginBottom: 12
    }
  }, "\uD83C\uDF1F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      color: "#c9a84c",
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u0647"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "#a09880",
      letterSpacing: 1
    }
  }, "Lesson Complete!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 480,
      margin: "0 auto",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 0 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      margin: 0,
      fontWeight: 700,
      background: "linear-gradient(135deg, #c9a84c, #e8d5a3)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: 0.5
    }
  }, "\u0646\u0648\u0631 \u0627\u0644\u0642\u0631\u0622\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "2px 0 0",
      fontSize: 11,
      color: "#6b6355",
      letterSpacing: 2,
      textTransform: "uppercase"
    }
  }, "Quran Arabic Academy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      color: "#e8734a"
    }
  }, /*#__PURE__*/React.createElement(Icons.Fire, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      fontFamily: "monospace"
    }
  }, streak)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #1a1f2e, #141824)",
      border: "1px solid #2a2f3e",
      borderRadius: 20,
      padding: "6px 14px",
      fontSize: 13,
      fontWeight: 600,
      color: "#c9a84c",
      fontFamily: "monospace"
    }
  }, "Lvl ", level))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#141824",
      borderRadius: 12,
      padding: "14px 16px",
      border: "1px solid #1e2333",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#6b6355"
    }
  }, totalXP, " XP Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#c9a84c"
    }
  }, xpInLevel, "/200 to Lvl ", level + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "#1e2333",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "".concat(xpInLevel / 200 * 100, "%"),
      background: "linear-gradient(90deg, #c9a84c, #e8d5a3)",
      borderRadius: 3,
      transition: "width 0.6s ease"
    }
  }))), nextLesson && !dailyGoalMet && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setSelectedLesson(nextLesson);
      setScreen("lesson");
      setQuizState(null);
    },
    style: {
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      background: "linear-gradient(135deg, #1a2235, #162030)",
      border: "1px solid #c9a84c33",
      borderRadius: 16,
      padding: "18px 20px",
      marginBottom: 16,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -30,
      right: -30,
      width: 100,
      height: 100,
      background: "radial-gradient(circle, #c9a84c11, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 10,
      fontSize: 10,
      color: "#c9a84c",
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icons.Target, null), " Today's Lesson"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "#e8e0d4",
      marginBottom: 4
    }
  }, nextLesson.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12,
      color: "#6b6355"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(Icons.Clock, null), " ", nextLesson.duration), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "+", nextLesson.xp, " XP"))), dailyGoalMet && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #1a2a1a, #162016)",
      border: "1px solid #4a8c4a33",
      borderRadius: 16,
      padding: "18px 20px",
      marginBottom: 16,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 4
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#7ac97a",
      fontWeight: 600,
      fontSize: 15
    }
  }, "Daily Goal Complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#5a8a5a",
      fontSize: 12,
      marginTop: 4
    }
  }, "Keep going or come back tomorrow!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
      marginBottom: 20
    }
  }, [{
    label: "Completed",
    value: completedCount,
    icon: /*#__PURE__*/React.createElement(Icons.Check, null),
    color: "#7ac97a"
  }, {
    label: "Total",
    value: totalLessons,
    icon: /*#__PURE__*/React.createElement(Icons.Book, null),
    color: "#6b8bbd"
  }, {
    label: "Streak",
    value: "".concat(streak, "d"),
    icon: /*#__PURE__*/React.createElement(Icons.Fire, null),
    color: "#e8734a"
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        background: "#141824",
        border: "1px solid #1e2333",
        borderRadius: 12,
        padding: "14px 12px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: s.color,
        marginBottom: 6,
        display: "flex",
        justifyContent: "center"
      }
    }, s.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: "monospace",
        color: "#e8e0d4"
      }
    }, s.value), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#6b6355",
        letterSpacing: 1,
        textTransform: "uppercase",
        marginTop: 2
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#141824",
      borderRadius: 12,
      border: "1px solid #1e2333",
      padding: 4,
      marginBottom: 20
    }
  }, [{
    key: "arabic",
    label: "Arabic Language",
    sub: "Grammar & Vocabulary"
  }, {
    key: "tajweed",
    label: "Tajweed Rules",
    sub: "Recitation & Pronunciation"
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setActiveTab(t.key);
      },
      style: {
        flex: 1,
        padding: "12px 8px",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
        transition: "all 0.25s ease",
        background: activeTab === t.key ? "linear-gradient(135deg, #c9a84c22, #c9a84c11)" : "transparent",
        borderBottom: activeTab === t.key ? "2px solid #c9a84c" : "2px solid transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: activeTab === t.key ? "#c9a84c" : "#6b6355"
      }
    }, t.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#4a4535",
        marginTop: 2
      }
    }, t.sub));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 40
    }
  }, allModules.map(function (mod, mi) {
    var modCompleted = mod.lessons.filter(function (l) {
      return completedLessons.includes(l.id);
    }).length;
    var modTotal = mod.lessons.length;
    var modPct = modCompleted / modTotal * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: mod.id,
      style: {
        marginBottom: 16,
        background: "#141824",
        border: "1px solid #1e2333",
        borderRadius: 16,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 18px 12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        color: "#c9a84c",
        marginBottom: 2,
        lineHeight: 1.3
      }
    }, mod.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#a09880"
      }
    }, mod.subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#6b6355",
        background: "#1e2333",
        padding: "4px 10px",
        borderRadius: 20,
        whiteSpace: "nowrap"
      }
    }, modCompleted, "/", modTotal)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#4a4535",
        marginTop: 6,
        letterSpacing: 0.5
      }
    }, mod.source), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 3,
        background: "#1e2333",
        borderRadius: 2,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(modPct, "%"),
        borderRadius: 2,
        background: modPct === 100 ? "#7ac97a" : "linear-gradient(90deg, #c9a84c, #e8d5a3)",
        transition: "width 0.5s ease"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 10px 10px"
      }
    }, mod.lessons.map(function (lesson, li) {
      var unlocked = isLessonUnlocked(mi, li);
      var done = completedLessons.includes(lesson.id);
      var typeColors = {
        vocab: "#6b8bbd",
        grammar: "#bd8b6b",
        tajweed: "#8bbd6b",
        quran: "#c9a84c",
        writing: "#b06bbd"
      };
      return /*#__PURE__*/React.createElement("button", {
        key: lesson.id,
        disabled: !unlocked,
        onClick: function onClick() {
          if (unlocked) {
            setSelectedLesson(lesson);
            setScreen("lesson");
            setQuizState(null);
          }
        },
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 14px",
          border: "none",
          borderRadius: 10,
          cursor: unlocked ? "pointer" : "default",
          background: done ? "#1a2a1a" : unlocked ? "#1a1f2e" : "#111520",
          opacity: unlocked ? 1 : 0.45,
          marginBottom: 4,
          transition: "all 0.2s ease",
          textAlign: "left"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 36,
          height: 36,
          borderRadius: 10,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: done ? "#2a4a2a" : unlocked ? "#1e2333" : "#161a28",
          color: done ? "#7ac97a" : unlocked ? typeColors[lesson.type] : "#3a3f4e",
          border: "1px solid ".concat(done ? "#3a6a3a" : unlocked ? "#2a2f3e" : "#1e2333")
        }
      }, done ? /*#__PURE__*/React.createElement(Icons.Check, null) : unlocked ? /*#__PURE__*/React.createElement(Icons.Play, null) : /*#__PURE__*/React.createElement(Icons.Lock, null)), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 500,
          color: done ? "#7ac97a" : "#e8e0d4",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, lesson.title), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginTop: 3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 9,
          padding: "2px 7px",
          borderRadius: 6,
          background: "".concat(typeColors[lesson.type], "18"),
          color: typeColors[lesson.type],
          textTransform: "uppercase",
          letterSpacing: 1,
          fontWeight: 600
        }
      }, lesson.type), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "#4a4535"
        }
      }, lesson.duration), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11,
          color: "#c9a84c"
        }
      }, "+", lesson.xp, " XP"))));
    })));
  }))), /*#__PURE__*/React.createElement("style", null, "\n        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');\n        * { box-sizing: border-box; margin: 0; padding: 0; }\n        button { font-family: inherit; }\n        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }\n        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0 } to { transform: scale(1); opacity: 1 } }\n      "));
}

// ─── Lesson Screen ─────────────────────────────────────────────────
function LessonScreen(_ref) {
  var lesson = _ref.lesson,
    onBack = _ref.onBack,
    onComplete = _ref.onComplete,
    isCompleted = _ref.isCompleted,
    quizState = _ref.quizState,
    setQuizState = _ref.setQuizState;
  var _useState19 = useState("learn"),
    _useState20 = _slicedToArray(_useState19, 2),
    phase = _useState20[0],
    setPhase = _useState20[1]; // learn → quiz → done
  var _useState21 = useState(0),
    _useState22 = _slicedToArray(_useState21, 2),
    currentQ = _useState22[0],
    setCurrentQ = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    selected = _useState24[0],
    setSelected = _useState24[1];
  var _useState25 = useState(0),
    _useState26 = _slicedToArray(_useState25, 2),
    correct = _useState26[0],
    setCorrect = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    answered = _useState28[0],
    setAnswered = _useState28[1];
  var quizKey = Object.keys(QUIZ_BANK).find(function (k) {
    return lesson.id.startsWith(k) || lesson.id === k;
  });
  var questions = QUIZ_BANK[quizKey] || QUIZ_BANK["a1-1"];
  var LESSON_CONTENT = {
    vocab: {
      title: "Vocabulary Lesson",
      body: "Focus on memorizing each word with its meaning. Repeat each word aloud 3 times. Connect the Arabic word to a visual image in your mind. Review these words in your next Quran reading session.",
      tip: "Write each new word 5 times in your notebook to build muscle memory."
    },
    grammar: {
      title: "Grammar Concept",
      body: "Understand the rule, then find 3 examples in the Quran. Grammar is the skeleton of the language \u2014 once you see the pattern, you'll recognize it everywhere in your recitation.",
      tip: "After learning a rule, open Surah Al-Baqarah and try to spot it in the first page."
    },
    tajweed: {
      title: "Tajweed Rule",
      body: "Listen to the example recitation carefully. Practice the articulation point by feeling where your tongue/lips are positioned. Record yourself and compare with a Qari's recitation.",
      tip: "Practice this rule in Surah Al-Fatiha first — it's short and you recite it daily."
    },
    quran: {
      title: "Quran Comprehension",
      body: "Read the Arabic text, then the word-by-word translation. Identify every grammar rule you've learned. Try to understand the meaning before looking at the full translation.",
      tip: "Recite this passage in your next Salah and reflect on the meaning during Sujood."
    },
    writing: {
      title: "Writing Practice",
      body: "Practice the letter forms: isolated, initial, medial, and final. Pay attention to the dots and their positions. Speed comes later \u2014 focus on accuracy first.",
      tip: "Use lined paper and practice each letter form 10 times across a full line."
    }
  };
  var content = LESSON_CONTENT[lesson.type] || LESSON_CONTENT.vocab;
  var handleAnswer = function handleAnswer(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[currentQ].ans) setCorrect(function (p) {
      return p + 1;
    });
  };
  var handleNext = function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(function (p) {
        return p + 1;
      });
      setSelected(null);
      setAnswered(false);
    } else {
      setPhase("done");
      if (!isCompleted) onComplete(lesson.id, lesson.xp);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#0a0f1a",
      color: "#e8e0d4",
      fontFamily: "'Amiri', 'Georgia', serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480,
      margin: "0 auto",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "18px 0 14px",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "#141824",
      border: "1px solid #1e2333",
      borderRadius: 10,
      width: 40,
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#a09880"
    }
  }, /*#__PURE__*/React.createElement(Icons.Arrow, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#e8e0d4"
    }
  }, phase === "learn" ? content.title : phase === "quiz" ? "Quiz Time" : "Results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginTop: 6
    }
  }, ["learn", "quiz", "done"].map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        height: 3,
        flex: 1,
        borderRadius: 2,
        background: phase === p || p === "learn" && phase !== "learn" || p === "quiz" && phase === "done" ? "#c9a84c" : "#1e2333",
        transition: "background 0.3s"
      }
    });
  })))), phase === "learn" && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.4s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #1a2235, #141824)",
      border: "1px solid #c9a84c22",
      borderRadius: 20,
      padding: "28px 22px",
      marginBottom: 20,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      color: "#c9a84c",
      fontWeight: 700,
      marginBottom: 6,
      lineHeight: 1.4
    }
  }, lesson.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: "4px 12px",
      borderRadius: 8,
      background: "#c9a84c15",
      color: "#c9a84c"
    }
  }, lesson.type.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: "4px 12px",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 4,
      background: "#1e2333",
      color: "#6b6355"
    }
  }, /*#__PURE__*/React.createElement(Icons.Clock, null), " ", lesson.duration))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#141824",
      border: "1px solid #1e2333",
      borderRadius: 16,
      padding: "22px 20px",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      color: "#a09880"
    }
  }, content.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1a1f14",
      border: "1px solid #2a3a1a",
      borderRadius: 16,
      padding: "18px 20px",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#7ac97a",
      letterSpacing: 2,
      textTransform: "uppercase",
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\uD83D\uDCA1 Pro Tip"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      color: "#8aaa7a"
    }
  }, content.tip)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPhase("quiz");
    },
    style: {
      width: "100%",
      padding: "16px",
      border: "none",
      borderRadius: 14,
      background: "linear-gradient(135deg, #c9a84c, #a88a3a)",
      color: "#0a0f1a",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      letterSpacing: 0.5,
      boxShadow: "0 4px 20px #c9a84c33"
    }
  }, "Start Quiz \u2192")), phase === "quiz" && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.4s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#6b6355"
    }
  }, "Question ", currentQ + 1, " of ", questions.length), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#7ac97a",
      fontFamily: "monospace"
    }
  }, correct, " correct")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#141824",
      border: "1px solid #1e2333",
      borderRadius: 20,
      padding: "28px 22px",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      lineHeight: 1.6,
      color: "#e8e0d4",
      textAlign: "center"
    }
  }, questions[currentQ].q)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 24
    }
  }, questions[currentQ].opts.map(function (opt, i) {
    var isCorrect = i === questions[currentQ].ans;
    var isSelected = selected === i;
    var bg = "#1a1f2e";
    var border = "#2a2f3e";
    var textColor = "#e8e0d4";
    if (answered) {
      if (isCorrect) {
        bg = "#1a2a1a";
        border = "#4a8c4a";
        textColor = "#7ac97a";
      } else if (isSelected && !isCorrect) {
        bg = "#2a1a1a";
        border = "#8c4a4a";
        textColor = "#c97a7a";
      }
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return handleAnswer(i);
      },
      style: {
        width: "100%",
        padding: "16px 18px",
        textAlign: "left",
        border: "1px solid ".concat(border),
        borderRadius: 14,
        background: bg,
        color: textColor,
        fontSize: 14,
        cursor: answered ? "default" : "pointer",
        transition: "all 0.2s ease",
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 26,
        height: 26,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        background: answered && isCorrect ? "#2a4a2a" : "#141824",
        marginRight: 12,
        fontSize: 12,
        fontWeight: 600,
        color: answered && isCorrect ? "#7ac97a" : "#6b6355"
      }
    }, String.fromCharCode(65 + i)), opt);
  })), answered && /*#__PURE__*/React.createElement("button", {
    onClick: handleNext,
    style: {
      width: "100%",
      padding: "16px",
      border: "none",
      borderRadius: 14,
      background: "linear-gradient(135deg, #c9a84c, #a88a3a)",
      color: "#0a0f1a",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      animation: "fadeIn 0.3s ease"
    }
  }, currentQ < questions.length - 1 ? "Next Question →" : "See Results →")), phase === "done" && /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "fadeIn 0.4s ease",
      textAlign: "center",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, #1a2235, #141824)",
      border: "1px solid #c9a84c22",
      borderRadius: 24,
      padding: "36px 24px",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      color: "#c9a84c"
    }
  }, /*#__PURE__*/React.createElement(Icons.Trophy, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: "#c9a84c",
      marginBottom: 6
    }
  }, correct, "/", questions.length, " Correct"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#a09880",
      marginBottom: 20
    }
  }, correct === questions.length ? "Perfect! ما شاء الله" : correct >= questions.length * 0.6 ? "Good work! Keep practicing." : "Review this lesson and try again."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "#c9a84c",
      fontFamily: "monospace"
    }
  }, "+", lesson.xp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#6b6355",
      letterSpacing: 1
    }
  }, "XP EARNED")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "#1e2333"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "#e8734a",
      fontFamily: "monospace"
    }
  }, Math.round(correct / questions.length * 100), "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#6b6355",
      letterSpacing: 1
    }
  }, "ACCURACY")))), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      width: "100%",
      padding: "16px",
      border: "none",
      borderRadius: 14,
      background: "linear-gradient(135deg, #c9a84c, #a88a3a)",
      color: "#0a0f1a",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Continue Learning \u2192"))), /*#__PURE__*/React.createElement("style", null, "\n        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');\n        * { box-sizing: border-box; margin: 0; padding: 0; }\n        button { font-family: inherit; }\n        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }\n      "));
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(QuranLearningApp));

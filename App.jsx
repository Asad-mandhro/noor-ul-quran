import { useState, useEffect, useCallback, useRef } from "react";

// ─── DATA: Course Curriculum ───────────────────────────────────────
const ARABIC_MODULES = [
  {
    id: "a1",
    title: "حروف الهجاء",
    subtitle: "Arabic Alphabet & Pronunciation",
    source: "Foundation — Reading & Writing",
    lessons: [
      { id: "a1-1", title: "Letters أ to خ — Shapes & Sounds", type: "vocab", xp: 20, duration: "15 min" },
      { id: "a1-2", title: "Letters د to ظ — Writing Practice", type: "writing", xp: 20, duration: "15 min" },
      { id: "a1-3", title: "Letters ع to ي — Complete Set", type: "vocab", xp: 20, duration: "15 min" },
      { id: "a1-4", title: "Short Vowels: فَتحَة ضَمَّة كَسرَة", type: "vocab", xp: 25, duration: "20 min" },
      { id: "a1-5", title: "Long Vowels & Sukoon", type: "grammar", xp: 25, duration: "20 min" },
      { id: "a1-6", title: "Tanween: ـًـٍـٌ", type: "grammar", xp: 30, duration: "20 min" },
    ],
  },
  {
    id: "a2",
    title: "الكلمات الأساسية",
    subtitle: "Essential Quranic Vocabulary",
    source: "Foundation — Core Words",
    lessons: [
      { id: "a2-1", title: "Most Frequent 50 Quran Words", type: "vocab", xp: 30, duration: "20 min" },
      { id: "a2-2", title: "Salah Vocabulary & Meanings", type: "vocab", xp: 25, duration: "15 min" },
      { id: "a2-3", title: "Dua Phrases — Word Breakdown", type: "vocab", xp: 25, duration: "15 min" },
      { id: "a2-4", title: "Common Verbs in Quran", type: "vocab", xp: 30, duration: "20 min" },
      { id: "a2-5", title: "Nouns & Pronouns — Quran Context", type: "grammar", xp: 30, duration: "20 min" },
    ],
  },
  {
    id: "a3",
    title: "النحو الأساسي",
    subtitle: "Basic Nahw (Grammar)",
    source: "Intermediate — Sentence Structure",
    lessons: [
      { id: "a3-1", title: "اسم فعل حرف — Word Categories", type: "grammar", xp: 35, duration: "25 min" },
      { id: "a3-2", title: "المبتدأ والخبر — Subject & Predicate", type: "grammar", xp: 35, duration: "25 min" },
      { id: "a3-3", title: "Masculine & Feminine — مذكر و مؤنث", type: "grammar", xp: 30, duration: "20 min" },
      { id: "a3-4", title: "Singular, Dual, Plural", type: "grammar", xp: 35, duration: "25 min" },
      { id: "a3-5", title: "Attached Pronouns — الضمائر المتصلة", type: "grammar", xp: 40, duration: "25 min" },
    ],
  },
  {
    id: "a4",
    title: "الصرف",
    subtitle: "Morphology (Sarf)",
    source: "Intermediate — Word Patterns",
    lessons: [
      { id: "a4-1", title: "Root System — فعل Pattern", type: "grammar", xp: 40, duration: "25 min" },
      { id: "a4-2", title: "Past Tense Conjugation — الماضي", type: "grammar", xp: 40, duration: "25 min" },
      { id: "a4-3", title: "Present Tense — المضارع", type: "grammar", xp: 40, duration: "25 min" },
      { id: "a4-4", title: "Command Form — الأمر", type: "grammar", xp: 35, duration: "20 min" },
      { id: "a4-5", title: "Verb Forms I-X — أوزان الأفعال", type: "grammar", xp: 50, duration: "30 min" },
    ],
  },
  {
    id: "a5",
    title: "فهم القرآن",
    subtitle: "Quran Comprehension",
    source: "Advanced — Applied Reading",
    lessons: [
      { id: "a5-1", title: "سورة الفاتحة — Word-by-Word", type: "quran", xp: 40, duration: "25 min" },
      { id: "a5-2", title: "Last 10 Surahs — Vocabulary", type: "quran", xp: 45, duration: "25 min" },
      { id: "a5-3", title: "آية الكرسي — Grammar Breakdown", type: "quran", xp: 50, duration: "30 min" },
      { id: "a5-4", title: "سورة يس — Selected Passages", type: "quran", xp: 50, duration: "30 min" },
      { id: "a5-5", title: "سورة الملك — Complete Analysis", type: "quran", xp: 55, duration: "30 min" },
    ],
  },
];

const TAJWEED_MODULES = [
  {
    id: "t1",
    title: "مخارج الحروف",
    subtitle: "Articulation Points",
    source: "Foundation — Letter Origins",
    lessons: [
      { id: "t1-1", title: "Throat Letters — حروف الحلق", type: "tajweed", xp: 25, duration: "15 min" },
      { id: "t1-2", title: "Tongue Letters — حروف اللسان", type: "tajweed", xp: 30, duration: "20 min" },
      { id: "t1-3", title: "Lip Letters — حروف الشفتين", type: "tajweed", xp: 25, duration: "15 min" },
      { id: "t1-4", title: "Nasal Cavity — الخَيشوم", type: "tajweed", xp: 25, duration: "15 min" },
      { id: "t1-5", title: "Empty Space — الجَوف", type: "tajweed", xp: 20, duration: "15 min" },
    ],
  },
  {
    id: "t2",
    title: "صفات الحروف",
    subtitle: "Letter Characteristics",
    source: "Foundation — Letter Qualities",
    lessons: [
      { id: "t2-1", title: "Heavy & Light Letters — تفخيم و ترقيق", type: "tajweed", xp: 30, duration: "20 min" },
      { id: "t2-2", title: "Qalqalah — القلقلة", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t2-3", title: "Whispered & Voiced — همس و جهر", type: "tajweed", xp: 30, duration: "20 min" },
      { id: "t2-4", title: "Elongation & Constriction", type: "tajweed", xp: 30, duration: "20 min" },
    ],
  },
  {
    id: "t3",
    title: "أحكام النون الساكنة",
    subtitle: "Noon Sakinah & Tanween Rules",
    source: "Intermediate — Noon Rules",
    lessons: [
      { id: "t3-1", title: "إظهار — Clear Pronunciation", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t3-2", title: "إدغام — Merging", type: "tajweed", xp: 40, duration: "25 min" },
      { id: "t3-3", title: "إقلاب — Conversion", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t3-4", title: "إخفاء — Concealment", type: "tajweed", xp: 40, duration: "25 min" },
    ],
  },
  {
    id: "t4",
    title: "أحكام الميم",
    subtitle: "Meem Sakinah Rules",
    source: "Intermediate — Meem Rules",
    lessons: [
      { id: "t4-1", title: "إخفاء شفوي — Lip Concealment", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t4-2", title: "إدغام شفوي — Lip Merging", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t4-3", title: "إظهار شفوي — Lip Clarity", type: "tajweed", xp: 30, duration: "20 min" },
    ],
  },
  {
    id: "t5",
    title: "المدود",
    subtitle: "Elongation Rules",
    source: "Advanced — Madd Types",
    lessons: [
      { id: "t5-1", title: "مد طبيعي — Natural Madd (2 beats)", type: "tajweed", xp: 30, duration: "20 min" },
      { id: "t5-2", title: "مد متصل — Connected Madd (4-5)", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t5-3", title: "مد منفصل — Separated Madd", type: "tajweed", xp: 35, duration: "20 min" },
      { id: "t5-4", title: "مد لازم — Necessary Madd (6 beats)", type: "tajweed", xp: 40, duration: "25 min" },
      { id: "t5-5", title: "مد عارض — Temporary Madd", type: "tajweed", xp: 35, duration: "20 min" },
    ],
  },
  {
    id: "t6",
    title: "الوقف والابتداء",
    subtitle: "Stopping & Starting Rules",
    source: "Advanced — Recitation Flow",
    lessons: [
      { id: "t6-1", title: "Signs of Waqf — علامات الوقف", type: "tajweed", xp: 30, duration: "20 min" },
      { id: "t6-2", title: "Types of Stops — Compulsory & Permissible", type: "tajweed", xp: 35, duration: "25 min" },
      { id: "t6-3", title: "Starting After a Stop — الابتداء", type: "tajweed", xp: 30, duration: "20 min" },
    ],
  },
];

// ─── Quiz Data ─────────────────────────────────────────────────────
const QUIZ_BANK = {
  "a1-1": [
    { q: "What is the first letter of the Arabic alphabet?", opts: ["أ (Alif)", "ب (Ba)", "ت (Ta)", "ج (Jim)"], ans: 0 },
    { q: "How many letters are in the Arabic alphabet?", opts: ["24", "26", "28", "30"], ans: 2 },
    { q: "Which letter makes the 'kh' sound (like clearing throat)?", opts: ["ح", "خ", "ه", "ع"], ans: 1 },
  ],
  "a2-1": [
    { q: "What does 'الله' mean?", opts: ["The Book", "The Prayer", "Allah (God)", "The Day"], ans: 2 },
    { q: "'الحمد' means:", opts: ["Mercy", "Praise", "Lord", "Guide"], ans: 1 },
    { q: "The word 'رَبّ' appears frequently. It means:", opts: ["King", "Lord/Sustainer", "Creator", "Judge"], ans: 1 },
  ],
  "a3-1": [
    { q: "Arabic words are categorized into how many types?", opts: ["2", "3", "4", "5"], ans: 1 },
    { q: "A word that has meaning and is tied to time is called:", opts: ["اسم (Ism)", "فعل (Fi'l)", "حرف (Harf)", "صفة (Sifa)"], ans: 1 },
    { q: "Particles (حروف) in Arabic:", opts: ["Have independent meaning", "Need other words for meaning", "Are always nouns", "Are always verbs"], ans: 1 },
  ],
  "t1-1": [
    { q: "How many articulation points (مخارج) are there?", opts: ["5 main areas", "3 main areas", "7 main areas", "10 main areas"], ans: 0 },
    { q: "Which letters come from the throat?", opts: ["ب م و", "ه ع ح غ خ ء", "ت د ن", "ف ش"], ans: 1 },
    { q: "ء (Hamza) originates from:", opts: ["Tongue tip", "Lips", "Deepest part of throat", "Nasal cavity"], ans: 2 },
  ],
  "t2-2": [
    { q: "Qalqalah letters are:", opts: ["ق ط ب ج د", "ن م و ي", "ح خ ع غ", "ص ض ط ظ"], ans: 0 },
    { q: "Qalqalah means:", opts: ["Elongation", "Echo/Bounce", "Nasalization", "Merging"], ans: 1 },
    { q: "When is Qalqalah strongest?", opts: ["In the middle of a word", "When letter has a vowel", "At the end during a stop", "Always the same"], ans: 2 },
  ],
  "t3-2": [
    { q: "Idgham applies when Noon Sakinah is followed by:", opts: ["ي ر م ل و ن", "ء ه ع ح غ خ", "ب only", "Any letter"], ans: 0 },
    { q: "Idgham with Ghunnah uses which letters?", opts: ["ل ر", "ي ن م و", "All 6", "None"], ans: 1 },
    { q: "In Idgham, the Noon Sakinah:", opts: ["Is pronounced clearly", "Merges into next letter", "Becomes a Meem", "Is silent"], ans: 1 },
  ],
  "t5-1": [
    { q: "Natural Madd (مد طبيعي) is held for:", opts: ["1 beat", "2 beats", "4 beats", "6 beats"], ans: 1 },
    { q: "Natural Madd occurs with:", opts: ["Alif after Fathah, Waw after Dammah, Ya after Kasrah", "Only Alif", "Any letter", "Hamzah only"], ans: 0 },
    { q: "If no Hamzah or Sukoon follows, the Madd is:", opts: ["Connected", "Separated", "Natural", "Necessary"], ans: 2 },
  ],
};

// ─── Utility Functions ─────────────────────────────────────────────
const getStoredData = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const setStoredData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

// ─── ICONS ─────────────────────────────────────────────────────────
const Icons = {
  Fire: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
  Book: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Lock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Play: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Trophy: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Target: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

// ─── Main App ──────────────────────────────────────────────────────
export default function QuranLearningApp() {
  const [screen, setScreen] = useState("home");
  const [activeTab, setActiveTab] = useState("arabic");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => getStoredData("q_completed", []));
  const [streak, setStreak] = useState(() => getStoredData("q_streak", 0));
  const [totalXP, setTotalXP] = useState(() => getStoredData("q_xp", 0));
  const [lastDate, setLastDate] = useState(() => getStoredData("q_lastDate", null));
  const [quizState, setQuizState] = useState(null);
  const [dailyGoalMet, setDailyGoalMet] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const today = new Date().toDateString();

  useEffect(() => {
    setStoredData("q_completed", completedLessons);
    setStoredData("q_xp", totalXP);
    setStoredData("q_streak", streak);
    setStoredData("q_lastDate", lastDate);
  }, [completedLessons, totalXP, streak, lastDate]);

  useEffect(() => {
    if (lastDate && lastDate !== today) {
      const last = new Date(lastDate);
      const diff = Math.floor((new Date(today) - last) / 86400000);
      if (diff > 1) {
        setStreak(0);
        setStoredData("q_streak", 0);
      }
    }
  }, []);

  const completeLesson = useCallback((lessonId, xp) => {
    if (completedLessons.includes(lessonId)) return;
    setCompletedLessons((prev) => [...prev, lessonId]);
    setTotalXP((prev) => prev + xp);
    if (lastDate !== today) {
      setStreak((prev) => prev + 1);
      setLastDate(today);
    }
    setDailyGoalMet(true);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2500);
  }, [completedLessons, lastDate, today]);

  const allModules = activeTab === "arabic" ? ARABIC_MODULES : TAJWEED_MODULES;
  const totalLessons = [...ARABIC_MODULES, ...TAJWEED_MODULES].reduce((s, m) => s + m.lessons.length, 0);
  const completedCount = completedLessons.length;
  const level = Math.floor(totalXP / 200) + 1;
  const xpInLevel = totalXP % 200;

  const isLessonUnlocked = (moduleIdx, lessonIdx) => {
    if (moduleIdx === 0 && lessonIdx === 0) return true;
    const mod = allModules[moduleIdx];
    if (lessonIdx > 0) return completedLessons.includes(mod.lessons[lessonIdx - 1].id);
    const prevMod = allModules[moduleIdx - 1];
    return prevMod.lessons.every((l) => completedLessons.includes(l.id));
  };

  const getNextLesson = () => {
    for (const mods of [ARABIC_MODULES, TAJWEED_MODULES]) {
      for (let mi = 0; mi < mods.length; mi++) {
        for (let li = 0; li < mods[mi].lessons.length; li++) {
          const l = mods[mi].lessons[li];
          if (!completedLessons.includes(l.id)) return l;
        }
      }
    }
    return null;
  };

  // ─── Screens ───────────────────────────────────────────────────
  if (screen === "lesson" && selectedLesson) {
    return (
      <LessonScreen
        lesson={selectedLesson}
        onBack={() => { setScreen("home"); setSelectedLesson(null); }}
        onComplete={completeLesson}
        isCompleted={completedLessons.includes(selectedLesson.id)}
        quizState={quizState}
        setQuizState={setQuizState}
      />
    );
  }

  const nextLesson = getNextLesson();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0f1a",
      color: "#e8e0d4",
      fontFamily: "'Amiri', 'Georgia', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* BG Pattern */}
      <div style={{
        position: "fixed", inset: 0, opacity: 0.03, zIndex: 0,
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, #c9a84c 30px, #c9a84c 31px)`,
      }} />

      {/* Celebration Overlay */}
      {showCelebration && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(10,15,26,0.85)", backdropFilter: "blur(8px)",
          animation: "fadeIn 0.3s ease",
        }}>
          <div style={{ textAlign: "center", animation: "scaleIn 0.4s ease" }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>🌟</div>
            <div style={{ fontSize: 28, color: "#c9a84c", fontWeight: 700, marginBottom: 8 }}>ما شاء الله</div>
            <div style={{ fontSize: 16, color: "#a09880", letterSpacing: 1 }}>Lesson Complete!</div>
          </div>
        </div>
      )}

      <div style={{ position: "relative", zIndex: 1, maxWidth: 480, margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div style={{
          padding: "20px 0 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <h1 style={{
              fontSize: 22, margin: 0, fontWeight: 700,
              background: "linear-gradient(135deg, #c9a84c, #e8d5a3)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              letterSpacing: 0.5,
            }}>
              نور القرآن
            </h1>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "#6b6355", letterSpacing: 2, textTransform: "uppercase" }}>
              Quran Arabic Academy
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#e8734a" }}>
              <Icons.Fire />
              <span style={{ fontWeight: 700, fontSize: 16, fontFamily: "monospace" }}>{streak}</span>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #1a1f2e, #141824)",
              border: "1px solid #2a2f3e",
              borderRadius: 20, padding: "6px 14px",
              fontSize: 13, fontWeight: 600, color: "#c9a84c",
              fontFamily: "monospace",
            }}>
              Lvl {level}
            </div>
          </div>
        </div>

        {/* XP Bar */}
        <div style={{
          background: "#141824", borderRadius: 12, padding: "14px 16px",
          border: "1px solid #1e2333", marginBottom: 16,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12 }}>
            <span style={{ color: "#6b6355" }}>{totalXP} XP Total</span>
            <span style={{ color: "#c9a84c" }}>{xpInLevel}/200 to Lvl {level + 1}</span>
          </div>
          <div style={{ height: 6, background: "#1e2333", borderRadius: 3, overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${(xpInLevel / 200) * 100}%`,
              background: "linear-gradient(90deg, #c9a84c, #e8d5a3)",
              borderRadius: 3, transition: "width 0.6s ease",
            }} />
          </div>
        </div>

        {/* Daily Challenge Card */}
        {nextLesson && !dailyGoalMet && (
          <button
            onClick={() => { setSelectedLesson(nextLesson); setScreen("lesson"); setQuizState(null); }}
            style={{
              width: "100%", textAlign: "left", cursor: "pointer",
              background: "linear-gradient(135deg, #1a2235, #162030)",
              border: "1px solid #c9a84c33", borderRadius: 16, padding: "18px 20px",
              marginBottom: 16, position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: -30, right: -30, width: 100, height: 100,
              background: "radial-gradient(circle, #c9a84c11, transparent 70%)",
            }} />
            <div style={{
              display: "flex", alignItems: "center", gap: 6, marginBottom: 10,
              fontSize: 10, color: "#c9a84c", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700,
            }}>
              <Icons.Target /> Today's Lesson
            </div>
            <div style={{ fontSize: 17, fontWeight: 600, color: "#e8e0d4", marginBottom: 4 }}>
              {nextLesson.title}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#6b6355" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Icons.Clock /> {nextLesson.duration}</span>
              <span>·</span>
              <span>+{nextLesson.xp} XP</span>
            </div>
          </button>
        )}

        {dailyGoalMet && (
          <div style={{
            background: "linear-gradient(135deg, #1a2a1a, #162016)",
            border: "1px solid #4a8c4a33", borderRadius: 16, padding: "18px 20px",
            marginBottom: 16, textAlign: "center",
          }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>✅</div>
            <div style={{ color: "#7ac97a", fontWeight: 600, fontSize: 15 }}>Daily Goal Complete</div>
            <div style={{ color: "#5a8a5a", fontSize: 12, marginTop: 4 }}>Keep going or come back tomorrow!</div>
          </div>
        )}

        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 20 }}>
          {[
            { label: "Completed", value: completedCount, icon: <Icons.Check />, color: "#7ac97a" },
            { label: "Total", value: totalLessons, icon: <Icons.Book />, color: "#6b8bbd" },
            { label: "Streak", value: `${streak}d`, icon: <Icons.Fire />, color: "#e8734a" },
          ].map((s) => (
            <div key={s.label} style={{
              background: "#141824", border: "1px solid #1e2333", borderRadius: 12,
              padding: "14px 12px", textAlign: "center",
            }}>
              <div style={{ color: s.color, marginBottom: 6, display: "flex", justifyContent: "center" }}>{s.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "monospace", color: "#e8e0d4" }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "#6b6355", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: "flex", background: "#141824", borderRadius: 12,
          border: "1px solid #1e2333", padding: 4, marginBottom: 20,
        }}>
          {[
            { key: "arabic", label: "Arabic Language", sub: "Grammar & Vocabulary" },
            { key: "tajweed", label: "Tajweed Rules", sub: "Recitation & Pronunciation" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              style={{
                flex: 1, padding: "12px 8px", border: "none", borderRadius: 10,
                cursor: "pointer", transition: "all 0.25s ease",
                background: activeTab === t.key ? "linear-gradient(135deg, #c9a84c22, #c9a84c11)" : "transparent",
                borderBottom: activeTab === t.key ? "2px solid #c9a84c" : "2px solid transparent",
              }}
            >
              <div style={{
                fontSize: 13, fontWeight: 600,
                color: activeTab === t.key ? "#c9a84c" : "#6b6355",
              }}>{t.label}</div>
              <div style={{ fontSize: 10, color: "#4a4535", marginTop: 2 }}>{t.sub}</div>
            </button>
          ))}
        </div>

        {/* Module List */}
        <div style={{ paddingBottom: 40 }}>
          {allModules.map((mod, mi) => {
            const modCompleted = mod.lessons.filter((l) => completedLessons.includes(l.id)).length;
            const modTotal = mod.lessons.length;
            const modPct = (modCompleted / modTotal) * 100;

            return (
              <div key={mod.id} style={{
                marginBottom: 16, background: "#141824",
                border: "1px solid #1e2333", borderRadius: 16, overflow: "hidden",
              }}>
                {/* Module Header */}
                <div style={{ padding: "16px 18px 12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: 20, color: "#c9a84c", marginBottom: 2, lineHeight: 1.3 }}>{mod.title}</div>
                      <div style={{ fontSize: 13, color: "#a09880" }}>{mod.subtitle}</div>
                    </div>
                    <div style={{
                      fontSize: 11, color: "#6b6355", background: "#1e2333",
                      padding: "4px 10px", borderRadius: 20, whiteSpace: "nowrap",
                    }}>
                      {modCompleted}/{modTotal}
                    </div>
                  </div>
                  <div style={{ fontSize: 10, color: "#4a4535", marginTop: 6, letterSpacing: 0.5 }}>{mod.source}</div>
                  {/* Progress bar */}
                  <div style={{ height: 3, background: "#1e2333", borderRadius: 2, marginTop: 10 }}>
                    <div style={{
                      height: "100%", width: `${modPct}%`, borderRadius: 2,
                      background: modPct === 100 ? "#7ac97a" : "linear-gradient(90deg, #c9a84c, #e8d5a3)",
                      transition: "width 0.5s ease",
                    }} />
                  </div>
                </div>

                {/* Lessons */}
                <div style={{ padding: "0 10px 10px" }}>
                  {mod.lessons.map((lesson, li) => {
                    const unlocked = isLessonUnlocked(mi, li);
                    const done = completedLessons.includes(lesson.id);
                    const typeColors = {
                      vocab: "#6b8bbd", grammar: "#bd8b6b", tajweed: "#8bbd6b",
                      quran: "#c9a84c", writing: "#b06bbd",
                    };

                    return (
                      <button
                        key={lesson.id}
                        disabled={!unlocked}
                        onClick={() => {
                          if (unlocked) {
                            setSelectedLesson(lesson);
                            setScreen("lesson");
                            setQuizState(null);
                          }
                        }}
                        style={{
                          width: "100%", display: "flex", alignItems: "center", gap: 12,
                          padding: "12px 14px", border: "none", borderRadius: 10,
                          cursor: unlocked ? "pointer" : "default",
                          background: done ? "#1a2a1a" : unlocked ? "#1a1f2e" : "#111520",
                          opacity: unlocked ? 1 : 0.45,
                          marginBottom: 4, transition: "all 0.2s ease",
                          textAlign: "left",
                        }}
                      >
                        {/* Status indicator */}
                        <div style={{
                          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          background: done ? "#2a4a2a" : unlocked ? "#1e2333" : "#161a28",
                          color: done ? "#7ac97a" : unlocked ? typeColors[lesson.type] : "#3a3f4e",
                          border: `1px solid ${done ? "#3a6a3a" : unlocked ? "#2a2f3e" : "#1e2333"}`,
                        }}>
                          {done ? <Icons.Check /> : unlocked ? <Icons.Play /> : <Icons.Lock />}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: 13, fontWeight: 500, color: done ? "#7ac97a" : "#e8e0d4",
                            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                          }}>
                            {lesson.title}
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3 }}>
                            <span style={{
                              fontSize: 9, padding: "2px 7px", borderRadius: 6,
                              background: `${typeColors[lesson.type]}18`,
                              color: typeColors[lesson.type],
                              textTransform: "uppercase", letterSpacing: 1, fontWeight: 600,
                            }}>
                              {lesson.type}
                            </span>
                            <span style={{ fontSize: 11, color: "#4a4535" }}>{lesson.duration}</span>
                            <span style={{ fontSize: 11, color: "#c9a84c" }}>+{lesson.xp} XP</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { font-family: inherit; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </div>
  );
}

// ─── Lesson Screen ─────────────────────────────────────────────────
function LessonScreen({ lesson, onBack, onComplete, isCompleted, quizState, setQuizState }) {
  const [phase, setPhase] = useState("learn"); // learn → quiz → done
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(false);

  const quizKey = Object.keys(QUIZ_BANK).find((k) => lesson.id.startsWith(k) || lesson.id === k);
  const questions = QUIZ_BANK[quizKey] || QUIZ_BANK["a1-1"];

  const LESSON_CONTENT = {
    vocab: {
      title: "Vocabulary Lesson",
      body: `Focus on memorizing each word with its meaning. Repeat each word aloud 3 times. Connect the Arabic word to a visual image in your mind. Review these words in your next Quran reading session.`,
      tip: "Write each new word 5 times in your notebook to build muscle memory.",
    },
    grammar: {
      title: "Grammar Concept",
      body: `Understand the rule, then find 3 examples in the Quran. Grammar is the skeleton of the language — once you see the pattern, you'll recognize it everywhere in your recitation.`,
      tip: "After learning a rule, open Surah Al-Baqarah and try to spot it in the first page.",
    },
    tajweed: {
      title: "Tajweed Rule",
      body: `Listen to the example recitation carefully. Practice the articulation point by feeling where your tongue/lips are positioned. Record yourself and compare with a Qari's recitation.`,
      tip: "Practice this rule in Surah Al-Fatiha first — it's short and you recite it daily.",
    },
    quran: {
      title: "Quran Comprehension",
      body: `Read the Arabic text, then the word-by-word translation. Identify every grammar rule you've learned. Try to understand the meaning before looking at the full translation.`,
      tip: "Recite this passage in your next Salah and reflect on the meaning during Sujood.",
    },
    writing: {
      title: "Writing Practice",
      body: `Practice the letter forms: isolated, initial, medial, and final. Pay attention to the dots and their positions. Speed comes later — focus on accuracy first.`,
      tip: "Use lined paper and practice each letter form 10 times across a full line.",
    },
  };

  const content = LESSON_CONTENT[lesson.type] || LESSON_CONTENT.vocab;

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === questions[currentQ].ans) setCorrect((p) => p + 1);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((p) => p + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setPhase("done");
      if (!isCompleted) onComplete(lesson.id, lesson.xp);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0f1a", color: "#e8e0d4",
      fontFamily: "'Amiri', 'Georgia', serif",
    }}>
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 16px" }}>
        {/* Top bar */}
        <div style={{
          display: "flex", alignItems: "center", padding: "18px 0 14px", gap: 12,
        }}>
          <button onClick={onBack} style={{
            background: "#141824", border: "1px solid #1e2333", borderRadius: 10,
            width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#a09880",
          }}>
            <Icons.Arrow />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#e8e0d4" }}>
              {phase === "learn" ? content.title : phase === "quiz" ? "Quiz Time" : "Results"}
            </div>
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
              {["learn", "quiz", "done"].map((p) => (
                <div key={p} style={{
                  height: 3, flex: 1, borderRadius: 2,
                  background: phase === p || (p === "learn" && phase !== "learn") || (p === "quiz" && phase === "done")
                    ? "#c9a84c" : "#1e2333",
                  transition: "background 0.3s",
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* LEARN Phase */}
        {phase === "learn" && (
          <div style={{ animation: "fadeIn 0.4s ease" }}>
            <div style={{
              background: "linear-gradient(135deg, #1a2235, #141824)",
              border: "1px solid #c9a84c22", borderRadius: 20,
              padding: "28px 22px", marginBottom: 20, textAlign: "center",
            }}>
              <div style={{ fontSize: 24, color: "#c9a84c", fontWeight: 700, marginBottom: 6, lineHeight: 1.4 }}>
                {lesson.title}
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 10 }}>
                <span style={{
                  fontSize: 11, padding: "4px 12px", borderRadius: 8,
                  background: "#c9a84c15", color: "#c9a84c",
                }}>
                  {lesson.type.toUpperCase()}
                </span>
                <span style={{
                  fontSize: 11, padding: "4px 12px", borderRadius: 8,
                  display: "flex", alignItems: "center", gap: 4,
                  background: "#1e2333", color: "#6b6355",
                }}>
                  <Icons.Clock /> {lesson.duration}
                </span>
              </div>
            </div>

            <div style={{
              background: "#141824", border: "1px solid #1e2333", borderRadius: 16,
              padding: "22px 20px", marginBottom: 16,
            }}>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: "#a09880" }}>
                {content.body}
              </div>
            </div>

            <div style={{
              background: "#1a1f14", border: "1px solid #2a3a1a", borderRadius: 16,
              padding: "18px 20px", marginBottom: 28,
            }}>
              <div style={{
                fontSize: 10, color: "#7ac97a", letterSpacing: 2, textTransform: "uppercase",
                fontWeight: 700, marginBottom: 8,
              }}>
                💡 Pro Tip
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: "#8aaa7a" }}>
                {content.tip}
              </div>
            </div>

            <button
              onClick={() => setPhase("quiz")}
              style={{
                width: "100%", padding: "16px", border: "none", borderRadius: 14,
                background: "linear-gradient(135deg, #c9a84c, #a88a3a)", color: "#0a0f1a",
                fontSize: 16, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5,
                boxShadow: "0 4px 20px #c9a84c33",
              }}
            >
              Start Quiz →
            </button>
          </div>
        )}

        {/* QUIZ Phase */}
        {phase === "quiz" && (
          <div style={{ animation: "fadeIn 0.4s ease" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              marginBottom: 20, padding: "0 4px",
            }}>
              <span style={{ fontSize: 12, color: "#6b6355" }}>
                Question {currentQ + 1} of {questions.length}
              </span>
              <span style={{ fontSize: 12, color: "#7ac97a", fontFamily: "monospace" }}>
                {correct} correct
              </span>
            </div>

            <div style={{
              background: "#141824", border: "1px solid #1e2333", borderRadius: 20,
              padding: "28px 22px", marginBottom: 20,
            }}>
              <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.6, color: "#e8e0d4", textAlign: "center" }}>
                {questions[currentQ].q}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
              {questions[currentQ].opts.map((opt, i) => {
                const isCorrect = i === questions[currentQ].ans;
                const isSelected = selected === i;
                let bg = "#1a1f2e";
                let border = "#2a2f3e";
                let textColor = "#e8e0d4";

                if (answered) {
                  if (isCorrect) { bg = "#1a2a1a"; border = "#4a8c4a"; textColor = "#7ac97a"; }
                  else if (isSelected && !isCorrect) { bg = "#2a1a1a"; border = "#8c4a4a"; textColor = "#c97a7a"; }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    style={{
                      width: "100%", padding: "16px 18px", textAlign: "left",
                      border: `1px solid ${border}`, borderRadius: 14,
                      background: bg, color: textColor, fontSize: 14,
                      cursor: answered ? "default" : "pointer",
                      transition: "all 0.2s ease", fontFamily: "inherit",
                    }}
                  >
                    <span style={{
                      display: "inline-flex", width: 26, height: 26, borderRadius: 8,
                      alignItems: "center", justifyContent: "center",
                      background: answered && isCorrect ? "#2a4a2a" : "#141824",
                      marginRight: 12, fontSize: 12, fontWeight: 600,
                      color: answered && isCorrect ? "#7ac97a" : "#6b6355",
                    }}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <button
                onClick={handleNext}
                style={{
                  width: "100%", padding: "16px", border: "none", borderRadius: 14,
                  background: "linear-gradient(135deg, #c9a84c, #a88a3a)", color: "#0a0f1a",
                  fontSize: 16, fontWeight: 700, cursor: "pointer",
                  animation: "fadeIn 0.3s ease",
                }}
              >
                {currentQ < questions.length - 1 ? "Next Question →" : "See Results →"}
              </button>
            )}
          </div>
        )}

        {/* DONE Phase */}
        {phase === "done" && (
          <div style={{ animation: "fadeIn 0.4s ease", textAlign: "center", paddingTop: 20 }}>
            <div style={{
              background: "linear-gradient(135deg, #1a2235, #141824)",
              border: "1px solid #c9a84c22", borderRadius: 24,
              padding: "36px 24px", marginBottom: 24,
            }}>
              <div style={{ marginBottom: 16, color: "#c9a84c" }}><Icons.Trophy /></div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#c9a84c", marginBottom: 6 }}>
                {correct}/{questions.length} Correct
              </div>
              <div style={{ fontSize: 14, color: "#a09880", marginBottom: 20 }}>
                {correct === questions.length ? "Perfect! ما شاء الله" :
                  correct >= questions.length * 0.6 ? "Good work! Keep practicing." :
                    "Review this lesson and try again."}
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#c9a84c", fontFamily: "monospace" }}>
                    +{lesson.xp}
                  </div>
                  <div style={{ fontSize: 10, color: "#6b6355", letterSpacing: 1 }}>XP EARNED</div>
                </div>
                <div style={{ width: 1, background: "#1e2333" }} />
                <div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#e8734a", fontFamily: "monospace" }}>
                    {Math.round((correct / questions.length) * 100)}%
                  </div>
                  <div style={{ fontSize: 10, color: "#6b6355", letterSpacing: 1 }}>ACCURACY</div>
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              style={{
                width: "100%", padding: "16px", border: "none", borderRadius: 14,
                background: "linear-gradient(135deg, #c9a84c, #a88a3a)", color: "#0a0f1a",
                fontSize: 16, fontWeight: 700, cursor: "pointer",
              }}
            >
              Continue Learning →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button { font-family: inherit; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </div>
  );
}

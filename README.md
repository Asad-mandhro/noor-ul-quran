# نور القرآن — Noor ul Quran

A personalized Arabic & Quran learning app built as a React component. Designed for daily forced learning with a gamified streak/XP system.

## What it covers

### Arabic Language Track
- **Foundation** — Arabic alphabet, short/long vowels, tanween
- **Core Vocabulary** — Most frequent Quranic words, Salah terms, common verbs
- **Nahw (Grammar)** — Word categories, subject/predicate, gender, number, pronouns
- **Sarf (Morphology)** — Root system, verb conjugation, verb forms I–X
- **Applied Reading** — Word-by-word Quran comprehension (Fatiha, last 10 surahs, Ayatul Kursi)

### Tajweed Track
- **Makhaarij** — All 5 articulation areas (throat, tongue, lips, nasal, empty space)
- **Sifaat** — Heavy/light letters, Qalqalah, whispered/voiced
- **Noon Sakinah** — Izhar, Idgham, Iqlab, Ikhfa
- **Meem Sakinah** — All 3 lip rules
- **Madd** — All 5 elongation types with beat counts
- **Waqf** — Stop signs, compulsory/permissible stops, restarting

## Features
- Sequential lesson locking — can't skip ahead
- Daily lesson prompt
- Streak counter (resets if you miss a day)
- XP + leveling system
- Quiz gate on every lesson (must pass to earn XP)
- Progress persists via localStorage

## Stack
- React (JSX)
- No external dependencies — pure inline styles
- Google Fonts: Amiri (Arabic display font)

## Usage

Drop `App.jsx` into any React project or paste into [claude.ai](https://claude.ai) as an artifact.

```bash
# If using Vite
npm create vite@latest noor-ul-quran -- --template react
cp App.jsx src/App.jsx
npm install && npm run dev
```

## License
MIT — personal use, no affiliation with any course or instructor.

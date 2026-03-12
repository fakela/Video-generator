# Curetopia Case Study Video — Scene Prompt

> This is the exact prompt and scene breakdown used to generate the Curetopia BioDAO case study video.
> Copy it to reproduce the output or use it as a starting point for your own version.

---

## Global Specs

| Property        | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Resolution      | 1920 × 1080 (Full HD, 16:9)                              |
| Frame rate      | 30 fps                                                    |
| Total duration  | ~4 710 frames ≈ 2 min 37 s                               |
| Codec           | H.264 (MP4)                                               |
| Background      | Dark space theme — `#080818` with CosmicBackground layer  |
| Fonts           | **Poppins** (400/600/700/800/900), **LD TechD** (custom)  |
| Audio           | `nastelbom-corporate.mp3` at 0.4 volume                   |
| Framework       | Remotion v4 + React 18                                     |

### Visual Effects Layer (CosmicBackground — persistent across all scenes)

- **Star field** — 3 000 particles with twinkling, glow, variable sizes
- **Galaxy rings** — rotating elliptical glowing borders
- **Galaxy spiral** — conic-gradient nebula effect
- **Aurora streaks** — moving gradient light streaks
- **Nebula field** — 14 pulsing radial-gradient patches

### Transitions

- **Within acts:** smooth crossfade — `damping: 28, stiffness: 50`, 30 frames
- **Between acts:** slower, more deliberate — `damping: 35, stiffness: 35`, 42 frames
- Presentation: `none()` (invisible, timing-only)

---

## ACT 1 — THE PROBLEM

### Scene 01 · Cold Open (270 frames / 9 s)

> **Purpose:** Emotional hook — stop the scroll.

- **"Too rare."**
- Set the tone: somebody was told their disease doesn't matter. Prove them wrong.

---

### Scene 02 · Scale (255 frames / 8.5 s)

> **Purpose:** Quantify the scale of rare disease.

- **800 million** people affected — animated counter
- Make the audience feel the weight of that number.

---

### Scene 03 · Treatment Gap (315 frames / 10.5 s)

> **Purpose:** Drive the gap home with impact.

- **95%** of rare diseases have no approved treatment — the stat slams onto screen
- Visceral, undeniable.

---

### Scene 04 · Big Pharma (345 frames / 11.5 s)

> **Purpose:** Explain why nobody solved it.

- **"So they walked away."**
- Too small. Too slow. Too little profit. Big Pharma left these patients behind.

---

### Scene 04b · We Don't Back Down (300 frames / 10 s) → ACT BREAK

> **Purpose:** Emotional peak of Act 1 — defiance.

- The turn. We refuse to accept that answer.
- Builds to a crescendo before the solution is revealed.

---

## ACT 2 — THE SOLUTION

### Scene 05 · Introducing (255 frames / 8.5 s)

> **Purpose:** Introduce Curetopia with gravitas.

- Logo birth from light — the Curetopia brand materializes
- **"The world's first BioDAO dedicated to eradicating rare diseases."**

---

### Scene 06 · Model Overview (245 frames / 8.2 s) → ACT BREAK

> **Purpose:** Show the full 7-step model at a glance.

- All 7 steps visible at once as a diagram
- Community funding → FDA approval, the complete pipeline

---

### Scene 07 · Steps Rapid Fire (655 frames / 21.8 s) → ACT BREAK

> **Purpose:** Walk through each step with energy.

- 7 steps delivered as hard cuts — fast, punchy, no filler
  1. Community funds research
  2. Scientists apply
  3. Transparent tracking
  4. Compounds tested
  5. FDA-ready trials
  6. Patient families run studies
  7. Revenue flows back

---

## ACT 3 — REAL-WORLD PROOF

### Scene 08 · AARS2 (315 frames / 10.5 s)

> **Purpose:** Ground the model in a real case.

- **PROJECT 001 — AARS2 Deficiency**
- A fatal mitochondrial disease. Zero treatments. Until Curetopia.

---

### Scene 09 · Drug Screen (345 frames / 11.5 s)

> **Purpose:** Show the scale of the science.

- **84,000 compounds** screened
- Yeast-avatar drug screening with partner lab Perlara
- The most comprehensive rare disease drug screen ever run.

---

### Scene 09B · Bridge (315 frames / 10.5 s) → ACT BREAK

> **Purpose:** Transition from proof to the model behind it.

- **"So we built a model."**
- Connects the AARS2 results to the Proof of Cures framework.

---

## ACT 4 — PROOF OF CURES

### Scene 10 · Proof of Cures (345 frames / 11.5 s)

> **Purpose:** Introduce the framework.

- **Proof of Work → Proof of Stake → Proof of Cures**
- The blockchain analogy: transparent, milestone-based scientific funding
- Pill cards / visual metaphor for the model

---

### Scene 11 · Raptor + Sasha (375 frames / 12.5 s) → ACT BREAK

> **Purpose:** Show live implementations — split screen.

- **$RAPTOR → RaptorCo** — first Coin-to-Company spin-out in history
- **$SASHA** — the world's first Curestream, a live onchain record of a cure in progress
- "She is the first. But she won't be the last."

---

## ACT 5 — THE RECEIPTS + FINALE

### Scene 12 · Receipts (315 frames / 10.5 s)

> **Purpose:** Proof, not promises.

- **"Not promises. Proof."**
- $1.77M raised — 14,208 SOL from 1,000+ pioneers
- 84,000 tests — 28 validated drug hits onchain
- 10 disease programs — 11 ARS mutations modelled

---

### Scene 13 · CTA (360 frames / 12 s)

> **Purpose:** Close with a call to action, fade to black.

- **"Join the mission."**
- Contribute: Data, Biospecimens, Compute, Capital
- Earn $CURES governance tokens
- **COMMUNITY MEDICINE. ONCHAIN.**
- curetopia.xyz

---

## File Structure

```
src/
├── index.ts                        # Entry point — registerRoot
├── Root.tsx                        # Composition registration
├── CuretopiaCase.tsx               # Main composition — TransitionSeries
├── fonts.ts                        # Poppins (Google Fonts) + LD TechD (local)
├── components/
│   ├── SceneWrapper.tsx            # CosmicBackground + visual effects layer
│   └── CuretopiaLogo.tsx           # SVG logo component
└── scenes/
    ├── Scene01ColdOpen.tsx         # ACT 1: "Too rare."
    ├── Scene02Scale.tsx            # 800M counter
    ├── Scene03TreatmentGap.tsx     # 95% slams in
    ├── Scene04BigPharma.tsx        # "So they walked away."
    ├── Scene04bWeDontBackDown.tsx  # Emotional peak — defiance
    ├── Scene05Introducing.tsx      # ACT 2: Logo birth from light
    ├── Scene06ModelOverview.tsx     # 7 steps diagram
    ├── Scene07StepsRapidFire.tsx   # 7 steps hard cuts
    ├── Scene08AARS2.tsx            # ACT 3: Project 001
    ├── Scene09DrugScreen.tsx       # 84,000 compounds
    ├── Scene09BBridge.tsx          # "So we built a model."
    ├── Scene10ProofOfCures.tsx     # ACT 4: PoW → PoS → PoC
    ├── Scene11RaptorSasha.tsx      # $RAPTOR + $SASHA split screen
    ├── Scene12Receipts.tsx         # ACT 5: "Not promises. Proof."
    └── Scene13CTA.tsx              # "Join the mission." → fade to black
```

## Run

```bash
npm start       # Open in Remotion Studio
npm run render   # Render to out/curetopia-case-study.mp4
```

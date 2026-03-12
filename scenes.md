# Curetopia Case Study Video — Scene Prompt

> This document is the full creative prompt used to generate the Curetopia BioDAO case study video.
> Copy it to reproduce the output or use it as a starting point for your own version.

---

## Global Specs

| Property        | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Resolution      | 1920 × 1080 (Full HD, 16:9)                              |
| Frame rate      | 30 fps                                                    |
| Total duration  | 4 135 frames ≈ 2 min 18 s                                |
| Codec           | H.264 (MP4)                                               |
| Background      | Dark space theme — radial gradient `#080818` → `#2A0A50`  |
| Fonts           | **Poppins** (400/600/700/800/900), **LD TechD** (custom)  |
| Audio           | `nastelbom-corporate.mp3` at 0.4 volume                   |
| Framework       | Remotion v4 + React 18                                     |

### Visual Effects Layer (SceneWrapper — applied to every scene)

- **Star field** — 3 000 particles with twinkling, glow, variable sizes
- **Galaxy rings** — rotating elliptical glowing borders
- **Galaxy spiral** — conic-gradient nebula effect
- **Aurora streaks** — moving gradient light streaks
- **Nebula field** — 14 pulsing radial-gradient patches
- **Vignette** — dark border for text contrast

### Transitions

- **Within acts:** spring crossfade — `damping: 14, stiffness: 80`, 28 frames
- **Between acts:** gentler spring — `damping: 18, stiffness: 60`, 38 frames
- Presentation: `none()` (invisible, timing-only)

### Animation Primitives Used Throughout

- Spring-eased scale entrances (0.3 → 1.0)
- Blur-in text reveals
- Breathing / pulsing via `Math.sin`
- 3D perspective rotations
- Clip-path typewriter reveals
- Letter-spacing compression
- Glow-intensifying text shadows

---

## ACT 1 — THE PROBLEM

### Scene 1 · Title (180 frames / 6 s)

> **Purpose:** Set the emotional hook.

- Curetopia logo — scale-in with breathing pulse and purple glow
- **"What If"** — blur-in reveal
- **"'Too Rare'"** — explosive spring scale + rotation wobble
- **"Wasn't the End of the Story?"** — typewriter clip animation
- **"Curetopia is rewriting it."** — scale-in with intensifying text-shadow glow
- Tags: **DeSCI · RARE DISEASE · BIODAO** — letter-spacing compression animation

---

### Scene 2 · Scale (120 frames / 4 s)

> **Purpose:** Quantify the problem.

- **"10,000+"** — large stat counter
- **"Rare diseases identified worldwide"**
- **"95% have no approved treatment. Not even one option."**

---

### Scene 3 · Affected (120 frames / 4 s)

> **Purpose:** Make it human.

- **"1 in 10"** — bold stat
- **"people worldwide live with a rare disease"**
- **"That's 800 million people. Waiting."**

---

### Scene 4 · Treatment Gap (120 frames / 4 s)

> **Purpose:** Drive the gap home.

- **"95%"** — dominant stat
- **"of rare diseases have no approved treatment"**
- **"Not even one option."**

---

### Scene 5 · Market (120 frames / 4 s)

> **Purpose:** Show the untapped opportunity.

- **"$1 Trillion+"** — large number reveal
- **"market sitting unclaimed"**
- **"Sitting there. Untouched."**

---

### Scene 6 · Big Pharma (170 frames / 5.7 s) → ACT BREAK

> **Purpose:** Explain why nobody has solved it.

- **"Why Big Pharma Won't Help"**
- ✕ "Too small a patient population"
- ✕ "Too long a development timeline"
- ✕ "Too little profit potential"
- **"We will."** — defiant close

---

## ACT 2 — THE SOLUTION

### Scene 7 · Introducing (120 frames / 4 s)

> **Purpose:** Introduce Curetopia.

- 🧬 DNA emoji
- **"Meet Curetopia."**
- **"The world's first BioDAO dedicated to eradicating rare diseases."**
- **"Decentralized. Community-owned. Unstoppable."**

---

### Scene 8 · How It Works (90 frames / 3 s)

> **Purpose:** Transition into the 7-step process.

- **"How Curetopia Works"**
- **"From community funding to FDA approval."**
- **"7 steps. Zero bureaucracy."**

---

### Scene 9 · Step 1 — Community Funds Research (130 frames / 4.3 s)

- 🧬 · **"STEP 1"**
- **"Community Funds Research"**
- "Token holders vote on which diseases to target. $CURES tokens fund the science directly."

---

### Scene 10 · Step 2 — Scientists Apply (130 frames / 4.3 s)

- 🔬 · **"STEP 2"**
- **"Scientists Apply to Solve It"**
- "Open calls go to researchers worldwide. The best proposals get funded—fast."

---

### Scene 11 · Step 3 — Transparent Tracking (140 frames / 4.7 s)

- 📊 · **"STEP 3"**
- **"Transparent Progress Tracking"**
- "Every milestone is published onchain. Token holders see exactly where their money goes."

---

### Scene 12 · Step 4 — Compounds Tested (130 frames / 4.3 s)

- 🧪 · **"STEP 4"**
- **"Compounds Tested & Validated"**
- "Drug candidates move through preclinical testing with full community oversight."

---

### Scene 13 · Step 5 — FDA-Ready (140 frames / 4.7 s)

- 🏥 · **"STEP 5"**
- **"FDA-Ready Clinical Trials"**
- "Successful compounds advance to regulatory approval. Community-funded. Patient-first."

---

### Scene Step 6 · Patient Families (130 frames / 4.3 s)

- 👨‍👩‍👧 · **"STEP 6"**
- **"Patient Families Run the Studies"**
- "Real families run N-of-1 observational trials — as co-owners of the cure."

---

### Scene Step 7 · Revenue (130 frames / 4.3 s) → ACT BREAK

- 💰 · **"STEP 7"**
- **"Revenue Flows Back to the Community"**
- "Every dollar generated returns to the treasury to fund the next cure."

---

## ACT 3 — REAL-WORLD PROOF (AARS2)

### Scene 14 · Community Medicine (90 frames / 3 s)

- **"That's Community Medicine."**
- **"Onchain."**
- Pulsing glow ring with purple border

---

### Scene 15 · AARS2 (150 frames / 5 s)

- "Curetopia's first real-world case:"
- **"PROJECT 001"**
- **"AARS2 Deficiency"**
- "A fatal mitochondrial disease causing progressive leukoencephalopathy."
- "Zero approved treatments. Zero options."
- "Until Curetopia."

---

### Scene Perlara · Yeast-Avatar Drug Screening (130 frames / 4.3 s)

- **"Yeast-Avatar Drug Screening"**
- "Partner lab Perlara screens 8,500 existing compounds against yeast models of the disease."
- "11 ARS mutations modelled. 84,000 tests."
- "The most comprehensive rare disease drug screen ever run."

---

### Scene 16 · Cost Gap (180 frames / 6 s) → ACT BREAK

- **"The Cost Gap"**
- "Getting a drug to Phase 3 trials"
- **"Industry Standard: $100M+"** vs **"Curetopia: $5M"**
- **"20× cheaper."**
- "Same science. Fraction of the cost."

---

## ACT 4 — THE RESULTS

### Scene Results Intro (80 frames / 2.7 s)

- **"And here's what happened."**

---

### Scene 17 · Result 1 — Drug Candidates (120 frames / 4 s)

- **"2 drug candidates"**
- "Discovered for AARS2 Deficiency. From 84,000 tests."

---

### Scene 18 · Result 2 — Patent (110 frames / 3.7 s)

- **"Provisional patent"**
- "Owned by the Curetopia community."
- "Not locked behind Big Pharma."

---

### Scene 20 · Result 4 — Tests Completed (150 frames / 5 s) → ACT BREAK

- **"84,000"** tests completed
- **"28 validated drug hits"**
- "Published openly onchain. Science at the speed of the internet."

---

## ACT 5 — PROOF OF CURES

### Scene Spinouts Intro (120 frames / 4 s)

- **"Proof of Cures"**
- "Many DeSci projects raise capital quickly — but contributors often have limited visibility into how funds are used, what milestones are being pursued, or what progress is being made."
- "Proof of Cures was designed to close that gap."

---

### Scene Proof of Cures — Model (110 frames / 3.7 s)

- **"The Model"**
- "Just as Proof of Stake showed that blockchain networks could operate through transparent, rule-based participation — Proof of Cures applies the same principles to scientific funding."
- "Funding is tied to milestones. Progress is public."

---

### Scene Proof of Cures — Live (110 frames / 3.7 s)

- **"Live Implementations"**
- **$RAPTOR** — Coin-to-Company spin-out
- **$SASHA** — One patient, one mission
- "The first live implementations of Proof of Cures."

---

### Scene Raptor (150 frames / 5 s)

- **"$RAPTOR → RaptorCo"**
- "The first Coin-to-Company spin-out in history."
- "Research focus: autophagy-related drug repurposing."
- "Targeting longevity pathways, one coin at a time."

---

### Scene Sasha (160 frames / 5.3 s) → ACT BREAK

- **"$SASHA"**
- "Proof of Cures."
- "The world's first Curestream — a live onchain record of a cure in progress."
- "She is the first."
- "But she won't be the last."

---

## ACT 6 — THE RECEIPTS

### Scene Receipts (160 frames / 5.3 s)

- **"The Receipts"**
- "Not promises. Proof."
- **$1.77M Raised** — 14,208 SOL from 1,000+ pioneers
- **84,000 Tests** — 28 validated drug hits onchain
- **10 Disease Programs** — 11 ARS mutations modelled

---

### Scene 21 · Raise (150 frames / 5 s)

- **"$1.77M"**
- "14,208 SOL raised in a single community auction."
- "March 2025. In brutal market conditions."

---

### Scene 22 · Contributors (140 frames / 4.7 s)

- **"1,000+"** pioneers
- "From 40+ countries. Scientists, patients, developers."

---

### Scene 23 · Pipeline (140 frames / 4.7 s) → ACT BREAK

- **"10"** disease programs built in 6 months
- "11 ARS mutations modelled and ready."
- "Scaled from one mutation to a full pipeline."

---

## ACT 7 — FINALE

### Scene 25 · CTA (180 frames / 6 s)

- **"Join the mission."**
- "Contribute and earn $CURES governance tokens."
- Four contribution cards:
  - 🧬 Data
  - 🦆 Biospecimens
  - 💻 Compute
  - 💰 Capital
- **"COMMUNITY MEDICINE. ONCHAIN."**
- Curetopia logo
- **curetopia.xyz**

---

## File Structure

```
src/
├── index.ts                        # Entry point — registerRoot
├── Root.tsx                        # Composition: 4135 frames, 1920×1080, 30 fps
├── CuretopiaCase.tsx               # Main composition — TransitionSeries of all scenes
├── fonts.ts                        # Poppins (Google Fonts) + LD TechD (local)
├── components/
│   ├── SceneWrapper.tsx            # Background effects layer (stars, nebula, vignette)
│   └── CuretopiaLogo.tsx           # SVG logo component
└── scenes/
    ├── Scene1Title.tsx             # ACT 1: Title hook
    ├── Scene2Scale.tsx             # 10,000+ rare diseases
    ├── Scene3Affected.tsx          # 1 in 10 people
    ├── Scene4TreatmentGap.tsx      # 95% no treatment
    ├── Scene5Market.tsx            # $1 Trillion+ market
    ├── Scene6BigPharma.tsx         # Why Big Pharma won't help
    ├── Scene7Introducing.tsx       # ACT 2: Meet Curetopia
    ├── Scene8HowItWorks.tsx        # 7 steps intro
    ├── Scene9Step1.tsx             # Community funds research
    ├── Scene10Step2.tsx            # Scientists apply
    ├── Scene11Step3.tsx            # Transparent tracking
    ├── Scene12Step4.tsx            # Compounds tested
    ├── Scene13Step5.tsx            # FDA-ready trials
    ├── SceneStep6PatientFamilies.tsx  # Patient families run studies
    ├── SceneStep7Revenue.tsx       # Revenue flows back
    ├── Scene14Community.tsx        # ACT 3: Community medicine onchain
    ├── Scene15AARS2.tsx            # Project 001 — AARS2
    ├── ScenePerlara.tsx            # Yeast-avatar drug screening
    ├── Scene16CostGap.tsx          # $100M vs $5M
    ├── SceneResultsIntro.tsx       # ACT 4: And here's what happened
    ├── Scene17Result1.tsx          # 2 drug candidates
    ├── Scene18Result2.tsx          # Provisional patent
    ├── Scene20Result4.tsx          # 84,000 tests / 28 hits
    ├── SceneSpinoutsIntro.tsx      # ACT 5: Proof of Cures
    ├── SceneProofOfCuresModel.tsx  # The model
    ├── SceneProofOfCuresLive.tsx   # Live implementations
    ├── SceneRaptor.tsx             # $RAPTOR → RaptorCo
    ├── SceneSasha.tsx              # $SASHA — first Curestream
    ├── SceneReceipts.tsx           # ACT 6: The receipts
    ├── Scene21Raise.tsx            # $1.77M raised
    ├── Scene22Contributors.tsx     # 1,000+ pioneers
    ├── Scene23Pipeline.tsx         # 10 disease programs
    └── Scene25CTA.tsx              # ACT 7: Join the mission
```

## Run

```bash
npm start       # Open in Remotion Studio
npm run render   # Render to out/curetopia-case-study.mp4
```

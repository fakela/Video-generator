# Curetopia Case Study — Scene Prompts

Each prompt below is what you would give an AI (e.g. Claude) to recreate that scene as a Remotion TSX component.
Copy and paste any prompt directly. All scenes use the same stack: Remotion, TypeScript, `useCurrentFrame()`, `interpolate()`, `spring()`, dark `#080818` background via `<SceneWrapper>`, and the `ldTechD` font.

---

## Global setup (applies to every scene)

- Framework: Remotion (`remotion`, `@remotion/transitions`)
- Language: TypeScript / TSX
- Canvas: 1920×1080, 30fps, dark background `#080818`
- Font: `ldTechD` (imported from `../fonts`)
- Every scene wraps content in `<SceneWrapper>` (a shared `<AbsoluteFill>` wrapper from `../components/SceneWrapper`)
- Primary accent color: `#E040FB` (fuchsia/purple)
- Secondary text color: `#A89BC2` (muted lavender)
- All animations use `interpolate()` and `spring()` from `remotion`
- Scenes are sequenced in `CuretopiaCase.tsx` using `<TransitionSeries>` from `@remotion/transitions`

---

## ACT 1: THE PROBLEM

---

### Scene 01 — Cold Open (`src/scenes/Scene01ColdOpen.tsx`)

**Duration:** 270 frames (9s)

**Prompt:**
```
Create a Remotion scene called Scene01ColdOpen.

Dark space background. Three lines of text appear one at a time, centered on screen.

Line 1: "Too rare." — giant white text, fontSize 136, fontWeight 900. Fades in at frame 15 over 13 frames. Stays on screen for the rest of the scene.

Line 2: "That's what the system says." — muted lavender (#A89BC2), fontSize 52, fontWeight 400. Fades in AND slides up from 20px below at frame 75 over 15 frames. Stays on screen.

Line 3: "We believe every disease deserves research." — fuchsia (#E040FB), fontSize 52, fontWeight 700, maxWidth 900px. Fades in AND slides up from 20px below at frame 120 over 18 frames. Stays on screen.

After all 3 lines are visible (frame 195), a radial purple glow flood ramps up across the whole background — `radial-gradient(ellipse at 50% 50%, rgba(224,64,251,0.28) 0%, transparent 65%)` — fading in from 0 to 1 opacity over frames 195–248.

Layout: flex column, centered vertically and horizontally, gap 20px, text-align center.
Font: ldTechD on everything.
```

---

### Scene 02 — Scale (`src/scenes/Scene02Scale.tsx`)

**Duration:** 255 frames (8.5s)

**Prompt:**
```
Create a Remotion scene called Scene02Scale.

Dark background. A large animated counter counts up to 800,000,000 (formatted with commas). Below it, three more lines appear one at a time.

Counter: fontSize 128, fontWeight 900, color #E040FB. Starts at frame 15. Counts from 0 to 800,000,000 over frames 15–60. Also has a blur effect: starts at blur(8px) and clears to blur(0px) by frame 40. Fades in opacity from 0 to 1 over frames 15–35.

Label below counter: "people living with rare disease." — color #A89BC2, fontSize 52. Fades in AND slides up 20px at frame 75 over 15 frames. Has extra marginBottom 28px.

Line 2: "1 in 10 people." — white, fontSize 80, fontWeight 900. Fades in AND slides up 24px at frame 120 over 18 frames.

Line 3: "Worldwide." — white, fontSize 64, fontWeight 700. Fades in AND slides up 24px at frame 150 over 15 frames.

Line 4: "Right now." — #E040FB, fontSize 64, fontWeight 700. Fades in AND slides up 24px at frame 175 over 15 frames.

Layout: flex column, centered, text-align center, gap 12px.
Font: ldTechD on everything.
```

---

### Scene 03 — Treatment Gap (`src/scenes/Scene03TreatmentGap.tsx`)

**Duration:** 315 frames (10.5s)

**Prompt:**
```
Create a Remotion scene called Scene03TreatmentGap.

Dark background. A giant "95%" slams into frame using a spring animation, then more lines appear.

"95%" — fontSize 180, fontWeight 900, color #E040FB. Uses spring({ frame: frame - 10, fps, config: { damping: 6, stiffness: 180 } }) — very bouncy. Scale interpolates from 0.3 to 1 on spring output. Opacity from 0 to 1 over spring [0, 0.15].

"of rare diseases have no approved treatment." — #A89BC2, fontSize 52. Fades in AND slides up 24px at frame 50 over 18 frames. Has marginBottom 20px.

"Not one option." — white, fontSize 72, fontWeight 800. Fades in AND slides up 24px at frame 100 over 18 frames.

"Not one clinical trial." — white, fontSize 72, fontWeight 800. Fades in AND slides up 24px at frame 130 over 18 frames.

A horizontal divider line — `linear-gradient(90deg, transparent, rgba(204,68,255,0.7), transparent)`, height 1px. Width animates from 0% to 50% over frames 165–190. margin 8px 0.

"These are people." in white + "Waiting." in #E040FB — fontSize 60, fontWeight 700. Fades in AND slides up 30px at frame 205 over 20 frames.

Layout: flex column, centered, text-align center, gap 14px.
Font: ldTechD on everything.
```

---

### Scene 04 — Big Pharma (`src/scenes/Scene04BigPharma.tsx`)

**Duration:** 345 frames (11.5s)

**Prompt:**
```
Create a Remotion scene called Scene04BigPharma.

Dark background. A headline appears, then 3 staggered bullet reasons, then a divider, then a final emotional line.

"Big Pharma ran the numbers." — white, fontSize 80, fontWeight 900. Fades in AND slides up 30px at frame 12 over 20 frames.

3 reasons appear staggered, each fading in AND sliding up 20px over 18 frames:
- "Market too small." — starts frame 60
- "Risk too high." — starts frame 90
- "ROI doesn't pencil out." — starts frame 120
All reasons: #A89BC2, fontSize 56.

A horizontal divider: `linear-gradient(90deg, transparent, rgba(224,64,251,0.5), transparent)`, width 40%, height 1px. Fades in over frames 160–185.

As the divider appears, a dark radial vignette overlay starts fading in: `radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(4,0,12,0.4) 100%)`. Fades from 0 to 1 opacity over frames 195–240. This adds emotional weight.

"So they walked away." — #E040FB, fontSize 88, fontWeight 900. Fades in AND slides up 30px at frame 195 over 23 frames.

Layout: flex column, centered, text-align center, gap 20px.
Font: ldTechD on everything.
```

---

### Scene 04b — We Don't Back Down (`src/scenes/Scene04bWeDontBackDown.tsx`)

**Duration:** 300 frames (10s)

**Prompt:**
```
Create a Remotion scene called Scene04bWeDontBackDown.

Dark background. Four lines appear sequentially, building emotional momentum. This is the Act 1 pivot — defiant and human.

Line 1: "We saw the same numbers." — white, fontSize 76, fontWeight 700. Fades in AND slides up 20px at frame 10 over 14 frames.

Line 2: "And we didn't flinch." — white, fontSize 76, fontWeight 700. Fades in AND slides up 20px at frame 75 over 15 frames.

Line 3: "Because this was never a business decision." — #A89BC2, fontSize 52, fontWeight 400, maxWidth 860px. Fades in AND slides up 20px at frame 128 over 17 frames.

Line 4: "It's a human one." — #E040FB, fontSize 92, fontWeight 900, textShadow "0 0 30px rgba(224,64,251,0.5)". Fades in AND slides up 28px at frame 188 over 17 frames. Has marginTop 8px.

When Line 4 appears (frame 188), a soft warm purple glow ellipse fades in behind the text: width 900px, height 500px, radial-gradient(ellipse, rgba(224,64,251,0.18) 0%, transparent 65%), filter blur(40px). Opacity ramps from 0 to 0.6 over frames 188–240.

Layout: flex column, centered, text-align center, gap 22px.
Font: ldTechD on everything.
```

---

## ACT 2: THE SOLUTION

---

### Scene 05 — Introducing Curetopia (`src/scenes/Scene05Introducing.tsx`)

**Duration:** 255 frames (8.5s)

**Prompt:**
```
Create a Remotion scene called Scene05Introducing.

Dark background. A brand reveal moment — the Curetopia logo materializes out of a burst of light.

First, a radial light glow expands from the center of the screen starting at frame 5: a circular div, borderRadius 50%, background `radial-gradient(circle, rgba(255,180,255,0.9) 0%, rgba(224,64,251,0.5) 30%, transparent 70%)`, filter blur(20px). The radius animates from 0 to 800px over frames 5–60. Opacity goes from 0 to 0.7 over frames 5–45, then dims to 0.3 over frames 70–100.

Then the Curetopia logo image materializes from the glow at frame 50 using a spring({ damping: 16, stiffness: 130 }). Scale interpolates from 0.1 to 1. Opacity from 0 to 1 over spring [0, 0.3]. Logo image: `staticFile("Curetopia Logo Primary Dark Mode 1@2x.png")`, height 110px.

"The world's first BioDAO on Solana for rare disease." — white, fontSize 56, fontWeight 700, maxWidth 900px. Fades in AND slides up 24px at frame 100 over 20 frames.

"Decentralized · Community-owned · Onchain" — #CC44FF, fontSize 44, letterSpacing 3px. Fades in AND slides up 20px at frame 145 over 20 frames.

Layout: flex column, centered, text-align center, gap 20px.
Font: ldTechD on everything.
```

---

### Scene 06 — Model Overview (`src/scenes/Scene06ModelOverview.tsx`)

**Duration:** 245 frames (~8.2s)

**Prompt:**
```
Create a Remotion scene called Scene06ModelOverview.

Dark background. A headline pair appears, then a horizontal timeline diagram with 7 labeled nodes all appearing at once.

"From community to cure." — white, fontSize 80, fontWeight 900. Fades in AND slides up 28px at frame 10 over 16 frames.

"Seven steps. No gatekeepers." — #A89BC2, fontSize 52. Fades in AND slides up 22px at frame 60 over 16 frames.

Horizontal timeline: appears at frame 108.
- A horizontal line, height 3px, width animates from 0% to 82% over frames 108–140, centered. Background: `linear-gradient(90deg, rgba(224,64,251,0.15), rgba(224,64,251,0.8), rgba(224,64,251,0.15))`.
- 7 nodes above/below the line, evenly spaced, ALL appearing together at frame 115 (group fade in + slide up 18px over 23 frames).
- Each node has: a filled circle dot (22px, background #E040FB, box-shadow glow), a step number below in #CC44FF fontSize 22 fontWeight 700, and a label in white fontSize 26.
- The 7 labels are: Propose, Vote, Fund, Research, Validate, Spinout, Revenue.

Layout: flex column, centered, text-align center, gap 24px. Timeline is width 84% relative to screen.
Font: ldTechD on everything.
```

---

### Scene 07 — Steps Rapid Fire (`src/scenes/Scene07StepsRapidFire.tsx`)

**Duration:** 655 frames (~21.8s)

**Prompt:**
```
Create a Remotion scene called Scene07StepsRapidFire.

Dark background. A rapid-fire sequence cycling through 7 steps — one step per 90 frames (3 seconds each), hard-cutting between them (no wipe, just frame-based switching using Math.floor(frame / 90)).

The 7 steps are:
1. "Propose" — "Community members submit disease targets onchain."
2. "Vote" — "$CURES token holders vote on which projects to fund."
3. "Fund" — "Treasury deploys capital to the winning proposal."
4. "Research" — "Partner labs run drug screens and validation studies."
5. "Validate" — "All results published onchain — transparent and verifiable."
6. "Spinout" — "Successful candidates spin out as independent biotech companies."
7. "Revenue Flows Back" — "Spinout revenues return to the DAO treasury and token holders."

For each step, within that step's local frame (stepLocalFrame = frame - currentStep * 90):

Step number (e.g. "01", "02"…) — #E040FB, fontSize 160, fontWeight 900, textShadow glow. Flashes bright on entry: opacity comes from 0 at stepLocalFrame 0 to 1 at stepLocalFrame 5. Color brightness interpolates [0,9,18] → [0, 1, 0.7] (bright flash that dims slightly).

Step title — white, fontSize 88, fontWeight 900. Fades in AND slides up 16px from stepLocalFrame 5–14.

Step description — #A89BC2, fontSize 48, maxWidth 900px. Same timing as title.

On each step cut (stepLocalFrame 0), a radial burst glow expands from center: starts at scale 0.2, expands to 2.5, opacity goes from 0.6 → 0.2 → 0 over stepLocalFrame 0–6. Background: `radial-gradient(circle, rgba(224,64,251,0.5) 0%, transparent 70%)`, 400×400px.

Layout: flex column, centered, text-align center, gap 24px.
Font: ldTechD on everything.
```

---

## ACT 3: REAL-WORLD PROOF

---

### Scene 08 — AARS2: Project 001 (`src/scenes/Scene08AARS2.tsx`)

**Duration:** 315 frames (10.5s)

**Prompt:**
```
Create a Remotion scene called Scene08AARS2.

Dark background. Reveals Curetopia's first real drug research project.

A pill/badge label "PROJECT 001" appears first — white text fontSize 36 fontWeight 700, background #7B2FBE, padding "10px 32px", borderRadius 24px, letterSpacing 4px, boxShadow "0 0 20px rgba(123,47,190,0.5)". Slides in from the left (translateX from -40px to 0) and fades in over frames 8–22.

"Yeast-powered drug repurposing for AARS2." — white, fontSize 96, fontWeight 900, lineHeight 1.05, maxWidth 1200px. Springs in at frame 35 using spring({ damping: 8, stiffness: 200 }). Scale from 0.5 to 1. Opacity from 0 to 1 over spring [0, 0.2].

"Genetically personalised yeast 'patient avatars' built to model AARS2 mitochondrial deficiency." — #A89BC2, fontSize 50, maxWidth 960px. Fades in AND slides up 24px at frame 70 over 18 frames.

"In partnership with Perlara." — #E040FB, fontSize 64, fontWeight 900, textShadow "0 0 30px rgba(224,64,251,0.6)", marginTop 12px. Springs in at frame 120 using spring({ damping: 10, stiffness: 220 }). Scale from 0.6 to 1. Opacity from 0 to 1 over spring [0, 0.2].

Layout: flex column, centered, text-align center, gap 16px.
Font: ldTechD on everything.
```

---

### Scene 09 — Drug Screen (`src/scenes/Scene09DrugScreen.tsx`)

**Duration:** 345 frames (11.5s)

**Prompt:**
```
Create a Remotion scene called Scene09DrugScreen.

Dark background. A multi-phase data visualization showing the drug screening process.

PHASE 1 (frames 10–70): A counter counts up from 0 to 8,400 (displayed as "8,400") — representing 84,000 compounds in abbreviated form. #E040FB, fontSize 120, fontWeight 900, textShadow glow. Counter goes 0→8400 over frames 10–55. Also has: blur(12px) clearing to blur(0) over frames 10–40, opacity 0→1 over frames 10–30, scale spring-in at frame 10 (damping 7, stiffness 180) from 0.6 to 1. Label "compounds screened." (#A89BC2, fontSize 48) fades in over frames 55–70. They appear on the same baseline row.

PHASE 2 (frame 80): "10 Disease Programs" stat slides in from the left. A spring at frame 80 (damping 10, stiffness 160): translateX from -60 to 0. Shows: "10" in #E040FB fontSize 52 fontWeight 900, "Disease Programs" in white fontWeight 700, "built in 6 months." in #A89BC2. All inline, fontSize 44.

PHASE 3 (frames 110–170): A dot grid of 30 columns × 12 rows (360 total dots) fades in at frame 110. A scanline sweep crosses left-to-right from frame 110–170: dots left of the scan line are bright purple (rgba(155,48,208,0.6)); dots right are dim (rgba(123,47,190,0.2) opacity 0.15). Two specific dots (indexes 145 and 221) glow bright #E040FB with a strong box-shadow glow when scanned. A glowing vertical line (3px wide, purple gradient, blur 4px) marks the scan position.

PHASE 4 (frames 185–230): "◈ RESULT ◈" label flashes — opacity animates [185,188,192,196] → [0,1,0.4,1]. #E040FB, fontSize 36, letterSpacing 8px. Then "2 drug candidates identified." springs in at frame 200 (damping 7, stiffness 220): scale from 0.4 to 1. "2" is #E040FB fontSize 96; "drug candidates identified." is white fontSize 72.

PHASE 5: "11 ARS mutations" in #E040FB + "modelled and ready." in #A89BC2 — fades in + slides up 20px at frame 240. "28 validated drug hits" in #E040FB + "published openly onchain." in #A89BC2 — fades in + slides up 20px at frame 275. Both fontSize 40.

Layout: flex column, centered, text-align center, gap 10px.
Font: ldTechD on everything.
```

---

### Scene 09B — Bridge (`src/scenes/Scene09BBridge.tsx`)

**Duration:** 315 frames (10.5s)

**Prompt:**
```
Create a Remotion scene called Scene09BBridge.

Dark background. A short transitional scene bridging the drug screen results to the Proof of Cures concept. Minimal, text-forward.

A particle trail animates horizontally across the vertical center of the screen — 36 small dots (#E040FB, 5–9px each, circular, with box-shadow glow) moving left to right. They trail behind each other, fading in and out at edges. The trail starts moving at frame 65 and reaches the right edge around frame 160, then slows.

"We also wanted to give contributors" — #A89BC2, fontSize 50. Fades in AND slides up 18px at frame 12 over 14 frames.

"full visibility into how their funds are used." — #A89BC2, fontSize 50, maxWidth 860px. Fades in AND slides up 18px at frame 50 over 15 frames.

"So we built a model." — #E040FB, fontSize 88, fontWeight 900, textShadow "0 0 24px rgba(224,64,251,0.4)", marginTop 16px. Fades in AND slides up 30px at frame 185 over 15 frames.

Layout: flex column, centered, text-align center, gap 20px. The particle trail is absolutely positioned at top 50%, spanning full width.
Font: ldTechD on everything.
```

---

## ACT 4: PROOF OF CURES

---

### Scene 10 — Proof of Cures (`src/scenes/Scene10ProofOfCures.tsx`)

**Duration:** 345 frames (11.5s)

**Prompt:**
```
Create a Remotion scene called Scene10ProofOfCures.

Dark background. A conceptual evolution sequence: Proof of Work → Proof of Stake → Proof of Cures. Then 3 pill tags appear.

"Proof of Work" — #A89BC2, fontSize 64, fontWeight 700. Fades in AND slides up 20px at frame 12 over 16 frames. Then fades to 15% opacity over frames 55–68 (it dims, stays on screen as ghost).

"Proof of Stake" — #A89BC2, fontSize 64, fontWeight 700. Fades in AND slides up 20px at frame 70 over 16 frames. Then fades to 15% opacity over frames 115–128 (same ghost treatment).

"Proof of Cures" — #E040FB, fontSize 120, fontWeight 900. Springs in at frame 138 using spring({ damping: 10, stiffness: 160 }). Scale from 0.5 to 1. Opacity from 0 to 1 over spring [0, 0.3]. textShadow pulses using Math.sin(frame * 0.07) * 0.25 + 0.75 for glow intensity.

A large radial glow (800×400px ellipse, rgba(224,64,251,0.2)) sits behind "Proof of Cures" and pulses with the same sin wave. Its opacity is pocOpacity × glowPulse.

3 pill/badge tags appear staggered starting at frame 195 (22 frames apart), each using a spring (damping 12, stiffness 160) scale 0→1 + opacity 0→1:
- "Transparent" — background linear-gradient(135deg, #7B2FBE33, #7B2FBE11), border 1px solid #7B2FBE99
- "Community-owned" — #9B30D0 tones
- "Onchain" — #CC44FF tones
All pills: borderRadius 30px, padding "16px 36px", fontSize 40, fontWeight 700, white text, box-shadow glow matching their color.

Layout: flex column, centered, text-align center, gap 20px. Pills in a flex row with gap 20px.
Font: ldTechD on everything.
```

---

### Scene 11 — Raptor + Sasha (`src/scenes/Scene11RaptorSasha.tsx`)

**Duration:** 375 frames (12.5s)

**Prompt:**
```
Create a Remotion scene called Scene11RaptorSasha.

Dark background. Two phases: an intro title, then a split-screen reveal of two live implementations.

PHASE 1 (frames 0–90): Intro title centered on screen.
"PROOF OF CURES" — #A89BC2, fontSize 48, letterSpacing 6px.
"2 Live" — white, fontSize 120, fontWeight 900, textShadow glow.
"Implementations." — #E040FB, fontSize 120, fontWeight 900, textShadow glow.
All three spring in at frame 8 (damping 10, stiffness 180), scale 0.5→1.
Starting at frame 65, the whole title block slides upward (-60px) and fades out by frame 90.

PHASE 2 (frame 90 onward): A horizontal split screen fades in over frames 90–110.

A vertical purple divider line (2px wide) grows from 0% to 80% height, centered, over frames 95–122. Background: `linear-gradient(180deg, transparent, rgba(204,68,255,0.8), transparent)`.

LEFT HALF — $RAPTOR:
"$RAPTOR" — #E040FB, fontSize 88, fontWeight 900, textShadow glow. Slides in from left (translateX -120 → 0) using spring at frame 105 (damping 14, stiffness 150).
"First Coin-to-Company spin-out" — white, fontSize 40. Fades in + slides up 20px at frame 135 over 18 frames. maxWidth 400px.
"Longevity pathways. Onchain." — #A89BC2, fontSize 36. Same timing. maxWidth 400px.

RIGHT HALF — $SASHA:
"$SASHA" — #E040FB, fontSize 88, fontWeight 900, textShadow glow. Slides in from right (translateX 120 → 0) using spring at frame 115 (damping 14, stiffness 150).
"World's first live Curestream for 8-year-old Sasha living with severe SLC6A1" — white, fontSize 38, lineHeight 1.4. Fades in + slides up 20px at frame 145 over 18 frames. maxWidth 440px.

Layout: flex row for split, each half flex column centered. paddingRight/Left 40px.
Font: ldTechD on everything.
```

---

## ACT 5: THE RECEIPTS + FINALE

---

### Scene 12 — Receipts (`src/scenes/Scene12Receipts.tsx`)

**Duration:** 315 frames (10.5s)

**Prompt:**
```
Create a Remotion scene called Scene12Receipts.

Dark background. A credibility montage — a headline then 3 stat cards drop in with live count-up animations.

"Not promises." in white + "Proof." in #E040FB — fontSize 88, fontWeight 900. Springs in at frame 10 (damping 10, stiffness 160). Scale 0.6→1, opacity 0→1 over spring [0, 0.3].

3 stat cards appear staggered starting at frame 55 (30 frames apart), each:
- Drops in from above: translateY from -60 to 0 using spring (damping 12, stiffness 150).
- Fades in over spring [0, 0.4].
- Has a count-up animation: runs from 0 to target over 45 frames starting at its delay.
- Card style: background linear-gradient(135deg, rgba(123,47,190,0.25), rgba(74,26,122,0.15)), border 1px solid rgba(204,68,255,0.4), borderRadius 20px, padding "32px 44px", minWidth 280px, boxShadow "0 0 30px rgba(123,47,190,0.25)".

Card 1: "$1.77M" Raised — target 1770000, display as displayValue/1000000 toFixed(2) with "$" prefix and "M" suffix. Detail: "14,208 SOL from 1,000+ pioneers"
Card 2: "84K" Compounds Screened — target 84000, display as Math.round(value/1000) with "K" suffix. Detail: "28 validated drug hits onchain"
Card 3: "10" Disease Programs — target 10, plain integer. Detail: "11 ARS mutations modelled"

Each card: stat number in #E040FB fontSize 80 fontWeight 900. Label in white fontSize 36 fontWeight 700. Detail in #A89BC2 fontSize 28 maxWidth 260px.

Cards displayed in a flex row, gap 28px.
Font: ldTechD on everything.
```

---

### Scene 13 — CTA (`src/scenes/Scene13CTA.tsx`)

**Duration:** 360 frames (12s)

**Prompt:**
```
Create a Remotion scene called Scene13CTA.

Dark background. The final call-to-action. Bold, hopeful, fading to black at the end.

"Join the mission." — white, fontSize 104, fontWeight 900. Fades in AND slides up 30px at frame 12 over 24 frames.

A large fuchsia aura (radial ellipse, 900×350px, rgba(224,64,251,0.25) → transparent, filter blur(30px)) sits behind the headline. It pulses using Math.sin(frame * 0.06) * 0.3 + 0.7. Fades in over frames 12–50.

4 pill tags appear staggered starting at frame 80 (20 frames apart), each springing in (damping 12, stiffness 160), scale 0→1, opacity 0→1:
- "Contribute Data"
- "Provide Compute"
- "Donate Biospecimens"
- "Deploy Capital"
All pills: background linear-gradient(135deg, rgba(123,47,190,0.4), rgba(74,26,122,0.25)), border 1px solid rgba(224,64,251,0.5), borderRadius 32px, padding "16px 36px", fontSize 40, fontWeight 600, white text, boxShadow "0 0 16px rgba(224,64,251,0.3)".
Pills in a flex row that wraps, gap 16px, maxWidth 1000px.

"curetopia.xyz" — #E040FB, fontSize 64, fontWeight 700, textShadow "0 0 20px rgba(224,64,251,0.5)", marginTop 8px. Fades in AND slides up 24px at frame 200 over 20 frames.

Curetopia logo image — `staticFile("Curetopia Logo Primary Dark Mode 1@2x.png")`, height 70px. Fades in at frame 240 over 18 frames.

Fade to black: a black overlay (position absolute, inset 0, background #000000) fades in from 0 to 1 opacity over the last 45 frames (frames 315–360). z-index 100.

Layout: flex column, centered, text-align center, gap 24px.
Font: ldTechD on everything.
```

---

## How to add a new scene

1. Create `src/scenes/SceneXX<Name>.tsx` — export a named React component using `useCurrentFrame()` and `interpolate()` from `remotion`, wrapped in `<SceneWrapper>` (from `../components/SceneWrapper`)
2. Import it in `src/CuretopiaCase.tsx`
3. Add a `<TransitionSeries.Sequence durationInFrames={N}>` block in the correct act position
4. Add `<TransitionSeries.Transition presentation={none()} timing={smooth()} />` after it (use `actBreak()` between acts)
5. Update `durationInFrames` total in `src/Root.tsx`
6. Add the scene's prompt to this file

---

## Transition timing reference

```ts
// Within-act transition (smooth)
springTiming({ config: { damping: 28, stiffness: 50 }, durationInFrames: 30 })

// Between-act transition (slower, more deliberate)
springTiming({ config: { damping: 35, stiffness: 35 }, durationInFrames: 42 })

// Presentation: none() — no visual wipe, only spring timing
```

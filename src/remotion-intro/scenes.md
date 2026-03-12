# Remotion Intro — Scene Prompt

> This is the exact prompt used to generate the 10-second motion graphics intro.
> Point anyone here to reproduce or remix the output.

---

## Overview

Create a premium 10-second motion graphics intro using **Remotion** and **React**.

- **Resolution:** 1920 x 1080 @ 30 fps (300 frames)
- **Background:** Clean white canvas with a subtle light-gray grid pattern.

---

## Scene 1 — The Setup (frames 0–75)

A precise row of **8 colorful, filled geometric shapes** centered on screen with even spacing (90 px):

| Position | Shape    | Color              |
| -------- | -------- | ------------------ |
| 1        | Pentagon | `#FF3366` hot pink |
| 2        | Triangle | `#33CCFF` cyan     |
| 3        | Square   | `#FFCC00` golden   |
| 4        | Circle   | `#FF6633` orange   |
| 5        | Hexagon  | `#44DD88` green    |
| 6        | Diamond  | `#AA66FF` purple   |
| 7        | Circle   | `#FF9933` amber    |
| 8        | Triangle | `#3399FF` blue     |

Each shape has a gentle, organic **"breathing" idle animation** — a slow sinusoidal scale pulse and vertical float.

**No strokes on shapes. Only filled, vibrant colors.**

---

## Scene 2 — The Morph (frames 75–170)

Trigger a dynamic staggered sequence (5-frame delay between each shape):

1. Each shape **jumps up** (translates -190 px on Y).
2. While in mid-air, it **spins 180 degrees**.
3. During the spin, the shape **smoothly morphs** (using **flubber**) into its corresponding bold block letter:

   `Pentagon → R` · `Triangle → E` · `Square → M` · `Circle → O` · `Hexagon → T` · `Diamond → I` · `Circle → O` · `Triangle → N`

4. It **lands back** in place, now reading **R-E-M-O-T-I-O-N**.

Add a **ghost-trail effect** behind each shape during the jump — 3 trailing copies at decreasing opacity (0.22 → 0.12 → 0.06) for a sense of speed.

---

## Scene 3 — The Arrival (frames 165–215)

The **Remotion logo** (a blue-to-purple gradient play-button triangle) **flies in from the left side** of the screen to hover just to the left of the "R".

- Snap into place with a **spring animation** (`damping: 14`).
- Immediately perform a full **360-degree rotation** after snapping.

---

## Scene 4 — The Wipe (frames 215–300)

Execute a slow, cinematic exit:

1. The logo **slides smoothly** from its resting position across the entire screen, left to right.
2. **Wipe Logic:** as the logo passes over each letter of "REMOTION", that letter **vanishes** — scaling down to 0 and fading out — exactly in sync with the logo's position.
3. The result is an **erasing effect** that clears the screen cleanly.

---

## Technical Requirements

| Concern           | Detail                                                                          |
| ----------------- | ------------------------------------------------------------------------------- |
| Springs           | `remotion spring()` for all physics                                             |
| Jump damping      | `damping: 14`                                                                   |
| Wipe damping      | `damping: 300` (slow, cinematic)                                                |
| Shape morphing    | `flubber` library — `interpolate(shapePath, letterPath, {maxSegmentLength: 10})` |
| Shape rendering   | Filled SVG paths, **no strokes**                                                |
| Ghost trails      | 3 copies per shape during jump at offsets 3, 7, 11 frames behind                |
| Logo              | Blue `#0B84F3` → purple `#6C47FF` gradient triangle with subtle glow filter     |

---

## File Structure

```
src/remotion-intro/
├── index.ts              # Entry point — registerRoot
├── Root.tsx              # Composition registration (300 frames, 1920×1080, 30 fps)
├── Intro.tsx             # Main component — all 4 scenes, animation logic
├── paths.ts              # SVG path data for shapes + letters, color palette
├── GridBackground.tsx    # White canvas with light-gray grid pattern
└── RemotionLogo.tsx      # Gradient play-button triangle with glow
```

## Run

```bash
npm run intro            # Open in Remotion Studio
npm run render:intro     # Render to out/remotion-intro.mp4
```

import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { SpaceBackground } from "./components/SpaceBackground";
import { Scene1Title } from "./scenes/Scene1Title";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Solution } from "./scenes/Scene3Solution";
import { Scene4AARS2 } from "./scenes/Scene4AARS2";
import { Scene5Numbers } from "./scenes/Scene5Numbers";
import { Scene6CTA } from "./scenes/Scene6CTA";

/**
 * CuretopiaCase — 90s video at 30fps = 2700 frames
 *
 * Scene timing:
 *   Scene 1 — Title:      0s–3s    →  frames 0–90
 *   Scene 2 — Problem:    3s–18s   →  frames 90–540
 *   Scene 3 — Solution:   18s–35s  →  frames 540–1050
 *   Scene 4 — AARS2:      35s–55s  →  frames 1050–1650
 *   Scene 5 — Numbers:    55s–75s  →  frames 1650–2250
 *   Scene 6 — CTA:        75s–90s  →  frames 2250–2700
 */
export const CuretopiaCase: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Persistent space background — stars twinkle through all scenes */}
      <SpaceBackground nebulaX={55} nebulaY={42} intensity={1} />

      {/* Scene 1 — Title (0–3s, frames 0–90) */}
      <Sequence from={0} durationInFrames={90}>
        <Scene1Title />
      </Sequence>

      {/* Scene 2 — The Problem (3–18s, frames 90–540) */}
      <Sequence from={90} durationInFrames={450}>
        <Scene2Problem />
      </Sequence>

      {/* Scene 3 — The Solution (18–35s, frames 540–1050) */}
      <Sequence from={540} durationInFrames={510}>
        <Scene3Solution />
      </Sequence>

      {/* Scene 4 — AARS2 Proof Point (35–55s, frames 1050–1650) */}
      <Sequence from={1050} durationInFrames={600}>
        <Scene4AARS2 />
      </Sequence>

      {/* Scene 5 — The Numbers (55–75s, frames 1650–2250) */}
      <Sequence from={1650} durationInFrames={600}>
        <Scene5Numbers />
      </Sequence>

      {/* Scene 6 — CTA (75–90s, frames 2250–2700) */}
      <Sequence from={2250} durationInFrames={450}>
        <Scene6CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

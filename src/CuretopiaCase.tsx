import React from "react";
import { AbsoluteFill, Audio, Sequence } from "remotion";
import { SpaceBackground } from "./components/SpaceBackground";
import { Scene1Title } from "./scenes/Scene1Title";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene2bBigPharma } from "./scenes/Scene2b";
import { Scene3Solution } from "./scenes/Scene3Solution";
import { Scene3bCommunity } from "./scenes/Scene3b";
import { Scene4AARS2 } from "./scenes/Scene4AARS2";
import { Scene5Numbers } from "./scenes/Scene5Numbers";
import { Scene5bTrillion } from "./scenes/Scene5b";
import { Scene6CTA } from "./scenes/Scene6CTA";

/**
 * CuretopiaCase — 90s video at 30fps = 2700 frames
 *
 * Scene timing (synced to voiceover):
 *   Scene 1  — Title                frame 0–150      (0:00–0:05)
 *   Scene 2a — Problem stats        frame 150–540    (0:05–0:18)
 *   Scene 2b — Big Pharma Threshold frame 540–750    (0:18–0:25)
 *   Scene 3a — Pipeline flow        frame 750–1260   (0:25–0:42)
 *   Scene 3b — Community Medicine   frame 1260–1380  (0:42–0:46)
 *   Scene 4  — AARS2 split screen   frame 1380–1950  (0:46–1:05)
 *   Scene 5a — Traction stats       frame 1950–2250  (1:05–1:15)
 *   Scene 5b — $1.5 Trillion        frame 2250–2460  (1:15–1:22)
 *   Scene 6  — CTA                  frame 2460–2700  (1:22–1:30)
 */
export const CuretopiaCase: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Voiceover audio — plays for full 90 seconds */}
      <Audio src={require("./voiceover.mp3")} />

      {/* Persistent space background — stars twinkle through all scenes */}
      <SpaceBackground nebulaX={55} nebulaY={42} intensity={1} />

      {/* Scene 1 — Title (0–5s, frames 0–150) */}
      <Sequence from={0} durationInFrames={150}>
        <Scene1Title />
      </Sequence>

      {/* Scene 2a — The Problem stats (5–18s, frames 150–540) */}
      <Sequence from={150} durationInFrames={390}>
        <Scene2Problem />
      </Sequence>

      {/* Scene 2b — Big Pharma Threshold (18–25s, frames 540–750) */}
      <Sequence from={540} durationInFrames={210}>
        <Scene2bBigPharma />
      </Sequence>

      {/* Scene 3a — Pipeline flow (25–42s, frames 750–1260) */}
      <Sequence from={750} durationInFrames={510}>
        <Scene3Solution />
      </Sequence>

      {/* Scene 3b — Community Medicine (42–46s, frames 1260–1380) */}
      <Sequence from={1260} durationInFrames={120}>
        <Scene3bCommunity />
      </Sequence>

      {/* Scene 4 — AARS2 Proof Point (46–65s, frames 1380–1950) */}
      <Sequence from={1380} durationInFrames={570}>
        <Scene4AARS2 />
      </Sequence>

      {/* Scene 5a — Traction stats (65–75s, frames 1950–2250) */}
      <Sequence from={1950} durationInFrames={300}>
        <Scene5Numbers />
      </Sequence>

      {/* Scene 5b — $1.5 Trillion (75–82s, frames 2250–2460) */}
      <Sequence from={2250} durationInFrames={210}>
        <Scene5bTrillion />
      </Sequence>

      {/* Scene 6 — CTA (82–90s, frames 2460–2700) */}
      <Sequence from={2460} durationInFrames={240}>
        <Scene6CTA />
      </Sequence>
    </AbsoluteFill>
  );
};

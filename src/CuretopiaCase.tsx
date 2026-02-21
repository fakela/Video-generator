import React from "react";
import { AbsoluteFill, Audio, interpolate } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import type {
  TransitionPresentation,
  TransitionPresentationComponentProps,
} from "@remotion/transitions";
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
 * Zoom-Fade custom transition presentation.
 * Entering scene zooms in (0.96→1) while fading in.
 * Exiting scene zooms out (1→1.04) while fading out.
 */
type ZoomFadeProps = Record<string, never>;

const ZoomFadePresentation: React.FC<
  TransitionPresentationComponentProps<ZoomFadeProps>
> = ({ children, presentationProgress, presentationDirection }) => {
  const opacity =
    presentationDirection === "entering"
      ? presentationProgress
      : 1 - presentationProgress;

  const scale =
    presentationDirection === "entering"
      ? interpolate(presentationProgress, [0, 1], [0.96, 1])
      : interpolate(presentationProgress, [0, 1], [1, 1.04]);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};

const zoomFade = (): TransitionPresentation<ZoomFadeProps> => ({
  component: ZoomFadePresentation,
  props: {},
});

/**
 * CuretopiaCase — 90s video at 30fps = 2700 frames total
 *
 * Uses TransitionSeries with 10-frame zoom-fade between each scene.
 * Each non-last scene has +10 frames so total stays at 2700:
 *   sum(durations) − 8 transitions × 10 frames = 2780 − 80 = 2700
 *
 * Audio sync:
 *   Scene 1  — Title                0:00–0:05
 *   Scene 2a — Problem stats        0:05–0:18
 *   Scene 2b — Big Pharma Threshold 0:18–0:25
 *   Scene 3a — Pipeline flow        0:25–0:42
 *   Scene 3b — Community Medicine   0:42–0:46
 *   Scene 4  — AARS2 split screen   0:46–1:05
 *   Scene 5a — Traction stats       1:05–1:15
 *   Scene 5b — $1.5 Trillion        1:15–1:22
 *   Scene 6  — CTA                  1:22–1:30
 */
export const CuretopiaCase: React.FC = () => {
  const transition = (
    <TransitionSeries.Transition
      presentation={zoomFade()}
      timing={springTiming({
        config: { damping: 200, stiffness: 200, mass: 1 },
        durationInFrames: 10,
      })}
    />
  );

  return (
    <AbsoluteFill>
      {/* Voiceover audio — plays for full 90 seconds */}
      <Audio src={require("./voiceover.mp3")} />

      {/* Persistent space background — stars twinkle through all scenes */}
      <SpaceBackground nebulaX={55} nebulaY={42} intensity={1} />

      {/* All scenes in TransitionSeries with zoom-fade between each */}
      <TransitionSeries>
        {/* Scene 1 — Title (0:00–0:05, 160 frames) */}
        <TransitionSeries.Sequence durationInFrames={160}>
          <Scene1Title />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 2a — Problem stats (0:05–0:18, 400 frames) */}
        <TransitionSeries.Sequence durationInFrames={400}>
          <Scene2Problem />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 2b — Big Pharma Threshold (0:18–0:25, 220 frames) */}
        <TransitionSeries.Sequence durationInFrames={220}>
          <Scene2bBigPharma />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 3a — Pipeline flow (0:25–0:42, 520 frames) */}
        <TransitionSeries.Sequence durationInFrames={520}>
          <Scene3Solution />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 3b — Community Medicine (0:42–0:46, 130 frames) */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene3bCommunity />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 4 — AARS2 Proof Point (0:46–1:05, 580 frames) */}
        <TransitionSeries.Sequence durationInFrames={580}>
          <Scene4AARS2 />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 5a — Traction stats (1:05–1:15, 310 frames) */}
        <TransitionSeries.Sequence durationInFrames={310}>
          <Scene5Numbers />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 5b — $1.5 Trillion (1:15–1:22, 220 frames) */}
        <TransitionSeries.Sequence durationInFrames={220}>
          <Scene5bTrillion />
        </TransitionSeries.Sequence>

        {transition}

        {/* Scene 6 — CTA (1:22–1:30, 240 frames — last, no trailing transition) */}
        <TransitionSeries.Sequence durationInFrames={240}>
          <Scene6CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

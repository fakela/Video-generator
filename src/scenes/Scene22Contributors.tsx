import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene22Contributors: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "1,000+" — count up from 0 to 1000 at frame 10 over 40 frames, with spring punch
  const countProgress = interpolate(frame, [10, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const displayNum = Math.round(1000 * countProgress);

  const punch = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const punchScale = interpolate(punch, [0, 1], [0.7, 1]);
  const punchOpacity = interpolate(punch, [0, 1], [0, 1]);

  // 2. "Individual contributors came together." — fade up at frame 45
  const sub1Opacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [45, 65], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. Three words staggered fade in
  const words = [
    { text: "Patients.", delay: 65 },
    { text: "Researchers.", delay: 75 },
    { text: "Believers.", delay: 85 },
  ];

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
          }}
        >
          {displayNum.toLocaleString()}+
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 20,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          Individual contributors came together.
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 24,
            justifyContent: "center",
          }}
        >
          {words.map((word, i) => {
            const wordOpacity = interpolate(
              frame,
              [word.delay, word.delay + 20],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            const wordTranslateY = interpolate(
              frame,
              [word.delay, word.delay + 20],
              [30, 0],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            return (
              <div
                key={i}
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#a855f7",
                  fontFamily: poppins,
                  textAlign: "center",
                  opacity: wordOpacity,
                  transform: `translateY(${wordTranslateY}px)`,
                }}
              >
                {word.text}
              </div>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene22Contributors: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing glow behind number
  const glowPulse = Math.sin(frame * 0.07) * 0.2 + 0.8;
  const glowScale = Math.sin(frame * 0.04) * 0.1 + 1.0;

  // "1,000+" — number counter from 0 to 1000, frame 5 to 45, with spring punch
  const countProgress = interpolate(frame, [5, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const displayNum = Math.round(1000 * countProgress);

  const punch = spring({
    frame: frame - 5,
    fps,
    config: { damping: 8, stiffness: 140 },
  });
  const punchScale = interpolate(punch, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const punchOpacity = interpolate(punch, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "contributors" — fade + scale at frame 40
  const contribSpring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const contribScale = interpolate(contribSpring, [0, 1], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const contribOpacity = interpolate(contribSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Staggered word reveal for the description
  const words = [
    "From",
    "40+",
    "countries.",
    "Scientists,",
    "patients,",
    "developers.",
  ];
  const wordStartFrame = 65;
  const wordInterval = 5;

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
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 16,
          position: "relative",
        }}
      >
        {/* Pulsing glow behind number */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            top: "50%",
            left: "50%",
            borderRadius: "50%",
            transform: `translate(-50%, -55%) scale(${glowScale})`,
            background:
              "radial-gradient(circle, rgba(123,47,190,0.35) 0%, rgba(123,47,190,0.1) 40%, transparent 70%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* "1,000+" — number counter with spring punch */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            lineHeight: 1,
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 40px rgba(123,47,190,0.4), 0 0 80px rgba(123,47,190,0.15)",
          }}
        >
          {displayNum.toLocaleString()}+
        </div>

        {/* "contributors" — fade + scale */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            transform: `scale(${contribScale})`,
            opacity: contribOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          pioneers
        </div>

        {/* Staggered word reveal */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            marginTop: 20,
            maxWidth: 900,
            position: "relative",
            zIndex: 1,
          }}
        >
          {words.map((word, i) => {
            const wordDelay = wordStartFrame + i * wordInterval;
            const wordOpacity = interpolate(
              frame,
              [wordDelay, wordDelay + 12],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            const wordY = interpolate(
              frame,
              [wordDelay, wordDelay + 12],
              [24, 0],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            return (
              <div
                key={i}
                style={{
                  fontSize: 44,
                  color: "#A89BC2",
                  fontFamily: ldTechD,
                  opacity: wordOpacity,
                  transform: `translateY(${wordY}px)`,
                }}
              >
                {word}
              </div>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene10Step2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Emoji: scale bounce with elastic spring (damping: 6)
  const emojiSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 6, stiffness: 150, overshootClamping: false },
  });
  const emojiScale = interpolate(emojiSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const emojiOpacity = interpolate(emojiSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "STEP 2" label: fade + letterSpacing animation
  const labelProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const labelOpacity = interpolate(labelProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelLetterSpacing = interpolate(labelProgress, [0, 1], [24, 6], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Title: 3D rotateX from -30deg to 0
  const titleProgress = spring({
    frame: frame - 28,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const titleRotateX = interpolate(titleProgress, [0, 1], [-30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleScale = interpolate(titleProgress, [0, 1], [0.9, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Description: staggered word reveal
  const words =
    "Open calls go to researchers worldwide. The best proposals get funded\u2014fast.".split(
      " "
    );

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        {/* Emoji */}
        <div
          style={{
            fontSize: 100,
            transform: `scale(${emojiScale})`,
            opacity: emojiOpacity,
          }}
        >
          🔬
        </div>

        {/* STEP 2 label */}
        <div
          style={{
            fontSize: 40,
            color: "#c4b5fd",
            letterSpacing: labelLetterSpacing,
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: poppins,
            opacity: labelOpacity,
          }}
        >
          STEP 2
        </div>

        {/* Title with 3D rotateX */}
        <div
          style={{
            fontSize: 72,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            opacity: titleOpacity,
            transform: `perspective(800px) rotateX(${titleRotateX}deg) scale(${titleScale})`,
            transformOrigin: "center bottom",
          }}
        >
          Scientists Apply to Solve It
        </div>

        {/* Staggered word reveal */}
        <div
          style={{
            fontSize: 44,
            color: "#c4b5fd",
            fontWeight: 400,
            fontFamily: poppins,
            maxWidth: 900,
            lineHeight: 1.4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 10px",
          }}
        >
          {words.map((word, i) => {
            const wordDelay = 48 + i * 3;
            const wordOpacity = interpolate(
              frame,
              [wordDelay, wordDelay + 8],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            const wordTranslateY = interpolate(
              frame,
              [wordDelay, wordDelay + 8],
              [20, 0],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            return (
              <span
                key={i}
                style={{
                  opacity: wordOpacity,
                  transform: `translateY(${wordTranslateY}px)`,
                  display: "inline-block",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};

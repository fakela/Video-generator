import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene13Step5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Emoji: scale from 0 with dramatic spring (overshoot)
  const emojiSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 6, stiffness: 180, overshootClamping: false },
  });
  const emojiScale = interpolate(emojiSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const emojiOpacity = interpolate(emojiSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "STEP 5" label: fade + scale
  const labelProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const labelOpacity = interpolate(labelProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelScale = interpolate(labelProgress, [0, 1], [0.4, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Title: 3D rotateY from 45deg to 0
  const titleSpring = spring({
    frame: frame - 28,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const titleRotateY = interpolate(titleSpring, [0, 1], [45, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.9, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Description: staggered reveal with scale
  const words =
    "Successful compounds advance to regulatory approval. Community-funded. Patient-first.".split(
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
        {/* Emoji with dramatic overshoot spring */}
        <div
          style={{
            fontSize: 100,
            transform: `scale(${emojiScale})`,
            opacity: emojiOpacity,
          }}
        >
          🏥
        </div>

        {/* STEP 5 label */}
        <div
          style={{
            fontSize: 40,
            color: "#c4b5fd",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: poppins,
            opacity: labelOpacity,
            transform: `scale(${labelScale})`,
          }}
        >
          STEP 5
        </div>

        {/* Title with 3D rotateY */}
        <div
          style={{
            fontSize: 72,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            opacity: titleOpacity,
            transform: `perspective(800px) rotateY(${titleRotateY}deg) scale(${titleScale})`,
            transformOrigin: "center center",
          }}
        >
          FDA-Ready Clinical Trials
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
            const wordSpring = spring({
              frame: frame - (48 + i * 4),
              fps,
              config: { damping: 12, stiffness: 100 },
            });
            const wordOpacity = interpolate(wordSpring, [0, 1], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            const wordScale = interpolate(wordSpring, [0, 1], [0.6, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            const wordBlur = interpolate(wordSpring, [0, 1], [6, 0], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            return (
              <span
                key={i}
                style={{
                  opacity: wordOpacity,
                  transform: `scale(${wordScale})`,
                  filter: `blur(${wordBlur}px)`,
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

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene3Affected: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Softer glow
  const glowPulse = Math.sin(frame * 0.05) * 0.1 + 0.25;

  // 1. "1 in 10" — 3D rotateX animation (from -90deg to 0)
  const statSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const statRotateX = interpolate(statSpring, [0, 1], [-90, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const statOpacity = interpolate(frame, [10, 18], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "people worldwide live with a rare disease" — staggered word appearance
  const words = "people worldwide live with a rare disease".split(" ");

  // 3. Sub text — fade + translateY
  const subOpacity = interpolate(frame, [75, 95], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subY = interpolate(frame, [75, 95], [25, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Softer radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: `radial-gradient(circle, rgba(139,92,246,${glowPulse}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 1. "1 in 10" — 3D rotateX */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 200,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            opacity: statOpacity,
            transform: `perspective(800px) rotateX(${statRotateX}deg)`,
            transformOrigin: "center bottom",
          }}
        >
          1 in 10
        </div>

        {/* 2. Staggered word appearance */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 52,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 14,
          }}
        >
          {words.map((word, i) => {
            const wordStart = 40 + i * 4;
            const wordOpacity = interpolate(
              frame,
              [wordStart, wordStart + 8],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            const wordY = interpolate(
              frame,
              [wordStart, wordStart + 8],
              [15, 0],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            return (
              <span
                key={i}
                style={{
                  opacity: wordOpacity,
                  transform: `translateY(${wordY}px)`,
                  display: "inline-block",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* 3. Sub text */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 44,
            fontWeight: 400,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            marginTop: 20,
          }}
        >
          That&rsquo;s 800 million people. Waiting.
        </div>
      </div>
    </SceneWrapper>
  );
};

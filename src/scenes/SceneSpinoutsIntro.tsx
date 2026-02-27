import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const SceneSpinoutsIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "Proof of Cures" — 3D rotateX flip-in
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const titleRotateX = interpolate(titleSpring, [0, 1], [-90, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(frame, [8, 16], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Pulsing green glow
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // 2. "Playing on Proof of Work..." — fade + blur-in
  const line1Opacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1Blur = interpolate(frame, [30, 50], [8, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "If you get funding..." — spring scale punch
  const punchSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 8, stiffness: 150 },
  });
  const punchScale = interpolate(punchSpring, [0, 1], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const punchOpacity = interpolate(frame, [55, 62], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

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
          position: "relative",
        }}
      >
        {/* Green glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* 1. "Proof of Cures" — 3D rotateX flip */}
        <div
          style={{
            fontSize: 88,
            color: "#22c55e",
            fontWeight: 900,
            fontFamily: poppins,
            opacity: titleOpacity,
            transform: `perspective(800px) rotateX(${titleRotateX}deg)`,
            transformOrigin: "center bottom",
            position: "relative",
            zIndex: 1,
            textShadow:
              "0 0 40px rgba(34,197,94,0.5), 0 0 80px rgba(34,197,94,0.2)",
          }}
        >
          Proof of Cures
        </div>

        {/* 2. "Playing on Proof of Work and Proof of Stake..." */}
        <div
          style={{
            fontSize: 40,
            color: "#ffffff",
            fontFamily: poppins,
            maxWidth: 950,
            opacity: line1Opacity,
            filter: `blur(${line1Blur}px)`,
            marginTop: 24,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.4,
          }}
        >
          Playing on Proof of Work and Proof of Stake, we created{" "}
          <span style={{ color: "#22c55e", fontWeight: 700 }}>
            Proof of Cures
          </span>
          .
        </div>

        {/* 3. "If you get funding, you make everything public." */}
        <div
          style={{
            fontSize: 48,
            color: "#c4b5fd",
            fontWeight: 700,
            fontFamily: poppins,
            opacity: punchOpacity,
            transform: `scale(${punchScale})`,
            marginTop: 24,
            position: "relative",
            zIndex: 1,
          }}
        >
          If you get funding, you make everything public.
        </div>
      </div>
    </SceneWrapper>
  );
};

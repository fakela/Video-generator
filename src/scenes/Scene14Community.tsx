import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene14Community: React.FC = () => {
  const frame = useCurrentFrame();
  const {} = useVideoConfig();

  // Pulsing radial purple glow
  const glowPulse = Math.sin(frame * 0.04) * 0.15 + 0.3;

  // Slow fade in over 30 frames starting at frame 15
  const textOpacity = interpolate(frame, [15, 45], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const textTranslateY = interpolate(frame, [15, 45], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Pulsing radial purple glow */}
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 900,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, rgba(168,85,247,${glowPulse}) 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            fontSize: 64,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            textAlign: "center",
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            textShadow: "0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(168,85,247,0.3)",
            position: "relative",
            zIndex: 1,
          }}
        >
          ✦ Community Medicine. Onchain. ✦
        </div>
      </div>
    </SceneWrapper>
  );
};

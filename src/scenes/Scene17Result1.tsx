import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene17Result1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle purple radial glow (dimmer than scene 14)
  const glowPulse = Math.sin(frame * 0.04) * 0.1 + 0.2;

  // "2 drug candidates" zoom in (frame 10)
  const mainSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 180 } });
  const mainScale = interpolate(mainSpring, [0, 1], [0.8, 1]);

  // "discovered for AARS2 Deficiency" fade up (frame 35)
  const subOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subTranslateY = interpolate(frame, [35, 55], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // "From a screen of 8,500 compounds." fade up (frame 55)
  const detailOpacity = interpolate(frame, [55, 75], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const detailTranslateY = interpolate(frame, [55, 75], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Subtle purple radial glow */}
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

        {/* Main stat */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            transform: `scale(${mainScale})`,
            position: "relative",
            zIndex: 1,
          }}
        >
          2 drug candidates
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            opacity: subOpacity,
            transform: `translateY(${subTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          discovered for AARS2 Deficiency
        </div>

        {/* Detail */}
        <div
          style={{
            fontSize: 20,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            opacity: detailOpacity,
            transform: `translateY(${detailTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          From a screen of 8,500 compounds.
        </div>
      </div>
    </SceneWrapper>
  );
};

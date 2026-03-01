import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

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

  // "From 8,500 repurposable compounds..." fade up (frame 55)
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
          gap: 16,
          width: "100%",
          height: "100%",
          fontFamily: ldTechD,
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
            background: `radial-gradient(circle, rgba(123,47,190,${glowPulse}) 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        {/* Main stat */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
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
            fontSize: 48,
            color: "#ffffff",
            fontFamily: ldTechD,
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
            fontSize: 42,
            color: "#A89BC2",
            fontFamily: ldTechD,
            textAlign: "center",
            opacity: detailOpacity,
            transform: `translateY(${detailTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          Discovered for AARS2 Deficiency. From 84,000 tests.
        </div>
      </div>
    </SceneWrapper>
  );
};

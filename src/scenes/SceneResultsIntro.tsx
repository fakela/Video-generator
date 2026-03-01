import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneResultsIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "And here's what happened." — spring punch
  const mainSpring = spring({
    frame: frame - 12,
    fps,
    config: { damping: 8, stiffness: 140 },
  });
  const mainScale = interpolate(mainSpring, [0, 1], [0.5, 1]);
  const mainOpacity = interpolate(mainSpring, [0, 1], [0, 1]);

  // Pulsing glow ring
  const ringPulse = Math.sin(frame * 0.08) * 0.3 + 0.7;
  const ringEntrance = interpolate(frame, [15, 45], [0, 1], {
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
          fontFamily: ldTechD,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Glow ring */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "2px solid #E040FB",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: ringPulse * ringEntrance * 0.4,
            boxShadow: "0 0 60px rgba(224,64,251,0.3)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontSize: 80,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: ldTechD,
            transform: `scale(${mainScale})`,
            opacity: mainOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 40px rgba(224,64,251,0.4)",
          }}
        >
          And here's what happened.
        </div>
      </div>
    </SceneWrapper>
  );
};

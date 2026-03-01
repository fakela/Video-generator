import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene19Result3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing glow behind number
  const glowPulse = Math.sin(frame * 0.08) * 0.2 + 0.8;
  const glowScale = Math.sin(frame * 0.05) * 0.1 + 1.0;

  // "2" — spring punch scale from 0.2 starting at frame 5
  const numberSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 8, stiffness: 140 },
  });
  const numberScale = interpolate(numberSpring, [0, 1], [0.2, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const numberOpacity = interpolate(numberSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "pioneer families" — fade + scale from 0.8 at frame 30
  const familiesSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const familiesScale = interpolate(familiesSpring, [0, 1], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const familiesOpacity = interpolate(familiesSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "$SASHA — the world's first Curestream" — fade up at frame 55
  const sashaOpacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sashaTranslateY = interpolate(frame, [55, 75], [30, 0], {
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
          gap: 16,
          position: "relative",
        }}
      >
        {/* Pulsing glow behind number */}
        <div
          style={{
            position: "absolute",
            width: 550,
            height: 550,
            top: "50%",
            left: "50%",
            borderRadius: "50%",
            transform: `translate(-50%, -50%) scale(${glowScale})`,
            background:
              "radial-gradient(circle, rgba(224,64,251,0.35) 0%, rgba(224,64,251,0.1) 40%, transparent 70%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* "2" — big gold number with spring punch */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 700,
            color: "#E040FB",
            fontFamily: ldTechD,
            lineHeight: 1,
            transform: `scale(${numberScale})`,
            opacity: numberOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 40px rgba(224,64,251,0.5), 0 0 80px rgba(224,64,251,0.2)",
          }}
        >
          2
        </div>

        {/* "pioneer families" — fade + scale */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            transform: `scale(${familiesScale})`,
            opacity: familiesOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          pioneer families
        </div>

        {/* "$SASHA — the world's first Curestream" */}
        <div
          style={{
            fontSize: 44,
            color: "#E040FB",
            fontWeight: 600,
            fontFamily: ldTechD,
            marginTop: 16,
            opacity: sashaOpacity,
            transform: `translateY(${sashaTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          $SASHA — the world's first Curestream.
        </div>

        <div
          style={{
            fontSize: 40,
            color: "#A89BC2",
            fontFamily: ldTechD,
            marginTop: 4,
            opacity: sashaOpacity,
            transform: `translateY(${sashaTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          Proof this model works for every rare kid.
        </div>
      </div>
    </SceneWrapper>
  );
};

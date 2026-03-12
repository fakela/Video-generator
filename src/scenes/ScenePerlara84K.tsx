import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const ScenePerlara84K: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing purple glow
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // "84,000" — spring punch at frame 8
  const bigNumSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const bigNumScale = interpolate(bigNumSpring, [0, 1], [0.7, 1]);
  const bigNumOpacity = interpolate(bigNumSpring, [0, 1], [0, 1]);

  // "individual compound tests" — fade up at frame 35
  const subOpacity = interpolate(frame, [35, 52], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subY = interpolate(frame, [35, 52], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Chips row — fade in at frame 55
  const chipsOpacity = interpolate(frame, [55, 72], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const chipsY = interpolate(frame, [55, 72], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "The most comprehensive..." — fade up at frame 90
  const footerOpacity = interpolate(frame, [90, 108], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const footerY = interpolate(frame, [90, 108], [24, 0], {
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
          gap: 24,
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(204,68,255,0.22) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Big number */}
        <div
          style={{
            fontSize: 180,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            lineHeight: 1,
            transform: `scale(${bigNumScale})`,
            opacity: bigNumOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          84,000
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: 64,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          individual compound tests
        </div>

        {/* Chips row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 24,
            opacity: chipsOpacity,
            transform: `translateY(${chipsY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: ldTechD,
              background: "rgba(255,255,255,0.12)",
              border: "2px solid rgba(255,255,255,0.3)",
              padding: "12px 32px",
              borderRadius: 40,
            }}
          >
            8,500 compounds
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#A89BC2",
              fontFamily: ldTechD,
            }}
          >
            ×
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#E040FB",
              fontFamily: ldTechD,
              background: "rgba(224,64,251,0.12)",
              border: "2px solid rgba(224,64,251,0.4)",
              padding: "12px 32px",
              borderRadius: 40,
            }}
          >
            11 ARS mutations
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: footerOpacity,
            transform: `translateY(${footerY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          The most comprehensive rare disease drug screen ever run.
        </div>
      </div>
    </SceneWrapper>
  );
};

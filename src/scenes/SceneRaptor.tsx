import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const SceneRaptor: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "$RAPTOR → RaptorCo" — spring punch at frame 10
  const titleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 8, stiffness: 160 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // "The first Coin-to-Company spin-out in history." — fade up at frame 35
  const line1Opacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1TranslateY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Research focus: autophagy-related drug repurposing." — fade up at frame 58
  const line2Opacity = interpolate(frame, [58, 78], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2TranslateY = interpolate(frame, [58, 78], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "The Curetopia model. Proven at scale." — spring punch at frame 85
  const punchSpring = spring({
    frame: frame - 85,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const punchScale = interpolate(punchSpring, [0, 1], [0.7, 1]);
  const punchOpacity = interpolate(punchSpring, [0, 1], [0, 1]);

  // Pulsing gold glow
  const glowPulse = Math.sin(frame * 0.06) * 0.2 + 0.8;

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
          gap: 16,
          position: "relative",
        }}
      >
        {/* Gold radial glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* "$RAPTOR → RaptorCo" */}
        <div
          style={{
            fontSize: 72,
            color: "#fbbf24",
            fontWeight: 900,
            fontFamily: poppins,
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
            position: "relative",
            zIndex: 1,
            textShadow:
              "0 0 40px rgba(251,191,36,0.5), 0 0 80px rgba(251,191,36,0.2)",
          }}
        >
          $RAPTOR → RaptorCo
        </div>

        {/* "The first Coin-to-Company spin-out in history." */}
        <div
          style={{
            fontSize: 48,
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: poppins,
            opacity: line1Opacity,
            transform: `translateY(${line1TranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          The first Coin-to-Company spin-out in history.
        </div>

        {/* "Research focus: autophagy-related drug repurposing." */}
        <div
          style={{
            fontSize: 44,
            color: "#c4b5fd",
            fontFamily: poppins,
            opacity: line2Opacity,
            transform: `translateY(${line2TranslateY}px)`,
            position: "relative",
            zIndex: 1,
            maxWidth: 900,
          }}
        >
          Research focus: autophagy-related drug repurposing.
        </div>

        {/* Longevity tagline */}
        <div
          style={{
            fontSize: 46,
            color: "#22c55e",
            fontWeight: 700,
            fontFamily: poppins,
            marginTop: 12,
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          Targeting longevity pathways, one coin at a time.
        </div>
      </div>
    </SceneWrapper>
  );
};

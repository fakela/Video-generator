import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneSasha: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "$SASHA" — drops from top with elastic bounce (high stiffness, low damping)
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { stiffness: 200, damping: 6 },
  });
  const titleY = interpolate(titleSpring, [0, 1], [-180, 0]);
  const titleOpacity = interpolate(frame, [8, 22], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Proof of Cures." — fade up at frame 30
  const proofOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const proofY = interpolate(frame, [30, 50], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "The world's first Curestream..." — fade up at frame 58
  const streamOpacity = interpolate(frame, [58, 78], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const streamY = interpolate(frame, [58, 78], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "She is the first." — fade at frame 88
  const firstOpacity = interpolate(frame, [88, 106], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const firstY = interpolate(frame, [88, 106], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "But she won't be the last." — spring punch at frame 115
  const lastSpring = spring({
    frame: frame - 115,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const lastScale = interpolate(lastSpring, [0, 1], [0.7, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const lastOpacity = interpolate(lastSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Pulsing glow — opacity only (no blur)
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
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 18,
          position: "relative",
        }}
      >
        {/* Radial glow — single gradient, no stacked box-shadows */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(224,64,251,0.2) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* "$SASHA" — elastic drop from top */}
        <div
          style={{
            fontSize: 110,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          $SASHA
        </div>

        {/* "Proof of Cures." */}
        <div
          style={{
            fontSize: 60,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: proofOpacity,
            transform: `translateY(${proofY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          Proof of Cures.
        </div>

        {/* "The world's first Curestream..." */}
        <div
          style={{
            fontSize: 50,
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: streamOpacity,
            transform: `translateY(${streamY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          The world's first Curestream — a live onchain record of a cure in
          progress.
        </div>

        {/* "She is the first." */}
        <div
          style={{
            fontSize: 56,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            marginTop: 12,
            opacity: firstOpacity,
            transform: `translateY(${firstY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          She is the first.
        </div>

        {/* "But she won't be the last." */}
        <div
          style={{
            fontSize: 52,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            transform: `scale(${lastScale})`,
            opacity: lastOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          But she won't be the last.
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const SceneSasha: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "$SASHA" — spring punch at frame 10
  const titleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 8, stiffness: 160 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // "Proof of Cures." — fade up at frame 30
  const proofOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const proofTranslateY = interpolate(frame, [30, 50], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "The world's first Curestream..." — fade up at frame 55
  const streamOpacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const streamTranslateY = interpolate(frame, [55, 75], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "She is the first." — fade at frame 82
  const firstOpacity = interpolate(frame, [82, 100], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "But she won't be the last." — spring punch at frame 105
  const lastSpring = spring({
    frame: frame - 105,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const lastScale = interpolate(lastSpring, [0, 1], [0.7, 1]);
  const lastOpacity = interpolate(lastSpring, [0, 1], [0, 1]);

  // Green pulsing glow
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
          gap: 14,
          position: "relative",
        }}
      >
        {/* Green radial glow */}
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

        {/* "$SASHA" */}
        <div
          style={{
            fontSize: 96,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: poppins,
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
            position: "relative",
            zIndex: 1,
            textShadow:
              "0 0 40px rgba(224,64,251,0.5), 0 0 80px rgba(224,64,251,0.2)",
          }}
        >
          $SASHA
        </div>

        {/* "Proof of Cures." */}
        <div
          style={{
            fontSize: 52,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: poppins,
            opacity: proofOpacity,
            transform: `translateY(${proofTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          Proof of Cures.
        </div>

        {/* "The world's first Curestream..." */}
        <div
          style={{
            fontSize: 42,
            color: "#A89BC2",
            fontFamily: poppins,
            maxWidth: 900,
            opacity: streamOpacity,
            transform: `translateY(${streamTranslateY}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          The world's first Curestream — a live onchain record of a cure in
          progress.
        </div>

        {/* "She is the first." */}
        <div
          style={{
            fontSize: 48,
            color: "#ffffff",
            fontFamily: poppins,
            marginTop: 16,
            opacity: firstOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          She is the first.
        </div>

        {/* "But she won't be the last." */}
        <div
          style={{
            fontSize: 44,
            color: "#E040FB",
            fontWeight: 700,
            fontFamily: poppins,
            transform: `scale(${lastScale})`,
            opacity: lastOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          But she won't be the last.
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene18Result2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Purple radial glow pulsing behind title
  const glowPulse = Math.sin(frame * 0.05) * 0.15 + 0.4;
  const glowScale = Math.sin(frame * 0.03) * 0.08 + 1.0;

  // "Provisional" — 3D rotateY from 60deg to 0 starting at frame 8
  const provisionalRotateY = interpolate(frame, [8, 42], [60, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const provisionalOpacity = interpolate(frame, [8, 28], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "patent" — 3D rotateY from 60deg to 0, slightly delayed (frame 22)
  const patentRotateY = interpolate(frame, [22, 56], [60, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const patentOpacity = interpolate(frame, [22, 42], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Description — blur-in (filter blur 12 -> 0) starting at frame 52
  const blurAmount = interpolate(frame, [52, 82], [12, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descOpacity = interpolate(frame, [52, 82], [0, 1], {
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
          gap: 16,
          position: "relative",
        }}
      >
        {/* Purple radial glow behind title */}
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 900,
            top: "50%",
            left: "50%",
            borderRadius: "50%",
            transform: `translate(-50%, -50%) scale(${glowScale})`,
            background: `radial-gradient(circle, rgba(168,85,247,${glowPulse}) 0%, rgba(139,92,246,${glowPulse * 0.4}) 35%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />

        {/* "Provisional" — 3D rotateY */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: poppins,
            transform: `perspective(800px) rotateY(${provisionalRotateY}deg)`,
            opacity: provisionalOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 30px rgba(168,85,247,0.4)",
          }}
        >
          Provisional
        </div>

        {/* "patent" — delayed 3D rotateY */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#a855f7",
            fontFamily: poppins,
            transform: `perspective(800px) rotateY(${patentRotateY}deg)`,
            opacity: patentOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 30px rgba(168,85,247,0.5)",
          }}
        >
          patent
        </div>

        {/* Description with blur-in */}
        <div
          style={{
            fontSize: 40,
            color: "#c4b5fd",
            fontFamily: poppins,
            marginTop: 20,
            opacity: descOpacity,
            filter: `blur(${blurAmount}px)`,
            position: "relative",
            zIndex: 1,
          }}
        >
          Filed to protect community-developed IP.
        </div>
      </div>
    </SceneWrapper>
  );
};

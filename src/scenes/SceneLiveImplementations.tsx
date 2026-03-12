import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneLiveImplementations: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing purple glow
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // Title "2 Live Implementations." — spring punch at frame 8
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.7, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Subtitle — fade up at frame 40
  const subOpacity = interpolate(frame, [40, 58], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subY = interpolate(frame, [40, 58], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Two chips — spring fade up at frame 65
  const raptorSpring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const raptorScale = interpolate(raptorSpring, [0, 1], [0.6, 1]);
  const raptorOpacity = interpolate(raptorSpring, [0, 1], [0, 1]);

  const sashaSpring = spring({
    frame: frame - 75,
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const sashaScale = interpolate(sashaSpring, [0, 1], [0.6, 1]);
  const sashaOpacity = interpolate(sashaSpring, [0, 1], [0, 1]);

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
          gap: 32,
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(204,68,255,0.18) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 96,
            color: "#ffffff",
            fontWeight: 900,
            fontFamily: ldTechD,
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          2 Live Implementations.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontWeight: 600,
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          Curetopia's Proof of Cures model. Working in the real world.
        </div>

        {/* Token chips */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* $RAPTOR */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#E040FB",
              fontFamily: ldTechD,
              background: "rgba(224,64,251,0.12)",
              border: "2px solid rgba(224,64,251,0.5)",
              padding: "20px 48px",
              borderRadius: 48,
              transform: `scale(${raptorScale})`,
              opacity: raptorOpacity,
              willChange: "transform, opacity",
            }}
          >
            $RAPTOR
          </div>

          {/* $SASHA */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#E040FB",
              fontFamily: ldTechD,
              background: "rgba(224,64,251,0.12)",
              border: "2px solid rgba(224,64,251,0.5)",
              padding: "20px 48px",
              borderRadius: 48,
              transform: `scale(${sashaScale})`,
              opacity: sashaOpacity,
              willChange: "transform, opacity",
            }}
          >
            $SASHA
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

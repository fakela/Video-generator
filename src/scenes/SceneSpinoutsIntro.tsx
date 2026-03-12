import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneSpinoutsIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing purple glow
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // Beat 1 — "That was Project 001." — fade up at frame 8
  const beat1Opacity = interpolate(frame, [8, 24], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const beat1Y = interpolate(frame, [8, 24], [28, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Beat 2 — context line — fade up at frame 35
  const beat2Opacity = interpolate(frame, [35, 52], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const beat2Y = interpolate(frame, [35, 52], [28, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Beat 3 — punch line — spring scale at frame 68
  const beat3Spring = spring({
    frame: frame - 68,
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const beat3Scale = interpolate(beat3Spring, [0, 1], [0.6, 1]);
  const beat3Opacity = interpolate(beat3Spring, [0, 1], [0, 1]);

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
              "radial-gradient(circle, rgba(224,64,251,0.15) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Beat 1 — tag line */}
        <div
          style={{
            fontSize: 64,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: beat1Opacity,
            transform: `translateY(${beat1Y}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          That was Project 001.
        </div>

        {/* Beat 2 — context */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontFamily: ldTechD,
            maxWidth: 1000,
            opacity: beat2Opacity,
            transform: `translateY(${beat2Y}px)`,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.45,
            willChange: "transform, opacity",
          }}
        >
          Most research stalls because funding dries up before results arrive.
        </div>

        {/* Beat 3 — punch */}
        <div
          style={{
            fontSize: 64,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: beat3Opacity,
            transform: `scale(${beat3Scale})`,
            position: "relative",
            zIndex: 1,
            maxWidth: 1000,
            lineHeight: 1.4,
            willChange: "transform, opacity",
          }}
        >
          So we built a new model to change that.{" "}
          <span style={{ color: "#E040FB" }}>Proof of Cures.</span>
        </div>
      </div>
    </SceneWrapper>
  );
};

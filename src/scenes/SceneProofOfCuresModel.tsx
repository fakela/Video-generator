import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneProofOfCuresModel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "The Model" subtitle — fade in
  const subtitleOpacity = interpolate(frame, [5, 18], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // PoS analogy — slide up + fade
  const analogySpring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const analogyY = interpolate(analogySpring, [0, 1], [40, 0]);
  const analogyOpacity = interpolate(analogySpring, [0, 1], [0, 1]);

  // Core rule — spring punch
  const ruleSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 8, stiffness: 150 },
  });
  const ruleScale = interpolate(ruleSpring, [0, 1], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const ruleOpacity = interpolate(ruleSpring, [0, 1], [0, 1]);

  // Pulsing green glow
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

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
        {/* Green glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
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

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#CC44FF",
            fontWeight: 500,
            fontFamily: ldTechD,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: subtitleOpacity,
            position: "relative",
            zIndex: 1,
            marginBottom: 20,
          }}
        >
          The Model
        </div>

        {/* PoS analogy */}
        <div
          style={{
            fontSize: 38,
            color: "#A89BC2",
            fontFamily: ldTechD,
            maxWidth: 950,
            opacity: analogyOpacity,
            transform: `translateY(${analogyY}px)`,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.5,
          }}
        >
          Just as{" "}
          <span style={{ color: "#ffffff", fontWeight: 600 }}>
            Proof of Stake
          </span>{" "}
          showed that blockchain networks could operate through transparent,
          rule-based participation —{" "}
          <span style={{ color: "#E040FB", fontWeight: 600 }}>
            Proof of Cures
          </span>{" "}
          applies the same principles to scientific funding.
        </div>

        {/* Core rule */}
        <div
          style={{
            fontSize: 48,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: ruleOpacity,
            transform: `scale(${ruleScale})`,
            marginTop: 36,
            position: "relative",
            zIndex: 1,
            maxWidth: 950,
            lineHeight: 1.35,
          }}
        >
          Funding is tied to milestones.
          <br />
          Progress is{" "}
          <span style={{ color: "#E040FB" }}>public</span>.
        </div>
      </div>
    </SceneWrapper>
  );
};

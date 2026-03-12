import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene10ProofOfCures: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Proof of Work" — fades in at frame 12, then fades out at 55
  const powOpacity = interpolate(
    frame,
    [12, 28, 55, 68],
    [0, 0.5, 0.5, 0.15],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const powY = interpolate(frame, [12, 28], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Proof of Stake" — fades in at frame 70, then fades out at 115
  const posOpacity = interpolate(
    frame,
    [70, 86, 115, 128],
    [0, 0.5, 0.5, 0.15],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );
  const posY = interpolate(frame, [70, 86], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Proof of Cures" — springs in and STAYS at frame 138
  const pocSpring = spring({
    frame: frame - 138,
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const pocScale = interpolate(pocSpring, [0, 1], [0.5, 1]);
  const pocOpacity = interpolate(pocSpring, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Glow pulse around "Proof of Cures"
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // 3 pill cards — materialize staggered at frame 195
  const pills = [
    { label: "Transparent", color: "#7B2FBE" },
    { label: "Community-owned", color: "#9B30D0" },
    { label: "Onchain", color: "#CC44FF" },
  ];
  const pillStart = 195;
  const pillInterval = 22;

  return (
    <SceneWrapper>
      {/* Glow for PoC */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 400,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(224,64,251,0.2) 0%, transparent 65%)",
          opacity: pocOpacity * glowPulse,
          pointerEvents: "none",
        }}
      />

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
          gap: 20,
          position: "relative",
        }}
      >
        {/* "Proof of Work" */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: powOpacity,
            transform: `translateY(${powY}px)`,
          }}
        >
          Proof of Work
        </div>

        {/* "Proof of Stake" */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: posOpacity,
            transform: `translateY(${posY}px)`,
          }}
        >
          Proof of Stake
        </div>

        {/* "Proof of Cures" — stays */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: pocOpacity,
            transform: `scale(${pocScale})`,
            textShadow: `0 0 40px rgba(224,64,251,${glowPulse * 0.6})`,
          }}
        >
          Proof of Cures
        </div>

        {/* 3 pill cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 16,
          }}
        >
          {pills.map((pill, i) => {
            const delay = pillStart + i * pillInterval;
            const pillSpring = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 160 },
            });
            const pillScale = interpolate(pillSpring, [0, 1], [0, 1]);
            const pillOp = interpolate(pillSpring, [0, 0.4], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={i}
                style={{
                  background: `linear-gradient(135deg, ${pill.color}33, ${pill.color}11)`,
                  border: `1px solid ${pill.color}99`,
                  borderRadius: 30,
                  padding: "16px 36px",
                  fontSize: 40,
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: ldTechD,
                  opacity: pillOp,
                  transform: `scale(${pillScale})`,
                  boxShadow: `0 0 20px ${pill.color}44`,
                }}
              >
                {pill.label}
              </div>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};

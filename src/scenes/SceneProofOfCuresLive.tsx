import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const SceneProofOfCuresLive: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Live Implementations" — fade in
  const headerOpacity = interpolate(frame, [5, 18], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // $RAPTOR — spring punch from left
  const raptorSpring = spring({
    frame: frame - 22,
    fps,
    config: { damping: 10, stiffness: 140 },
  });
  const raptorX = interpolate(raptorSpring, [0, 1], [-60, 0]);
  const raptorOpacity = interpolate(raptorSpring, [0, 1], [0, 1]);

  // $SASHA — spring punch from right
  const sashaSpring = spring({
    frame: frame - 38,
    fps,
    config: { damping: 10, stiffness: 140 },
  });
  const sashaX = interpolate(sashaSpring, [0, 1], [60, 0]);
  const sashaOpacity = interpolate(sashaSpring, [0, 1], [0, 1]);

  // "The first live implementations" — fade
  const taglineOpacity = interpolate(frame, [55, 72], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Pulsing glow
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
          fontFamily: poppins,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Green glow */}
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
              "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(196,181,253,0.7)",
            fontWeight: 500,
            fontFamily: poppins,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: headerOpacity,
            position: "relative",
            zIndex: 1,
            marginBottom: 40,
          }}
        >
          Live Implementations
        </div>

        {/* Token pair */}
        <div
          style={{
            display: "flex",
            gap: 80,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* $RAPTOR */}
          <div
            style={{
              opacity: raptorOpacity,
              transform: `translateX(${raptorX}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 900,
                color: "#fbbf24",
                fontFamily: poppins,
                textShadow:
                  "0 0 30px rgba(251,191,36,0.4), 0 0 60px rgba(251,191,36,0.15)",
              }}
            >
              $RAPTOR
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#c4b5fd",
                fontFamily: poppins,
              }}
            >
              Coin-to-Company spin-out
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 2,
              height: 120,
              background:
                "linear-gradient(to bottom, transparent, rgba(34,197,94,0.5), transparent)",
              opacity: Math.min(raptorOpacity, sashaOpacity),
            }}
          />

          {/* $SASHA */}
          <div
            style={{
              opacity: sashaOpacity,
              transform: `translateX(${sashaX}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 900,
                color: "#22c55e",
                fontFamily: poppins,
                textShadow:
                  "0 0 30px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.15)",
              }}
            >
              $SASHA
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#c4b5fd",
                fontFamily: poppins,
              }}
            >
              One patient, one mission
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: poppins,
            marginTop: 48,
            opacity: taglineOpacity,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.4,
          }}
        >
          The first live implementations of{" "}
          <span style={{ color: "#22c55e" }}>Proof of Cures</span>.
        </div>
      </div>
    </SceneWrapper>
  );
};

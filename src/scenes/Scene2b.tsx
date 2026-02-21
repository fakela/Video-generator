import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";
import { poppins } from "../fonts";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene2bBigPharma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 10-frame crossfade in/out
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
    easing: ease,
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // 8-frame stagger with { damping: 20, stiffness: 180 }
  const labelProgress = spring({ frame: frame - 0, fps, config: { damping: 20, stiffness: 180 } });
  const heroProgress  = spring({ frame: frame - 8, fps, config: { damping: 20, stiffness: 180 } });
  const tamProgress   = spring({ frame: frame - 16, fps, config: { damping: 20, stiffness: 180 } });
  const bodyProgress  = spring({ frame: frame - 24, fps, config: { damping: 20, stiffness: 180 } });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOpacity,
        padding: "0 120px",
        textAlign: "center",
      }}
    >
      {/* Label */}
      <div
        style={{
          color: "#ec4899",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: poppins,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginBottom: 24,
          opacity: labelProgress,
          transform: `translateY(${(1 - labelProgress) * 30}px)`,
        }}
      >
        The Big Pharma Threshold
      </div>

      {/* Hero stat — "$1B+" */}
      <div
        style={{
          color: "#ffffff",
          fontSize: 200,
          fontWeight: 900,
          fontFamily: poppins,
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          textShadow:
            "0 0 80px rgba(168,85,247,0.9), 0 0 160px rgba(168,85,247,0.5), 0 0 240px rgba(236,72,153,0.3)",
          opacity: heroProgress,
          transform: `scale(${interpolate(heroProgress, [0, 1], [0.7, 1])}) translateY(${(1 - heroProgress) * 40}px)`,
        }}
      >
        $1B+
      </div>

      {/* "TAM" subtitle */}
      <div
        style={{
          color: "#a855f7",
          fontSize: 72,
          fontWeight: 900,
          fontFamily: poppins,
          letterSpacing: "0.15em",
          textShadow: "0 0 40px rgba(168,85,247,0.8)",
          marginTop: 8,
          opacity: tamProgress,
          transform: `translateY(${(1 - tamProgress) * 30}px)`,
        }}
      >
        TAM
      </div>

      {/* Divider */}
      <div
        style={{
          width: interpolate(bodyProgress, [0, 1], [0, 600]),
          height: 2,
          background: "linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)",
          borderRadius: 2,
          marginTop: 40,
          marginBottom: 32,
        }}
      />

      {/* Body text */}
      <div
        style={{
          color: "#c4b5fd",
          fontSize: 28,
          fontWeight: 400,
          fontFamily: poppins,
          lineHeight: 1.6,
          maxWidth: 900,
          opacity: bodyProgress,
          transform: `translateY(${(1 - bodyProgress) * 20}px)`,
        }}
      >
        Most rare disease markets: ~$150M.
        <br />
        <span style={{ color: "#f0abfc", fontWeight: 600 }}>
          Far below Big Pharma's minimum viable interest.
        </span>
      </div>
    </AbsoluteFill>
  );
};

import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene04bWeDontBackDown: React.FC = () => {
  const frame = useCurrentFrame();

  // "We saw the same numbers." — appears at frame 10, holds 2s (60f)
  const line1Opacity = interpolate(frame, [10, 24], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1Y = interpolate(frame, [10, 24], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "And we didn't flinch." — fades in at frame 75, holds 1.5s (45f)
  const line2Opacity = interpolate(frame, [75, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Y = interpolate(frame, [75, 90], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Because this was never a business decision." — fades in at frame 128, holds 1.5s
  const line3Opacity = interpolate(frame, [128, 145], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line3Y = interpolate(frame, [128, 145], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "It's a human one." — appears at frame 188, slightly larger, holds 2.5s (75f)
  const line4Opacity = interpolate(frame, [188, 205], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line4Y = interpolate(frame, [188, 205], [28, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Subtle warm glow intensifies as "It's a human one." appears
  const glowOpacity = interpolate(frame, [188, 240], [0, 0.6], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Warm emotional glow */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 500,
          borderRadius: "50%",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse, rgba(224,64,251,0.18) 0%, transparent 65%)",
          opacity: glowOpacity,
          pointerEvents: "none",
          filter: "blur(40px)",
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
          gap: 22,
          position: "relative",
        }}
      >
        {/* "We saw the same numbers." */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
          }}
        >
          We saw the same numbers.
        </div>

        {/* "And we didn't flinch." */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
          }}
        >
          And we didn't flinch.
        </div>

        {/* "Because this was never a business decision." */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            maxWidth: 860,
          }}
        >
          Because this was never a business decision.
        </div>

        {/* "It's a human one." — slightly larger, emotional peak */}
        <div
          style={{
            fontSize: 92,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: line4Opacity,
            transform: `translateY(${line4Y}px)`,
            marginTop: 8,
            textShadow: "0 0 30px rgba(224,64,251,0.5)",
          }}
        >
          It's a human one.
        </div>
      </div>
    </SceneWrapper>
  );
};

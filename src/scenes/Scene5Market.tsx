import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene5Market: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "$1 Trillion" — counter animation + scale with gold glow
  const counterProgress = interpolate(frame, [10, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const dollarAmount = Math.round(counterProgress * 1000);
  const displayText =
    dollarAmount >= 1000 ? "$1 Trillion+" : `$${dollarAmount}B`;

  const statSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 8, stiffness: 100 },
  });
  const statScale = interpolate(statSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const statOpacity = interpolate(frame, [10, 16], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const goldGlow = Math.sin(frame * 0.08) * 6 + 14;

  // 2. "market sitting unclaimed" — fade in
  const descOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "Sitting there. Untouched." — letter-spacing shrink from 16 to 3
  const subOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subLetterSpacing = interpolate(frame, [70, 100], [16, 3], {
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
          width: "100%",
          height: "100%",
        }}
      >
        {/* 1. "$1 Trillion" — counter + scale + gold glow */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 160,
            fontWeight: 900,
            color: "#fbbf24",
            textAlign: "center",
            transform: `scale(${statScale})`,
            opacity: statOpacity,
            textShadow: `0 0 ${goldGlow}px rgba(251, 191, 36, 0.6), 0 0 ${goldGlow * 2}px rgba(251, 191, 36, 0.3)`,
          }}
        >
          {displayText}
        </div>

        {/* 2. "market sitting unclaimed" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 44,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
          }}
        >
          market sitting unclaimed
        </div>

        {/* 3. "Sitting there. Untouched." — letter-spacing shrink */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 44,
            fontWeight: 600,
            fontStyle: "italic",
            color: "#ef4444",
            textAlign: "center",
            opacity: subOpacity,
            letterSpacing: subLetterSpacing,
            marginTop: 20,
          }}
        >
          Sitting there. Untouched.
        </div>
      </div>
    </SceneWrapper>
  );
};

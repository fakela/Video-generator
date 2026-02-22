import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene21Raise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "$1.77M" — count up from $0 to $1.77M at frame 10, with spring punch
  const countProgress = interpolate(frame, [10, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const displayValue = (1.77 * countProgress).toFixed(2);

  const punch = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const punchScale = interpolate(punch, [0, 1], [0.7, 1]);
  const punchOpacity = interpolate(punch, [0, 1], [0, 1]);

  // 2. "Raised in a single community auction." — fade up at frame 45
  const sub1Opacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [45, 65], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "March 2025. In brutal market conditions." — fade up at frame 70
  const sub2Opacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub2TranslateY = interpolate(frame, [70, 90], [30, 0], {
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
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#fbbf24",
            fontFamily: poppins,
            textAlign: "center",
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
          }}
        >
          ${displayValue}M
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 20,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          Raised in a single community auction.
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 16,
            opacity: sub2Opacity,
            transform: `translateY(${sub2TranslateY}px)`,
          }}
        >
          March 2025. In brutal market conditions.
        </div>
      </div>
    </SceneWrapper>
  );
};

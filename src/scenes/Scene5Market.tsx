import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene5Market: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "$1 Trillion" (frame 10) — slow heavy zoom
  const statPunch = spring({ frame: frame - 10, fps, config: { damping: 20, stiffness: 80 } });
  const statScale = interpolate(statPunch, [0, 1], [0.85, 1]);

  // 2. Description (frame 40) — fade up
  const descOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [40, 60], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "Sitting there. Untouched." (frame 70) — fade up with dramatic pause
  const subOpacity = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subY = interpolate(frame, [70, 90], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

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
        {/* 1. "$1 Trillion" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 130,
            fontWeight: 900,
            color: "#fbbf24",
            textAlign: "center",
            transform: `scale(${statScale})`,
          }}
        >
          $1 Trillion
        </div>

        {/* 2. Description */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 30,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            transform: `translateY(${descY}px)`,
          }}
        >
          The total rare disease market.
        </div>

        {/* 3. Sub text */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 24,
            fontWeight: 600,
            color: "#ef4444",
            textAlign: "center",
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            marginTop: 20,
          }}
        >
          Sitting there. Untouched.
        </div>
      </div>
    </SceneWrapper>
  );
};

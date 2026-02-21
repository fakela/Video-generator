import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene4TreatmentGap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "95%" (frame 8) — hard slam
  const statPunch = spring({ frame: frame - 8, fps, config: { damping: 10, stiffness: 250 } });
  const statScale = interpolate(statPunch, [0, 1], [0.7, 1]);

  // 2. Description (frame 35) — fade up
  const descOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [35, 55], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "Not a single option..." (frame 65) — fade up with pause
  const subOpacity = interpolate(frame, [65, 85], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subY = interpolate(frame, [65, 85], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

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
        {/* 1. "95%" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 160,
            fontWeight: 900,
            color: "#ef4444",
            textAlign: "center",
            transform: `scale(${statScale})`,
          }}
        >
          95%
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
          Of rare disease patients have zero approved treatments.
        </div>

        {/* 3. Sub text */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 22,
            fontWeight: 400,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            marginTop: 20,
          }}
        >
          Not a single option. Not even close.
        </div>
      </div>
    </SceneWrapper>
  );
};

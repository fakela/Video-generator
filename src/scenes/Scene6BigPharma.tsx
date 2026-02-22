import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene6BigPharma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Line 1 (frame 10) — fade up
  const line1Opacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const line1Y = interpolate(frame, [10, 30], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 2. Line 2 (frame 30) — fade up
  const line2Opacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const line2Y = interpolate(frame, [30, 50], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. Line 3 (frame 50) — fade up
  const line3Opacity = interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const line3Y = interpolate(frame, [50, 70], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 4. "We will." (frame 85) — spring punch
  const weWillPunch = spring({ frame: frame - 85, fps, config: { damping: 10, stiffness: 200 } });
  const weWillScale = interpolate(weWillPunch, [0, 1], [0.7, 1]);

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
        {/* 1. Line 1 */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 28,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
            marginBottom: 12,
          }}
        >
          Big Pharma needs a $1B+ market to even look at a disease.
        </div>

        {/* 2. Line 2 */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 28,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
            marginBottom: 12,
          }}
        >
          The average rare disease market? $150M.
        </div>

        {/* 3. Line 3 */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 28,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            marginBottom: 12,
          }}
        >
          They won't come.
        </div>

        {/* 4. "We will." */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 100,
            fontWeight: 900,
            color: "#c084fc",
            textAlign: "center",
            transform: `scale(${weWillScale})`,
            marginTop: 20,
          }}
        >
          We will.
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene12Step4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Icon bounce (frame 5)
  const bounce = spring({ frame: frame - 5, fps, config: { damping: 8, stiffness: 150 } });
  const iconScale = interpolate(bounce, [0, 1], [0, 1]);

  // "Step 4" fade up (frame 20)
  const step4Opacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const step4TranslateY = interpolate(frame, [20, 40], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Title fade up (frame 30)
  const titleOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleTranslateY = interpolate(frame, [30, 50], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Description fade up (frame 50)
  const descOpacity = interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descTranslateY = interpolate(frame, [50, 70], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            transform: `scale(${iconScale})`,
          }}
        >
          ⚡
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#c4b5fd",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: poppins,
            textAlign: "center",
            opacity: step4Opacity,
            transform: `translateY(${step4TranslateY}px)`,
          }}
        >
          Step 4
        </div>
        <div
          style={{
            fontSize: 48,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          FDA Fast-Track
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#c4b5fd",
            fontWeight: 400,
            fontFamily: poppins,
            textAlign: "center",
            maxWidth: 700,
            opacity: descOpacity,
            transform: `translateY(${descTranslateY}px)`,
          }}
        >
          Rare disease drugs qualify for Priority Review Vouchers and Orphan Drug Designation. The regulatory path is clearer and faster.
        </div>
      </div>
    </SceneWrapper>
  );
};

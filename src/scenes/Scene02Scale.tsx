import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene02Scale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 800M counter — blur from 0, count to 800,000,000 over frames 15–60
  const counterProgress = interpolate(frame, [15, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const counterValue = Math.round(counterProgress * 800000000);
  const counterBlur = interpolate(frame, [15, 40], [8, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const counterOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "people living with rare disease." — hold alone before next line (frame 75)
  const labelOpacity = interpolate(frame, [75, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelY = interpolate(frame, [75, 90], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "1 in 10 people." — fade up at frame 120
  const line2Opacity = interpolate(frame, [120, 138], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Y = interpolate(frame, [120, 138], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Worldwide." — frame 150
  const line3Opacity = interpolate(frame, [150, 165], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line3Y = interpolate(frame, [150, 165], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Right now." — frame 175
  const line4Opacity = interpolate(frame, [175, 190], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line4Y = interpolate(frame, [175, 190], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const formatted = counterValue.toLocaleString();

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
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 12,
        }}
      >
        {/* 800M counter */}
        <div
          style={{
            fontSize: 128,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: counterOpacity,
            filter: `blur(${counterBlur}px)`,
            lineHeight: 1,
          }}
        >
          {formatted}
        </div>

        {/* "people living with rare disease." — holds alone first */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
            marginBottom: 28,
          }}
        >
          people living with rare disease.
        </div>

        {/* "1 in 10 people." */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
          }}
        >
          1 in 10 people.
        </div>

        {/* "Worldwide." */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
          }}
        >
          Worldwide.
        </div>

        {/* "Right now." */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: line4Opacity,
            transform: `translateY(${line4Y}px)`,
          }}
        >
          Right now.
        </div>
      </div>
    </SceneWrapper>
  );
};

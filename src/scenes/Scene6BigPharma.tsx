import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene6BigPharma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Title — fade + translateY
  const titleOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleY = interpolate(frame, [5, 25], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. Three lines with X marks — staggered clip-path reveal
  const lines = [
    "Too small a patient population",
    "Too long a development timeline",
    "Too little profit potential",
  ];

  // 3. "We will." — explosive spring scale from 0.2 with green glow
  const weWillSpring = spring({
    frame: frame - 100,
    fps,
    config: { damping: 6, stiffness: 120 },
  });
  const weWillScale = interpolate(weWillSpring, [0, 1], [0.2, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const weWillOpacity = interpolate(frame, [100, 108], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const weWillGlow = interpolate(frame, [100, 130], [0, 20], {
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
          gap: 16,
        }}
      >
        {/* 1. Title */}
        <div
          style={{
            fontFamily: ldTechD,
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 20,
          }}
        >
          Why Big Pharma Won't Help
        </div>

        {/* 2. Three lines with X marks — staggered appearance */}
        {lines.map((line, i) => {
          const lineStart = 30 + i * 22;
          const lineClip = interpolate(
            frame,
            [lineStart, lineStart + 18],
            [0, 100],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          const emojiOpacity = interpolate(
            frame,
            [lineStart + 10, lineStart + 16],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          const emojiScale = spring({
            frame: frame - (lineStart + 10),
            fps,
            config: { damping: 8, stiffness: 200 },
          });
          return (
            <div
              key={i}
              style={{
                fontFamily: ldTechD,
                fontSize: 44,
                fontWeight: 400,
                color: "#ffffff",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span
                style={{
                  opacity: emojiOpacity,
                  transform: `scale(${emojiScale})`,
                  display: "inline-block",
                  fontSize: 44,
                }}
              >
                {"\u274C"}
              </span>
              <span
                style={{
                  clipPath: `inset(0 ${100 - lineClip}% 0 0)`,
                }}
              >
                {line}
              </span>
            </div>
          );
        })}

        {/* 3. "We will." — explosive spring scale + green glow */}
        <div
          style={{
            fontFamily: ldTechD,
            fontSize: 100,
            fontWeight: 900,
            color: "#E040FB",
            textAlign: "center",
            opacity: weWillOpacity,
            transform: `scale(${weWillScale})`,
            textShadow: `0 0 ${weWillGlow}px rgba(224, 64, 251, 0.7), 0 0 ${weWillGlow * 2}px rgba(224, 64, 251, 0.3)`,
            marginTop: 24,
          }}
        >
          We will.
        </div>
      </div>
    </SceneWrapper>
  );
};

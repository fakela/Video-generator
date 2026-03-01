import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene24Opportunity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "The Untapped Opportunity" — fade up at frame 5
  const titleOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleTranslateY = interpolate(frame, [5, 25], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "That traditional pharma..." — fade up at frame 25
  const sub1Opacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [25, 45], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. Dot matrix grid — 20 columns x 10 rows = 200 dots, progressive appearance from frame 40
  const dots = Array.from({ length: 200 }, (_, index) => {
    const delay = 40 + Math.floor(index * 0.3);
    const dotOpacity = interpolate(frame, [delay, delay + 10], [0, 0.6], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    });
    return dotOpacity;
  });

  // 4. "10,000 diseases × $150M average market" — fade up at frame 80
  const sub2Opacity = interpolate(frame, [80, 100], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub2TranslateY = interpolate(frame, [80, 100], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 5. "$1.5 Trillion" — spring punch at frame 95
  const trillionPunch = spring({
    frame: frame - 95,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const trillionScale = interpolate(trillionPunch, [0, 1], [0.7, 1]);
  const trillionOpacity = interpolate(trillionPunch, [0, 1], [0, 1]);
  const goldGlow = Math.sin(frame * 0.08) * 8 + 16;

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
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          The Untapped Opportunity
        </div>

        <div
          style={{
            fontSize: 42,
            color: "#A89BC2",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 12,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          That traditional pharma cannot and will not address.
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 6,
            maxWidth: 700,
            marginTop: 24,
          }}
        >
          {dots.map((dotOpacity, index) => (
            <div
              key={index}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#7B2FBE",
                opacity: dotOpacity,
              }}
            />
          ))}
        </div>

        <div
          style={{
            fontSize: 40,
            color: "#A89BC2",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 20,
            opacity: sub2Opacity,
            transform: `translateY(${sub2TranslateY}px)`,
          }}
        >
          10,000 diseases × $150M average market
        </div>

        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 12,
            transform: `scale(${trillionScale})`,
            opacity: trillionOpacity,
            textShadow: `0 0 ${goldGlow}px rgba(224, 64, 251, 0.6), 0 0 ${goldGlow * 2}px rgba(224, 64, 251, 0.3)`,
          }}
        >
          $1.5 Trillion
        </div>
      </div>
    </SceneWrapper>
  );
};

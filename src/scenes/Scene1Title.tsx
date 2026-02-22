import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene1Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Curetopia logo (frame 0) — pulsing opacity
  const logoPulse = Math.sin(frame * 0.08) * 0.2 + 0.8;

  // 2. "What If" (frame 15) — fade up
  const whatIfOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const whatIfY = interpolate(frame, [15, 35], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "'Too Rare'" (frame 35) — spring punch
  const tooRarePunch = spring({ frame: frame - 35, fps, config: { damping: 12, stiffness: 200 } });
  const tooRareScale = interpolate(tooRarePunch, [0, 1], [0.7, 1]);

  // 4. "Wasn't the End of the Story?" (frame 55) — slide up
  const storyOpacity = interpolate(frame, [55, 75], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const storyY = interpolate(frame, [55, 75], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 5. Gradient divider (frame 75) — line draw
  const lineWidth = interpolate(frame, [75, 105], [0, 60], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 6. "Curetopia is rewriting it." (frame 95) — fade up
  const rewriteOpacity = interpolate(frame, [95, 115], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const rewriteY = interpolate(frame, [95, 115], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 7. Tags line (frame 115) — fade up
  const tagsOpacity = interpolate(frame, [115, 135], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const tagsY = interpolate(frame, [115, 135], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          height: "100%",
        }}
      >
        {/* 1. Curetopia logo */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 28,
            letterSpacing: 8,
            color: "#a855f7",
            fontWeight: 700,
            textAlign: "center",
            opacity: logoPulse,
          }}
        >
          🧬 CURETOPIA
        </div>

        {/* 2. "What If" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 32,
            fontStyle: "italic",
            color: "#c4b5fd",
            textAlign: "center",
            opacity: whatIfOpacity,
            transform: `translateY(${whatIfY}px)`,
          }}
        >
          What If
        </div>

        {/* 3. "'Too Rare'" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 120,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            transform: `scale(${tooRareScale})`,
          }}
        >
          'Too Rare'
        </div>

        {/* 4. "Wasn't the End of the Story?" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            opacity: storyOpacity,
            transform: `translateY(${storyY}px)`,
          }}
        >
          Wasn't the End of the Story?
        </div>

        {/* 5. Gradient divider */}
        <div
          style={{
            width: `${lineWidth}%`,
            height: 2,
            background: "linear-gradient(90deg, #ec4899, #a855f7)",
            marginTop: 24,
            marginBottom: 24,
          }}
        />

        {/* 6. "Curetopia is rewriting it." */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 36,
            fontWeight: 600,
            color: "#a855f7",
            textAlign: "center",
            opacity: rewriteOpacity,
            transform: `translateY(${rewriteY}px)`,
          }}
        >
          Curetopia is rewriting it.
        </div>

        {/* 7. Tags */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 14,
            letterSpacing: 6,
            fontWeight: 600,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: tagsOpacity,
            transform: `translateY(${tagsY}px)`,
          }}
        >
          DECENTRALIZED SCIENCE · RARE DISEASE · BIODAO
        </div>
      </div>
    </SceneWrapper>
  );
};

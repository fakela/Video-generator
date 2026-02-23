import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene7Introducing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Glowing purple radial background pulse
  const bgPulse = Math.sin(frame * 0.07) * 0.12 + 0.3;

  // 1. Emoji — scale from 0 with elastic bounce
  const emojiSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 6, stiffness: 100 },
  });
  const emojiScale = interpolate(emojiSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "Meet Curetopia." — letter-spacing animation from 30 to 4
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleLetterSpacing = interpolate(frame, [15, 50], [30, 4], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. Description — fade in
  const descOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 4. Tagline — scale spring
  const tagSpring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 10, stiffness: 150 },
  });
  const tagScale = interpolate(tagSpring, [0, 1], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const tagOpacity = interpolate(frame, [70, 80], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Glowing purple radial background pulse */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1000,
          height: 1000,
          background: `radial-gradient(circle, rgba(168,85,247,${bgPulse}) 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 1. Emoji — elastic bounce from 0 */}
        <div
          style={{
            fontSize: 120,
            transform: `scale(${emojiScale})`,
            marginBottom: 12,
          }}
        >
          {"\uD83E\uDDEC"}
        </div>

        {/* 2. "Meet Curetopia." — letter-spacing animation */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            opacity: titleOpacity,
            letterSpacing: titleLetterSpacing,
          }}
        >
          Meet Curetopia.
        </div>

        {/* 3. Description — fade in */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 48,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            maxWidth: 900,
            marginTop: 16,
          }}
        >
          The world's first BioDAO dedicated to eradicating rare diseases.
        </div>

        {/* 4. Tagline — spring scale */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 44,
            fontWeight: 700,
            color: "#a855f7",
            textAlign: "center",
            opacity: tagOpacity,
            transform: `scale(${tagScale})`,
            marginTop: 24,
          }}
        >
          Decentralized. Community-owned. Unstoppable.
        </div>
      </div>
    </SceneWrapper>
  );
};

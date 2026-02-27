import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene20Result4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "84,000" — number counter animation from 0 to 84000, frame 5 to 50
  const countProgress = interpolate(frame, [5, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const displayNum = Math.round(84000 * countProgress).toLocaleString();

  const numberSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 180 },
  });
  const numberOpacity = interpolate(numberSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "tests completed" — scale punch at frame 45
  const compoundSpring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 8, stiffness: 200 },
  });
  const compoundScale = interpolate(compoundSpring, [0, 1], [0.4, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const compoundOpacity = interpolate(compoundSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "28 validated drug hits" — blur-in starting at frame 65
  const blurAmount = interpolate(frame, [65, 92], [12, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const hitsOpacity = interpolate(frame, [65, 92], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 4. "Published openly onchain." — fade in at frame 90
  const taglineOpacity = interpolate(frame, [90, 115], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const taglineScale = interpolate(frame, [90, 115], [0.9, 1], {
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
          gap: 16,
          position: "relative",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* "84,000" — number counter */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: poppins,
            lineHeight: 1,
            opacity: numberOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 40px rgba(124,58,237,0.4)",
          }}
        >
          {displayNum}
        </div>

        {/* "tests completed" — scale punch */}
        <div
          style={{
            fontSize: 56,
            color: "#ffffff",
            fontFamily: poppins,
            fontWeight: 600,
            transform: `scale(${compoundScale})`,
            opacity: compoundOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          tests completed
        </div>

        {/* "28 validated drug hits" — blur-in */}
        <div
          style={{
            fontSize: 48,
            color: "#22c55e",
            fontWeight: 700,
            fontFamily: poppins,
            marginTop: 12,
            filter: `blur(${blurAmount}px)`,
            opacity: hitsOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          28 validated drug hits
        </div>

        {/* "Published openly onchain." — fade in */}
        <div
          style={{
            fontSize: 44,
            color: "#a78bfa",
            fontFamily: poppins,
            marginTop: 8,
            opacity: taglineOpacity,
            transform: `scale(${taglineScale})`,
            position: "relative",
            zIndex: 1,
          }}
        >
          Published openly onchain. Science at the speed of the internet.
        </div>
      </div>
    </SceneWrapper>
  );
};

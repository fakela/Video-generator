import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene12Step4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Emoji: wobble animation (rotation oscillates +/-15deg settling to 0)
  const wobbleSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 4, stiffness: 120 },
  });
  const wobbleDecay = interpolate(wobbleSpring, [0, 1], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const wobbleAngle = Math.sin(frame * 0.5) * 15 * wobbleDecay;
  const emojiOpacity = interpolate(frame, [5, 12], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const emojiScale = interpolate(wobbleSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "STEP 4" label: fade + scale
  const labelProgress = spring({
    frame: frame - 18,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const labelOpacity = interpolate(labelProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelScale = interpolate(labelProgress, [0, 1], [0.4, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Title: spring punch from 0.4
  const titleSpring = spring({
    frame: frame - 28,
    fps,
    config: { damping: 7, stiffness: 140, overshootClamping: false },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.4, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Description: blur-in
  const descProgress = interpolate(frame, [48, 73], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descBlur = interpolate(descProgress, [0, 1], [10, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descOpacity = interpolate(descProgress, [0, 1], [0, 1], {
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
          gap: 20,
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        {/* Emoji with wobble */}
        <div
          style={{
            fontSize: 100,
            opacity: emojiOpacity,
            transform: `rotate(${wobbleAngle}deg) scale(${emojiScale})`,
          }}
        >
          🧪
        </div>

        {/* STEP 4 label */}
        <div
          style={{
            fontSize: 40,
            color: "#c4b5fd",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: poppins,
            opacity: labelOpacity,
            transform: `scale(${labelScale})`,
          }}
        >
          STEP 4
        </div>

        {/* Title: spring punch */}
        <div
          style={{
            fontSize: 72,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
          }}
        >
          Compounds Tested & Validated
        </div>

        {/* Description: blur-in */}
        <div
          style={{
            fontSize: 44,
            color: "#c4b5fd",
            fontWeight: 400,
            fontFamily: poppins,
            maxWidth: 900,
            lineHeight: 1.4,
            opacity: descOpacity,
            filter: `blur(${descBlur}px)`,
          }}
        >
          Drug candidates move through preclinical testing with full community
          oversight.
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const SceneStep7Revenue: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Emoji wobble
  const emojiSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 6, stiffness: 120 },
  });
  const emojiScale = interpolate(emojiSpring, [0, 1], [0.3, 1]);
  const emojiOpacity = interpolate(emojiSpring, [0, 1], [0, 1]);

  // "STEP 7" label
  const labelSpring = spring({
    frame: frame - 18,
    fps,
    config: { damping: 14, stiffness: 160 },
  });
  const labelScale = interpolate(labelSpring, [0, 1], [0.6, 1]);
  const labelOpacity = interpolate(labelSpring, [0, 1], [0, 1]);

  // Title
  const titleSpring = spring({
    frame: frame - 28,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.7, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Description
  const descBlur = interpolate(frame, [48, 73], [10, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descOpacity = interpolate(frame, [48, 73], [0, 1], {
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
          gap: 14,
        }}
      >
        <div
          style={{
            fontSize: 72,
            transform: `scale(${emojiScale})`,
            opacity: emojiOpacity,
          }}
        >
          💰
        </div>

        <div
          style={{
            fontSize: 18,
            color: "#c4b5fd",
            fontWeight: 700,
            letterSpacing: 6,
            fontFamily: poppins,
            transform: `scale(${labelScale})`,
            opacity: labelOpacity,
          }}
        >
          STEP 7
        </div>

        <div
          style={{
            fontSize: 52,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
          }}
        >
          Revenue Flows Back to the Community
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#c4b5fd",
            fontFamily: poppins,
            maxWidth: 900,
            filter: `blur(${descBlur}px)`,
            opacity: descOpacity,
          }}
        >
          Every dollar generated returns to the treasury to fund the next cure.
        </div>
      </div>
    </SceneWrapper>
  );
};

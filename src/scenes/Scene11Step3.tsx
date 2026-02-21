import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene11Step3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Icon bounce (frame 5)
  const bounce = spring({ frame: frame - 5, fps, config: { damping: 8, stiffness: 150 } });
  const iconScale = interpolate(bounce, [0, 1], [0, 1]);

  // "Step 3" fade up (frame 20)
  const step3Opacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const step3TranslateY = interpolate(frame, [20, 40], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

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
          👨‍👩‍👧
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
            opacity: step3Opacity,
            transform: `translateY(${step3TranslateY}px)`,
          }}
        >
          Step 3
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
          Patient Families Run the Studies
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
          Real families run N-of-1 observational trials. They are not just participants. They are co-owners of the cure.
        </div>
      </div>
    </SceneWrapper>
  );
};

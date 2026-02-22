import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene23Pipeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "10" — spring punch at frame 10
  const punch = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const punchScale = interpolate(punch, [0, 1], [0.7, 1]);
  const punchOpacity = interpolate(punch, [0, 1], [0, 1]);

  // 2. "Disease programs built in 6 months." — fade up at frame 35
  const sub1Opacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "11 ARS mutations modelled and ready." — fade up at frame 55
  const sub2Opacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub2TranslateY = interpolate(frame, [55, 75], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 4. "Scaled from one mutation to a full pipeline." — fade at frame 75
  const sub3Opacity = interpolate(frame, [75, 95], [0, 1], {
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
        }}
      >
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: "#c084fc",
            fontFamily: poppins,
            textAlign: "center",
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
            lineHeight: 1,
          }}
        >
          10
        </div>

        <div
          style={{
            fontSize: 48,
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 16,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          Disease programs built in 6 months.
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 14,
            opacity: sub2Opacity,
            transform: `translateY(${sub2TranslateY}px)`,
          }}
        >
          11 ARS mutations modelled and ready.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#22c55e",
            fontWeight: 600,
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 20,
            opacity: sub3Opacity,
          }}
        >
          Scaled from one mutation to a full pipeline.
        </div>
      </div>
    </SceneWrapper>
  );
};

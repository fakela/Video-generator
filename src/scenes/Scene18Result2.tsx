import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene18Result2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "Provisional patent" — spring zoom in at frame 10
  const titleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 180 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // 2. "filed for AARS2 discovery" — fade up at frame 35
  const sub1Opacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "Owned by the Curetopia community." — fade up at frame 55
  const sub2Opacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub2TranslateY = interpolate(frame, [55, 75], [30, 0], {
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
            fontSize: 80,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
          }}
        >
          Provisional patent
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 20,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          filed for AARS2 discovery
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 16,
            opacity: sub2Opacity,
            transform: `translateY(${sub2TranslateY}px)`,
          }}
        >
          Owned by the Curetopia community.
        </div>
      </div>
    </SceneWrapper>
  );
};

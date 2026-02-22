import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene23Pipeline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "20+" — spring punch at frame 10
  const punch = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const punchScale = interpolate(punch, [0, 1], [0.7, 1]);
  const punchOpacity = interpolate(punch, [0, 1], [0, 1]);

  // 2. "Related ARS diseases..." — fade up at frame 35
  const sub1Opacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "Scaling from AARS2..." — fade up at frame 55
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
            fontSize: 180,
            fontWeight: 900,
            color: "#c084fc",
            fontFamily: poppins,
            textAlign: "center",
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
          }}
        >
          20+
        </div>

        <div
          style={{
            fontSize: 42,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 20,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          Related ARS diseases entering the drug screening pipeline.
        </div>

        <div
          style={{
            fontSize: 30,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 16,
            opacity: sub2Opacity,
            transform: `translateY(${sub2TranslateY}px)`,
          }}
        >
          Scaling from AARS2 across the aminoacyl-tRNA synthetase family.
        </div>
      </div>
    </SceneWrapper>
  );
};

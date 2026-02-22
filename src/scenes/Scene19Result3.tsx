import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene19Result3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "2 pioneer families" — spring zoom in at frame 10
  const titleSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // 2. "running parallel N-of-1 studies" — fade up at frame 35
  const sub1Opacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "Active. Right now." — spring punch at frame 55
  const activePunch = spring({
    frame: frame - 55,
    fps,
    config: { damping: 12, stiffness: 200 },
  });
  const activeScale = interpolate(activePunch, [0, 1], [0.7, 1]);
  const activeOpacity = interpolate(activePunch, [0, 1], [0, 1]);

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
          2 pioneer families
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
          running parallel N-of-1 studies
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#22c55e",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 16,
            transform: `scale(${activeScale})`,
            opacity: activeOpacity,
          }}
        >
          Active. Right now.
        </div>
      </div>
    </SceneWrapper>
  );
};

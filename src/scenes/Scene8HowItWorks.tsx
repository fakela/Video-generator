import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene8HowItWorks: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "How Curetopia Works" — 3D rotateY animation (like a door opening, from 90 to 0)
  const titleSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const titleRotateY = interpolate(titleSpring, [0, 1], [90, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(frame, [5, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "From community funding to FDA approval." — fade in
  const descOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "7 steps. Zero bureaucracy." — scale punch from 0.3
  const punchSpring = spring({
    frame: frame - 55,
    fps,
    config: { damping: 7, stiffness: 150 },
  });
  const punchScale = interpolate(punchSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const punchOpacity = interpolate(frame, [55, 62], [0, 1], {
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
          width: "100%",
          height: "100%",
        }}
      >
        {/* 1. Title — 3D rotateY door opening */}
        <div
          style={{
            fontFamily: ldTechD,
            fontSize: 80,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            opacity: titleOpacity,
            transform: `perspective(1000px) rotateY(${titleRotateY}deg)`,
            transformOrigin: "left center",
          }}
        >
          How Curetopia Works
        </div>

        {/* 2. Description */}
        <div
          style={{
            fontFamily: ldTechD,
            fontSize: 48,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            marginTop: 16,
          }}
        >
          From community funding to FDA approval.
        </div>

        {/* 3. "7 steps. Zero bureaucracy." — scale punch */}
        <div
          style={{
            fontFamily: ldTechD,
            fontSize: 48,
            fontWeight: 700,
            color: "#E040FB",
            textAlign: "center",
            opacity: punchOpacity,
            transform: `scale(${punchScale})`,
            marginTop: 24,
          }}
        >
          7 steps. Zero bureaucracy.
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const NUM_STARS = 140;

const stars = Array.from({ length: NUM_STARS }, (_, i) => ({
  x: ((i * 137.508) % 100),
  y: ((i * 73.137) % 100),
  size: (i % 3) + 1,
  speed: 0.03 + (i % 5) * 0.015,
  phase: i * 0.83,
}));

const StarField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {stars.map((star, i) => {
        const twinkle =
          Math.sin(frame * star.speed + star.phase) * 0.4 + 0.6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              backgroundColor: i % 7 === 0 ? "#c4b5fd" : "#ffffff",
              opacity: twinkle * 0.7,
              boxShadow:
                star.size > 2
                  ? `0 0 ${star.size * 2}px rgba(255,255,255,0.3)`
                  : "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

export const SceneWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, #1a0533 0%, #0a0a2e 50%, #050520 100%)",
      }}
    >
      <StarField />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: "80px 120px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

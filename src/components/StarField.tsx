import React from "react";
import { useCurrentFrame } from "remotion";

// Deterministic star positions using sin-based seeding — stable across frames
const STARS = Array.from({ length: 150 }, (_, i) => ({
  id: i,
  x: ((Math.sin(i * 127.1 + 1.5) + 1) / 2) * 100,
  y: ((Math.sin(i * 311.7 + 2.1) + 1) / 2) * 100,
  size: ((Math.sin(i * 74.5 + 0.8) + 1) / 2) * 2.2 + 0.4,
  seed: i * 0.37,
  brightness: ((Math.sin(i * 53.3 + 3.0) + 1) / 2) * 0.5 + 0.5,
}));

export const StarField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {STARS.map((star) => {
        const opacity =
          star.brightness * (Math.sin(frame / 20 + star.seed) * 0.3 + 0.7);
        return (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              opacity,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
};

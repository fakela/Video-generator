import React from "react";
import { StarField } from "./StarField";

interface SpaceBackgroundProps {
  nebulaX?: number;
  nebulaY?: number;
  intensity?: number;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({
  nebulaX = 50,
  nebulaY = 45,
  intensity = 1,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse at ${nebulaX}% ${nebulaY}%, #6b21a8 0%, #3b0764 38%, #1a0533 65%, #08081a 100%)`,
      }}
    >
      {/* Pink-magenta nebula accent top-right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 85% 15%, rgba(236, 72, 153, ${0.18 * intensity}) 0%, transparent 45%)`,
        }}
      />
      {/* Purple nebula accent bottom-left */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 15% 85%, rgba(168, 85, 247, ${0.22 * intensity}) 0%, transparent 45%)`,
        }}
      />
      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at ${nebulaX}% ${nebulaY}%, rgba(168, 85, 247, ${0.15 * intensity}) 0%, transparent 35%)`,
        }}
      />
      <StarField />
    </div>
  );
};

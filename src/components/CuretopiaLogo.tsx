import React from "react";
import { staticFile, Img } from "remotion";

/**
 * Curetopia logo component using the official PNG logo
 */
export const CuretopiaLogo: React.FC<{
  size?: number;
  showText?: boolean;
  textColor?: string;
}> = ({ size = 120, showText = false, textColor = "#ffffff" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: size * 0.2,
      }}
    >
      <Img
        src={staticFile("Curetopia Logo Primary Dark Mode 1@2x.png")}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
        }}
      />
      {showText && (
        <div
          style={{
            fontSize: size * 0.35,
            fontWeight: 700,
            color: textColor,
            letterSpacing: size * 0.02,
            lineHeight: 1,
          }}
        >
          curetopia
        </div>
      )}
    </div>
  );
};

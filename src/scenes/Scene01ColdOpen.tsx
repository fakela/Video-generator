import React from "react";
import { useCurrentFrame, interpolate, Img, staticFile } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene01ColdOpen: React.FC = () => {
  const frame = useCurrentFrame();

  // "Too rare." — fades in at frame 15, holds
  const line1Opacity = interpolate(frame, [15, 28], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "That's what the system says." — fades in after 2s hold (frame 75), holds 1.5s
  const line2Opacity = interpolate(frame, [75, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Y = interpolate(frame, [75, 90], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "We believe every disease deserves research." — fades in after 1.5s hold (frame 120)
  const line3Opacity = interpolate(frame, [120, 138], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line3Y = interpolate(frame, [120, 138], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Galaxy flood — ramps up after all 3 lines are visible (frame 195+)
  const galaxyFlood = interpolate(frame, [195, 248], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Flood glow on beat drop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(224,64,251,0.28) 0%, transparent 65%)",
          opacity: galaxyFlood,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 20,
          position: "relative",
        }}
      >
        {/* Line 1 — "Too rare." stays on screen through end */}
        <div
          style={{
            fontSize: 136,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            lineHeight: 1,
            opacity: line1Opacity,
          }}
        >
          Too rare.
        </div>

        {/* Line 2 — "That's what the system says." stays on screen */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 400,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
          }}
        >
          That's what the system says.
        </div>

        {/* Line 3 — "We believe every disease deserves research." stays on screen */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#E040FB",
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            marginTop: 8,
          }}
        >
          We believe every disease deserves research.
        </div>
      </div>
    </SceneWrapper>
  );
};

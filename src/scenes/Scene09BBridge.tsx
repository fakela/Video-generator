import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

const NUM_TRAIL_PARTICLES = 36;

export const Scene09BBridge: React.FC = () => {
  const frame = useCurrentFrame();

  const line2Opacity = interpolate(frame, [12, 26], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Y = interpolate(frame, [12, 26], [18, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const line3Opacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line3Y = interpolate(frame, [50, 65], [18, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const particleSpeed = interpolate(frame, [150, 170], [1, 0.2], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const trailProgress = interpolate(
    frame,
    [65, 160],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  ) * particleSpeed + interpolate(frame, [160, 180], [0, 0.05], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const line5Opacity = interpolate(frame, [185, 200], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line5Y = interpolate(frame, [185, 200], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 2,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: NUM_TRAIL_PARTICLES }).map((_, i) => {
          const offset = i / NUM_TRAIL_PARTICLES;
          const px = (trailProgress - offset * 0.25) * 115;
          const edgeFade = interpolate(px, [60, 88], [1, 0], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });
          const pOpacity = px < 0 || px > 88 ? 0 : edgeFade * (0.25 + (1 - offset) * 0.65);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${px}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 5 + (1 - offset) * 4,
                height: 5 + (1 - offset) * 4,
                borderRadius: "50%",
                background: "#E040FB",
                opacity: pOpacity,
                boxShadow: "0 0 6px 2px rgba(224,64,251,0.5)",
              }}
            />
          );
        })}
      </div>

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
        {/* "We also wanted to give contributors" */}
        <div
          style={{
            fontSize: 50,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
          }}
        >
          We also wanted to give contributors
        </div>

        {/* "full visibility into how their funds are used." */}
        <div
          style={{
            fontSize: 50,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            maxWidth: 860,
          }}
        >
          full visibility into how their funds are used.
        </div>

        {/* "So we built a model." */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: line5Opacity,
            transform: `translateY(${line5Y}px)`,
            marginTop: 16,
            textShadow: "0 0 24px rgba(224,64,251,0.4)",
          }}
        >
          So we built a model.
        </div>
      </div>
    </SceneWrapper>
  );
};
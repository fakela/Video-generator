import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene04BigPharma: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Big Pharma ran the numbers." — fades/slides in at frame 12
  const headlineOpacity = interpolate(frame, [12, 32], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const headlineY = interpolate(frame, [12, 32], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3 reasons — staggered, each fades up
  const reasons = [
    "Market too small.",
    "Risk too high.",
    "ROI doesn't pencil out.",
  ];
  const reasonStart = 60;
  const reasonInterval = 30;

  // "So they walked away." — emotional pivot, fades in at frame 195, holds 2.5s (75f)
  const walkOpacity = interpolate(frame, [195, 218], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const walkY = interpolate(frame, [195, 218], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Glow behind "walked away" text intensifies
  const walkGlow = interpolate(frame, [195, 240], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Dimming vignette for emotional weight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(4,0,12,0.4) 100%)",
          opacity: walkGlow,
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
        {/* "Big Pharma ran the numbers." */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: headlineOpacity,
            transform: `translateY(${headlineY}px)`,
          }}
        >
          Big Pharma ran the numbers.
        </div>

        {/* 3 reasons — staggered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginTop: 8,
          }}
        >
          {reasons.map((reason, i) => {
            const delay = reasonStart + i * reasonInterval;
            const op = interpolate(frame, [delay, delay + 18], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            const ty = interpolate(frame, [delay, delay + 18], [20, 0], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  fontSize: 56,
                  color: "#A89BC2",
                  fontFamily: ldTechD,
                  opacity: op,
                  transform: `translateY(${ty}px)`,
                }}
              >
                {reason}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "40%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(224,64,251,0.5), transparent)",
            margin: "16px 0",
            opacity: interpolate(frame, [160, 185], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            }),
          }}
        />

        {/* "So they walked away." — emotional pivot */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: walkOpacity,
            transform: `translateY(${walkY}px)`,
          }}
        >
          So they walked away.
        </div>
      </div>
    </SceneWrapper>
  );
};

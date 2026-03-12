import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

const DOT_LABELS = ["Propose", "Vote", "Fund", "Research", "Validate", "Spinout", "Revenue"];

export const Scene06ModelOverview: React.FC = () => {
  const frame = useCurrentFrame();

  // "From community to cure." — slides up at frame 10, holds 1.5s (45f)
  const head1Opacity = interpolate(frame, [10, 26], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const head1Y = interpolate(frame, [10, 26], [28, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Seven steps. No gatekeepers." — fades in at frame 60, holds 1.5s (45f)
  const head2Opacity = interpolate(frame, [60, 76], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const head2Y = interpolate(frame, [60, 76], [22, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Horizontal line — draws at frame 108
  const lineWidth = interpolate(frame, [108, 140], [0, 82], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const lineOpacity = interpolate(frame, [108, 125], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // All 7 dots appear TOGETHER at frame 115 — viewer takes in the whole picture
  const allDotsOpacity = interpolate(frame, [115, 138], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const allDotsY = interpolate(frame, [115, 138], [18, 0], {
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
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 24,
        }}
      >
        {/* "From community to cure." */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: head1Opacity,
            transform: `translateY(${head1Y}px)`,
          }}
        >
          From community to cure.
        </div>

        {/* "Seven steps. No gatekeepers." */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: head2Opacity,
            transform: `translateY(${head2Y}px)`,
          }}
        >
          Seven steps. No gatekeepers.
        </div>

        {/* Timeline diagram */}
        <div
          style={{
            position: "relative",
            width: "84%",
            marginTop: 20,
            opacity: lineOpacity,
          }}
        >
          {/* Horizontal line */}
          <div
            style={{
              height: 3,
              width: `${lineWidth}%`,
              background:
                "linear-gradient(90deg, rgba(224,64,251,0.15), rgba(224,64,251,0.8), rgba(224,64,251,0.15))",
              borderRadius: 2,
              margin: "0 auto",
            }}
          />

          {/* All 7 dots + labels — appear as a group */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 0,
              position: "relative",
              top: -12,
              opacity: allDotsOpacity,
              transform: `translateY(${allDotsY}px)`,
            }}
          >
            {DOT_LABELS.map((label, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "#E040FB",
                    boxShadow:
                      "0 0 12px 4px rgba(224,64,251,0.6), 0 0 24px 8px rgba(224,64,251,0.3)",
                  }}
                />
                {/* Step number */}
                <div
                  style={{
                    fontSize: 22,
                    color: "#CC44FF",
                    fontFamily: ldTechD,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </div>
                {/* Label */}
                <div
                  style={{
                    fontSize: 26,
                    color: "#ffffff",
                    fontFamily: ldTechD,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

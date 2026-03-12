import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

const milestones = [
  "Luminescent growth assay assessing ALA1-ts yeast under AARS1/AARS2 deficiency conditions",
  "384-well HTS optimized for AARS2 — ~8,400 compound repurposing screen",
  "Repurposing candidate report + top recommendations for validation studies",
];

const BULLET_START_FRAMES = [50, 72, 94];

export const ScenePerlara: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Partnership header — spring punch at frame 8
  const headerSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 12, stiffness: 180 },
  });
  const headerScale = interpolate(headerSpring, [0, 1], [0.7, 1]);
  const headerOpacity = interpolate(headerSpring, [0, 1], [0, 1]);

  // Sub-label fade up at frame 35
  const subOpacity = interpolate(frame, [35, 53], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subY = interpolate(frame, [35, 53], [24, 0], {
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
          gap: 28,
        }}
      >
        {/* Partnership header */}
        <div
          style={{
            fontSize: 68,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            transform: `scale(${headerScale})`,
            opacity: headerOpacity,
            willChange: "transform, opacity",
          }}
        >
          In collaboration with Perlara PBC
        </div>

        {/* Sub-label */}
        <div
          style={{
            fontSize: 44,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            willChange: "transform, opacity",
          }}
        >
          Curetopia's yeast-screening laboratory partner
        </div>

        {/* Milestone bullets */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 18,
            maxWidth: 1100,
            width: "100%",
          }}
        >
          {milestones.map((text, i) => {
            const startF = BULLET_START_FRAMES[i];
            const bulletOpacity = interpolate(frame, [startF, startF + 18], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            const bulletY = interpolate(frame, [startF, startF + 18], [24, 0], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 14,
                  opacity: bulletOpacity,
                  transform: `translateY(${bulletY}px)`,
                  willChange: "transform, opacity",
                }}
              >
                <span
                  style={{
                    fontSize: 38,
                    color: "#CC44FF",
                    fontWeight: 900,
                    lineHeight: 1.35,
                    flexShrink: 0,
                  }}
                >
                  •
                </span>
                <span
                  style={{
                    fontSize: 38,
                    color: "#ffffff",
                    fontFamily: ldTechD,
                    lineHeight: 1.35,
                    textAlign: "left",
                  }}
                >
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};

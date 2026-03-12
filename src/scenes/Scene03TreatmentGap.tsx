import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene03TreatmentGap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "95%" slams in — spring with impact feel (damping:6, stiffness:180)
  const pctSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 6, stiffness: 180 },
  });
  const pctScale = interpolate(pctSpring, [0, 1], [0.3, 1]);
  const pctOpacity = interpolate(pctSpring, [0, 0.15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Context — "of rare diseases have no approved treatment." at frame 50
  const contextOpacity = interpolate(frame, [50, 68], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const contextY = interpolate(frame, [50, 68], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Not one option." — fade up at frame 100
  const opt1Opacity = interpolate(frame, [100, 118], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const opt1Y = interpolate(frame, [100, 118], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Not one clinical trial." — fade up at frame 130
  const opt2Opacity = interpolate(frame, [130, 148], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const opt2Y = interpolate(frame, [130, 148], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Divider — grows at frame 165
  const dividerWidth = interpolate(frame, [165, 190], [0, 50], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "These are people. Waiting." — emotional line at frame 205
  const waitingOpacity = interpolate(frame, [205, 225], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const waitingY = interpolate(frame, [205, 225], [30, 0], {
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
          gap: 14,
        }}
      >
        {/* "95%" — slams in */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            lineHeight: 1,
            opacity: pctOpacity,
            transform: `scale(${pctScale})`,
          }}
        >
          95%
        </div>

        {/* "of rare diseases have no approved treatment." */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: contextOpacity,
            transform: `translateY(${contextY}px)`,
            marginBottom: 20,
          }}
        >
          of rare diseases have no approved treatment.
        </div>

        {/* "Not one option." */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: opt1Opacity,
            transform: `translateY(${opt1Y}px)`,
          }}
        >
          Not one option.
        </div>

        {/* "Not one clinical trial." */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: opt2Opacity,
            transform: `translateY(${opt2Y}px)`,
          }}
        >
          Not one clinical trial.
        </div>

        {/* Divider line */}
        <div
          style={{
            width: `${dividerWidth}%`,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(204,68,255,0.7), transparent)",
            margin: "8px 0",
          }}
        />

        {/* "These are people. Waiting." */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: waitingOpacity,
            transform: `translateY(${waitingY}px)`,
          }}
        >
          These are people.{" "}
          <span style={{ color: "#E040FB" }}>Waiting.</span>
        </div>
      </div>
    </SceneWrapper>
  );
};

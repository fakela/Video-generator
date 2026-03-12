import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene11RaptorSasha: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "2 Live Implementations." — crashes in at frame 8, holds, then slides up at frame 60
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 0.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  // slides up and fades out to make room for split screen
  const titleY = interpolate(frame, [65, 90], [0, -60], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleFadeOut = interpolate(frame, [65, 85], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Split screen fades in at frame 90
  const splitOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Divider line — grows from center at frame 95
  const dividerHeight = interpolate(frame, [95, 122], [0, 80], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const dividerOpacity = interpolate(frame, [95, 110], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // LEFT: "$RAPTOR" slides in from left at frame 105
  const raptorSpring = spring({
    frame: frame - 105,
    fps,
    config: { damping: 14, stiffness: 150 },
  });
  const raptorX = interpolate(raptorSpring, [0, 1], [-120, 0]);
  const raptorOpacity = interpolate(raptorSpring, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // $RAPTOR sub-lines at frame 135
  const raptorSubOpacity = interpolate(frame, [135, 153], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const raptorSubY = interpolate(frame, [135, 153], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // RIGHT: "$SASHA" slides in from right at frame 115
  const sashaSpring = spring({
    frame: frame - 115,
    fps,
    config: { damping: 14, stiffness: 150 },
  });
  const sashaX = interpolate(sashaSpring, [0, 1], [120, 0]);
  const sashaOpacity = interpolate(sashaSpring, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // $SASHA sub-lines at frame 145
  const sashaSubOpacity = interpolate(frame, [145, 163], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sashaSubY = interpolate(frame, [145, 163], [20, 0], {
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
          position: "relative",
        }}
      >
        {/* "2 Live Implementations." — intro title */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            opacity: titleOpacity * titleFadeOut,
            transform: `scale(${titleScale}) translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 48,
              color: "#A89BC2",
              fontFamily: ldTechD,
              letterSpacing: 6,
            }}
          >
            PROOF OF CURES
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "#ffffff",
              fontFamily: ldTechD,
              lineHeight: 1,
              textShadow: "0 0 40px rgba(224,64,251,0.3)",
            }}
          >
            2 Live
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "#E040FB",
              fontFamily: ldTechD,
              lineHeight: 1,
              textShadow: "0 0 40px rgba(224,64,251,0.5)",
            }}
          >
            Implementations.
          </div>
        </div>

        {/* Split screen */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 0,
            opacity: splitOpacity,
          }}
        >
          {/* LEFT — $RAPTOR */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              paddingRight: 40,
            }}
          >
            <div
              style={{
                fontSize: 88,
                fontWeight: 900,
                color: "#E040FB",
                fontFamily: ldTechD,
                opacity: raptorOpacity,
                transform: `translateX(${raptorX}px)`,
                textShadow: "0 0 30px rgba(224,64,251,0.5)",
              }}
            >
              $RAPTOR
            </div>
            <div
              style={{
                fontSize: 40,
                color: "#ffffff",
                fontFamily: ldTechD,
                opacity: raptorSubOpacity,
                transform: `translateY(${raptorSubY}px)`,
                maxWidth: 400,
                textAlign: "center",
              }}
            >
              First Coin-to-Company spin-out
            </div>
            <div
              style={{
                fontSize: 36,
                color: "#A89BC2",
                fontFamily: ldTechD,
                opacity: raptorSubOpacity,
                transform: `translateY(${raptorSubY}px)`,
                maxWidth: 400,
                textAlign: "center",
              }}
            >
              Longevity pathways. Onchain.
            </div>
          </div>

          {/* Vertical divider */}
          <div
            style={{
              width: 2,
              height: `${dividerHeight}%`,
              background: "linear-gradient(180deg, transparent, rgba(204,68,255,0.8), transparent)",
              opacity: dividerOpacity,
              flexShrink: 0,
            }}
          />

          {/* RIGHT — $SASHA */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              paddingLeft: 40,
            }}
          >
            <div
              style={{
                fontSize: 88,
                fontWeight: 900,
                color: "#E040FB",
                fontFamily: ldTechD,
                opacity: sashaOpacity,
                transform: `translateX(${sashaX}px)`,
                textShadow: "0 0 30px rgba(224,64,251,0.5)",
              }}
            >
              $SASHA
            </div>
            <div
              style={{
                fontSize: 38,
                color: "#ffffff",
                fontFamily: ldTechD,
                opacity: sashaSubOpacity,
                transform: `translateY(${sashaSubY}px)`,
                maxWidth: 440,
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              World's first live Curestream for 8-year-old Sasha living with severe SLC6A1
            </div>
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};
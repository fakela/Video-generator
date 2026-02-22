import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene16CostGap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "The Cost Gap" fade up (frame 5)
  const titleOpacity = interpolate(frame, [5, 25], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleTranslateY = interpolate(frame, [5, 25], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // "Getting a drug to Phase 3 trials" fade up (frame 20)
  const subtitleOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subtitleTranslateY = interpolate(frame, [20, 40], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Industry Standard bar (frame 40)
  const industryLabelOpacity = interpolate(frame, [40, 50], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const industryBarWidth = interpolate(frame, [40, 80], [0, 100], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Curetopia bar (frame 60)
  const curetopieLabelOpacity = interpolate(frame, [60, 70], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const curetopiaBarWidth = interpolate(frame, [60, 80], [0, 5], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // "20x cheaper" badge bounce (frame 110)
  const badgeBounce = spring({ frame: frame - 110, fps, config: { damping: 8, stiffness: 150 } });
  const badgeScale = interpolate(badgeBounce, [0, 1], [0, 1]);
  const badgeOpacity = frame >= 110 ? 1 : 0;

  // "Same science..." fade up (frame 125)
  const footerOpacity = interpolate(frame, [125, 145], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const footerTranslateY = interpolate(frame, [125, 145], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 42,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: poppins,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
            marginBottom: 8,
          }}
        >
          The Cost Gap
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 20,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleTranslateY}px)`,
            marginBottom: 40,
          }}
        >
          Getting a drug to Phase 3 trials
        </div>

        {/* Bars section */}
        <div style={{ maxWidth: 900, width: "100%" }}>
          {/* Industry Standard bar */}
          <div style={{ marginBottom: 24, opacity: industryLabelOpacity }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontFamily: poppins,
                  textAlign: "center",
                }}
              >
                Industry Standard
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "#ef4444",
                  fontWeight: 700,
                  fontFamily: poppins,
                  textAlign: "center",
                }}
              >
                $100M+
              </div>
            </div>
            <div
              style={{
                height: 48,
                background: "#ef4444",
                borderRadius: 8,
                width: `${industryBarWidth}%`,
              }}
            />
          </div>

          {/* Curetopia bar */}
          <div style={{ marginBottom: 24, opacity: curetopieLabelOpacity }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  color: "#ffffff",
                  fontFamily: poppins,
                  textAlign: "center",
                }}
              >
                Curetopia
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "#22c55e",
                  fontWeight: 700,
                  fontFamily: poppins,
                  textAlign: "center",
                }}
              >
                $5M
              </div>
            </div>
            <div
              style={{
                height: 48,
                background: "#22c55e",
                borderRadius: 8,
                width: `${curetopiaBarWidth}%`,
              }}
            />
          </div>
        </div>

        {/* 20x cheaper badge */}
        <div
          style={{
            fontSize: 32,
            color: "#22c55e",
            fontWeight: 700,
            fontFamily: poppins,
            textAlign: "center",
            background: "rgba(34,197,94,0.15)",
            border: "2px solid #22c55e",
            padding: "8px 32px",
            borderRadius: 12,
            opacity: badgeOpacity,
            transform: `scale(${badgeScale})`,
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          20× cheaper.
        </div>

        {/* Footer text */}
        <div
          style={{
            fontSize: 20,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            opacity: footerOpacity,
            transform: `translateY(${footerTranslateY}px)`,
          }}
        >
          Same science. Fraction of the cost.
        </div>
      </div>
    </SceneWrapper>
  );
};

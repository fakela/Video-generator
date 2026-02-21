import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";
import { poppins } from "../fonts";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const COLS = 25;
const ROWS = 8;
const TOTAL = COLS * ROWS; // 200 dots

export const Scene5bTrillion: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 10-frame crossfade in/out
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
    easing: ease,
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // Title and subtitle animate in at frame 0
  const titleProgress = spring({ frame: frame - 0, fps, config: { damping: 20, stiffness: 180 } });
  const subtitleProgress = spring({ frame: frame - 8, fps, config: { damping: 20, stiffness: 180 } });

  // Dot matrix starts filling at frame 20
  const dotProgress = interpolate(frame, [20, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  const filledCount = Math.round(dotProgress * TOTAL);

  // "$1.5 Trillion" label appears at frame 30
  const trillionProgress = spring({ frame: frame - 30, fps, config: { damping: 20, stiffness: 180 } });

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      {/* Title — top center */}
      <div
        style={{
          position: "absolute",
          top: 68,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -20}px)`,
        }}
      >
        <div
          style={{
            color: "#a855f7",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          The Opportunity
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 900,
            fontFamily: poppins,
            lineHeight: 1.1,
            textShadow: "0 0 40px rgba(168,85,247,0.6)",
          }}
        >
          The $1.5 Trillion Opportunity
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: 210,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: subtitleProgress,
          transform: `translateY(${(1 - subtitleProgress) * 10}px)`,
        }}
      >
        <div
          style={{
            color: "#9ca3af",
            fontSize: 20,
            fontWeight: 400,
            fontFamily: poppins,
          }}
        >
          10,000+ rare diseases × avg $150M market each
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 15,
            fontWeight: 400,
            fontFamily: poppins,
            marginTop: 4,
          }}
        >
          Each dot below = 50 diseases × $150M
        </div>
      </div>

      {/* Dot matrix — fully contained between y=280 and y=900 */}
      <div
        style={{
          position: "absolute",
          top: 278,
          left: 68,
          right: 68,
          bottom: 160,
          background: "linear-gradient(135deg, rgba(59,7,100,0.85) 0%, rgba(26,5,50,0.9) 100%)",
          border: "1px solid rgba(168,85,247,0.4)",
          borderRadius: 24,
          padding: "28px 32px",
          boxShadow: "0 0 40px rgba(168,85,247,0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: dotProgress > 0 ? 1 : 0,
          transform: `translateY(${interpolate(dotProgress, [0, 1], [20, 0])}px)`,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gap: 8,
          }}
        >
          {Array.from({ length: TOTAL }, (_, i) => {
            const filled = i < filledCount;
            return (
              <div
                key={i}
                style={{
                  aspectRatio: "1",
                  borderRadius: "50%",
                  backgroundColor: filled ? "#a855f7" : "rgba(168,85,247,0.12)",
                  boxShadow: filled ? "0 0 8px rgba(168,85,247,0.7)" : "none",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* "$1.5 Trillion" — bottom right, inside padding */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 100,
          textAlign: "right",
          opacity: trillionProgress,
          transform: `scale(${interpolate(trillionProgress, [0, 1], [0.8, 1])}) translateY(${(1 - trillionProgress) * 20}px)`,
        }}
      >
        <div
          style={{
            color: "#f0abfc",
            fontSize: 52,
            fontWeight: 900,
            fontFamily: poppins,
            lineHeight: 1,
            textShadow: "0 0 30px rgba(240,171,252,0.7), 0 0 60px rgba(168,85,247,0.4)",
            letterSpacing: "-0.02em",
          }}
        >
          $1.5 Trillion
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: poppins,
            marginTop: 4,
          }}
        >
          Total addressable rare disease market
        </div>
      </div>
    </AbsoluteFill>
  );
};

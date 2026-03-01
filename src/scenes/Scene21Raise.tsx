import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene21Raise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Gold radial glow behind the number
  const glowPulse = Math.sin(frame * 0.06) * 0.12 + 0.3;

  // "$1.77M" — counter from $0.00M to $1.77M, frame 8 to 50, with spring punch
  const countProgress = interpolate(frame, [8, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const displayValue = (1.77 * countProgress).toFixed(2);

  const punch = spring({
    frame: frame - 8,
    fps,
    config: { damping: 8, stiffness: 140 },
  });
  const punchScale = interpolate(punch, [0, 1], [0.4, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const punchOpacity = interpolate(punch, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Raised in a single community auction." — scale from 0.8 at frame 50
  const raisedSpring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 14, stiffness: 140 },
  });
  const raisedScale = interpolate(raisedSpring, [0, 1], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const raisedOpacity = interpolate(raisedSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "March 2025. In brutal market conditions." — letter-spacing animation
  const marchLetterSpacing = interpolate(frame, [75, 112], [14, 2], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const marchOpacity = interpolate(frame, [75, 95], [0, 1], {
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
          fontFamily: poppins,
          textAlign: "center",
          gap: 16,
          position: "relative",
        }}
      >
        {/* Gold radial glow behind number */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            background: `radial-gradient(circle, rgba(224,64,251,${glowPulse}) 0%, rgba(224,64,251,${glowPulse * 0.3}) 35%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />

        {/* "$1.77M" — gold counter with spring punch */}
        <div
          style={{
            fontSize: 180,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: poppins,
            lineHeight: 1,
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
            position: "relative",
            zIndex: 1,
            textShadow: "0 0 40px rgba(224,64,251,0.5), 0 0 80px rgba(224,64,251,0.2)",
          }}
        >
          ${displayValue}M
        </div>

        {/* "Raised in a single community auction." — scale from 0.8 */}
        <div
          style={{
            fontSize: 44,
            color: "#ffffff",
            fontFamily: poppins,
            marginTop: 12,
            transform: `scale(${raisedScale})`,
            opacity: raisedOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          14,208 SOL raised in a single community auction.
        </div>

        {/* "March 2025. In brutal market conditions." — letter-spacing */}
        <div
          style={{
            fontSize: 44,
            color: "#A89BC2",
            fontFamily: poppins,
            marginTop: 12,
            letterSpacing: marchLetterSpacing,
            opacity: marchOpacity,
            position: "relative",
            zIndex: 1,
          }}
        >
          March 2025. In brutal market conditions.
        </div>
      </div>
    </SceneWrapper>
  );
};

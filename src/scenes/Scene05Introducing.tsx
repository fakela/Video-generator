import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, Img, staticFile } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene05Introducing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Light birth — radial glow expands from center point at frame 5
  const glowRadius = interpolate(frame, [5, 60], [0, 800], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const glowOpacity = interpolate(frame, [5, 45], [0, 0.7], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const glowFade = interpolate(frame, [70, 100], [0.7, 0.3], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const finalGlow = frame < 70 ? glowOpacity : glowFade;

  // Logo — materializes out of the light at frame 50
  const logoSpring = spring({
    frame: frame - 50,
    fps,
    config: { damping: 16, stiffness: 130 },
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.1, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "The world's first BioDAO…" — fades up at frame 100
  const desc1Opacity = interpolate(frame, [100, 120], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const desc1Y = interpolate(frame, [100, 120], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Decentralized · Community-owned · Onchain" — fades up at frame 145
  const tagOpacity = interpolate(frame, [145, 165], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const tagY = interpolate(frame, [145, 165], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Birth glow — single point of light expanding */}
      <div
        style={{
          position: "absolute",
          width: glowRadius,
          height: glowRadius,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,180,255,0.9) 0%, rgba(224,64,251,0.5) 30%, transparent 70%)",
          opacity: finalGlow,
          pointerEvents: "none",
          filter: "blur(20px)",
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
        {/* Logo materializes from light */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Img
            src={staticFile("Curetopia Logo Primary Dark Mode 1@2x.png")}
            style={{ height: 110 }}
          />
        </div>

        {/* "The world's first BioDAO for rare disease." */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: desc1Opacity,
            transform: `translateY(${desc1Y}px)`,
          }}
        >
          The world's first BioDAO on Solana for rare disease.
        </div>

        {/* "Decentralized · Community-owned · Onchain" */}
        <div
          style={{
            fontSize: 44,
            color: "#CC44FF",
            fontFamily: ldTechD,
            letterSpacing: 3,
            opacity: tagOpacity,
            transform: `translateY(${tagY}px)`,
          }}
        >
          Decentralized · Community-owned · Onchain
        </div>
      </div>
    </SceneWrapper>
  );
};

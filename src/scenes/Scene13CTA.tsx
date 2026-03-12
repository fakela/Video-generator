import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring, Img, staticFile } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene13CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = 360;

  // "Join the mission." — fades/slides in at frame 12
  const titleOpacity = interpolate(frame, [12, 36], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleY = interpolate(frame, [12, 36], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Fuchsia aura glow behind title — pulses
  const auraPulse = Math.sin(frame * 0.06) * 0.3 + 0.7;
  const auraOpacity = interpolate(frame, [12, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 4 pill tags — stagger in at frame 80
  const pillTags = [
    "Contribute Data",
    "Provide Compute",
    "Donate Biospecimens",
    "Deploy Capital",
  ];
  const pillStart = 80;
  const pillInterval = 20;

  // curetopia.xyz — fades in at frame 200
  const urlOpacity = interpolate(frame, [200, 220], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const urlY = interpolate(frame, [200, 220], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Logo — fades in at frame 240
  const logoOpacity = interpolate(frame, [240, 258], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Slow fade to black — over last 45 frames
  const fadeToBlack = interpolate(
    frame,
    [totalFrames - 45, totalFrames],
    [0, 1],
    { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
  );

  return (
    <SceneWrapper>
      {/* Fade to black overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000000",
          opacity: fadeToBlack,
          pointerEvents: "none",
          zIndex: 100,
        }}
      />

      {/* Fuchsia aura behind title */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 350,
          borderRadius: "50%",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(224,64,251,0.25) 0%, transparent 65%)",
          opacity: auraOpacity * auraPulse,
          pointerEvents: "none",
          filter: "blur(30px)",
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
          gap: 24,
          position: "relative",
        }}
      >
        {/* "Join the mission." */}
        <div
          style={{
            fontSize: 104,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Join the mission.
        </div>

        {/* 4 pill tags */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "center",
            maxWidth: 1000,
          }}
        >
          {pillTags.map((tag, i) => {
            const delay = pillStart + i * pillInterval;
            const pillSpring = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 160 },
            });
            const pillScale = interpolate(pillSpring, [0, 1], [0, 1]);
            const pillOp = interpolate(pillSpring, [0, 0.4], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(123,47,190,0.4), rgba(74,26,122,0.25))",
                  border: "1px solid rgba(224,64,251,0.5)",
                  borderRadius: 32,
                  padding: "16px 36px",
                  fontSize: 40,
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: ldTechD,
                  opacity: pillOp,
                  transform: `scale(${pillScale})`,
                  boxShadow: "0 0 16px rgba(224,64,251,0.3)",
                }}
              >
                {tag}
              </div>
            );
          })}
        </div>

        {/* curetopia.xyz */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#E040FB",
            fontFamily: ldTechD,
            opacity: urlOpacity,
            transform: `translateY(${urlY}px)`,
            marginTop: 8,
            textShadow: "0 0 20px rgba(224,64,251,0.5)",
          }}
        >
          curetopia.xyz
        </div>

        {/* Logo */}
        <div
          style={{
            opacity: logoOpacity,
            marginTop: 4,
          }}
        >
          <Img
            src={staticFile("Curetopia Logo Primary Dark Mode 1@2x.png")}
            style={{ height: 70 }}
          />
        </div>
      </div>
    </SceneWrapper>
  );
};

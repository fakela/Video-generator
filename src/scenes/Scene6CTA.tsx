import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
} from "remotion";
import { poppins } from "../fonts";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

// Contribution pillars
const PILLARS = [
  { icon: "🧬", label: "Data" },
  { icon: "🩸", label: "Biospecimens" },
  { icon: "💻", label: "Compute" },
  { icon: "💰", label: "Capital" },
];

export const Scene6CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    easing: ease,
  });

  // Planet rises from below the bottom edge
  const planetProgress = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 40, mass: 2.0 },
  });

  const planetY = interpolate(planetProgress, [0, 1], [700, 200]);

  // Text lines stagger in
  const line1Progress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 16, stiffness: 80, mass: 0.8 },
  });
  const line2Progress = spring({
    frame: frame - 45,
    fps,
    config: { damping: 16, stiffness: 80, mass: 0.8 },
  });
  const line3Progress = spring({
    frame: frame - 70,
    fps,
    config: { damping: 16, stiffness: 80, mass: 0.8 },
  });
  const line4Progress = spring({
    frame: frame - 95,
    fps,
    config: { damping: 16, stiffness: 80, mass: 0.8 },
  });

  const pillarsProgress = spring({
    frame: frame - 120,
    fps,
    config: { damping: 18, stiffness: 80, mass: 0.8 },
  });

  const logoProgress = spring({
    frame: frame - 200,
    fps,
    config: { damping: 20, stiffness: 90, mass: 0.7 },
  });

  const tokenProgress = spring({
    frame: frame - 155,
    fps,
    config: { damping: 18, stiffness: 80, mass: 0.8 },
  });

  // Pulsing glow for the planet — oscillates every ~60 frames
  const planetGlowPulse = Math.sin(frame / 30) * 0.3 + 0.7;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: fadeIn,
        overflow: "hidden",
      }}
    >
      {/* Planet — rising from bottom */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: planetY,
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 35% 30%, #7c3aed 0%, #4c1d95 25%, #2e1065 55%, #1a0533 80%, #08081a 100%)",
          boxShadow: `0 0 ${120 * planetGlowPulse}px rgba(168,85,247,${0.5 * planetGlowPulse}), 0 0 ${240 * planetGlowPulse}px rgba(168,85,247,${0.2 * planetGlowPulse}), inset 0 0 80px rgba(236,72,153,0.2)`,
        }}
      >
        {/* Planet surface accent ring */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "8%",
            right: "8%",
            height: "3%",
            background:
              "linear-gradient(90deg, transparent, rgba(240,171,252,0.3) 30%, rgba(168,85,247,0.5) 50%, rgba(240,171,252,0.3) 70%, transparent)",
            borderRadius: "50%",
            transform: "rotate(-12deg)",
            filter: "blur(4px)",
          }}
        />
        {/* Atmosphere glow rim */}
        <div
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            boxShadow: `inset 0 0 60px rgba(236,72,153,0.15)`,
            border: "1px solid rgba(168,85,247,0.2)",
          }}
        />
      </div>

      {/* Planet ring / halo */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: planetY + 395,
          transform: "translateX(-50%)",
          width: 1100,
          height: 80,
          borderRadius: "50%",
          border: "3px solid rgba(168,85,247,0.35)",
          boxShadow:
            "0 0 24px rgba(168,85,247,0.3), inset 0 0 20px rgba(168,85,247,0.15)",
          opacity: planetProgress * 0.7,
        }}
      />

      {/* Central content overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 120,
        }}
      >
        {/* Main headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 88,
            fontWeight: 900,
            fontFamily: poppins,
            textAlign: "center",
            lineHeight: 1.1,
            textShadow:
              "0 0 60px rgba(168,85,247,0.9), 0 0 120px rgba(168,85,247,0.4)",
            opacity: line1Progress,
            transform: `translateY(${(1 - line1Progress) * 40}px)`,
            marginBottom: 16,
          }}
        >
          Join the mission.
        </div>

        {/* Contribute line */}
        <div
          style={{
            opacity: line2Progress,
            transform: `translateY(${(1 - line2Progress) * 30}px)`,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              color: "#c4b5fd",
              fontSize: 28,
              fontWeight: 400,
              fontFamily: poppins,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Contribute data, biospecimens, compute, or capital.
          </div>
        </div>

        {/* Pillar icons */}
        <div
          style={{
            display: "flex",
            gap: 24,
            marginBottom: 40,
            opacity: pillarsProgress,
            transform: `translateY(${(1 - pillarsProgress) * 20}px)`,
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                background: "rgba(168,85,247,0.15)",
                border: "1px solid rgba(168,85,247,0.3)",
                borderRadius: 16,
                padding: "16px 28px",
                boxShadow: "0 0 20px rgba(168,85,247,0.2)",
              }}
            >
              <span style={{ fontSize: 32 }}>{p.icon}</span>
              <span
                style={{
                  color: "#c4b5fd",
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: poppins,
                  letterSpacing: "0.1em",
                }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Earn tokens line */}
        <div
          style={{
            opacity: tokenProgress,
            transform: `translateY(${(1 - tokenProgress) * 24}px)`,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              color: "#f0abfc",
              fontSize: 32,
              fontWeight: 700,
              fontFamily: poppins,
              textAlign: "center",
              textShadow: "0 0 20px rgba(240,171,252,0.6)",
            }}
          >
            Earn{" "}
            <span
              style={{
                color: "#ffffff",
                background: "linear-gradient(90deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
              }}
            >
              $CURES
            </span>{" "}
            governance tokens.
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: line4Progress,
            transform: `translateY(${(1 - line4Progress) * 20}px)`,
          }}
        >
          <div
            style={{
              color: "#9ca3af",
              fontSize: 22,
              fontWeight: 400,
              fontFamily: poppins,
              textAlign: "center",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Community Medicine.{" "}
            <span style={{ color: "#a855f7" }}>Onchain.</span>
          </div>
        </div>
      </div>

      {/* Bottom — logo + URL */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          opacity: logoProgress,
          transform: `translateY(${(1 - logoProgress) * 20}px)`,
        }}
      >
        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              boxShadow: "0 0 20px rgba(168,85,247,0.6)",
            }}
          >
            🧬
          </div>
          <span
            style={{
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 700,
              fontFamily: poppins,
              letterSpacing: "0.12em",
            }}
          >
            CURETOPIA
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            color: "#a855f7",
            fontSize: 18,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.08em",
            textShadow: "0 0 12px rgba(168,85,247,0.5)",
          }}
        >
          curetopia.xyz
        </div>
      </div>
    </div>
  );
};

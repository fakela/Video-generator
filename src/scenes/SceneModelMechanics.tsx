import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

const cards = [
  {
    frame: 40,
    icon: "✅",
    title: "Public Milestones",
    description: "Every goal visible to the community.",
  },
  {
    frame: 60,
    icon: "💰",
    title: "Results-Based Funding",
    description: "Money moves only when progress is proven.",
  },
  {
    frame: 80,
    icon: "⛓️",
    title: "Onchain Progress",
    description: "Every update recorded permanently on Solana.",
  },
];

export const SceneModelMechanics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // Header fade in at frame 10
  const headerOpacity = interpolate(frame, [10, 26], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const headerY = interpolate(frame, [10, 26], [20, 0], {
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
          gap: 48,
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 900,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(123,47,190,0.18) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div
          style={{
            fontSize: 40,
            color: "#CC44FF",
            fontWeight: 500,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: headerOpacity,
            transform: `translateY(${headerY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          How It Works
        </div>

        {/* Cards row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 32,
            position: "relative",
            zIndex: 1,
          }}
        >
          {cards.map((card) => {
            const cardSpring = spring({
              frame: frame - card.frame,
              fps,
              config: { damping: 10, stiffness: 160 },
            });
            const cardScale = interpolate(cardSpring, [0, 1], [0.5, 1]);
            const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);

            return (
              <div
                key={card.title}
                style={{
                  background: "rgba(123,47,190,0.15)",
                  border: "1px solid rgba(224,64,251,0.35)",
                  borderRadius: 20,
                  padding: "36px 40px",
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: cardOpacity,
                  transform: `scale(${cardScale})`,
                  willChange: "transform, opacity",
                }}
              >
                <div style={{ fontSize: 72 }}>{card.icon}</div>
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 700,
                    color: "#ffffff",
                    marginTop: 16,
                    lineHeight: 1.2,
                    fontFamily: ldTechD,
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: 40,
                    color: "#A89BC2",
                    marginTop: 12,
                    maxWidth: 280,
                    lineHeight: 1.4,
                    fontFamily: ldTechD,
                  }}
                >
                  {card.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};

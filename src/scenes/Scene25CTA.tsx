import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene25CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "Join the mission." — slow fade in over 30 frames at frame 10
  const titleOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleTranslateY = interpolate(frame, [10, 40], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "Contribute and earn $CURES governance tokens." — fade up at frame 40
  const sub1Opacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const sub1TranslateY = interpolate(frame, [40, 60], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. Four icon cards staggered 12 frames apart
  const cards = [
    { emoji: "\uD83E\uDDEC", label: "Data", delay: 60 },
    { emoji: "\uD83E\uDE78", label: "Biospecimens", delay: 72 },
    { emoji: "\uD83D\uDCBB", label: "Compute", delay: 84 },
    { emoji: "\uD83D\uDCB0", label: "Capital", delay: 96 },
  ];

  // 4. Divider line — animate width from 0 to 60% at frame 115
  const lineWidth = interpolate(frame, [115, 140], [0, 60], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 5. "COMMUNITY MEDICINE. ONCHAIN." — fade up at frame 135
  const taglineOpacity = interpolate(frame, [135, 155], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const taglineTranslateY = interpolate(frame, [135, 155], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 6. Logo + curetopia.xyz — fade up at frame 150, pulsing opacity
  const logoOpacity = interpolate(frame, [150, 170], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const logoTranslateY = interpolate(frame, [150, 170], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const pulseOpacity = frame >= 150
    ? 0.7 + 0.3 * Math.sin((frame - 150) * 0.15)
    : 0;

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
        }}
      >
        {/* 1. Join the mission */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          Join the mission.
        </div>

        {/* 2. Contribute and earn */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 16,
            opacity: sub1Opacity,
            transform: `translateY(${sub1TranslateY}px)`,
          }}
        >
          Contribute and earn $CURES governance tokens.
        </div>

        {/* 3. Icon cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginTop: 32,
            justifyContent: "center",
          }}
        >
          {cards.map((card, i) => {
            const cardSpring = spring({
              frame: frame - card.delay,
              fps,
              config: { damping: 10, stiffness: 160 },
            });
            const cardScale = interpolate(cardSpring, [0, 1], [0, 1]);

            return (
              <div
                key={i}
                style={{
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  borderRadius: 16,
                  padding: "20px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: `scale(${cardScale})`,
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    textAlign: "center",
                  }}
                >
                  {card.emoji}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#ffffff",
                    fontFamily: poppins,
                    textAlign: "center",
                    marginTop: 8,
                  }}
                >
                  {card.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Divider line */}
        <div
          style={{
            width: `${lineWidth}%`,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #a855f7, transparent)",
            marginTop: 28,
          }}
        />

        {/* 5. COMMUNITY MEDICINE. ONCHAIN. */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: 6,
            fontWeight: 600,
            color: "#c4b5fd",
            fontFamily: poppins,
            textAlign: "center",
            marginTop: 24,
            opacity: taglineOpacity,
            transform: `translateY(${taglineTranslateY}px)`,
          }}
        >
          COMMUNITY MEDICINE. ONCHAIN.
        </div>

        {/* 6. Curetopia logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 20,
            opacity: logoOpacity,
            transform: `translateY(${logoTranslateY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 36,
              textAlign: "center",
              opacity: pulseOpacity,
            }}
          >
            {"\uD83E\uDDEC"}
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#a855f7",
              fontFamily: poppins,
              textAlign: "center",
              marginTop: 8,
            }}
          >
            curetopia.xyz
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

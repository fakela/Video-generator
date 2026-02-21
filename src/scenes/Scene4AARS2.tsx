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

interface BarProps {
  label: string;
  value: string;
  maxWidth: number;
  fillPercent: number;
  barColor: string;
  glowColor: string;
  progress: number;
  tag?: string;
}

const Bar: React.FC<BarProps> = ({
  label,
  value,
  maxWidth,
  fillPercent,
  barColor,
  glowColor,
  progress,
  tag,
}) => {
  const barWidth = interpolate(progress, [0, 1], [0, maxWidth * fillPercent], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 600,
              fontFamily: poppins,
            }}
          >
            {label}
          </span>
          {tag && (
            <span
              style={{
                background: `${barColor}30`,
                border: `1px solid ${barColor}60`,
                color: barColor,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: poppins,
                padding: "3px 10px",
                borderRadius: 20,
                letterSpacing: "0.1em",
              }}
            >
              {tag}
            </span>
          )}
        </div>
        <span
          style={{
            color: barColor,
            fontSize: 28,
            fontWeight: 900,
            fontFamily: poppins,
            textShadow: `0 0 16px ${glowColor}80`,
          }}
        >
          {value}
        </span>
      </div>

      {/* Bar track */}
      <div
        style={{
          width: maxWidth,
          height: 36,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 8,
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Filled bar */}
        <div
          style={{
            width: barWidth,
            height: "100%",
            background: `linear-gradient(90deg, ${barColor}cc, ${glowColor}cc)`,
            borderRadius: 8,
            boxShadow: `0 0 20px ${glowColor}60, inset 0 1px 0 rgba(255,255,255,0.2)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Shimmer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)`,
              transform: `translateX(${(progress * 200 - 100)}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

interface MiniCardProps {
  icon: string;
  text: string;
  accentColor: string;
  progress: number;
}

const MiniCard: React.FC<MiniCardProps> = ({ icon, text, accentColor, progress }) => (
  <div
    style={{
      opacity: progress,
      transform: `translateY(${(1 - progress) * 30}px)`,
      background: "linear-gradient(135deg, rgba(59,7,100,0.8) 0%, rgba(26,5,50,0.9) 100%)",
      border: `1px solid ${accentColor}55`,
      borderRadius: 16,
      padding: "20px 24px",
      boxShadow: `0 0 24px ${accentColor}30`,
      display: "flex",
      alignItems: "center",
      gap: 14,
    }}
  >
    <span style={{ fontSize: 30 }}>{icon}</span>
    <span
      style={{
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 600,
        fontFamily: poppins,
        lineHeight: 1.3,
      }}
    >
      {text}
    </span>
  </div>
);

const MAX_BAR_WIDTH = 780;

export const Scene4AARS2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 10-frame crossfade
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

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const industryBarProgress = interpolate(frame, [8, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  const curetopiaBarProgress = interpolate(frame, [16, 46], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  const savingsProgress = interpolate(frame, [24, 54], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  // 8-frame stagger for cards
  const CARD_ENTER = [0, 8, 16, 24];
  const cardProgresses = CARD_ENTER.map((f) =>
    spring({
      frame: frame - f,
      fps,
      config: { damping: 20, stiffness: 180 },
    })
  );

  const cards = [
    { icon: "🔬", text: "2 drug candidates discovered", accentColor: "#a855f7" },
    { icon: "📄", text: "Provisional patent filed", accentColor: "#ec4899" },
    { icon: "👨‍👩‍👧‍👦", text: "2 pioneer families — parallel N-of-1 studies active", accentColor: "#22c55e" },
    { icon: "🍺", text: "8,500 compounds screened via yeast avatars", accentColor: "#f0abfc" },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity }}>
      {/* Left panel — headline + chart, with safe bottom padding */}
      <div
        style={{
          position: "absolute",
          top: 68,
          left: 68,
          width: 840,
          bottom: 80,
          overflow: "hidden",
        }}
      >
        {/* Tag + Headline */}
        <div
          style={{
            opacity: titleProgress,
            transform: `translateY(${(1 - titleProgress) * -16}px)`,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(168,85,247,0.2)",
              border: "1px solid rgba(168,85,247,0.4)",
              borderRadius: 20,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 16 }}>🧬</span>
            <span
              style={{
                color: "#c4b5fd",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: poppins,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Project 001
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 52,
              fontWeight: 900,
              fontFamily: poppins,
              lineHeight: 1.1,
              textShadow: "0 0 40px rgba(168,85,247,0.6)",
              marginBottom: 6,
            }}
          >
            AARS2 Deficiency
          </div>
          <div
            style={{
              color: "#c4b5fd",
              fontSize: 20,
              fontWeight: 400,
              fontFamily: poppins,
              marginBottom: 32,
            }}
          >
            A fatal infant disease. Zero treatments. Until now.
          </div>
        </div>

        {/* Chart — Cost comparison */}
        <div
          style={{
            opacity: Math.max(industryBarProgress, 0.01),
          }}
        >
          <div
            style={{
              color: "#9ca3af",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: poppins,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Cost to Phase 3 — Industry vs. Curetopia
          </div>

          <Bar
            label="Industry Standard"
            value="$100M+"
            maxWidth={MAX_BAR_WIDTH}
            fillPercent={1.0}
            barColor="#ef4444"
            glowColor="#f97316"
            progress={industryBarProgress}
            tag="Big Pharma"
          />

          <Bar
            label="Curetopia"
            value="$5M"
            maxWidth={MAX_BAR_WIDTH}
            fillPercent={0.05}
            barColor="#22c55e"
            glowColor="#a3e635"
            progress={curetopiaBarProgress}
            tag="20x cheaper"
          />

          {/* Savings callout */}
          <div
            style={{
              opacity: savingsProgress,
              transform: `scale(${interpolate(savingsProgress, [0, 1], [0.8, 1])})`,
              marginTop: 12,
              padding: "14px 24px",
              background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(163,230,53,0.1))",
              border: "1px solid rgba(34,197,94,0.4)",
              borderRadius: 12,
              display: "inline-block",
            }}
          >
            <span
              style={{
                color: "#22c55e",
                fontSize: 28,
                fontWeight: 900,
                fontFamily: poppins,
                textShadow: "0 0 16px rgba(34,197,94,0.6)",
              }}
            >
              20× cost reduction
            </span>
            <span
              style={{
                color: "#9ca3af",
                fontSize: 18,
                fontWeight: 400,
                fontFamily: poppins,
                marginLeft: 12,
              }}
            >
              vs. traditional pharma
            </span>
          </div>

          {/* Perlstein quote — fills empty space below savings callout */}
          <div
            style={{
              opacity: savingsProgress,
              marginTop: 24,
              paddingLeft: 16,
              borderLeft: "2px solid rgba(196,181,253,0.35)",
            }}
          >
            <div
              style={{
                color: "#c4b5fd",
                fontSize: 15,
                fontStyle: "italic",
                fontFamily: poppins,
                lineHeight: 1.6,
              }}
            >
              "We delivered results on a timeline and with capital efficiency that is unheard of in TradBio."
            </div>
            <div
              style={{
                color: "#9ca3af",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: poppins,
                marginTop: 8,
                letterSpacing: "0.05em",
              }}
            >
              — Ethan Perlstein, CEO Curetopia
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — mini cards */}
      <div
        style={{
          position: "absolute",
          top: 68,
          right: 68,
          width: 860,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          alignContent: "start",
        }}
      >
        {/* Right panel header */}
        <div
          style={{
            gridColumn: "1 / -1",
            color: "#9ca3af",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 8,
            opacity: cardProgresses[0],
          }}
        >
          Results to Date
        </div>

        {cards.map((card, i) => (
          <MiniCard
            key={i}
            icon={card.icon}
            text={card.text}
            accentColor={card.accentColor}
            progress={cardProgresses[i]}
          />
        ))}

        {/* DNA illustration */}
        <div
          style={{
            gridColumn: "1 / -1",
            marginTop: 20,
            opacity: cardProgresses[3],
            textAlign: "center",
            padding: "24px",
            background: "radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 70%)",
            borderRadius: 20,
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 12 }}>🧬</div>
          <div
            style={{
              color: "#f0abfc",
              fontSize: 22,
              fontWeight: 700,
              fontFamily: poppins,
              textShadow: "0 0 20px rgba(168,85,247,0.8)",
            }}
          >
            Rare disease → Treatable disease
          </div>
          <div
            style={{
              color: "#9ca3af",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: poppins,
              marginTop: 6,
            }}
          >
            Powered by community science & $CURES tokens
          </div>
        </div>
      </div>
    </div>
  );
};

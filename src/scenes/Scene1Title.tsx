import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { CuretopiaLogo } from "../components/CuretopiaLogo";
import { poppins } from "../fonts";

export const Scene1Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Logo — scale entrance with spring + gentle breathing pulse
  const logoEntrance = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 100 },
  });
  const logoScale = interpolate(logoEntrance, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const logoBreath = Math.sin(frame * 0.06) * 0.03 + 1.0;
  const logoGlow = Math.sin(frame * 0.08) * 10 + 20;
  const logoOpacity = interpolate(logoEntrance, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. "What If" — blur-in animation (blur 15px to 0)
  const whatIfBlur = interpolate(frame, [15, 45], [15, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const whatIfOpacity = interpolate(frame, [15, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "'Too Rare'" — explosive spring scale from 0.3 with rotation wobble
  const tooRareSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 7, stiffness: 120 },
  });
  const tooRareScale = interpolate(tooRareSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const tooRareRotate = interpolate(tooRareSpring, [0, 0.5, 1], [-2, 1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const tooRareOpacity = interpolate(frame, [35, 40], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 4. "Wasn't the End of the Story?" — typewriter clip from left
  const storyOpacity = interpolate(frame, [60, 65], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const storyClip = interpolate(frame, [60, 90], [100, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 5. Divider line — gradient draw animation (thicker 3px)
  const lineWidth = interpolate(frame, [85, 115], [0, 60], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 6. "Curetopia is rewriting it." — scale from 0.8 with glow intensify
  const rewriteSpring = spring({
    frame: frame - 100,
    fps,
    config: { damping: 12, stiffness: 150 },
  });
  const rewriteScale = interpolate(rewriteSpring, [0, 1], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const rewriteOpacity = interpolate(frame, [100, 115], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const rewriteGlow = interpolate(frame, [100, 130], [0, 16], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 7. Tags — letter-spacing animation from 20 to 8
  const tagsOpacity = interpolate(frame, [120, 140], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const tagsLetterSpacing = interpolate(frame, [120, 150], [20, 8], {
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
          gap: 8,
          width: "100%",
          height: "100%",
        }}
      >
        {/* 1. Curetopia logo — SVG with spring entrance + breathing */}
        <div
          style={{
            transform: `scale(${logoScale * logoBreath})`,
            opacity: logoOpacity,
            filter: `drop-shadow(0 0 ${logoGlow}px rgba(168, 85, 247, 0.6))`,
          }}
        >
          <CuretopiaLogo size={160} showText textColor="#ffffff" />
        </div>

        {/* 2. "What If" — blur-in */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 60,
            fontStyle: "italic",
            color: "#c4b5fd",
            textAlign: "center",
            opacity: whatIfOpacity,
            filter: `blur(${whatIfBlur}px)`,
            marginTop: 12,
          }}
        >
          What If
        </div>

        {/* 3. "'Too Rare'" — explosive spring scale + rotation wobble */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 150,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            transform: `scale(${tooRareScale}) rotate(${tooRareRotate}deg)`,
            opacity: tooRareOpacity,
            lineHeight: 1.1,
          }}
        >
          &lsquo;Too Rare&rsquo;
        </div>

        {/* 4. "Wasn't the End of the Story?" — typewriter clip */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            opacity: storyOpacity,
            clipPath: `inset(0 ${storyClip}% 0 0)`,
          }}
        >
          Wasn't the End of the Story?
        </div>

        {/* 5. Gradient divider — thicker 3px */}
        <div
          style={{
            width: `${lineWidth}%`,
            height: 3,
            background: "linear-gradient(90deg, #ec4899, #a855f7, #6366f1)",
            marginTop: 24,
            marginBottom: 24,
            borderRadius: 2,
          }}
        />

        {/* 6. "Curetopia is rewriting it." — scale + glow intensify */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 56,
            fontWeight: 600,
            color: "#a855f7",
            textAlign: "center",
            opacity: rewriteOpacity,
            transform: `scale(${rewriteScale})`,
            textShadow: `0 0 ${rewriteGlow}px rgba(168, 85, 247, 0.6)`,
          }}
        >
          Curetopia is rewriting it.
        </div>

        {/* 7. Tags — letter-spacing animation */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 44,
            letterSpacing: tagsLetterSpacing,
            fontWeight: 600,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: tagsOpacity,
          }}
        >
          DECENTRALIZED SCIENCE {"\u00B7"} RARE DISEASE {"\u00B7"} BIODAO
        </div>
      </div>
    </SceneWrapper>
  );
};

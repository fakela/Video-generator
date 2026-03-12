import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

const COLS = 30;
const ROWS = 12;
const TOTAL_DOTS = COLS * ROWS;
const activeDots = [145, 221];

export const Scene09DrugScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── PHASE 1: Counter slams in (0–70) ──
  const counterProgress = interpolate(frame, [10, 55], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const counterValue = Math.round(counterProgress * 8400);
  const counterBlur = interpolate(frame, [10, 40], [12, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const counterOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const counterScale = spring({ frame: frame - 10, fps, config: { damping: 7, stiffness: 180 } });
  const counterScaleVal = interpolate(counterScale, [0, 1], [0.6, 1]);

  // "compounds screened" label
  const labelOpacity = interpolate(frame, [55, 70], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // ── PHASE 2: "10 Disease Programs" stat (frame 80) ──
  const stat1Spring = spring({ frame: frame - 80, fps, config: { damping: 10, stiffness: 160 } });
  const stat1Opacity = interpolate(stat1Spring, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const stat1X = interpolate(stat1Spring, [0, 1], [-60, 0]);

  // ── PHASE 3: Dot grid sweeps in (frame 110) ──
  const gridOpacity = interpolate(frame, [110, 130], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // ── PHASE 4: RESULT label flashes (frame 185) ──
  const resultFlash = interpolate(frame, [185, 188, 192, 196], [0, 1, 0.4, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // "2 drug candidates" crashes in (frame 200)
  const resultSpring = spring({ frame: frame - 200, fps, config: { damping: 7, stiffness: 220 } });
  const resultScale = interpolate(resultSpring, [0, 1], [0.4, 1]);
  const resultOpacity = interpolate(resultSpring, [0, 0.2], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // ── PHASE 5: Two final stats typewriter-style (frame 240, 275) ──
  const stat2Opacity = interpolate(frame, [240, 255], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const stat2Y = interpolate(frame, [240, 255], [20, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  const stat3Opacity = interpolate(frame, [275, 290], [0, 1], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });
  const stat3Y = interpolate(frame, [275, 290], [20, 0], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  // Scanline sweep effect across dot grid
  const scanLine = interpolate(frame, [110, 170], [0, 100], {
    extrapolateRight: "clamp", extrapolateLeft: "clamp",
  });

  const formatted = counterValue.toLocaleString();

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
          gap: 10,
          position: "relative",
        }}
      >

        {/* ── Counter + label row ── */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "#E040FB",
              fontFamily: ldTechD,
              lineHeight: 1,
              opacity: counterOpacity,
              filter: `blur(${counterBlur}px)`,
              transform: `scale(${counterScaleVal})`,
              textShadow: "0 0 40px rgba(224,64,251,0.6)",
            }}
          >
            {formatted}
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#A89BC2",
              fontFamily: ldTechD,
              opacity: labelOpacity,
              paddingBottom: 8,
            }}
          >
            compounds screened.
          </div>
        </div>

        {/* ── Stat 1: 10 Disease Programs slides in from left ── */}
        <div
          style={{
            fontSize: 44,
            fontFamily: ldTechD,
            opacity: stat1Opacity,
            transform: `translateX(${stat1X}px)`,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span style={{
            color: "#E040FB",
            fontWeight: 900,
            fontSize: 52,
            textShadow: "0 0 20px rgba(224,64,251,0.5)",
          }}>10</span>
          <span style={{ color: "#ffffff", fontWeight: 700 }}>Disease Programs</span>
          <span style={{ color: "#A89BC2" }}>built in 6 months.</span>
        </div>

        {/* ── Dot grid with scanline sweep ── */}
        <div style={{ position: "relative", opacity: gridOpacity }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: 660,
              gap: 4,
              justifyContent: "center",
            }}
          >
            {Array.from({ length: TOTAL_DOTS }).map((_, i) => {
              const isActive = activeDots.includes(i);
              const col = i % COLS;
              const dotProgress = (col / COLS) * 100;
              const isScanned = dotProgress <= scanLine;
              const dotOpacity = isScanned ? 1 : 0.15;
              return (
                <div
                  key={i}
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: isActive && isScanned ? "#E040FB" : isScanned ? "rgba(155,48,208,0.6)" : "rgba(123,47,190,0.2)",
                    boxShadow: isActive && isScanned ? "0 0 10px 4px rgba(224,64,251,0.8)" : "none",
                    opacity: dotOpacity,
                    transition: "background-color 0.1s",
                  }}
                />
              );
            })}
          </div>
          {/* Scanline glow */}
          <div style={{
            position: "absolute",
            top: 0,
            left: `${scanLine}%`,
            width: 3,
            height: "100%",
            background: "linear-gradient(180deg, transparent, rgba(224,64,251,0.8), transparent)",
            filter: "blur(4px)",
            opacity: scanLine < 100 ? 0.9 : 0,
          }} />
        </div>

        {/* ── RESULT flash label ── */}
        <div
          style={{
            fontSize: 36,
            color: "#E040FB",
            fontFamily: ldTechD,
            letterSpacing: 8,
            opacity: resultFlash,
            textShadow: "0 0 20px rgba(224,64,251,0.8)",
          }}
        >
          ◈ RESULT ◈
        </div>

        {/* ── "2 drug candidates" spring crash ── */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: resultOpacity,
            transform: `scale(${resultScale})`,
            textShadow: "0 0 30px rgba(255,255,255,0.2)",
          }}
        >
          <span style={{
            color: "#E040FB",
            fontSize: 96,
            textShadow: "0 0 40px rgba(224,64,251,0.7)",
          }}>2 </span>
          drug candidates identified.
        </div>

        {/* ── Stat 2: 11 ARS mutations ── */}
        <div
          style={{
            fontSize: 40,
            fontFamily: ldTechD,
            opacity: stat2Opacity,
            transform: `translateY(${stat2Y}px)`,
          }}
        >
          <span style={{ color: "#E040FB", fontWeight: 900 }}>11 ARS mutations </span>
          <span style={{ color: "#A89BC2" }}>modelled and ready.</span>
        </div>

        {/* ── Stat 3: 28 validated hits ── */}
        <div
          style={{
            fontSize: 40,
            fontFamily: ldTechD,
            opacity: stat3Opacity,
            transform: `translateY(${stat3Y}px)`,
          }}
        >
          <span style={{ color: "#E040FB", fontWeight: 900 }}>28 validated drug hits </span>
          <span style={{ color: "#A89BC2" }}>published openly onchain.</span>
        </div>

      </div>
    </SceneWrapper>
  );
};
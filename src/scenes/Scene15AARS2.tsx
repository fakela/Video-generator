import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene15AARS2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "PROJECT 001" pill slide in from left (frame 5)
  const pillOpacity = interpolate(frame, [5, 25], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const pillTranslateX = interpolate(frame, [5, 25], [-30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // "AARS2 Deficiency" spring punch (frame 25)
  const titlePunch = spring({ frame: frame - 25, fps, config: { damping: 12, stiffness: 200 } });
  const titleScale = interpolate(titlePunch, [0, 1], [0.7, 1]);
  const titleOpacity = frame >= 25 ? 1 : 0;

  // "A fatal mitochondrial disease..." fade up (frame 50)
  const desc1Opacity = interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const desc1TranslateY = interpolate(frame, [50, 70], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // "Zero approved treatments..." fade up (frame 70)
  const desc2Opacity = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const desc2TranslateY = interpolate(frame, [70, 90], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // "Until Curetopia." spring punch (frame 95)
  const curePunch = spring({ frame: frame - 95, fps, config: { damping: 10, stiffness: 220 } });
  const cureScale = interpolate(curePunch, [0, 1], [0.7, 1]);
  const cureOpacity = frame >= 95 ? 1 : 0;

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          width: "100%",
          height: "100%",
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        {/* Context line */}
        <div
          style={{
            fontSize: 40,
            color: "#A89BC2",
            fontFamily: poppins,
            textAlign: "center",
            opacity: pillOpacity,
            transform: `translateX(${pillTranslateX}px)`,
            marginBottom: 4,
          }}
        >
          Curetopia's first real-world case:
        </div>

        {/* PROJECT 001 pill */}
        <div
          style={{
            fontSize: 32,
            color: "#ffffff",
            fontWeight: 700,
            background: "#7B2FBE",
            padding: "10px 32px",
            borderRadius: 24,
            letterSpacing: 4,
            fontFamily: poppins,
            textAlign: "center",
            opacity: pillOpacity,
            transform: `translateX(${pillTranslateX}px)`,
          }}
        >
          PROJECT 001
        </div>

        {/* AARS2 Deficiency */}
        <div
          style={{
            fontSize: 100,
            color: "#ffffff",
            fontWeight: 900,
            fontFamily: poppins,
            textAlign: "center",
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
          }}
        >
          AARS2 Deficiency
        </div>

        {/* Fatal mitochondrial disease */}
        <div
          style={{
            fontSize: 44,
            color: "#ffffff",
            fontFamily: poppins,
            textAlign: "center",
            opacity: desc1Opacity,
            transform: `translateY(${desc1TranslateY}px)`,
          }}
        >
          A fatal mitochondrial disease causing progressive leukoencephalopathy.
        </div>

        {/* Zero approved treatments */}
        <div
          style={{
            fontSize: 42,
            color: "#E040FB",
            fontWeight: 600,
            fontFamily: poppins,
            textAlign: "center",
            opacity: desc2Opacity,
            transform: `translateY(${desc2TranslateY}px)`,
          }}
        >
          Zero approved treatments. Zero options.
        </div>

        {/* Until Curetopia */}
        <div
          style={{
            fontSize: 52,
            color: "#E040FB",
            fontWeight: 700,
            fontFamily: poppins,
            textAlign: "center",
            opacity: cureOpacity,
            transform: `scale(${cureScale})`,
            marginTop: 12,
          }}
        >
          Until Curetopia.
        </div>
      </div>
    </SceneWrapper>
  );
};

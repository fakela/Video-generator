import React from "react";

/**
 * SVG recreation of the Curetopia logo: purple circle with biotech figure + blue drop accent
 */
export const CuretopiaLogo: React.FC<{
  size?: number;
  showText?: boolean;
  textColor?: string;
}> = ({ size = 120, showText = false, textColor = "#ffffff" }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: size * 0.2,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="dropGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer circle */}
        <circle
          cx="100"
          cy="108"
          r="82"
          stroke="url(#purpleGrad)"
          strokeWidth="5"
          fill="none"
          filter="url(#glow)"
        />

        {/* Blue teardrop at top */}
        <path
          d="M100 10 C100 10, 88 30, 88 38 C88 45, 93 50, 100 50 C107 50, 112 45, 112 38 C112 30, 100 10, 100 10Z"
          fill="url(#dropGrad)"
        />

        {/* Stylized figure/DNA — body */}
        <path
          d="M100 65 C100 65, 80 90, 70 120 C65 135, 72 155, 85 165 C90 168, 95 170, 100 170 C105 170, 110 168, 115 165 C128 155, 135 135, 130 120 C120 90, 100 65, 100 65Z"
          fill="url(#bodyGrad)"
          opacity="0.9"
        />

        {/* Inner DNA helix strands */}
        <path
          d="M92 85 C88 100, 95 110, 100 118 C105 126, 112 136, 108 150"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M108 85 C112 100, 105 110, 100 118 C95 126, 88 136, 92 150"
          stroke="#ffffff"
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
        />

        {/* Cross rungs of DNA */}
        <line x1="94" y1="95" x2="106" y2="95" stroke="#ffffff" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        <line x1="96" y1="110" x2="104" y2="110" stroke="#ffffff" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        <line x1="96" y1="125" x2="104" y2="125" stroke="#ffffff" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
        <line x1="94" y1="140" x2="106" y2="140" stroke="#ffffff" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

        {/* Curved arms extending from figure */}
        <path
          d="M82 110 C65 100, 50 115, 48 130"
          stroke="url(#purpleGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M118 110 C135 100, 150 115, 152 130"
          stroke="url(#purpleGrad)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <div
          style={{
            fontSize: size * 0.35,
            fontWeight: 700,
            color: textColor,
            letterSpacing: size * 0.02,
            lineHeight: 1,
          }}
        >
          curetopia
        </div>
      )}
    </div>
  );
};

import React from "react";

/**
 * Curetopia logo — white SVG icon (no text)
 */
export const CuretopiaLogo: React.FC<{
  size?: number;
}> = ({ size = 120 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="100"
        cy="108"
        r="82"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        opacity="0.9"
      />

      {/* Blue-white teardrop at top */}
      <path
        d="M100 10 C100 10, 88 30, 88 38 C88 45, 93 50, 100 50 C107 50, 112 45, 112 38 C112 30, 100 10, 100 10Z"
        fill="#ffffff"
        opacity="0.95"
      />

      {/* Stylized figure/DNA — body */}
      <path
        d="M100 65 C100 65, 80 90, 70 120 C65 135, 72 155, 85 165 C90 168, 95 170, 100 170 C105 170, 110 168, 115 165 C128 155, 135 135, 130 120 C120 90, 100 65, 100 65Z"
        fill="#ffffff"
        opacity="0.9"
      />

      {/* Inner DNA helix strands */}
      <path
        d="M92 85 C88 100, 95 110, 100 118 C105 126, 112 136, 108 150"
        stroke="#0D0019"
        strokeWidth="2.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M108 85 C112 100, 105 110, 100 118 C95 126, 88 136, 92 150"
        stroke="#0D0019"
        strokeWidth="2.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* Cross rungs of DNA */}
      <line x1="94" y1="95" x2="106" y2="95" stroke="#0D0019" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      <line x1="96" y1="110" x2="104" y2="110" stroke="#0D0019" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      <line x1="96" y1="125" x2="104" y2="125" stroke="#0D0019" strokeWidth="2" opacity="0.35" strokeLinecap="round" />
      <line x1="94" y1="140" x2="106" y2="140" stroke="#0D0019" strokeWidth="2" opacity="0.35" strokeLinecap="round" />

      {/* Curved arms extending from figure */}
      <path
        d="M82 110 C65 100, 50 115, 48 130"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M118 110 C135 100, 150 115, 152 130"
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
};

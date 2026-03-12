import React from 'react';

export const RemotionLogo: React.FC<{size?: number}> = ({size = 65}) => {
	return (
		<svg
			viewBox="0 0 120 120"
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient
					id="remotionGrad"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					<stop offset="0%" stopColor="#0B84F3" />
					<stop offset="100%" stopColor="#6C47FF" />
				</linearGradient>
				<filter id="logoGlow">
					<feGaussianBlur stdDeviation="3" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<path
				d="M 25 15 C 22 10 28 6 32 10 L 100 55 C 105 58 105 62 100 65 L 32 110 C 28 114 22 110 25 105 Z"
				fill="url(#remotionGrad)"
				filter="url(#logoGlow)"
			/>
		</svg>
	);
};

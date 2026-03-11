import React from 'react';
import {AbsoluteFill} from 'remotion';

export const GridBackground: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: '#FFFFFF'}}>
			<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<pattern
						id="grid"
						width="60"
						height="60"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 60 0 L 0 0 0 60"
							fill="none"
							stroke="#E8E8E8"
							strokeWidth="0.8"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid)" />
			</svg>
		</AbsoluteFill>
	);
};

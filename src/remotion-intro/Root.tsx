import React from 'react';
import {Composition} from 'remotion';
import {Intro} from './Intro';

export const IntroRoot: React.FC = () => {
	return (
		<Composition
			id="RemotionIntro"
			component={Intro}
			durationInFrames={300}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
};

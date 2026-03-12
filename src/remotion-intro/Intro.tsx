import React, {useMemo} from 'react';
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from 'remotion';
import {interpolate as flubberInterpolate} from 'flubber';
import {SHAPES, LETTERS, COLORS} from './paths';
import {GridBackground} from './GridBackground';
import {RemotionLogo} from './RemotionLogo';

const COUNT = 8;
const SPACING = 90;
const SHAPE_SIZE = 70;

// Scene timing (frames at 30fps, total 300 = 10 seconds)
const MORPH_START = 75;
const MORPH_STAGGER = 5;
const LOGO_ARRIVE = 165;
const WIPE_START = 215;

// Ghost trail config
const GHOST_OFFSETS = [3, 7, 11];
const GHOST_ALPHAS = [0.22, 0.12, 0.06];

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, width, height} = useVideoConfig();

	const baseX = width / 2 - ((COUNT - 1) * SPACING) / 2;
	const baseY = height / 2;

	// Pre-compute flubber morph interpolators (stable reference)
	const morphers = useMemo(
		() =>
			SHAPES.map((s, i) =>
				flubberInterpolate(s, LETTERS[i], {maxSegmentLength: 10})
			),
		[]
	);

	// --- Logo position ---
	const logoRestX = baseX - 75;

	// Scene 3: arrive from left
	const arriveSpring = spring({
		frame: frame - LOGO_ARRIVE,
		fps,
		config: {damping: 14, stiffness: 80},
	});
	const logoArriveX = interpolate(arriveSpring, [0, 1], [-200, logoRestX], {
		extrapolateRight: 'clamp',
	});

	// Scene 3: 360° spin after snap
	const spinSpring = spring({
		frame: frame - LOGO_ARRIVE - 12,
		fps,
		config: {damping: 14, stiffness: 50},
	});
	const logoSpin = interpolate(spinSpring, [0, 1], [0, 360], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Scene 4: slow wipe across screen
	const wipeSpring = spring({
		frame: frame - WIPE_START,
		fps,
		config: {damping: 300, stiffness: 400},
	});
	const logoWipeTarget = width + 200;
	const logoWipeX = interpolate(
		wipeSpring,
		[0, 1],
		[logoRestX, logoWipeTarget],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}
	);

	const showLogo = frame >= LOGO_ARRIVE;
	const logoX = frame >= WIPE_START ? logoWipeX : logoArriveX;

	// --- Helper: compute element state at a given frame ---
	const getElementState = (i: number, f: number) => {
		const delay = i * MORPH_STAGGER;

		// Scene 1: breathing
		const isBefore = f < MORPH_START;
		const breatheY = isBefore ? Math.sin(f * 0.06 + i * 0.8) * 6 : 0;
		const breatheScale = isBefore
			? 1 + Math.sin(f * 0.05 + i * 0.6) * 0.07
			: 1;

		// Scene 2: jump
		const jumpSpr = spring({
			frame: f - MORPH_START - delay,
			fps,
			config: {damping: 14, stiffness: 120, mass: 0.8},
		});
		const jumpY = interpolate(jumpSpr, [0, 0.35, 1], [0, -190, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		// Scene 2: spin 180°
		const spinDeg = interpolate(jumpSpr, [0, 1], [0, 180], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});

		// Scene 2: morph
		const morphSpr = spring({
			frame: f - MORPH_START - delay - 6,
			fps,
			config: {damping: 14, stiffness: 80},
		});
		const morphT = Math.max(0, Math.min(1, morphSpr));

		let path: string;
		if (morphT <= 0) path = SHAPES[i];
		else if (morphT >= 1) path = LETTERS[i];
		else path = morphers[i](morphT);

		return {breatheY, breatheScale, jumpY, spinDeg, morphT, path};
	};

	// --- Render each element ---
	const elements = Array.from({length: COUNT}, (_, i) => {
		const x = baseX + i * SPACING;
		const state = getElementState(i, frame);

		// Scene 4: vanish when logo passes
		const letterCenterX = x + SHAPE_SIZE / 2;
		const vanishT =
			frame >= WIPE_START
				? interpolate(logoX, [letterCenterX - 50, letterCenterX], [0, 1], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					})
				: 0;
		const vanishScale = interpolate(vanishT, [0, 1], [1, 0]);
		const vanishOpacity = interpolate(vanishT, [0, 1], [1, 0]);

		// Final computed values
		const isPreMorph = frame < MORPH_START;
		const yOffset = isPreMorph ? state.breatheY : state.jumpY;
		const scale =
			(isPreMorph ? state.breatheScale : 1) *
			(frame >= WIPE_START ? vanishScale : 1);
		const rotation = isPreMorph ? 0 : state.spinDeg;
		const opacity = frame >= WIPE_START ? vanishOpacity : 1;

		// Ghost trails (only during jump)
		const isJumping =
			frame >= MORPH_START &&
			frame < MORPH_START + 50 + i * MORPH_STAGGER;
		const trails: {y: number; path: string; opacity: number; rot: number}[] =
			[];
		if (isJumping) {
			GHOST_OFFSETS.forEach((offset, t) => {
				const gf = frame - offset;
				if (gf < MORPH_START) return;
				const gs = getElementState(i, gf);
				trails.push({
					y: gs.jumpY,
					path: gs.path,
					opacity: GHOST_ALPHAS[t],
					rot: gs.spinDeg,
				});
			});
		}

		return (
			<React.Fragment key={i}>
				{/* Ghost trails */}
				{trails.map((trail, t) => (
					<div
						key={`ghost-${t}`}
						style={{
							position: 'absolute',
							left: x,
							top: baseY + trail.y,
							transform: `translate(-50%, -50%) rotate(${trail.rot}deg)`,
							opacity: trail.opacity,
							pointerEvents: 'none',
						}}
					>
						<svg
							width={SHAPE_SIZE}
							height={SHAPE_SIZE}
							viewBox="0 0 100 100"
						>
							<path d={trail.path} fill={COLORS[i]} />
						</svg>
					</div>
				))}

				{/* Main shape / letter */}
				<div
					style={{
						position: 'absolute',
						left: x,
						top: baseY + yOffset,
						transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
						opacity,
						willChange: 'transform, opacity',
					}}
				>
					<svg
						width={SHAPE_SIZE}
						height={SHAPE_SIZE}
						viewBox="0 0 100 100"
					>
						<path d={state.path} fill={COLORS[i]} />
					</svg>
				</div>
			</React.Fragment>
		);
	});

	return (
		<AbsoluteFill>
			<GridBackground />

			{/* Shape / Letter elements */}
			{elements}

			{/* Remotion Logo */}
			{showLogo && (
				<div
					style={{
						position: 'absolute',
						left: logoX,
						top: baseY,
						transform: `translate(-50%, -50%) rotate(${logoSpin}deg)`,
						willChange: 'transform',
					}}
				>
					<RemotionLogo size={65} />
				</div>
			)}
		</AbsoluteFill>
	);
};

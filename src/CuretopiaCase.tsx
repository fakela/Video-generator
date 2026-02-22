import React from "react";
import { AbsoluteFill, Audio } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { flip } from "@remotion/transitions/flip";
import { clockWipe } from "@remotion/transitions/clock-wipe";

import { Scene1Title } from "./scenes/Scene1Title";
import { Scene2Scale } from "./scenes/Scene2Scale";
import { Scene3Affected } from "./scenes/Scene3Affected";
import { Scene4TreatmentGap } from "./scenes/Scene4TreatmentGap";
import { Scene5Market } from "./scenes/Scene5Market";
import { Scene6BigPharma } from "./scenes/Scene6BigPharma";
import { Scene7Introducing } from "./scenes/Scene7Introducing";
import { Scene8HowItWorks } from "./scenes/Scene8HowItWorks";
import { Scene9Step1 } from "./scenes/Scene9Step1";
import { Scene10Step2 } from "./scenes/Scene10Step2";
import { Scene11Step3 } from "./scenes/Scene11Step3";
import { Scene12Step4 } from "./scenes/Scene12Step4";
import { Scene13Step5 } from "./scenes/Scene13Step5";
import { Scene14Community } from "./scenes/Scene14Community";
import { Scene15AARS2 } from "./scenes/Scene15AARS2";
import { Scene16CostGap } from "./scenes/Scene16CostGap";
import { Scene17Result1 } from "./scenes/Scene17Result1";
import { Scene18Result2 } from "./scenes/Scene18Result2";
import { Scene19Result3 } from "./scenes/Scene19Result3";
import { Scene20Result4 } from "./scenes/Scene20Result4";
import { Scene21Raise } from "./scenes/Scene21Raise";
import { Scene22Contributors } from "./scenes/Scene22Contributors";
import { Scene23Pipeline } from "./scenes/Scene23Pipeline";
import { Scene24Opportunity } from "./scenes/Scene24Opportunity";
import { Scene25CTA } from "./scenes/Scene25CTA";

const audio = require("../nastelbom-corporate.mp3");

const t = (d = 18) => linearTiming({ durationInFrames: d });

export const CuretopiaCase: React.FC = () => {
  return (
    <AbsoluteFill>
      <Audio src={audio} volume={0.4} />
      <TransitionSeries>
        {/* Scene 1 — TITLE */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene1Title />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 2 — SCALE */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene2Scale />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={clockWipe()} timing={t(20)} />

        {/* Scene 3 — AFFECTED */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene3Affected />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 4 — TREATMENT GAP */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene4TreatmentGap />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(22)} />

        {/* Scene 5 — MARKET */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene5Market />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 6 — BIG PHARMA */}
        <TransitionSeries.Sequence durationInFrames={170}>
          <Scene6BigPharma />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={clockWipe()} timing={t(20)} />

        {/* Scene 7 — INTRODUCING */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene7Introducing />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 8 — HOW IT WORKS */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene8HowItWorks />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* Scene 9 — STEP 1 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene9Step1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* Scene 10 — STEP 2 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene10Step2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* Scene 11 — STEP 3 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene11Step3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* Scene 12 — STEP 4 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene12Step4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* Scene 13 — STEP 5 */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene13Step5 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={clockWipe()} timing={t(20)} />

        {/* Scene 14 — COMMUNITY */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene14Community />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={flip()} timing={t(20)} />

        {/* Scene 15 — AARS2 */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene15AARS2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 16 — COST GAP */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene16CostGap />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={clockWipe()} timing={t(20)} />

        {/* Scene 17 — RESULT 1 */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene17Result1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 18 — RESULT 2 */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene18Result2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 19 — RESULT 3 */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene19Result3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 20 — RESULT 4 */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene20Result4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={clockWipe()} timing={t(20)} />

        {/* Scene 21 — THE RAISE */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene21Raise />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 22 — CONTRIBUTORS */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene22Contributors />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 23 — PIPELINE */}
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene23Pipeline />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(22)} />

        {/* Scene 24 — OPPORTUNITY */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene24Opportunity />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={flip()} timing={t(22)} />

        {/* Scene 25 — CTA */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene25CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

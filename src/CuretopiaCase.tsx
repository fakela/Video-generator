import React from "react";
import { AbsoluteFill, Audio } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";

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
import { SceneStep6PatientFamilies } from "./scenes/SceneStep6PatientFamilies";
import { SceneStep7Revenue } from "./scenes/SceneStep7Revenue";
import { Scene14Community } from "./scenes/Scene14Community";
import { Scene15AARS2 } from "./scenes/Scene15AARS2";
import { ScenePerlara } from "./scenes/ScenePerlara";
import { Scene16CostGap } from "./scenes/Scene16CostGap";
import { SceneResultsIntro } from "./scenes/SceneResultsIntro";
import { Scene17Result1 } from "./scenes/Scene17Result1";
import { Scene18Result2 } from "./scenes/Scene18Result2";
import { Scene20Result4 } from "./scenes/Scene20Result4";
import { SceneSpinoutsIntro } from "./scenes/SceneSpinoutsIntro";
import { SceneProofOfCuresModel } from "./scenes/SceneProofOfCuresModel";
import { SceneProofOfCuresLive } from "./scenes/SceneProofOfCuresLive";
import { SceneRaptor } from "./scenes/SceneRaptor";
import { SceneSasha } from "./scenes/SceneSasha";
import { SceneReceipts } from "./scenes/SceneReceipts";
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
        {/* ═══ ACT 1: THE PROBLEM ═══ */}

        {/* Scene 1 — TITLE */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene1Title />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* Scene 2 — SCALE */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene2Scale />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(20)} />

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
        <TransitionSeries.Transition presentation={wipe()} timing={t(22)} />

        {/* ═══ ACT 2: THE SOLUTION ═══ */}

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
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* STEP 6 — PATIENT FAMILIES */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <SceneStep6PatientFamilies />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(15)} />

        {/* STEP 7 — REVENUE FLOWS BACK */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <SceneStep7Revenue />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe()} timing={t(22)} />

        {/* ═══ ACT 3: REAL-WORLD PROOF — AARS2 ═══ */}

        {/* COMMUNITY MEDICINE. ONCHAIN. */}
        <TransitionSeries.Sequence durationInFrames={90}>
          <Scene14Community />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(20)} />

        {/* PROJECT 001 — AARS2 */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene15AARS2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* PERLARA — YEAST-AVATAR DRUG SCREENING */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <ScenePerlara />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* COST GAP */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene16CostGap />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe()} timing={t(22)} />

        {/* ═══ ACT 4: THE RESULTS ═══ */}

        {/* RESULTS INTRO */}
        <TransitionSeries.Sequence durationInFrames={80}>
          <SceneResultsIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* 2 DRUG CANDIDATES */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene17Result1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* PROVISIONAL PATENT */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene18Result2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* 28 DRUG HITS / 84K TESTS */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene20Result4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe()} timing={t(22)} />

        {/* ═══ ACT 5: PROOF OF CURES ═══ */}

        {/* PROOF OF CURES — THE PROBLEM */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <SceneSpinoutsIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* PROOF OF CURES — THE MODEL */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <SceneProofOfCuresModel />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* PROOF OF CURES — LIVE IMPLEMENTATIONS */}
        <TransitionSeries.Sequence durationInFrames={110}>
          <SceneProofOfCuresLive />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* $RAPTOR → RAPTORCO */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <SceneRaptor />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* $SASHA — ONE PATIENT, ONE MISSION */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <SceneSasha />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe()} timing={t(22)} />

        {/* ═══ ACT 6: THE RECEIPTS ═══ */}

        {/* THE RECEIPTS */}
        <TransitionSeries.Sequence durationInFrames={140}>
          <SceneReceipts />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* $1.77M RAISE */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene21Raise />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* 1,000+ PIONEERS */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene22Contributors />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t()} />

        {/* 10 DISEASE PROGRAMS */}
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene23Pipeline />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(22)} />

        {/* ═══ ACT 7: FINALE ═══ */}

        {/* THE OPPORTUNITY */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene24Opportunity />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t(22)} />

        {/* CTA */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Scene25CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

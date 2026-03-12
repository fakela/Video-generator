import React from "react";
import { AbsoluteFill, Audio } from "remotion";
import { TransitionSeries } from "@remotion/transitions";
import { springTiming } from "@remotion/transitions";
import { none } from "@remotion/transitions/none";
import { Scene01ColdOpen } from "./scenes/Scene01ColdOpen";
import { Scene02Scale } from "./scenes/Scene02Scale";
import { Scene03TreatmentGap } from "./scenes/Scene03TreatmentGap";
import { Scene04BigPharma } from "./scenes/Scene04BigPharma";
import { Scene04bWeDontBackDown } from "./scenes/Scene04bWeDontBackDown";
import { Scene05Introducing } from "./scenes/Scene05Introducing";
import { Scene06ModelOverview } from "./scenes/Scene06ModelOverview";
import { Scene07StepsRapidFire } from "./scenes/Scene07StepsRapidFire";
import { Scene08AARS2 } from "./scenes/Scene08AARS2";
import { Scene09DrugScreen } from "./scenes/Scene09DrugScreen";
import { Scene09BBridge } from "./scenes/Scene09BBridge";
import { Scene10ProofOfCures } from "./scenes/Scene10ProofOfCures";
import { Scene11RaptorSasha } from "./scenes/Scene11RaptorSasha";
import { Scene12Receipts } from "./scenes/Scene12Receipts";
import { Scene13CTA } from "./scenes/Scene13CTA";
import { CosmicBackground } from "./components/SceneWrapper";

const audio = require("../nastelbom-corporate.mp3");

// Within-act transition — smooth crossfade, no bounce
const smooth = () =>
  springTiming({ config: { damping: 28, stiffness: 50 }, durationInFrames: 30 });

// Between-act transition — slower, more deliberate
const actBreak = () =>
  springTiming({ config: { damping: 35, stiffness: 35 }, durationInFrames: 42 });

export const CuretopiaCase: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#080818" }}>
      <CosmicBackground />
      <Audio src={audio} volume={0.4} />
      <TransitionSeries>

        {/* ═══ ACT 1: THE PROBLEM ═══ */}

        {/* Scene 01 — COLD OPEN: "Too rare." */}
        <TransitionSeries.Sequence durationInFrames={270}>
          <Scene01ColdOpen />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 02 — SCALE: 800M counter */}
        <TransitionSeries.Sequence durationInFrames={255}>
          <Scene02Scale />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 03 — TREATMENT GAP: 95% slams in */}
        <TransitionSeries.Sequence durationInFrames={315}>
          <Scene03TreatmentGap />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 04 — BIG PHARMA: "So they walked away." */}
        <TransitionSeries.Sequence durationInFrames={345}>
          <Scene04BigPharma />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 04b — WE DON'T BACK DOWN: emotional peak of Act 1 */}
        <TransitionSeries.Sequence durationInFrames={300}>
          <Scene04bWeDontBackDown />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={actBreak()} />

        {/* ═══ ACT 2: THE SOLUTION ═══ */}

        {/* Scene 05 — INTRODUCING: Logo birth from light */}
        <TransitionSeries.Sequence durationInFrames={255}>
          <Scene05Introducing />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 06 — MODEL OVERVIEW: 7 steps diagram (all at once) */}
        <TransitionSeries.Sequence durationInFrames={245}>
          <Scene06ModelOverview />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={actBreak()} />

        {/* Scene 07 — STEPS RAPID FIRE: 7 steps hard cuts */}
        <TransitionSeries.Sequence durationInFrames={655}>
          <Scene07StepsRapidFire />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={actBreak()} />

        {/* ═══ ACT 3: REAL-WORLD PROOF ═══ */}

        {/* Scene 08 — AARS2: PROJECT 001 */}
        <TransitionSeries.Sequence durationInFrames={315}>
          <Scene08AARS2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 09 — DRUG SCREEN: 84,000 compounds */}
        <TransitionSeries.Sequence durationInFrames={345}>
          <Scene09DrugScreen />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 09B — BRIDGE: "So we built a model." */}
        <TransitionSeries.Sequence durationInFrames={315}>
          <Scene09BBridge />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={actBreak()} />

        {/* ═══ ACT 4: PROOF OF CURES ═══ */}

        {/* Scene 10 — PROOF OF CURES: PoW → PoS → PoC + pill cards */}
        <TransitionSeries.Sequence durationInFrames={345}>
          <Scene10ProofOfCures />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 11 — RAPTOR + SASHA: split screen */}
        <TransitionSeries.Sequence durationInFrames={375}>
          <Scene11RaptorSasha />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={actBreak()} />

        {/* ═══ ACT 5: THE RECEIPTS + FINALE ═══ */}

        {/* Scene 12 — RECEIPTS: "Not promises. Proof." */}
        <TransitionSeries.Sequence durationInFrames={315}>
          <Scene12Receipts />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={none()} timing={smooth()} />

        {/* Scene 13 — CTA: "Join the mission." → fade to black */}
        <TransitionSeries.Sequence durationInFrames={360}>
          <Scene13CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

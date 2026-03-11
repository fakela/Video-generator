import React from "react";
import { Composition } from "remotion";
import { CuretopiaCase } from "./CuretopiaCase";
import { Intro } from "./remotion-intro/Intro";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="CuretopiaCase"
        component={CuretopiaCase}
        durationInFrames={4135}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="RemotionIntro"
        component={Intro}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

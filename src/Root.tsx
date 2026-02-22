import React from "react";
import { Composition } from "remotion";
import { CuretopiaCase } from "./CuretopiaCase";

export const Root: React.FC = () => {
  return (
    <Composition
      id="CuretopiaCase"
      component={CuretopiaCase}
      durationInFrames={3500}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

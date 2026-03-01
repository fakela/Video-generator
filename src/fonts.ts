import { loadFont } from "@remotion/google-fonts/Poppins";
import { staticFile } from "remotion";
import { continueRender, delayRender } from "remotion";

export const { fontFamily: poppins } = loadFont("normal", {
  weights: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// LD TechD — local font loaded via @font-face
const ldTechDSrc = staticFile("LD_TechD-Regular.ttf");

const waitForFont = delayRender();
const ldTechDFontFace = new FontFace("LD TechD", `url(${ldTechDSrc})`);
ldTechDFontFace
  .load()
  .then((font) => {
    (document.fonts as any).add(font);
    continueRender(waitForFont);
  })
  .catch((err) => {
    console.error("Failed to load LD TechD font:", err);
    continueRender(waitForFont);
  });

export const ldTechD = "LD TechD";

import { loadFont } from "@remotion/google-fonts/Poppins";

export const { fontFamily: poppins } = loadFont("normal", {
  weights: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

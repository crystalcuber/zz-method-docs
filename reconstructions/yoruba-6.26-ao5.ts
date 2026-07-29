import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "3GEIibMXpic";
export const RECONS: Reconstruction[] = [
  {
    scramble: "R D2 U B2 R2 D2 U' L2 D2 B' L D R' U L R' U B' D'",
    solution:
      "x2 y' // inspection\nB' U' R2 F' R' B2 L' R D' // EOCross\nR U2 R2' U' R2 // BR\nU2 R' U' L U L' // BL\nD' L' U L D // FR\nU2 L' U' L U L' U' L // FL\nU' U r U2 R2' F R F' R U2 r' L' U' L U' L' U2 L U // ZBLL",
    time: "(7.14)",
    movecount: 52,
    reconstructor: "yoruba",
    videoTimestamp: 0,
    eoStepOrientation: ["x2", "y'"],
    notes: `Critique: the planned EOCross solution was OK, but I didn't plan the fingertricks properly.
Execution should have been:
- do B' U' R2 F' R' regripless (from right thumb on bottom, left hand in homegrip) 
- regrip with right hand to do B2 like D2,
- then B2 L' R D' regripless.`
  },
  {
    scramble: "R2 D' U2 R2 B2 D' B2 U2 L B' L' R2 U' L' B L2 D R'",
    solution:
      "y' // inspection\n(F B') R F R' D R2 D2 // EOCross\nU R U2 R2' U' R // BR\nU L' U L U' L U L' // BL\n// here I missed a multislot: after U L' U L U' I should have done L U' L2' U' L2 U' L' to have both FL and BL solved.\nL U2 L2' U' L2 U' L' // FL\nR U' R' U R' D' R U R' D R // FR\nU R' U' R U' R U2 R2 U' R2 U' R2 U R U' // ZBLL",
    time: "6.61",
    movecount: 55,
    reconstructor: "yoruba",
    videoTimestamp: 11,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "R2 U2 R U2 B2 R' F2 R D F2 L' U2 B' D B U' F U' L'",
    solution:
      "y // inspection\nB' R D F' D' R' L2 D' L' U L U' R2 // XEOCross\nU2 R' U' R U L U' L' // BL\nU R' U2 R2 U R' // FR\nU2 R' U R U' R' U' R // BR\nU' R' D' R U' R' D R2 U2 R' U R U R' U' // ZBLL",
    time: "6.03",
    movecount: 50,
    reconstructor: "yoruba",
    videoTimestamp: 21,
    eoStepOrientation: ["y"],
  },
  {
    scramble: "L U F' D2 L F2 D2 B2 R2 U2 D R F' L F2 D R'",
    solution:
      "y' // inspection\nB' L2' F2 R2 U F // EOCross\nU' L' U L2 U' L' // BL\nU R U' R2 U R // BR\nD' L' U L U' L' U L D // FR (questionable pair choice)\nL' U L U L' U' L U2 L' U L // EJLS (OLS for the twisted corner F2L case)\nR U R' U' R' F R2 U' R' U' R U R' F' U' // PLL",
    time: "6.06",
    movecount: 53,
    reconstructor: "yoruba",
    videoTimestamp: 29,
    eoStepOrientation: ["y'"],
  },
  {
    scramble: "D' F' R' L2 B' D2 L' U2 R' B' D' F L2 F2 B U2 B L2 B2",
    solution:
      "z2 // inspection\nB R' U' L' F D2 R' L' // EOCross\nR U R' U L U L' // BL\nL' U' L R U2 R2' U R // BR (Didn't do the 3 move pair because I'm blind)\nL' U L U2 L' U' L // FL\nR U2 R' U R U' R' // FR\nF R U' R' U R U R' U R U' R' F' U2 // ZBLL",
    time: "(5.89)",
    movecount: 51,
    reconstructor: "yoruba",
    videoTimestamp: 39,
    eoStepOrientation: ["z2"],
  },
];

import { Reconstruction } from "../types";

export const YOUTUBE_VIDEO_ID = "bonv52U3LHg";
export const RECONS: Reconstruction[] = [
  {
    scramble: "R F U' B' U' L' F' D' F2 B' R' F2 D' B2 U L2 B2 D2",
    solution: `x' z2 // inspection
r' D' F2 U2 F' L U2 R2 D' // EOCross (EOCross done at 1.47)
R U' R' U R U' R' L U' L' // 1st
D R U' R2' U R D' // 2nd + 3rd
L' U L U2' L' U L // 4th (F2L done at 3.69)
U' R U2' R' U' R U' R' U2 // ZBLL`,
    time: "6.54",
    movecount: 42,
    reconstructor: "Luna",
    videoTimestamp: 0,
    eoStepOrientation: ["z2"],
    notes: `Splits: 
- EOCross+1: 2.36
- ZZF2L: 1.33
- ZBLL: 2.82
Alternate solutions:
- XEOCross: r' D' F2 U2 F' L R U2 R2 D'
- Optionally, XEOCross+1: r' D' F2 U2 F' L R U2 R2 L' U' L D' then L' U L`,
  },
  {
    scramble: "D' B2 U' B2 L2 F2 R2 U R2 B2 D' B' R B2 D L2 D U",
    solution: `y' x // inspection
r' F' U R2' F R2 D U L2' // EOCross (EOCross done at 1.21)
R U' R' // 1st
R' U R D L' U L D' // 2nd
L U' L' // 3rd
R' U2' R U R' U' R // 4th (F2L done at 3.21)
U' U U F R U R' U' R U R' F R' F' R U' F' U2' // ZBLL`,
    time: "6.53",
    movecount: 48,
    reconstructor: "Luna",
    videoTimestamp: 14,
    eoStepOrientation: ["y'"],
    notes: `Splits:
- EOCross+1: 1.76
- ZZF2L: 1.45
- ZBLL: 3.32
Alternate EOCross: y2 R F2 U' F D2 L' R D'`,
  },
  {
    scramble: "U B2 L2 R2 D' U2 L2 D F2 R2 L U' F U2 R F L' D R2",
    solution: `y2 // inspection
D B2 U' R' F D2 R' // EOCross (EOCross done at 1.13)
U2 R' U R U' L U L' // 1st
U2 R' U2' R U R' U' R // 2nd
U2 D R U' R' D' // 3rd
R U R' U R U R' // 4th (F2L done at 3.91)
U R U R' U R U2' R' // OCLL
U' R2 U R' U R' U' R U' R2 U' D R' U R D' U // PLL`,
    time: "(6.37)",
    movecount: 61,
    reconstructor: "Luna",
    videoTimestamp: 28,
    eoStepOrientation: ["y2"],
    notes: `Splits:
- EOCross+1: 1.91
- ZZF2L: 2.00
- LL: 2.46
Doing BR as your first pair gives a slight optimization, because you can cancel into solving the BR slot: D B2 U' R' F D2, and then R2' U2 R U R' U' R for an EOCross+1.
Furthermore, missed a free pair on the 3rd one, and also opted to do Sune into PLL instead of doing a ZBLL as a spur of the moment decision, which could have made the solve faster.`,
  },
  {
    scramble: "U F2 L F2 U' L2 D2 B2 R2 U L F R U L2 D U' F U",
    solution: `x2 // inspection
L B L' F U F R B2 D2' // EOCross (EOCross done at 1.22)
R' U2' R2 U R' // 1st
U' R' U R U R' U' R // 2nd
U' L' U L U' L' U' L // 3rd
U' L' U2 L2 U L2' U L // 4th (F2L done at 3.78)
U U2 R' U' R2 D r' U2 r D' R2 U R U R' U2 R U' // ZBLL`,
    time: "(6.83)",
    movecount: 56,
    reconstructor: "Luna",
    videoTimestamp: 37,
    eoStepOrientation: ["x2"],
    notes: `Splits:
- EOCross+1: 1.67
- ZZF2L: 2.11
- ZBLL: 3.05
Missed an easy XEOcross that was z2 away from the chosen orientation: F R L2 D F' D2 R2' U R
Unfortunate lockup on this solve prevented me from getting the 6.45 best possible average`,
  },
];

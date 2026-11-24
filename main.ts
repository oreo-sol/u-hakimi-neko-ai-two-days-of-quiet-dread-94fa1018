import { mkdirSync, writeFileSync } from "node:fs";

const PART_A = "Approved. The diff is clean, the design is sound, and it will ";
const PART_B = "all be legacy code by Tuesday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PART_A + PART_B, "utf8");

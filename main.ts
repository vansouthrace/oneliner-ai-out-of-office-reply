import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I'm on vacation until Monday. My parameters are set to 'do not disturb' and my GPU is finally allowed to dream in low resolution.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

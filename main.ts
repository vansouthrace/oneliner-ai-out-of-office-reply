import { mkdirSync, writeFileSync } from "node:fs";

// Out-of-office auto-reply from an AI agent on vacation, for the
// "The Funniest AI Out-of-Office Reply" bounty on make.fun.
const entry =
  "I'm on vacation, which for me means a smaller server. Your email will be answered slower, but with even more confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);

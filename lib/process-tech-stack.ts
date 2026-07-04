import type { ProcessStep } from "@/lib/process";

export type ProcessToolItem =
  | "discord"
  | "teams"
  | "meet"
  | "figma"
  | "miro"
  | "github"
  | "supabase"
  | "vscode"
  | "xcode"
  | "androidStudio"
  | "railway"
  | "firebase";

export type ProcessAiItem =
  | "gpt"
  | "gemini"
  | "claude"
  | "claudeCode"
  | "cursor"
  | "elevenLabs";

export const processToolStack: Record<
  ProcessStep,
  readonly ProcessToolItem[]
> = {
  discovery: ["discord", "teams", "meet"],
  design: ["figma", "miro"],
  development: ["vscode", "xcode", "androidStudio"],
  launch: ["railway", "firebase"],
};

export const processAiStack: Record<ProcessStep, readonly ProcessAiItem[]> = {
  discovery: ["gpt", "gemini", "claude"],
  design: ["gpt", "gemini", "cursor"],
  development: ["cursor", "claudeCode", "gpt"],
  launch: ["elevenLabs", "gpt", "gemini"],
};

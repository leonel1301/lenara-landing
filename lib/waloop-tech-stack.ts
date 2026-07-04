export type WaloopPlatform = "ios" | "android";

export type WaloopTechItem =
  | "swift"
  | "swiftui"
  | "kotlin"
  | "jetpackCompose"
  | "materialUi"
  | "firebase"
  | "supabase"
  | "goGin"
  | "railway";

/** Flat display order per platform — shared cloud/backend, platform-specific mobile. */
export const waloopTechStack: Record<WaloopPlatform, readonly WaloopTechItem[]> = {
  ios: ["swift", "swiftui", "firebase", "supabase", "goGin", "railway"],
  android: [
    "kotlin",
    "jetpackCompose",
    "materialUi",
    "firebase",
    "supabase",
    "goGin",
    "railway",
  ],
};

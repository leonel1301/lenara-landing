export const projectAreas = ["ios", "android", "web", "iot", "ai"] as const;

export type ProjectArea = (typeof projectAreas)[number];

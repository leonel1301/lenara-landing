export const processSteps = [
  "discovery",
  "design",
  "development",
  "launch",
] as const;
export type ProcessStep = (typeof processSteps)[number];

export function getProcessImagePath(step: ProcessStep) {
  return `/images/process/${step}.jpg`;
}

export const PERSONAL_HOMEPAGE_URL =
  "https://leonel-ortega-homepage.vercel.app/";

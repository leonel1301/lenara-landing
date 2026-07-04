export const processSteps = [
  "discovery",
  "design",
  "development",
  "launch",
] as const;
export type ProcessStep = (typeof processSteps)[number];

const processImageFiles: Record<ProcessStep, string> = {
  discovery: "Process_Discovery.png",
  design: "Process_Design.png",
  development: "Process_Development.png",
  launch: "Process_Launch.png",
};

export function getProcessImagePath(step: ProcessStep) {
  return `/images/process/${processImageFiles[step]}`;
}

export const PERSONAL_HOMEPAGE_URL =
  "https://leonel-ortega-homepage.vercel.app/";

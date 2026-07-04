export const serviceItems = ["mobile", "web", "cloud", "consulting"] as const;
export type ServiceItem = (typeof serviceItems)[number];

/** Display order on the dedicated Services page (strategy → delivery). */
export const servicePageOrder = [
  "consulting",
  "web",
  "mobile",
  "cloud",
] as const satisfies readonly ServiceItem[];

const serviceImageFiles: Record<ServiceItem, string> = {
  consulting: "Services_Consulting.png",
  web: "Services_Web.png",
  mobile: "Services_Mobile.png",
  cloud: "Services_Cloud.png",
};

export function getServiceImagePath(id: ServiceItem) {
  return `/images/services/${serviceImageFiles[id]}`;
}

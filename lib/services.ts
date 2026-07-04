export const serviceItems = ["mobile", "web", "cloud", "consulting"] as const;
export type ServiceItem = (typeof serviceItems)[number];

/** Display order on the dedicated Services page (strategy → delivery). */
export const servicePageOrder = [
  "consulting",
  "web",
  "mobile",
  "cloud",
] as const satisfies readonly ServiceItem[];

export function getServiceImagePath(id: ServiceItem) {
  return `/images/services/${id}.jpg`;
}

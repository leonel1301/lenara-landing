export const serviceItems = ["mobile", "web", "cloud", "consulting"] as const;
export type ServiceItem = (typeof serviceItems)[number];

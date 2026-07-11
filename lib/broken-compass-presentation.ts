export type BrokenCompassPresentationSlide = {
  id: string;
  src: string;
  titleKey:
    | "journey"
    | "moonlitForest"
    | "ruinedCity"
    | "snowPeaks"
    | "stormyCoast"
    | "sunlitForest"
    | "desertCrossing"
    | "mountainPass"
    | "havenDestination";
};

export const BROKEN_COMPASS_NIGHT_PRESENTATION = [
  {
    id: "journey",
    src: "/images/broken-compass/presentation/night/01-journey-key-art.png",
    titleKey: "journey",
  },
  {
    id: "moonlit-forest",
    src: "/images/broken-compass/presentation/night/02-moonlit-forest.png",
    titleKey: "moonlitForest",
  },
  {
    id: "ruined-city",
    src: "/images/broken-compass/presentation/night/03-ruined-city.png",
    titleKey: "ruinedCity",
  },
  {
    id: "snow-peaks",
    src: "/images/broken-compass/presentation/night/04-snow-peaks.png",
    titleKey: "snowPeaks",
  },
  {
    id: "stormy-coast",
    src: "/images/broken-compass/presentation/night/05-stormy-coast.png",
    titleKey: "stormyCoast",
  },
] as const satisfies readonly BrokenCompassPresentationSlide[];

export const BROKEN_COMPASS_DAY_PRESENTATION = [
  {
    id: "journey",
    src: "/images/broken-compass/presentation/day/01-journey-key-art.png",
    titleKey: "journey",
  },
  {
    id: "sunlit-forest",
    src: "/images/broken-compass/presentation/day/02-sunlit-forest.png",
    titleKey: "sunlitForest",
  },
  {
    id: "desert-crossing",
    src: "/images/broken-compass/presentation/day/03-desert-crossing.png",
    titleKey: "desertCrossing",
  },
  {
    id: "mountain-pass",
    src: "/images/broken-compass/presentation/day/04-mountain-pass.png",
    titleKey: "mountainPass",
  },
  {
    id: "haven-destination",
    src: "/images/broken-compass/presentation/day/05-haven-destination.png",
    titleKey: "havenDestination",
  },
] as const satisfies readonly BrokenCompassPresentationSlide[];

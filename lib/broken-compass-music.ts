export type BrokenCompassMusicTrack = {
  id: string;
  src: string;
  titleKey: "aMissingPiece";
};

export const BROKEN_COMPASS_MUSIC_TRACKS = [
  {
    id: "a-missing-piece",
    src: "/music/A_Missing_Piece_2026-07-11T192913.mp3",
    titleKey: "aMissingPiece",
  },
] as const satisfies readonly BrokenCompassMusicTrack[];

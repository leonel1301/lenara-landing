# Broken Compass — assets

Visual development pack for the Lenara Labs Our Apps presentation and in-game production.

## Structure

```
broken-compass/
├── presentation/
│   ├── night/     # Carousel art for dark mode (5 images)
│   └── day/       # Carousel art for light mode (5 images)
└── sprites/       # Game production assets (not shown in carousel)
    ├── protagonist-sprites.png
    ├── action-sprites.png
    ├── npc-sprites.png
    ├── biomes-tileset.png
    └── music-prompt-elevenlabs.txt
```

## Presentation

- **Night mode** uses `presentation/night/` — moody scenes aligned with the site dark theme.
- **Light mode** uses `presentation/day/` — warm daylight scenes aligned with the site light theme.
- The carousel and soundtrack panel colors follow the active site theme.

## Sprites

Production atlases for the game itself. These are not displayed in the marketing carousel.
Before engine import, clean the rasterized checkerboard background and slice frames on a fixed pixel grid.

## Audio

Soundtrack files live in `public/music/`. The web player uses the MP3; the WAV is kept as a master.

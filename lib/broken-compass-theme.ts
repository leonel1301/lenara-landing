export type BrokenCompassPanelTheme = {
  isDark: boolean;
  panel: string;
  panelShadow: string;
  imageGradient: string;
  border: string;
  slideLabel: string;
  navButton: string;
  dotActive: string;
  dotInactive: string;
  musicLabel: string;
  musicVisualizerBar: string;
  musicPlayButton: string;
  musicPlayIcon: string;
  musicTitle: string;
  musicTime: string;
  musicProgress: string;
};

export function getBrokenCompassPanelTheme(isDark: boolean): BrokenCompassPanelTheme {
  if (isDark) {
    return {
      isDark: true,
      panel: "bg-[#09131a]",
      panelShadow:
        "shadow-[0_24px_70px_-30px_color-mix(in_oklch,var(--primary)_35%,transparent)]",
      imageGradient: "from-[#09131a]",
      border: "border-white/10",
      slideLabel: "border-white/10 bg-black/55 text-white",
      navButton:
        "border-white/15 bg-black/55 text-white hover:bg-black/75",
      dotActive: "bg-[#e6ad59]",
      dotInactive: "bg-white/25 hover:bg-white/45",
      musicLabel: "text-[#f3d2a0]",
      musicVisualizerBar: "bg-[#e6ad59]/70",
      musicPlayButton:
        "border-[#e6ad59]/35 bg-[#e6ad59]/15 text-[#f3d2a0] hover:bg-[#e6ad59]/25",
      musicPlayIcon: "text-[#f3d2a0]",
      musicTitle: "text-white",
      musicTime: "text-white/45",
      musicProgress:
        "accent-[#e6ad59] bg-white/10 [background:linear-gradient(to_right,#e6ad59_0%,#e6ad59_var(--progress),rgba(255,255,255,0.12)_var(--progress),rgba(255,255,255,0.12)_100%)]",
    };
  }

  return {
    isDark: false,
    panel: "bg-[#eceae4]",
    panelShadow:
      "shadow-[0_24px_70px_-30px_color-mix(in_oklch,var(--primary)_22%,transparent)]",
    imageGradient: "from-[#eceae4]",
    border: "border-[#2c2d2e]/10",
    slideLabel: "border-[#2c2d2e]/10 bg-white/85 text-[#2c2d2e]",
    navButton:
      "border-[#2c2d2e]/12 bg-white/85 text-[#2c2d2e] hover:bg-white",
    dotActive: "bg-[#4256c8]",
    dotInactive: "bg-[#2c2d2e]/20 hover:bg-[#2c2d2e]/35",
    musicLabel: "text-[#4256c8]",
    musicVisualizerBar: "bg-[#4256c8]/75",
    musicPlayButton:
      "border-[#4256c8]/25 bg-[#eef1fb] text-[#4256c8] hover:bg-[#e3e9f8]",
    musicPlayIcon: "text-[#4256c8]",
    musicTitle: "text-[#2c2d2e]",
    musicTime: "text-[#6b6a66]",
    musicProgress:
      "accent-[#4256c8] bg-[#2c2d2e]/10 [background:linear-gradient(to_right,#4256c8_0%,#4256c8_var(--progress),rgba(44,45,46,0.12)_var(--progress),rgba(44,45,46,0.12)_100%)]",
  };
}

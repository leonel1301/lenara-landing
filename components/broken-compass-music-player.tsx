"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  getBrokenCompassPanelTheme,
  type BrokenCompassPanelTheme,
} from "@/lib/broken-compass-theme";
import { cn } from "@/lib/utils";

type Track = {
  id: string;
  src: string;
  title: string;
  description?: string;
};

type Props = {
  tracks: Track[];
  label: string;
  playLabel: string;
  pauseLabel: string;
  embedded?: boolean;
  panelTheme?: BrokenCompassPanelTheme;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function getProgressGradient(theme: BrokenCompassPanelTheme, progress: number) {
  if (theme.isDark) {
    return `linear-gradient(to right, #e6ad59 0%, #e6ad59 ${progress}%, rgba(255,255,255,0.12) ${progress}%, rgba(255,255,255,0.12) 100%)`;
  }

  return `linear-gradient(to right, #4256c8 0%, #4256c8 ${progress}%, rgba(44,45,46,0.12) ${progress}%, rgba(44,45,46,0.12) 100%)`;
}

export function BrokenCompassMusicPlayer({
  tracks,
  label,
  playLabel,
  pauseLabel,
  embedded = false,
  panelTheme = getBrokenCompassPanelTheme(true),
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeTrackId, setActiveTrackId] = useState(tracks[0]?.id ?? "");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const activeTrack =
    tracks.find((track) => track.id === activeTrackId) ?? tracks[0];
  const activeTrackSrc = activeTrack?.src;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !activeTrackSrc) return;

    audio.pause();
    audio.src = activeTrackSrc;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [activeTrackSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("play", onPlay);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("play", onPlay);
    };
  }, [activeTrackSrc]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const handleSeek = (value: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(duration)) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  if (!activeTrack) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const visualizer = !prefersReducedMotion ? (
    <div
      className={cn(
        "flex h-12 w-full items-end gap-[2px]",
        embedded && "-mx-4 -mb-4 mt-3 w-[calc(100%+2rem)] px-3 pb-3 pt-3",
      )}
      aria-hidden
    >
      {Array.from({ length: 48 }, (_, index) => (
        <motion.span
          key={index}
          animate={
            isPlaying
              ? {
                  height: ["18%", "100%", "32%", "78%", "18%"],
                }
              : { height: "18%" }
          }
          transition={
            isPlaying
              ? {
                  duration: 1 + (index % 7) * 0.07,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.025,
                }
              : { duration: 0.2 }
          }
          className={cn("min-w-0 flex-1 rounded-full", panelTheme.musicVisualizerBar)}
        />
      ))}
    </div>
  ) : null;

  return (
    <div
      aria-label={label}
      className={cn(
        embedded ? undefined : "space-y-4",
        !embedded &&
          cn(
            "rounded-lg border border-border p-4 shadow-[0_16px_40px_-24px_color-mix(in_oklch,var(--primary)_35%,transparent)]",
            panelTheme.panel,
          ),
      )}
    >
      <audio ref={audioRef} preload="metadata" />

      <div className={cn("space-y-3", embedded && "px-0")}>
        {tracks.length > 1 ? (
          <div className="flex flex-wrap gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrackId(track.id)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-xs font-medium transition",
                  track.id === activeTrack.id
                    ? cn(panelTheme.musicPlayButton, panelTheme.musicLabel)
                    : cn(panelTheme.border, panelTheme.musicTime, "bg-transparent"),
                )}
              >
                {track.title}
              </button>
            ))}
          </div>
        ) : null}

        <div className="flex items-start gap-3">
          <button
            type="button"
            aria-label={isPlaying ? pauseLabel : playLabel}
            onClick={togglePlayback}
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full border transition",
              panelTheme.musicPlayButton,
            )}
          >
            {isPlaying ? (
              <Pause className="size-5" aria-hidden />
            ) : (
              <Play className="ml-0.5 size-5" aria-hidden />
            )}
          </button>

          <div className="min-w-0 flex-1 space-y-2">
            <div>
              <p className={cn("text-sm font-semibold", panelTheme.musicTitle)}>
                {activeTrack.title}
              </p>
              {activeTrack.description && !embedded ? (
                <p className={cn("mt-1 text-sm leading-relaxed", panelTheme.musicTime)}>
                  {activeTrack.description}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={currentTime}
                onChange={(event) => handleSeek(Number(event.target.value))}
                aria-label={label}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full"
                style={{
                  background: getProgressGradient(panelTheme, progress),
                }}
              />
              <div
                className={cn(
                  "flex justify-between text-xs tabular-nums",
                  panelTheme.musicTime,
                )}
              >
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {!embedded ? visualizer : null}
      </div>

      {embedded ? visualizer : null}
    </div>
  );
}

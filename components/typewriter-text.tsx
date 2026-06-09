"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function TypewriterText({
  phrases,
  typingSpeed = 42,
  deletingSpeed = 24,
  pauseDuration = 2400,
}: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState(phrases[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), pauseDuration);
    return () => clearTimeout(timeout);
  }, [pauseDuration]);

  useEffect(() => {
    if (!started || phrases.length === 0) return;

    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [
    started,
    displayed,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span aria-live="polite" className="inline">
      {displayed}
      <span
        aria-hidden
        className="typewriter-cursor ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.08em] bg-primary"
      />
    </span>
  );
}

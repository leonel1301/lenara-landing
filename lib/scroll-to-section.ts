const PENDING_SECTION_SCROLL_KEY = "pending-section-scroll";

export function parseSectionHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return { path: href, sectionId: undefined };
  }

  return {
    path: href.slice(0, hashIndex) || "/",
    sectionId: href.slice(hashIndex + 1),
  };
}

export function requestSectionScroll(sectionId: string) {
  sessionStorage.setItem(PENDING_SECTION_SCROLL_KEY, sectionId);
}

export function consumePendingSectionScroll() {
  const sectionId = sessionStorage.getItem(PENDING_SECTION_SCROLL_KEY);
  if (sectionId) {
    sessionStorage.removeItem(PENDING_SECTION_SCROLL_KEY);
  }
  return sectionId;
}

type ScrollOptions = {
  block?: ScrollLogicalPosition;
  behavior?: ScrollBehavior;
};

export function scrollToSection(sectionId: string, options?: ScrollOptions) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  element.scrollIntoView({
    behavior:
      options?.behavior ?? (prefersReducedMotion ? "auto" : "smooth"),
    block: options?.block ?? "start",
  });

  const url = new URL(window.location.href);
  if (url.hash) {
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }
}

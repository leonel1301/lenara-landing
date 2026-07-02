import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Required: ~/package-lock.json makes Next infer the home dir as workspace root,
// which causes Turbopack to watch the entire home folder and hang the machine.
const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    const redirects = [];

    // Locale prefixes are never part of public URLs — collapse old /en and /es paths.
    redirects.push(
      { source: "/es", destination: "/", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/:path*", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    );

    const legacyMap: Array<[from: string, to: string]> = [
      ["/waloop", "/apps/waloop"],
      ["/waloop/privacy", "/apps/waloop/privacy"],
      ["/waloop/terms", "/apps/waloop/terms"],
      ["/waloop/faq", "/apps/waloop/faq"],
      ["/waloop/feedback", "/apps/waloop/feedback"],
      ["/apps/privacy", "/apps/waloop/privacy"],
      ["/apps/terms", "/apps/waloop/terms"],
      ["/apps/faq", "/apps/waloop/faq"],
      ["/apps/cards-reminder", "/apps/waloop"],
      ["/apps/cards-reminder/privacy", "/apps/waloop/privacy"],
      ["/apps/cards-reminder/terms", "/apps/waloop/terms"],
    ];

    for (const [from, to] of legacyMap) {
      redirects.push({ source: from, destination: to, permanent: true });
    }

    redirects.push({
      source: "/:path*",
      has: [{ type: "host" as const, value: "www.lenaralabs.com" }],
      destination: "https://lenaralabs.com/:path*",
      permanent: true,
    });

    return redirects;
  },
};

export default withNextIntl(nextConfig);

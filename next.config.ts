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
    // Legacy/stale URLs that search engines still have indexed under the old
    // structure. Map them to the current canonical paths with 308 redirects.
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

    // Cover the bare (canonical English) path plus both locale prefixes, since
    // older versions of the site used `localePrefix: "always"`.
    const localePrefixes = ["", "/en", "/es"] as const;
    const redirects = [];

    for (const prefix of localePrefixes) {
      const destPrefix = prefix === "/es" ? "/es" : "";
      for (const [from, to] of legacyMap) {
        redirects.push({
          source: `${prefix}${from}`,
          destination: `${destPrefix}${to}`,
          permanent: true,
        });
      }
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

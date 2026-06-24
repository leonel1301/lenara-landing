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
    const locales = ["en", "es"] as const;
    const legalPaths = ["privacy", "terms"] as const;
    const redirects = [];

    for (const locale of locales) {
      const prefix = locale === "en" ? "" : `/${locale}`;

      for (const legalPath of legalPaths) {
        redirects.push({
          source: `/${locale}/apps/cards-reminder/${legalPath}`,
          destination: `${prefix}/apps/waloop/${legalPath}`,
          permanent: true,
        });
      }
    }

    redirects.push(
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.lenaralabs.com" }],
        destination: "https://lenaralabs.com/:path*",
        permanent: true,
      },
    );

    return redirects;
  },
};

export default withNextIntl(nextConfig);

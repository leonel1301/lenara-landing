import { getTranslations } from "next-intl/server";

import { HeaderBrand } from "@/components/header-brand";
import { HeaderMobileNav } from "@/components/header-mobile-nav";
import { HeaderNav } from "@/components/header-nav";
import { SiteControls } from "@/components/site-controls";

export async function Header() {
  const t = await getTranslations("header");

  return (
    <header className="sticky top-0 z-50 border-b border-border/25 bg-background/20 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/15">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <HeaderBrand brand={t("brand")} />

        <HeaderNav label={t("navLabel")} />

        <div className="hidden items-center gap-2 md:flex">
          <SiteControls />
        </div>

        <HeaderMobileNav
          label={t("navLabel")}
          menuOpenLabel={t("menuOpen")}
          menuCloseLabel={t("menuClose")}
        />
      </div>
    </header>
  );
}

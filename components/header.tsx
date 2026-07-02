import { getTranslations } from "next-intl/server";

import { HeaderBrand } from "@/components/header-brand";
import { HeaderMobileNav } from "@/components/header-mobile-nav";
import { HeaderNav } from "@/components/header-nav";
import { HeaderShell } from "@/components/header-shell";
import { SiteControls } from "@/components/site-controls";

export async function Header() {
  const t = await getTranslations("header");

  return (
    <HeaderShell>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <HeaderBrand brand={t("brand")} />

        <HeaderNav label={t("navLabel")} />

        <div className="hidden items-center gap-2 lg:flex">
          <SiteControls />
        </div>

        <HeaderMobileNav
          label={t("navLabel")}
          menuOpenLabel={t("menuOpen")}
          menuCloseLabel={t("menuClose")}
        />
      </div>
    </HeaderShell>
  );
}

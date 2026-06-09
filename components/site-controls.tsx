import { ContactHeaderButton } from "@/components/contact-header-button";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeSwitch } from "@/components/theme-switch";

export function SiteControls() {
  return (
    <div className="flex items-center gap-2">
      <LanguageSwitch />
      <ThemeSwitch />
      <ContactHeaderButton />
    </div>
  );
}

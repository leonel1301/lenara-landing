import { Mail, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { SectionAnchor } from "@/components/section-anchor";
import { cn } from "@/lib/utils";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

function FooterColumn({ title, children, className }: FooterColumnProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <h2 className="text-sm font-semibold tracking-tight text-foreground">{title}</h2>
      {children}
    </div>
  );
}

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function FooterLink({ href, children, className }: FooterLinkProps) {
  const linkClassName = cn(
    "text-sm text-muted-foreground transition-colors hover:text-foreground",
    className,
  );

  if (href.includes("#")) {
    return (
      <SectionAnchor href={href} className={linkClassName}>
        {children}
      </SectionAnchor>
    );
  }

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  const serviceLinks = ["mobile", "web", "cloud", "consulting"] as const;
  const companyLinks = [
    { key: "about", href: "/#about" },
    { key: "process", href: "/#process" },
    { key: "contact", href: "/#contact" },
  ] as const;

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-12">
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              {t("brand")}
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          <FooterColumn title={t("company.title")}>
            <ul className="space-y-2.5">
              {companyLinks.map(({ key, href }) => (
                <li key={key}>
                  <FooterLink href={href}>{t(`company.${key}`)}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/apps">{t("company.apps")}</FooterLink>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title={t("products.title")}>
            <div className="space-y-3">
              <FooterLink
                href="/apps#waloop"
                className="font-medium text-foreground/90 hover:text-primary"
              >
                {t("products.waloop.name")}
              </FooterLink>
              <ul className="space-y-2 border-l border-border pl-3">
                <li>
                  <FooterLink href="/apps/waloop/privacy">
                    {t("products.waloop.privacy")}
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/apps/waloop/terms">
                    {t("products.waloop.terms")}
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/apps/waloop/faq">
                    {t("products.waloop.faq")}
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/apps/waloop/feedback">
                    {t("products.waloop.feedback")}
                  </FooterLink>
                </li>
              </ul>
            </div>
          </FooterColumn>

          <FooterColumn title={t("contact.title")}>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="inline-flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{t("contact.email")}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{t("contact.location")}</span>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <FooterColumn title={t("services.title")}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {serviceLinks.map((key) => (
                <li key={key}>
                  <FooterLink href="/#services">{t(`services.${key}`)}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            {t("copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}

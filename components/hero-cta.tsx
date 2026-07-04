import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { SectionLink } from "@/components/section-link";
import { cn } from "@/lib/utils";

type Props = {
  contactLabel: string;
  servicesLabel: string;
};

export function HeroCta({ contactLabel, servicesLabel }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
      <SectionLink href="/#contact" size="lg" className="h-11 px-6">
        {contactLabel}
      </SectionLink>
      <Link
        href="/services"
        className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6")}
      >
        {servicesLabel}
      </Link>
    </div>
  );
}

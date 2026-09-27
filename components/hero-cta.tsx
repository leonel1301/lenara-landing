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
      <SectionLink
        href="/#contact"
        size="lg"
        className="h-11 bg-primary px-6 text-primary-foreground hover:bg-primary! hover:text-primary-foreground!"
      >
        {contactLabel}
      </SectionLink>
      <Link
        href="/services"
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "h-11 border-border bg-background px-6 text-foreground hover:border-border! hover:bg-background! hover:text-foreground!",
        )}
      >
        {servicesLabel}
      </Link>
    </div>
  );
}

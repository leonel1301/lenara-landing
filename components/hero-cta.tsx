import { SectionLink } from "@/components/section-link";

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
      <SectionLink href="/#services" variant="outline" size="lg" className="h-11 px-6">
        {servicesLabel}
      </SectionLink>
    </div>
  );
}

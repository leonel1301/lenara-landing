"use client";

import { useState } from "react";

import { AppCarousel } from "@/components/app-carousel";
import { AppShowcase } from "@/components/app-showcase";
import { AppTechStackStrip } from "@/components/app-tech-stack-strip";
import type { WaloopPlatform } from "@/lib/waloop-tech-stack";

type Slide = {
  src: string;
  alt: string;
};

type TechStackLabels = {
  label: string;
  items: Record<string, string>;
};

type Props = {
  badge: string;
  name: string;
  nameHref?: string;
  nameLinkAria?: string;
  description: string;
  platformsLabel: string;
  appStoreHref?: string;
  androidSoonLabel: string;
  iosSlides: Slide[];
  androidSlides: Slide[];
  galleryLabel: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
  iosLabel: string;
  androidLabel: string;
  techStackLabels: TechStackLabels;
  legalLinks: {
    privacyHref: string;
    termsHref: string;
    faqHref?: string;
    feedbackHref?: string;
    privacyLabel: string;
    termsLabel: string;
    faqLabel?: string;
    feedbackLabel?: string;
  };
};

export function WaloopShowcase({
  iosSlides,
  androidSlides,
  galleryLabel,
  carouselPrevLabel,
  carouselNextLabel,
  iosLabel,
  androidLabel,
  techStackLabels,
  ...showcaseProps
}: Props) {
  const [platform, setPlatform] = useState<WaloopPlatform>("ios");

  return (
    <AppShowcase
      {...showcaseProps}
      media={
        <AppCarousel
          iosSlides={iosSlides}
          androidSlides={androidSlides}
          label={galleryLabel}
          prevLabel={carouselPrevLabel}
          nextLabel={carouselNextLabel}
          iosLabel={iosLabel}
          androidLabel={androidLabel}
          platform={platform}
          onPlatformChange={setPlatform}
        />
      }
      afterLegal={
        <AppTechStackStrip platform={platform} labels={techStackLabels} />
      }
    />
  );
}

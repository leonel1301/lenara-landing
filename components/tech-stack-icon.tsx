import type { IconType } from "react-icons";
import {
  SiFirebase,
  SiGo,
  SiJetpackcompose,
  SiKotlin,
  SiMui,
  SiRailway,
  SiSupabase,
  SiSwift,
} from "react-icons/si";
import { Layers } from "lucide-react";

import type { WaloopTechItem } from "@/lib/waloop-tech-stack";
import { cn } from "@/lib/utils";

const brandIcons: Partial<Record<WaloopTechItem, IconType>> = {
  swift: SiSwift,
  kotlin: SiKotlin,
  jetpackCompose: SiJetpackcompose,
  materialUi: SiMui,
  firebase: SiFirebase,
  supabase: SiSupabase,
  goGin: SiGo,
  railway: SiRailway,
};

type Props = {
  item: WaloopTechItem;
  className?: string;
};

export function TechStackIcon({ item, className }: Props) {
  const BrandIcon = brandIcons[item];

  if (BrandIcon) {
    return <BrandIcon className={cn("size-3.5 shrink-0", className)} aria-hidden />;
  }

  if (item === "swiftui") {
    return <Layers className={cn("size-3.5 shrink-0", className)} strokeWidth={2} aria-hidden />;
  }

  return null;
}

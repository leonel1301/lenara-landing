import type { IconType } from "react-icons";
import { LuSparkles } from "react-icons/lu";
import { SiAndroid, SiApple, SiArduino, SiNextdotjs } from "react-icons/si";

import type { ProjectArea } from "@/lib/projects";
import { cn } from "@/lib/utils";

const areaIcons: Record<ProjectArea, IconType> = {
  ios: SiApple,
  android: SiAndroid,
  web: SiNextdotjs,
  iot: SiArduino,
  ai: LuSparkles,
};

type Props = {
  area: ProjectArea;
  className?: string;
};

export function ProjectAreaIcon({ area, className }: Props) {
  const Icon = areaIcons[area];
  return <Icon className={cn("size-5 shrink-0", className)} aria-hidden />;
}

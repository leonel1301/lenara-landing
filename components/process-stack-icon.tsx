import type { IconType } from "react-icons";
import { BsMicrosoftTeams } from "react-icons/bs";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiClaude,
  SiClaudecode,
  SiCursor,
  SiDiscord,
  SiElevenlabs,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGooglegemini,
  SiGooglemeet,
  SiMiro,
  SiRailway,
  SiSupabase,
  SiXcode,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import type { ProcessAiItem, ProcessToolItem } from "@/lib/process-tech-stack";
import { cn } from "@/lib/utils";

const toolIcons: Record<ProcessToolItem, IconType> = {
  discord: SiDiscord,
  teams: BsMicrosoftTeams,
  meet: SiGooglemeet,
  figma: SiFigma,
  miro: SiMiro,
  github: SiGithub,
  supabase: SiSupabase,
  vscode: TbBrandVscode,
  xcode: SiXcode,
  androidStudio: SiAndroidstudio,
  railway: SiRailway,
  firebase: SiFirebase,
};

const aiIcons: Record<ProcessAiItem, IconType> = {
  gpt: RiOpenaiFill,
  gemini: SiGooglegemini,
  claude: SiClaude,
  claudeCode: SiClaudecode,
  cursor: SiCursor,
  elevenLabs: SiElevenlabs,
};

type Props = {
  item: ProcessToolItem | ProcessAiItem;
  className?: string;
};

export function ProcessStackIcon({ item, className }: Props) {
  const Icon =
    item in toolIcons
      ? toolIcons[item as ProcessToolItem]
      : aiIcons[item as ProcessAiItem];

  return <Icon className={cn("size-3.5 shrink-0", className)} aria-hidden />;
}

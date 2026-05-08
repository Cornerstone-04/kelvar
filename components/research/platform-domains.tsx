import { ImmersiveDomains } from "./immersive-domains";
import { CardDomains } from "./card-domains";

import type { Platform } from "@/lib/platform-types";

type PlatformDomainsProps = {
  platform: Platform;
};

export function PlatformDomains({ platform }: PlatformDomainsProps) {
  if (platform.domainsLayout === "immersive") {
    return (
      <ImmersiveDomains
        domains={platform.domains}
        platformName={platform.name}
      />
    );
  }

  return (
    <CardDomains label={platform.domainsLabel} domains={platform.domains} />
  );
}

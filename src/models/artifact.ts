import { StatType } from "@/models/common";

enum ArtifactType {
  FlowerOfLife,
  PlumeOfDeath,
  SandsOfEon,
  GobletOfEonothem,
  CircletOfLogos,
}

interface Artifact {
  readonly set: string;
  readonly rarity: number;
  readonly type: ArtifactType;
  readonly mainStatType: StatType;

  level: number;
  subStats: Record<StatType, number>;

  get mainStatValue(): number;
}

export type { ArtifactType, Artifact };

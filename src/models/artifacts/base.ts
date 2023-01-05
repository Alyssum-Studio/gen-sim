import { StatType } from "@/models/common";

export enum ArtifactType {
  FlowerOfLife,
  PlumeOfDeath,
  SandsOfEon,
  GobletOfEonothem,
  CircletOfLogos,
}

export abstract class Artifact {
  type: ArtifactType;
  set: string;
  rarity: number;
  level: number;
  mainStatType: StatType;
  subStats: Record<StatType, number>;

  get mainStatValue(): number {
    return 0; // TODO: implement calculation formula
  }

  protected constructor(
    type: ArtifactType,
    set: string,
    rarity: number,
    level: number,
    mainStatType: StatType,
    subStats: Record<StatType, number>
  ) {
    this.type = type;
    this.set = set;
    this.rarity = rarity;
    this.level = level;
    this.mainStatType = mainStatType;
    this.subStats = subStats;
  }
}

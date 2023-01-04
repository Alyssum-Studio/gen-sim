enum ArtifactType {
  FlowerOfLife,
  PlumeOfDeath,
  SandsOfEon,
  GobletOfEonothem,
  CircletOfLogos,
}

enum ArtifactMainStatType {
  HP,
  ATK,
  ElementalMastery,
  HPPercent,
  ATKPercent,
  DEFPercent,
  CRITRate,
  CRITDMG,
  HealingBonus,
  EnergyRecharge,
  ElementalDMGBonus,
  PhysicalDMGBonus,
}

enum ArtifactSubStatType {
  HP,
  ATK,
  DEF,
  HPPercent,
  ATKPercent,
  DEFPercent,
  ElementalMastery,
  EnergyRecharge,
  CRITRate,
  CRITDMG,
}

interface Artifact {
  readonly set: string
  readonly rarity: number
  readonly type: ArtifactType
  readonly mainStatType: ArtifactMainStatType

  level: number
  subStats: Record<ArtifactSubStatType, number>

  get mainStatValue(): number
}

export type {
  ArtifactType,
  ArtifactMainStatType,
  ArtifactSubStatType,
  Artifact
}

enum ElementalType {
  Pyro,
  Hydro,
  Dendro,
  Electro,
  Anemo,
  Cryo,
  Geo,
  Physical,
}

enum Region {
  Mondstadt,
  Liyue,
  Inazuma,
  Sumeru,
  Fontaine,
  Natlan,
  Snezhnaya,
  "Khaenri'ah",
}

enum StatType {
  HP,
  HPPercent,
  ATK,
  ATKPercent,
  DEF,
  DEFPercent,
  ElementalMastery,

  CRITRate,
  CRITDMG,
  HealingBonus,
  IncomingHealingBonus,
  EnergyRecharge,
  CDReduction,
  ShieldStrength,

  PyroDMGBonus,
  PyroRES,
  HydroDMGBonus,
  HydroRES,
  DendroDMGBonus,
  DendroRES,
  ElectroDMGBonus,
  ElectroRES,
  AnemoDMGBonus,
  AnemoRES,
  CryoDMGBonus,
  CryoRES,
  GeoDMGBonus,
  GeoRES,
  PhysicalDMGBonus,
  PhysicalRES,
  ElementalDMGBonus,
}

export type { ElementalType, Region, StatType };

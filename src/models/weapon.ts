enum WeaponType {
  Sword,
  Claymore,
  Polearm,
  Catalyst,
  bow,
}

enum WeaponSecondStatType {
  None,
  HP,
  ATK,
  DEF,
  ElementalMastery,
  CRITRate,
  CRITDMG,
  EnergyRecharge,
  PhysicalDamageBonus,
}

interface Weapon {
  readonly name: string;
  readonly rarity: number;
  readonly type: WeaponType;
  readonly secondStatType: WeaponSecondStatType;

  level: number;
  ascensionPhase: number;
  refinementRank: number;

  get baseATK(): number;
  get secondStatValue(): number;
}

export type { WeaponType, WeaponSecondStatType, Weapon };

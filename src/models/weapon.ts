import { StatType } from "@/models/common";

enum WeaponType {
  Sword,
  Claymore,
  Polearm,
  Catalyst,
  bow,
}

interface Weapon {
  readonly name: string;
  readonly rarity: number;
  readonly type: WeaponType;
  readonly secondStatType: StatType | null;

  level: number;
  ascensionPhase: number;
  refinementRank: number;

  get baseATK(): number;
  get secondStatValue(): number;
}

export type { WeaponType, Weapon };

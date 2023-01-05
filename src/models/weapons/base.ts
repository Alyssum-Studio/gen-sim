import { StatType } from "@/models/common";

export enum WeaponType {
  Sword,
  Claymore,
  Polearm,
  Catalyst,
  Bow,
}

export abstract class Weapon {
  abstract readonly name: string;
  abstract readonly rarity: number;
  abstract readonly type: WeaponType;
  abstract readonly secondStatType: StatType | null;
  level: number;
  ascensionPhase: number;
  refinementRank: number;
  get ATK(): number {
    return 0; //TODO: implement
  }
  get secondStatValue(): number {
    return 0; //TODO: implement
  }

  protected constructor(
    level: number,
    ascensionPhase: number,
    refinementRank: number
  ) {
    this.level = level;
    this.ascensionPhase = ascensionPhase;
    this.refinementRank = refinementRank;
  }
}

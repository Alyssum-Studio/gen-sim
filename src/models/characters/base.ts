import { ElementalType, Region, StatType } from "@/models/common";
import { Artifact } from "@/models/artifacts";
import { Weapon, WeaponType } from "@/models/weapons";

export type CharacterRarity = 4 | 5;

export const CharacterStatRatio = {
  4: 0.08257,
  5: 0.08692,
};

export abstract class AscensionPassive {
  abstract readonly name: string;
}

export abstract class Constellation {
  abstract readonly name: string;
}

export abstract class NormalAttack {
  abstract readonly name: string;
  level: number;
  abstract get DMG(): number[];
  abstract get chargedAttackDMG(): number;
  abstract get chargedAttackStaminaCost(): number;
  abstract get plungeDMG(): number;
  abstract get lowPlungeDMG(): number;
  abstract get highPlungeDMG(): number;

  constructor(level = 11) {
    this.level = level;
  }
}

export abstract class ElementalSkill {
  abstract readonly name: string;
  abstract readonly pressCoolDown: number;
  abstract readonly holdCoolDown: number | null;
  level: number;
  abstract get skillDMG(): number;

  constructor(level = 11) {
    this.level = level;
  }
}

export abstract class ElementalBurst {
  abstract readonly name: string;
  level: number;
  abstract get burstDMG(): number;
  abstract get CD(): number;
  abstract get energyCost(): number;

  constructor(level = 11) {
    this.level = level;
  }
}

export abstract class Character {
  abstract readonly name: string;
  abstract readonly rarity: CharacterRarity;
  abstract readonly vision: ElementalType;
  abstract readonly weaponType: WeaponType;
  abstract readonly region: Region;
  abstract readonly releaseDate: Date;
  readonly normalAttack: NormalAttack;
  readonly elementalSkill: ElementalSkill;
  readonly elementalBurst: ElementalBurst;
  abstract readonly ascensionPassives: AscensionPassive[];
  abstract readonly constellations: Constellation[];

  level: number;
  ascensionPhase: number;
  constellationLevel: number;
  weapon: Weapon | null;
  artifacts: Artifact[];

  get baseHP(): number {
    return 0; // TODO: implement
  }
  get MaxHP(): number {
    return 0; // TODO: implement
  }

  protected abstract readonly baseATK: number;
  get levelATK(): number {
    return (
      this.baseATK * (1 + (this.level - 1) * CharacterStatRatio[this.rarity])
    );
  }
  get ascensionATK(): number {
    return (
      (this.baseATK * [0, 38, 65, 101, 128, 155, 182][this.ascensionPhase]) /
      50.8654
    );
  }
  get characterATK(): number {
    return Math.floor(this.levelATK + this.ascensionATK);
  }
  get ATK(): number {
    return this.characterATK; // TODO: implement
  }

  get baseDEF(): number {
    return 0; // TODO: implement
  }
  get DEF(): number {
    return 0; // TODO: implement
  }

  abstract readonly ascensionStatType: StatType;
  get ascensionStatValue(): number {
    return 0; // TODO: implement
  }

  get ElementalMastery(): number {
    return 0; // TODO: implement
  }
  get CRITRate(): number {
    return 0; // TODO: implement
  }
  get CRITDMG(): number {
    return 0; // TODO: implement
  }
  get HealingBonus(): number {
    return 0; // TODO: implement
  }
  get IncomingHealingBonus(): number {
    return 0; // TODO: implement
  }
  get EnergyRecharge(): number {
    return 0; // TODO: implement
  }
  get CDReduction(): number {
    return 0; // TODO: implement
  }
  get ShieldStrength(): number {
    return 0; // TODO: implement
  }
  get PyroDMGBonus(): number {
    return 0; // TODO: implement
  }
  get PyroRES(): number {
    return 0; // TODO: implement
  }
  get HydroDMGBonus(): number {
    return 0; // TODO: implement
  }
  get HydroRES(): number {
    return 0; // TODO: implement
  }
  get DendroDMGBonus(): number {
    return 0; // TODO: implement
  }
  get DendroRES(): number {
    return 0; // TODO: implement
  }
  get ElectroDMGBonus(): number {
    return 0; // TODO: implement
  }
  get ElectroRES(): number {
    return 0; // TODO: implement
  }
  get AnemoDMGBonus(): number {
    return 0; // TODO: implement
  }
  get AnemoRES(): number {
    return 0; // TODO: implement
  }
  get CryoDMGBonus(): number {
    return 0; // TODO: implement
  }
  get CryoRES(): number {
    return 0; // TODO: implement
  }
  get GeoDMGBonus(): number {
    return 0; // TODO: implement
  }
  get GeoRES(): number {
    return 0; // TODO: implement
  }
  get PhysicalDMGBonus(): number {
    return 0; // TODO: implement
  }
  get PhysicalRES(): number {
    return 0; // TODO: implement
  }

  protected constructor(
    level = 90,
    ascensionPhase = 6,
    constellationLevel = 6,
    normalAttack: NormalAttack,
    elementalSkill: ElementalSkill,
    elementalBurst: ElementalBurst,
    weapon: Weapon | null = null,
    artifacts: Artifact[] = []
  ) {
    this.level = level;
    this.ascensionPhase = ascensionPhase;
    this.constellationLevel = constellationLevel;
    this.normalAttack = normalAttack;
    this.elementalSkill = elementalSkill;
    this.elementalBurst = elementalBurst;
    this.weapon = weapon;
    this.artifacts = artifacts;
  }
}

export class Party {
  characters: Character[];

  constructor(characters: Character[]) {
    this.characters = characters;
  }
}

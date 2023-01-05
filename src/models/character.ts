import { ElementalType, Region, StatType } from "@/models/common";
import { Artifact } from "@/models/artifact";
import { Weapon, WeaponType } from "@/models/weapon";

interface NormalAttack {
  readonly name: string;

  level: number;

  get hitDMG(): Array<number>;
  get chargedAttackDMG(): number;
  get chargedAttackStaminaCost(): number;
  get plungeDMG(): number;
  get lowPlungeDMG(): number;
  get highPlungeDMG(): number;
}

interface ElementalSkill {
  readonly name: string;

  level: number;

  get skillDMG(): number;
  get CD(): number;
}

interface ElementalBurst {
  readonly name: string;

  level: number;

  get burstDMG(): number;
  get CD(): number;
  get energyCost(): number;
}

interface FirstAscensionPassive {
  readonly name: string;
}

interface SecondAscensionPassive {
  readonly name: string;
}

interface Constellation {
  readonly name: string;
}

interface Character {
  readonly name: string;
  readonly rarity: number;
  readonly vision: ElementalType;
  readonly weaponType: WeaponType;
  readonly region: Region;
  readonly releaseDate: Date;

  readonly ascensionStatType: StatType;
  readonly constellations: Array<Constellation>;
  readonly normalAttack: NormalAttack;
  readonly elementalSkill: ElementalSkill;
  readonly elementalBurst: ElementalBurst;
  readonly firstAscensionPassive: FirstAscensionPassive;
  readonly secondAscensionPassive: SecondAscensionPassive;

  level: number;
  ascensionPhase: number;
  constellationLevel: number;
  weapon: Weapon;
  artifacts: Array<Artifact>;

  get baseMaxHP(): number;
  get baseATK(): number;
  get baseDEF(): number;
  get ascensionStatValue(): number;

  get MaxHP(): number;
  get ATK(): number;
  get DEF(): number;
  get ElementalMastery(): number;

  get CRITRate(): number;
  get CRITDMG(): number;
  get HealingBonus(): number;
  get IncomingHealingBonus(): number;
  get EnergyRecharge(): number;
  get CDReduction(): number;
  get ShieldStrength(): number;

  get PyroDMGBonus(): number;
  get PyroRES(): number;
  get HydroDMGBonus(): number;
  get HydroRES(): number;
  get DendroDMGBonus(): number;
  get DendroRES(): number;
  get ElectroDMGBonus(): number;
  get ElectroRES(): number;
  get AnemoDMGBonus(): number;
  get AnemoRES(): number;
  get CryoDMGBonus(): number;
  get CryoRES(): number;
  get GeoDMGBonus(): number;
  get GeoRES(): number;
  get PhysicalDMGBonus(): number;
  get PhysicalRES(): number;
}

interface Party {
  characters: Array<Character>;
}

export type {
  NormalAttack,
  ElementalSkill,
  ElementalBurst,
  FirstAscensionPassive,
  SecondAscensionPassive,
  Constellation,
  Character,
  Party,
};

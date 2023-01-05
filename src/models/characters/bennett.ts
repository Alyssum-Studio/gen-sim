import {
  AscensionPassive,
  Character,
  Constellation,
  ElementalBurst,
  ElementalSkill,
  NormalAttack,
} from "./base";
import { ElementalType, Region, StatType } from "@/models/common";
import { Weapon, WeaponType } from "@/models/weapons";
import { Artifact } from "@/models/artifacts";

class Rekindle extends AscensionPassive {
  readonly name: string = "Rekindle";
}

class Fearnaught extends AscensionPassive {
  readonly name: string = "Fearnaught";
}

class GrandExpectation extends Constellation {
  readonly name: string = "Grand Expectation";
}

class ImpasseConqueror extends Constellation {
  readonly name: string = "Impasse Conquer";
}

class UnstoppableFervor extends Constellation {
  readonly name: string = "Unstoppable Fervor";
}

class UnexpectedOdyssey extends Constellation {
  readonly name: string = "Unexpected Odyssey";
}

class TrueExplorer extends Constellation {
  readonly name: string = "True Explorer";
}

class FireVenturesWithMe extends Constellation {
  readonly name: string = "Fire Ventures With Me";
}

class StrikeOfFortune extends NormalAttack {
  readonly name: string = "Strike of Fortune";

  get DMG(): number[] {
    return [];
  }

  get chargedAttackDMG(): number {
    return 0;
  }

  get chargedAttackStaminaCost(): number {
    return 0;
  }

  get highPlungeDMG(): number {
    return 0;
  }

  get lowPlungeDMG(): number {
    return 0;
  }

  get plungeDMG(): number {
    return 0;
  }
}

class PassionOverload extends ElementalSkill {
  readonly name: string = "Passion Overload";
  readonly pressCoolDown: number = 5;
  get holdCoolDown(): number {
    return 7.5 || 10; // TODO: implement
  }

  get skillDMG(): number {
    return 0;
  }
}

class FantasticVoyage extends ElementalBurst {
  readonly name: string = "Fantastic Voyage";

  get CD(): number {
    return 0;
  }

  get burstDMG(): number {
    return 0;
  }

  get energyCost(): number {
    return 0;
  }
}

export class Bennett extends Character {
  readonly name: string = "Bennett";
  readonly rarity: number = 4;
  readonly vision: ElementalType = ElementalType.Pyro;
  readonly weaponType: WeaponType = WeaponType.Sword;
  readonly region: Region = Region.Mondstadt;
  readonly releaseDate: Date = new Date(2020, 9, 28);

  readonly ATKRatio: number = 1.334;
  readonly ascensionStatType: StatType = StatType.EnergyRecharge;
  readonly ascensionPassives: AscensionPassive[] = [Rekindle, Fearnaught];
  readonly constellations: Constellation[] = [
    GrandExpectation,
    ImpasseConqueror,
    UnstoppableFervor,
    UnexpectedOdyssey,
    TrueExplorer,
    FireVenturesWithMe,
  ];

  constructor(
    level = 90,
    ascensionPhase = 6,
    constellationLevel = 6,
    normalAttackLevel = 11,
    elementalSkillLevel = 11,
    elementalBurstLevel = 11,
    weapon: Weapon | null = null,
    artifacts: Artifact[] = []
  ) {
    super(
      level,
      ascensionPhase,
      constellationLevel,
      new StrikeOfFortune(normalAttackLevel),
      new PassionOverload(elementalSkillLevel),
      new FantasticVoyage(elementalBurstLevel),
      weapon,
      artifacts
    );
  }
}

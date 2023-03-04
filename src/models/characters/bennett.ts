import {
  AscensionPassive,
  Character,
  Constellation,
  ElementalBurst,
  ElementalSkill,
  NormalAttack,
} from "./base";
import { ElementalType, Region, StatType } from "@/models/common";
import { WeaponType } from "@/models/weapons";

class Rekindle extends AscensionPassive {
  readonly name = "Rekindle";
}

class Fearnaught extends AscensionPassive {
  readonly name = "Fearnaught";
}

class GrandExpectation extends Constellation {
  readonly name = "Grand Expectation";
}

class ImpasseConqueror extends Constellation {
  readonly name = "Impasse Conquer";
}

class UnstoppableFervor extends Constellation {
  readonly name = "Unstoppable Fervor";
}

class UnexpectedOdyssey extends Constellation {
  readonly name = "Unexpected Odyssey";
}

class TrueExplorer extends Constellation {
  readonly name = "True Explorer";
}

class FireVenturesWithMe extends Constellation {
  readonly name = "Fire Ventures With Me";
}

class StrikeOfFortune extends NormalAttack {
  readonly name = "Strike of Fortune";

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
  readonly name = "Passion Overload";
  readonly pressCoolDown = 5;
  get holdCoolDown() {
    return 7.5 || 10; // TODO: implement
  }

  get skillDMG(): number {
    return 0;
  }
}

class FantasticVoyage extends ElementalBurst {
  readonly name = "Fantastic Voyage";

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
  readonly name = "Bennett";
  readonly rarity = 4;
  readonly vision = ElementalType.Pyro;
  readonly weaponType = WeaponType.Sword;
  readonly region = Region.Mondstadt;
  readonly releaseDate = new Date(2020, 9, 28);
  readonly baseATK = 16.0272;
  readonly ascensionStatType = StatType.EnergyRecharge;
  readonly ascensionPassives = [Rekindle, Fearnaught];
  readonly constellations = [
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
    weapon = null,
    artifacts = []
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

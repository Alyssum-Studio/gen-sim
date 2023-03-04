import {
  AscensionPassive,
  Character,
  Constellation,
  ElementalBurst,
  ElementalSkill,
  NormalAttack,
} from "@/models/characters/base";
import { ElementalType, Region, StatType } from "@/models/common";
import { WeaponType } from "@/models/weapons";

class EveryArrowFindsItsTarget extends AscensionPassive {
  readonly name = "Every Arrow Finds Its Target";
}

class PreciseShot extends AscensionPassive {
  readonly name = "Precise Shot";
}

class OneArrowToRuleThemAll extends Constellation {
  readonly name = "One Arrow to Rule Them All";
}

class BunnyTriggered extends Constellation {
  readonly name = "Bunny Triggered";
}

class ItBurns extends Constellation {
  readonly name = "It Burns!";
}

class ItsNotJustAnyDoll extends Constellation {
  readonly name = "It's Not Just Any Doll...";
}

class ItsBaronBunny extends Constellation {
  readonly name = "It's Baron Bunny!";
}

class Wildfire extends Constellation {
  readonly name = "Wildfire";
}

class Sharpshooter extends NormalAttack {
  readonly name = "Sharpshooter";

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

class ExplosivePuppet extends ElementalSkill {
  readonly name = "Explosive Puppet";
  readonly pressCoolDown: number = 15;
  readonly holdCoolDown: number = 15;

  get skillDMG(): number {
    return 0;
  }
}

class FieryRain extends ElementalBurst {
  readonly name = "Fiery Rain";

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

export class Amber extends Character {
  readonly name = "Amber";
  readonly rarity = 4;
  readonly vision = ElementalType.Pyro;
  readonly weaponType = WeaponType.Bow;
  readonly region = Region.Mondstadt;
  readonly releaseDate = new Date(2020, 9, 28);
  readonly baseATK = 18.6984;
  readonly ascensionStatType = StatType.ATKPercent;
  readonly ascensionPassives = [EveryArrowFindsItsTarget, PreciseShot];
  readonly constellations = [
    OneArrowToRuleThemAll,
    BunnyTriggered,
    ItBurns,
    ItsNotJustAnyDoll,
    ItsBaronBunny,
    Wildfire,
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
      new Sharpshooter(normalAttackLevel),
      new ExplosivePuppet(elementalSkillLevel),
      new FieryRain(elementalBurstLevel),
      weapon,
      artifacts
    );
  }
}

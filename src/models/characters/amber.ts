import {
  AscensionPassive,
  Character,
  Constellation,
  ElementalBurst,
  ElementalSkill,
  NormalAttack,
} from "@/models/characters/base";
import { ElementalType, Region, StatType } from "@/models/common";
import { Weapon, WeaponType } from "@/models/weapons";
import { Artifact } from "@/models/artifacts";

class EveryArrowFindsItsTarget extends AscensionPassive {
  readonly name: string = "Every Arrow Finds Its Target";
}

class PreciseShot extends AscensionPassive {
  readonly name: string = "Precise Shot";
}

class OneArrowToRuleThemAll extends Constellation {
  readonly name: string = "One Arrow to Rule Them All";
}

class BunnyTriggered extends Constellation {
  readonly name: string = "Bunny Triggered";
}

class ItBurns extends Constellation {
  readonly name: string = "It Burns!";
}

class ItsNotJustAnyDoll extends Constellation {
  readonly name: string = "It's Not Just Any Doll...";
}

class ItsBaronBunny extends Constellation {
  readonly name: string = "It's Baron Bunny!";
}

class Wildfire extends Constellation {
  readonly name: string = "Wildfire";
}

class Sharpshooter extends NormalAttack {
  readonly name: string = "Sharpshooter";

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
  readonly name: string = "Explosive Puppet";
  readonly pressCoolDown: number = 15;
  readonly holdCoolDown: number = 15;

  get skillDMG(): number {
    return 0;
  }
}

class FieryRain extends ElementalBurst {
  readonly name: string = "Fiery Rain";

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
  readonly name: string = "Amber";
  readonly rarity: number = 4;
  readonly vision: ElementalType = ElementalType.Pyro;
  readonly weaponType: WeaponType = WeaponType.Bow;
  readonly region: Region = Region.Mondstadt;
  readonly releaseDate: Date = new Date(2022, 9, 28);

  readonly ATKRatio: number = 1.556;
  readonly ascensionStatType: StatType = StatType.ATKPercent;
  readonly ascensionPassives: AscensionPassive[] = [
    EveryArrowFindsItsTarget,
    PreciseShot,
  ];
  readonly constellations: Constellation[] = [
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
    weapon: Weapon | null = null,
    artifacts: Artifact[] = []
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

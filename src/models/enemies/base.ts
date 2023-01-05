export abstract class Enemy {
  abstract readonly name: string;
  level: number;

  protected constructor(level = 90) {
    this.level = level;
  }
}

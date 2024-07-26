import { CardType, ElementsType } from '../types';

export { CardType } from '../types';

export default abstract class Card implements CardType.default {
  type: CardType.CardType;

  element: ElementsType.Elements;

  name: string;

  image: string;

  id: number;

  maxLife: number;

  life: number = 1;

  damage: number = 0;

  description: string;

  cost: number = 0;

  floopCost: number = 1;

  evade: number = 10;

  luck: number = 10;

  constructor(fields: CardType.CardFields) {
    this.type = fields.type;
    this.id = new Date().getTime() * Math.random();
    this.element = fields.element;
    this.name = fields.name;
    this.image = fields.image;
    this.maxLife = fields.maxLife;
    this.life = fields.life;
    this.damage = fields.damage;
    this.description = fields.description;
    this.cost = fields.cost;
    this.floopCost = fields.floopCost;
    this.evade = fields.evade;
    this.luck = fields.luck;
  }

  public floop(): void {

  }

  public luckAttack(): number {
    const random = Math.floor(Math.random() * 100);
    if (random > this.luck) {
      return this.damage * 2;
    }
    return this.damage;
  }

  public attack(enemy: CardType.default): void {
    enemy.defend(this.luckAttack());
  }

  public defend(damage: number): void {
    const random = Math.floor(Math.random() * 100);
    if (this.evade < random) {
      this.life -= damage;
    }
  }
}

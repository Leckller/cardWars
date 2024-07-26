import { Elements } from './Elements';

export type CardType = 'construction' | 'spell' | 'monster';

export interface CardFields {
  type: CardType;
  element: Elements;
  name: string;
  image: string;
  life: number;
  maxLife: number;
  damage: number;
  description: string;
  cost: number;
  floopCost: number;
  evade: number;
  luck: number;
}

export default interface Card extends CardMethods, CardFields { }

export interface CardMethods extends CardFields {
  floop(): void;

  luckAttack(): number;

  attack(enemy: Card): void;

  defend(damage: number): void;
}

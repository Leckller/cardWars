import { Elements } from './Elements';

export type CardType = 'construction' | 'spell' | 'monster';

export interface CardFields {
  type: CardType;
  element: Elements;
  name: string;
  image: string;
  life: number;
  damage: number;
  description: string;
  cost: number;
  floopCost: number;
  evade: number;
  luck: number;
}

export default interface ACard extends CardFields {
  floop(): void;

  luckAttack(): number;

  attack(enemy: ACard): void;

  defend(damage: number): void;
}

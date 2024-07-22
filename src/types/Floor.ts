import { CardType, ElementsType } from '.';

export default interface AFloor {
  element: ElementsType.Elements;

  type: CardType.CardType;

  card: CardType.default | undefined;
}

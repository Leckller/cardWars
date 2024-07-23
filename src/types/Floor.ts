import { CardType, ElementsType } from '.';

export default interface AFloor {
  element: ElementsType.Elements;
  card: CardType.default | undefined;
}

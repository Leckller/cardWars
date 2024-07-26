import { CardType, FloorType } from '.';
import Stack from '../utils/Stack';

export default interface Deck {
    hand: CardType.default[];
    fila: Stack<CardType.default>
    floors: FloorType.default[];
    usedCards: CardType.default[];
    allCards: CardType.default[];
}

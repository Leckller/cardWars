import { CardType, DeckType, ElementsType, FloorType } from ".";

export interface ProfileFields {
    name: string;
    mana: number;
    maxLife: number;
    life: number;
    image: string;
    level: number;
    cards: DeckType.default;
}

export interface ProfileMethods {
    buyCard(): void;
    floop(floorIndex: number): void;
    useCard(cardIndex: number, floorIndex: number): void;
    getFloorByIndex(floorIndex: number): FloorType.default;
    killCard(floorIndex: number): void;

    addCard(card: CardType.default): void;
    removeCard(cardId: number): void;
    special(card?: number): void;

    setFloors(element: ElementsType.Elements, floorIndex: number): void;
}

export default interface Profile extends ProfileFields, ProfileMethods { }
import { DeckType, FloorType } from ".";

export interface ProfileFields {
    name: string;
    mana: number;
    life: number;
    level: number;
    cards: DeckType.default;
}

export interface ProfileMethods {
    buyCard(): void;
    floop(floorIndex: number): void;
    useCard(cardIndex: number, floorIndex: number): void;
    getFloorByIndex(floorIndex: number): FloorType.default;
    killCard(floorIndex: number): void;
}

export default interface Profile extends ProfileFields, ProfileMethods { }
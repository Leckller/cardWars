import { AProfile } from "../../AbstractGameClasses";
import { DeckType, FloorType, ProfileType } from "../../types";
import Card from "../../types/Card";
import Stack from "../../utils/Stack";
import Mendigo from "../Cards/Mendigo";
import Slime from "../Cards/Slime";
import FinnImage from '../../../public/finn.png';
import { Terra } from "../Floors";

export default class Finn extends AProfile.default {
    constructor() {
        const Floors: FloorType.default[] = [new Terra(), new Terra(), new Terra(), new Terra()]

        const Deck: DeckType.default = {
            allCards: [new Mendigo(), new Slime(), new Mendigo(), new Slime(), new Mendigo(), new Slime(), new Mendigo(), new Slime()],
            fila: new Stack<Card>(),
            hand: [],
            floors: Floors,
            usedCards: [],
        };
        const fields: ProfileType.ProfileFields = {
            name: 'Finn',
            maxLife: 10,
            mana: 2,
            life: 10,
            level: 1,
            cards: Deck,
            image: FinnImage
        }

        super(Deck, fields);
    }

    override special(): void {
        this.life += 2;
    }
}
import { AProfile } from "../../AbstractGameClasses";
import { DeckType, FloorType, ProfileType } from "../../types";
import Card from "../../types/Card";
import Stack from "../../utils/Stack";
import Mendigo from "../Cards/Mendigo";
import Slime from "../Cards/Slime";
import { Terra, Universal } from "../Floors";
import JakeImage from '../../../public/Jake.png'

export default class Jake extends AProfile.default {
    constructor() {
        const Floors: FloorType.default[] = [new Universal(), new Terra(), new Universal(), new Terra()]

        const Deck: DeckType.default = {
            fila: new Stack<Card>(),
            hand: [],
            floors: Floors,
            usedCards: [],
            allCards: [new Mendigo(), new Slime(), new Mendigo(), new Slime(), new Mendigo(), new Mendigo()],
        };

        const fields: ProfileType.ProfileFields = {
            name: 'Finn',
            maxLife: 10,
            mana: 2,
            life: 10,
            level: 1,
            cards: Deck,
            image: JakeImage,
        }

        super(Deck, fields);
    }

    override special(floorIndex: number): void {
        if (this.mana < 2) {
            console.log("Você não possui mana suficiente para usar o especial do seu personagem.")
            return;
        }
        if (this.cards.floors[floorIndex].card === undefined) {
            console.log("É preciso selecionar um local que tenha uma carta posicionada.")
            return;
        }
        this.cards.floors[floorIndex].card.damage += 2;
    }
}
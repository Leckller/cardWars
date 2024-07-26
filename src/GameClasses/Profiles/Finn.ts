import { AProfile } from "../../AbstractGameClasses";
import { DeckType, FloorType, ProfileType } from "../../types";
import Card from "../../types/Card";
import Stack from "../../utils/Stack";
import Mendigo from "../Cards/Mendigo";
import Slime from "../Cards/Slime";
import { Terra } from "../Floors";

export default class Finn extends AProfile.default {
    constructor() {
        const Floors: FloorType.default[] = [new Terra(), new Terra(), new Terra(), new Terra()]
        const baralho = new Stack<Card>();

        // Alterar essa lógica de adicionar cartas no front end!!
        baralho.enqueue(new Mendigo());
        baralho.enqueue(new Slime());
        baralho.enqueue(new Mendigo());
        baralho.enqueue(new Slime());
        baralho.enqueue(new Mendigo());
        baralho.enqueue(new Mendigo());

        const hand = [new Mendigo(), new Slime()]

        const Deck: DeckType.default = {
            fila: baralho,
            hand,
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
        }

        super(Deck, fields);
    }
}
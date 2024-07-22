import { DeckType, FloorType, ProfileType } from "../types";

export default class AProfile implements ProfileType.default {
    name: string;
    mana: number;
    life: number;
    level: number;
    cards: DeckType.default;

    constructor(Deck: DeckType.default, fields: ProfileType.ProfileFields) {
        this.cards = Deck;
        this.name = fields.name;
        this.mana = fields.mana;
        this.life = fields.life;
        this.level = fields.level;
    }

    buyCard() {
        const card = this.cards.fila.dequeue();
        if (card === undefined) {
            return console.log("Você não possuí cartas para comprar")
        }
        this.cards.hand.push(card)
    }

    floop(floorIndex: number) {
        const card = this.getFloorByIndex(floorIndex).card;
        if (!card) {
            console.log("Não é possível realizar o floop sem uma carta em campo");
            return;
        }

        if (this.mana < card.floopCost) {
            return "Você não tem mana o suficiente!"
        }
        card.floop();
    }

    useCard(cardIndex: number, floorIndex: number) {
        const card = this.cards.hand[cardIndex];
        const floor = this.getFloorByIndex(floorIndex);
        if (card.element !== "Universal" && card.type !== floor.type) {
            return "Esta carta não pode ser colocada neste campo."
        }
        if (this.mana < card.cost) {
            return "Você não tem mana o suficiente!"
        }
        // debita a mana
        this.mana -= card.cost;
        // coloca a card no campo
        floor.card = card;
        // TIRA DA MÃO E COLOCA O ARRAY DE USADOS
        this.cards.usedCards.push(card);
        delete this.cards.hand[cardIndex];
    }

    getFloorByIndex(floorIndex: number): FloorType.default {
        const floor = this.cards.floors[floorIndex];
        return floor;
    }

    killCard(floorIndex: number) {
        this.cards.floors[floorIndex].card = undefined;
    }

}
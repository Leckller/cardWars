import { Floor } from "../GameClasses/Floors";
import { DeckType, ElementsType, FloorType, ProfileType } from "../types";
import Card from "../types/Card";

export default abstract class AProfile implements ProfileType.default {
    name: string;
    mana: number;
    life: number;
    level: number;
    image: string;
    maxLife: number;
    cards: DeckType.default;

    constructor(Deck: DeckType.default, fields: ProfileType.ProfileFields) {
        this.cards = Deck;
        this.name = fields.name;
        this.mana = fields.mana;
        this.life = fields.life;
        this.maxLife = fields.life;
        this.level = fields.level;
        this.image = fields.image;
    }

    buyCard() {
        const card = this.cards.fila.dequeue();
        if (card === undefined) {
            return console.log("Você não possuí cartas para comprar")
        }
        this.cards.hand = [...this.cards.hand, card]
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

    useCard(cardId: number, floorIndex: number) {
        const card = this.cards.hand.find(c => c.id === cardId);
        const floor = this.getFloorByIndex(floorIndex);

        if (!card) {
            console.log("Hmmm acho que você está vendo coisas");
            return;
        }
        if (floor.card !== undefined) {
            console.log("Já tem uma carta neste local", this.cards.floors, floorIndex)
            return;
        }
        if (card.element !== floor.element && card.element !== 'Universal') {
            console.log("Esta carta não pode ser colocada neste campo.");
            return;
        }
        if (this.mana < card.cost) {
            console.log("Você não tem mana o suficiente!");
            return;
        }
        // debita a mana
        this.mana -= card.cost;
        // coloca a card no campo
        floor.card = card;
        // TIRA DA MÃO E COLOCA O ARRAY DE USADOS
        this.cards.usedCards.push(card);
        this.cards.hand = this.cards.hand.filter((c) => c.id != cardId);
    }

    startGame(): void {
        this.buyCard()
        this.buyCard()
    }

    getFloorByIndex(floorIndex: number): FloorType.default {
        const floor = this.cards.floors[floorIndex];
        return floor;
    }

    killCard(floorIndex: number) {
        this.cards.floors[floorIndex].card = undefined;
    }

    addCard(card: Card): void {
        if (this.cards.allCards.length > 20) {
            console.log("Você atingiu o limite de cartas. Remova algumas para adicionar outras.");
            return;
        }
        this.cards.allCards.push(card);
    }

    removeCard(cardId: number): void {
        if (this.cards.allCards.length < 8) {
            console.log("Você precisa ter pelo menos 8 cartas no baralho")
            return;
        }
        this.cards.allCards.filter(c => c.id !== cardId);
    }

    setRandomDeck(): void {
        for (let i = 0; i <= 7; i++) {
            const randomNum = Math.floor(Math.random() * this.cards.allCards.length - 1);
            const index = randomNum < 0 ? 0 : randomNum;
            this.cards.fila.enqueue(this.cards.allCards[index]);
        }
    }

    special(_card?: number): void {
        console.log("Este personagem não tem nenhum especial")
    }

    setFloors(element: ElementsType.Elements, floorIndex: number): void {
        this.cards.floors[floorIndex] = new Floor(element);
    }
}
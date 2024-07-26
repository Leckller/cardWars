import { ACard } from "../../AbstractGameClasses";

export default class Slime extends ACard.default {
    constructor() {
        super({
            name: 'Slime',
            image: '',
            type: 'monster',
            description: 'Um carinha gosmento... ecati.',
            element: 'Universal',
            cost: 1,
            floopCost: 1,
            life: 2,
            maxLife: 2,
            damage: 1,
            evade: 10,
            luck: 10,
        });
    }

    public floop(): void {
        this.damage += 1
    }
}
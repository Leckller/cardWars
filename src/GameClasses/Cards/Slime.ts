import { ACard } from "../../AbstractGameClasses";
import SlimePng from '../../../public/Jake.png'

export default class Slime extends ACard.default {
    constructor() {
        super({
            name: 'Slime',
            image: SlimePng,
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
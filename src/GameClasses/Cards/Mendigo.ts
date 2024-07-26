import { ACard } from "../../AbstractGameClasses";

export default class Mendigo extends ACard.default {
    constructor() {
        super({
            name: 'Mendigo',
            image: '',
            type: 'monster',
            description: 'Um pobre rapaz das ruas do reino doce.',
            element: 'Terra',
            cost: 2,
            floopCost: 1,
            life: 3,
            maxLife: 3,
            damage: 1,
            evade: 10,
            luck: 10,
        });
    }

    public floop(): void {
        this.damage += 1;
        this.life += 1;
    }
}
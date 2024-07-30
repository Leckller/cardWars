import { BattleType, ProfileType } from "../types";

export default abstract class Battle implements BattleType.default {
    play(attackProfile: ProfileType.default, defendProfile: ProfileType.default, floorIndex: number): boolean {
        const attackCard = attackProfile.getFloorByIndex(floorIndex).card;
        const defendCard = defendProfile.getFloorByIndex(floorIndex).card;
        console.log(attackCard)
        console.log(defendCard)

        if (attackCard === undefined) {
            return true;
        }

        if (defendCard === undefined) {
            defendProfile.life -= attackCard.luckAttack();
            return false;
        }

        attackCard.attack(defendCard);
        if (defendCard.life <= 0) {
            defendProfile.killCard(floorIndex);
        }
        return false;
    }
}
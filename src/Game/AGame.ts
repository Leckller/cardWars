import { GameType, ProfileType } from "../types";

export default abstract class Game implements GameType.default {
    // [0] = User; [1] = Enemy;
    turn: 0 | 1;
    players: [ProfileType.default, ProfileType.default];
    battle: Battle;

    actualTurn() {
        return this.turn;
    }
    nextTurn() {
        return this.turn === 0 ? 1 : 0
    }
    toggleTurn() {
        this.turn = this.nextTurn();
    }

    constructor() {
        this.resetLifes()
    }

    resetLifes() {
        this.players[0].life = 16 * this.players[0].life / 2;
        this.players[1].life = 16 * this.players[1].life / 2
    }

    playRound() {
        const attackPlayer = this.players[this.actualTurn];
        const defendPlayer = this.players[this.nextTurn];

        for (let index = 0; index < attackPlayer.cards.floors.length; index++) {
            const action = this.battle.attack(attackPlayer, defendPlayer, index);
            if (action) {
                continue;
            }
            const actualAttackFloor = attackPlayer.getFloorById[index];
            const actualDefendFloor = defendPlayer.getFloorById[index];
            if (defendPLayer.life <= 0) {
                attackPlayer.level += defendPlayer.level - attackplayer.level <= 0 ? 1 : 0.25;
                return;
            }
            if (actualDefendFloor.card.life <= 0) {
                defendPlayer.killCard(index);
            }
        }
        this.toggleTurn();
    }
}
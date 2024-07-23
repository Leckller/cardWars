import { BattleType, GameType, ProfileType } from "../types";

export default abstract class Game implements GameType.default {
    // [0] = User; [1] = Enemy;
    turn: 0 | 1 = 0;
    players: [ProfileType.default, ProfileType.default];
    battle: BattleType.default;
    turnStage: number = 1;

    constructor(players: [ProfileType.default, ProfileType.default], battle: BattleType.default) {
        this.players = players;
        this.battle = battle;
    }

    actualTurn() {
        return this.turn;
    }
    nextTurn() {
        return this.turn === 0 ? 1 : 0
    }
    toggleTurn() {
        this.players[this.actualTurn()].mana += this.turnStage;
        this.turnStage = this.turnStage >= 10 ? 10 : this.turnStage++;
        this.turn = this.nextTurn();
    }

    resetLifes() {
        this.players[0].life = 16 * this.players[0].life / 2;
        this.players[1].life = 16 * this.players[1].life / 2
    }

    playRound() {
        if (this.turnStage > 1) {
            const attackPlayer = this.players[this.actualTurn()];
            const defendPlayer = this.players[this.nextTurn()];

            for (let index = 0; index < 4; index++) {
                const action = this.battle.play(attackPlayer, defendPlayer, index);
                if (action) {
                    continue;
                }

                if (defendPlayer.life <= 0) {
                    attackPlayer.level += defendPlayer.level - attackPlayer.level <= 0 ? 1 : 0.25;
                    console.log(`Vitoria do player ${this.actualTurn()}`)
                    return;
                }
            }
        }
        this.toggleTurn();
    }
}
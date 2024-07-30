import Swal from "sweetalert2";
import { BattleType, GameType, ProfileType } from "../types";

export default abstract class Game implements GameType.default {
    // [0] = User; [1] = Enemy;
    turn: boolean = true;
    battle: BattleType.default;
    turnStage: number = 1;

    constructor(battle: BattleType.default) {
        this.battle = battle;
    }

    startGame(attackPlayer: ProfileType.default, defendPlayer: ProfileType.default): void {
        this.options(attackPlayer, defendPlayer);
        this.playRound(attackPlayer, defendPlayer);
    }

    nextTurn() {
        return this.turn = !this.turn;
    }

    toggleTurn(nextPlayer: ProfileType.default) {
        this.turnStage += 1
        nextPlayer.mana = this.turnStage >= 10 ? 10 : this.turnStage;
        this.turn = this.nextTurn();
    }

    options(p1: ProfileType.default, p2: ProfileType.default): void {
        p1.startGame();
        p2.startGame();
    }

    playRound(attackPlayer: ProfileType.default, defendPlayer: ProfileType.default) {
        if (this.turnStage > 1) {
            for (let index = 0; index < 4; index++) {
                const action = this.battle.play(attackPlayer, defendPlayer, index);

                if (action) {
                    continue;
                }

                if (defendPlayer.life <= 0) {
                    // Criar metodo para up level
                    attackPlayer.level += defendPlayer.level - attackPlayer.level <= 0 ? 1 : 0.25;
                    Swal.fire({
                        icon: "info",
                        title: `${!this.turn ? "Vitoria!" : "Derrota..."}`,
                        text: `${attackPlayer.name} ganhou!`,
                    });
                    return;
                }
            }
        }
        this.toggleTurn(defendPlayer);
    }
}
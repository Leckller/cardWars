import { BattleType, CardType, GameType, ProfileType } from "../types";

export default abstract class Game implements GameType.default {
    // [0] = User; [1] = Enemy;
    turn: 0 | 1 = 0;
    players: [ProfileType.default, ProfileType.default] = [] as any;
    battle: BattleType.default;
    turnStage: number = 1;

    constructor(battle: BattleType.default) {
        this.battle = battle;
    }

    setStandartCards(): void {
        const player1 = this.players[0]
        const player2 = this.players[1]
        if (player1.cards.fila.stack.length <= 8) {
            player1.setRandomDeck();
            player1.startGame()
        }
        if (player2.cards.fila.stack.length <= 8) {
            player2.setRandomDeck();
            player2.startGame()
        }
    }

    setPlayers(players: [ProfileType.default, ProfileType.default]): void {
        this.players = players;
    }

    startGame(): void {
        this.resetLifes();
        this.setStandartCards();
        this.playRound();
    }

    actualTurn() {
        return this.turn;
    }
    nextTurn() {
        return this.turn === 0 ? 1 : 0
    }
    toggleTurn() {
        this.turnStage += 1
        this.players[this.actualTurn()].mana = this.turnStage >= 10 ? 10 : this.turnStage;
        this.turn = this.nextTurn();
    }

    resetLifes() {
        this.players[0].life = this.players[0].maxLife;
        this.players[1].life = this.players[1].maxLife;
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
                    // Criar metodo para up level
                    attackPlayer.level += defendPlayer.level - attackPlayer.level <= 0 ? 1 : 0.25;
                    console.log(`Vitoria do player ${this.actualTurn()}`)
                    return;
                }
            }
        }
        this.toggleTurn();
    }
}
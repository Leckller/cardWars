import { BattleType, ProfileType } from ".";

export interface GameFields {
    // false = User; true = Enemy;
    turn: boolean;
    battle: BattleType.default;
}

export interface GameMethods {
    nextTurn(): boolean

    toggleTurn(nextPlayer: ProfileType.default): void

    options(p1: ProfileType.default, p2: ProfileType.default): void

    playRound(attackPlayer: ProfileType.default, defendPlayer: ProfileType.default): void

    startGame(attackPlayer: ProfileType.default, defendPlayer: ProfileType.default): void
}

export default interface Game extends GameFields, GameMethods { }
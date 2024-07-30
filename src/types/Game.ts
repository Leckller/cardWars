import { BattleType, ProfileType } from ".";

export interface GameFields {
    // [0] = User; [1] = Enemy;
    turn: 0 | 1;
    players: [ProfileType.default, ProfileType.default];
    battle: BattleType.default;
}

export interface GameMethods {
    actualTurn(): 0 | 1

    nextTurn(): 0 | 1

    toggleTurn(): void

    resetLifes(): void

    playRound(): void

    startGame(): void

    setPlayers(players: [ProfileType.default, ProfileType.default]): void

    setStandartCards(): void
}

export default interface Game extends GameFields, GameMethods { }
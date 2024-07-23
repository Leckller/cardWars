import Battle from "../src/GameClasses/Battle"
import Finn from "../src/GameClasses/Profiles/Finn";

describe('Testes da classe Battle', () => {
    const battle = new Battle();
    const player1 = new Finn();
    const player2 = new Finn();

    // Jogada 1
    player1.buyCard()
    player1.useCard(0, 1);

    test('Testa se o player possui 10 de vida', () => {
        expect(player1.life).toBe(10);
    })

    test('Testa se o player 2 recebe dano', () => {
        battle.play(player1, player2, 1);
        console.log(player1)
        expect(player2.life).toBe(8);
    });
})
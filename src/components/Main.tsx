import Finn from '../GameClasses/Profiles/Finn'
import Game from '../GameClasses/Game';
import Battle from '../GameClasses/Battle';
import Card from '../types/Card';
import { useImmer } from 'use-immer';

const finn1 = new Finn();
const finn2 = new Finn();
function Main() {
  const [game, setGame] = useImmer(new Game(new Battle()))
  const [cards, setCards] = useImmer<Card[]>([]);

  return (
    <main className='w-screen h-full'>
      <button
        onClick={() => {
          game.setPlayers([finn1, finn2]);
          setCards(game.players[0].cards.hand)
        }}>
        setPlayers
      </button>

      <section className='flex flex-row gap-5'>
        {cards?.map((card, i) => (
          <div key={i}>
            <h2>{card.name}</h2>
            <button onClick={() => {
              game.players[0].useCard(card.id as number, i)
              setCards(game.players[0].cards.hand)
              setGame(game)
            }}>Use</button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;

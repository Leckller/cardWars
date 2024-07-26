import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import Finn from '../GameClasses/Profiles/Finn'
import { setPlayers, useCard } from '../redux/Reducers/Game';

function Main() {
  const finn1 = new Finn();
  const finn2 = new Finn();
  const dispatch = useAppDispatch();
  dispatch(setPlayers([finn1, finn2]))
  return (
    <main className='w-screen h-full'>
      <article className='flex flex-row w-full gap-5'>
        {finn1.cards.hand.map((card, i) => (
          <div className='flex flex-col w-48'>
            <h2>{card.name}</h2>
            <p>Attack: {card.damage}</p>
            <button onClick={() => dispatch(useCard({ cardIndex: i, floorIndex: 1 }))}>Use</button>
          </div>
        ))}
      </article>
    </main>
  );
}

export default Main;

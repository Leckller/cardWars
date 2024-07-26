import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import Finn from '../GameClasses/Profiles/Finn'
import { setPlayers, useCard } from '../redux/Reducers/Game';
import { useEffect, useState } from 'react';

function Main() {
  const [stateReload, stateSetReload] = useState(false)
  const dispatch = useAppDispatch();
  const { game } = useAppSelector(s => s.Game)
  useEffect(() => {

  }, [stateReload])

  function handlerReload() {
    stateSetReload(!stateReload)
  }

  return (
    <main className='w-screen h-full'>
      <section>
        Choose Hero
        <button onClick={() => dispatch(setPlayers([new Finn(), new Finn()]))}>Finn</button>
      </section>
      <article className='flex flex-row w-full gap-5'>
        {game.players[0] && game.players[0].cards.hand.map((card, i) => (
          <div className='flex flex-col w-48'>
            <h2>{card.name}</h2>
            <p>
              {card.damage} Atk / {card.life} Def
            </p>
            <button onClick={() => {
              console.log(i)
              dispatch(useCard({ cardIndex: i, floorIndex: 1 }));
              handlerReload();
            }}>Use</button>
          </div>
        ))}
      </article>
    </main>
  );
}

export default Main;

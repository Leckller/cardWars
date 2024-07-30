import { useAppDispatch } from "../hooks/reduxHooks";
import { playRound } from "../redux/Reducers/Game";
import { GameType } from "../types"
import CardComponent from "./CardComponent"

function HandComponent({ game }: { game: GameType.default }) {
    const player = game.players[0];
    const dispatch = useAppDispatch();

    return (
        <article className='flex flex-row'>
            <section className="min-w-[10%] flex items-center justify-center">
                <p>{player?.cards.fila.stack.length}</p>
            </section>
            <section className="flex flex-row min-w-[80%] justify-center">
                {player?.cards.hand.map(c => (
                    <CardComponent key={c.id} used={false} card={c} />
                ))}
            </section>
            <section className="min-w-[10%] flex flex-col items-center justify-center">
                <p className="float-left">{player?.mana}</p>
                <button className="bg-green-700 border-2 border-green-500 size-52"
                    onClick={() => dispatch(playRound())}>
                    Battle!
                </button>
            </section>
        </article>
    )
}

export default HandComponent
import { GameType } from "../types"
import CardComponent from "./CardComponent"

function HandComponent({ game }: { game: GameType.default }) {
    return (
        <article className='flex flex-row'>
            {game.players[0]?.cards.hand.map(c => (
                <CardComponent key={c.id} used={false} card={c} />
            ))}
        </article>
    )
}

export default HandComponent
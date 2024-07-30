import { ProfileType } from "../types"

function PlayerComponent({ player, left = true }: { player: ProfileType.default, left?: boolean }) {
    return (
        <article className="h-40">
            <section className={`w-40 bg-blue-400 flex ${left ? "flex-row-reverse pr-[10px]" : ""}`}>
                <p>{player?.life}</p>
                <div className={``} />
            </section>
            <section className={`size-32 flex flex-nowrap ${left ? "flex-row-reverse float-right" : ""}`}>
                <img src={player?.image} alt={player?.name} />
                <p className="size-16">{player?.mana}</p>
            </section>
        </article>
    )
}

export default PlayerComponent
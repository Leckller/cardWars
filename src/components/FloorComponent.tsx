import { useAppDispatch } from "../hooks/reduxHooks";
import { useCard } from "../redux/Reducers/Game";
import { GameType } from "../types";
import ColorFloor from "../utils/ColorFloor";
import CardComponent from "./CardComponent";

function FloorComponent({ game, enemy = true }: { game: GameType.default, enemy?: boolean }) {
    const dispatch = useAppDispatch();

    if (enemy) {
        return (
            <article className='flex flex-row'>
                {game.players[1]?.cards?.floors.map((f, i) => (
                    <div
                        key={i}
                        className={`flex flex-row ${ColorFloor(f.element)}`}>
                        {f.card === undefined ? (
                            <div className='border min-w-52 max-w-40 min-h-80'></div>
                        ) : (
                            <CardComponent used={true} card={f.card} />
                        )}
                    </div>
                ))}
            </article>
        )
    }

    return (
        <article className='flex flex-row'>
            {game.players[0]?.cards?.floors.map((f, i) => (
                <div
                    className={`flex flex-row ${ColorFloor(f.element)}`}
                    onDragLeave={(e) => e.preventDefault()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(event) => {
                        event.preventDefault();
                        try {
                            const data = JSON.parse(event.dataTransfer.getData("object/plain")) as { id: number, used: boolean };
                            if (!data.used) {
                                dispatch(useCard({ cardId: Number(data.id), floorIndex: i }))
                            }
                        } catch {
                            console.error("Você não pode alterar a posição de uma carta já posicionada");
                        }
                    }}
                    key={i}
                >
                    {f.card === undefined ? (
                        <div className='border min-w-52 max-w-40 min-h-80'></div>
                    ) : (
                        <CardComponent used={true} card={f.card} />
                    )}
                </div>
            ))}
        </article>
    )
}

export default FloorComponent
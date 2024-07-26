import CardComponent from "../components/CardComponent";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useCard } from "../redux/Reducers/Game";
import ColorFloor from "../utils/ColorFloor";

function Battle() {
    const { cards, game } = useAppSelector(s => s.Game);
    const dispatch = useAppDispatch();

    return (
        <div>
            <section className='flex flex-col'>
                <h2>Table</h2>
                <article className='flex flex-row'>
                    {game.players[1]?.cards?.floors.map((f, i) => (
                        <div
                            key={i}
                            className={`flex flex-row ${ColorFloor(f.element)}`}>
                            {f.card === undefined ? (
                                <div className='border min-w-20 min-h-20'></div>
                            ) : (
                                <CardComponent used={true} card={f.card} />
                            )}
                        </div>
                    ))}
                </article>
                <article className='flex flex-row z-0'>
                    {game.players[0]?.cards?.floors.map((f, i) => (
                        <div
                            className={`z-10 flex flex-row ${ColorFloor(f.element)}`}
                            onDragLeave={(e) => e.preventDefault()}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(event) => {
                                event.preventDefault();
                                try {
                                    const data = JSON.parse(event.dataTransfer.getData("object/plain")) as { id: number, used: boolean };
                                    if (!data.used) {
                                        dispatch(useCard({ cardId: Number(data.id), floorIndex: 1 }))
                                    }
                                } catch {
                                    console.error("Você não pode alterar a posição de uma carta já posicionada");
                                }
                            }}
                            key={i}
                        >
                            {f.card === undefined ? (
                                <div className='border min-w-20 min-h-20'></div>
                            ) : (
                                <CardComponent used={true} card={f.card} />
                            )}
                        </div>
                    ))}
                </article>
            </section>
            <section>
                <h2>Hand</h2>
                <article className='flex flex-row'>
                    {cards.map(c => (
                        <CardComponent used={false} card={c} />
                    ))}
                </article>
            </section>
        </div>
    )
}

export default Battle
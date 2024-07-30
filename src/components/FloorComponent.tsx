import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useCard } from "../redux/Reducers/Game";
import ColorFloor from "../utils/ColorFloor";
import CardComponent from "./CardComponent";

function FloorComponent({ isEnemy = true }: { isEnemy?: boolean }) {
    const dispatch = useAppDispatch();
    const { enemyFloors, playerFloors } = useAppSelector(s => s.Game);

    if (isEnemy) {
        return (
            <article className='flex flex-row'>
                {enemyFloors.map((f, i) => (
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
            {playerFloors.map((f, i) => (
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
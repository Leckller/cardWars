import { CardType } from '../types';

function CardComponent({ card, used }: { card: CardType.default, used: boolean }) {
    return (
        <div
            key={card.id}
            draggable={!used}
            onDragStart={(event) => {
                console.log('drag')
                console.log(used)
                if (used === false) {
                    event.dataTransfer.setData("object/plain", JSON.stringify({ id: card.id, used }));
                }
            }}
            className='flex flex-col w-20 h-20 items-center justify-around'>
            <h2>{card.name}</h2>
        </div>)
}

export default CardComponent;
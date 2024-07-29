import { CardType } from '../types';
import ColorFloor from '../utils/ColorFloor';

function CardComponent({ card, used }: { card: CardType.default, used: boolean }) {
    return (
        <article
            key={card.id}
            draggable={!used}
            onDragStart={(event) => {
                console.log('drag')
                console.log(used)
                if (used === false) {
                    event.dataTransfer.setData("object/plain", JSON.stringify({ id: card.id, used }));
                }
            }}
            className={`min-w-52 max-w-40 min-h-80 border-8
                ${ColorFloor(card.element, "border")} relative
            `}>
            <div className='border border-black w-full h-full flex flex-col justify-between text-center'>
                <header className='flex flex-row justify-around items-center w-full pt-1'>
                    <p className='flex items-center justify-center text-3xl size-8 rounded-full bg-purple-950 text-white'>{card.cost}</p>
                    <h2>{card.type}</h2>
                    <p>{card.element}</p>
                </header>
                <img src={card.image} alt={card.name} />
                <section className={`${ColorFloor(card.element)}`}>
                    <h2>{card.name}</h2>
                    <p>
                        <strong>FLOOP {card.floopCost}</strong>
                        <br />
                        {card.description}
                    </p>
                    <article className='flex flex-row justify-between w-full'>
                        <p>{card.damage}⚔</p>
                        <p>🛡{card.life}</p>
                    </article>
                </section>
            </div>
        </article>)
}

export default CardComponent;
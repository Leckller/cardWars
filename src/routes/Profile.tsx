import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

function Profile() {
    const navigate = useNavigate();
    const { profile } = useAppSelector(s => s.Game);
    return (
        <div>
            <header className="flex flex-row w-screen h-20 items-center justify-around">
                <nav>
                    <button onClick={() => navigate('/')}>
                        Home
                    </button>
                </nav>
                <h1>Profile</h1>
                <button className="hover:scale-105">
                    <img className="size-14 rounded-full border-4 border-black" src={profile.image} alt="Profile Icon" />
                </button>
            </header>
            <main>
                <h2>Baralho</h2>
                <div>
                    {profile.cards.allCards.map(card => (
                        <div key={card.id} className="flex flex-row gap-2">
                            <img className="size-10" src={card.image} alt={card.name} />
                            <p>{card.name}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Profile
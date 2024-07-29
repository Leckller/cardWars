import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import CardComponent from "../components/CardComponent";

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
                <div className="flex flex-row w-full justify-center gap-5 flex-wrap">
                    {profile.cards.allCards.map(card => (
                        <CardComponent card={card} used={false} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Profile
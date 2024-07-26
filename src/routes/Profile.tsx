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
        </div>
    )
}

export default Profile
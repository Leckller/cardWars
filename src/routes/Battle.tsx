import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setPlayers, startGame, } from "../redux/Reducers/Game";
import { Maps } from "../utils/Maps";
import { useEffect } from "react";
import FloorComponent from "../components/FloorComponent";
import HandComponent from "../components/HandComponent";
import PlayerComponent from "../components/PlayerComponent";

function Battle() {
    const { game, profile } = useAppSelector(s => s.Game);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPlayers([profile, Maps[Number(id)]]))
        dispatch(startGame());
    }, [])

    return (
        <section className="w-screen h-screen">
            <header className="flex absolute flex-row w-screen justify-between">
                <PlayerComponent left={false} player={game.players[0]} />
                <PlayerComponent player={game.players[1]} />
            </header>
            <section className='h-[60%] flex flex-col justify-center items-center'>
                {/* <h2>Table</h2> */}
                <FloorComponent game={game} />
                <FloorComponent game={game} enemy={false} />
            </section>
            <section>
                {/* <h2>Hand</h2> */}
                <HandComponent game={game} />
            </section>
        </section>
    )
}

export default Battle
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setPlayers, startGame, } from "../redux/Reducers/Game";
import { Maps } from "../utils/Maps";
import { useEffect } from "react";
import FloorComponent from "../components/FloorComponent";
import HandComponent from "../components/HandComponent";

function Battle() {
    const { game, profile } = useAppSelector(s => s.Game);
    const { id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPlayers([profile, Maps[Number(id)]]))
        dispatch(startGame());
    }, [])

    return (
        <div>
            <section className='flex flex-col'>
                <h2>Table</h2>
                <FloorComponent game={game} />
                <FloorComponent game={game} enemy={false} />
            </section>
            <section>
                <h2>Hand</h2>
                <HandComponent game={game} />
            </section>
        </div>
    )
}

export default Battle
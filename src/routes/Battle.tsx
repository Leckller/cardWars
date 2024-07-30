import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { startGame, setEnemy } from "../redux/Reducers/Game";
import { Maps } from "../utils/Maps";
import { useEffect } from "react";
import FloorComponent from "../components/FloorComponent";
import HandComponent from "../components/HandComponent";
import PlayerComponent from "../components/PlayerComponent";

function Battle() {
    const { game, enemy, player } = useAppSelector(s => s.Game);
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setEnemy(Maps[Number(id)]))
        dispatch(startGame());
    }, [])

    return (
        <section className="w-screen h-screen">
            <h2>{`Vez do ${game.turn ? enemy.name : player.name}`}</h2>
            <header className="flex absolute flex-row w-screen justify-between">
                <PlayerComponent left={false} />
                <PlayerComponent />
            </header>
            <section className='h-[60%] flex flex-col justify-center items-center'>
                {/* <h2>Table</h2> */}
                <FloorComponent />
                <FloorComponent isEnemy={false} />
            </section>
            <section>
                {/* <h2>Hand</h2> */}
                <HandComponent />
            </section>
        </section>
    )
}

export default Battle
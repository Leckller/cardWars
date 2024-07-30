import { useNavigate } from "react-router-dom"

function Map() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/battle/0")}>battle 0</button>
        </div>
    )
}

export default Map
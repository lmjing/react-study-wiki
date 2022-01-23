import ReactDOM from 'react-dom';
import './index.css';
import {useState} from "react";

function Square(props) {
    const {value, onClick} = props;

    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

function Board() {
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newSquares = [...squares]
        newSquares[i] = xIsNext ? 'X' : 'O'
        setXIsNext(!xIsNext)
        setSquares(newSquares)
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
    }

    const status = 'Next player: X';

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);

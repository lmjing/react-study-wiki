import ReactDOM from 'react-dom';
import './index.css';
import {useEffect, useState} from "react";

function Square(props) {
    const {value, onClick} = props;

    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

function Board(props) {
    const {onClick, squares} = props

    // const [squares, setSquares] = useState(new Array(9).fill(null));

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => onClick(i)}/>;
    }

    return (
        <div>
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
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [current, setCurrent] = useState(history[0]);
    const [xIsNext, setXIsNext] = useState(true);
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState();

    useEffect(() => {
        setCurrent(history[history.length - 1])
    }, [history])

    useEffect(() => {
        if (count > 9) return

        const winner = calculateWinner(current)
        if (winner) {
            setStatus(`Winner is ${winner}`)
            setCount(10)
        } else if (count === 9) {
            setStatus(`No Winner! Game Over`)
            setCount(10)
        }
        else {
            setStatus(`Next Player is ${!xIsNext ? 'X' : 'O'}`)
            setXIsNext(!xIsNext)
            setCount(count + 1)
        }
    }, [current])

    const handleClick = (i) => {
        if (current[i] || count > 9) return

        const newSquares = [...current]
        newSquares[i] = xIsNext ? 'X' : 'O'
        setHistory([...history, newSquares])
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current} onClick={(i) => handleClick(i)}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);

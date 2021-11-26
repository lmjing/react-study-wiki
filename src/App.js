import './App.css';
import Content from "./pages/Content";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Study Wiki</h1>
                <p>
                    React 학습 내용 및 실습 화면을 기록합니다.
                </p>
            </header>
            <Content/>
        </div>
    );
}

export default App;

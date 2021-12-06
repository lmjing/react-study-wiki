import logo from './logo.svg'
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="black-nav">
          <img src={logo} alt="logo" style={{width: '30px'}}/>
          <div>React Portfolio</div>
        </header>
      </div>
  );
}

export default App;

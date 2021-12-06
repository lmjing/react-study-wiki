import logo from './logo.svg'
import './App.css';
import {useState} from "react";

function App() {

    const [projects, setProjects] = useState([{
        name: 'project1',
        date: '2021.12.06'
    }, {
        name: 'project2',
        date: '2022.01.06'
    }])

    return (
        <div className="App">
            <header className="black-nav">
                <img src={logo} alt="logo" style={{width: '30px'}}/>
                <div>React Portfolio</div>
            </header>
            <div className="main-container">
                {
                    projects.map(project => {
                        const {name, date} = project
                        return (
                            <div className="project">
                                <h3>{name}</h3>
                                <p>{date}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App;

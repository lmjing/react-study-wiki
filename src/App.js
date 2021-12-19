import logo from './logo.svg'
import './App.css';
import {useState} from "react";
import {Link, Route, Switch} from 'react-router-dom';

function App() {

    const [projects, setProjects] = useState([{
        id: 1,
        name: 'project1',
        date: '2021.12.06',
        like: 0
    }, {
        id: 2,
        name: 'project2',
        date: '2022.01.06',
        like: 0
    }])

    const addLike = (i) => {
        const newArray = [...projects]
        newArray[i].like++
        setProjects(newArray)
    }

    return (
        <Switch>
            <Route exact path="/">
                <div className="App">
                    <header className="black-nav">
                        <img src={logo} alt="logo" style={{width: '30px'}}/>
                        <div>React Portfolio</div>
                    </header>
                    <div className="main-container">
                        {
                            projects.map((project, i) => {
                                const {id, name, date, like} = project
                                return (
                                    <div className="project">
                                        <h3>
                                            <Link to={`/project/${id}`}>{name}</Link>
                                            <span onClick={() => addLike(i)}>👍</span>
                                            {like}
                                        </h3>
                                        <p>{date}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Route>
            <Route link="/project/1">project1</Route>
            <Route link="/project/2">project2</Route>
        </Switch>
    );
}

export default App;

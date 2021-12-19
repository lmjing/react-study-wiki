import './App.css';
import React, {Suspense, lazy} from 'react';
import Home from './routes/Home'
import {Route, Switch, useParams} from 'react-router-dom';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path='/project/:projectId'>
                    <Project/>
                </Route>
            </Switch>
        </Suspense>
    );
}

function Project() {
    const {projectId} = useParams();
    const Component = lazy(() => import(`./projects/${projectId}`))
    return <Component/>
}

export default App;

import './App.css';
import React, {Suspense, lazy} from 'react';
import Home from './routes/Home'
import {Routes, Route, useParams} from 'react-router-dom';

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:projectId" element={<Project />} />
            </Routes>
        </Suspense>
    );
}

function Project() {
    const {projectId} = useParams();
    const Component = lazy(() => import(`./projects/${projectId}`))
    return <Component/>
}

export default App;

import React from 'react';
import './App.css';
import Profile from './basic/Profile';

function App() {
  return (
    <div className="App">
      <Profile
        name={'James Kim'}
        job={'FE 개발자'}
        isNew
        imageUrl={
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        }
      />
    </div>
  );
}

export default App;

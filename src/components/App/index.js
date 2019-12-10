import React from 'react';
import { HashRouter as Router } from "react-router-dom";

import './App.css';
import Header from '../Header';
import Content from '../Content';

function App() {
  return (
    <div className='App'>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC|Julius+Sans+One|Orbitron|Raleway|Roboto|Shadows+Into+Light&display=swap" rel="stylesheet"/>
        <Router className='content-div'>
            <div className='linker'>
                <Header/>
                <hr/>
                <Content/>
            </div>
        </Router>
    </div>
  );
}

export default App;

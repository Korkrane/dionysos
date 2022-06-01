import React from 'react';
import logo from './logo.svg';
import './App.css';
import Marquee from "react-fast-marquee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section id="maisons">

          <Marquee gradient={false}>
            Dionysos1 Dionysos2 Dionysos3
          </Marquee>
        </section>
        <section id="agency"></section>
        <section id="appelation"></section>
        <section id="contact"></section>
      </header>
    </div>
  );
}

export default App;

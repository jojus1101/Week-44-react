import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import IntervalCount from './IntervalCount';
import Counter from './Counter';
import Demo from './Demo';
import Joke from './Joke';


let app = <Demo/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="demo">start</a> &nbsp;
         <a href="/"  className="x" id="app1">ex1</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3</a> &nbsp;
         <a href="/"  className="x" id="intc">intervalClicker</a> &nbsp;
         <a href="/"  className="x" id="time">Timer</a> &nbsp;
         <a href="/"  className="x" id="joke">Jokes</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "demo": app = <Demo />; break;
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "intc": app = <IntervalCount />; break;
        case "time": app = <Counter />; break;
        case "joke": app = <Joke />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
//ReactDOM.render(<App2 />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListDemoApp from './ListDemoApp';
import ListDemoApp2 from './ListDemoApp2';

let app = <App/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">start</a> &nbsp;
         <a href="/"  className="x" id="ex1">ex1</a> &nbsp;
         <a href="/"  className="x" id="ex2">ex2</a> &nbsp;
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
        case "app1": app = <App />; break;
        case "ex1": app = <ListDemoApp />; break;
        case "ex2": app = <ListDemoApp2 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
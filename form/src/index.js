import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FormDemo from './FormDemo';
import FormDemoMultiple from './FormDemoMultiple';

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">START</a>&nbsp;
      <a href="/" className="x" id="form">Formdemo</a> &nbsp;
      <a href="/" className="x" id="form2">Formdemo2</a> &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":app = <App />;break;
    case "form":app = <FormDemo />;break;
    case "form2":app = <FormDemoMultiple />;break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
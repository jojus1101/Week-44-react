import React from 'react';
import PropTypes from "prop-types";
import { names } from "./file2";

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson(props) {
    const person = props.person;
    const { firstName, lastName, gender, email, phone } = person;
  
    return (
      <div>
        <p>
          Person: <br></br>
          First Name: {firstName} <br></br>
          Last Name: {lastName} <br></br>
          Email: {email} <br></br>
        </p>
      </div>
    );
  }

//Set Type
Welcome.propTypes = {
    name: PropTypes.string
  }
  //Set Default Value
Welcome.defaultProps = {
    name: "UNKNOWN"
  }
  // react component er function / functional component
export default function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome name="" />
        <WelcomePerson person={names[0]}  />
        <WelcomePerson person={names[1]}  />
        <WelcomePerson person={names[2]}  />
        
      </div>
    );
  }
  
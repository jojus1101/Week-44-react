import React, { useState } from "react";
 
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />
  
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  function ListDemo(props) {
    console.log(props.numbers);
    return (
      <div>
        <h2>All numbers passed in via props</h2>
        {
        <NumberList numbers={props.numbers} />
        }
      </div>
    );
  }

  export default function App() {
const [numbers, setNumbers] = useState([1, 2, 3, 4]);  }
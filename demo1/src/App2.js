import React from 'react';

import Person from "./file2";
import { males } from "./file2";
import { females } from "./file2";

console.log([...males,...females]);
console.log([...males,"Kurt","Helle",...females,"Tina"]);
    
const { firstName, email } = Person;
export default function App2(){
    return(
        <div>
         <p>
          firstName: {firstName} and email: {email}
        </p>
        </div>

    )
}
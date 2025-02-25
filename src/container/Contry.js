import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Contry(props) {

    const [contry,setContry] = useState("India");
    const [population,setPopulation] = useState("135cr");

    const changeContry = () => {
       if (contry === "India") {
        setContry("USA")
        setPopulation("300cr")
       } else {
        setContry("India")
        setPopulation("135cr")
       }
    }

    return (
        <div>
            <h2>contry function based component</h2>
            <p>{contry}</p>
            <p>{population}</p>
            <button onClick={changeContry} >Change Contry</button>

            <Cityfun contryname = {contry} />
        </div>
    );
}

export default Contry;
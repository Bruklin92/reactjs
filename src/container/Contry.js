import React, { useState } from 'react';

function Contry(props) {

    const [contry,setContry] = useState("India");
    const [population,setPopulation] = useState("135cr");

    const changeContry = () => {
        setContry("USA")
        setPopulation("300cr")
    }

    return (
        <div>
            <h2>contry function based component</h2>
            <p>{contry}</p>
            <p>{population}</p>
            <button onClick={changeContry}>Change Contry</button>
        </div>
    );
}

export default Contry;
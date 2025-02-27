import React, { useState } from 'react';

function Changebac(props) {
    const [color, setColor] = useState("Blue")

    const changeColor = () => {
        setColor(color);
    }

    return (
        <div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Changebac;
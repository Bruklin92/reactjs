import React, { useState, useEffect } from 'react';

function Changebac(props) {
    const [color, setColor] = useState("Blue")

    const click = () => {
        setColor(color);
    }

    useEffect(()=>{
        document.body.style.backgroundColor = color
    }, [color])

    return (
        <div>
            <button onClick={() =>{click("yellow")}}>Change Color</button>
        </div>
    );
}

export default Changebac;
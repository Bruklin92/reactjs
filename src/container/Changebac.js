import React, { useState, useEffect } from 'react';

function Changebac(props) {
    const [color, setColor] = useState(false)

    const handleTheam = () => {
        setColor(!color)
    }

    return (
        <div style={{
            backgroundColor: !color ? 'black' : 'white', 
            color: !color ? 'white' : 'black',
            height: '100vh'
        }}>
            <h2 id='demo'>Change Theam</h2>
            <button onClick={handleTheam}>Change Color</button>
        </div>
    );
}

export default Changebac;
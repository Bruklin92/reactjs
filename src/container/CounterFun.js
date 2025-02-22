import React, { useState } from 'react';

function CounterFun(props) {
    const[count,setCount] = useState(0);

    const Addcount = () => {
        setCount(count + 1);
    }

    const mincount = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter Function Based</h2>
            <p>{count}</p>
            <button onClick={Addcount} disabled={count === 5 ? true : false}>+</button>
            <button onClick={mincount} disabled={count === 0 ? true : false}>-</button>
        </div>
    );
}

export default CounterFun;
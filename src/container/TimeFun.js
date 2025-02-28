import React, { Component, useState } from 'react';

function TimeClass(props) {
    const [time, settime] = useState(new Date());

    tick = () => {
        settime(new Date());
    }

    const componentDidMount = () => {
        setInterval(() => {
            tick();
        })
    }

    const componentDidUpdate = (prevProps, prevState) => {
        if (time !== prevState.settime) {
            console.log("componentDidUpdate Called");
        }
    }

    return (
        <div>
            <h2>Time:</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default TimeClass;
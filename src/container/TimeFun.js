import React, { Component, useEffect, useState } from 'react';

function TimeClass(props) {
    //1.
    const [time, settime] = useState(new Date());
    
    useEffect(() => {
        //3.componentDidMount    //4.componentDidUpdate
        const timeref = setInterval(() => {
            settime(new Date());
        })

        //5.componentWillUnmount
        return () => {
            clearInterval(timeref);
        }
    }, [time])
 
    //2. 
    return (
        <div>
            <h2>Time:</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
} 

export default TimeClass;
import React, { Component } from 'react';

class Time extends Component {
    
    //1. It is used to initialize state value or binding methodes
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }w

    tick = () => {
        this.setState({
            time: new Date()
        });
    }

    //3It is called after mounting. It is mostly use to get data from server.
    componentDidMount = () => {
        this.timeref = setInterval(() => {
            this.tick();
        }, 1000);
    }

    //4.It is called when state or props value changed
    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState.state) {
            console.log("componentDidUpdate Called");
        }
    }

    //5.It is used relser occupied resorces when we moved to anothe component
    componentWillUnmount = () => {
        clearInterval(this.timeref);
    }

    //2. It is used to display JSX in DOM. It is called when any state or props are changed 
    render() {
        return (
            <div>
                <h2>Curent Time</h2>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;
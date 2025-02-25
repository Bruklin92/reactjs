import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    Addcount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    MineCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Class based Counter</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.Addcount} disabled={this.state.count === 5 ? true : false}>+</button>
                <button onClick={this.MineCount} disabled={this.state.count === 0 ? true : false}>-</button>
            </div>
        );
    }
}

export default Counter;
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


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
            <Container>
                <h2>Class based Counter</h2>
                <p>Count: {this.state.count}</p>
                <Button onClick={this.Addcount} disabled={this.state.count === 5 ? true : false} variant="dark">+</Button>
                <Button onClick={this.MineCount} disabled={this.state.count === 0 ? true : false} variant="light">-</Button>
            </Container>
        );
    }
}

export default Counter;
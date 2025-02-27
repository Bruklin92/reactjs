import React, { Component } from 'react';

class ChangebacClass extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            color: false
        }
    }

    handleTheam = () => {
        this.setState({color: !this.state.color})
    }
    
    render() {
        return (
            <div style={{
                backgroundColor: this.state.color ? 'black' : 'white',
                color: this.state.color ? 'white' : 'black',
                height: '100vh'
            }}> 
                 <h2 id='demo'>Change Theam</h2>
                 <button onClick={this.handleTheam}>Change Color</button>
            </div>
        );
    }
}

export default ChangebacClass;
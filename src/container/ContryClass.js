import React, { Component } from 'react';
// state: it is object that is use to store information/data
class ContryClass extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contry: 'India',
            population: '135cr'
        }
    }

    changeContry = () =>   {
        console.log("ewg");
        this.setState({
            contry: 'USA',
            population: '300cr'
        })
    }

    render() {
        return (
            <div>
                <h2>contry class based component</h2>
                <p>Contry : {this.state.contry}</p>
                <p>Population : {this.state.population}</p>
                <button onClick={this.changeContry}>Change Contry</button>
            </div>
        );
    }
}

export default ContryClass;
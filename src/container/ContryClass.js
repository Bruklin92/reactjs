import React, { Component } from 'react';
import CityClass from './CityClass';
// state: it is object that is use to store information/data
class ContryClass extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contry: 'India',
            population: '135cr'
        }
    }

    changeContry = () => {
        if (this.state.contry === "India") {
            this.setState({
                contry: 'USA',
                population: '300cr'
            })
        } else {
            this.setState({
                contry: 'India',
                population: '135cr'
            })
        }
    }

    render() {
        return (
            <div>
                <h2>contry class based component</h2>
                <p>Contry : {this.state.contry}</p>
                <p>Population : {this.state.population}</p>
                <button onClick={this.changeContry}>Change Contry</button>

                <CityClass contry ={this.state.contry} />
            </div>
        );
    }
}

export default ContryClass;
import React, { Component } from 'react';

class CityClass extends Component {
    constructor(props) {
        super(props);
        console.log(props.contry);

    
    }




    render() {
        return (
            <div>
                City: {this.props.contry === "India" ? <p>Dilhi</p> : <p>New Yourk</p>}
            </div>
        );
    }
}

export default CityClass;
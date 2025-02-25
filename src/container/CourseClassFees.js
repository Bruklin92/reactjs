import React, { Component } from 'react';

class CourseClassFees extends Component {
    constructor(props) {
        super(props);
        console.log(props.cf);
        this.state = {
            "full_stack": 75000,
            "web_desing": 60020,
            "react": 55000
        }
    }

    render() {
        return (
            <div>
                <p>Fees: {this.state[this.props.cf]}</p>
            </div>
        );
    }
}

export default CourseClassFees;
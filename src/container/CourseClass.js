import React, { Component } from 'react';
import CourseClassFees from './CourseClassFees';

class CourseClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: ''
        }
    }


    handleDrop = (v) => {
        this.setState({ course: v });
        console.log(v);
    }

    render() {
        return (
            <div>
                <select name="" id="" onChange={(e) => this.handleDrop(e.target.value)}>
                    <option value="0">--select Course--</option>
                    <option value="full_stack">Full Stack</option>
                    <option value="web_desing">Web Desing</option>
                    <option value="react">React</option>
                </select>

                <CourseClassFees cf={this.state.course} />
            </div>
        );
    }
}

export default CourseClass;
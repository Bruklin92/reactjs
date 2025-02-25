import React, { useState } from 'react';
import CourseFeesfun from './CourseFeesfun';

function Coursefun(props) {
    const[course, seCourse] = useState ('')

    const handleDrop = (v) => {
       seCourse(v);
    }
    console.log(course);
    
    return (
        <div>
            <select name="" id="" onChange={(e) => handleDrop(e.target.value)}>
                <option value="0">--select Course--</option>
                <option value="full_stack">Full Stack</option>
                <option value="web_desing">Web Desing</option>
                <option value="react">React</option>
            </select> 
            <CourseFeesfun c={course} />
        </div>
    );
}

export default Coursefun;
import React from 'react';

function CourseFeesfun(props) {
    console.log(props.c);
    
    const fees = {
        "full_stack": 75000,
        "web_desing": 60020,
        "react": 55000
    }

    return (
        <div>
            <p>Fees: {fees[props.c]}</p>
        </div>
    );
}

export default CourseFeesfun;
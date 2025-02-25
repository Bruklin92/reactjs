import React from 'react';

function Cityfun(props) {
    console.log(props.contryname);
    

    return (
        <div>
            City: {props.contryname === "India" ? <p>Dilhi</p> : <p>New Yourk</p>}
        </div>
    );
}

export default Cityfun; 
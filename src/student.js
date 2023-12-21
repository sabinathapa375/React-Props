import React from "react";

const Student = props =>{
    return(
        <div>
            <h1>Hello, {props.name}</h1>
            <h2>Your id is {props.id}</h2>

        </div>
    );
};



const Teachers = props =>{
    return(
        <div>
            <h1>This is the Section of teachers.</h1>
            <h2> Hello, </h2>
            <h2>Your teacher id is </h2>
        </div>
    );
};
export {Student, Teachers};

 
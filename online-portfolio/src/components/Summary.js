import React from "react"

const Summary = (props) => {
    console.log(props)
    return (
        <div className="float-right">
           {props.description()}
        </div>
    )
};

export default Summary
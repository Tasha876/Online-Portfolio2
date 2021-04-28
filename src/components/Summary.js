import React from "react"

const Summary = (props) => {
    return (
        <div key={props.title} className="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal p-md-2 p-0">
        {props.description()}
        {props.call()}
        </div>
    )
};

export default Summary
import React from "react"

const Summary = (props) => {
    console.log(props)
    return (
        <div className="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal">
        {props.description()}
        {props.call()}
        </div>
    )
};

export default Summary
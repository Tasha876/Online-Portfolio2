import React from "react"
import Technologies from "./Technologies"

const Summary = (props) => {
    return (
        <div key={props.title} className="col-md-6 my-auto call mx-auto mx-5 text-dark px-md-5 font-weight-normal p-md-2 p-0">
        {props.description()}
        <Technologies
                        key={props.title}
                        technologies={props.technologies}
        />
        {props.call()}
        </div>
    )
};

export default Summary
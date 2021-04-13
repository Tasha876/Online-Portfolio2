import React from "react"
// import { Link } from "react-router-dom"

const ResumeCall = () => {
    return (
        <section id="resume" className="container-fluid d-flex align-items-center flex-column">
            <div className="d-flex align-items-center flex-column min-vh-100">
                <div className="row w-100 my-auto"> 
                    <div className="col-md-12">
                        <div className="jumbotron call pb-2 m-0 text-center">
                            <h1 className="display-3 text-dark text-center">Want to know more?</h1>
                            <h2><a href={null} onClick={() => window.open("/resume")} target="_blank">Please see my resum&eacute;.</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeCall
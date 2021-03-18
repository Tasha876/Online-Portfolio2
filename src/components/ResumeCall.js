import React from "react"
import { Link } from "react-router-dom"

const ResumeCall = () => {
    return (
        <section id="resume" class="container-fluid d-flex align-items-center flex-column">
            <div class="d-flex align-items-center flex-column min-vh-100">
                <div class="row w-100 my-auto"> 
                    <div class="col-md-12">
                        <div class="jumbotron call pb-2 m-0 text-center">
                            <h1 class="display-3 text-dark text-center">Want to know more?</h1>
                            <h2><Link to="/resume" target="_blank">Please see my resum&eacute;.</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeCall
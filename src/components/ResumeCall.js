import React from "react"
import { Link, useHistory } from "react-router-dom"

const ResumeCall = () => {

    let history = useHistory()

    console.log(history.location)

    return (
        <section id="resume" className="container-fluid d-flex align-items-center flex-column p-md-2 p-0">
            <div className="d-flex align-items-center flex-column min-vh-100">
                <div className="row w-100 my-auto"> 
                    <div className="col-md-12 p-md-2 p-0">
                        <div className="call pb-2 m-0 text-center">
                            <h1 className="display-3 text-dark text-center">Want to know more?</h1>
                            <h2><Link 
                                onClick={() => {
                                    // console.log(history.location)
                                    history.replace(history.location) 
                                }} 
                                to="/resume/">Please see my resum&eacute;.</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeCall
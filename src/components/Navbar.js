import React from "react"
// import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg nav-transparent fixed-top navbar-light text-dark m-0 full-screen-scroller">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="nav navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link stroke" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about_me">About Me</a>
                    </li>
                        <div className="sub-nav">
                          <li className="nav-item sub-nav">
                          <a className="nav-link" href="#portfolio">Projects <i className="fa fa-caret-down"></i></a>
                            <ul className="nav navbar-nav sub-nav-content">
                                {
                                props.titles.map(title => (
                                <li className="nav-item">
                                  <a className="nav-link" href={"#"+title.replaceAll(" ","-")}>{title.toTitleCase()}</a> 
                                </li> 
                                ))}
                            </ul>
                          </li> 
                        </div>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">Resum&eacute;</a>
                    </li>
                </ul>
            </div>
          </nav>
    )
}

export default Navbar
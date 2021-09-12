import React from "react"

const Navbar = (props) => {
    return (
      <>
        <nav className="navbar navbar-expand-sm nav-transparent fixed-top navbar-light text-dark m-0 full-screen-scroller">
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="nav navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link stroke" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about_me">About Me</a>
                    </li>
                        <div className="sub-nav">
                          <li className="nav-item">
                          <a className="nav-link" href="#toc">Projects {/*<i className="fa fa-caret-down"></i>*/}</a>
                            <ul className="nav navbar-nav sub-nav-content">
                                {
                                props.titles.map(title => (
                                <li key={title + ' nav'} className="nav-item">
                                  <a className="nav-link" href={"#"+title.replaceAll(" ","-")}>{title.toTitleCase()}</a> 
                                </li> 
                                ))}
                            </ul>
                          </li> 
                        </div>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">Resum&eacute;</a>
                    </li>
                </ul>
            </div>
          </nav>
        </>
    )
}

export default Navbar
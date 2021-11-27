import React from "react"

const AboutMe = () => {
    return (
        <section id="about_me" className="container-fluid d-flex align-items-center flex-column p-md-2 p-0">
            <div className="row w-100 my-auto"> 
                <div className="col-md-12 p-md-2 p-0">
                    <article className="m-xl-4 p-xl-4 pb-2 m-0 p-0">
                        <h2 className="display-3 text-dark text-center">A little bit about me.</h2> 
                        <div className="container-fluid p-md-2 p-0">  
                        <div className="row w-100 m-0"> 
                        <div className="col-sm-6 order-1 order-lg-2 d-flex mx-auto">
                                <div className="me my-auto" >
                                    <img className="img-fluid" key={'me'} src={process.env.PUBLIC_URL + "/assets/images/me.png"} alt="me"/>
                                </div>
                            </div>
                            <div className="col-lg-6 my-auto order-2 order-lg-1">
                                <div className="call mx-auto text-dark text-left">
                                    <p>Hey, my name is Natasha.</p>
                                    <p>I'm a front-end developer and recent grad of the University of Waterloo.
                                    I have also recently completed the University of Toronto Coding Bootcamp. 
                                    Using my tech savvy and design skills, I create elegant websites and apps.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
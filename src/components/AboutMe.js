import React from "react"

const AboutMe = () => {
    return (
        <section id="about_me" className="container-fluid d-flex align-items-center flex-column min-vh-100">
            <div className="row w-100 my-auto"> 
                <div className="col-md-12">
                    <article className="jumbotron m-xl-4 p-xl-4 pb-2 m-0 p-0">
                        <h1 className="display-3 text-dark text-center">A little bit about me.</h1> 
                        <div className="container-fluid ">  
                        <div className="row w-100 m-0"> 
                        <div className="col-sm-6 order-sm-2">
                                <div id="me" >
                                        <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/images/me.png"}/>
                                </div>
                            </div>
                            <div className="col-sm-6 order-sm-1">                      
                                <div className="call mx-auto text-dark text-xl-center ">
                                    <p>Hey, my name is Natasha.</p>
                                    <p>I'm a recent grad of UW living in the Waterloo area.
                                    Always striving to improve myself, I recently enrolled in the U of T coding bootcamp. Using my tech savvy and design skills, I create elegant solutions to problems.</p>
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
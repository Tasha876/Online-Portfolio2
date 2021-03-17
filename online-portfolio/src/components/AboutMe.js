import React from "react"

const AboutMe = () => {
    return (
        <section id="about_me" class="container-fluid d-flex align-items-center flex-column min-vh-100">
            <div class="water"></div>
            <div class="row w-100 my-auto"> 
                <div class="col-md-12">
                    <article class="jumbotron m-xl-4 p-xl-4 pb-2 m-0 p-0">
                        <h1 class="display-3 text-dark text-center">A little bit about me.</h1>                        
                        <div class="call mx-auto m-5 text-dark px-md-5 font-weight-normal text-xl-center">
                            <p>Hey, my name is Natasha.</p>
                            <p>I'm a recent grad of UW living in the Waterloo area.
                            Always striving to improve myself, I recently enrolled in the U of T coding bootcamp. Using my tech savvy and design skills, I create elegant solutions to problems.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
import React, { useEffect, useState } from "react"
import $ from "jquery"

const NavMobile = () => {

    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        $(".mobile").click(() => {
            $(".mobile nav").removeClass("nav-animation")
            $(".mobile nav").width($(".mobile nav").width())
            $(".mobile nav").addClass("nav-animation-appear")
        })
    })

    useEffect(() => {
        console.log($(document).scrollTop(),hasScrolled)
        $(document).on('scroll', () => {
            if ($(document).scrollTop() > 10 && hasScrolled === false) {
                setHasScrolled(true)
                $(".mobile nav").removeClass("nav-animation-appear")
                $(".mobile nav").width($(".mobile nav").width()) // otherwise animation will only run once for whatever reason
                $(".mobile nav").addClass("nav-animation")
            }
            else if ($(document).scrollTop() <= 10 && hasScrolled === true) {
                setHasScrolled(false)
                $(".mobile nav").removeClass("nav-animation")
                $(".mobile nav").width($(".mobile nav").width())
                $(".mobile nav").addClass("nav-animation-appear")
                $(".mobile").off("click")
            }
        })
    },[hasScrolled])

    return (
        <div className="mobile fixed-bottom m-0 p-0">
        <nav className="mb-auto p-0">
            <ul className="m-0 p-2">
                <li className="text-center"><a href="#home"><i title="home" className="fas fa-home"></i><br/><small>home</small></a></li>
                <li className="text-center"><a href="#about_me"><i title="about me" className="far fa-comment"></i><br/><small>about</small></a></li>
                <li className="text-center"><a href="#toc"><i title="projects" className="fas fa-briefcase"></i><br/><small>projects</small></a></li>
                <li className="text-center"><a href="#skills"><i title="skills" className="fas fa-graduation-cap"></i><br/><small>skills</small></a></li>
                <li className="text-center"><a href="#resume"><i title="resume" className="fas fa-align-left"></i><br/><small>resume</small></a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavMobile
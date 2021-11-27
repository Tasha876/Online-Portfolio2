import React, { useEffect, useState, useRef } from "react"
import $ from "jquery"

const NavMobile = () => {

    const [hasScrolled, setHasScrolled] = useState(false)

    const [hasClicked, setHasClicked] = useState(false)

    const mobile_nav = useRef(null)

    useEffect(() => {

        if (hasClicked) {
            $(mobile_nav.current)
                .removeClass("nav-animation")
                .width('100%')
                .addClass("nav-animation-appear")
        }

        return () => {
            setHasClicked(false)
        }

    },[hasClicked])

    useEffect(() => {

        $(document).on('scroll', () => {
            if ($(document).scrollTop() > 0) {
                setHasScrolled(true)
                $(mobile_nav.current)
                    .removeClass("nav-animation-appear")
                    .width('100%') // otherwise animation will only run once for whatever reason
                    .addClass("nav-animation")
            }
            else {
                setHasScrolled(false)
                $(mobile_nav.current)
                    .removeClass("nav-animation")
                    .width('100%')
                    .addClass("nav-animation-appear")
                $(".mobile").off("click")
            }
        })

        return () => {
            $(mobile_nav.current).removeClass("nav-animation-appear")
            $(mobile_nav.current).removeClass("nav-animation")
        }

    },[hasScrolled])

    return (
        <div className="mobile fixed-bottom m-0 p-0" onClick={()=>setHasClicked(true)}>
        <nav ref = {mobile_nav} className="mb-auto p-0">
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
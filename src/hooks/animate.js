import { useState, useEffect, useRef } from "react"
import $ from "jquery"

// const useAnimationState = (animated) => {
let animated = []

const Animated = (el) => {

    let firstRender = !animated.length

    const [toBeAnimated, setAnimated] = useState([el.children])

    animated.length ? animated = animated : animated = [el.children]

    const endAnimation = () => {
        console.log(animated)
    }

    useEffect(() => {
        setAnimated(el.children)
        if (!firstRender) {
            el.motion === "right" ? animated.push(<div className={"slide-in-right"}>{toBeAnimated}</div>) : animated.unshift(<div className={"slide-in-left"}>{toBeAnimated}</div>)
            $(".going-out").addClass(`slide-out-${el.motion}`)
        }
        return () => {
            animated = [<div className={"going-out"} onEndAnimation={endAnimation()}>{toBeAnimated}</div>]
            setAnimated(el.children)
        }
    }, [toBeAnimated])

    return (
        <div className="animated">
            <>{animated}</>
        </div>
    )
}

export default Animated
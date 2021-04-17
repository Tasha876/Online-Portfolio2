import { useState, useEffect, useReducer } from "react"

const Animated = (props) => {

    console.log(props)

    const el = props.children

    const [curr, setCurr] = useState(el[props.index])

    const [prev, setPrev] = useState()

    const [animated, setAnimated] = useReducer((state, action) => {
        switch(action.type) {
            case "left":
                return [<div className={`slide-out-${props.motion}`}>{prev}</div>,<div className={`slide-in-${props.motion}`}>{curr}</div>]
            case "right":
                return [<div className={`slide-in-${props.motion}`}>{curr}</div>,<div className={`slide-out-${props.motion}`}>{prev}</div>]
            default:
                return [<div className={`slide-out-${props.motion}`}>{curr}</div>]
        }   
    }, [<div className={`slide-out-${props.motion}`}>{curr}</div>])

   const afterAnimation = (motion, animation) => {
       if (animation.length <= 1) return
       if (motion === "left") animation.shift()
       else if (motion === "right") animation.pop()
   }

    useEffect(() => {
        setCurr(el[props.index])
        setPrev(el[props.prev])
        setAnimated({type: props.motion})
        console.log(animated)
    }, [props.motion])

    console.log("here")
    return (
        <div className="animated">
            <>{animated}</>
            {/* {afterAnimation(props.motion, animated)} */}
        </div>
    )
}

export default Animated
import React, {useReducer} from "react"
import Project from "./Project"
import Animated from "../hooks/Animated"

const Projects = ({projects}) => {

    const RepeatDots = (props) => {
        let dots = []
        let index = props.i; let n = props.n
        for (let i = 0; i < n; i++) {
            index === i ? dots.push(<i key={i} className="fas fa-circle"></i>) : dots.push(<i key={i} className="far fa-circle"></i>)
        }
        return dots
    }    


    const init = (start) => {
        return {
            index: start,
            prev: null,
            motion: ""
        }
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case "forward": {
                return {
                    motion: "right",
                    prev: state.index,
                    index: state.index + 1 < projects.length ? state.index + 1 : 0
                }
                
            }
            case "back": {
                return {
                    motion: "left",
                    prev: state.index,
                    index: state.index > 0 ? state.index - 1 : projects.length - 1
                }
            }
            default: {
                return {
                    motion: "",
                    index: state.index,
                    prev: null
                }
            }
        }
    }


    const [state, setProjectIndex] = useReducer(reducer, 0, init)

    return (
        <div className=" container-fluid d-flex align-items-center flex-column min-vh-100 mx-0">
        <div className="row min-vh-100 w-100">
            <div className="col-md-12 my-5">
                { projects.map((project,i) => (
                    <Project
                        key={project.title}
                        index={i}
                        title={project.title}
                        link={project.link}
                        image={project.image}
                        description={project.description}
                        summary={project.summary}
                        url={project.url}
                />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
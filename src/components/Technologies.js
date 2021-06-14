import React from 'react'
import { technologies } from "../componentFiles/skillsList.json"

const mapTechToInfo = (techUsed) => {
    return technologies.find(tech => (
        techUsed === tech.name
    )) || { name : techUsed }
}

const Technologies = ({ technologies }) => {

    const techUsed = technologies.map(({ name: tech }) => mapTechToInfo(tech))
    console.log(techUsed)

    return (
        <p className="tech">
        <span>Technologies Used: </span>
        <ul>
            {console.log(techUsed)}
            {techUsed.map(({ name, desc, link }) => (
                <li>
                    <a aria-label={desc || name } target="_blank" rel="noreferrer" href={link || null}>{ name }</a>
                </li>
            ))}
        </ul>
        </p>
    )
}

export default Technologies

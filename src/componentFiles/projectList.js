import replaceJSX from "./replaceWithComponent"
import React from "react"
import data from "./projectList.json"

class Project {
  constructor(title, image, url,  git="#", summary, technologies) {
    this.title = title
    this.image = image
    this.url = url
    this.git = git
    this.summary = summary
    this.technologies = technologies

    this.link = function (linkText,url=this.url) {
      return (
        <a key={linkText} className="sm-text-decoration-none" href={url} target="_blank" rel="noreferrer">{linkText}</a>
      )
    }
    this.description = function () {
      return <p key={this.title + ' description'}> {this.summary.replaceJSX("___", this.link(this.title.toTitleCase()))}</p>
    }
  }
}

const projects = data.projects.map(project => {
  return new Project(
    project.title,
    project.image,
    project.url,
    project.git,
    project.summary,
    project.technologies
    )
})

export default projects
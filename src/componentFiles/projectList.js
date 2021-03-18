import replaceJSX from "./replaceWithComponent"
import React from "react"
import data from "./projectList.json"

class Project {
  constructor(title, image, url, summary) {
    this.title = title
    this.image = image
    this.url = url
    this.summary = summary
    this.link = function (linkText) {
      return (
        <a className="sm-text-decoration-none" href={this.url} target="_blank" rel="noreferrer">{linkText}</a>
      )
    }
    this.description = function () {
      return <p> {this.summary.replaceJSX("___", this.link(this.title.toTitleCase()))}</p>
    }
  }
}

const projects = data.projects.map(project => {
  return new Project(
    project.title,
    project.image,
    project.url,
    project.summary
    )
})

export default projects
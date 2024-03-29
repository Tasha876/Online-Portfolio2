import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Resume from "./Resume/Resume";
import projects from "./componentFiles/projectList";
import { images } from './files_to_write'
// import rise from "./script"

String.prototype.toTitleCase = function() {
  // according to http://www.superheronation.com/2011/08/16/words-that-should-not-be-capitalized-in-titles/ & https://www.grammarcheck.net/capitalization-in-titles-101/
  const doNotCap = ['a','an','the','for','and','nor','by','or', 'yet','so', 'at', 'from', 'of', 'on', 'to', 'with', 'is', 'in', 'into','off', 'onto', 'once', 'over','as','if','than','till', 'when', 'but','like','near','past','that','up','upon']
  let words = this.valueOf().trim().toLowerCase();
  words = words.split(' ');
  const title = words.map((word, i) =>
      doNotCap.includes(word) && i ?
      word : word.charAt(0).toUpperCase() + word.substring(1)
  ); return title.join(' ');
};

const titles = projects.map(project => project.title)

const App = () => {

  // preloads images
  useEffect(() => {
    images.map(image=> {
      const img = document.createElement('img')
      img.src = `${process.env.PUBLIC_URL}/assets/images/${image}`
      img.style=`display:'none'`
    })
  },[])

  const [loading, setLoading] = useState(true)
  const isMain = useRef(false)

  useEffect(()=> {
      if (loading) {
        setTimeout(()=>{
          setLoading(false)
          document.querySelector('.loader')?.remove()
        },1000)
      }
  },[loading])



return (
  loading? null :
    <Router basename={'.'}>
      <Switch>
        <Route exact path="/resume/">
          <Resume
            isMain={isMain}
          />
        </Route>
        <Route path="/">
          <Main 
            isMain={isMain}
            projects={projects}
            titles={titles}
          />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Resume from "./Resume/Resume";
import projects from "./componentFiles/projectList";
import rise from "./script"

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

  const [loading, setLoading] = useState(true)

  useEffect(()=> {
      if (loading) {
        setTimeout(()=>{
          setLoading(false)
          document.querySelector('.loader').remove()
        },1000)
      } else {
        rise()
      }
  },[loading])

return (
  loading? null :
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/resume">
          <Resume/>
        </Route>
        <Route path="/">
          <Main 
            projects={projects}
            titles={titles}
          />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;

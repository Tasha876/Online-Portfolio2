import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Resume from "./components/Resume/Resume";
import Splash from "./components/Splash";
import AboutMe from "./components/AboutMe";
import useScript from "./hooks/useScript";
import { default as projects } from "./componentFiles/projectList";

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
  useScript("/assets/scripts/script.js");
  document.title = "Online Portfolio";
  return (
    <Router>
        <Navbar
          titles={titles}
        />
        <Splash />
        <AboutMe />
        <Main 
          projects={projects}
          titles={titles}
        >
          <Route exact path="/resume" component={Resume} />
          <Route path="/" component={Main} />
        </Main>
        <Footer />
    </Router>
  );
}

export default App;

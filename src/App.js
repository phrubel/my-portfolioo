
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
import Menubar from './components/Home/Menubar/Menubar';
import Project from './components/Home/Project/Project';
import Blog from './components/Home/Blog/Blog';
import Contact from './components/Home/Contact/Contact';
import Skill from './components/Home/Skill/Skill';

function App() {
  return (

    <Router>
      <Menubar></Menubar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/skill">
          <Skill />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

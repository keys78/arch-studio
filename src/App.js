import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div className="">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

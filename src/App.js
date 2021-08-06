import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from './Contact';
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {

    // AOS.init()
    AOS.init({
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
    })
  
})




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

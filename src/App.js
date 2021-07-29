import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home";
import Portfolio from "./Portfolio";

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
      </Switch>
    </div>
    </Router>
  );
}

export default App;

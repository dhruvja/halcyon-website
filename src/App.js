import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events"
import SingleEvent from "./pages/SingleEvent"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/single/:name" component={SingleEvent} />
            <Route path="/events/:genre" component={Events} />
            <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

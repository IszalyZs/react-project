import Home from "./Home";
import FetchData from "./FetchData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDetails from "./CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productList/:id">
            <CardDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

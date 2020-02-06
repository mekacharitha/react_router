import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ToDo from './ToDo/ToDo';
import Calculator from './Calculator/Calculator'

export default function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>

            <li>
              <Link to="/todo">ToDoApp</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todo">
            <ToDo />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


import "./App.css";
import MyCards from './pages/MyCards'
import Search from './pages/Search'
import React from 'react';
import NoMatch from "./pages/NoMatch";
import Navbar from './components/Nav/'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/cards"]}>
            <MyCards />
          </Route>
          <Route exact path={["/search"]}>
            <Search />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

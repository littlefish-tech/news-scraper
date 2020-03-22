import React from 'react';
import './App.css';
import Save from "./pages/Save";
import Search from "./pages/Search";
import Nav from "./component/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/news" component={Search} />
          <Route exact path="/saved/:id" component={Save} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

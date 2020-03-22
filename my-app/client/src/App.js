import React from 'react';
import './App.css';
import Save from "./pages/Save";
import News from "./pages/News";
import Nav from "./component/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path="/news" component={News} />
          <Route exact path="/save" component={Save} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

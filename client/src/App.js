import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Typography from '@material-ui/core/Typography'

// import './App.css';
import Save from "./pages/Save";
import News from "./pages/News";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        {/* <Nav/> */}
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


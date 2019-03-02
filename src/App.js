import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import ProjectList from "./components/projects/ProjectList";
import NavBar from "./components/navbar/NavBar";
import ProjectDetails from "./components/projects/ProjectDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ProjectDetail extends Component {
  state = {};
  componentDidMount() {
    this.getSingleProject();
  }
  getSingleProject = () => {
    const { params } = this.props.match;
    fetch(`http://localhost:3001/api/projects/${params.id}`).then(
      responseFromAPI => {
        responseFromAPI
          .json()
          .then(datos => {
            const theProject = datos;
            this.setState(theProject);
          })
          .catch(err => console.log(err));
      }
    );
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <Link to={"/projects"}>Regresar al listado de proyectos</Link>
      </div>
    );
  }
}

export default ProjectDetail;

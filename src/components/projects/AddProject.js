import React, { Component } from "react";

class AddProject extends Component {
  state = { title: "", description: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const data = {
      title: title,
      description: description
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    console.log(title, description);
    fetch("http://localhost:3001/api/projects", options)
      .then(() => {
        this.props.getData();
        this.setState({ title: "", description: "" });
      })
      .catch(error => console.log(error));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="title">Titulo del proyecto:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.handleChange(e)}
          />
          <label htmlFor="description">Descripción del proyecto:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Crear proyecto" />
        </form>
      </div>
    );
  }
}

export default AddProject;

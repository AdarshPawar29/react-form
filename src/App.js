import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    fields: [],
  };

  addPerson() {
    const newPerson = {
      id: Math.random(),
      name: "",
      email: "",
    };

    this.setState({ fields: [...this.state.fields, newPerson] });
  }

  handleChange(e, index) {
    const fieldsCopy = [...this.state.fields];

    fieldsCopy.forEach((item) => {
      if (item.id === index) {
        item[e.target.name] = e.target.value;
      }
    });
    this.setState({ fields: fieldsCopy }, () => console.log(this.state.fields));
  }

  handleSubmit(e) {
    console.log(this.state, "$$");
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div>
            <h1>The Form</h1>
            {this.state.fields.map((field) => {
              return (
                <div key={field.id}>
                  <input
                    onChange={(e) => this.handleChange(e, field.id)}
                    name='name'
                  />
                  <input
                    onChange={(e) => this.handleChange(e, field.id)}
                    name='email'
                  />
                </div>
              );
            })}
            <button onClick={(e) => this.addPerson(e)}>Add Person</button>
            <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          </div>
        </header>
      </div>
    );
  }
}

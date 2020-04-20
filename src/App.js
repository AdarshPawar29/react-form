import './App.css';

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {

  state = {
    fields:[]
  };

  addPerson() {
    this.setState({fields:[...this.state.fields, ""]})
  };

  handleChange(e, index) {
    this.state.fields[index] = e.target.value; 
    this.setState({fields: this.state.fields});
  }
  
  handleSubmit(e) {
    console.log(this.state,"$$")
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <div>
            <h1>The Form</h1>
            {
                this.state.fields.map((field, index) => {
                  return(
                    <div key={index}>
                        <input onChange={(e)=>this.handleChange(e, index)} value={field}/>
                        {/* <input onChange={(e)=>this.handleChange(e)} value={field.email}/> */}
                    </div>
                )
              }
              )
            }
            <button onClick={(e) => this.addPerson(e)}>Add Person</button>
            <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </div>
      </header>
    </div>
    )
  }
}
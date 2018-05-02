import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {

  state = {
    fields: {}
  } //connects to this.state.fields


  onSubmit = (fields) => {
    this.setState({ fields });
    console.log("App comp got: ", fields);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)}/> {/* props passed here */}
        <p>{JSON.stringify(this.state.fields, null, 2)}</p> {/* this displays submitted info on page */}
      </div>
    );
  }
}

export default App;

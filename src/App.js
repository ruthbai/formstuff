import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {

  state = {
    fields: {}
  } //connects to this.state.fields


  onChange = updatedValue => {
    this.setState({ 
      fields: {
      ...this.state.fields, //keep original value
      ...updatedValue //but show updated version at same time
    }
    });
  };

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)}/> {/* props passed here */}
        <p>{JSON.stringify(this.state.fields, null, 2)}</p> {/* this displays submitted info on page */}
      </div>
    );
  }
}

export default App;

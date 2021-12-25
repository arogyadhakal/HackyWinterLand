import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';
import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
        
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form class="form" onSubmit={this.handleSubmit}>
          <label class="label">
            Please enter your zipCode or a name of a Charity:    
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );
 
export default NameForm;
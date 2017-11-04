import React, { Component } from 'react'
import { FormGroup } from 'react-bootstrap'
import axios from 'axios'

export default class IssueTicket extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    this.state = {
      name: '',
      violation: '',
      desctiption: '',
      image: ''
    }
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj, () => {console.log('new state: ', this.state)});
  }

  post(ticket) {
    axios.post('http://127.0.0.1:3000/main/issue', ticket)
      .then(response => console.log('response ===== '), ticket)
  }

  handleClickSubmit() {
    this.post(this.state)
  }

  render() {
    return (
      <div className="issue-ticket">
        <FormGroup>
          <div><label> Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label></div>
          <div><label> Violation: <input type="text" name="violation" value={this.state.violation} onChange={this.handleChange} /></label></div>
          <div><label> Description: <input type="text" name="desctiption" value={this.state.desctiption} onChange={this.handleChange} /></label></div>
          <div><label> ImageURL: <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /></label></div>
          <div><input type="submit" value="SUBMIT" onClick={this.handleClickSubmit}/></div>
        </FormGroup>
      </div>
    )
  }
}
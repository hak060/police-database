import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import TicketTable from './TicketTable.jsx'
import axios from 'axios'

export default class TicketResults extends Component {
  constructor(props) {
    super(props)
    this.handleClickAllTicket = this.handleClickAllTicket.bind(this)
    this.handleClickPending = this.handleClickPending.bind(this)
    this.handleClickDismissed = this.handleClickDismissed.bind(this)
    this.handleClickFined = this.handleClickFined.bind(this)
    this.changeTicketTable = this.changeTicketTable.bind(this)
    this.state = {
      ticketList: window.ticketList
    }
  }

  post(ticket) {
    axios.post('http://127.0.0.1:3000/main/issueTicket', ticket)
      .then(response => console.log('response ===== '), ticket)
  }

  handleClickAllTicket() {
    console.log('All Ticket Clicked')
    axios.get('http://127.0.0.1:3000/main/all')
      .then(response => {
        console.log('got all tickets === ', response.data);
      })
  }

  handleClickPending() {
    console.log('Pending Ticket Clicked')
    axios.get('http://127.0.0.1:3000/main/pending')
      .then(response => {
        console.log('got pending tickets === ', response.data);
      })
  }

  handleClickDismissed() {
    console.log('Dismissed Clicked')
    axios.get('http://127.0.0.1:3000/main/dismissed')
      .then(response => {
        console.log('got dismissed tickets === ', response.data);
      })
  }

  handleClickFined() {
    console.log('Fined Clicked')
    axios.get('http://127.0.0.1:3000/main/fined')
      .then(response => {
        console.log('got fined tickets === ', response.data);
      })
  }

  changeTicketTable() {

  }

  render() {
    return (
      <div className="ticket-results">
        <div> Results
          <Button bsStyle="primary" bsSize="large" onClick={this.handleClickAllTicket}>All Tickets</Button>
        </div>
        <div>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleClickPending}>Pending Tickets</Button>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleClickDismissed}>Dismessed Tickets</Button>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleClickFined}>Fined Tickets</Button>
        </div>
        <div className="ticket-table"><TicketTable 
          ticketList = {this.state.ticketList}
        /></div>
      </div>
    )
  }
}

window.ticketList = [
  {
    "name": "jay",
    "violation": "speeding",
    "description": "NA",
    "image": "NA",
    "result": "pending"
  },
  {
    "name": "kan",
    "violation": "red light",
    "description": "NA",
    "image": "NA",
    "result": "pending"
  },
  {
    "name": "jay",
    "violation": "speeding",
    "description": "NA",
    "image": "NA",
    "result": "pending"
  },
  {
    "name": "jeff",
    "violation": "DUI",
    "description": "NA",
    "image": "NA",
    "result": "pending"
  }
];
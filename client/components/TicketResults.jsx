import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import TicketTable from './TicketTable.jsx'
import axios from 'axios'

export default class TicketResults extends Component {
  constructor(props) {
    super(props)
    this.handleClickAllTicket = this.handleClickAllTicket.bind(this)
    this.handleClickFilter = this.handleClickFilter.bind(this)
    this.changeTicketTable = this.changeTicketTable.bind(this)
    this.state = {
      ticketList: window.ticketList,
      
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
        this.setState({ticketList: response.data}, () => {
          console.log('new State =====', this.state);
        })
      })
  }

  handleClickFilter(type) {
    console.log(type, 'Ticket Clicked')
    axios.post('http://127.0.0.1:3000/main/filter', {type: type})
      .then(response => {
        console.log('result =====', response.data);
        this.setState({ ticketList: response.data }, () => {
          console.log('new State =====', this.state);
        })
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
          <Button bsStyle="primary" bsSize="large" 
            onClick={this.handleClickFilter.bind(null, 'pending')}>Pending Tickets
          </Button>
          <Button bsStyle="primary" bsSize="large"
            onClick={this.handleClickFilter.bind(null, 'dismissed')}>Dismessed Tickets
          </Button>
          <Button bsStyle="primary" bsSize="large"
            onClick={this.handleClickFilter.bind(null, 'fined')}>Fined Tickets
          </Button>
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
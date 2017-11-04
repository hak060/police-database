import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import TicketTable from './TicketTable.jsx'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios'

export default class TicketResults extends Component {
  constructor(props) {
    super(props)
    this.handleClickAllTicket = this.handleClickAllTicket.bind(this)
    this.handleClickFilter = this.handleClickFilter.bind(this)
    this.handlePendingTicketDecision = this.handlePendingTicketDecision.bind(this)
    this.state = {
      ticketList: []
    }
  }

  componentDidMount() {
    console.log('mounted')
    this.handleClickAllTicket()
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
      }
    )
  }

  handlePendingTicketDecision(ticket, decision) {
    console.log(ticket, decision)
    axios.post('http://127.0.0.1:3000/main/changePending', { ticket: ticket, decision: decision })
      .then(response => {
        console.log('result =====', response.data);
      }
    )
    this.handleClickFilter(decision);
  }

  render() {
    return (
      <div className="ticket-results">
        <div> Results
          <Button onClick={this.handleClickAllTicket}>All Tickets</Button>
        </div>
        <div>
          <Button bsStyle="info" 
            onClick={this.handleClickFilter.bind(null, 'pending')}>Pending Tickets
          </Button>
          <Button 
            onClick={this.handleClickFilter.bind(null, 'dismissed')}>Dismissed Tickets
          </Button>
          <Button 
            onClick={this.handleClickFilter.bind(null, 'fined')}>Fined Tickets
          </Button>
        </div>
        <div className="ticket-table"><TicketTable 
          ticketList={this.state.ticketList}
          handlePendingTicketDecision={this.handlePendingTicketDecision}
        /></div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'

import IssueTicket from './IssueTicket.jsx'
import TicketResults from './TicketResults.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickIssueTicket = this.handleClickIssueTicket.bind(this)
    this.handleClickTicketResults = this.handleClickTicketResults.bind(this)

    this.state = {
      ticketArray: [],
      viewing: 'issue'
    };
  }

  handleClickIssueTicket() {
    this.setState({ viewing: 'issue' }, () => {console.log('new state: ', this.state)});
  }

  handleClickTicketResults() {
    this.setState({ viewing: 'results' }, () => {console.log('new state: ', this.state)});
  }

  render() {

    return(
      <div className="app-div">
        <div className="title">Ticket</div>
        <div className="button">
          <Button bsStyle="warning" bsSize="large" onClick={this.handleClickIssueTicket}>Issue Ticket</Button>
          <Button bsStyle="info" bsSize="large" onClick={this.handleClickTicketResults}>Results</Button>
        </div>
        {this.state.viewing === 'issue' ? <div className="issue-ticket">
          <IssueTicket 
            handleClickTicketResults={this.handleClickTicketResults}
          /></div> : null}
        {this.state.viewing === 'results' ? <div className="ticket-results"><TicketResults /></div> : null}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
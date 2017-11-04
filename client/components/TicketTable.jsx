import React, { Component } from 'react'
import TicketEntry from './TicketEntry.jsx'
import { Button } from 'react-bootstrap'

function TicketTable (props) {
  // this.handlePendingTicketDecision = props.handlePendingTicketDecision.bind(this)
  return (
      <div className="grid">
        {props.ticketList.map((ticket, index) => (
          <TicketEntry ticket={ticket} key={index}
          />
        ))}
      </div>
  )
}

export default TicketTable
import React, {Component} from 'react'

function TicketEntry (props) {
  return (
    <div className="ticket-list-entry">
      <div className="ticket-name">{props.ticket.name}</div>
      <div className="ticket-violation">{props.ticket.violation}</div>
      <div className="ticket-description">{props.ticket.description}</div>
      <div className="ticket-image">{props.ticket.image}</div>
      <div className="ticket-result">{props.ticket.result}</div>
    </div>
  )
}

export default TicketEntry
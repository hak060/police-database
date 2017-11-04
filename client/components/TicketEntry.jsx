import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

function TicketEntry (props) {
  return (
    <div className="grid">
      <ListGroup>
        <ListGroupItem>
        <div className="ticket-name">Name: {props.ticket.name}</div>
        <div className="ticket-violation">Violation: {props.ticket.violation}</div>
        <div className="ticket-description">Description: {props.ticket.description}</div>
        <div className="ticket-image">Image: {props.ticket.image}</div>
        <div className="ticket-result">Result: {props.ticket.result}</div>
        <div>
          {props.ticket.result === 'pending' ? 
            <div>
            <Button bsStyle="primary"
                  onClick={(e) => props.handlePendingTicketDecision(props.ticket, 'dismiss')}
            >DISMISS
            </Button >
            <Button bsStyle="danger"
                  onClick={(e) => props.handlePendingTicketDecision(props.ticket, 'prosecute')}
            >PROSECUTE
            </Button >
            </div>
           : null}
        </div>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default TicketEntry
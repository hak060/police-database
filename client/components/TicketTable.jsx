import React, { Component } from 'react'
import TicketEntry from './TicketEntry.jsx'
import { Button } from 'react-bootstrap'

function TicketTable (props) {
  return (
      <div className="grid">
      
        {props.ticketList.map((ticket, index) => (
          // <Button bsSize="large" block>
            <TicketEntry ticket={ticket} key={index}/>
          // </Button>
        ))}
      
      </div>
  )
}

export default TicketTable
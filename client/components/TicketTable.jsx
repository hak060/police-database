import React, { Component } from 'react'
import TicketEntry from './TicketEntry.jsx'

function TicketTable (props) {
  return (
    <div className="each-ticket">
      {props.ticketList.map((ticket, index) => (<TicketEntry ticket={ticket} key={index}/>))}
    </div>
  )
}

export default TicketTable
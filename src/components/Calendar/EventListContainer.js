import React from 'react'
//components
import EventList from './EventList'
//stylesheet
import './eventListContainer.css'

function EventListContainer() {
    return (
        <div className='eventListContainer'>
            <h3>Eventi di oggi</h3>
            <EventList className='singleEvent' />
            <br /><br />
            <EventList className='periodicEvent' />
        </div>
    )
}

export default EventListContainer

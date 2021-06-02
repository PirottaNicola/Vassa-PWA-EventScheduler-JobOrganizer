import React from 'react'
//components
import ListEvent from './ListEvent'
//stylesheet
import './EventList.css'

function EventList() {
    return (
        <div className='eventList'>
            <ListEvent />
            <ListEvent />
            <ListEvent />
            <ListEvent />
            <ListEvent />
            <ListEvent />
            <ListEvent />
            <ListEvent />
        </div>
    )
}

export default EventList

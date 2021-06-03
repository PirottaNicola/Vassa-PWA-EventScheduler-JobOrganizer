import React from 'react'
//components
import CalendarWeek from '../components/Calendar/CalendarWeek'
import EventListContainer from '../components/Calendar/EventListContainer'
//stylesheet
import './calendar.css'

function Calendar() {

    return (
        <div className='calendar'>
            <CalendarWeek />
            <EventListContainer />
        </div>
    )
}

export default Calendar

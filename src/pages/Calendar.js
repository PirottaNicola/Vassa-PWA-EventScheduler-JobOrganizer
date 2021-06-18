import React from 'react'
//components
import EventListContainer from '../components/Calendar/EventListContainer'
import CalendarWeekContainer from '../components/Calendar/CalendarWeekContainer'
//stylesheet
import './calendar.css'

function Calendar() {

    return (
        <div className='calendar'>
            <CalendarWeekContainer />
            <EventListContainer />
        </div>
    )
}

export default Calendar

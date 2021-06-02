import React from 'react'
//components
import CalendarWeek from '../components/Calendar/CalendarWeek'
import EventList from '../components/Calendar/EventList'
//stylesheet
import './calendar.css'

function Calendar() {

    return (
        <div className='calendar'>
            <CalendarWeek />
            <EventList />
        </div>
    )
}

export default Calendar

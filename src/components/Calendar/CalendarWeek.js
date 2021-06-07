import React from 'react'
//components
import CalendarDay from './CalendarDay'
//stylesheet
import './calendarWeek.css'
//functions
import { getDayName, getNextDayName } from '../../functions/getDayName'
import { getDate, addDays } from 'date-fns'

function CalendarWeek() {
    //creo la settimana: chiedo che giorno è oggi, lo metto come iniziale, e aggiungo i 6 successivi. Poi popolo i giorni con eventi/zona facendo fetch da mongoDB per quel particolare giorno

    //nome giorni
    const today = new Date(); //sarà da aggiornare ogni tot (?)
    const day1 = getDayName(today)
    const day2 = getNextDayName(day1)
    const day3 = getNextDayName(day2)
    const day4 = getNextDayName(day3)
    const day5 = getNextDayName(day4)
    const day6 = getNextDayName(day5)
    const day7 = getNextDayName(day6)
    //numero giorno
    const DayNumber = ((daysToAdd) => getDate(addDays(today, daysToAdd)))

    //get nome zona from days.json mongoDB: GET Day where Date ==
    const todayZone = () => { }
    const todayEvents = () => { }


    //lista giorni presenti a schermo
    const weekDays = {
        "days": [
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day1}`,
                "dayNumber": `${DayNumber(0)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day2}`,
                "dayNumber": `${DayNumber(1)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day3}`,
                "dayNumber": `${DayNumber(2)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day4}`,
                "dayNumber": `${DayNumber(3)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day5}`,
                "dayNumber": `${DayNumber(4)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day6}`,
                "dayNumber": `${DayNumber(5)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
            {
                "currentDate": today,
                "todayDate": `${addDays(today, 0)}`,
                "dayName": `${day7}`,
                "dayNumber": `${DayNumber(6)}`,
                "zone": `${todayZone}`,
                "events": `${todayEvents}`
            },
        ]
    }

    //ToDo: FETCH DATA FROM MONGODB AND UPDATE THE STATE (DATE) WHENEVER THE USER EDIT DATA ON THE DATABASE (add contact, change zone color, add event...)

    return (
        <div className='calendarWeek'>
            <CalendarDay day={weekDays.days[0]}></CalendarDay>
            <CalendarDay day={weekDays.days[1]}></CalendarDay>
            <CalendarDay day={weekDays.days[2]}></CalendarDay>
            <CalendarDay day={weekDays.days[3]}></CalendarDay>
            <CalendarDay day={weekDays.days[4]}></CalendarDay>
            <CalendarDay day={weekDays.days[5]}></CalendarDay>
            <CalendarDay day={weekDays.days[6]}></CalendarDay>
        </div>
    )

}

export default CalendarWeek

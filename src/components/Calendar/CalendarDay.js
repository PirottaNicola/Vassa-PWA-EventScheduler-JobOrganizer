import React from 'react'
//components
import CalendarEvent from './CalendarEvent'

//stylesheet
import './calendarDay.css'


function CalendarDay(props) {

    const todayZoneName = props.zone; //da qui proviene la zona assgnata al giorno

    const zone = require('../../assets/zona.json'); //da qui provengono i vari dati legati alla zona scelta
    //assegno colore alla giornata in base alla zona
    const todayZone = zone.zona.filter((z) => z.nome === todayZoneName)
    const todayZoneColor = todayZone[0] ? todayZone[0].colore : "white" //siccome filter(restituisce un'array, devo accedere all'unico elemento al suo interno). L'operazione ternaria è nel caso alla giornata non sia assegnata nessuna zona (domeniche/utente non ha assegnato)

    return (
        <div className="calendarDay" style={{ backgroundColor: `${todayZoneColor}` }}>
            <div className='date'>
                <h3>{props.day.dayName}</h3>
                <h4>{props.day.dayNumber}</h4>
            </div>
            <div className='space'><br /><br /><br /></div>
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <CalendarEvent />
            <div className='space'><br /><br /></div>
        </div>
    )
}

export default CalendarDay

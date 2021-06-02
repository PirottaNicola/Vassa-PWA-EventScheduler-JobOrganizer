import React from 'react'

//stylesheet
import './listEvent.css'
function ListEvent() {

    const aziende = require('../../assets/azienda.json');
    return (
        <div className='listEvent periodic'>
            <div>
                <h3>Nome azienda</h3>
                <h4>zona</h4>
            </div>
            <h2>13.30</h2>
        </div>
    )
}

export default ListEvent

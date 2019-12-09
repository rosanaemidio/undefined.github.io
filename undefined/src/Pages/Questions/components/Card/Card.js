import React from 'react'
import Option from '../Option/Option'
import './Card.css'

function Card(){
    return(
        <div className='container'>
          

            <div>
                <p>Alguma pergunta bem marcante</p>

            </div>
            <div className='contento'>
                <Option/>
                <Option/>
                <Option/>
                <Option/>

            </div>
        </div>
    )
}

export default Card
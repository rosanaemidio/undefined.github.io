import React from 'react'
import Option from '../Option/Option'
import './Card.css'
import Situation from '../Situation/Situation'


function Card(){
    return(
        <div className='container'>
          

            <div>              
                   <Situation 
                   quest='Oi bebê, vamos codar?'/>
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
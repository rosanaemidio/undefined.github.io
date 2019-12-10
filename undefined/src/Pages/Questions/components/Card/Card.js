import React from 'react'
import Option from '../Option/Option'
import Situation from '../Situation/Situation'
import Button from '../../../../components/Button/Button'

import './Card.css'


function Card(props){
    return(
        <div className='container'>
            <div>              
                   <Situation 
                   quest={props.quest}/>
            </div>
            <div className='contento'>
                <Option children={props.children}/>
                <Option children={props.children}/>
                <Option children={props.children}/>
                <Option children={props.children}/>
            </div>
           <div className='box__btn'>
                <Button classe='btn-prox' click={props.click}> Next </Button>
            </div>
        </div>
    )
}

export default Card
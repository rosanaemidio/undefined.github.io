import React from 'react'
import Button from '../../../../components/Button/Button'

import './Option.css'


const Option= (props) =>{
    return(
       <div className='container-op'>
            <Button classe={props.classe} click={props.select}> {props.children}              
            </Button>
       </div> 
    )
}

export default Option;
import React from 'react'
import Button from '../../../../components/Button/Button'

import './Option.css'


const Option= (props) =>{
    return(
       <div className='container-op'>
            <Button classe='btn-option'> {props.children}              
            </Button>
       </div> 
    )
}

export default Option;
import React from 'react'

import './Option.css'


const Option= (props) =>{
    return(
       <div className='container-op'>
            <button classe={props.classe} onClick={props.select}> {props.children}   </button>                      
       </div> 
    )
}

export default Option;
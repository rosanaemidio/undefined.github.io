import React from 'react'

import './Mensagem.css'
const Mensagem =(props) =>{
    // console.log(props, '<<<h');
    
    return(
        <div className='msg__box'>
            <h2> {props.titulo}</h2>
                <p>{props.texto}</p>
                <img src={props.gif} alt={props.alt}/>

        </div>
    )
}

export default Mensagem
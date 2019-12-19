import React from 'react'

import './Situation.css'

function Situation (props){
    return (
        <div className="box__pergs">
            <p>{props.quest}</p>
        </div>
    )

}

export default Situation;
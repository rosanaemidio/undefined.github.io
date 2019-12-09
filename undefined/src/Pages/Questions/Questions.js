import React, { Component } from 'react'
import Card from '../Questions/components/Card/Card'

import './Question.css'


class Questions extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className='content'>
                <Card/>
            </div>
        ) 
    }

}


export default Questions;
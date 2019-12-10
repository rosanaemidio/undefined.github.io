import React, { Component } from 'react'
import Card from '../Questions/components/Card/Card'
import { getPerguntas} from '../../service/perguntas'


import './Questions.css'


class Questions extends Component{
    constructor(){
        super()
        this.state = {
            res: []
           
        }
    }
    
    componentDidMount(){
        getPerguntas()
            .then(batata =>{
                console.log(batata.data)
                this.setState({
                    // perg: response
                    // console.log(response.data)
                })
            })
            .catch(error =>{
                // console.error(error)
            })
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
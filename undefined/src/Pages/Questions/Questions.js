import React, { Component } from 'react'
import Card from '../Questions/components/Card/Card'
import { getPerguntas} from '../../service/perguntas'


import './Questions.css'


class Questions extends Component{
    constructor(){
        super()
        this.state = {
            res: [{}]
           
        }
    }
    
    componentDidMount(){
        getPerguntas()
            .then(response =>{
                console.log(response.data)
                this.setState({
                    res: response.data
                })
            })
            .catch(error =>{
                console.error(error)
            })
    }

    // mudapergunta = (e)=>{
    //     e.
    // }
    render(){
        const {pergunta, A, B, C, D} = this.state.res[0]
        return(
            <div className='content'>
                <Card
                quest={pergunta}
                a={A}
                b={B}
                c={C}
                d={D}
                // click={mudapergunta}
                />
            </div>
        ) 
    }

}


export default Questions;
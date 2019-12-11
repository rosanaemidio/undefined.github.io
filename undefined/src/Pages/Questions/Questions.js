import React, { Component } from 'react'
import Card from '../Questions/components/Card/Card'
import { getPerguntas} from '../../service/perguntas'


import './Questions.css'
import Button from '../../components/Button/Button'


class Questions extends Component{
    constructor(){
        super()
        this.state = {
            res: [{}],
            value: '',
            color: 'btn-option',
            conteudo : ''
            //adicionar state pra trocar de pagina - Olhar componente Contato da lu            
        }
        this.handleClickColor = this.handleClickColor.bind(this)
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
    handleClickColor = (e) => {

            this.setState(state=>({
             color: !state.color             
            }));

        }
        
        // ?'btn-option'  : 
    

    buttonClicked = (event)=> {
        this.setState({
            value: this.state.value+1        
        });
    }

    faztudo = (e) => {
       
     this.buttonClicked(this.state.value)     
    this.changeColor(this.state.color)       
    
     console.log("clickou1");
    }

    handleClick = (e) => {
        this.props.history.push({
            pathname:'/perguntineas'
        })
       
    }

    // handleMudaPergunta =(proximaPergunta) => {
    //     this.setState({
    //         conteudo: proximaPergunta
    //     })
        // this.state === this.clicked 
    // }
    handleClick = (e) => {
        this.props.history.push({
            pathname:'/resultis'
        })
       
    }
    render() {
        const {pergunta, A, B, C, D} = this.state.res[0] 

        return(
            <div className='content'>
                <Card
                quest={pergunta}
                a={A}
                b={B}
                c={C}
                d={D}
                classe={this.state.color}
                select= {this.faztudo}
                // {this.state.color ? 'btn__selected' : 'btn-option'}


                // click={this.handleMudaPergunta}
                />
                <Button click={this.handleClick} classe='btn-results'>
                    Ver resultado

                </Button>
               
            </div>
        ) 
    }

}


export default Questions;
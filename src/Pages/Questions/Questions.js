import React, { Component } from 'react'
import Card from '../Questions/components/Card/Card'
import { getPerguntas } from '../../service/perguntas'
import { getResults } from '../../service/results'

import './Questions.css'
import Button from '../../components/Button/Button'


class Questions extends Component {
    constructor() {
        super()
        this.state = {
            res: [],
            resAtual: {},
            value: 0,
            conteudo: '',
            index: 0   ,
            item: {}       
        }

    }

    componentDidMount() {
        getPerguntas()
            .then(response => {
                this.setState({
                    res: response.data,
                    resAtual: response.data[0]
                })
            })
            .catch(error => {
                console.error(error)
            })
    }


    // faztudo = (e) => {
    //     let valor = this.state.value+1
    //     this.buttonClicked(valor)
    //     this.changeColor(this.state.color)
    //     console.log(faztudo)
    // }

    handleClick = (e) => {
        this.props.history.push({
            pathname: '/perguntineas'
        })

    }

    handleMudaPergunta = () => {
        let mudaIndex = this.state.index + 1
        this.setState({
            resAtual: this.state.res[mudaIndex],
            index: mudaIndex
        })
    }

    getResult= (res) =>{
        getResults(res)
        .then(response => {
            this.setState({
                res: response.data
            })
        }).catch(error => {
            console.error(error)
        })
    }
    
    handleClickResultis = (e) => {            
        const resultados = this.setState({value:this.state.value +1});
            switch (resultados) {
                    case ' < === 4' : this.setState({item:this.state.res[0]})                 
                        break;
                    case ' > === 5 && < === 7' : this.setState({item:this.state.res[1]})
                        break;
                    case ' > 7' : this.setState({item:this.state.res[2]})
                        break;
                };
      
         this.props.history.push({
            pathname: '/resultis',
            state: {
                 res: this.state.res             
                    }
         });  
    }
    
    render() {
        const { pergunta, A, B, C, D } = this.state.resAtual
        return (
            <div>
                <div className='content'>
                    <Card
                        quest={pergunta}
                        a={A}
                        b={B}
                        c={C}
                        d={D}
                        click={this.handleMudaPergunta}
                    />

                    <Button click={this.handleClickResultis} classe='btn-results'>
                        Ver resultado
                    </Button>
                </div>'
            </div>
        )
    }

}


export default Questions;
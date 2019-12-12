import React, { Component } from 'react'
import Card from '../Questions/components/Card/Card'
import { getPerguntas } from '../../service/perguntas'


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
            index: 0
            //adicionar state pra trocar de pagina - Olhar componente Contato da lu            
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


    faztudo = (e) => {
        this.buttonClicked(this.state.value)
        this.changeColor(this.state.color)
    }

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

    handleClickResultis = (e) => {
        this.props.history.push({
            pathname: '/resultis'
        })

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
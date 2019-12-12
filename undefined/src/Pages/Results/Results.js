import React, { Component } from 'react'
import { getResults } from '../../service/results'
import './Results.css'
import Mensagem from './Mensagem'

class Results extends Component {
    state = {
        res: [{}]
    }

    componentDidMount() {
        getResults()
            .then(response => {
                console.log(response.data);
                this.setState({
                    res: response.data
                })
            }).catch(error => {
                console.error(error)
            })
    }

    render() {
        const { titulo, texto, gif } = this.state.res[0]
        console.log(this.state.res);
        
        
        return (
            <div className='home'>
                    <Mensagem 
                    titulo= {titulo}
                    texto={texto}
                    gif={gif}
                    />
            </div>
        )
    }
}

export default Results
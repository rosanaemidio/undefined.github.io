import React, { Component } from 'react'
import { getResults } from '../../service/results'
import Mensagem from './Mensagem'

import './Results.css'
class Results extends Component {
    state = {
        res: [{},{},{}],
    }

    componentDidMount() {
        getResults()
            .then(response => {
                this.setState({
                    res: response.data
                })
            }).catch(error => {
                console.error(error)
            })
    }

    render() {
        const { titulo, texto, gif } = this.state.res[0]
        
        return this.state.res.length > 0 ? (        
            <div className='home'>
                <Mensagem 
                titulo= {titulo}
                texto={texto}
                gif={gif}
                />
            </div>

        )
        : null
    }
}

export default Results
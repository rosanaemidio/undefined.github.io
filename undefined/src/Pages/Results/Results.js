import React, { Component, Fragment } from 'react'
import { getResults } from '../../service/results'
import Mensagem from './Mensagem'


import './Results.css'
class Results extends Component {
    state = {
        res: [{},{},{}],
        item: {}
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
        const { titulo, texto, gif } = this.state.res[2]
     
        return this.state.res.length > 0  ? (        
            <Fragment>
                {this.state.item && 
                <div className='home'>
                    <Mensagem 
                    titulo= {titulo}
                    texto={texto}
                    gif={gif}
                    />
                </div>
                }
                </Fragment>
        )
                : null
    }
}

export default Results
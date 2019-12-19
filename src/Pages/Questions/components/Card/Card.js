import React, { Component } from 'react'
// import Option from '../Option/Option'
import Situation from '../Situation/Situation'
import Button from '../../../../components/Button/Button'

import './Card.css'


class Card extends Component {
    state = {
        value: 0
    }

    faztudo = (e) => {
        this.setState({
            value: this.state.value + 1
        });

        e.target.className = e.target.className === 'btn-option' ? 'btn__selected' : 'btn-option'
    }
 
    render() {
        const { a, b, c, d } = this.props
        return (
            <div className='container'>
                <div>
                    <Situation quest={this.props.quest} />
                </div>

                <div className='contento'>
                    <button className='btn-option' onClick={this.faztudo}>{a}</button>
                    <button className='btn-option' onClick={this.faztudo}>{b}</button>
                    <button className='btn-option' onClick={this.faztudo}>{c}</button>
                    <button className='btn-option' onClick={this.faztudo}>{d}</button>
                </div>
                <div className='box__btn'>
                    <Button classe='btn-prox' click={this.props.click}> Next </Button>
                </div>
            </div>
        )
    }
}

export default Card
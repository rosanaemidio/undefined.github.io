import React, { Component } from 'react'
import Button from '../../components/Button/Button'

import './Home.css'
class Home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    handleClick = (e) => {
        this.props.history.push({
            pathname:'/perguntineas'
        })
       
    }

render (){
    return(
        <div>
            <section className='home'>
                    <div className='home__text'>
                        <span> Olá pessoa linda!! </span>
                        <p>
                            O <span>In the name of love</span> é um mini quiz com intuito de apontar atitudes de um relacionamento abusivo.O quiz consiste em situações e você terá de escolher 
                            as alternativas de acordo com aquilo que a pessoa a quem você está pensando já tenha te dito. 
                            Lembrando que relacionamento abusivo não é só entre casal, tem familiar e entre amigos também.
                        </p>
                    </div>
                    <Button click={this.handleClick} classe='btn'>
                        Vamos começar?
                    </Button>           
            </section>
        </div>


     )

}

}

export default Home
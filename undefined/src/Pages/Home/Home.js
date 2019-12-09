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
                        <p> Olá pessoal, como vcs estão?
                            Estamos na ultima semana na Reprograma
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
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            aberto: false          
        }
    }

    handleAbreOuFecha = e =>{
        this.setState(prevState =>{
            return { aberto: !prevState.aberto}
        })

    }
    render() {
        let classesDasOpcoes = 'navbar-menu__opcoes'
        let classesDoBotao = 'navbar-menu__botao'
        if(this.state.aberto){
            classesDasOpcoes += ' navbar-menu__opcoes--aberto' //Colocar espaço após as aspas, para não concatenar.
            classesDoBotao += ' navbar-menu__botao--aberto'
        }
        return (
        <div className='nav-menu navbar-links'>
            <span className={classesDoBotao} onClick={this.handleAbreOuFecha}>
                Menu
            </span>
            <ul className={classesDasOpcoes}>
                <li>
                    <Link to='/' className='navbar-links__ativos'>
                    Home
                    </Link>
                    </li>
                <li>
                <Link to='/contato' className='navbar-links__ativos'>    
                    Contato
                </Link>
                </li>
                <li>
                <Link to='/chat' className='navbar-links__ativos'>                  
                    Chat
                </Link>
                </li>
                <li>
                <Link to='/blog' className='navbar-links__ativos'>                  
                    Blog
                </Link>
                </li>


            </ul>

        </div>
        )
    }
}
export default Menu
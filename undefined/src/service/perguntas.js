import axios from 'axios'

const config = {
    baseURL: 'http://localhost:3000/perguntineas', 
    timeout: 1000
  }
  
  const protocolo = axios.create(config)
  
  export function getPerguntas () {
    const url = '../../public/perguntas.json'
    return protocolo.get(url)
  }
  
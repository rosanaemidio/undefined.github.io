import axios from 'axios'

const config = {
    baseURL: 'https://my-json-server.typicode.com/rosanaemidio/perguntas', 
    timeout: 1000
  }
  
  const protocolo = axios.create(config)
  
  export function getPerguntas () {
    const url = '/perguntas'
    return protocolo.get(url)
  }
  
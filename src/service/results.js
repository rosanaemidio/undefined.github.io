import axios from 'axios'

const config = {
    baseURL: 'https://my-json-server.typicode.com/rosanaemidio/results', 
    timeout: 1000
  }
  
  const protocolo = axios.create(config)
  
  export function getResults () {
    const url = '/resultados'
    return protocolo.get(url)
  }
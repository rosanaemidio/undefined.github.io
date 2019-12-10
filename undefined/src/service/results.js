import axios from 'axios'

const config = {
    baseURL: 'http://localhost:3000/resultis', 
    timeout: 1000
  }
  
  const protocolo = axios.create(config)
  
  export function getResults () {
    const url = '../../public/results.json'
    return protocolo.get(url)
  }
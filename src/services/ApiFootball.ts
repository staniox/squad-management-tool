import axios from "axios";

const ApiFootball = axios.create({
    baseURL:'https://api-football-v1.p.rapidapi.com',
    headers: {'x-rapidapi-host' : 'api-football-v1.p.rapidapi.com',
                'X-RapidAPI-Key': '9218abf151msh24a9ee0640af72ep1d2bf5jsn4e1bfa505ac0'}
})

export default ApiFootball
import axios from 'axios';

const instance = axios.create({
    baseURL: "https://heroku-tinder.herokuapp.com"
})

export default instance;
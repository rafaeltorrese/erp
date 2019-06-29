import axios from 'axios'
import {base_url} from "./base_url"



axios.defaults.headers = {
    'Content-Type': 'application/json'
}



export const login = auth => {
    return axios
        .post(`${base_url}/auth/login`, auth)
        .then(res => res.data)
        .catch(error => {
            throw error.response.data
        })
}

export const register = auth => {
    return axios
        .post(`${base_url}/auth/register`, auth)
        .then(res => res.data)
        .catch(error => {
            throw error.response.data
        })

};
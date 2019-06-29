import axios from 'axios'

import {base_url} from "./base_url"


export const getOutcomes = () => {
    return axios
        .get(`${base_url}/outcomes`, {
            headers: {
                Authorization: localStorage.getItem('TOKEN')
            }
        })
        .then(res => res.data)
        .catch(err => {throw err.response.data})
}

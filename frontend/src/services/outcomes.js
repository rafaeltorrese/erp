import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction
    ? 'https://erphack.herokuapp.com/api'
    : 'http://localhost:3000/api'





export const getOutcomes = () => {
    return axios
        .get(`${base_url}/outcomes/getOutcomes`, {
            headers: {
                Authorization: localStorage.getItem('TOKEN')
            }
        })
        .then(res => res.data)
        .catch(err => err.response)
}

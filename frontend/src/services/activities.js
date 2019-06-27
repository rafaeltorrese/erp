import axios from "axios"

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction
    ? 'https://erphack.herokuapp.com/api'
    : 'http://localhost:3000/api'



axios.defaults.headers.post['Authorization'] = localStorage.getItem('TOKEN')
axios.defaults.headers.get['Authorization'] = localStorage.getItem('TOKEN')


export const getActivities = () => {
    return axios
				.get(`${base_url}/activities`)
				.then(res => res.data)
				.catch(err => err)
}
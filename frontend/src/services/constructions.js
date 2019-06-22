import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'
const base_url = isProduction
    ? 'https://erphack.herokuapp.com/api'
    : 'http://localhost:3000/api'





export const getConstructions = () => {
    return axios
        .get(`${base_url}/constructions`, {
            headers: {
                Authorization: localStorage.getItem('TOKEN')
            }
        })
        .then(res => res.data)
        .catch(err => err)
}




export const readConstruction = (data) => {
    return axios.get(`${base_url}api/activo/${data}`)
}



export const readPasivo = (data) => {
    return axios.get(`${base_url}api/pasivo/${data}`)
}
export const readCapital = (data) => {
    return axios.get(`${base_url}api/capital/${data}`)
}

export const newActivo = (data) => {
    return axios.post(`${base_url}api/activo/new`, data)
}
export const newPasivo = (data) => {
    return axios.post(`${base_url}api/pasivo/new`, data)
}
export const newCapital = (data) => {
    return axios.post(`${base_url}api/capital/new`, data)
}


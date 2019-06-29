import axios from 'axios'

import { base_url } from "./base_url"




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




export const postConstructions = (construction) => {
	const formData = new FormData()
	if (construction.images) {
		for (let image of construction.images.file) {
			formData.append('images', image)
		}
		delete construction.images
	}

	for (let key in construction) {
		formData.append(key, construction[key])
	}

	return axios
		.post(`${base_url}/constructions`, formData, {
			headers: {
				Authorization: localStorage.getItem('TOKEN'),
				'Content-Type': 'multipart/from-data'
			}
		})
		.then(res => res.data)
		.catch(err => err)
}


export const deleteConstruction = id => {
	return
	axios.delete(`${base_url}/constructions/${id}`, {
		headers: {
			Authorization: localStorage.getItem('TOKEN')
		}
	})
		.then(res => res.data)
		.catch(err => err)
}


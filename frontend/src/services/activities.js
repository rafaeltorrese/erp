import axios from "axios"
import {base_url} from "./base_url"




export const getActivities = () => {
	return axios
		.get(`${base_url}/activities`, {
			headers: {
				Authorization: localStorage.getItem('TOKEN')
			}
		})
		.then(res => res.data)
		.catch(err => err)
}


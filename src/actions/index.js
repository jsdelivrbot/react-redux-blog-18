import axios from 'axios'
import _ from 'lodash'

export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'
export const GET_POST = 'get_post'
export const DELETE_POST = 'delete_post'

const API_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=ENTER_API_NAME_HERE'

export const fetchPosts = () => {
	console.log('fetch post action called')
	const posts = axios.get(`${API_URL}/posts${API_KEY}`)
	return {
		type: FETCH_POSTS,
		payload: posts
	}
}

export const addPost = post => {
	const request = axios.post(`${API_URL}/posts/${API_KEY}`, post)
	return {
		type: CREATE_POST,
		payload: request
	}
}

export const getPost = id => {
	const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`)
	return {
		type: GET_POST,
		payload: request
	}
}

export const deletePost = (id, callback) => {
	const request = axios
		.delete(`${API_URL}/posts/${id}${API_KEY}`)
		.then(callback)

	return {
		type: DELETE_POST,
		payload: id
	}
}

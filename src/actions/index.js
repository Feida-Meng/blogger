import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POSTS= 'create_posts';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api/'
const K = '?key=alien1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}posts${K}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}posts/${id}${K}`);
  console.log("hkhs<dch",request);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPosts(values,callback) {
  const request = axios.post(`${ROOT_URL}posts${K}`,values)
    .then(() => callback());
  return {
    type: CREATE_POSTS,
    payload: request
  };
}

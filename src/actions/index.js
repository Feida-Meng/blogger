import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api/'
const K = '?key=alien1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}posts${K}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// export function postPosts() {
//   const request = axios.post(`${ROOT_URL}posts${K}`);
//   return {
//     type: FETCH_POSTS,
//     payload: request
//   };
// }

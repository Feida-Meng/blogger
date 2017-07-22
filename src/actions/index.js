import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = 'https://reduxblog.herokuapp.com/'
const K = '?key=alien1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${K}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

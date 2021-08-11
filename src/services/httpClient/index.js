import axios from 'axios';
import 'dotenv';

const URL = process.env.REACT_APP_SERVICE_URL;

const mergeUrl = (path) => {
  if(path.startsWith('http')) return path;

  return `${URL}/${path}`;
}

const get = (path) => axios.get(mergeUrl(path));

const post = (path, data) => axios.post(mergeUrl(path), data);

export default {
  get,
  post,
};

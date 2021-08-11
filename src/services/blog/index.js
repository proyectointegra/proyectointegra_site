import httpClient from '../httpClient';
import 'dotenv';

const blogUrl = process.env.REACT_APP_BLOG_URL;
const rssParser = 'https://api.rss2json.com/v1/api.json?rss_url=';

const getBlog = () => {
  return httpClient.get(`${rssParser}${blogUrl}`);
}

export default {
  getBlog,
};

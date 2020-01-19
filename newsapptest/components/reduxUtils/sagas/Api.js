import axios from 'axios';
const url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526';
function* newsFetchApi() {
      const response = yield axios.get(url);
      const articles=response.status===200?response.data.articles:[];
      return articles
  }
export default newsFetchApi;
import axios from 'axios';
import { Image, SearchResponse } from './components/App/App.types';


axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = 'Sb2ohx-ZsPsVIyVKlsJbh1oOPaZ8gA9xEWQ6DqABMuI';

export const getArticles = async (topic: string, page: number): Promise<Image[]> => {
  const response = await axios.get<SearchResponse>(`search/photos`, {
    params: {
      query: topic,
      client_id: accessKey,
      per_page: 12,
      page,
    },
  });
  return response.data.results;
}

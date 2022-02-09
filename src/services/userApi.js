import axios from 'axios';
import { selectFields } from '../utils/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storyUrls = `${baseUrl}item/`;
export const userUrls = `${baseUrl}user/`;

export const fetchStory = async (id) => {
  const response = await axios.get(`${storyUrls}/${id}.json`);
  const storyData = await response.data;
  const result = selectFields(storyData);
  return result;
};

export const fetchStories = async (ids) => {
  const stories = await Promise.all(ids.map(fetchStory));
  return stories;
};

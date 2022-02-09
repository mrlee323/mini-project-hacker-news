import axios from 'axios';
import { selectFields, userSelectFields } from '../utils/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const storyUrl = (id) => axios.get(`${baseUrl}item/${id}.json`);
export const userUrl = (id) => axios.get(`${baseUrl}user/${id}.json`);

export const storyUrls = `${baseUrl}item/`;
export const userUrls = `${baseUrl}user/`;

export const topUrl = `${baseUrl}topstories.json`;
export const newUrl = `${baseUrl}newstories.json`;
export const showUrl = `${baseUrl}showstories.json`;
export const askUrl = `${baseUrl}askstories.json`;
export const jobUrl = `${baseUrl}jobstories.json`;

export const getComment = async (kid) => {
  const result = await axios
    .get(`${storyUrls + kid}.json`)
    .then(({ data }) => data);
  return result;
};

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrls + storyId}.json`)
    .then(({ data }) => data && selectFields(data));
  return result;
};

export const getUser = async (userId) => {
  const result = await axios
    .get(`${userUrls + userId}.json`)
    .then(({ data }) => data && userSelectFields(data));
  return result;
};

export const getTopIds = async () => {
  const result = await axios.get(topUrl).then(({ data }) => data);
  return result;
};

export const getNewIds = async () => {
  const result = await axios.get(newUrl).then(({ data }) => data);
  return result;
};

export const getShowIds = async () => {
  const result = await axios.get(showUrl).then(({ data }) => data);
  return result;
};

export const getAskIds = async () => {
  const result = await axios.get(askUrl).then(({ data }) => data);
  return result;
};

export const getJobIds = async () => {
  const result = await axios.get(jobUrl).then(({ data }) => data);
  return result;
};

// export const storyUrl = (id) => axios.get(`${baseUrl}item/${id}.json`);
// export const userUrl = (id) => axios.get(`${baseUrl}user/${id}.json`);

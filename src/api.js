import axios from 'axios';
import debug from './debug';

const apiUrl = '/api/v1';

// const get = async (url, params) => {
//   const response = await axios.get(url, params);
//   debug('response', response);
//   return response;
// };

const post = async (url, params) => {
  const response = await axios.post(url, params);
  debug('response', response);
  return response;
};

export const getMessages = () => {

};

export const sendMessage = async (channelId, text, author) => {
  const resource = `/channels/${channelId}/messages`;
  const url = `${apiUrl}${resource}`;

  const params = { data: { attributes: { text, author } } };

  const response = await post(url, params);
  return response.data.data.attributes;
};

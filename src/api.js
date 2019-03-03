import axios from 'axios';
import debug from './debug';

const apiUrl = '/api/v1';

const sendRequest = async (method, resource, params) => {
  const url = `${apiUrl}${resource}`;

  debug('request', url, method, params);
  const response = await axios[method](url, params);
  debug('response', response);
  return response;
};

export const addChannel = async (name) => {
  const resource = '/channels';
  const params = { data: { attributes: { name } } };
  const response = await sendRequest('post', resource, params);
  return response.data.data;
};

export const deleteChannel = async (id) => {
  const resource = `/channels/${id}`;
  const response = await sendRequest('delete', resource);
  return response.data.data;
};

export const renameChannel = async (id, newName) => {
  const resource = `/channels/${id}`;
  const params = { data: { attributes: { name: newName } } };
  const response = await sendRequest('patch', resource, params);
  return response.data.data;
};

export const sendMessage = async (channelId, text, author) => {
  const resource = `/channels/${channelId}/messages`;
  const params = { data: { attributes: { text, author } } };
  const response = await sendRequest('post', resource, params);
  return response.data.data;
};

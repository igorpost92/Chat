import { createAction } from 'redux-actions';
import * as api from './api';

export const initApp = createAction('CHANNELS_INIT',
  (channels, messages, currentChannelId) => ({ channels, messages, currentChannelId }));

export const selectChannel = createAction('CHANNELS_SELECT', channelId => ({ channelId }));

export const addChannel = createAction('CHANNELS_ADD',
  ({ attributes: channel }) => ({ channel }));

export const handleChannelRename = createAction('CHANNELS_RENAME',
  ({ attributes: newChannel }) => ({ newChannel }));

export const handleChannelDelete = createAction('CHANNELS_DELETE', ({ id }) => ({ id }));

export const addMessage = createAction('MESSAGE_ADD', ({ attributes: message }) => ({ message }));

export const showModal = createAction('MODAL_SHOW', (type, options) => ({ type, options }));
export const closeModal = createAction('MODAL_CLOSE');

export const createNewChannel = name => async (dispatch) => {
  const response = await api.addChannel(name);
  dispatch(selectChannel(response.id));
};

export const renameChannel = (id, newName) => async () => {
  await api.renameChannel(id, newName);
};

export const deleteChannel = id => async () => {
  await api.deleteChannel(id);
};

export const sendMessage = (channelId, text, author) => async () => {
  await api.sendMessage(channelId, text, author);
};

import { createAction } from 'redux-actions';
import * as api from './api';

export const initApp = createAction('APP_INIT');

export const selectChannel = createAction('CHANNELS_SELECT');
export const handleChannelAdd = createAction('CHANNELS_ADD');
export const handleChannelRename = createAction('CHANNELS_RENAME');
export const handleChannelDelete = createAction('CHANNELS_DELETE');

export const handleMessageAdd = createAction('MESSAGE_ADD');

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

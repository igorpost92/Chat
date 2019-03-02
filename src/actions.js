import { createAction } from 'redux-actions';

import { sendMessage as sendMessageApi } from './api';

export const initApp = createAction('CHANNELS_INIT',
  (channels, messages, currentChannelId) => ({ channels, messages, currentChannelId }));

export const selectChannel = createAction('CHANNELS_SELECT', channelId => ({ channelId }));

export const addMessage = createAction('MESSAGE_ADD', message => ({ message }));

export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');


export const sendMessage = (channelId, text, author) => async () => {
  // dispatch(sendMessageRequest());

  // TODO:
  // try {
  await sendMessageApi(channelId, text, author);
  // dispatch(sendMessageSuccess());
  // } catch (error) {
  // dispatch(sendMessageFailure());
  // }
};

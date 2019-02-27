import { createAction } from 'redux-actions';

import { sendMessage as sendMessageApi } from './api';

export const initApp = createAction('CHANNELS_INIT',
  (channels, messages, currentChannelId) => ({ channels, messages, currentChannelId }));

export const addMessage = createAction('MESSAGE_ADD', message => ({ message }));
export const inputMessage = createAction('MESSAGE_INPUT', message => ({ message }));

export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');


export const sendMessage = (channelId, text, author) => async (dispatch) => {
  dispatch(sendMessageRequest());

  try {
    await sendMessageApi(channelId, text, author);
    dispatch(sendMessageSuccess());
  } catch (error) {
    dispatch(sendMessageFailure());
  }
};

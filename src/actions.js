import { createAction } from 'redux-actions';

export const initChannels = createAction('CHANNELS_INIT', channels => ({ channels }));

export const sendMessage = createAction('MESSAGE_SEND');

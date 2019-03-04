import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = [];

export default handleActions({
  [actions.initApp](state, { payload }) {
    return payload.messages;
  },

  [actions.handleMessageAdd](state, { payload }) {
    return [...state, payload.message];
  },

  [actions.handleChannelDelete](state, { payload }) {
    return state.filter(message => message.channelId !== payload.channelId);
  },

}, initialState);

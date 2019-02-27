import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = [];

export default handleActions({
  [actions.initApp](state, { payload }) {
    return payload.messages;
  },

  [actions.addMessage](state, { payload }) {
    return [...state, payload.message];
  },

}, initialState);

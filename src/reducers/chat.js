import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  textMessage: '',
};

export default handleActions({
  [actions.sendMessageSuccess](state) {
    return { ...state, textMessage: '' };
  },

  [actions.inputMessage](state, { payload }) {
    return { ...state, textMessage: payload.message };
  },

}, initialState);

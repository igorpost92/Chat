import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = [];

export default handleActions({
  [actions.initChannels](state, { payload }) {
    return payload.channels;
  },

}, initialState);

import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  isOpen: false,
  type: null,
  options: null,
};

export default handleActions({
  [actions.showModal](state, { payload }) {
    const { type, options } = payload;
    return {
      ...state, isOpen: true, type, options,
    };
  },

  [actions.closeModal](state) {
    return {
      ...state, isOpen: false, type: null, options: null,
    };
  },

}, initialState);

import { handleActions } from 'redux-actions';
import { omit } from 'lodash';
import * as actions from '../actions';

const initialState = {
  currentChannelId: null,
  byId: {},
  allIds: [],
};

const addChannel = (list, channel) => ({ ...list, [channel.id]: channel });

export default handleActions({
  [actions.initApp](state, { payload }) {
    const { channels, currentChannelId } = payload;

    const byId = channels.reduce(addChannel, {});
    const allIds = channels.map(({ id }) => id);

    return {
      ...state, byId, allIds, currentChannelId,
    };
  },

  [actions.selectChannel](state, { payload }) {
    const { channelId } = payload;
    return { ...state, currentChannelId: channelId };
  },

  [actions.handleChannelAdd](state, { payload }) {
    const { channel } = payload;
    const byId = addChannel(state.byId, channel);
    const allIds = [...state.allIds, channel.id];
    return { ...state, byId, allIds };
  },

  [actions.handleChannelDelete](state, { payload }) {
    const { channelId } = payload;

    const byId = omit(state.byId, channelId);
    const allIds = state.allIds.filter(id => id !== channelId);
    const currentChannelId = allIds[0];

    return {
      ...state, byId, allIds, currentChannelId,
    };
  },

  [actions.handleChannelRename](state, { payload }) {
    const { channel } = payload;
    const byId = addChannel(state.byId, channel);
    return { ...state, byId };
  },

}, initialState);

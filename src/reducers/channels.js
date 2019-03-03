import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const initialState = {
  currentChannelId: null,
  channels: [],
};

export default handleActions({
  [actions.initApp](state, { payload }) {
    const { channels, currentChannelId } = payload;
    return { ...state, channels, currentChannelId };
  },

  [actions.selectChannel](state, { payload }) {
    const { channelId } = payload;
    return { ...state, currentChannelId: channelId };
  },

  [actions.addChannel](state, { payload }) {
    const { channels } = state;
    return {
      ...state,
      channels: [...channels, payload.channel],
    };
  },

  [actions.handleChannelDelete](state, { payload }) {
    const { channels } = state;

    const restChannels = channels.filter(channel => channel.id !== payload.id);
    const currentChannelId = restChannels.length ? restChannels[0].id : null;

    return {
      ...state,
      currentChannelId,
      channels: restChannels,
    };
  },

  [actions.handleChannelRename](state, { payload }) {
    const { channels } = state;
    const { newChannel } = payload;

    return {
      ...state,
      channels: channels.map(channel => (channel.id === newChannel.id
        ? newChannel
        : channel)),
    };
  },

}, initialState);

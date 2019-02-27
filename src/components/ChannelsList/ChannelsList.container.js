import { connect } from 'react-redux';
import ChannelsList from './ChannelsList';

const mapStateToProps = (state) => {
  const { channels, currentChannelId } = state.channels;
  return { channels, currentChannelId };
};

export default connect(mapStateToProps)(ChannelsList);

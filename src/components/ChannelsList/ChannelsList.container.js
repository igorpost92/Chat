import { connect } from 'react-redux';
import ChannelsList from './ChannelsList';
// import {  } from '../actions';

const mapStateToProps = (state) => {
  const { channels } = state;
  return { channels };
};

// const actionCreators = {  };

export default connect(mapStateToProps)(ChannelsList);

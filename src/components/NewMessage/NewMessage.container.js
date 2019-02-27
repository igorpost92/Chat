import { connect } from 'react-redux';
import NewMessage from './NewMessage';
import { inputMessage, sendMessage } from '../../actions';

const mapStateToProps = (state) => {
  const { textMessage } = state.chat;
  return { textMessage };
};

const actionCreators = { inputMessage, sendMessage };

export default connect(mapStateToProps, actionCreators)(NewMessage);

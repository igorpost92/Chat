import { connect } from 'react-redux';
import Messages from './Messages';

const mapStateToProps = (state) => {
  const { messages } = state;
  return { messages };
};

export default connect(mapStateToProps)(Messages);

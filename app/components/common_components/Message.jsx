import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dismissMessage } from '../../actions/messages';

const Message = ({message, type, dismissMessage}) => (
  <div
    className='message'
    onClick={dismissMessage}>{message}</div>
);

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  dismissMessage: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {...state.message};
}

export default connect(mapStateToProps, { dismissMessage })(Message);

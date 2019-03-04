import React from 'react';
import { Modal } from 'react-bootstrap';
import connect from './connect';

const withModal = (...types) => (WrappedComponent) => {
  const mapStateToProps = (state) => {
    const { isOpen, type: modalType, options } = state.modal;
    const show = isOpen && types.some(type => type === modalType);
    return { show, modalType, options };
  };

  @connect(mapStateToProps)
  class ModalDialog extends React.Component {
    close = () => {
      const { closeModal } = this.props;
      closeModal();
    };

    render() {
      const { show } = this.props;

      return (
        <Modal centered show={show} onHide={this.close}>
          <WrappedComponent close={this.close} {...this.props} />
        </Modal>
      );
    }
  }

  return ModalDialog;
};

export default withModal;

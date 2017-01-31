import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0,
      bottom: 'auto',
      border: 'none',
      background: '#FB4C4E',
      color: '#F9F7FB',
      overflow: 'auto',
      borderRadius: 0,
      outline: 'none',
      padding: '30px',
      marginRight: 'auto',
      transform: 'none',
      width: '100%',
      maxWidth: '300px',
      height: '100%',
  },
  overlay: {
    backgroundColor: 'transparent',
  },
};



class NavigationChart extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

render(){
    return (
      <div>

        <button onClick={this.openModal} className="chartSettingsBtn">Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Chart Edit Menu"
        >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>

      </div>
    );
  }
}

export default NavigationChart;

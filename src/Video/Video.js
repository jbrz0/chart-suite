import React from 'react';
import Modal from 'react-modal';

// Svg
import Play from './play.svg';
import Close from './close.svg';
import chartsHome from './chartshome.svg';

import VideoPhotoPath from './videobg.jpg';
const VideoPhoto = {backgroundImage: 'url(' + VideoPhotoPath + ')'}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(23, 29, 28, 0.7)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '700px',
    background: 'transparent',
    border: 'none'
  }
};

class Video extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="root">
        <img src={chartsHome} className="chartsHome" alt="Charts" />
        <div className="videoWrap" style={VideoPhoto}><a name="intro"></a>
          <div className="videoInner">
            <button className="playBtn" onClick={this.openModal}>
              <img src={Play} className="play" alt="Play Video" />
              <div>See How it Works</div>
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Video"
            >

              {/* <button onClick={this.closeModal}>close</button> */}
              <img src={Close} className="closeBtn" onClick={this.closeModal} alt="Close Video" />
              <div>
                <div className="embedContainer">
                  <iframe src='https://www.youtube.com/embed/1o3Z0YFxRe4' frameBorder='0' allowFullScreen></iframe>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;

import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import '../styles/Video.scss';

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { video, preview } = this.props;
    return (
      <div className="videoContainer">
        <img src={preview} alt="img" onClick={this.openModal} className="videoPrev"/>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={video}
          onClose={() => this.setState({ isOpen: false })}
        />

        <button className="videoButton" onClick={this.openModal}>
          Youtube
        </button>

      </div>
    );
  }
}

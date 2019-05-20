import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default class ImageModal extends React.Component {
  
  render() {
    const { pickedImg, length, handleClearPick, handlePickPrev, handlePickNext, src } = this.props;
    const prevImg = pickedImg > 0;
    const nextImg = (pickedImg + 1) < length;

    return (
      <div>
        <Modal
        isOpen={!!src }
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        onRequestClose={handleClearPick}
        className="modal"
        overlayClassName="modal__overlay"
        >
          <button className="close-button" onClick={handleClearPick}>
            <svg aria-hidden="true" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11" x2="11" y2="1" stroke="black" strokeWidth="2"/>
              <line x1="1" y1="1" x2="11" y2="11" stroke="black" strokeWidth="2"/>
            </svg>
            <span className="close-button__text">close</span>
          </button>
          <div>
            <figure className="modal__figure">
              <img src={src} alt={`image ${pickedImg + 1}`} className="modal__img"/>
              <figcaption className="modal__figcaption">
                source: <a href={src} title="image source" target="_blank" className="external-source">unsplash.com</a>
              </figcaption>
            </figure>
            {prevImg && <button className="nav-button--prev" onClick={handlePickPrev}>prev</button>}
            {nextImg && <button className="nav-button--next" onClick={handlePickNext}>next</button>}
          </div>
        </Modal>
      </div>
    );
  }

}

import React from 'react';

const Image = (props) => (
  <div className="gallery__item">
    <img
    src={props.src}
    alt={`image ${props.index + 1}`}
    onClick={() => props.handlePick(props.index)}
    className="gallery__image"
    />
  </div>
);

export default Image;



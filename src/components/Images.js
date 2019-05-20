import React from 'react';
import Image from './Image';

const Images = (props) => (
  <div className="gallery">
    {
      props.urls.map((url, i) => (
        <Image
          key={i}
          index={i}
          src={url}
          handlePick={props.handlePick}
        />
      ))
    }
  </div>
);

export default Images;
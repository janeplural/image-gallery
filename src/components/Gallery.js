import React, { useState } from "react";
import Images from './Images';
import ImageModal from './ImageModal';

const imgUrls = [
  'https://source.unsplash.com/0m7Ks0Z00Ro',
  'https://source.unsplash.com/rtCujH697DU',
  'https://source.unsplash.com/LoPGu6By90k',
  'https://source.unsplash.com/Bj_MIJ3vpT4',
  'https://source.unsplash.com/hGgd46qq3ww',
  'https://source.unsplash.com/G0WT6KLWTwY',
  'https://source.unsplash.com/pR166OP_l6g',
  'https://source.unsplash.com/TaINhZO6diw',
  'https://source.unsplash.com/EzmsOlmxveM',
  'https://source.unsplash.com/5rchckwczuc',
  'https://source.unsplash.com/kiI9wQPFw8E',
  'https://source.unsplash.com/VrrZAVkzfWE'
 ]


export default function Gallery () {
  const [pickedImg, setImg] = useState(null);

  function handlePick(index) {
    return setImg(index);
  }
  function handleClearPick(e) {
    e.preventDefault();
    return setImg(null);
  }
  function handlePickPrev(e) {
    e.preventDefault();
    return setImg(prevState => prevState - 1);
  }
  function handlePickNext(e) {
    e.preventDefault();
    return setImg(prevState => prevState + 1);
  }

  return (
    <div>
      <Images
        urls={imgUrls}
        handlePick={handlePick}
      />
      <ImageModal
        pickedImg={pickedImg}
        length={imgUrls.length}
        src={imgUrls[pickedImg]}
        handleClearPick={handleClearPick}
        handlePickPrev={handlePickPrev}
        handlePickNext={handlePickNext}
      />
    </div>
  );
}


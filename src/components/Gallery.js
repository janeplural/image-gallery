import React from "react";
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
 ];


export default class Gallery extends React.Component {
  state = {
    pickedImg: undefined
  };
  handlePick = (index) => {
    this.setState(() => ({ pickedImg: index }));
  };
  handleClearPick = (e) => {
    e.preventDefault();
    this.setState(() => ({ pickedImg: undefined }))
  };
  handlePickPrev = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ pickedImg: prevState.pickedImg - 1 }));
  };
  handlePickNext = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ pickedImg: prevState.pickedImg + 1 }));
  };
  render() {
    return (
      <div>
        <header>
          <h1>Image Gallery</h1>
          <blockquote cite="https://www.brainyquote.com/quotes/albert_einstein_106912">
            <p>Look deep into nature, and then you will understand everything better.</p>
          </blockquote>
          <cite>– Albert Einstein</cite>
        </header>
        <Images
          urls={imgUrls}
          handlePick={this.handlePick}
        />
        <ImageModal
          pickedImg={this.state.pickedImg}
          length={imgUrls.length}
          src={imgUrls[this.state.pickedImg]}
          handleClearPick={this.handleClearPick}
          handlePickPrev={this.handlePickPrev}
          handlePickNext={this.handlePickNext}
        />
      </div>
    );
  }
}


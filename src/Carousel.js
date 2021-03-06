import React from 'react';
import image1 from './assets/p-13-1.webp';
import image2 from './assets/p-13-3.webp';
import image3 from './assets/p-13-3 (1).webp';
import './index.css';

function Carousel() {
    return (
        <React.Fragment>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full"/> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </React.Fragment>
    );
}

export default Carousel;
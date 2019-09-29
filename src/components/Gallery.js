import React, { Component } from 'react';
import Slider from 'react-slick';
import './Gallery.css';

class Gallery extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="gallery-container">
        <Slider {...settings}>
          <img src="https://www.davidbaker.tv/assets/images/yeezy-700inertia.jpg" alt="" className="gallery-image"/>
          <img src="https://www.davidbaker.tv/assets/images/yeezy-700inertia.jpg" alt="" className="gallery-image"/>
          <img src="https://www.davidbaker.tv/assets/images/yeezy-700inertia.jpg" alt="" className="gallery-image"/>
          <img src="https://www.davidbaker.tv/assets/images/yeezy-700inertia.jpg" alt="" className="gallery-image"/>
          <img src="https://www.davidbaker.tv/assets/images/yeezy-700inertia.jpg" alt="" className="gallery-image"/>
          <img src="https://www.davidbaker.tv/assets/images/yeezy-700inertia.jpg" alt="" className="gallery-image"/>
        </Slider>
      </div>
    )
  }
}

export default Gallery;
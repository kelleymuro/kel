import React, { Component } from 'react';
import Slider from 'react-slick';
import './Gallery.css';
import Haircation from '../assets/haircation.jpg';
import Malibu from '../assets/malibu.jpg';
import Forward from '../assets/Forward.jpg';
import Clean from '../assets/clean.jpg';

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
          <img src={Haircation} alt="Haircation.com" className="gallery-image"/>
          <img src={Malibu} alt="Malibu Video Editing App" className="gallery-image"/>
          <img src={Forward} alt="Forward Software" className="gallery-image"/>
          <img src={Clean} alt="Cleaning Company" className="gallery-image"/>
        </Slider>
      </div>
    )
  }
}

export default Gallery;
import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../Carousel.css';
import SlideImageOne from '../../../assets/carousel-images/image-1.jpg'; // Tell Webpack this JS file uses this image
import SlideImageTwo from '../../../assets/carousel-images/image-2.jpg'; // Tell Webpack this JS file uses this image
import SlideImageThree from '../../../assets/carousel-images/image-3.jpg'; // Tell Webpack this JS file uses this image

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="Carousel">
        <Slider {...settings} arrows={false}>
          <div>
            <img src={SlideImageOne} alt="SlideImageOne" />
          </div>
          <div>
            <img src={SlideImageTwo} alt="SlideImageTwo" />
          </div>
          <div>
            <img src={SlideImageThree} alt="SlideImageThree" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;

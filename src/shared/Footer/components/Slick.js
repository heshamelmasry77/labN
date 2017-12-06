import React, {Component} from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
      <div
          className={className}
          style={{...style, display: 'block', background: 'red'}}
          onClick={onClick}
      > sas</div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
      <div
          className={className}
          style={{...style, display: 'block', background: 'green'}}
          onClick={onClick}
      > hesham</div>
  );
}

class SimpleSlider extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }],
    };
    return (
        <div>
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
        </div>
    );
  }
}

export default SimpleSlider;

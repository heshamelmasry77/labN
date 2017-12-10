import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../../Slick.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      {' '}
      sas
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      {' '}
      hesham
    </div>
  );
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
      <div className="Slick">
        <Slider {...settings}>
          <div>
            <p>
              +RAR DIGITAL AWARDS<br />
              GRAND PRIX
            </p>
            <h6>WINNERS 2016</h6>
          </div>
          <div>
            <p>
              +RAR DIGITAL AWARDS<br />
              GRAND PRIX
            </p>
            <h6>WINNERS 2016</h6>
          </div>
          <div>
            <p>
              +RAR DIGITAL AWARDS<br />
              GRAND PRIX
            </p>
            <h6>WINNERS 2016</h6>
          </div>
          <div>
            <p>
              +RAR DIGITAL AWARDS<br />
              GRAND PRIX
            </p>
            <h6>WINNERS 2016</h6>
          </div>
          <div>
            <p>
              +RAR DIGITAL AWARDS<br />
              GRAND PRIX
            </p>
            <h6>WINNERS 2016</h6>
          </div>
          <div>
            <p>
              +RAR DIGITAL AWARDS<br />
              GRAND PRIX
            </p>
            <h6>WINNERS 2016</h6>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;

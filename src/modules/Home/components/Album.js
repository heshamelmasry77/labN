import React, { Component } from 'react';
import '../../../Album.css';
import { Grid, Thumbnail, Col, Row } from 'react-bootstrap';
import ThumbnailImageOne from '../../../assets/album-images/img-1.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageTwo from '../../../assets/album-images/img-7.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageThree from '../../../assets/album-images/img-3.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageFour from '../../../assets/album-images/img-4.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageFive from '../../../assets/album-images/img-1.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageSix from '../../../assets/album-images/img-6.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageSeven from '../../../assets/album-images/img-7.jpg'; // Tell Webpack this JS file uses this image
import ThumbnailImageEight from '../../../assets/album-images/img-8.jpg'; // Tell Webpack this JS file uses this image

class Album extends Component {
  render() {
    return (
      <div className="Album">
        <Grid>
          <Row>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageOne} />
                <h4 className="card-text text-center">Digital Strategy</h4>
              </a>
            </Col>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageTwo} />
                <h4 className="card-text text-center">Design</h4>
              </a>
            </Col>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageThree} />
                <h4 className="card-text text-center">Development</h4>
              </a>
            </Col>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageFour} />
                <h4 className="card-text text-center">
                  Performance<br />
                  Marketing
                </h4>
              </a>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageFive} />
                <h4 className="card-text text-center">
                  Neuro Linguistic<br />
                  Search
                </h4>
              </a>
            </Col>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageSix} />
                <h4 className="card-text text-center">Video</h4>
              </a>
            </Col>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageSeven} />
                <h4 className="card-text text-center">Neuromarketing</h4>
              </a>
            </Col>
            <Col xs={6} md={3} className="thumbnail-container">
              <a href="">
                <Thumbnail href="" alt="" src={ThumbnailImageEight} />
                <h4 className="card-text text-center">
                  Analysis &<br />
                  Improvement
                </h4>
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Album;

import React from 'react';
import Slick from './components/Slick';
import TiSocialTwitterCircular from 'react-icons/lib/ti/social-twitter-circular';
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import '../../Footer.css';

import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="Footer">
      <Grid>
        <Row>
          <Col className="social col-md-offset-3 box" xs={12} md={2}>
            <TiSocialLinkedinCircular />
            <TiSocialFacebookCircular />
            <TiSocialTwitterCircular />
          </Col>
          <Col className="email box" xs={12} md={2}>
            <p>
              <span>|</span>
              hello@example.co.uk <span>|</span>
            </p>
          </Col>
          <Col className="tel box" xs={12} md={2}>
            0207 183 6668
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Slick />
          </Col>
        </Row>
        <Row className="text-center">
          <Col md={12}>
            <p className="copyright">
              © 2017 Copyright example Lateral. All Rights Reserved | Privacy &
              Cookies Policy
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Footer;

import React, { Component } from 'react';
import '../../../Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="card-wrapper">
          <div className="card-body">
            <h4>Elegant Communication</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{' '}
            </p>
            <a href="" className="btn">
              LINK TEXT
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

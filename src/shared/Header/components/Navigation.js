import React, { Component } from 'react';
import $ from 'jquery';
import '../../../Overlay.css';

class Navigation extends Component {
  handleToggle() {
    $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.overlay').toggleClass('active');
      $('html, body').toggleClass('overflow-height-screen');
    });
  }

  componentDidMount() {
    this.handleToggle();
  }

  render() {
    return (
      <div className="Navigation">
        <div className="overlay">
          <div className="content">
            <a className="logo-responsive-menu">lab</a>
            <ul>
              <li>
                <a href="">OUR WORK</a>
              </li>
              <li>
                <a href="">OUR APPROACH</a>
              </li>
              <li>
                <a href="">SECRET SAUCE</a>
              </li>
              <li>
                <a href="">INSIGHT</a>
              </li>
              <li>
                <a href="">CAREERS</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hamburger-menu">
          <div className="bar" />
        </div>
      </div>
    );
  }
}

export default Navigation;

import React, {Component} from 'react';
import $ from 'jquery';
import '../../../Overlay.css';

class Navigation extends Component {
  
  handleToggle() {
    
    $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.overlay').toggleClass('active');
    });
  };
  
  componentDidMount() {
    this.handleToggle();
  }
  
  render() {
    return (
        <div className="Navigation">
          
          <div className="overlay">
            <div className="content">
              <p>hello</p>
            </div>
          </div>
          
          <div className="hamburger-menu">
            <div className="bar"> </div>
          </div>
        </div>
    );
  }
}

export default Navigation;

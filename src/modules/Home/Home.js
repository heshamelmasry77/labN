import React from 'react';
import { Component } from 'react';
import '../../Home.css';
import Carousel from './components/Carousel';

class Home extends Component {
  
  // This is the life cycle method that guarantees
  // that the DOM has been mounted in the browser successfully
  componentDidMount() {
  }
  
  // This is the life cycle method that
  // says the component is about to be unmounted
  componentWillUnmount() {
    // console.log('will Unmount');
    // debugger;
  }
  
  render() {
    
    return (
        <div className="Home ">
        <Carousel/>
        </div>
    );
  }
}

export default Home;

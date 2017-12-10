import React from 'react';
import { Component } from 'react';
import '../../Home.css';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Album from './components/Album';
import Form from './components/Form';
import store from '../Home/components/store';
import { Provider } from 'react-redux';
class Home extends Component {
  constructor() {
    super();
    this.state = {};
    Home.handleSubmit = Home.handleSubmit.bind(this);
  }
  // This is the life cycle method that guarantees
  // that the DOM has been mounted in the browser successfully
  componentDidMount() {}

  // This is the life cycle method that
  // says the component is about to be unmounted
  componentWillUnmount() {
    // console.log('will Unmount');
    // debugger;
  }

  static handleSubmit(values) {
    console.log(values);
  }
  render() {
    return (
      <div className="Home">
        <Carousel />
        <Card />
        <Album />
        <Provider store={store}>
          <Form onSubmit={Home.handleSubmit} />
        </Provider>
      </div>
    );
  }
}

export default Home;

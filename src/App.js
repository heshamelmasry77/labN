import React, {Component} from 'react';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Home from './modules/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Home/>
          <Footer/>
        </div>
    );
  }
}

export default App;

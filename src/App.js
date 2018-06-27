import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import 'tachyons';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    line_linked: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={ particleOptions } className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {
          // <FaceRecognition />
        }
      </div>
    );
  }
}

export default App;

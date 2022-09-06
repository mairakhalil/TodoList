import React, { Component, useContext } from 'react';
import './App.css';
import Navbar from './components/header';
import Form from './components/Form'
import Footer from './components/footer';
import Theme from './components/theme'


class App extends Component {
  render() {
    return (
      <div className="App">
  <Navbar/>
  <Theme/>
  <Form/>
  <Footer/>

  
      </div>
    );
  }
}

export default App;

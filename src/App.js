import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <br />
          <a href="#contact">Contact</a>
          <a href='#clients'>Clients</a>
          <a href="#apps">Apps</a>
          <a href="#webdesign">Web Design</a>
          <a class="active" href="#home">Home</a>
        </div>
        <div className="App">
          <header className="App-header" style={{ backgroundColor: 'white' }}>
            <img src={'./csblk.PNG'} className="App-logo"></img>
          </header>
        </div>
        <div class="col-container">
          <div align='center' style={{ backgroundColor: 'White' }}>
            <div class="row">
              <div class="col" style={{ background: '#282c34' }}>
                <br />
                <br />
                <br />
                <img src={'./csapp.PNG'} className="App-logo2"></img>
                <br />
                <br />
                <h1 style={{ color: 'mediumorchid' }}>App <strong style={{ color: 'white' }}>Development</strong></h1>
                <h3 style={{ color: 'white' }}>Access your most creative thoughts and share them with us. allow the CodeSpout app team to explore your ideas and create an app that redefines the way you and your users access your content.</h3>
                <br />
                <br />
                <br />
                <buttton className='Btn'>Explore Apps</buttton>
              </div>
              <div class="col" style={{ background: '#282c34' }}>
                <br />
                <br />
                <br />
                <img src={'./compcs.PNG'} className="App-logo2"></img>
                <br />
                <br />
                <h1 style={{ color: 'white' }}>Web <strong style={{ color: 'mediumorchid' }}>Design</strong></h1>
                <h3 align='center' style={{ color: 'white' }}>Explore endless possibilities of growing your business and improving your center with the CodeSpout web development team.</h3>
                <br />
                <br />
                <br />
                <br />
                <buttton className='Btn'>Explore Sites</buttton>
              </div>
              <div class="col" style={{ background: '#282c34' }}>
                <br />
                <br />
                <br />
                <img src={'./csgraphics.PNG'} className="App-logo2"></img>
                <br />
                <br />
                <h1 style={{ color: 'white' }}>Graphic <strong style={{ color: 'mediumorchid' }}>Design</strong></h1>
                <h3 style={{ color: 'white' }}>See how the CodeSpout graphic design team can transform your mind into a billiant work of art. Allow us to tap into your creative thoughts and use our skills and tecniques to create stunning imaes and logos to help you grow your busness and build your brand.</h3>
                <buttton className='Btn'>Explore Graphics</buttton>
              </div>
            </div>
          </div>
        </div>
        <div class="w3-container">
          <h1 style={{ color: 'mediumorchid' }}>Meet Our Clients</h1>
          <p>Go ahead, click some logos and see hat we can do!</p>
          <div class='col-container1'>
            <div class="row">
              <div class="col1">
                <img src={'./tricore.PNG'} className="App-logo2"></img>
                <br /><br /><br />
              </div>
              <div class="col1">
                <img src={'./bt3.jpg'} className="App-logo2"></img>
                <br /><br /><br />
              </div>
              <div class="col1">
              </div>
            </div>
          </div>
        </div>
        <div class="w4-container">
          <h1 style={{ color: 'mediumorchid' }}>Need Some Help? Contact Us!</h1>
          <p>Go ahead, click some logos and see hat we can do!</p>
          <div class='col-container2'>
            <div class="row">
              <div class="col2">
                <br /><br /><br />
              </div>
              <div class="col2">
                <br /><br /><br />
              </div>
              <div class="col2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

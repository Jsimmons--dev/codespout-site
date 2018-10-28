import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="topnav">
          <a href="#contact">Contact</a>
          <a href='#clients'>Clients</a>
          <a href="#apps">Apps</a>
          <a href="#webdesign">Web Design</a>
          <a class="active" href="#home">Home</a>
        </div>
        <div className="App">
          <header className="App-header" style={{backgroundColor:'white'}}>
            <img src={'./csblk.PNG'} className="App-logo"></img>
          </header>
        </div>
      <div class="col-container">
        <div align='center' style={{ backgroundColor: 'White' }}>
          <div class="row">
            <div class="column" style={{ background: '#282c34' }}>
              <br />
              <br />
              <br />
              <img src={'./csapp.PNG'} className="App-logo2"></img>
              <br />
              <br />
              <h1 style={{ color: 'mediumorchid' }}>App <strong style={{ color: 'white' }}>Development</strong></h1>
              <h3 style={{ color: 'white' }}>Access your most creative thoughts and share them with us. allow the CodeSpout app team to explore your ideas and create an app that redefines the way you and your users access your content.</h3>
              <buttton className='Btn'>Explore Apps</buttton>
              <br />
              <br />
              <br />
              <br/>
              <br/>
              <br/>
              </div>
            <div class="column" style={{ background: '#282c34' }}>
              <br/>
              <br/>
              <br/>
              <img src={'./compcs.PNG'} className="App-logo2"></img>
              <br/>
              <br/>
              <h1 style={{ color: 'white' }}>Web <strong style={{ color: 'mediumorchid' }}>Design</strong></h1>
              <h3 align='center' style={{ color: 'white' }}>Explore endless possibilities of growing your business and improving your center with the CodeSpout web development team.</h3>
              <br/>
              <buttton className='Btn'>Explore Sites</buttton>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
            <div class="column" style={{ background: '#282c34' }}>
              <br/>
              <br/>
              <br/>
              <img src={'./csgraphics.PNG'} className="App-logo2"></img>
              <br/>
              <br/>
              <h1 style={{ color: 'white' }}>Graphic <strong style={{ color: 'mediumorchid' }}>Design</strong></h1>
              <h3 style={{ color: 'white' }}>See how the CodeSpout graphic design team can transform your mind into a billiant work of art. Allow us to tap into your creative thoughts and use our skills and tecniques to create stunning imaes and logos to help you grow your busness and build your brand.</h3>
              <buttton className='Btn'>Explore Graphics</buttton>
           <br/>
           <br/>
           <br/>
             
             
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={'./cslogotp.PNG'} className="App-logo"></img>
          </header>
        </div>
        <div align='center' style={{ backgroundColor:'White'}}>
        <h1 style={{color:'dodgerblue'}}>Hello from Codespout!</h1>
          <div class="row">
           <div class="column" style={{background:'#282c34'}}>
           <br/>
           <img src={'./csapp.PNG'} className="App-logo2"></img>
           <h1 style={{color:'white'}}>App Development</h1>
           <h3 style={{color:'white'}}>Access your most creative thoughts and share them with us. allow the CodeSpout app team to explore your ideas and create an app that redefines the way you and your users access your content.</h3>
           <button type="button">Explore Apps</button>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           </div>
            <div class="column" style={{background:'#282c34'}}>
            <br/>
            <img src={'./compcs.PNG'} className="App-logo2"></img>
            <h1 style={{color:'white'}}>Web Design</h1>
            <h3 align='center' style={{color:'white'}}>Explore endless possibilities of growing your business and improving your center with the CodeSpout web development team.</h3>
            <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
            </div>
            <div class="column" style={{background:'#282c34'}}>
            <br/>
            <img src={'./csgraphics.PNG'} className="App-logo2"></img>
            <h1 style={{color:'white'}}>Graphic Design</h1>
            <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

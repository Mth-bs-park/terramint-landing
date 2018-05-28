import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    const isMobile = this.checkMobile();
    const browserHeight = window.innerHeight - 56;

    this.state = {
      isMobile,
      browserHeight: isMobile ? browserHeight : 0
    };
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <h1>Test</h1>
        </div>
      </div>

    );
  }

  checkMobile() {
    const userAgent = navigator.userAgent;
    let isMobile = false;
    if( userAgent.match(/Android/i)
    || userAgent.match(/webOS/i)
    || userAgent.match(/iPhone/i)
    || userAgent.match(/iPad/i)
    || userAgent.match(/iPod/i)
    || userAgent.match(/BlackBerry/i)
    || userAgent.match(/Windows Phone/i)) {
      isMobile = true;
    }
    return isMobile;
  }
}

class Navigation extends Component {

  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Terrario</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right text-center">
            <li className="nav-item active">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contract">Contract</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  toggle(event) {
    const e = event.nativeEvent;
    console.log(e);

  }
}

class Section extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{height: `${this.props.height}px`}}>
      </div>
    );
  }
}

export default App;

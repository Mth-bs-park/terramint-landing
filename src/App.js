import React, { Component } from 'react';
import './App.css';

// import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    const isMobile = this.checkMobile();
    const browserHeight = window.innerHeight - 56;

    this.state = {
      isMobile,
      browserHeight: isMobile ? browserHeight : 0
    };
  }

  render() {

    return (
      <div>
        <Navigation />
        <div className="AppWrap">
          <div className="row page-one">
            <div className="m-auto col-md-10">
              <h1 className="m-t-89 text-center text-light">
                Level up your real estate investment
              </h1>
              <p className="m-t-45 text-center text-light">
                Meridio enables you to create and invest in shares of individual properties on blockchain
              </p>
              <div className="text-center btn-wrap">
                <button className="btn btn-ubscribe">Subscribe</button>
              </div>
            </div>
            <div className="shape row">
              <div className="shapeArrow"></div>
            </div>
          </div>
          <div className="row page-two">
            <div className="m-auto col-md-10">
              <span className="title">For Investor:</span>
              <ul className="list">
                <li>Tell your friends</li>
                <li>Tell your friends</li>
                <li>Tell your friends</li>
                <li>Tell your friends</li>
              </ul>
              <div className="btn-wrap">
                <button className="btn btn-ubscribe">Subscribe</button>
              </div>
            </div>
            <div className="shape row">
              <div className="shapeC"></div>
            </div>
          </div>
          <div className="row page-three">
            <div className="m-auto col-md-10">
              <span className="title">For Management Compompanies:</span>
              <ul className="list">
                <li>Tell your friends</li>
                <li>Tell your friends</li>
                <li>Tell your friends</li>
                <li>Tell your friends</li>
              </ul>
              <div className="btn-wrap">
                <button className="btn btn-ubscribe">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="row page-four">
            <div className="m-auto col-md-10">
              <h1 className="m-t-89 text-center text-purple">
                Level up your real estate investment
              </h1>
              <p className="m-t-45 text-center text-purple">
                Meridio enables you to create and invest in shares of individual properties on blockchain
              </p>
              <div className="text-center btn-wrap">
                <div className="input-group">
                  <input type="text" className="inputMail form-control" placeholder=""/>
                  <button className="btn btn-ubscribe">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer">
          </div>
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
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-purple fixed-top">
        <a className="navbar-brand" href="/">Terrario</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto navbar-right text-center">
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contract">Contract</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
//
// class Section extends Component {
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return(
//       <div style={{height: `${this.props.height}px`}}>
//       </div>
//     );
//   }
// }

export default App;

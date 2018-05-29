import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    const isMobile = this.checkMobile();
    const browserHeight = window.innerHeight - 56;

    this.state = {
      isMobile,
      browserHeight: isMobile ? browserHeight : 0
    };
    // text 객체 추가하기..
    this.onClick = this.onClick.bind(this);
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
                <button className="btn btn-ubscribe" onClick={this.onClick}>Subscribe</button>
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
                <button className="btn btn-ubscribe" onClick={this.onClick}>Subscribe</button>
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
                <button className="btn btn-ubscribe" onClick={this.onClick}>Subscribe</button>
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
                  <button className="btn btn-ubscribe" data-withinput="true" onClick={this.onClick}>Subscribe</button>
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

  onClick(e) {
    const nativeEvent = e.nativeEvent;
    const target = nativeEvent.target;
    const $target = $(target);
    const withInput = Boolean($target.attr('data-withinput'));

    console.log(withInput);
    if (withInput) {
      const $input = $target.prev();
      const email = $input.val();
      const isEmail = this._validateEmail(email);

      if (!isEmail) {
        console.log('none email form');
        return;
      }
      console.log('input value:', email);
    }
    else {
      console.log('open modal');
    }
  }

  _validateEmail(email) {
    const regExp = new RegExp('/^\S+@\S+\.\S+$/');
    return regExp.test(email);
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

export default App;

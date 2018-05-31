import React, {Component} from 'react';
import './Navigation.css';
class Navigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-purple fixed-top">
        <a className="navbar-brand" href="/">
          <img className="brand-img" src='./assets/img/icon.png' alt="logo"/>
          <span className="brand-text">Terrario</span>
        </a>
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

export default Navigation;

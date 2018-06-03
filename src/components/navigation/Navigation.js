import React, {Component} from 'react';
import './Navigation.css';
class Navigation extends Component {

  render() {

    const props = this.props;
    const {selectedLanguage, supportLanguages, changeLanguage} = props;


    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-purple fixed-top">
        <a className="navbar-brand" href="/">
          <img className="brand-img" src='./assets/img/logo.png' alt="logo"/>
        </a>

        <div className="dropdown">
          <a className="btn btn-clear dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {supportLanguages[selectedLanguage]}
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" onClick={changeLanguage}>
          {
            Object.keys(supportLanguages).map((v, i)=> {
              const label = supportLanguages[v];
              return (<a className="dropdown-item" href="#"
                    key={i} data-value={v}>{label}</a>);
            })
          }
          </div>
        </div>
      </nav>
    );
  }
}
/*
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="navbar-collapse collapse" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto navbar-right text-center">
    <li className="nav-item">
      <a className="nav-link" href="#personal">personal</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contract">Contract</a>
    </li>
  </ul>
</div>
*/

export default Navigation;

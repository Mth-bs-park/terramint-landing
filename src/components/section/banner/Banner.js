import React, {Component} from 'react';

import './Banner.css';

class Banner extends Component {

  render() {

    const desc = this.props.items.desc;
    const __html = desc.replace('\n', '<br/>');

    return (
      <div className='banner-wrap'>
        <div className='top-wrap'>
          <div className='brand-wrap'>
            <img className ='brand-logo' src='assets/img/icon.png' alt="logo"/>
            <h1 className ='brand-text'>TerraMint</h1>
          </div>
          <span className="text">
            {this.props.items.shortDesc}
          </span>
        </div>
        <div className="bottom-wrap">
          <h2 className="title">{this.props.items.title}</h2>
          <span className="text" dangerouslySetInnerHTML={{__html}}></span>
          <div className='btn-wrap'>
            <button className="btn clear">{this.props.items.btnText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;

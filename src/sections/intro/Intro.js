import React, {Component} from 'react';

import './Intro.css';

class Intro extends Component {

  render() {
    const props = this.props;
    const {title, content, btnText} = props.items;
    const {title: _title, content: _content} = content;
    const onClick = props.click;

    const __html = _content.replace('\n', '<br/>');

    return (
      <div className='intro-wrap'>
        <div className="intro m-auto text-center">
          <div className='title-wrap row'>
            <div className='brand-wrap col-md-10 m-auto'>
              <img className ='brand-logo' src='assets/img/logo.png' alt="logo"/>
            </div>
            <div className="col-md-10 m-auto">
              <span className="title">
                {title}
              </span>
            </div>
          </div>
          <div className="content-wrap row">
            <h2 className="title m-auto">{_title}</h2>
            <span className="content" dangerouslySetInnerHTML={{__html}}></span>
            <div className='btn-wrap'>
              <button className="btn clear" onClick={onClick}>{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Intro;

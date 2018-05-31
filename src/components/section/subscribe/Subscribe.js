import React, {Component} from 'react';

import './Subscribe.css';

class Subscribe extends Component {

  render() {

    const subscribeItems = this.props.items;
    const {title, desc, placeholder, btnText} = subscribeItems;

    const __html = desc.replace(/\n/g, '<br/>');

    return (
      <div className="subscribe-wrap">
        <div className="text-wrap">
          <h2 className="title">{title}</h2>
          <span className="desc" dangerouslySetInnerHTML={{__html}}></span>
        </div>
        <div className="form-wrap row input-group m-auto">
          <div className="col-md-8 m-auto m-t-20">
            <input type="text" className="inputMail form-control" placeholder={placeholder}/>
            <button className="btn purple">{btnText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Subscribe;

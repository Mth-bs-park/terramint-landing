import React, {Component} from 'react';

import './Subscribe.css';

class Subscribe extends Component {

  render() {
    const props = this.props;
    const subscribeItems = props.items;
    const {title, content, placeholder, btnText} = subscribeItems;
    const onConfirm = props.click;

    const __html = content.replace(/\n/g, '<br/>');

    return (
      <div className="subscribe-wrap">
        <div className="title-wrap">
          <h2 className="title">{title}</h2>
        </div>
        <div className="content-wrap">
          <span className="content" dangerouslySetInnerHTML={{__html}}></span>
        </div>
        <div className="form-wrap row input-group m-auto">
          <div className="col-md-8 m-auto m-t-20">
            <input type="text" id="inputEmail"
                    className="inputMail form-control" placeholder={placeholder}/>
            <button className="btn purple" onClick={onConfirm} data-target="#inputEmail">{btnText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Subscribe;

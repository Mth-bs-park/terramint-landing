import React, {Component} from 'react';

import './Company.css';

class Company extends Component {

  render() {

    const props = this.props;
    const companyItems = props.items;
    const {title, items, btnText} = companyItems;
    const onClick = props.click;

    return (
      <div className="company-wrap">
        <div className="company m-auto">
          <div className="title-wrap">
            <h2 className="title">{title}</h2>
          </div>
          <div className="content-wrap row">
            <div className="col-md-6 p-e-3">
              <ul className="item-list">
              {
                items.map((v, i) => {
                  let {title:_title, content} = v;
                  const __html = content.replace(/\n/g, '<br/>');

                  return (
                    <li className="item" key={i}>
                      <span className="title">{_title}</span><br/>
                      <span className="content" dangerouslySetInnerHTML={{__html}}></span>
                    </li>
                  );
                })
              }
              </ul>
              <div className="btn-wrap">
                <button className="btn purple" onClick={onClick}>{btnText}</button>
              </div>
            </div>
            <div className="col-md-6 illustration">
              <img className="img m-auto" src="assets/img/illustration.png" align="middle"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Company;

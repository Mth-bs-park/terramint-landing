import React, {Component} from 'react';

import './Company.css';

class Company extends Component {

  render() {

    const companyItems = this.props.items;
    const {title, items, btnText} = companyItems;

    return (
      <div className="company-section-wrap m-auto">
        <div className="title-wrap">
          <h2 className="title">{title}</h2>
        </div>
        <div className="item-list-wrap">
          <ul className="item-list">
          {
            items.map(v => {
              let {title:_title, desc:_desc} = v;
              const __html = _desc.replace(/\n/g, '<br/>');

              return (
                <li className="item">
                  <span className="title">{_title}</span><br/>
                  <span className="desc" dangerouslySetInnerHTML={{__html}}></span>
                </li>
              );
            })
          }
          </ul>
        </div>
        <div className="btn-wrap">
          <button className="btn purple">{btnText}</button>
        </div>
      </div>
    )
  }
}

export default Company;

import React, {Component} from 'react';

import Card from '../../components/card/Card';

import './Personal.css';

class Personal extends Component {

  render() {
    const props = this.props;
    const cardItems = props.items;
    const {title, items, btnText} = cardItems;
    const onClick = props.click;

    return (
      <div className='personal-wrap' id="personal">
        <div className='title-wrap'>
          <h3 className='title'>{title}</h3>
        </div>
        <div className='content-wrap'>
          <div className='card-list row m-auto'>
            {
              items.map((v, i) => {
                const {title, content, img} = v;
                return (<Card key={i} img={img} title={title} content={content}/>);
              })
            }
          </div>
        </div>
        <div className='btn-wrap'>
          <button className='btn clear purple' onClick={onClick}>{btnText}</button>
        </div>
      </div>
    )
  }
}

export default Personal;

import React, {Component} from 'react';

import Card from '../../card/Card';

import './Cards.css';

class Cards extends Component {

  render() {
    const cardItems = this.props.items;
    const title = cardItems.title;
    const items = cardItems.items;
    const btnText = cardItems.btnText;

    return (
      <div className='cards-wrap'>
        <div className='title-wrap'>
          <h3 className='text'>{title}</h3>
        </div>
        <div className='row'>
          <div className='card-list row m-auto'>
            {
              items.map((v, i) => <Card key={i} item={v}/>)
            }
          </div>
        </div>
        <div className='btn-wrap'>
          <button className='btn clear purple'>{btnText}</button>
        </div>
      </div>
    )
  }
}

export default Cards;

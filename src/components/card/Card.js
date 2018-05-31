import React, {Component} from 'react';

import './Card.css';

class Card extends Component {

  render() {
    const item = this.props.item;
    const {title, desc, img} = item;
    return (
      <div className='card-wrap'>
        <div className="card-img-wrap">
          <img className='card-img' src={img} alt='icon'/>
        </div>
        <div className="text-wrap">
          <h4 className="title">{title}</h4>
          <p className="desc">
            {desc}
          </p>
        </div>
      </div>
    )
  }
}

export default Card;

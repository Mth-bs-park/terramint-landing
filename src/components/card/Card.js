import React, {Component} from 'react';

import './Card.css';

class Card extends Component {

  render() {
    const {title, content, img} = this.props;
    return (
      <div className='card-wrap'>
        <div className="card-img-wrap">
          <img className='card-img' src={img} alt='icon'/>
        </div>
        <div className="content-wrap">
          <h4 className="title">{title}</h4>
          <p className="content">
            {content}
          </p>
        </div>
      </div>
    )
  }
}

export default Card;

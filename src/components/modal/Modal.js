import React, {Component} from 'react';

import './Modal.css'

class Modal extends Component {

  render() {
    const props = this.props;
    const {id, onConfirm, placeholder, btnText} = props;

    return (
      <div className="modal fade" id={id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <label className="input">
                <span className="label">Email</span>
                <input type="text" className="inputMail form-control" placeholder={placeholder} id="inputEmail_modal"/>
              </label>
              
            </div>
            <div className="modal-footer">
              <div className="btn-wrap">
                <button className="btn purple" onClick={onConfirm} data-target="#inputEmail_modal">{btnText}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

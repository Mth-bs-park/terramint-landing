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
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="inputMail form-control" placeholder={placeholder} id="inputEmail_modal"/>
            </div>
            <div className="modal-footer">
              <button className="btn purple" onClick={onConfirm} data-target="#inputEmail_modal">{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

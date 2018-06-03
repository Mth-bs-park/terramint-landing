import React, {Component} from 'react';

import './Modal.css'

class Modal extends Component {

  render() {
    const props = this.props;
    const {id, onConfirm, placeholders, btnText, items, changeMember} = props;
    const _items = items.items;
    const selectedIdx = items.selected;

    return (
      <div className="modal fade" id={id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="title">가입하기</span>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row m-auto">
                <span className="content">현재 베타 서비스 진행중입니다. 테라민트 소식 뉴스레터로 받아보세요!</span>
              </div>
              <div className="row m-auto">
                <div className="dropdown">
                  <button className="btn dropdown-toggle clear" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {_items[selectedIdx]}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"
                      onClick={changeMember}>
                  {
                    _items.map((v, i)=> {
                      return (<a className="dropdown-item" href="#"
                            key={i} data-value={v}>{v}</a>);
                    })
                  }
                  </div>
                </div>
              </div>

              <div className="row m-auto">
                <input type="text" className="name form-control col-md-7 "
                      placeholder={placeholders.firstName} id="inputName1_modal"/>

                <input type="text" className="name form-control col-md-4 ml-auto"
                      placeholder={placeholders.lastName} id="inputName2_modal"/>
              </div>

              <div className="row m-auto">
                <input type="text" className="inputMail form-control m-auto"
                      placeholder={placeholders.email} id="inputEmail_modal"/>
              </div>
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

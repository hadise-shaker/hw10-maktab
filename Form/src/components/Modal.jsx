
import React,{useState} from 'react'
import "./Modal.css"
const Modal = ({email,close,text_lable,name,lastname,edu,os,eduP,text_edu,text_eduP,text_os}) => { 
    return (
        <div className="modal-container">
          <div className="modal">
          <button onClick={close} className="close-modal"> close </button>
              <h2 className="content">  {name} {lastname}<br></br>
              {text_edu}{edu}<br></br>
              {text_eduP}{eduP}<br></br>
              {text_os}{os}
              </h2>
          <h2 className="content">
          {text_lable}{email} 
          </h2>
          </div>

        </div>
    )
}
export default Modal;

import React from "react"
import ReactDOM from "react-dom"

const Modal = props => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visible active'>
      <div className='ui standard modal visible active'>
        <div className='header'>Delete Stream</div>
        <div className='content'>
          <h4>Are you sure you want to delete this stream?</h4>
        </div>
        <div className='actions'>
          <div className='ui red button'>Delete</div>
          <div className='ui cancel button'>Cancel</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  )
}
export default Modal

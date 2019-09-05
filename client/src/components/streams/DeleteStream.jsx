import React from "react"
import Modal from "../modal"
import history from "../../history"

const DeleteStream = () => {
  const actions = (
    <div>
      <div className='ui red button'>Delete</div>
      <div className='ui cancel button'>Cancel</div>
    </div>
  )
  return (
    <div>
      <h1>Delete Stream</h1>
      <Modal
        header='Delete Stream'
        content='Are you sure you want to delete this stream?'
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  )
}

export default DeleteStream

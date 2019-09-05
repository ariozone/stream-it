import React, { Component } from "react"
import Modal from "../modal"
import { connect } from "react-redux"
import history from "../../history"
import { deleteStream } from "../../actions"

class DeleteStream extends Component {
  renderButtons = () => {
    return (
      <div>
        <div className='ui red button'>Delete</div>
        <div className='ui cancel button'>Cancel</div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1>Delete Stream</h1>
        <Modal
          header='Delete Stream'
          content='Are you sure you want to delete this stream?'
          actions={this.renderButtons()}
          onDismiss={() => history.push("/")}
        />
      </div>
    )
  }
}

export default connect(deleteStream)(DeleteStream)

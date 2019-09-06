import React, { Component } from "react"
import Modal from "../modal"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import history from "../../history"
import { deleteStream, getStream } from "../../actions"

class DeleteStream extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id)
  }

  renderButtons = () => {
    const { id } = this.props.match.params
    return (
      <div>
        <div
          onClick={() => this.props.deleteStream(id)}
          className='ui red button'
        >
          Delete
        </div>
        <Link to='/' className='ui cancel button'>
          Cancel
        </Link>
      </div>
    )
  }
  renderContent = () => {
    const content = this.props.stream
      ? `the stream with title: "${this.props.stream.title}" ?`
      : "this stream"
    return "Are you sure you want to delete " + content
  }

  render() {
    return (
      <Modal
        header='Delete Stream'
        content={this.renderContent()}
        actions={this.renderButtons()}
        onDismiss={() => history.push("/")}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { deleteStream, getStream }
)(DeleteStream)

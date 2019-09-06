import React, { Component } from "react"
import Modal from "../modal"
import { connect } from "react-redux"
import history from "../../history"
import { deleteStream, getStream } from "../../actions"

class DeleteStream extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id)
  }
  renderButtons = () => {
    return (
      <div>
        <div className='ui red button'>Delete</div>
        <div className='ui cancel button'>Cancel</div>
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
    console.log(this.props.stream)
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

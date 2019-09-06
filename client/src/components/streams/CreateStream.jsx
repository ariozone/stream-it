import React from "react"
import { connect } from "react-redux"
import { createStream } from "../../actions"
import Form from "../common/form"

class CreateStream extends React.Component {
  onSubmit = values => {
    this.props.createStream(values)
  }

  render() {
    return (
      <div>
        <h1>Create a Stream</h1>
        <Form onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(
  null,
  { createStream }
)(CreateStream)

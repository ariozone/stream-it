import React, { Component } from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { getStream, editStream } from "../../actions"
import Form from "../common/form"

class EditStream extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id)
  }

  onSubmit = values => {
    this.props.editStream(this.props.match.params.id, values)
  }

  render() {
    const { stream } = this.props
    if (!stream) return <h4>Loading...</h4>
    return (
      <div>
        <h1>Edit Stream</h1>

        <Form
          initialValues={_.pick(stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(
  mapStateToProps,
  { getStream, editStream }
)(EditStream)

import React, { Component } from "react"
import { connect } from "react-redux"
import { getStream } from "../../actions"

class EditStream extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id)
  }
  render() {
    console.log(this.props)
    if (!this.props.stream) return <h4>Loading...</h4>
    return <h4>Title: {this.props.stream.title}</h4>
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(
  mapStateToProps,
  { getStream }
)(EditStream)

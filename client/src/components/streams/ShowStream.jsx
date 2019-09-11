import React, { Component } from "react"
import { getStream } from "../../actions"
import { connect } from "react-redux"

class ShowStream extends Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id)
  }
  render() {
    return (
      <h1>
        Show Stream {this.props.stream ? this.props.stream.title : "Loading..."}
      </h1>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(
  mapStateToProps,
  { getStream }
)(ShowStream)

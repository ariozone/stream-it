import React, { Component } from "react"
import { getStream } from "../../actions"
import { connect } from "react-redux"
import flv from "flv.js"

class ShowStream extends Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }
  componentDidMount() {
    this.props.getStream(this.props.match.params.id)
  }
  render() {
    return !this.props.stream ? (
      <div>Loading</div>
    ) : (
      <div>
        <video ref={this.videoRef}></video>
        <h1>{this.props.stream.title}</h1>
        <h3>{this.props.stream.description}</h3>
      </div>
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

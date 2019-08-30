import React, { Component } from "react"
import { connect } from "react-redux"
import { getStreams } from "../../actions"

class StreamList extends Component {
  componentDidMount() {
    this.props.getStreams()
  }
  render() {
    return (
      <div>
        <h1>Streams List</h1>
        <ul>
          {this.props.streams.map(stream => (
            <li>{stream.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }
}
export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList)

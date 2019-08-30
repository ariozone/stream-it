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
            <li key={stream.id}>
              <h2>{stream.title}</h2>
              <h5>{stream.description}</h5>
            </li>
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

import React, { Component } from "react"
import { connect } from "react-redux"
import { getStreams } from "../../actions"

class StreamList extends Component {
  componentDidMount() {
    this.props.getStreams()
  }
  renderStreamsList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className='large middle aligned icon camera' />

          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      )
    })
  }
  renderAdminButtons = stream => {
    return (
      stream.userId === this.props.currentUserId && (
        <div className='right floated content'>
          <button className='ui button gray'>Edit</button>
          <button className='ui button red'>Delete</button>
        </div>
      )
    )
  }
  render() {
    return (
      <div>
        <h1>Streams List</h1>
        <div className='ui celled list'>{this.renderStreamsList()}</div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  }
}
export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList)

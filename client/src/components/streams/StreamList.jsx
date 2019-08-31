import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
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
          <Link to={`/streams/edit/${stream.id}`} className='ui button gray'>
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className='ui button red'>
            Delete
          </Link>
        </div>
      )
    )
  }

  renderCreateButton = () => {
    return (
      this.props.isSignedIn && (
        <Link to='/streams/new' className='fluid ui button primary'>
          Create a New Stream
        </Link>
      )
    )
  }

  render() {
    return (
      <div>
        <h1>Streams List</h1>
        <div className='ui celled list'>{this.renderStreamsList()}</div>
        {this.renderCreateButton()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(
  mapStateToProps,
  { getStreams }
)(StreamList)

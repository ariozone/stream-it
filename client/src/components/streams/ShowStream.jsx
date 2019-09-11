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
    const { id } = this.props.match.params
    this.props.getStream(id)
    this.createPlayer()
  }

  componentDidUpdate() {
    this.createPlayer()
  }

  createPlayer = () => {
    const { id } = this.props.match.params
    if (this.flvPlayer || !this.props.stream) return null
    this.flvPlayer = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    })
    this.flvPlayer.attachMediaElement(this.videoRef.current)
    this.flvPlayer.load()
    //this.flvPlayer.play()
  }

  render() {
    return !this.props.stream ? (
      <div>Loading...</div>
    ) : (
      <div>
        <video
          ref={this.videoRef}
          style={{ width: "100%" }}
          controls={true}
        ></video>
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

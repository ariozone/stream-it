import React from "react"
import { connect } from "react-redux"

const EditStream = props => {
  console.log(props)
  return (
    <div>
      <h1>Edit Stream</h1>
      <h3>ID: {props.match.params.id}</h3>
      <h4>Title: {props.stream.title}</h4>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps)(EditStream)

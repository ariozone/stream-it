import React from "react"
import { connect } from "react-redux"
import { signIn, signOut } from "../actions"
require("dotenv").config()

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_STREAM_IT_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }
  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut()
  }
  render() {
    return this.props.isSignedIn ? (
      <button
        className='ui red google button'
        onClick={() => this.auth.signOut()}
      >
        <i className='google icon' />
        Sign Out
      </button>
    ) : (
      <button
        className='ui blue google button'
        onClick={() => this.auth.signIn()}
      >
        <i className='google icon' />
        Sign In with Google
      </button>
    )
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)

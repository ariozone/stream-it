import React from "react"
require("dotenv").config()

export default class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.setState({ isSignedIn: this.auth.isSignedIn.get() })
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }
  render() {
    return this.state.isSignedIn ? (
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

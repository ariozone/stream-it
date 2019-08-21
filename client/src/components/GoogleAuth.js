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
        })
    })
  }
  render() {
    return <h1>Google Auth</h1>
  }
}

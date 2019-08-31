import React from "react"
import { Router, Route } from "react-router-dom"
import StreamList from "./streams/StreamList"
import CreateStream from "./streams/CreateStream"
import DeleteStream from "./streams/DeleteStream"
import EditStream from "./streams/EditStream"
import ShowStream from "./streams/ShowStream"
import history from "../history"
import Header from "./Header"
import "../App.css"

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={CreateStream} />
          <Route path='/streams/delete/:id' exact component={DeleteStream} />
          <Route path='/streams/edit/:id' exact component={EditStream} />
          <Route path='/streams/show' exact component={ShowStream} />
        </div>
      </Router>
    </div>
  )
}

export default App

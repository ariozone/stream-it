import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import StreamList from "./streams/StreamList"
import CreateStream from "./streams/CreateStream"
import DeleteStream from "./streams/DeleteStream"
import EditStream from "./streams/EditStream"
import ShowStream from "./streams/ShowStream"
import "../App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <h1>Stream It!</h1>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' component={CreateStream} />
          <Route path='/streams/delete' component={DeleteStream} />
          <Route path='/streams/edit' component={EditStream} />
          <Route path='/streams/show' component={ShowStream} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

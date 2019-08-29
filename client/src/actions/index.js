import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  GET_STREAMS,
  GET_STREAM,
  EDIT_STREAM
} from "./types"
import streams from "../apis/streams"

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = formValues => async dispatch => {
  const { data } = await streams.post("/streams", formValues)
  dispatch({ type: CREATE_STREAM, payload: data })
}

export const getStreams = () => async dispatch => {
  const { data } = await streams.get("/streams")
  dispatch({ type: GET_STREAMS, payload: data })
}

export const getStream = id => async dispatch => {
  const { data } = await streams.get(`/streams/${id}`)
  dispatch({ type: GET_STREAM, payload: data })
}

export const editStream = id => async dispatch => {
  const { data } = await streams.put(`/streams/${id}`)
  dispatch({ type: EDIT_STREAM, payload: data })
}

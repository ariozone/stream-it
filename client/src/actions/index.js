import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAMS } from "./types"
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
  const { data } = await streams.get("./streams")
  dispatch({ type: GET_STREAMS, payload: data })
}

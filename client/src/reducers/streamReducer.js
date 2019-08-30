import _ from "lodash"
import {
  GET_STREAM,
  GET_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types"

// const mapArrayToObject = array => {
//   const object = {}
//   array.forEach(item => {
//     object[item.id] = item
//   })
//   return object
// }

export default (state = {}, action) => {
  switch (action.type) {
    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") }
    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      // omit does not change the original state, it creates a new one
      return _.omit(state, action.payload)
    // return { ...state, [action.payload]: undefined }

    default:
      return state
  }
}

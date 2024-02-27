import { ACCEPT_DATE, LOG_IN_SUCCESS } from "../action/userAction";

const initialState = {
  isAlreadyLogIn: false,
  itsADate: false
}

export const userReducer = (state = initialState, action) => {
  switch(action.type){
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isAlreadyLogIn: action.payload
      }
    }
    case ACCEPT_DATE: {
      return {
        ...state,
        itsADate: action.payload
      }
    }
    default:
      return state
  }
}
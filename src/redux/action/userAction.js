export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const saveLogIn = (payload) => {
  return {
    type: LOG_IN_SUCCESS,
    payload: payload
  }
}

export const ACCEPT_DATE = 'ACCEPT_DATE'
export const saveDecision = (payload) => {
  return {
    type: ACCEPT_DATE,
    payload: payload
  }
}
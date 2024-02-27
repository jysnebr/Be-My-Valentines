import { store } from "../redux/store"

export const dispatch = (params) => {
  store.dispatch(params)
}
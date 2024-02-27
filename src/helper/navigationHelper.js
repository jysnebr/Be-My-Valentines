import { CommonActions } from "@react-navigation/native"

let navigationRef

export const setTopNavigationRef = (ref) => {
  navigationRef = ref
}

export const resetNavigation = (screen) => {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
       { name: screen }
      ]
    })
  )
}

export const navigate = (screen, data) => {
  navigationRef.navigate(screen, data)
}
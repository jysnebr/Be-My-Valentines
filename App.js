import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/pages/navigation/rootNavigation'
import { Provider } from 'react-redux'
import { persistor, store } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigation/>
      </PersistGate>
    </Provider>
  )
}


import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default FlexComponent = ({ customStyle, children }) => {
  return (
    <View style={[styles.mainContainer, customStyle]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

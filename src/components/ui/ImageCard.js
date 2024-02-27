import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from '../../utils/dimension'

export default ImageCard = ({ source }) => {
  return (
    <View style={styles.imageCardContainer}>
      <Image
        source={source}
        style={{ maxWidth: '100%', maxHeight: 230 }}
        resizeMode='contain'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageCardContainer: {
    width: deviceWidth / 1.1,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'beige',
    borderRadius: 15,
    marginHorizontal: 10,
    elevation: 10
  }
})
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { normalizeWidth } from '../../utils/dimension'

export default ButtonWithImageCard = ({ onPress, title, image, CustomMainContainerStyle, imageCustomStyle }) => {
  return (
    <View style={[styles.mainContainer, CustomMainContainerStyle ]}>
      <Image
        source={image}
        style={[{ width: 18, height: 18, marginRight: 10, tintColor: 'black' }, imageCustomStyle]}
      />
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={styles.drawerTxt}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1, 
    borderColor: 'lightgray', 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10
  },
  drawerTxt: {
    fontSize: normalizeWidth(17),
    color: 'black',
    fontWeight: '700'
  }
})
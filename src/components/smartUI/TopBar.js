import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { deviceWidth } from '../../utils/dimension'
import { beMyValentineGif, beMyValentineIcon, menuIcon } from '../../helper/imageHelper'
import { useNavigation } from '@react-navigation/native'

export default TopBar = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.topBarContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            source={menuIcon}
            style={{ height: 25, width: 25 }}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerMiddle}>
        <Image
          style={{ width: '80%', height: '100%' }}
          source={beMyValentineIcon}
          resizeMode='contain'
        />
      </View>
      <View style={styles.headerRight}/>
    </View>
  )
}

const styles = StyleSheet.create({
  topBarContainer: {
    height: 55,
    borderBottomWidth: 0.5, 
    backgroundColor: 'beige',
    width: deviceWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerMiddle: {
    flex: 1,
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
  }
})
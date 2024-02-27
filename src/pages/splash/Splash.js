import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import FlexComponent from '../../components/ui/FlexComponent'
import { resetNavigation } from '../../helper/navigationHelper'
import { useIsFocused } from '@react-navigation/native'
import { beMyValentineGif } from '../../helper/imageHelper'
import FastImage from 'react-native-fast-image'
import { deviceHeight, deviceWidth } from '../../utils/dimension'
import { useSelector } from 'react-redux'

export default Splash = () => {
  const isFocused = useIsFocused()
  const isAlreadyLogIn = useSelector(state => state.userReducer.isAlreadyLogIn)

  useEffect(() => {
    if(isFocused){
      setTimeout(() => {
        console.log(isAlreadyLogIn)
        if(isAlreadyLogIn){
          resetNavigation('Dashboard')
        } else {
          resetNavigation('Login')
        }
      }, 3000)
    }
  }, [isFocused])

  return (
    <FlexComponent customStyle={styles.mainContainer}>
      <FastImage 
        source={beMyValentineGif}
        style={{ width: deviceWidth / 1.5, height: deviceHeight / 3 }}
        resizeMode='contain'
      />
    </FlexComponent>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

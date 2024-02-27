import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FlexComponent from '../ui/FlexComponent'
import { deviceWidth, normalizeWidth } from '../../utils/dimension'
import { dispatch } from '../../utils/redux'
import { saveDecision, saveLogIn } from '../../redux/action/userAction'
import ProfileCard from '../ui/ProfileCard'
import { navigate, resetNavigation } from '../../helper/navigationHelper'
import ButtonWithImageCard from '../ui/ButtonWithImageCard'
import { exitIcon, heartIcon, saveIcon } from '../../helper/imageHelper'

export default CustomDrawer = () => {
  return (
    <FlexComponent>
      <FlexComponent customStyle={{ backgroundColor: 'beige', width: deviceWidth / 1.5, alignItems: 'center' }}>
        <ProfileCard/>
        <View style={{ height: '100%', width: '85%', marginTop: 10 }}>
          <ButtonWithImageCard 
            image={heartIcon}
            onPress={() => navigate('Memories')}
            title={'Memories'}
          />
          <ButtonWithImageCard 
            CustomMainContainerStyle={{ borderBottomWidth: 1 }}
            image={saveIcon}
            onPress={() => dispatch(saveDecision(false))}
            title={'Clear Decision'}
          />
          <ButtonWithImageCard 
            CustomMainContainerStyle={{ borderTopWidth: 0, position: 'absolute', bottom: 300 }}
            image={exitIcon}
            onPress={() => {
              dispatch(saveLogIn(false))
              resetNavigation('Splash')
            }}
            title={'Log Out'}
          />
        </View>
      </FlexComponent>
    </FlexComponent>
  )
}

const styles = StyleSheet.create({
  drawerTxt: {
    fontSize: normalizeWidth(17),
    color: 'black',
    fontWeight: '700'
  }
})
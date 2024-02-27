import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { deviceHeight } from '../../utils/dimension'
import { profileBG, profilePic } from '../../helper/imageHelper'

export default ProfileCard = () => {
  return (
    <View style={styles.mainCointainer}>
      <View style={styles.profileBGContainer}>
        <Image
          source={profileBG}
          style={{ width: '100%', height: '100%', opacity: 0.4 }}
          resizeMethod='cover'
        />
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicContainer}>
          <Image
            source={profilePic}
            style={{ width: '100%', height: '100%' }}
            resizeMode='cover'
          />
        </View>
        <Text style={styles.profileName}>Lyanne Gabrielle Tabios</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainCointainer: {
    width: '100%',
    borderWidth: 1,
    height: deviceHeight / 5.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  },
  profileBGContainer: { 
    position: 'absolute', 
    top: 0, 
    width: '100%', 
    height: '100%', 
    backgroundColor: 'black' 
  },
  profileContainer: { 
    width: '100%', 
    height: 70, 
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    zIndex: 2 
  },
  profilePicContainer: { 
    width: 70, 
    height: 70, 
    backgroundColor: 'red', 
    borderRadius: 50, 
    overflow: 'hidden'
  },
  profileName: { 
    color: 'white', 
    fontSize: 13, 
    fontWeight: 'bold' 
  }
})

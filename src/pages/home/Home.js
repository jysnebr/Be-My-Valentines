import { View, Text, StyleSheet, StatusBar, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import FlexComponent from '../../components/ui/FlexComponent'
import FastImage from 'react-native-fast-image'
import { chipiChapa, pikachuLove, pikachuValentine } from '../../helper/imageHelper'
import { deviceHeight, deviceWidth, normalizeWidth } from '../../utils/dimension'
import TopBar from '../../components/smartUI/TopBar'
import { dispatch } from '../../utils/redux'
import { saveDecision } from '../../redux/action/userAction'
import { useSelector } from 'react-redux'
import Video from 'react-native-video'

export default Home = () => {
  const itsADate = useSelector(state => state.userReducer.itsADate)
  const [position, setPosition] = useState({ top: 0, left: 0, right: 0, bottom: 0 })

  useEffect(() => {
    console.log(position)
  }, [position])

  const getRandomInt = (max, min) => {
    return Math.random() * (max - min) + min;
  }

  return (
    <FlexComponent customStyle={styles.mainContainer}>
      <StatusBar translucent={false} backgroundColor={'beige'}/>
      <TopBar/>
      { !itsADate ?
          <View style={styles.bodyContainer}>
            <FastImage
              source={pikachuValentine}
              style={{ height: deviceHeight / 2.5, width: deviceWidth / 1.2, marginTop: 10 }}
              resizeMode='contain'
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.btn, { backgroundColor: 'lightgreen', elevation: 7 }]}
                onPress={() => dispatch(saveDecision(true))}
              >
                <Text style={styles.btnTxt}>Super YES!!</Text>
              </TouchableOpacity>
              <View style={styles.btn}>
                <TouchableOpacity
                  style={[styles.absoluteBtn, { top: position.top, bottom: position.bottom, right: position.right, left: position.left }]}
                  onPress={() => setPosition({ top: getRandomInt(50, -50), bottom: getRandomInt(50, -50), left: getRandomInt(50, -50), right: getRandomInt(50, -50), })}
                >
                  <Text style={styles.btnTxt}>{`NO! :(`}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        :
          <View style={styles.bodyContainer}>
            <FastImage
              source={pikachuLove}
              style={{ height: deviceHeight / 2.5, width: deviceWidth / 1.2, marginTop: 10 }}
              resizeMode='contain'
            />
            <Text style={styles.acceptedTxt}>YEY! SEE YOU SOON!!</Text>
            <Video
              style={{ width: '70%', height: deviceHeight / 5, marginTop: 20 }}
              source={chipiChapa}
              repeat={true}
            />
          </View>
      }
    </FlexComponent>
  )
}

const styles = StyleSheet.create({ 
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white'
  }, 
  bodyContainer: {
    flex: 1,
    width: deviceWidth,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: deviceWidth / 1.2,
    height: 50,
    flexDirection: 'row',
  },
  btn: {
    width: '40%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  absoluteBtn: { 
    width: '100%', 
    height: '100%', 
    position: 'absolute', 
    zIndex: 100, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 15,
    elevation: 7
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold'
  },
  acceptedTxt: {
    fontSize: normalizeWidth(20),
    color: 'brown',
    fontWeight: '700'
  }
})
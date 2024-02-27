import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import FlexComponent from '../../components/ui/FlexComponent'
import FastImage from 'react-native-fast-image'
import { lazyPika } from '../../helper/imageHelper'
import { deviceHeight, deviceWidth, normalizeWidth } from '../../utils/dimension'
import { useDebounce } from '../../hooks/debounceHook'
import { resetNavigation } from '../../helper/navigationHelper'
import { dispatch } from '../../utils/redux'
import { saveLogIn } from '../../redux/action/userAction'

export default Login = () => {
  const [name, setName] = useState('')
  const [favColor, setFavColor] = useState('')
  const [pin, setPin] = useState('')
  const [nameInputEditable, setNameInputEditable] = useState(true)
  const [favColorInputEditable, setFavColorInputEditable] = useState(true)
  const [pinInputEditable, setPinInputEditable] = useState(true)
  const [pass, setPass] = useState({ pass1: false, pass2: false, pass3: false })
  const [error, setError] = useState({ value: false, message: '' })
  const debounceNameValue = useDebounce(name, 1000)
  const debounceFavValue = useDebounce(favColor, 1000)
  const debouncePinValue = useDebounce(pin, 1000)

  useEffect(() => {
    if(debounceNameValue){
      if(debounceNameValue.toLowerCase() == 'lyanne gabrielle tabios'){
        setError({ value: false, message: ''})
        setNameInputEditable(false)
        setPass({ ...pass, pass1: true })
        console.log(pass)
      } else {
        setError({ value: true, message: 'Who are YOU?!'})
      }
    }
  }, [debounceNameValue])

  useEffect(() => {
    if(debounceFavValue){
      if(debounceFavValue.toLowerCase() == 'blue'){
        setError({ value: false, message: ''})
        setFavColorInputEditable(false)
        setPass({ ...pass, pass2: true })
        console.log(pass)
      } else {
        setError({ value: true, message: `That's not her favorite color!` })
      }
    }
  }, [debounceFavValue])
  
  useEffect(() => {
    if(debouncePinValue){
      if(debouncePinValue.toLowerCase() == '9628'){
        setError({ value: false, message: ''})
        dispatch(saveLogIn(true))
        resetNavigation('Splash')
      } else {
        setError({ value: true, message: 'You can do it!!'})
      }
    }
  }, [debouncePinValue])

  return (
    <FlexComponent customStyle={styles.mainContainer}>
      <FastImage
        source={lazyPika}
        style={{ marginTop: deviceHeight / 15, height: deviceHeight / 2.5, width: deviceWidth / 1.2 }}
        resizeMode='contain'
      />
      <Text style={styles.title}>There's only one person who's welcome here!</Text>
      <View style={styles.formContainer}>
        {error.value && <Text style={styles.errorTxt}>{error.message}</Text>}
        <TextInput
          value={name}
          style={[styles.input, !nameInputEditable && { backgroundColor: 'darkgray' }]}
          editable={nameInputEditable}
          placeholder='Full name'
          placeholderTextColor={'gray'}
          onChangeText={(value) => {
            setName(value)
          }}
        />
        {
          pass.pass1 &&
            <TextInput
              value={favColor}
              style={[styles.input, favColor && { backgroundColor: favColor.toLowerCase() }]}
              editable={favColorInputEditable}
              placeholder='Favorite Color'
              placeholderTextColor={'gray'}
              onChangeText={(value) => {
                setFavColor(value)
              }}
            />
        }
        {
          pass.pass2 &&
            <TextInput
              value={pin}
              style={styles.input}
              editable={pinInputEditable}
              secureTextEntry={true}
              maxLength={4}
              placeholder='Pin'
              placeholderTextColor={'gray'}
              onChangeText={(value) => {
                setPin(value)
              }}
            />
        }
      </View>
    </FlexComponent>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  formContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: normalizeWidth(17),
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
  input: {
    fontSize: 15,
    color: 'gray',
    borderWidth: 1,
    width: deviceWidth / 1.5,
    backgroundColor: 'beige',
    padding: 10,
    marginTop: 20,
    borderRadius: 15,
    elevation: 5
  },
  errorTxt: {
    color: 'red',
    fontSize: normalizeWidth(15),
    position: 'absolute',
    top: -5
  }
})
import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { setTopNavigationRef } from '../../helper/navigationHelper'

import { heartIcon, homeIcon, profileIcon } from '../../helper/imageHelper'

import Splash from '../splash/Splash'
import Login from '../login/Login'
import Home from '../home/Home'
import Memories from '../memories/Memories'
import CustomDrawer from '../../components/smartUI/CustomDrawer'

export default rootNavigation = () => {
  const Stack = createStackNavigator()
  const BottomTab = createBottomTabNavigator()
  const Drawer = createDrawerNavigator()

  const BottomTabNavigation = () => {
    return(
      <BottomTab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let image
            let color
            let width = 25
            let height = 25
            if(route.name == 'Home'){
              image = homeIcon
              color = focused ? 'orange' : 'black'
            } else if (route.name == 'Memories'){
              image = heartIcon
              color = focused ? 'orange' : 'black'
            }
            return <Image source={image} style={{ height: height, width: width, tintColor: color}}/>
          },
          tabBarLabel: () => null,
          shifting: true,
          headerShown: false,
          tabBarStyle: {
            height: '8%',
            borderTopColor: 'black',
            backgroundColor: 'beige',
            elevation: 10
          } 
        })}
        
      >
        <BottomTab.Screen name='Home' component={Home} />
        <BottomTab.Screen name='Memories' component={Memories}/>
      </BottomTab.Navigator>
    )
  }

  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props}/>}
        initialRouteName='BottomTabNavigation'
        screenOptions={{ 
          headerShown: false, 
          drawerType: 'front', 
          drawerStyle: {
            backgroundColor: 'transparent',
          }, 
          swipeEdgeWidth: 0
        }}
      >
        <Drawer.Screen name='BottomTabNavigation' component={BottomTabNavigation}/>
      </Drawer.Navigator>
    )
  }


  return (
    <NavigationContainer ref={ref => setTopNavigationRef(ref)}>
    <StatusBar translucent barStyle={'dark-content'} backgroundColor={'transparent'}/>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Dashboard' component={DrawerNavigation} options={{ gestureEnabled: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


import { View, Text, StatusBar, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import TopBar from '../../components/smartUI/TopBar'
import FlexComponent from '../../components/ui/FlexComponent'
import { ScrollView } from 'react-native-gesture-handler'
import { deviceWidth, normalizeWidth } from '../../utils/dimension'
import { augData, junData, septData } from '../../helper/imageHelper'
import List from '../../components/ui/List'
import ImageCard from '../../components/ui/ImageCard'

export default Memories = () => {
  return (
    <FlexComponent customStyle={styles.mainContainer}>
      <StatusBar translucent={false} backgroundColor={'beige'}/>
      <TopBar/>
      <FlexComponent>
        <ScrollView
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <Text style={styles.title}>Memories</Text>
          <View style={{ alignItems: 'center', width: deviceWidth }}>
            <Text style={{ width: '90%', marginTop: 20, fontSize: normalizeWidth(20), color: 'black', fontWeight: '600' }}>September 2023</Text>
            <List data={septData} renderItem={(item) => <ImageCard source={item.item.image}/>} />
            <Text style={{ width: '90%', marginTop: 20, fontSize: normalizeWidth(20), color: 'black', fontWeight: '600' }}>August 2023</Text>
            <List data={augData} renderItem={(item) => <ImageCard source={item.item.image}/>} />
            <Text style={{ width: '90%', marginTop: 20, fontSize: normalizeWidth(20), color: 'black', fontWeight: '600' }}>June 2023</Text>
            <List data={junData} renderItem={(item) => <ImageCard source={item.item.image}/>} />
          </View>
        </ScrollView>
      </FlexComponent>
    </FlexComponent>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: normalizeWidth(35),
    color: 'brown',
    fontWeight: '600',
    marginTop: 20
  }
})
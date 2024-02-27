import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { deviceWidth } from '../../utils/dimension'

export default List = ({ data, renderItem, customStyles }) => {
  return (
    <FlatList
      data={data}
      style={[ styles.list, customStyles ]}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
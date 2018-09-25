import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class MaGiamGia extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Mã giảm giá </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
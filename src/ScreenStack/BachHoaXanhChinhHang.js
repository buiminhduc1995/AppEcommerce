import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class BachHoaXanhChinhHang extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Bách Hóa Xanh Chính Hãng </Text>
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
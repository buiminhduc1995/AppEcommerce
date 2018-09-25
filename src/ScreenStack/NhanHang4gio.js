import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class NhanHang4gio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Nhận hàng 4 giờ </Text>
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
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class SieuThiDienTu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Siêu Thị Điện Tử </Text>
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
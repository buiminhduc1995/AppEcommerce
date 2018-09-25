import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class NapTheDichVu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Nạp thẻ Dịch Vụ </Text>
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
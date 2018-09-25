import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ReVoDich extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Rẻ Vô Địch </Text>
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
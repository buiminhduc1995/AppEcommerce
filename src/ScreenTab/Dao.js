import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Dao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Dạo </Text>
      </View>
    )
  }
}
const styles = StyleSheet. create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
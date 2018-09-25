import React, { Component } from 'react'
import { Text, View, StyleSheet,Button } from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
        <Button title="GO" onPress={()=>this.props.navigation.navigate('BachHoaXanhChinhHang')} />
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
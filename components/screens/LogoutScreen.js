import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

   class LogoutScreen extends Component{
     render(){
     return(
     
    <View style={styles.container}>
      <View>
          <Text>Logout</Text>
      </View>
      </View>
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1
        }
    })
export default LogoutScreen;
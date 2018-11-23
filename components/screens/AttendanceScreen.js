import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

   class AttendanceScreen extends Component{
     render(){
     return(
     
    <View style={styles.container}>
      <View>
          <Text>Attendance</Text>
      </View>
      </View>
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1
        }
    })
export default AttendanceScreen;
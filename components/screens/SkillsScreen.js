import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

   class SkillsScreen extends Component{
     render(){
     return(
     
    <View style={styles.container}>
      <View>
          <Text>Skills Screen</Text>
      </View>
      </View>
      )}
    }

        const styles= StyleSheet.create({
        container:{
            flex:1
        }
    })
export default SkillsScreen;
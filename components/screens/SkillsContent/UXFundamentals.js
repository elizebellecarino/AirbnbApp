import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Button3 from '../../ButtonWithBackground/Button3'


   class UXFundamentals extends Component{
   
     render(){
     return(
     
    <ScrollView style={styles.container}>
      <View style={styles.skillsContent}>
          <Text style={styles.skillsText}>UX Fundamentals</Text>
      </View>

      <View style={styles.detailContent}>
        <Text style={styles.detailText}>Lorem ipsum dolor sit amet, consectetur</Text>
        <Text style={styles.detailText}>adipiscing elit, sed do euismod tempor</Text>
        <Text style={styles.detailText}>incididunt ut labore et dolore magna</Text>
        <Text style={styles.detailText}>aliqua. Ut enim ad minim veniam, quis</Text>
        <Text style={styles.detailText}>nostrud exercitation?</Text>
      </View>
      
      <View style={styles.detailContent}>
        <View style={styles.detailDirection}>
          <Text style={styles.detailsTextBold}>When:</Text><Text style={styles.detailText}> 01-20 March 2018</Text>
        </View>
        <View style={styles.detailDirection}>
          <Text style={styles.detailsTextBold}>Where:</Text><Text style={styles.detailText}> GOAL 7th flr, Panorama Tower</Text>
        </View>  
        <View style={styles.detailDirection}>
          <Text style={styles.detailsTextBold}>Who:</Text><Text style={styles.detailText}> UX Designers, Developers Project</Text>
        </View> 
          <Text style={styles.detailText}>Managers</Text>
        <View style={styles.detailDirection}>
          <Text style={styles.detailsTextBold}>Remaining Slots:</Text><Text style={styles.detailText}> 20</Text>
        </View>
      </View>

      <View style={styles.detailContent}>
        <Text style={styles.detailText}>dolor sit amet, consectetur adipiscing elit,</Text>
        <Text style={styles.detailText}>sed do euismod tempor incididunt ut</Text>
        <Text style={styles.detailText}>labore et dolore magna aliqua</Text>
      </View>

       <View style={styles.detailContent}>
        <View style={styles.detailDirection}>
          <Text style={styles.detailText}>Ut enim ad minim</Text><Text style={styles.detailTextColor}> username@email.com</Text>
        </View>
       </View>

       <View style={styles.buttonContent}>
        <Button3 onPress={() =>  this.props.navigation.navigate('SkillsScreen')}>Join</Button3>
      </View>

      </ScrollView>
    
      )} 
    }

    const styles= StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: 'white'
      },
      skillsContent: {
          minHeight: 30,
          margin: 15,
          justifyContent: 'space-around',
          backgroundColor: 'white'
      },
      skillsText: {
        fontWeight: 'bold',
        fontSize: 20
      },
      detailContent: {
        //flex:1,
        backgroundColor:"white",
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20,
        margin: 10
      },
      detailText: {
        fontSize: 16,
        
      },
      detailsTextBold: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      detailDirection: {
          flexDirection: 'row'
      },
      detailTextColor: {
        fontSize: 16,
        color: '#FF5A5F' 
      },
      buttonContent: {
        flex: 1
    }
    })


    export default UXFundamentals;
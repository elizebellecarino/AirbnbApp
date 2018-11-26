import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


   class SkillsScreen extends Component{
   
     render(){
     return(
     
    <ScrollView style={styles.container}>
      <View style={styles.announcementsContent}>
          <Text style={styles.announcementsText}>Skills Development</Text>
      </View>
      
      <View style={styles.announcementTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('UXFundamentals')}>
          <Text style={styles.announceTitleText}>UX Fundamentals</Text> 
                </TouchableOpacity>

      <View style={styles.detailContent}>
        <Text style={styles.detailText}>Lorem ipsum dolor sit amet, consectetur</Text>
          <Text style={styles.detailText}>adipiscing elit, sed do eiusmod tempor</Text>
            <Text style={styles.detailText}>incididunt...</Text>
      </View>

      <View style={styles.border}>
      </View>
      
      <View style={styles.timeKeepingTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('UXFundamentals')}>
          <Text style={styles.announceTitleText}>UX of Blockchain</Text> 
                </TouchableOpacity>
      
      <View style={styles.detailContent}>
        <Text style={styles.detailText}>Lorem ipsum dolor sit amet, consectetur</Text>
          <Text style={styles.detailText}>adipiscing elit, sed do eiusmod tempor</Text>
            <Text style={styles.detailText}>incididunt...</Text>
      </View>

      <View style={styles.border}>
      </View>

      <View style={styles.timeKeepingTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('UXFundamentals')}>
          <Text style={styles.announceTitleText}>Designing with Respect</Text> 
                </TouchableOpacity>

      <View style={styles.detailContent}>
        <Text style={styles.detailText}>Lorem ipsum dolor sit amet, consectetur</Text>
          <Text style={styles.detailText}>adipiscing elit, sed do eiusmod tempor</Text>
            <Text style={styles.detailText}>incididunt...</Text>
      </View>

      <View style={styles.border}>
      </View>

      <View style={styles.timeKeepingTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('UXFundamentals')}>
          <Text style={styles.announceTitleText}>Theories of UX</Text> 
                </TouchableOpacity>

      <View style={styles.detailContent}>
        <Text style={styles.detailText}>Lorem ipsum dolor sit amet, consectetur</Text>
          <Text style={styles.detailText}>adipiscing elit, sed do eiusmod tempor</Text>
            <Text style={styles.detailText}>incididunt...</Text>
      </View>

      <View style={styles.border}>
      </View>
      
      </View>       
      </View>
      </View>
      </View>

      
    </ScrollView>
    
      )} 
    }

    const styles= StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: 'white'
      },
      announcementsContent: {
          minHeight: 30,
          margin: 15,
          justifyContent: 'space-around'
      },
      announcementsText: {
        fontWeight: 'bold',
        fontSize: 18
      },
      announcementTitleHolder: {
        flex: 1,
        backgroundColor: 'white' 
      },
      announceTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20
      },
      
     detailContent: {
        //flex:1,
        backgroundColor:"white",
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20
     },
     detailText: {
       fontSize: 16
     },
     border: {
       borderBottomColor: "black",
       borderBottomWidth:1,
       width:"100%",
       minHeight:25,
       marginLeft:20,
       width:"90%" 
     },
     timeKeepingTitleHolder: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20
     }
    })


    export default SkillsScreen;
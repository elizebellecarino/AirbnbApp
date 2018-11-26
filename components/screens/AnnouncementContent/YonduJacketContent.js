import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Button3 from '../../ButtonWithBackground/Button3'


   class YonduJacketContent extends Component{
   
     render(){
     return(
     
    <ScrollView style={styles.container}>
      
      <View style={styles.announcementTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('YonduJacketContent')}>
          <Text style={styles.announceTitleText}>The Yondu Jacket:</Text> 
            <Text style={styles.announceTitleText}>Keeping you warm this</Text>
              <Text style={styles.announceTitleText}>Christmas</Text>
                </TouchableOpacity>
      
      
      <View style={styles.datePostContent}>
        <View style={styles.dateHolder}>
          <Icon name="ios-eye" size={12} color= '#FF5A5F'/>
            <Text style={styles.dateText}>DECEMBER 01-05, 2017</Text>
        </View>
          <View style={styles.posterHolder}>
            <Icon name="ios-person" size={12} color= '#FF5A5F'/>
              <Text style={styles.dateText}>HUMAN RESOURCES</Text>
          </View>
      </View>

      <View style={styles.detailContent}>
        <Text style={styles.detailText}>In lieu of Christmas Ham, we are giving</Text>
          <Text style={styles.detailText}>you a Yondu Jacket as a Christmas</Text>
            <Text style={styles.detailText}>present.</Text>
      </View>

      </View>

      <View style={styles.distributionHolder}>
        <Text style={styles.distributionText}>DISTRIBUTION SCHEDULE</Text>
      </View>      

      <View style={styles.distributionDateContent}>
        <Text style={styles.distributionDateText}>December 18-20, 2017 - 2:00 - 4:00 pm</Text>
      </View> 

      <View style={styles.distributionPlaceHolder}>
        <Text style={styles.distributionPlaceText}>Reception Area, Lower Penthouse</Text>
      </View> 
    
      <View style={styles.distributionContactHolder}>
          <Text style={styles.distributionContactText}>For Client-Based, please contact Alyssa</Text>
          <Text style={styles.distributionContactText}>(atarranza@yondu.com) for delivery</Text>
          <Text style={styles.distributionContactText}>schedule.</Text>
      </View>

     
      
      <View style={styles.buttonContent}>
        <Button3 onPress={() =>  this.props.navigation.navigate('SendFeedback')}>Send Feedback</Button3>
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
        fontSize: 16
      },
      announcementTitleHolder: {
        flex: 2,
        marginTop: 20
      },
      announceTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20
      },
      datePostContent: {
        flexDirection: 'row',
        marginLeft: 20,
        marginVertical: 10
      },
      dateHolder: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      dateText: {
        fontSize: 12,
        marginLeft: 7,
        color: '#FF5A5F'
      },
      posterHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginVertical: 10
      },
     detailContent: {
        flex:1,
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20
     },
     detailText: {
       fontSize: 4
     },
     distributionHolder: {
        //flex: .6,
        marginVertical: 20
     },
     distributionText: {
        fontSize: 15,
        marginLeft: 20,
        fontWeight: 'bold'
     },
     distributionPlaceText: {
        fontSize: 14,
        marginLeft: 20,
     },
     distributionContactHolder: {
        //flex: 2
     },
     distributionContactText: {
        fontSize: 14,
        marginLeft: 20,
     },
     buttonContent: {
         flex: 1,
         marginTop: 45
     },
     distributionDateContent: {
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20
     },
     distributionDateText: {
        fontSize: 14
     },
     distributionPlaceHolder: {
        marginVertical: 20
     }
    })


    export default YonduJacketContent;
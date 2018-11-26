import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


   class AnnouncementsScreen extends Component{
   
     render(){
     return(
     
    <ScrollView style={styles.container}>
      <View style={styles.announcementsContent}>
          <Text style={styles.announcementsText}>Announcements</Text>
      </View>
      
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

      <View style={styles.border}>
      </View>
      
      <View style={styles.timeKeepingTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('YonduJacketContent')}>
          <Text style={styles.announceTitleText}>Timekeeping Deadline Reminder: November 17 at</Text> 
            <Text style={styles.announceTitleText}>5pm</Text>
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
        <Text style={styles.detailText}>In order for us to improve our adjustment</Text>
          <Text style={styles.detailText}>report, we have scheduled suspension</Text>
            <Text style={styles.detailText}>dates in filing...</Text>
      </View>

      <View style={styles.border}>
      </View>
      <View style={styles.timeKeepingTitleHolder}>
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

      <View style={styles.border}>
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
      datePostContent: {
        flexDirection: 'row',
        marginLeft: 20,
        marginVertical: 7
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
        marginVertical: 5
      },
     detailContent: {
        //flex:1,
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


    export default AnnouncementsScreen;
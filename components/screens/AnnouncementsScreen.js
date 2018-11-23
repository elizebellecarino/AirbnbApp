import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


   class AnnouncementsScreen extends Component{
   
     render(){
     return(
     
    <View style={styles.container}>
      <View style={styles.announcementsContent}>
          <Text style={styles.announcementsText}>Announcements</Text>
      </View>
      
      <View style={styles.announcementTitleHolder}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AnnouncementsContent')}>
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
    </View>
    
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
        backgroundColor:"white",
        justifyContent:"space-around",
        alignContent: "stretch",
        marginLeft:20
     },
     detailText: {
       fontSize: 16
     }
    })
export default AnnouncementsScreen;
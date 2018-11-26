import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import {createDrawerNavigator, DrawerItems} from 'react-navigation'
import AnnouncementsScreen from '../screens/AnnouncementsScreen'
import AttendanceScreen from '../screens/AttendanceScreen'
import CompanyScreen from '../screens/CompanyScreen'
import CompensationScreen from '../screens/CompensationScreen'
import WorkingScreen from '../screens/WorkingScreen'
import SkillsScreen from '../screens/SkillsScreen'
import NotificationsScreen from '../screens/NotificationsScreen';
import LogoutScreen from '../screens/LogoutScreen'
import AnnounceStack from './AnnounceStack'
import SkillsDevelopmentStack from './SkillsDevelopmentStack'
import SendFeedbackStack from './SendFeedbackStack';

const Drawer = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 80, backgroundColor: 'white', justifyContent: "center" }}>
        <Text style={{fontWeight: 'bold'}}>  Welcome, Fritz! </Text>
        
        <View style={styles.border}>
      </View>
      
      </View>
      <ScrollView>
  
        <DrawerItems {...props} />
        
      </ScrollView>
    </SafeAreaView>
  )

const AppDrawerNavigator = createDrawerNavigator({
    Announcements: AnnounceStack,
    Attendance: AttendanceScreen,
    'Company Policies': CompanyScreen,
    'Compensation & Benefits': CompensationScreen,
    'Working Conditions': WorkingScreen,
    'Skills Development': SkillsDevelopmentStack,
    Notifications: NotificationsScreen,
    'Send Feedback': SendFeedbackStack,
    Logout: LogoutScreen

}, {
    contentComponent: Drawer,
}
)
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    border: {
        borderBottomColor: "#a9a9a9",
        borderBottomWidth:1,
        width:"100%",
        minHeight:25,
        
    }
})

export default AppDrawerNavigator;
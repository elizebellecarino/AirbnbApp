import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator} from 'react-navigation'
import AnnouncementsScreen from '../screens/AnnouncementsScreen'
import AttendanceScreen from '../screens/AttendanceScreen'
import CompanyScreen from '../screens/CompanyScreen'
import CompensationScreen from '../screens/CompensationScreen'
import WorkingScreen from '../screens/WorkingScreen'
import SkillsScreen from '../screens/SkillsScreen'
import NotificationsScreen from '../screens/NotificationsScreen';
import AnnounceStack from './AnnounceStack'


const AppDrawerNavigator = createDrawerNavigator({
    Announcements: AnnounceStack,
    Attendance: AttendanceScreen,
    'Company Policies': CompanyScreen,
    'Compensation & Benefits': CompensationScreen,
    'Working Conditions': WorkingScreen,
    'Skills Development': SkillsScreen,
    Notifications: NotificationsScreen

})
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AppDrawerNavigator;
import React,{ Component }  from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import AnnouncementsScreen from '../screens/AnnouncementsScreen'
import AnnouncementContent from '../screens/AnnouncementContent/AnnouncementContent'

export default ContentStackNav = createStackNavigator({
        Home:{
            screen:AnnouncementsScreen,
            navigationOptions:{
                headerTintColor:"white",
                title: "         Yondu Lounge",
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                },
                headerLeft:
                    <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}} />,
                headerRight:
                <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
            }
        },
        AnnouncementsContent:{
            screen:AnnouncementContent,
            navigationOptions:{
                headerTintColor:"white",
                title: " Announcements",
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                },
                headerLeft:
                    <Icon name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>,
                headerRight:
                <Icon name="ios-cart" size={30} color="white" style={{marginRight:10}}/>,
            }
        }
    })
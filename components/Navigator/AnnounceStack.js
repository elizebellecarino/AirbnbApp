import React,{ Component }  from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import AnnouncementsScreen from '../screens/AnnouncementsScreen'
import YonduJacketContent from '../screens/AnnouncementContent/YonduJacketContent'
import SendFeedback from '../screens/AnnouncementContent/SendFeedback'


export default ContentStackNav = createStackNavigator({
        Home:{
            screen:AnnouncementsScreen,
            navigationOptions:
              ({navigation}) =>  {
               return{
                headerTintColor:"white",
                title: "         Yondu Lounge",
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                    textAlign:"center",
                    width:"100%"
                },
                headerLeft:
                  <Icon onPress={() => navigation.openDrawer()} 
                      name="ios-menu" size={30} color="white" style={{marginLeft:10}} />,
                headerRight:
                  <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
             }
          }
        
        },
        
        YonduJacketContent:{
            screen:YonduJacketContent,
            navigationOptions:
             ({navigation}) =>  {
             return{
                headerTintColor:"white",
                title: " Announcements",
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                    textAlign:"center",
                    width:"100%"
                },
                headerLeft:
                  <Icon onPress={() => navigation.openDrawer()}
                     name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>,
                headerRight:
                  <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
            }
          }
        },

        SendFeedback:{
            screen:SendFeedback,
            navigationOptions:
              ({navigation}) =>  {
               return{
                headerTintColor:"white",
                title: " Announcements",
                headerStyle:{
                    backgroundColor:"#FF5A5F",
                    textAlign:"center",
                    width:"100%"
                },
                headerLeft:
                  <Icon onPress={() => navigation.openDrawer()} 
                    name="ios-menu" size={30} color="white" style={{marginLeft:10}}/>,
                headerRight:
                  <Icon name="ios-notifications" size={30} color="white" style={{marginRight:10}}/>,
            }
          }
        }
            
    })
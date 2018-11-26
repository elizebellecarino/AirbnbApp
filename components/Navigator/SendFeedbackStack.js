import React,{ Component }  from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import SendFeedbackScreen from '../screens/SendFeedbackScreen'



export default ContentStackNav = createStackNavigator({
        SendFeedback:{
            screen:SendFeedbackScreen,
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
        
            
    })
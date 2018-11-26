import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import LocalImage from '../LocalImage/LocalImage'
import logo from '../../components/assets/airbnb_logo.png'
import yondu from '../../components/assets/yondu.jpg'
import DefaultInput from '../DefaultInput/DefaultInput'
import Button1 from '../ButtonWithBackground/Button1'
import Button2 from '../ButtonWithBackground/Button2'


  class LoginScreen extends Component{
    static navigationOptions = {
        header:null,
    }


     render(){
     return(
       <View style={styles.container}>
         <View style={styles.logoContent}>
           <LocalImage source={logo} 
                originalWidth={2000}
                originalHeight={625} />  
         </View> 
           <View style={styles.userLogin}>
             <Text style={styles.userLoginText}>User Login</Text>
           </View>
             <View style={styles.inputContainer}>
              <DefaultInput placeholder={"Username"} style={{backgroundColor:"#f5f5f5"}} /> 
              <DefaultInput placeholder={"Password"} style={{backgroundColor:"#f5f5f5"}} />
             </View>
               <View style={styles.forgotPassword}>
                 <TouchableOpacity>
                 <Text style={styles.fogotPasswordText}>Forgot Password?</Text>
                 </TouchableOpacity>
               </View>
      <View style={styles.buttonContent}>
        <Button1 onPress={() =>  this.props.navigation.navigate('Announcements')}>Login</Button1>
        <Button2 onPress={() =>  this.props.navigation.navigate('SignUp')}>Create an Account</Button2>
        </View>
          
       </View>
    )}
    }

    const styles= StyleSheet.create({
      container:{
         flex:1,
         backgroundColor: 'white'
        },
        logoContent: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 8,
            paddingRight: 8
        },
        userLogin: {
         alignItems: 'center',
         backgroundColor: 'white'
        },
        userLoginText: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: 22
        },
        inputContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 8,
        },
        forgotPassword: {
          marginBottom: 20,
          alignItems: 'center',
          backgroundColor: 'white'
        },
        fogotPasswordText:{
          color: '#FF5A5F',
          fontWeight: 'bold',
          fontSize: 12
        },
        buttonContent: {
          flex: 1
        }
    })

    export default LoginScreen;
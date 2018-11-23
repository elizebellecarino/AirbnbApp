import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import LocalImage from '../LocalImage/LocalImage'
import logo from '../../components/assets/airbnb_logo.png'
import yondu from '../../components/assets/yondu.jpg'
import DefaultInput from '../DefaultInput/DefaultInput'
import Button1 from '../ButtonWithBackground/Button1'
import Button2 from '../ButtonWithBackground/Button2'


  class ConfirmationScreen extends Component{
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
           <View style={styles.accountConfirmed}>
             <Text style={styles.accountConfirmedText}>Account Confirmed!</Text>
             <Text style={styles.accountConfirmedText}>You may now login to your account</Text>
           </View>
      <View style={styles.buttonContent}>
        <Button1 onPress={() =>  this.props.navigation.navigate('Login')}>Login Now</Button1>
        </View>
          
       </View>
    )}
    }

    const styles= StyleSheet.create({
      container:{
         flex:1,
         backgroundColor: '#f5f5f5'
        },
        logoContent: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 8,
            paddingRight: 8
        },
        accountConfirmed: {
          flex: 0.5,
         alignItems: 'center'
        },
        accountConfirmedText: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: 20,
          marginVertical: 5
        },
        buttonContent: {
          flex: 1
        }
    })

    export default ConfirmationScreen;
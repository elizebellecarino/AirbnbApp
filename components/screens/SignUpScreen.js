import React, { Component } from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import LocalImage from '../LocalImage/LocalImage'
import logo from '../../components/assets/airbnb_logo.png'
import yondu from '../../components/assets/yondu.jpg'
import DefaultInput from '../DefaultInput/DefaultInput'
import Button1 from '../ButtonWithBackground/Button1'
import Button2 from '../ButtonWithBackground/Button2'


  class SignUpScreen extends Component{
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
           <View style={styles.createAnAccount}>
             <Text style={styles.createAnAccountText}>Create an Account</Text>
           </View>
             <View style={styles.inputContainer}>
              <DefaultInput placeholder={"Enter Yondu Email"} style={{backgroundColor:"#f5f5f5"}} /> 
              <DefaultInput placeholder={"Password"} style={{backgroundColor:"#f5f5f5"}} />
              <DefaultInput placeholder={"Confirm Password"} style={{backgroundColor:"#f5f5f5"}} />
             </View>
      <View style={styles.buttonContent}>
        <Button1 onPress={() =>  this.props.navigation.navigate('Confirmation')}>Submit</Button1>
        <Button2>Cancel</Button2>
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
        createAnAccount: {
         alignItems: 'center'
        },
        createAnAccountText: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: 18
        },
        inputContainer: {
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 8,
          paddingRight: 8,
        },
        buttonContent: {
          flex: 1.5
        }
    })

    export default SignUpScreen;
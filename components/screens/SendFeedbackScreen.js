import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker, TextInput, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Button3 from '../ButtonWithBackground/Button3'
import Button4 from '../ButtonWithBackground/Button4'



class SendFeedbackScreen extends Component{
    state={
        text: ""
       }
     alertHolder=() => {
        Alert.alert(
            'Feedback Sent',
            'Your feedback has been sent.You will be notified once the recepient replied.',
            [
         
              {text: 'OK', onPress: () => this.props.navigation.navigate('AnnouncementsHome')},
            ],
            { cancelable: false }
          )
     }
   
render(){
  return(
     <View style={styles.container}>
      <View style={styles.announcementsContent}>
          <Text style={styles.announcementsText}>Send Feedback</Text>
      </View>
      <View style={styles.pickerHolder}>
        <Picker 
          selectedValue={this.state.text}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
      <Picker.Item label="Select Subject" value="java" color="#9A9D9F" />
      <Picker.Item label="Select Subject" value="js" color="#9A9D9F" />
      </Picker>
      </View>
     <View style={styles.textInputHolder}>
       <TextInput style={styles.textInput} placeholder="Enter Feedback"/>
     </View>
     <View style={styles.buttonContent}>
       <Button3 onPress={this.alertHolder}>Submit</Button3>
       <Button4 bgColor={{backgroundColor:"white"}} 
       textColor={{color:"#FF5A5F"}}>
       Cancel</Button4>
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
          flex: .6,
          marginLeft: 20,
          justifyContent: 'center'
      },
      announcementsText: {
        fontWeight: 'bold',
        fontSize: 18
      },
      pickerHolder: {
        flex:.4,
        marginLeft: 20,
        backgroundColor:"#F7F7F7",
        marginRight: 20,
      },
      pickerStyle: {
        width:"90%",
        height:"100%"
      },
      textInputHolder: {
        flex:2.5,
        margin:15,
        backgroundColor:"white",
      },
      textInput: {
        textAlign:"left",
        backgroundColor:"#F7F7F7",
        height:"100%",
        width:"100%"
      },
      buttonContent: {
        flex:1,
      }
    })


    export default SendFeedbackScreen;
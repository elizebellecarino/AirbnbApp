import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import Button3 from '../../ButtonWithBackground/Button3'
import Button4 from '../../ButtonWithBackground/Button4'
   class SendFeedback extends Component{
     render(){
    return(
    <View style={styles.container}>
      <View style={styles.feedbackHolder}>
          <Text style={styles.feedbackTextHolder}>Send Feedback</Text>
      </View>

      <View style={styles.feedbackTitle}>
          <Text style={styles.feedbackTitleText}>RE: The Yondu Jacket:</Text>
          <Text style={styles.feedbackTitleText}>Keeping you warm... </Text>
      </View>

      <View style={styles.textInputHolder}>
       <TextInput style={styles.textInput} placeholder="Enter Feedback"/>
     </View>

      <View style={styles.buttonContent}>
        <Button3 onPress={() =>  this.props.navigation.navigate('Home')}>Submit</Button3>
        <Button4>Cancel</Button4>
      </View>
    </View>
    )}
    }

    const styles= StyleSheet.create({
        container:{
           flex:1,
           backgroundColor: 'white'
        },
        feedbackHolder: {
           minHeight: 25,
           margin: 15,
           justifyContent: 'space-around',
           backgroundColor: 'white'
        },
        feedbackTextHolder: {
           fontWeight: 'bold',
           fontSize: 19
        },
        feedbackTitle: {
            //flex: 1,
            minHeight: 23,
            backgroundColor: 'white' 
        },
        feedbackTitleText: {
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 20
        },
        detailsHolder: {
            flex: 2.4,
            backgroundColor: '#f5f5f5',
            margin: 15,
            marginVertical: 15
        },
        detailsText: {
            fontSize: 16,
            marginLeft: 20
        },
        buttonContent: {
            flex: 1,
            marginVertical: 5
        },
        textInputHolder: {
            flex: 2.5,
            margin: 15,
            backgroundColor: "white",
        },
        textInput: {
            textAlign: "left",
            backgroundColor: "#F7F7F7",
            height: "100%",
            width: "100%"
        },

        })
export default SendFeedback;
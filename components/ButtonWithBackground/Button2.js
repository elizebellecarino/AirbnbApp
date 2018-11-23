import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const Button2 = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:"#ffffff"},props.border]}> 
            <Text style={[{color:"#FF5A5F"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor:"#FF5A5F",
      alignItems: 'center',
      width:"80%",
      alignSelf:"center"
    }
})

export default Button2;
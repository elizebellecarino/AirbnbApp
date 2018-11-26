import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const Button3 = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor:'#FF5A5F'},props.border]}> 
            <Text style={[{color:"white"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      alignItems: 'center',
      width:"90%",
      alignSelf:"center"
    }
})

export default Button3;
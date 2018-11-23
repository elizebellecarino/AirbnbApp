import React from 'react'
import { TextInput,StyleSheet } from "react-native";

const CustomInput = props =>(
    <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={styles.input}
    placeholder={props.placeholder}
    
    />
)

const styles = StyleSheet.create({
    input:{
        width: "80%",
        borderRadius: 5,
        backgroundColor:'#d3d3d3',
        textAlign:'left',
        marginVertical: 5
        
    }
})

export default CustomInput;
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import LoginScreen from './components/screens/LoginScreen'
import SignUpScreen from './components/screens/SignUpScreen'
import ConfirmationScreen from './components/screens/ConfirmationScreen'
import AppDrawerNavigator from './components/Navigator/AppDrawerNavigator'

export default class App extends Component {
  render() {
    return (
      <SwitchNav />
      
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Confirmation: ConfirmationScreen,
 })

 const SwitchNav = createSwitchNavigator({
   App: AppStackNavigator,
   Entry: AppDrawerNavigator
 },
  {
    initialRouteName: 'App'
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5A5F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

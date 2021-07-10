import React from 'react';
import { StyleSheet } from 'react-native';
import LoginPage from './screens/loginAndSignupPage';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation'
import {AppTabNavigator } from './components/AppTabNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchnavigator  = createSwitchNavigator ({
  //login: {screen: LoginPage},
  main: {screen: AppTabNavigator}
})

const AppContainer = createAppContainer(switchnavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
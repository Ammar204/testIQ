import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Github from "./Github"
import { Provider } from 'react-redux'
import store from "./src/redux/store"
class App extends React.Component{

  render(){
    return(
      <Provider store={store}>      
      <Github/>
      </Provider>
    )
  }
}


export default App
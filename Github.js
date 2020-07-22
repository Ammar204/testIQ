import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home"
import UserInfo from "./src/screens/UserInfo"
export default class Github extends React.Component{

    render(){
        const RootStack = createStackNavigator();
        return(
            <NavigationContainer>
            
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="UserInfo" component={UserInfo} />
            </RootStack.Navigator>
            </NavigationContainer>

            
        )
    }
}



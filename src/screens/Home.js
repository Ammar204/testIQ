import React from 'react'
import InputFeild from "../component/InputFeild"
import { View } from 'react-native';
import List from "../component/List"
class Home extends React.Component{

    render(){
        const { navigation } = this.props
        return(
        <View >
            <InputFeild />
            <List navigation={navigation}/>
        </View>
        )

    }
}

export default Home
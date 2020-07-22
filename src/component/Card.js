import React from 'react';
import {
  View,Text,StyleSheet,Image
} from 'react-native';

class Card extends React.Component{
    constructor(props){
        super(props)
    }

  render(){
    return (
      <View style={styles.container}>
        <View>
        <Image 
            source={{uri:this.props.data.avatar_url}}
            style={{width: 50, height: 50}}
        />
        </View>
        <View>
            <Text>{this.props.data.login}</Text>
            <Text>{this.props.data.url}</Text>
        </View>
        </View>
      
  );

  }
  
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent : "space-around",
        borderWidth : 1,
        borderColor : "#000",
        marginHorizontal : 20,
        marginVertical : 10
    }
  })

export default Card;

import React from 'react';
import {
  View,Text,StyleSheet,Image
} from 'react-native';

class Card extends React.Component{
    constructor(props){
        super(props)
    }

  render(){
    console.log("in card",this.props.data)
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
      height: 100,
        borderWidth : 1,
        borderColor : "#000",
    }
  })

export default Card;

import React from 'react';
import {
  View,TextInput,StyleSheet
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux'
import loadUser from "../redux/action/loadUser"
class InputFeild extends React.Component{
    constructor(props){
        super(props)
        this.timeout =  0;
    }
     onChange = (e) =>{
        
        var searchText = e["nativeEvent"].text; // this is the search text
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.props.loadUserFromDispatch(searchText)
        }, 1000);
    
      }
  render(){
    return (
      
      <View>
        <View style={styles.wrapperInput}>
          <AntDesign name="search1" size={18} color="gray" />
          <TextInput style={styles.inputText} onChange={text => this.onChange(text )} placeholder="Enter user name"  />
        </View>

      </View>
      
  );

  }
  
};
const styles = StyleSheet.create({
    wrapperInput: {
      flexDirection: 'row',
      backgroundColor: "#fff",
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 8,
      marginTop: 10,
      borderWidth : 1,
      borderColor : "#000",
    //   paddingHorizontal : 20
      marginHorizontal : 20,

  
    },
    inputText: {
        padding: 10,
        flex: 1,
  
      },
  })
  function mapDispatchToProps(dispatch) {
    return {
        loadUserFromDispatch: (searchText) => dispatch(loadUser(searchText))
    }
}

  export default connect(null, mapDispatchToProps)(InputFeild);
  

import React from 'react';
import {
  View,FlatList,StyleSheet,TouchableOpacity
} from 'react-native';
import dummy from "../dummydata/categories.json"
import Card from "./Card"
import { connect } from 'react-redux'
class List extends React.Component{
    constructor(props){
        super(props)
    }
ComponentDidMount(){
  console.log(this.props)
}
  render(){
    const { navigation } = this.props
    const data={...this.props.dataFromState}
    return (
      
      <View>
        {/* <FlatList
                data={this.props.dataFromState}
                numColumns={1}
            renderItem = { ({item}) => (
              <TouchableOpacity onPress={()=> navigation.navigate('UserInfo',{
                data:{item}
              }
              )}>
                <Card data={item}/>
              </TouchableOpacity>
                
            )}

            /> */}

<TouchableOpacity onPress={()=> navigation.navigate('UserInfo',{
                data:{data}
              }
              )}>
                <Card data={data}/>
              </TouchableOpacity>
      </View>
      
  );

  }
  
};

function mapStateToProps(state) {
  return {
      dataFromState : {...state}
  }
}
export default connect(mapStateToProps)(List);

// export default List ;

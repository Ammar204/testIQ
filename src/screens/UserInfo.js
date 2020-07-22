import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
class UserInfo extends React.Component{

    render(){
        const { navigation,route } = this.props
        const { item } = route.params.data;
        // console.log("route",route.params.data.item)

        return(
        <View >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={styles.closeWrapper}>
                <Text style={styles.closeButton} >X</Text>
            </View>
            </TouchableOpacity>
            
            <View  style={styles.dataWrapper}>
                <Text>{item.login}</Text>
            </View>
            
        </View>
        )

    }
}
const styles = StyleSheet.create({
    closeWrapper:{
        position : "absolute",
        right : 0,
        backgroundColor : "red",
        width : 40,
        height : 40,
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    closeButton:{
        fontSize : 24,
        fontWeight : "bold"
    },
    dataWrapper :{
        marginTop : 20
    },
    
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

export default UserInfo
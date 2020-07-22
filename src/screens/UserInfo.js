import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Button,Image} from 'react-native';
import axios from 'axios';
class UserInfo extends React.Component{
    constructor(props){
        super(props)
        this.noOfFollower = ""
    }

    // getStatus = () => {
    //     axios.get(`https://api.github.com/users/Ammar204/followers`).then(function (response) {
    //         console.log("res",response.data.length)
    //         this.follower = response.data.length
    //         console.log("no fo follower")
    //     }).catch(function (error) {
    //         ("error",error)
    //     })
    // }
    

    // componentWillMount(){
    //     this.getStatus()
    // }
    render(){
        const { navigation,route } = this.props
        const { data } = route.params.data;
        // console.log("route",route.params.data.item)

        return(
        <View >

            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={styles.closeWrapper}>
                <Button title="X" onPress={()=>navigation.goBack()} />
                {/* <Text style={styles.closeButton} >X</Text> */}
            </View>
            </TouchableOpacity>
            
            <View  style={styles.dataWrapper}>
            <Image 
                    source={{uri:data.avatar_url}}
                    style={{width: 50, height: 50}}
                />
                <Text>no of  follower : {data.followers}</Text>
                <Text> location: {data.location}</Text>
                <Text>full name: {data.name}</Text>

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
        width : 80,
        height : 80,
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
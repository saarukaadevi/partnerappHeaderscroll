import React from 'react';
import { Text, View } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from 'react-native-vector-icons'

const Header=()=> {
  return (
    <View style={{
        position:"absolute",       
        top:0,
        left:0,
        right:0,
        height:45,
        flexDirection:"row",
        justifyContent:"space-between",
        elevation:4,
    }}>
      {/* <View style={{
          flexDirection:"row",
          margin:5
      }}>
         <AntDesign
          style={{
              marginLeft:20
          }}
         name="youtube" size={32} color="red"/>
         <Text style={{
             fontSize:22,
             marginLeft:5,
             fontWeight:"bold"
         }}>YouTube</Text>
      </View> */}
      <View style={{
          flexDirection:"row",
          justifyContent:"space-around",
          width:150,
          margin:5
      }}>
     <Text></Text>
      </View>
    </View>
  );
}
export default Header
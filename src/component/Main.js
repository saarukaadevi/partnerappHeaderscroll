import React,{useState} from 'react'
import {ScrollView, View,Text,Image,TextInput,Alert,TouchableOpacity} from 'react-native'
import styles from './Styles'
import { Button, WhiteSpace } from '@ant-design/react-native';
import Content from './Content'

const Main = (props) => {
    const [isLoading,setisLoading] = useState(false)

    return(
      
        <View style={[{flexDirection: 'row',flex:1, alignItems: 'stretch', resizeMode: 'cover',alignItems:'center'}]}>
        <ScrollView style={styles.flex1}
        keyboardShouldPersistTaps='always'>
                <View style={[{ alignItems: 'center' , flexDirection: 'row',flex:1}]}>
                <Image source={require('../Assets/logo.png')}
                 style={[{marginTop:100,marginBottom:80,width:150,height:132}]} /> 
                  </View> 
                <TextInput
                    editable={true}
                    maxLength={10}
                    keyboardType="numeric"
                    placeholder={"PhoneNumber"}
                    placeholderTextColor={'black'}
                    underlineColorAndroid={'white'}
                    // onChangeText={(value) => setMobileNumber(value)}
                />
                 <WhiteSpace />
                <Button onPress={<TouchableOpacity onpress={<Content/>}></TouchableOpacity>}
             type="primary" >
                {"Login"}</Button>
                <Button  onPress={() => Alert.alert('Simple  pressed')}>
     Create Account
    
        </Button>
        <Button style={styles.signuptext}  onPress={() => Alert.alert('Simple Button pressed')}>
     Forgot Password?
      
        </Button>
            </ScrollView>
               </View >
              // <View style={[{flexDirection: 'row',flex:1, alignItems: 'stretch', resizeMode: 'cover',}]}>
              //   <Image
              //       style={[{flex:1,paddingTop:90, resizeMode: 'cover',}]}
              //       source={require('../Assets/background.png')}
              //   />
        
    )
} 
export default Main



import React,{useRef} from 'react';
import AnimatedHeader from './src/Assets/AnimatedHeader'
import { Text,View, ScrollView, Animated } from 'react-native';
import data from './src/component/data'
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';



// import React,{useState} from 'react';
// import { Text,View, FlatList, Animated,StyleSheet } from 'react-native';


// const  App=()=> {
//   const data = [
//     {
//       "id": 2,
//       "title": "Test Telegram",
//       "description": "Check load availability, chat with our Traffic guys Get load through Telegram chat  We have opened up another social media channel so that we can have better reach to our user base. On top of our existing social media channels; Facebook, WhatsApp, now you can reach us via our official Telegram Channel",
//       "createdat": "2020-08-27T05:32:00",
//       "updatedat": null
//     },
//     {
//       "id": 9,
//       "title": "Test Message 2",
//       "description": "Announcement from frontend for testing",
//       "createdat": "2020-09-02T06:35:58.098689",
//       "updatedat": null
//     },
//     {
//       "id": 10,
//       "title": "Testing",
//       "description": "Announcement from frontend",
//       "createdat": "2020-09-23T09:38:37.707657",
//       "updatedat": null
//     },
//     {
//       "id": 11,
//       "title": "testing",
//       "description": "check user update",
//       "createdat": "2020-09-23T13:58:57.028249",
//       "updatedat": null
//     },
//     {
//       "id": 12,
//       "title": "Testing",
//       "description": "testing from ui",
//       "createdat": "2020-09-25T19:15:05.16103",
//       "updatedat": null
//     },
//     {
//       "id": 13,
//       "title": "Testing",
//       "description": "Check Whether working or not",
//       "createdat": "2020-09-28T05:37:29.923677",
//       "updatedat": null
//     },
//     {
//       "id": 14,
//       "title": "Testing",
//       "description": "testing from ui",
//       "createdat": "2020-09-28T09:44:39.370626",
//       "updatedat": null
//     },
//     {
//       "id": 13,
//       "title": "Testing",
//       "description": "Check Whether working or not",
//       "createdat": "2020-09-28T05:37:29.923677",
//       "updatedat": null
//     },
//     {
//       "id": 14,
//       "title": "Testing",
//       "description": "testing from ui",
//       "createdat": "2020-09-28T09:44:39.370626",
//       "updatedat": null
//     },
//     {
//       "id": 13,
//       "title": "Testing",
//       "description": "Check Whether working or not",
//       "createdat": "2020-09-28T05:37:29.923677",
//       "updatedat": null
//     },
//     {
//       "id": 14,
//       "title": "Testing",
//       "description": "testing from ui",
//       "createdat": "2020-09-28T09:44:39.370626",
//       "updatedat": null
//     },
//     {
//       "id": 13,
//       "title": "Testing",
//       "description": "Check Whether working or not",
//       "createdat": "2020-09-28T05:37:29.923677",
//       "updatedat": null
//     },
//     {
//       "id": 14,
//       "title": "Testing",
//       "description": "testing from ui",
//       "createdat": "2020-09-28T09:44:39.370626",
//       "updatedat": null
//     },
//     {
//       "id": 13,
//       "title": "Testing",
//       "description": "Check Whether working or not",
//       "createdat": "2020-09-28T05:37:29.923677",
//       "updatedat": null
//     },
//     {
//       "id": 14,
//       "title": "Testing",
//       "description": "testing from ui",
//       "createdat": "2020-09-28T09:44:39.370626",
//       "updatedat": null
//     },
//     {
//       "id": 8,
//       "title": "Test Message",
//       "description": "Announcement from frontend",
//       "createdat": "2020-09-02T06:34:53.786087",
//       "updatedat": null
//     },
//     {
//       "id": 15,
//       "title": "testing",
//       "description": "Have a great day!!",
//       "createdat": "2020-10-15T12:48:57.782708",
//       "updatedat": null
//     }
//   ]
//   const [scrollAnim] = useState(new Animated.Value(0));
//   const [offsetAnim] = useState(new Animated.Value(0));
//   const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
//     Animated.add(
//       scrollAnim.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, 1],
//         extrapolateLeft: 'clamp'
//       }),
//       offsetAnim
//     ), 0, 1
//   ));
//   const HEADER_HEIGHT = 80

//   const navbarTranslate = clampedScroll.interpolate({
//     inputRange: [0, HEADER_HEIGHT],
//     outputRange: [0, -HEADER_HEIGHT],
//     extrapolate: 'clamp'
//   });
//   const header = (
//     <View style={[styles.container, styles.header]}>
//       <Text>Header content</Text>
//     </View>
//   )
//   // const scrollY = new Animated.Value(0)
//   // const diffClamp = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT)
//   // const translateY = diffClamp.interpolate({
//   //   inputRange: [0, HEADER_HEIGHT],
//   //   outputRange: [0, -HEADER_HEIGHT],
//   //   extrapolate :  'clamp'
//   // })


//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Animated.View
//         style={{
//           transform: [
//             { translateY: translateY }
//           ],
//           // elevation: 4,
//           // zIndex: 100,
//           height:80,
//         }}
//       >{header}
//       </Animated.View> */}
//           <Animated.View 
//         style={[styles.header, {
//           transform: [{ translateY: navbarTranslate }]
//         }]}
//         onLayout={(event) => {
//           let {height} = event.nativeEvent.layout;
//           setClampedScroll(Animated.diffClamp(
//             Animated.add(
//               scrollAnim.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [0, 1],
//                 extrapolateLeft: 'clamp'
//               }),
//               offsetAnim
//             ), 0, height)
//           );
//         }}
//       >{header}</Animated.View>
//       <Animated.FlatList
//       style={{
//       //  position:'absolute',
//        top : 0,
//        left : 0,
//        right: 0,
//         elevation: 4,
//         zIndex: 100,
//       }}
//         data={data}
//         renderItem={({ item }) => {
//           return <View>
//             <Text>{item.createdat}</Text>
//             <Text >{item.title}</Text>
//             <Text >{item.description}</Text>
//           </View>
//         }}
//         contentInset={{ 0: HEADER_HEIGHT }}
//         contentOffset={{ y: -HEADER_HEIGHT }}
//         // alwaysBounceVertical={false}
//         // bounces={false}
//         scrollEventThrottle={16}
//         keyExtractor={(item, i) => i.toString()}
//         // onScroll={(e) => {
//         //   scrollY.setValue(e.nativeEvent.contentOffset.y),{useNativeDriver: true}
//         // }}
//         onScroll={Animated.event(
//           [
//             {
//               nativeEvent: {
//                 contentOffset: { y: scrollAnim }
//               }
//             }
//           ],
//           { useNativeDriver: true }
//         )}
//       >
//        </Animated.FlatList>
//     </View>
//   );
// }
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     backgroundColor: '#FF0000',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })
// export default App
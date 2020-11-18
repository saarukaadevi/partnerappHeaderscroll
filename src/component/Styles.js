import {StyleSheet,Dimensions} from 'react-native'
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signuptext: {
    color: 'blue',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    marginTop: 20,
  },
  picture: {
    flex: 1,
    resizeMode: 'cover',
  },
  textInputWithIconParent: {
    position: 'relative',
    marginTop: 10,
    flex: 1
  },
  textInputIcon: {
    position: 'absolute',
    bottom: 12,
    left: 6,
    color: 'white',
    fontSize: 21
  },
  textInput: {
    height: 46,
    width: 220,
    fontSize: 21,
    paddingLeft: 40,
    color: 'white'
  },
  logocontainer: {
    paddingTop: 220,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoimage: {
    width: 80,
    height: 80,
  },
  logotext: {
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  }
});
export default styles
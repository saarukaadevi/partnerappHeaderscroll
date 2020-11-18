import React, {
  useState
} from 'react';
import {StyleSheet, View,Text,Animated} from 'react-native';
const data = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
];
  

const HEADER_HEIGHT = 100;

function App() {
  const [scrollAnim] = useState(new Animated.Value(0));
  const [offsetAnim] = useState(new Animated.Value(0));
  const [clampedScroll, setClampedScroll] = useState(Animated.diffClamp(
    Animated.add(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp'
      }),
      offsetAnim
    ), 0, 1
  ));

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp'
  });

  const _renderItem = ({ item }) => {
    return (
      <View >
        <Text>{item}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[styles.header, {
          transform: [{ translateY: navbarTranslate }]
        }]}
        onLayout={(event) => {
          let {height} = event.nativeEvent.layout;
          setClampedScroll(Animated.diffClamp(
            Animated.add(
              scrollAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
              }),
              offsetAnim
            ), 0, height)
          );
        }}
      >
        <Text style={styles.headerText}>HEADER</Text>
      </Animated.View>
      <Animated.FlatList 
      contentContainerStyle={ Platform.OS === 'android' ? { paddingTop: HEADER_HEIGHT } : {} }
        // contentInset={{ top: HEADER_HEIGHT }}
        // contentOffset={{ y: -HEADER_HEIGHT }}
        // bounces={false}
        // scrollEventThrottle={16}
        // style={{ flexGrow: 1, width: '100%' }}
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item, i) => i.toString()}

        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollAnim }
              }
            }
          ],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 10000,
    elevation:4
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default App;


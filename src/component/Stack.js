import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main'
import Content from '../component/Content'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Content" component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack
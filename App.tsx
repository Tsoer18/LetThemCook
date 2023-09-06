import React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import RecipeScreen from './RecipeScreen';

const navigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator>
        <navigator.Screen name="RecipeScreen" component={RecipeScreen}/>
      </navigator.Navigator>
    </NavigationContainer>
  );
};

export default App;

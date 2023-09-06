import React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import RecipeScreen from './RecipeScreen';

const navigator = createStackNavigator();

//Header options
const HeaderBarCustomization = {
  title: 'Let them cook',
  
  headerStyle: {
    backgroundColor: '#2DB666',
  },
  headerTintColor: 'white',
  elevation: 50,
};

const App = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator>
        <navigator.Screen name="RecipeScreen" component={RecipeScreen} options={HeaderBarCustomization}/>
      </navigator.Navigator>
    </NavigationContainer>
  );
};

export default App;

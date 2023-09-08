import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import RecipeScreen from './RecipeScreen';
import AddRecipe from './AddRecipe';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

//Header options
const HeaderBarCustomization = {
  headerStyle: {
    backgroundColor: '#2DB666',
  },
  headerTintColor: 'white',
  elevation: 50,
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RecipeScreen} options={HeaderBarCustomization}/>
        <Tab.Screen name="New recipe" component={AddRecipe} options={HeaderBarCustomization}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

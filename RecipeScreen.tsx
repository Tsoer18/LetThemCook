import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';


const RecipeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundButton} onPress={() => navigation.navigate('AddRecipeScreen',{})}>
        <Image source={require('./plusIcon.png')} style={styles.roundButton}/>
      </TouchableOpacity>
    </View>
  );
};

const handlePress = ({}) =>{
  //navigation.navigate('AddrecipeScreen');
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      left: 140,
      top: 240,
    },

    roundButton:{
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: '#2DB666',
    },
  }
);

export default RecipeScreen;
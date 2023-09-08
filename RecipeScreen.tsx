import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';


const RecipeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundButton} >
        <Image source={require('./plusIcon.png')} style={styles.roundButton}/>
      </TouchableOpacity>
    </View>
  );
};

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
      
      //justifyContent: 'center',
      //alignItems: 'center',
    },
  }
);

export default RecipeScreen;
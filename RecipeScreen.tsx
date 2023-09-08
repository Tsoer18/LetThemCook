import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const RecipeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundButton}>
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
      width: 90,
      height: 90,
      borderRadius: 100,
      backgroundColor: '#2DB666',
      
      //justifyContent: 'center',
      //alignItems: 'center',
    },
  }
);

export default RecipeScreen;
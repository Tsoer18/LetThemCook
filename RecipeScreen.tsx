import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';


const RecipeScreen = () => {
  return (
    <View style={styles.container}>

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
  }
);

export default RecipeScreen;
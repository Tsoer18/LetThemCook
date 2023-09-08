import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';


const RecipeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

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
  }
);

export default RecipeScreen;
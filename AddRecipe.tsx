import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const AddRecipe = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={'Name of recipe'}/>
            

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    input: {
        height: 40,
        width: 260,
        borderRadius: 15,

        margin: 12,
        borderWidth: 1,
        padding: 10,

        color: 'black',
      },
  });

export default AddRecipe;
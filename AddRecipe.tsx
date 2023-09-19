import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { CALLBACK_TYPE } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import * as ImagePicker from 'react-native-image-picker';



const AddRecipe = () => {
    
    const [imageURI, setImageURI] = useState();
    
    
    const handleImagePicker = () =>{
        
    /*
        let options= {
            Title: 'Select image',
            MediaType: photo,
            storageOptions: {
                skipBackup: true
            }
        }



        ImagePicker.launchImageLibrary(options);

    // You can also use as a promise without 'callback':
    const result = await launchImageLibrary(options);
    */
    }

    const [recipeName, onChangeRecipeName] = React.useState('');
    const [ingredient1, onChangeIngredient1] = React.useState('');
    const [amount, onChangeAmount] = React.useState('');

    const units = [{label: 'gram', value: 'g'}]

    const [value, setValue] = React.useState('');

    const handleAddIngredient = () =>{

    }
    
    return (
        <View style={styles.container}>
           
            <TouchableOpacity onPress={handleImagePicker}>
                <Text style={styles.text}>
                    Name of Recipe
                </Text>
            </TouchableOpacity>

            <TextInput
                style={styles.inputField}
                value={recipeName}
                placeholder='Add a recipe title'
                placeholderTextColor='grey'
                onChangeText={onChangeRecipeName}

            />

            <Text style={styles.text}>
                Ingredients
            </Text>

            <View style={styles.flex}>

                <TextInput
                    style={styles.inputFieldIngredient}
                    value={ingredient1}
                    placeholder='Add an ingredient'
                    placeholderTextColor='grey'
                    onChangeText={onChangeIngredient1}
                />

                <TextInput
                    style={styles.inputFieldIngredient}
                    value={amount}
                    placeholder='amount'
                    placeholderTextColor= 'grey'
                    onChangeText={onChangeAmount}
                />
                
                <Dropdown 
                    style={styles.dropDown}
                    labelField="label"
                    data={units}
                    onChange={ item => {setValue(item.value );}}
                    valueField="value"
                    value={value}
                />

            </View>
    
            <TouchableOpacity onPress={handleAddIngredient}>
                <Text style={styles.addFieldText}>
                    add ingredient
                </Text>
            </TouchableOpacity>

            <Text style={styles.text}>
                Process
            </Text>
        </View>
        
    );
   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    inputField: {
        height: 40,
        width: 300,
        borderRadius: 6,

        margin: 5,
        borderWidth: 1,
        padding: 10,

        color: 'black',
      },
      inputFieldIngredient: {
        height: 40,
        
        borderRadius: 6,

        margin: 5,
        borderWidth: 1,
        padding: 10,

        color: 'black',
      },
      text: {
        color: 'black',
        fontSize: 18
      },
      addFieldText: {
        color: 'grey',
        fontSize: 18,
        textDecorationLine: 'underline'
      },
      flex: {
          flex: 1,
          flexDirection: 'row',
      },
      dropDown: {
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 6,

          height: 40,
          width: 80,

          padding: 10
          
      }

  });

export default AddRecipe;
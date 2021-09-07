import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle} >
      <Feather name="search"  style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.textInput} 
        placeholder="Search" 
        value={term}
        onChangeText={ onTermChange }
        onEndEditing={ onTermSubmit } />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#E1E1E1',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
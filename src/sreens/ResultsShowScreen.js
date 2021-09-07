import React, { useState,useEffect } from 'react';
import { Text, StyleSheet,Image,FlatList, View } from 'react-native';
import yelp from '../api/yelp';
import ContactBusiness from '../components/ContactBusiness';


const ResultsShowScreen = ({route}) => {
  const [ result, setResult ] = useState(null);
  const [ errorMessage, setErrorMessage ] = useState('');

  const detailBusinesses = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data)
      console.log(result);
    } catch (error) {
      console.log(er)
      setErrorMessage('Something went wrong!')
    }
    
  }
  useEffect(() => {
    detailBusinesses(route.params.id);
  },[]);
  
  if (!result) {
    return null;
  }

  return (
    <>
      
      <FlatList
        data={result.photos}
        keyExtractor={ (photo)=> photo }
        horizontal
        renderItem={ ({item})=> {
          console.log(item);
          return (
            <Image style={ styles.imageList } source={ { uri: item }}  />
          )
        }}
      />
      <Text style={ styles.name }>{result.name}</Text>
      <ContactBusiness phone={result.phone} />
    </>
  );
}

const styles = StyleSheet.create({
  imageFirst: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 5
  },
  imageList: {
    width: 300,
    borderRadius: 10,
    margin: 5
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5,
    textDecorationLine: 'underline'
  },
  phone: {
    alignContent: 'center'
  }
});

export default ResultsShowScreen;
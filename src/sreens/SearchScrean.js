import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const SearchScrean = () => {
  const [ term, setTerm ] = useState('');
  const [ results, setResults ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ loading, setLoading ] = useState(true);

  const searchApi = async (searchTerm) => {
    try {
      setLoading(true);
      const response = await yelp.get('/search',{
        params: {
          term: searchTerm,
          location: 'chicago',
          limit: 50
        }
      });
      console.log(response.data.businesses.length);
      setResults(response.data.businesses);
      setLoading(false);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
    
  }
  useEffect(()=>{ searchApi('pasta') },[]);

  const filterResultsByPrice = (price) => {
    return results.filter(result =>{
      return result.price == price;
    });
  }
  //searchApi('pasta');
  return (
    <>
      <SearchBar
        term={ term } 
        onTermChange={ (newTerm) => setTerm(newTerm)} 
        onTermSubmit= { ()=> { searchApi(term)} } />
        { errorMessage ? <Text>{errorMessage}</Text> : null }
      <ScrollView style={styles.scroll}>
        { loading ? <ActivityIndicator color="#E1E1E1" size={100} /> : null }
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} /> 
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} /> 
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} /> 
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  container: {
    flex: 1
  }
})

export default SearchScrean;
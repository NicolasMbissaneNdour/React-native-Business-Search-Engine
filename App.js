import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScrean from './src/sreens/SearchScrean';
import { NavigationContainer } from '@react-navigation/native';
import ResultsShowScreen from './src/sreens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScrean}
          options={{title: 'Business Search'}} />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
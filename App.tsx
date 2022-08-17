import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Profile from './screens/Profile';
import MyCarousel from './screens/MyCarousel';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Carousel" component={MyCarousel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ZipCodeScreen}
          options={{
          title: 'Choose a zip code',
          headerStyle: {
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
          title: 'Weather',
          headerStyle: {
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

        </Stack.Navigator>
      </NavigationContainer>
  );
}



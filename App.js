import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/homeScreen';
import TestScreen from './screens/testScreen';
import ScoresScreen from './screens/scoresScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
        <Drawer.Screen name="Scores" component={ScoresScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

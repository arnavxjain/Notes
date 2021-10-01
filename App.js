import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AllNotes from './screens/AllNotes';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#FFFFFF", height: 98 },
  headerTitleStyle: { alignSelf: 'center', color: "black", fontSize: 19, fontWeight: "700" }
}

export default function App() {

  return (
    <NavigationContainer >
      <StatusBar style="auto"/>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen options={{header: () => null}} name="Home" component={Home}/>
        <Stack.Screen options={{header: () => null}} name="AllNotes" component={AllNotes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {

  }
});
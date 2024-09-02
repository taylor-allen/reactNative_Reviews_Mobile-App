import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#475D8C",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: () => <Header navigation={navigation} title='About the App'/>,
      }}
    >
      <Stack.Screen
        name="About Page"
        component={About}
        options={{ title: "About Details" }}
      />
    </Stack.Navigator>
  );
}
